# Live-Suche Setup Anleitung

Diese Anleitung erklärt, wie Sie die Live-Suche aktivieren, damit der Bot direkt Ihre Google Docs durchsucht.

## Übersicht

```
┌──────────────┐    ┌─────────────────────┐    ┌──────────────────┐
│   Browser    │───▶│  Google Apps Script │───▶│   Google Docs    │
│   (Bot UI)   │◀───│   (Web App)         │◀───│   (Playbook)     │
└──────────────┘    └─────────────────────┘    └──────────────────┘
```

## Schritt 1: Google Apps Script erstellen

1. Öffnen Sie [Google Apps Script](https://script.google.com)
2. Klicken Sie auf **"Neues Projekt"**
3. Benennen Sie das Projekt: `DeepL Sales Assistant`
4. Löschen Sie den vorhandenen Code
5. Kopieren Sie den Inhalt aus `google-apps-script/Code.gs` in den Editor

## Schritt 2: Dokument-IDs konfigurieren

Im Code finden Sie die Konstante `DOCUMENT_IDS`. Hier sind Ihre Dokumente eingetragen:

```javascript
const DOCUMENT_IDS = [
  {
    id: '1cBaFUPaBVz-WQVSQTYmhbKlwZDlCnY1QngZFtAR-Y2A', // DeepL Sales Playbook
    name: 'DeepL Sales Playbook',
    keywords: ['preis', 'produkt', 'einwand', ...]
  }
  // Weitere Dokumente hier hinzufügen
];
```

**Dokument-ID finden:**
Die ID steht in der Google Docs URL:
```
https://docs.google.com/document/d/[HIER_IST_DIE_ID]/edit
```

## Schritt 3: Script testen

1. Wählen Sie die Funktion `testSearch` aus dem Dropdown
2. Klicken Sie auf **"Ausführen"**
3. Beim ersten Mal: Autorisierung bestätigen
4. Prüfen Sie die Logs (Ansicht > Logs)

## Schritt 4: Als Web-App deployen

1. Klicken Sie auf **"Bereitstellen" > "Neue Bereitstellung"**
2. Wählen Sie **"Web-App"**
3. Konfiguration:
   - **Beschreibung:** `DeepL Sales Assistant API`
   - **Ausführen als:** `Ich selbst`
   - **Zugriff:** `Jeder`
4. Klicken Sie auf **"Bereitstellen"**
5. **Kopieren Sie die Web-App URL** (sieht so aus: `https://script.google.com/macros/s/XXX.../exec`)

## Schritt 5: URL im Frontend eintragen

Öffnen Sie `js/config.js` und tragen Sie Ihre URL ein:

```javascript
const CONFIG = {
    APPS_SCRIPT_URL: 'https://script.google.com/macros/s/IHRE_URL_HIER/exec',
    // ...
};
```

## Schritt 6: Testen

1. Öffnen Sie `index.html` im Browser
2. Stellen Sie eine Frage (z.B. "Was kostet DeepL?")
3. Der Bot sollte jetzt live Ihr Google Doc durchsuchen

---

## Fehlerbehebung

### "Keine Berechtigung"
- Prüfen Sie, dass das Google Doc für "Jeder mit dem Link" freigegeben ist
- Oder: Das Apps Script muss im selben Google Account wie das Dokument sein

### "CORS-Fehler"
- Deployen Sie erneut mit "Zugriff: Jeder"
- Stellen Sie sicher, dass Sie die richtige URL verwenden (endet mit `/exec`)

### "Keine Ergebnisse"
- Prüfen Sie die Logs in Google Apps Script
- Testen Sie mit der `testSearch` Funktion
- Überprüfen Sie die Dokument-ID

---

## Weitere Dokumente hinzufügen

Um weitere Dokumente zu durchsuchen:

```javascript
const DOCUMENT_IDS = [
  {
    id: '1cBaFUPaBVz-WQVSQTYmhbKlwZDlCnY1QngZFtAR-Y2A',
    name: 'DeepL Sales Playbook',
    keywords: ['preis', 'produkt', 'einwand']
  },
  {
    id: 'NEUE_DOKUMENT_ID_HIER',
    name: 'Industriereport 2024',
    keywords: ['markt', 'trend', 'wachstum']
  }
];
```

Nach Änderungen: **Neue Bereitstellung erstellen** (nicht nur speichern!)

---

## Architektur

| Komponente | Beschreibung |
|------------|--------------|
| `index.html` | Frontend UI (GitHub Pages) |
| `js/config.js` | Konfiguration mit Apps Script URL |
| `js/app.js` | Bot-Logik, ruft API auf |
| `js/faq-data.js` | Fallback-Datenbank (wenn API nicht erreichbar) |
| `Code.gs` | Google Apps Script (läuft in Google Cloud) |
