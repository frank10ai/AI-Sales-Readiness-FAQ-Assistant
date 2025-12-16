/**
 * DeepL Sales Assistant - Google Apps Script
 *
 * Dieses Script durchsucht Google Docs und gibt relevante Abschnitte zurück.
 *
 * SETUP:
 * 1. Gehe zu https://script.google.com
 * 2. Erstelle ein neues Projekt
 * 3. Kopiere diesen Code
 * 4. Passe DOCUMENT_IDS an (deine Dokument-IDs)
 * 5. Deploye als Web-App (Ausführen als: Ich, Zugriff: Jeder)
 * 6. Kopiere die Web-App URL in dein Frontend
 */

// ============================================================================
// KONFIGURATION - Hier deine Dokument-IDs eintragen
// ============================================================================

const DOCUMENT_IDS = [
  {
    id: '1cBaFUPaBVz-WQVSQTYmhbKlwZDlCnY1QngZFtAR-Y2A', // DeepL Sales Playbook
    name: 'DeepL Sales Playbook',
    keywords: ['preis', 'pricing', 'produkt', 'feature', 'einwand', 'wettbewerb', 'google', 'roi', 'sicherheit', 'datenschutz', 'glossar', 'api']
  }
  // Weitere Dokumente hier hinzufügen:
  // {
  //   id: 'DOKUMENT_ID_HIER',
  //   name: 'Dokumentname',
  //   keywords: ['keyword1', 'keyword2']
  // }
];

// Abschnitt-Marker (Überschriften im Dokument)
const SECTION_MARKERS = [
  '1. Produkt/Technologie',
  '2. Commercial/Pricing',
  '3. Case Studies',
  '4. Unique Selling Propositions',
  '5. DeepL vs. Google Translate',
  '6. Einwandbehandlung',
  'Produkt-FAQs',
  'Technische Limits',
  'Sicherheitsdokumente',
  'Aktuelle Preismodelle',
  'Rabattstrategien',
  'ROI-Metriken',
  'Wettbewerbsvergleiche',
  'Vertriebsempfehlung'
];

// ============================================================================
// HAUPTFUNKTION - Web App Entry Point
// ============================================================================

function doGet(e) {
  try {
    const query = e.parameter.q || '';
    const callback = e.parameter.callback || '';

    let responseData;

    if (!query) {
      responseData = {
        success: false,
        error: 'Keine Suchanfrage angegeben. Verwende ?q=deine+frage'
      };
    } else {
      const results = searchDocuments(query);
      responseData = {
        success: true,
        query: query,
        results: results
      };
    }

    // JSONP-Antwort wenn Callback angegeben
    if (callback) {
      const jsonpResponse = callback + '(' + JSON.stringify(responseData) + ')';
      return ContentService.createTextOutput(jsonpResponse)
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    // Standard JSON-Antwort
    return ContentService.createTextOutput(JSON.stringify(responseData))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    const errorData = {
      success: false,
      error: error.toString()
    };

    const callback = e.parameter.callback || '';
    if (callback) {
      return ContentService.createTextOutput(callback + '(' + JSON.stringify(errorData) + ')')
        .setMimeType(ContentService.MimeType.JAVASCRIPT);
    }

    return ContentService.createTextOutput(JSON.stringify(errorData))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  return doGet(e);
}

// ============================================================================
// SUCH-FUNKTIONEN
// ============================================================================

/**
 * Durchsucht alle konfigurierten Dokumente
 */
function searchDocuments(query) {
  const results = [];
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/).filter(w => w.length > 2);

  for (const docConfig of DOCUMENT_IDS) {
    try {
      const doc = DocumentApp.openById(docConfig.id);
      const body = doc.getBody();
      const text = body.getText();

      // Dokument in Abschnitte aufteilen
      const sections = splitIntoSections(text);

      // Relevante Abschnitte finden
      for (const section of sections) {
        const score = calculateRelevance(section.content, queryWords, queryLower);

        if (score > 0) {
          results.push({
            source: docConfig.name,
            section: section.title,
            content: truncateText(section.content, 1500),
            score: score
          });
        }
      }

    } catch (error) {
      Logger.log('Fehler beim Lesen von Dokument ' + docConfig.id + ': ' + error);
    }
  }

  // Nach Relevanz sortieren
  results.sort((a, b) => b.score - a.score);

  // Top 3 Ergebnisse zurückgeben
  return results.slice(0, 3);
}

/**
 * Teilt den Text in Abschnitte auf
 */
function splitIntoSections(text) {
  const sections = [];
  const lines = text.split('\n');

  let currentSection = {
    title: 'Allgemein',
    content: ''
  };

  for (const line of lines) {
    const trimmedLine = line.trim();

    // Prüfen ob es eine Überschrift ist
    const isHeader = SECTION_MARKERS.some(marker =>
      trimmedLine.toLowerCase().includes(marker.toLowerCase())
    ) || /^#+\s/.test(trimmedLine) || /^\d+\.\s+[A-Z]/.test(trimmedLine);

    if (isHeader && trimmedLine.length > 3) {
      // Vorherigen Abschnitt speichern
      if (currentSection.content.trim()) {
        sections.push({...currentSection});
      }
      // Neuen Abschnitt starten
      currentSection = {
        title: trimmedLine.replace(/^#+\s*/, '').substring(0, 100),
        content: ''
      };
    } else {
      currentSection.content += line + '\n';
    }
  }

  // Letzten Abschnitt speichern
  if (currentSection.content.trim()) {
    sections.push(currentSection);
  }

  return sections;
}

/**
 * Berechnet die Relevanz eines Abschnitts für die Suchanfrage
 */
function calculateRelevance(text, queryWords, fullQuery) {
  const textLower = text.toLowerCase();
  let score = 0;

  // Exakte Phrase Match (höchste Priorität)
  if (textLower.includes(fullQuery)) {
    score += 10;
  }

  // Einzelne Wörter
  for (const word of queryWords) {
    if (textLower.includes(word)) {
      score += 2;

      // Bonus für wichtige Keywords
      const importantKeywords = ['preis', 'kosten', 'euro', '€', 'rabatt', 'einwand', 'teuer',
                                  'google', 'wettbewerb', 'vorteil', 'feature', 'funktion',
                                  'sicherheit', 'dsgvo', 'datenschutz', 'roi', 'glossar'];
      if (importantKeywords.includes(word)) {
        score += 3;
      }
    }
  }

  // Kontext-Keywords
  const contextMatches = {
    'preis': ['starter', 'advanced', 'ultimate', 'enterprise', '€', 'euro', 'monat'],
    'einwand': ['teuer', 'google', 'kostenlos', 'datenschutz', 'später'],
    'google': ['translate', 'vergleich', 'unterschied', 'qualität'],
    'sicherheit': ['dsgvo', 'bsi', 'soc', 'hipaa', 'zertifizierung'],
    'roi': ['345%', 'effizienz', 'einsparung', 'zeitersparnis']
  };

  for (const word of queryWords) {
    if (contextMatches[word]) {
      for (const contextWord of contextMatches[word]) {
        if (textLower.includes(contextWord)) {
          score += 1;
        }
      }
    }
  }

  return score;
}

/**
 * Kürzt Text auf maximale Länge
 */
function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text.trim();
  }

  // Am Satzende abschneiden
  const truncated = text.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastNewline = truncated.lastIndexOf('\n');

  const cutPoint = Math.max(lastPeriod, lastNewline);

  if (cutPoint > maxLength * 0.5) {
    return truncated.substring(0, cutPoint + 1).trim();
  }

  return truncated.trim() + '...';
}

// ============================================================================
// TEST-FUNKTION
// ============================================================================

/**
 * Zum Testen im Apps Script Editor
 */
function testSearch() {
  const testQueries = [
    'Was kostet DeepL?',
    'Wie reagiere ich auf zu teuer?',
    'Unterschied zu Google Translate',
    'Welche Sicherheitszertifikate hat DeepL?'
  ];

  for (const query of testQueries) {
    Logger.log('=== Query: ' + query + ' ===');
    const results = searchDocuments(query);
    Logger.log('Gefunden: ' + results.length + ' Ergebnisse');
    for (const result of results) {
      Logger.log('- ' + result.section + ' (Score: ' + result.score + ')');
    }
    Logger.log('');
  }
}
