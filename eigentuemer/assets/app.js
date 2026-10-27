
/* Suche über alle Seiten. Der Index liegt als JS-Datei vor, damit die Suche
   auch beim Öffnen per Doppelklick (file://) ohne Webserver funktioniert. */
(function () {
  var feld = document.getElementById('suche');
  var box  = document.getElementById('treffer');
  if (!feld || !box || typeof SUCHINDEX === 'undefined') return;
  var praefix = document.body.getAttribute('data-pfad') || '';

  function normal(s) {
    return (s || '').toLowerCase()
      .replace(/ä/g, 'a').replace(/ö/g, 'o').replace(/ü/g, 'u').replace(/ß/g, 'ss');
  }
  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
  function ausschnitt(text, q) {
    var i = normal(text).indexOf(q);
    if (i < 0) return escapeHtml(text.slice(0, 120)) + ' …';
    var a = Math.max(0, i - 55), b = Math.min(text.length, i + q.length + 75);
    var t = escapeHtml((a > 0 ? '… ' : '') + text.slice(a, b) + (b < text.length ? ' …' : ''));
    var re = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'ig');
    return t.replace(re, function (m) { return '<mark>' + m + '</mark>'; });
  }

  var timer = null;
  feld.addEventListener('input', function () {
    clearTimeout(timer);
    timer = setTimeout(suchen, 90);
  });
  feld.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { feld.value = ''; box.classList.remove('an'); }
  });
  document.addEventListener('click', function (e) {
    if (!box.contains(e.target) && e.target !== feld) box.classList.remove('an');
  });

  function suchen() {
    var q = normal(feld.value.trim());
    if (q.length < 2) { box.classList.remove('an'); box.innerHTML = ''; return; }
    var res = [];
    for (var i = 0; i < SUCHINDEX.length; i++) {
      var s = SUCHINDEX[i], p = 0;
      if (normal(s.titel).indexOf(q) >= 0) p += 100;
      for (var j = 0; j < s.schlagworte.length; j++) {
        if (normal(s.schlagworte[j]).indexOf(q) >= 0) { p += 40; break; }
      }
      if (normal(s.text).indexOf(q) >= 0) p += 10;
      if (p > 0) res.push({ s: s, p: p });
    }
    res.sort(function (a, b) { return b.p - a.p; });
    if (!res.length) {
      box.innerHTML = '<div class="leer">Kein Treffer. Versuchen Sie ein anderes Wort, ' +
        'zum Beispiel „Anhörung“, „Bezahlkarte“, „Duldung“ oder „Frist“.</div>';
      box.classList.add('an');
      return;
    }
    var h = '';
    for (var k = 0; k < Math.min(res.length, 12); k++) {
      var s = res[k].s;
      h += '<a href="' + praefix + 'themen/' + s.id + '.html">' +
           '<div class="k">' + escapeHtml(s.kategorie) + '</div>' +
           '<div class="t">' + escapeHtml(s.titel) + '</div>' +
           '<div class="s">' + ausschnitt(s.text, q) + '</div></a>';
    }
    if (res.length > 12) {
      h += '<a href="' + praefix + 'schlagworte.html"><div class="t">Alle ' + res.length +
           ' Treffer im Schlagwortregister ansehen</div></a>';
    }
    box.innerHTML = h;
    box.classList.add('an');
  }

  /* Registerfilter auf schlagworte.html */
  var rf = document.getElementById('regfilter');
  if (rf) {
    rf.addEventListener('input', function () {
      var q = normal(rf.value.trim());
      var eintraege = document.querySelectorAll('.reg li');
      for (var i = 0; i < eintraege.length; i++) {
        var el = eintraege[i];
        el.style.display = (!q || normal(el.getAttribute('data-wort')).indexOf(q) >= 0) ? '' : 'none';
      }
      var bloecke = document.querySelectorAll('.reg .buchstabe');
      for (var b = 0; b < bloecke.length; b++) {
        var sichtbar = bloecke[b].querySelectorAll('li:not([style*="none"])').length;
        bloecke[b].style.display = sichtbar ? '' : 'none';
      }
    });
  }
})();
