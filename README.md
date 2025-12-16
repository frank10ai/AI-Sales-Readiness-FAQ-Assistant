# GTM Sales Readiness FAQ Assistant

Ein interaktiver Wissensassistent für Vertriebsmitarbeiter, der aktuelle Informationen zu Sales- und Marketing-Prozessen bereitstellt.

## Features

### FAQ-Chatbot
- Dynamisches Eingabefeld für Fragen zu Sales und Marketing
- Kurze, präzise Antworten mit Quellenangaben
- Vorschlag-Chips für häufige Fragen
- Unterstützung für Deutsch

### Evaluations-Checkliste
- 7-Punkte-Checkliste zur Bewertung der Sales Readiness
- Fortschrittsanzeige mit Prozentangabe
- Notizfelder für Annahmen und Anmerkungen
- Lokale Speicherung des Fortschritts

### Dokumentenzugriff
- Integration mit Google Drive für zentrale Dokumentablage
- Übersicht über verfügbare Sales-Materialien
- Konfigurierbare Drive-URL

## Themengebiete

Der Assistent liefert Informationen zu:

1. **Sales Playbook & Prozesse** - BANT-Qualifizierung, Discovery Calls, Sales-Phasen
2. **Preisgestaltung & Rabatte** - Preismodelle, Rabattrichtlinien, ROI-Argumentation
3. **Einwandbehandlung** - Strategien für "zu teuer", Timing, Wettbewerber
4. **Wettbewerbsanalysen** - Differenzierungsmerkmale, Stärken/Schwächen
5. **Produktinformationen** - Features, Integrationen, Roadmap

## Design

Corporate Elegance Theme:
- **Primary:** Deep Navy Blue (#1e3a8a)
- **Secondary:** Slate Gray (#475569)
- **Accent:** Emerald Green (#059669)
- **Background:** Cool Gray (#f8fafc)
- **Highlights:** Gold (#d97706)

## Installation

1. Repository klonen oder Dateien herunterladen
2. `index.html` im Browser öffnen
3. Optional: Google Drive URL in den Einstellungen konfigurieren

## Projektstruktur

```
AI-Sales-Readiness-FAQ-Assistant/
├── index.html          # Hauptanwendung
├── css/
│   └── styles.css      # Corporate Elegance Styling
├── js/
│   ├── app.js          # Anwendungslogik
│   └── faq-data.js     # FAQ-Wissensdatenbank
└── README.md
```

## Anpassung

### FAQ-Daten erweitern

Die Wissensdatenbank in `js/faq-data.js` kann einfach erweitert werden:

```javascript
{
    id: 'unique-id',
    keywords: ['suchbegriff1', 'suchbegriff2'],
    question: 'Die Frage',
    answer: '<p>Die Antwort mit HTML-Formatierung</p>',
    source: 'Dokumentname',
    category: 'playbook|pricing|objections|competitors|products|general',
    assumptions: 'Optionale Anmerkungen oder Annahmen'
}
```

### Google Drive Integration

1. Navigieren Sie zur "Dokumente"-Ansicht
2. Geben Sie die URL Ihres Google Drive Ordners ein
3. Klicken Sie auf "Speichern"

Die URL wird lokal im Browser gespeichert.

## Browser-Kompatibilität

- Chrome (empfohlen)
- Firefox
- Safari
- Edge

## Lizenz

Proprietär - Nur für internen Gebrauch
