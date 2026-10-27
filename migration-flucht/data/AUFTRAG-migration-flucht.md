# Auftrag: Zielgruppe „Migration & Flucht“ (Wegweiser)

Regeln: `Wegweiser/pipeline/AUFTRAG.md` gilt (Stand September 2026, Primärquellen, keine erfundenen
Zahlen/URLs, zweistufig, RDG, nur `<p> <h3> <ul><li> <strong> <a>`). Belege: „…, abgerufen 24.09.2026“.

## Besonderheit dieser Gruppe
Fokus: **Verfahren, die Betroffene selbst in die Hand nehmen können** (Antrag, Auskunft, Widerspruch,
Untätigkeitsklage) – standardisierbar, ohne Anwalt einreichbar, mit klarer Rechtsgrundlage. Jede Seite
enthält im `fach_html` als letzten Abschnitt `<h3>Selbst machen oder Anwalt?</h3>` mit: Vertretungszwang
ja/nein (§ 67 VwGO, § 73 SGG), typische Kosten und wer sie trägt, wann anwaltliche Hilfe nötig ist.
Rechtsstand: GEAS/EU-Asylpakt gilt seit 12.06.2026 (nur nennen, wo einschlägig). Frühere E4R-Seiten
(`Europe4Refuge/deutschland/themen/*.html`, Rechtsstand 2025/26) dürfen als Einstieg gelesen werden,
jede Zahl aber gegen die Primärquelle prüfen.

## Dateien
Je Seite eine Datei `Wegweiser/migration-flucht/data/seiten/<id>.json` mit genau dem Seiten-Objekt
aus AUFTRAG.md (id, kategorie, titel, icon, teaser, schlagworte, kurz_html, schritte, fristen,
achtung, fach_html, zustaendig, belege, siehe_auch, stand). Nicht bauen, kein inhalte.json schreiben.

## Kategorien (ids fest)
- `grundlagen` – Überblick
- `aufenthalt-arbeit` – Aufenthalt, Arbeit, Staatsangehörigkeit
- `familie-abschluesse` – Familie und Abschlüsse
- `behoerde-untaetig` – Wenn die Behörde nicht handelt
- `akten-daten` – Akten und Daten
- `leistungen-kosten-hilfe` – Leistungen, Kosten und Hilfe

## Seiten (ids fest; `siehe_auch` nur aus dieser Liste)
1. `ueberblick-selbst-handeln` (grundlagen): Welche Verfahren Betroffene ohne Anwalt führen können; Vertretungszwang (§ 67 VwGO erst ab OVG/BVerwG, § 73 SGG), Formvorschriften (Schriftform, elektronisch, Niederschrift bei Rechtsantragstelle § 81 VwGO / § 90 SGG), typische Fristen im Ausländer-/Asylrecht (1 Woche / 2 Wochen § 74 AsylG, 1 Monat § 74 VwGO), Übersicht der 14 anderen Seiten.
2. `arbeitserlaubnis-beschaeftigungserlaubnis` (aufenthalt-arbeit): Erlaubnis zur Beschäftigung für Asylsuchende (§ 61 AsylG, Wartefrist), Geduldete (§ 60a Abs. 6 AufenthG, Arbeitsverbote), Zustimmung BA (§ 39 AufenthG, § 32 BeschV), Antrag bei Ausländerbehörde, Ausbildungs-/Beschäftigungsduldung (§§ 60c, 60d), Schutzberechtigte (unbeschränkt).
3. `einbuergerung-antrag` (aufenthalt-arbeit): Einbürgerung §§ 8, 10 StAG nach Reform 2024 (5 Jahre, Mehrstaatigkeit, Sprache B1, Einbürgerungstest, Lebensunterhalt), Abschaffung 3-Jahres-Turbo (Gesetz 2025, prüfen), Gebühr 255 €, Antrag/Online-Antrag je Land, Bearbeitungsdauer, Untätigkeitsklage bei langer Dauer (Verweis Seite 8).
4. `aufenthaltstitel-verlaengerung-fiktionsbescheinigung` (aufenthalt-arbeit): Verlängerung rechtzeitig beantragen (§ 81 Abs. 4 AufenthG Fortgeltungsfiktion), Fiktionsbescheinigung (§ 81 Abs. 5) einfordern, Niederlassungserlaubnis für Schutzberechtigte (§ 26 Abs. 3/4), Terminprobleme, Nachweis der Antragstellung.
5. `wohnsitzauflage-umverteilung` (aufenthalt-arbeit): Wohnsitzregelung § 12a AufenthG (3 Jahre, Aufhebung/Änderung Abs. 5: Arbeit ≥ 15 h/Woche und Einkommen, Ausbildung, Familie, Härte), Wohnsitzauflage bei Duldung (§ 61 Abs. 1d), Umverteilung/länderübergreifende Verteilung im Asylverfahren (§§ 50, 51 AsylG), Residenzpflicht (§ 56 AsylG, Ende nach 3 Monaten § 59a) – Antrag selbst stellen.
6. `familiennachzug-antrag` (familie-abschluesse): Nachzug zu anerkannten Flüchtlingen (§ 29 Abs. 2 AufenthG, fristwahrende Anzeige 3 Monate, Privilegierung), zu subsidiär Schutzberechtigten (§ 36a AufenthG; Aussetzung seit Juli 2025 für 2 Jahre – Gesetz und Datum prüfen), Visumverfahren Auslandsvertretung, Terminvergabe, Eltern-Nachzug zu Minderjährigen (§ 36 Abs. 1), Dokumente.
7. `anerkennung-abschluesse` (familie-abschluesse): BQFG (Antrag ohne Wohnsitz möglich, Entscheidung 3 Monate § 6 Abs. 3 BQFG, Qualifikationsanalyse § 14), ZAB/anabin Zeugnisbewertung, Kosten und Gebühren, Anerkennungszuschuss, IQ-Netzwerk, reglementierte vs. nicht reglementierte Berufe, Hotline „Arbeiten und Leben in Deutschland“.
8. `untaetigkeitsklage-auslaenderbehoerde` (behoerde-untaetig): Untätigkeitsklage § 75 VwGO (3 Monate ab Antrag, zureichender Grund, Aussetzung durch Gericht), bei Ausländerbehörde/Einbürgerungsbehörde (Aufenthaltstitel, Niederlassung, Einbürgerung), ohne Anwalt zulässig (§ 67 Abs. 1 VwGO), Erledigung nach Bescheidung und Kosten (§ 161 Abs. 2 und 3 VwGO), Streitwert (§ 52 Abs. 2 GKG Auffangwert 5.000 €), Gerichtskosten (KV GKG Nr. 5110/5111, Beträge nur aus Quelle), Muster-Aufbau der Klage (Adressat, Antrag, Sachverhalt, Anlagen), Rechtsantragstelle.
9. `visum-untaetigkeitsklage` (behoerde-untaetig): Untätigkeitsklage im Visumverfahren (Familiennachzug, Erwerbsmigration) gegen die Bundesrepublik (Auswärtiges Amt), Zuständigkeit VG Berlin (§ 52 Nr. 2 Satz 3 VwGO), Terminklage vs. Untätigkeitsklage nach Antragstellung, Remonstration, Verfahrensdauer, Kosten, was das Gericht tatsächlich erreichen kann.
10. `bamf-verfahrensdauer-untaetigkeit` (behoerde-untaetig): Auskunftsanspruch zur Verfahrensdauer (§ 24 Abs. 4 AsylG nach 6 Monaten), Untätigkeitsklage gegen BAMF (§ 75 VwGO, Besonderheiten AsylG, Kostenfreiheit § 83b AsylG), realistische Wirkung, Verfahrensdauer laut BAMF-Statistik (nur belegt), Dublin-Fristen als Sonderfall nur kurz.
11. `azr-auskunft` (akten-daten): Selbstauskunft aus dem Ausländerzentralregister (§ 34 AZRG, Bundesverwaltungsamt, Formular, Identitätsnachweis, kostenlos), Inhalt des AZR (§ 3 AZRG), Berichtigung/Löschung (§ 37 AZRG), Auskunft aus der Visadatei, Bedeutung für Einbürgerung/Voraufenthalte.
12. `akteneinsicht-auslaenderakte` (akten-daten): Akteneinsicht Ausländerbehörde/BAMF (§ 29 VwVfG, Grenzen), im Gerichtsverfahren (§ 100 VwGO), Auskunft nach Art. 15 DSGVO (Frist 1 Monat), Anhörungsprotokoll anfordern, Kopien/Kosten, Antrag formulieren.
13. `leistungskuerzung-asylblg-widerspruch` (leistungen-kosten-hilfe): Anspruchseinschränkung § 1a AsylbLG, Grundleistungen § 3/3a (Beträge 2026 nur aus Quelle), Bezahlkarte (§ 3 Abs. 2 AsylbLG, Bargeldbetrag, Ausnahmen je Land nur belegt), Widerspruch (wo vorgesehen) und Klage/Eilantrag beim Sozialgericht (§ 86b SGG), Gerichtskostenfreiheit § 183 SGG, kein Anwaltszwang § 73 SGG.
14. `prozesskostenhilfe-beratungshilfe` (leistungen-kosten-hilfe): PKH im Verwaltungs-/Sozialgerichtsverfahren (§ 166 VwGO, § 73a SGG i. V. m. §§ 114 ff. ZPO), Erklärung über persönliche und wirtschaftliche Verhältnisse (amtliches Formular), Erfolgsaussicht, Beiordnung, Raten (§ 115 ZPO, Freibeträge 2026 nur aus Quelle), Beratungshilfe (BerHG, 15 € Gebühr, Berechtigungsschein Amtsgericht), Kosten im Asylverfahren (§ 83b AsylG).
15. `beratung-anlaufstellen` (leistungen-kosten-hilfe): Asylverfahrensberatung (§ 12a AsylG), Migrationsberatung für Erwachsene (MBE), Jugendmigrationsdienste, Flüchtlingsräte der Länder, Refugee Law Clinics, Anwaltssuche (Rechtsanwaltskammern, DAV), Beratungshilfe, Verbraucherzentralen für Verträge. Nur belegte bundesweite Stellen, keine Adressen/Telefonnummern erfinden.

Rückgabe pro Agent: 3 Zeilen – Pfade, offene Lücken/unsichere Punkte, Angaben mit niedrigster Konfidenz.
