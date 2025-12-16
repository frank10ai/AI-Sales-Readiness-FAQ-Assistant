/**
 * GTM Sales Readiness Assistant - FAQ Knowledge Base
 * Basiert auf: DeepL Sales Playbook
 *
 * Jeder Eintrag enthält:
 * - keywords: Suchbegriffe für Matching
 * - question: Die formatierte Frage
 * - answer: Die Antwort (unterstützt HTML)
 * - source: Dokumentname/Quelle für Zitation
 * - category: Themenkategorie
 * - assumptions: Annahmen oder Hinweise (optional)
 */

const FAQ_DATABASE = {
    // Produkt & Technologie
    products: [
        {
            id: 'pd-001',
            keywords: ['produkt', 'funktionen', 'features', 'was kann deepl', 'übersetzung', 'sprachen', 'deepl'],
            question: 'Was bietet DeepL als Produkt?',
            answer: `<p><strong>DeepL Kernfunktionen:</strong></p>
                <ul>
                    <li><strong>KI-gestützte Übersetzungen</strong> in über 30 Sprachen mit hoher Genauigkeit</li>
                    <li><strong>Unterstützte Formate:</strong> Text, Dokumente, Websites sowie API für Entwickler</li>
                    <li><strong>Glossare:</strong> Unternehmensspezifische Fachbegriffe konsistent übersetzen</li>
                    <li><strong>Formalitätskontrolle:</strong> Anpassung des Sprachstils (formell/informell)</li>
                </ul>
                <p><strong>Erweiterte Produkte:</strong></p>
                <ul>
                    <li><strong>DeepL Write:</strong> Textoptimierung und Verbesserung</li>
                    <li><strong>DeepL Voice:</strong> Sprachübersetzung in Echtzeit</li>
                </ul>`,
            source: 'DeepL Sales Playbook',
            category: 'products'
        },
        {
            id: 'pd-002',
            keywords: ['limits', 'zeichen', 'beschränkung', 'kostenlos', 'free', 'gratis', 'limit'],
            question: 'Welche technischen Limits gibt es?',
            answer: `<p><strong>Kostenlose Version:</strong></p>
                <ul>
                    <li>3.000 Zeichen pro Übersetzung</li>
                    <li>5 MB maximale Dateigröße</li>
                    <li>3 Dokumentübersetzungen pro Monat</li>
                </ul>
                <p><strong>Pro-Version:</strong></p>
                <ul>
                    <li>Bis zu 1 Million Zeichen/Monat</li>
                    <li>Größere Dateien möglich</li>
                    <li>Erweiterte API-Zugriffe</li>
                </ul>`,
            source: 'DeepL Sales Playbook',
            category: 'products'
        },
        {
            id: 'pd-003',
            keywords: ['sicherheit', 'datenschutz', 'dsgvo', 'gdpr', 'zertifizierung', 'compliance', 'soc', 'hipaa', 'bsi'],
            question: 'Welche Sicherheitsstandards erfüllt DeepL?',
            answer: `<p><strong>DeepL Sicherheitszertifizierungen:</strong></p>
                <ul>
                    <li><strong>C5-Typ-2-Testat des BSI</strong> - Deutscher Sicherheitsstandard</li>
                    <li><strong>SOC 2 Typ II</strong> - Internationale Sicherheitszertifizierung</li>
                    <li><strong>HIPAA-konform</strong> - Für Gesundheitswesen geeignet</li>
                    <li><strong>DSGVO-konform</strong> - In Pro-Versionen keine Textspeicherung zum Trainieren</li>
                </ul>
                <p><strong>Wichtig:</strong> Bei Pro-Versionen werden Texte nicht gespeichert oder für KI-Training verwendet.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'products'
        },
        {
            id: 'pd-004',
            keywords: ['glossar', 'glossare', 'fachbegriffe', 'terminologie', 'wörterbuch'],
            question: 'Wie funktionieren Glossare bei DeepL?',
            answer: `<p><strong>DeepL Glossar-Funktion:</strong></p>
                <ul>
                    <li>Ermöglicht unternehmensspezifische, konsistente Übersetzungen</li>
                    <li>Fachbegriffe werden immer einheitlich übersetzt</li>
                    <li>Ideal für Branchen mit spezieller Terminologie</li>
                    <li>Glossare können teamweit geteilt werden</li>
                </ul>
                <p><strong>Vorteil gegenüber Google Translate:</strong> Google bietet keine vergleichbare Glossar-Funktion.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'products'
        },
        {
            id: 'pd-005',
            keywords: ['sprachen', 'wie viele sprachen', 'sprachunterstützung', 'welche sprachen'],
            question: 'Wie viele Sprachen unterstützt DeepL?',
            answer: `<p><strong>Sprachunterstützung:</strong></p>
                <ul>
                    <li>DeepL unterstützt <strong>ca. 28-30 Sprachen</strong></li>
                    <li>Fokus auf <strong>europäische Sprachen</strong> mit höchster Qualität</li>
                    <li>Spezialisierte neuronale Netze für natürliche, kontextbezogene Übersetzungen</li>
                </ul>
                <p><strong>Hinweis:</strong> Google Translate unterstützt über 130 Sprachen, aber DeepL bietet bei den unterstützten Sprachen deutlich höhere Qualität.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'products',
            assumptions: 'Bei Anfragen zu nicht unterstützten Sprachen auf die Qualitätsvorteile bei verfügbaren Sprachen hinweisen.'
        }
    ],

    // Preise & Rabatte
    pricing: [
        {
            id: 'pr-001',
            keywords: ['preis', 'preise', 'kosten', 'pricing', 'preismodell', 'was kostet', 'tarif', 'tarife'],
            question: 'Was sind die aktuellen DeepL Preise?',
            answer: `<p><strong>DeepL Preismodelle:</strong></p>
                <ul>
                    <li><strong>Starter:</strong> 7,49 €/Monat</li>
                    <li><strong>Advanced:</strong> 24,99 €/Monat</li>
                    <li><strong>Ultimate:</strong> 53,99 €/Monat</li>
                    <li><strong>Enterprise:</strong> Individuelle Angebote</li>
                </ul>
                <p>Alle Pro-Versionen garantieren: Keine Inhaltsspeicherung, volle DSGVO-Konformität.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'pricing'
        },
        {
            id: 'pr-002',
            keywords: ['rabatt', 'rabatte', 'discount', 'nachlass', 'mengenrabatt', 'aktion'],
            question: 'Welche Rabatte gibt es bei DeepL?',
            answer: `<p><strong>DeepL Rabattstrategien:</strong></p>
                <ul>
                    <li><strong>Mengenrabatte:</strong> Für Großkunden verfügbar</li>
                    <li><strong>Saisonale Aktionen:</strong> Regelmäßige Promotions</li>
                    <li><strong>Newsletter-Rabatte:</strong> Bis zu 15% Rabatt</li>
                </ul>
                <p>Bei Enterprise-Anfragen individuelle Konditionen mit Sales besprechen.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'pricing'
        },
        {
            id: 'pr-003',
            keywords: ['roi', 'return on investment', 'effizienz', 'einsparung', 'wert', 'nutzen'],
            question: 'Wie argumentiere ich den ROI von DeepL?',
            answer: `<p><strong>Nachgewiesene ROI-Metriken:</strong></p>
                <ul>
                    <li><strong>345% ROI</strong> - Nachgewiesen durch Kundenstudien</li>
                    <li><strong>2,8 Mio. € Effizienzgewinn</strong> über 3 Jahre</li>
                    <li><strong>90% weniger Übersetzungszeit</strong></li>
                    <li><strong>50% reduzierter Aufwand</strong> im Übersetzungsprozess</li>
                </ul>
                <p><strong>Vertriebsargument:</strong> "Mit DeepL erzielen unsere Kunden einen ROI von 345% und sparen 90% der Übersetzungszeit."</p>`,
            source: 'DeepL Sales Playbook',
            category: 'pricing'
        },
        {
            id: 'pr-004',
            keywords: ['kostenlos vs pro', 'unterschied', 'free vs paid', 'nutzungsbedingungen'],
            question: 'Was ist der Unterschied zwischen kostenlos und Pro?',
            answer: `<p><strong>Wichtiger Unterschied bei Nutzungsbedingungen:</strong></p>
                <ul>
                    <li><strong>Kostenlos:</strong> Inhalte können zur KI-Verbesserung verwendet werden</li>
                    <li><strong>Pro:</strong> Keine Inhaltsspeicherung - Texte werden nicht für Training verwendet</li>
                </ul>
                <p><strong>Für Unternehmen kritisch:</strong> Nur Pro-Versionen garantieren vollständigen Datenschutz.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'pricing'
        }
    ],

    // Einwandbehandlung
    objections: [
        {
            id: 'ob-001',
            keywords: ['zu teuer', 'teuer', 'preis zu hoch', 'preiseinwand', 'kosten zu hoch'],
            question: 'Wie reagiere ich auf den Einwand "DeepL ist zu teuer"?',
            answer: `<p><strong>Gegenargumente bei Preiseinwand:</strong></p>
                <ul>
                    <li><strong>ROI von 345%</strong> - Die Investition zahlt sich mehrfach aus</li>
                    <li><strong>90% Zeiteinsparung</strong> - Weniger Arbeitsaufwand für Übersetzungen</li>
                    <li><strong>Mengenrabatte für Teams</strong> - Bei größeren Teams günstigere Konditionen</li>
                </ul>
                <p><strong>Beispielformulierung:</strong> "Ich verstehe den Kostenfokus. Unsere Kunden erzielen jedoch einen ROI von 345% und sparen 90% ihrer Übersetzungszeit. Darf ich Ihnen vorrechnen, was das für Ihr Team bedeutet?"</p>`,
            source: 'DeepL Sales Playbook',
            category: 'objections'
        },
        {
            id: 'ob-002',
            keywords: ['datenschutz', 'daten', 'sicherheit bedenken', 'vertraulich', 'sensible daten'],
            question: 'Wie reagiere ich auf Datenschutzbedenken?',
            answer: `<p><strong>Gegenargumente bei Datenschutzbedenken:</strong></p>
                <ul>
                    <li><strong>DSGVO-konform</strong> - Vollständige Einhaltung europäischer Datenschutzrichtlinien</li>
                    <li><strong>C5-Typ-2 BSI-Testat</strong> - Höchster deutscher Sicherheitsstandard</li>
                    <li><strong>SOC 2 Typ II zertifiziert</strong> - Internationale Sicherheitsanerkennung</li>
                    <li><strong>Keine Speicherung bei Pro</strong> - Texte werden nicht gespeichert oder für Training verwendet</li>
                </ul>
                <p><strong>Beispielformulierung:</strong> "Datenschutz hat für uns höchste Priorität. DeepL Pro ist DSGVO-konform und BSI-zertifiziert. Ihre Texte werden nicht gespeichert und nicht für KI-Training verwendet."</p>`,
            source: 'DeepL Sales Playbook',
            category: 'objections'
        },
        {
            id: 'ob-003',
            keywords: ['google', 'google translate', 'kostenlos', 'warum nicht google', 'google ist gratis'],
            question: 'Wie reagiere ich auf "Google Translate ist kostenlos"?',
            answer: `<p><strong>Gegenargumente zu Google Translate:</strong></p>
                <ul>
                    <li><strong>Überlegene Qualität:</strong> DeepL liefert natürlichere, kontextbezogene und idiomatische Übersetzungen</li>
                    <li><strong>Besserer Datenschutz:</strong> Google speichert und verwendet Ihre Texte - DeepL Pro nicht</li>
                    <li><strong>Professionelle Features:</strong> Glossare, Formalitätskontrolle, formatierte Dokumente</li>
                    <li><strong>Dokumentenqualität:</strong> DeepL bewahrt Layout bei Word/PowerPoint - Google verliert oft Formatierungen</li>
                </ul>
                <p><strong>Beispielformulierung:</strong> "Google Translate ist für den privaten Gebrauch gut. Für professionelle Anforderungen bietet DeepL jedoch bessere Qualität, echten Datenschutz und Funktionen wie Glossare, die Google nicht hat."</p>`,
            source: 'DeepL Sales Playbook',
            category: 'objections'
        },
        {
            id: 'ob-004',
            keywords: ['fachbegriffe', 'fachterminologie', 'branchenbegriffe', 'spezialvokabular', 'terminologie'],
            question: 'Wie reagiere ich auf "Wir brauchen spezielle Fachterminologie"?',
            answer: `<p><strong>Gegenargument bei Fachterminologie-Anforderung:</strong></p>
                <ul>
                    <li><strong>Glossar-Funktion:</strong> Ermöglicht unternehmensspezifische, konsistente Übersetzungen</li>
                    <li><strong>Fachbegriffe definieren:</strong> Eigene Terminologie hinterlegen</li>
                    <li><strong>Teamweite Nutzung:</strong> Glossare können mit dem ganzen Team geteilt werden</li>
                </ul>
                <p><strong>Beispielformulierung:</strong> "Genau dafür haben wir die Glossar-Funktion. Sie können Ihre Fachbegriffe definieren und sicherstellen, dass sie immer konsistent übersetzt werden - teamweit."</p>`,
            source: 'DeepL Sales Playbook',
            category: 'objections'
        },
        {
            id: 'ob-005',
            keywords: ['formatierung', 'layout', 'word', 'powerpoint', 'dokument format', 'formatierungsverlust'],
            question: 'Wie reagiere ich auf Angst vor Formatierungsverlust?',
            answer: `<p><strong>Gegenargument bei Formatierungsbedenken:</strong></p>
                <ul>
                    <li><strong>Layout bleibt erhalten:</strong> Bei Word und PowerPoint wird die Formatierung bewahrt</li>
                    <li><strong>Professionelle Workflows:</strong> Speziell für Business-Dokumente optimiert</li>
                    <li><strong>Vorteil vs. Google:</strong> Google Translate verliert oft Formatierungen</li>
                </ul>
                <p><strong>Beispielformulierung:</strong> "DeepL ist speziell für professionelle Dokumente optimiert. Das Layout Ihrer Word- und PowerPoint-Dateien bleibt vollständig erhalten - im Gegensatz zu anderen Tools."</p>`,
            source: 'DeepL Sales Playbook',
            category: 'objections'
        }
    ],

    // Wettbewerb
    competitors: [
        {
            id: 'co-001',
            keywords: ['google translate', 'google', 'vergleich google', 'vs google', 'gegen google'],
            question: 'Wie unterscheidet sich DeepL von Google Translate?',
            answer: `<p><strong>DeepL vs. Google Translate - Vergleich:</strong></p>
                <table style="width:100%; border-collapse: collapse; margin: 10px 0;">
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px;"><strong>Kriterium</strong></td>
                        <td style="padding: 8px;"><strong>DeepL</strong></td>
                        <td style="padding: 8px;"><strong>Google</strong></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px;">Qualität</td>
                        <td style="padding: 8px;">Natürlicher, kontextbezogen</td>
                        <td style="padding: 8px;">Gut für Alltag</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px;">Datenschutz</td>
                        <td style="padding: 8px;">Pro: Keine Speicherung</td>
                        <td style="padding: 8px;">Texte werden gespeichert</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px;">Glossare</td>
                        <td style="padding: 8px;">Ja</td>
                        <td style="padding: 8px;">Nein</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                        <td style="padding: 8px;">Dokument-Layout</td>
                        <td style="padding: 8px;">Bleibt erhalten</td>
                        <td style="padding: 8px;">Oft verloren</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px;">Sprachen</td>
                        <td style="padding: 8px;">~28 (hohe Qualität)</td>
                        <td style="padding: 8px;">130+ (breiter)</td>
                    </tr>
                </table>
                <p><strong>Fazit:</strong> DeepL für Qualität und Datenschutz, Google für exotische Sprachen.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'competitors'
        },
        {
            id: 'co-002',
            keywords: ['wettbewerber', 'konkurrenz', 'andere anbieter', 'alternativen', 'microsoft', 'amazon'],
            question: 'Wer sind die Hauptwettbewerber von DeepL?',
            answer: `<p><strong>DeepL Wettbewerbslandschaft:</strong></p>
                <ul>
                    <li><strong>Google Translate:</strong> Mehr Sprachen, aber weniger Qualität und Datenschutz</li>
                    <li><strong>Microsoft Translator:</strong> In Microsoft-Ökosystem integriert</li>
                    <li><strong>Amazon Translate:</strong> AWS-Integration</li>
                    <li><strong>HIX.AI:</strong> Neuerer Marktteilnehmer</li>
                    <li><strong>PONS:</strong> Traditioneller Wörterbuch-Anbieter</li>
                </ul>
                <p><strong>DeepL Vorteile:</strong> Übersetzungsqualität und Datenschutz sind die stärksten Differenzierungsmerkmale.</p>`,
            source: 'DeepL Sales Playbook',
            category: 'competitors'
        },
        {
            id: 'co-003',
            keywords: ['usp', 'alleinstellung', 'vorteile', 'warum deepl', 'stärken', 'differenzierung'],
            question: 'Was sind DeepLs Unique Selling Propositions?',
            answer: `<p><strong>DeepL USPs:</strong></p>
                <ul>
                    <li><strong>Spezialisierte neuronale Netze</strong> für höchste Übersetzungsqualität</li>
                    <li><strong>DSGVO-Konformität</strong> und Sicherheitszertifizierungen (BSI, SOC 2)</li>
                    <li><strong>Intuitive Oberfläche</strong> mit API-Integration für Entwickler</li>
                    <li><strong>Nachgewiesener ROI</strong> von 345% durch Effizienzgewinne</li>
                    <li><strong>Community-Support</strong> über DeepL Bridges und Trust Center</li>
                    <li><strong>Glossar-Funktion</strong> für konsistente Fachterminologie</li>
                </ul>`,
            source: 'DeepL Sales Playbook',
            category: 'competitors'
        }
    ],

    // Case Studies & Branchen
    casestudies: [
        {
            id: 'cs-001',
            keywords: ['case study', 'referenz', 'erfolg', 'kundenbeispiel', 'branche', 'branchen'],
            question: 'In welchen Branchen wird DeepL erfolgreich eingesetzt?',
            answer: `<p><strong>Branchen mit nachgewiesenem DeepL-Erfolg:</strong></p>
                <ul>
                    <li><strong>Energie:</strong> Technische Dokumentation mehrsprachig</li>
                    <li><strong>Finanzdienstleistungen:</strong> Compliance-konforme Übersetzungen</li>
                    <li><strong>Recht:</strong> Verträge und juristische Dokumente</li>
                    <li><strong>Pharmazie:</strong> Regulatorische Dokumentation, Studien</li>
                </ul>
                <p><strong>ROI-Metriken aus Case Studies:</strong></p>
                <ul>
                    <li>345% ROI</li>
                    <li>2,8 Mio. € Effizienzgewinn über 3 Jahre</li>
                    <li>90% weniger Übersetzungszeit</li>
                    <li>50% reduzierter Aufwand</li>
                </ul>`,
            source: 'DeepL Sales Playbook',
            category: 'casestudies'
        }
    ],

    // Allgemein / Vertriebstipps
    general: [
        {
            id: 'ge-001',
            keywords: ['vertrieb', 'verkauf', 'tipps', 'empfehlung', 'strategie', 'wie verkaufen'],
            question: 'Was sind die wichtigsten Vertriebsempfehlungen?',
            answer: `<p><strong>DeepL Vertriebsempfehlungen:</strong></p>
                <ul>
                    <li><strong>Kundenbedürfnisse individuell adressieren</strong> - Erst verstehen, dann präsentieren</li>
                    <li><strong>Konkrete Vorteile kommunizieren</strong> - ROI, Zeitersparnis, Qualität</li>
                    <li><strong>Bei Datenschutz auf Zertifizierungen hinweisen</strong> - BSI, SOC 2, DSGVO</li>
                    <li><strong>Glossar-Funktion demonstrieren</strong> - Besonders bei Fachbranchen</li>
                    <li><strong>Vergleich mit Google sachlich führen</strong> - Auf eigene Stärken fokussieren</li>
                </ul>`,
            source: 'DeepL Sales Playbook',
            category: 'general'
        },
        {
            id: 'ge-002',
            keywords: ['api', 'entwickler', 'integration', 'technisch', 'anbindung'],
            question: 'Welche API-Möglichkeiten bietet DeepL?',
            answer: `<p><strong>DeepL API für Entwickler:</strong></p>
                <ul>
                    <li><strong>REST API:</strong> Einfache Integration in eigene Anwendungen</li>
                    <li><strong>Erweiterte API-Zugriffe</strong> in Pro-Versionen</li>
                    <li><strong>Dokumentation:</strong> Umfangreiche Developer-Docs verfügbar</li>
                    <li><strong>Use Cases:</strong> Automatisierte Übersetzungs-Workflows, CMS-Integration, E-Commerce</li>
                </ul>
                <p>API-Zugang ist in den kostenpflichtigen Tarifen enthalten.</p>`,
            source: 'DeepL Sales Playbook',
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
    const queryWords = normalizedQuery.split(/\s+/);
    const results = [];
    const categories = Object.keys(FAQ_DATABASE);

    for (const category of categories) {
        for (const entry of FAQ_DATABASE[category]) {
            let matchScore = 0;

            // Check keyword matches
            for (const keyword of entry.keywords) {
                if (normalizedQuery.includes(keyword)) {
                    matchScore += 3;
                } else if (keyword.includes(normalizedQuery)) {
                    matchScore += 2;
                } else {
                    // Check individual word matches
                    for (const word of queryWords) {
                        if (word.length > 2 && keyword.includes(word)) {
                            matchScore += 1;
                        }
                    }
                }
            }

            // Check question match
            const questionLower = entry.question.toLowerCase();
            if (questionLower.includes(normalizedQuery)) {
                matchScore += 2;
            } else {
                for (const word of queryWords) {
                    if (word.length > 2 && questionLower.includes(word)) {
                        matchScore += 0.5;
                    }
                }
            }

            if (matchScore > 0) {
                results.push({
                    ...entry,
                    matchScore: matchScore
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
