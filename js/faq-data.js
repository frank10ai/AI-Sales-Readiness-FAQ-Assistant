/**
 * GTM Sales Readiness Assistant - FAQ Knowledge Base
 *
 * This file contains the knowledge base for the sales assistant.
 * Each entry includes:
 * - keywords: Terms used for matching user queries
 * - question: The formatted question
 * - answer: The response text (supports HTML)
 * - source: Document name/source for citation
 * - category: Topic category for filtering
 * - assumptions: Any key assumptions or notes (optional)
 */

const FAQ_DATABASE = {
    // Sales Process & Playbook
    playbook: [
        {
            id: 'sp-001',
            keywords: ['sales prozess', 'sales-prozess', 'verkaufsprozess', 'prozess', 'ablauf', 'schritte', 'pipeline'],
            question: 'Wie ist der aktuelle Sales-Prozess?',
            answer: `<p><strong>Unser standardisierter Sales-Prozess besteht aus 6 Phasen:</strong></p>
                <ul>
                    <li><strong>1. Qualifizierung:</strong> BANT-Kriterien prüfen (Budget, Authority, Need, Timeline)</li>
                    <li><strong>2. Discovery:</strong> Bedarfsanalyse und Pain Points identifizieren</li>
                    <li><strong>3. Demo/Präsentation:</strong> Maßgeschneiderte Lösungspräsentation</li>
                    <li><strong>4. Proposal:</strong> Angebot erstellen und besprechen</li>
                    <li><strong>5. Verhandlung:</strong> Konditionen finalisieren</li>
                    <li><strong>6. Closing:</strong> Vertragsabschluss und Übergabe an Customer Success</li>
                </ul>
                <p>Durchschnittliche Cycle Time: 45-60 Tage für Mid-Market, 90-120 Tage für Enterprise.</p>`,
            source: 'Sales Playbook 2024',
            category: 'playbook'
        },
        {
            id: 'sp-002',
            keywords: ['bant', 'qualifizierung', 'qualifikation', 'lead scoring', 'lead-scoring'],
            question: 'Was sind die BANT-Qualifizierungskriterien?',
            answer: `<p><strong>BANT-Kriterien für Lead-Qualifizierung:</strong></p>
                <ul>
                    <li><strong>Budget:</strong> Ist ein Budget für das Projekt vorhanden oder geplant?</li>
                    <li><strong>Authority:</strong> Sprechen wir mit dem Entscheider oder gibt es einen Champion?</li>
                    <li><strong>Need:</strong> Gibt es einen konkreten Bedarf oder Pain Point?</li>
                    <li><strong>Timeline:</strong> Gibt es einen definierten Zeitrahmen für die Entscheidung?</li>
                </ul>
                <p>Minimum für SQL: Mindestens 3 von 4 Kriterien müssen erfüllt sein.</p>`,
            source: 'Sales Playbook 2024',
            category: 'playbook'
        },
        {
            id: 'sp-003',
            keywords: ['discovery', 'bedarfsanalyse', 'fragen', 'discovery call', 'erstgespräch'],
            question: 'Welche Fragen sollte ich im Discovery Call stellen?',
            answer: `<p><strong>Kernfragen für den Discovery Call:</strong></p>
                <ul>
                    <li>Was hat Sie dazu gebracht, sich heute mit uns zu unterhalten?</li>
                    <li>Wie lösen Sie dieses Problem aktuell?</li>
                    <li>Welche Auswirkungen hat das Problem auf Ihr Geschäft?</li>
                    <li>Wer ist noch in die Entscheidung involviert?</li>
                    <li>Was wäre für Sie ein ideales Ergebnis?</li>
                    <li>Bis wann möchten Sie eine Lösung implementiert haben?</li>
                </ul>
                <p>Regel: 80% zuhören, 20% sprechen. Offene Fragen verwenden.</p>`,
            source: 'Discovery Framework Dokument',
            category: 'playbook'
        }
    ],

    // Pricing & Discounts
    pricing: [
        {
            id: 'pr-001',
            keywords: ['rabatt', 'rabatte', 'rabattrichtlinien', 'discount', 'nachlass', 'preisnachlass'],
            question: 'Was sind unsere aktuellen Rabattrichtlinien?',
            answer: `<p><strong>Rabattrahmen nach Kundensegment:</strong></p>
                <ul>
                    <li><strong>SMB (bis 50 MA):</strong> Max. 10% auf Listenpreis</li>
                    <li><strong>Mid-Market (50-500 MA):</strong> Max. 15% auf Listenpreis</li>
                    <li><strong>Enterprise (500+ MA):</strong> Max. 25% (VP-Freigabe erforderlich)</li>
                </ul>
                <p><strong>Zusätzliche Rabattmöglichkeiten:</strong></p>
                <ul>
                    <li>Jährliche Vorauszahlung: +5%</li>
                    <li>Mehrjahresvertrag (2+ Jahre): +5-10%</li>
                    <li>Bundle-Rabatt (3+ Produkte): +5%</li>
                </ul>
                <p>Rabatte über 20% erfordern VP Sales Freigabe.</p>`,
            source: 'Pricing & Discount Policy Q4 2024',
            category: 'pricing',
            assumptions: 'Rabatte können je nach strategischer Bedeutung des Deals angepasst werden. Bei Sonderfällen bitte mit Sales Operations abstimmen.'
        },
        {
            id: 'pr-002',
            keywords: ['preise', 'preismodell', 'pricing', 'kosten', 'preis', 'lizenz', 'lizenzen'],
            question: 'Wie ist unser Preismodell aufgebaut?',
            answer: `<p><strong>Unser Preismodell basiert auf:</strong></p>
                <ul>
                    <li><strong>Basis:</strong> Pro User/Monat Lizenzierung</li>
                    <li><strong>Starter:</strong> €29/User/Monat (min. 5 User)</li>
                    <li><strong>Professional:</strong> €59/User/Monat (min. 10 User)</li>
                    <li><strong>Enterprise:</strong> Individuell ab €99/User/Monat</li>
                </ul>
                <p><strong>Add-Ons verfügbar:</strong></p>
                <ul>
                    <li>Premium Support: +20% auf Lizenzkosten</li>
                    <li>API Access: €500/Monat</li>
                    <li>Dedicated Instance: +30% auf Gesamtpreis</li>
                </ul>`,
            source: 'Preisliste Januar 2025',
            category: 'pricing'
        },
        {
            id: 'pr-003',
            keywords: ['roi', 'return on investment', 'business case', 'wertversprechen', 'value'],
            question: 'Wie argumentiere ich den ROI?',
            answer: `<p><strong>ROI-Berechnung basiert auf drei Säulen:</strong></p>
                <ul>
                    <li><strong>Zeitersparnis:</strong> Durchschnittlich 15 Stunden/Woche pro Mitarbeiter</li>
                    <li><strong>Fehlerreduktion:</strong> 40% weniger manuelle Fehler</li>
                    <li><strong>Produktivitätssteigerung:</strong> 25% höhere Team-Effizienz</li>
                </ul>
                <p><strong>Typischer ROI:</strong> 250-400% im ersten Jahr</p>
                <p><strong>Payback Period:</strong> 3-6 Monate</p>
                <p>Nutzen Sie den ROI-Kalkulator im Sales Toolkit für kundenspezifische Berechnungen.</p>`,
            source: 'Value Proposition Deck 2024',
            category: 'pricing'
        }
    ],

    // Objection Handling
    objections: [
        {
            id: 'ob-001',
            keywords: ['zu teuer', 'teuer', 'preis zu hoch', 'budget', 'kosten zu hoch', 'preiseinwand'],
            question: 'Wie reagiere ich auf den Einwand "zu teuer"?',
            answer: `<p><strong>3-Schritte-Methode bei Preiseinwänden:</strong></p>
                <ul>
                    <li><strong>1. Verstehen:</strong> "Ich verstehe. Können Sie mir mehr darüber erzählen, was Sie zum Vergleich heranziehen?"</li>
                    <li><strong>2. Wert verdeutlichen:</strong> "Lassen Sie uns die Gesamtkosten betrachten - unsere Kunden sparen durchschnittlich X€ pro Jahr."</li>
                    <li><strong>3. Optionen aufzeigen:</strong> "Wir können mit einer kleineren Implementierung starten oder einen Proof-of-Concept durchführen."</li>
                </ul>
                <p><strong>Key Message:</strong> Fokus auf TCO (Total Cost of Ownership) statt reinem Lizenzpreis.</p>`,
            source: 'Objection Handling Guide',
            category: 'objections'
        },
        {
            id: 'ob-002',
            keywords: ['entscheidung', 'entscheidungszeit', 'später', 'nicht jetzt', 'timing', 'verschieben'],
            question: 'Wie reagiere ich auf "Wir entscheiden später"?',
            answer: `<p><strong>Strategie bei Timing-Einwänden:</strong></p>
                <ul>
                    <li><strong>Dringlichkeit verstehen:</strong> "Was müsste passieren, damit es jetzt Priorität hätte?"</li>
                    <li><strong>Kosten der Verzögerung:</strong> "Jeder Monat Verzögerung kostet Sie ca. X€ an Ineffizienz."</li>
                    <li><strong>Nächste Schritte sichern:</strong> "Lassen Sie uns einen konkreten Termin für Q1 vereinbaren."</li>
                </ul>
                <p><strong>Tipp:</strong> Fragen Sie nach dem konkreten Auslöser für eine Entscheidung.</p>`,
            source: 'Objection Handling Guide',
            category: 'objections'
        },
        {
            id: 'ob-003',
            keywords: ['wettbewerber', 'konkurrenz', 'alternative', 'vergleich', 'anderer anbieter'],
            question: 'Wie reagiere ich auf "Wir schauen uns auch andere Anbieter an"?',
            answer: `<p><strong>Positiv auf Wettbewerbsvergleich reagieren:</strong></p>
                <ul>
                    <li><strong>Bestätigen:</strong> "Das ist absolut sinnvoll. Eine gründliche Evaluation ist wichtig."</li>
                    <li><strong>Differenzieren:</strong> "Was uns auszeichnet ist [USP 1, USP 2, USP 3]."</li>
                    <li><strong>Referenzen anbieten:</strong> "Gerne stelle ich den Kontakt zu Kunden her, die denselben Vergleich gemacht haben."</li>
                </ul>
                <p><strong>Wichtig:</strong> Niemals schlecht über Wettbewerber sprechen. Auf eigene Stärken fokussieren.</p>`,
            source: 'Objection Handling Guide',
            category: 'objections'
        },
        {
            id: 'ob-004',
            keywords: ['zufrieden', 'aktuelle lösung', 'bestandslösung', 'kein bedarf', 'kein problem'],
            question: 'Wie reagiere ich auf "Wir sind mit unserer aktuellen Lösung zufrieden"?',
            answer: `<p><strong>Status-Quo Einwand behandeln:</strong></p>
                <ul>
                    <li><strong>Respektieren:</strong> "Das ist gut zu hören. Was gefällt Ihnen besonders?"</li>
                    <li><strong>Lücken identifizieren:</strong> "Wenn Sie einen Aspekt verbessern könnten, welcher wäre das?"</li>
                    <li><strong>Zukunft adressieren:</strong> "Wie wird Ihre Lösung mit Ihrem geplanten Wachstum skalieren?"</li>
                </ul>
                <p><strong>Tipp:</strong> Fokus auf zukünftige Herausforderungen, nicht aktuelle Schwächen.</p>`,
            source: 'Objection Handling Guide',
            category: 'objections'
        }
    ],

    // Competitors
    competitors: [
        {
            id: 'co-001',
            keywords: ['wettbewerb', 'konkurrenz', 'wettbewerber x', 'competitor', 'unterschied', 'vergleich wettbewerber'],
            question: 'Was unterscheidet uns von Wettbewerber X?',
            answer: `<p><strong>Unsere Hauptdifferenzierungsmerkmale:</strong></p>
                <ul>
                    <li><strong>Integration:</strong> Native Anbindung an 200+ Systeme (vs. 50-80 bei Wettbewerbern)</li>
                    <li><strong>Time-to-Value:</strong> Go-Live in 4-6 Wochen (vs. 3-6 Monate)</li>
                    <li><strong>Support:</strong> Deutschsprachiger Premium-Support inklusive</li>
                    <li><strong>Skalierbarkeit:</strong> Nachgewiesene Enterprise-Skalierung (1M+ User)</li>
                </ul>
                <p><strong>Win-Themen gegen Wettbewerber X:</strong> Bessere UX, schnellere Implementation, lokaler Support</p>`,
            source: 'Competitive Battlecard - Wettbewerber X',
            category: 'competitors',
            assumptions: 'Wettbewerberinformationen basieren auf Stand Q4 2024. Bitte aktuelle Battlecards prüfen.'
        },
        {
            id: 'co-002',
            keywords: ['stärken', 'vorteile', 'usp', 'alleinstellungsmerkmal', 'warum wir'],
            question: 'Was sind unsere wichtigsten Wettbewerbsvorteile?',
            answer: `<p><strong>Top 5 Wettbewerbsvorteile:</strong></p>
                <ul>
                    <li><strong>1. Benutzerfreundlichkeit:</strong> NPS Score 72 (Branchendurchschnitt: 45)</li>
                    <li><strong>2. Time-to-Value:</strong> 3x schnellere Implementation als Wettbewerb</li>
                    <li><strong>3. DSGVO-Konformität:</strong> EU-Hosting, deutsches Datenschutz-Siegel</li>
                    <li><strong>4. Flexibilität:</strong> Modularer Aufbau, keine Vendor Lock-In</li>
                    <li><strong>5. Kundenerfolg:</strong> 95% Retention Rate, dedizierter CSM</li>
                </ul>`,
            source: 'Value Proposition Deck 2024',
            category: 'competitors'
        },
        {
            id: 'co-003',
            keywords: ['schwächen', 'nachteile', 'wo schwach', 'limitationen', 'gaps'],
            question: 'Wo haben wir Schwächen gegenüber dem Wettbewerb?',
            answer: `<p><strong>Bekannte Gaps und Talking Points:</strong></p>
                <ul>
                    <li><strong>Mobile App:</strong> Noch nicht feature-complete - "Native App kommt Q2 2025"</li>
                    <li><strong>Reporting:</strong> Weniger Out-of-box Reports - "Fokus auf Custom Reports via API"</li>
                    <li><strong>Brand Awareness:</strong> Weniger bekannt als Marktführer - "Schnellst wachsender Anbieter im Segment"</li>
                </ul>
                <p><strong>Strategie:</strong> Schwächen anerkennen, auf Roadmap verweisen, Stärken betonen.</p>`,
            source: 'Internal Competitive Analysis',
            category: 'competitors',
            assumptions: 'Interne Einschätzung. Bei direkten Kundenanfragen sensibel kommunizieren.'
        }
    ],

    // Products
    products: [
        {
            id: 'pd-001',
            keywords: ['produkt', 'features', 'funktionen', 'was kann', 'leistungen', 'plattform'],
            question: 'Was sind die Hauptfunktionen unserer Plattform?',
            answer: `<p><strong>Kernmodule unserer Plattform:</strong></p>
                <ul>
                    <li><strong>Workflow Automation:</strong> No-Code Prozessautomatisierung</li>
                    <li><strong>Analytics & Reporting:</strong> Real-time Dashboards und Custom Reports</li>
                    <li><strong>Integration Hub:</strong> 200+ native Konnektoren</li>
                    <li><strong>Collaboration:</strong> Team-Workspaces und Kommentarfunktion</li>
                    <li><strong>Security & Compliance:</strong> SSO, 2FA, Audit Logs, DSGVO</li>
                </ul>
                <p>Detaillierte Feature-Matrix im Product Deck verfügbar.</p>`,
            source: 'Product Overview Deck',
            category: 'products'
        },
        {
            id: 'pd-002',
            keywords: ['neu', 'neuerungen', 'roadmap', 'release', 'update', 'neue features'],
            question: 'Was sind die neuesten Produktupdates?',
            answer: `<p><strong>Release Highlights Q4 2024:</strong></p>
                <ul>
                    <li><strong>AI Assistant:</strong> KI-gestützte Automatisierungsvorschläge</li>
                    <li><strong>Advanced Analytics:</strong> Predictive Dashboards</li>
                    <li><strong>Mobile Improvements:</strong> Offline-Modus für Mobile App</li>
                    <li><strong>API v3:</strong> GraphQL Support</li>
                </ul>
                <p><strong>Roadmap Q1 2025:</strong> Native Mobile App, erweiterte KI-Features, neue Integrationen</p>`,
            source: 'Product Release Notes Q4 2024',
            category: 'products'
        },
        {
            id: 'pd-003',
            keywords: ['integration', 'integrationen', 'schnittstelle', 'api', 'anbindung', 'connector'],
            question: 'Welche Integrationen bieten wir an?',
            answer: `<p><strong>Integration-Kategorien:</strong></p>
                <ul>
                    <li><strong>CRM:</strong> Salesforce, HubSpot, Microsoft Dynamics, Pipedrive</li>
                    <li><strong>ERP:</strong> SAP, Oracle, Microsoft Business Central</li>
                    <li><strong>Kommunikation:</strong> Slack, Microsoft Teams, Email</li>
                    <li><strong>Dokumentation:</strong> Google Workspace, Microsoft 365, Confluence</li>
                    <li><strong>Custom:</strong> REST API, Webhooks, iPaaS (Zapier, Make)</li>
                </ul>
                <p>Vollständige Integration-Liste: <em>integration-catalog.pdf</em></p>`,
            source: 'Integration Catalog 2024',
            category: 'products'
        }
    ],

    // General/Misc
    general: [
        {
            id: 'ge-001',
            keywords: ['hilfe', 'support', 'kontakt', 'frage', 'ansprechpartner'],
            question: 'An wen kann ich mich bei Fragen wenden?',
            answer: `<p><strong>Interne Ansprechpartner:</strong></p>
                <ul>
                    <li><strong>Sales Operations:</strong> sales-ops@company.com</li>
                    <li><strong>Product Questions:</strong> product@company.com</li>
                    <li><strong>Legal/Contracts:</strong> legal@company.com</li>
                    <li><strong>Technical Pre-Sales:</strong> presales@company.com</li>
                </ul>
                <p>Slack-Channel: #sales-support</p>`,
            source: 'Sales Operations Handbuch',
            category: 'general'
        },
        {
            id: 'ge-002',
            keywords: ['case study', 'referenz', 'beispiel', 'erfolgsgeschichte', 'kunde'],
            question: 'Welche Case Studies kann ich nutzen?',
            answer: `<p><strong>Top Case Studies nach Branche:</strong></p>
                <ul>
                    <li><strong>Finanzdienstleistung:</strong> "Bank ABC - 60% Prozessoptimierung"</li>
                    <li><strong>Manufacturing:</strong> "Industrie GmbH - 2M€ Einsparung/Jahr"</li>
                    <li><strong>Healthcare:</strong> "Klinikverbund XY - Compliance Excellence"</li>
                    <li><strong>Retail:</strong> "Fashion Corp - 40% schnellere Launches"</li>
                </ul>
                <p>Alle Case Studies im Google Drive unter /Marketing/Case-Studies</p>`,
            source: 'Case Study Library',
            category: 'general'
        }
    ]
};

/**
 * Search the FAQ database for matching entries
 * @param {string} query - User search query
 * @returns {Array} Matching FAQ entries
 */
function searchFAQ(query) {
    const normalizedQuery = query.toLowerCase().trim();
    const results = [];
    const categories = Object.keys(FAQ_DATABASE);

    for (const category of categories) {
        for (const entry of FAQ_DATABASE[category]) {
            const keywordMatch = entry.keywords.some(keyword =>
                normalizedQuery.includes(keyword) || keyword.includes(normalizedQuery)
            );

            const questionMatch = entry.question.toLowerCase().includes(normalizedQuery);

            if (keywordMatch || questionMatch) {
                results.push({
                    ...entry,
                    matchScore: keywordMatch ? 2 : 1
                });
            }
        }
    }

    // Sort by match score (higher = better match)
    results.sort((a, b) => b.matchScore - a.matchScore);

    return results;
}

/**
 * Get FAQ entries by category
 * @param {string} category - Category name
 * @returns {Array} FAQ entries in that category
 */
function getFAQByCategory(category) {
    return FAQ_DATABASE[category] || [];
}

/**
 * Get a specific FAQ entry by ID
 * @param {string} id - FAQ entry ID
 * @returns {Object|null} FAQ entry or null
 */
function getFAQById(id) {
    const categories = Object.keys(FAQ_DATABASE);

    for (const category of categories) {
        const entry = FAQ_DATABASE[category].find(e => e.id === id);
        if (entry) return entry;
    }

    return null;
}

/**
 * Get all available categories
 * @returns {Array} Category names
 */
function getCategories() {
    return Object.keys(FAQ_DATABASE);
}

// Export for use in app.js
window.FAQ = {
    database: FAQ_DATABASE,
    search: searchFAQ,
    getByCategory: getFAQByCategory,
    getById: getFAQById,
    getCategories: getCategories
};
