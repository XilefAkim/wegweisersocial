#!/usr/bin/env python3
"""Fügt data/seiten/<id>.json in der Reihenfolge aus AUFTRAG-migration-flucht.md zu inhalte.json zusammen.

Aufruf: python3 Wegweiser/migration-flucht/data/zusammenfuegen.py ; danach pipeline/build.py migration-flucht
"""
import json, re
from pathlib import Path

D = Path(__file__).resolve().parent
KATEGORIEN = [
    {"id": "grundlagen", "titel": "Überblick", "icon": "📌", "beschreibung": "Was Sie selbst tun können, Fristen, Formen."},
    {"id": "aufenthalt-arbeit", "titel": "Aufenthalt, Arbeit, Staatsangehörigkeit", "icon": "🪪", "beschreibung": "Beschäftigungserlaubnis, Einbürgerung, Verlängerung, Wohnsitz."},
    {"id": "familie-abschluesse", "titel": "Familie und Abschlüsse", "icon": "👨‍👩‍👧", "beschreibung": "Familiennachzug, Anerkennung ausländischer Abschlüsse."},
    {"id": "behoerde-untaetig", "titel": "Wenn die Behörde nicht handelt", "icon": "⏳", "beschreibung": "Untätigkeitsklage gegen Ausländerbehörde, Auslandsvertretung, BAMF."},
    {"id": "akten-daten", "titel": "Akten und Daten", "icon": "🔎", "beschreibung": "AZR-Auskunft, Akteneinsicht, DSGVO."},
    {"id": "leistungen-kosten-hilfe", "titel": "Leistungen, Kosten und Hilfe", "icon": "🧭", "beschreibung": "AsylbLG-Kürzung, Prozesskostenhilfe, Beratung."},
]
ORDER = re.findall(r"^\d+\. `([a-z0-9-]+)`", (D / "AUFTRAG-migration-flucht.md").read_text(encoding="utf-8"), re.M)
seiten = []
for i in ORDER:
    p = D / "seiten" / f"{i}.json"
    if not p.exists():
        print("FEHLT:", i); continue
    s = json.load(open(p, encoding="utf-8"))
    assert s["id"] == i, (s["id"], i)
    seiten.append(s)
json.dump({"kategorien": KATEGORIEN, "seiten": seiten}, open(D / "inhalte.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(seiten), "Seiten ->", D / "inhalte.json")
