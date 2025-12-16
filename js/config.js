/**
 * DeepL Sales Assistant - Konfiguration
 *
 * Hier die Google Apps Script Web-App URL eintragen nach dem Deployment.
 */

const CONFIG = {
    // =========================================================================
    // GOOGLE APPS SCRIPT URL
    // =========================================================================
    // Nach dem Deployment des Apps Scripts hier die URL eintragen:
    // Format: https://script.google.com/macros/s/XXXX.../exec
    //
    // Anleitung:
    // 1. Öffne https://script.google.com
    // 2. Erstelle neues Projekt, kopiere Code aus google-apps-script/Code.gs
    // 3. Deploy > Neue Bereitstellung > Web-App
    // 4. Ausführen als: Ich selbst
    // 5. Zugriff: Jeder
    // 6. URL hier einfügen:

    APPS_SCRIPT_URL: '',  // <-- HIER DEINE URL EINTRAGEN

    // =========================================================================
    // FALLBACK MODUS
    // =========================================================================
    // Wenn keine Apps Script URL konfiguriert ist, wird die lokale
    // FAQ-Datenbank (faq-data.js) verwendet.

    USE_LOCAL_FALLBACK: true,

    // =========================================================================
    // UI EINSTELLUNGEN
    // =========================================================================

    // Typing-Indikator Verzögerung (ms)
    TYPING_DELAY: 800,

    // Maximale Ergebnisse anzeigen
    MAX_RESULTS: 3,

    // =========================================================================
    // GOOGLE DRIVE
    // =========================================================================

    // Standard Google Drive Ordner URL (optional)
    GOOGLE_DRIVE_FOLDER: 'https://drive.google.com/drive/folders/1TozcvoTorkPpFxbUHBC-PLBwLkoVZWGO'
};

// Export für globalen Zugriff
window.APP_CONFIG = CONFIG;
