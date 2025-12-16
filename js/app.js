/**
 * GTM Sales Readiness Assistant - Main Application
 */

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        googleDriveUrl: localStorage.getItem('gtm-drive-url') || '',
        typingDelay: 800,
        storageKeys: {
            driveUrl: 'gtm-drive-url',
            checklist: 'gtm-checklist-state',
            checklistNotes: 'gtm-checklist-notes'
        }
    };

    // DOM Elements
    const elements = {
        // Navigation
        navItems: document.querySelectorAll('.nav-item[data-view]'),
        topicItems: document.querySelectorAll('.nav-item[data-topic]'),
        views: document.querySelectorAll('.view'),

        // Chat
        chatMessages: document.getElementById('chat-messages'),
        chatForm: document.getElementById('chat-form'),
        chatInput: document.getElementById('chat-input'),
        sendButton: document.getElementById('send-button'),
        clearChat: document.getElementById('clear-chat'),
        suggestions: document.getElementById('suggestions'),

        // Checklist
        checkboxes: document.querySelectorAll('.checkbox-container input'),
        noteFields: document.querySelectorAll('.checklist-notes textarea'),
        progressFill: document.getElementById('progress-fill'),
        progressText: document.getElementById('progress-text'),
        readinessScore: document.getElementById('readiness-score'),
        assumptionsList: document.getElementById('assumptions-list'),

        // Documents
        driveUrlInput: document.getElementById('drive-url-input'),
        saveDriveUrl: document.getElementById('save-drive-url'),
        driveFolderLink: document.getElementById('drive-folder-link'),
        googleDriveLink: document.getElementById('google-drive-link')
    };

    // =========================================================================
    // Navigation
    // =========================================================================

    function initNavigation() {
        // View navigation
        elements.navItems.forEach(item => {
            item.addEventListener('click', () => {
                const viewId = item.dataset.view;
                switchView(viewId);
                updateActiveNav(item, 'data-view');
            });
        });

        // Topic quick access
        elements.topicItems.forEach(item => {
            item.addEventListener('click', () => {
                const topic = item.dataset.topic;
                switchView('chat');
                updateActiveNav(document.querySelector('[data-view="chat"]'), 'data-view');
                handleTopicClick(topic);
            });
        });
    }

    function switchView(viewId) {
        elements.views.forEach(view => {
            view.classList.remove('active');
        });
        document.getElementById(`${viewId}-view`).classList.add('active');
    }

    function updateActiveNav(activeItem, dataAttr) {
        document.querySelectorAll(`.nav-item[${dataAttr}]`).forEach(item => {
            item.classList.remove('active');
        });
        activeItem.classList.add('active');
    }

    function handleTopicClick(topic) {
        const topicQueries = {
            playbook: 'Was bietet DeepL als Produkt?',
            pricing: 'Was sind die aktuellen DeepL Preise?',
            objections: 'Wie reagiere ich auf den Einwand zu teuer?',
            competitors: 'Wie unterscheidet sich DeepL von Google Translate?'
        };

        const query = topicQueries[topic];
        if (query) {
            elements.chatInput.value = query;
            handleChatSubmit(new Event('submit'));
        }
    }

    // =========================================================================
    // Chat Functionality
    // =========================================================================

    function initChat() {
        elements.chatForm.addEventListener('submit', handleChatSubmit);
        elements.clearChat.addEventListener('click', clearChat);

        // Suggestion chips
        document.querySelectorAll('.suggestion-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                elements.chatInput.value = chip.dataset.query;
                handleChatSubmit(new Event('submit'));
            });
        });

        // Enter key handling
        elements.chatInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleChatSubmit(e);
            }
        });
    }

    function handleChatSubmit(e) {
        e.preventDefault();

        const query = elements.chatInput.value.trim();
        if (!query) return;

        // Add user message
        addMessage(query, 'user');
        elements.chatInput.value = '';

        // Show typing indicator
        showTypingIndicator();

        // Search and respond
        setTimeout(() => {
            removeTypingIndicator();
            const results = window.FAQ.search(query);
            respondToQuery(query, results);
        }, CONFIG.typingDelay);
    }

    function addMessage(content, type, source = null, assumptions = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;

        if (type === 'user') {
            messageDiv.innerHTML = `
                <div class="message-avatar"></div>
                <div class="message-content">
                    <div class="message-text">${escapeHtml(content)}</div>
                </div>
            `;
        } else {
            let sourceHtml = '';
            if (source) {
                sourceHtml = `
                    <div class="message-source">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                            <polyline points="14 2 14 8 20 8"/>
                        </svg>
                        Quelle: ${escapeHtml(source)}
                    </div>
                `;
            }

            let assumptionsHtml = '';
            if (assumptions) {
                assumptionsHtml = `
                    <div class="message-assumptions">
                        <strong>Key Assumptions/Notes:</strong> ${escapeHtml(assumptions)}
                    </div>
                `;
            }

            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5"/>
                        <path d="M2 12l10 5 10-5"/>
                    </svg>
                </div>
                <div class="message-content">
                    <div class="message-text">${content}</div>
                    ${sourceHtml}
                    ${assumptionsHtml}
                </div>
            `;
        }

        elements.chatMessages.appendChild(messageDiv);
        scrollToBottom();
    }

    function respondToQuery(query, results) {
        if (results.length === 0) {
            addMessage(
                `<p>Leider konnte ich keine passende Information zu Ihrer Anfrage finden.</p>
                <p><strong>Vorschläge:</strong></p>
                <ul>
                    <li>Versuchen Sie andere Suchbegriffe</li>
                    <li>Nutzen Sie die Schnellzugriff-Themen in der Seitenleiste</li>
                    <li>Prüfen Sie die Dokumente im Google Drive Ordner</li>
                </ul>`,
                'bot',
                null,
                'Keine exakte Übereinstimmung gefunden. Die Wissensdatenbank wird kontinuierlich erweitert.'
            );
            return;
        }

        // Return the best match
        const bestMatch = results[0];
        addMessage(
            bestMatch.answer,
            'bot',
            bestMatch.source,
            bestMatch.assumptions || null
        );

        // If there are more results, hint at them
        if (results.length > 1) {
            setTimeout(() => {
                addMessage(
                    `<p><strong>Verwandte Themen gefunden (${results.length - 1}):</strong></p>
                    <ul>
                        ${results.slice(1, 4).map(r => `<li>${r.question}</li>`).join('')}
                    </ul>
                    <p>Fragen Sie gerne nach einem dieser Themen.</p>`,
                    'bot'
                );
            }, 500);
        }
    }

    function showTypingIndicator() {
        const indicator = document.createElement('div');
        indicator.className = 'message bot-message typing-message';
        indicator.innerHTML = `
            <div class="message-avatar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
            </div>
            <div class="message-content">
                <div class="message-text">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        `;
        elements.chatMessages.appendChild(indicator);
        scrollToBottom();
    }

    function removeTypingIndicator() {
        const indicator = document.querySelector('.typing-message');
        if (indicator) {
            indicator.remove();
        }
    }

    function clearChat() {
        // Keep only the welcome message
        const welcomeMessage = elements.chatMessages.querySelector('.message');
        elements.chatMessages.innerHTML = '';
        if (welcomeMessage) {
            elements.chatMessages.appendChild(welcomeMessage.cloneNode(true));
        }
        elements.chatInput.value = '';
    }

    function scrollToBottom() {
        elements.chatMessages.scrollTop = elements.chatMessages.scrollHeight;
    }

    // =========================================================================
    // Checklist Functionality
    // =========================================================================

    function initChecklist() {
        // Load saved state
        loadChecklistState();

        // Checkbox change handlers
        elements.checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                saveChecklistState();
                updateProgress();
            });
        });

        // Note field handlers
        elements.noteFields.forEach(field => {
            field.addEventListener('input', debounce(() => {
                saveChecklistNotes();
                updateAssumptions();
            }, 500));
        });

        // Initial progress update
        updateProgress();
        updateAssumptions();
    }

    function loadChecklistState() {
        const savedState = localStorage.getItem(CONFIG.storageKeys.checklist);
        const savedNotes = localStorage.getItem(CONFIG.storageKeys.checklistNotes);

        if (savedState) {
            const state = JSON.parse(savedState);
            elements.checkboxes.forEach(checkbox => {
                const step = checkbox.dataset.step;
                if (state[step]) {
                    checkbox.checked = true;
                }
            });
        }

        if (savedNotes) {
            const notes = JSON.parse(savedNotes);
            elements.noteFields.forEach(field => {
                const step = field.dataset.notes;
                if (notes[step]) {
                    field.value = notes[step];
                }
            });
        }
    }

    function saveChecklistState() {
        const state = {};
        elements.checkboxes.forEach(checkbox => {
            state[checkbox.dataset.step] = checkbox.checked;
        });
        localStorage.setItem(CONFIG.storageKeys.checklist, JSON.stringify(state));
    }

    function saveChecklistNotes() {
        const notes = {};
        elements.noteFields.forEach(field => {
            if (field.value.trim()) {
                notes[field.dataset.notes] = field.value.trim();
            }
        });
        localStorage.setItem(CONFIG.storageKeys.checklistNotes, JSON.stringify(notes));
    }

    function updateProgress() {
        const total = elements.checkboxes.length;
        const completed = Array.from(elements.checkboxes).filter(cb => cb.checked).length;
        const percentage = Math.round((completed / total) * 100);

        elements.progressFill.style.width = `${percentage}%`;
        elements.progressText.textContent = `${completed} von ${total} abgeschlossen`;

        const scoreValue = elements.readinessScore.querySelector('.score-value');
        scoreValue.textContent = `${percentage}%`;

        // Update color based on score
        if (percentage >= 80) {
            scoreValue.style.color = '#059669'; // Green
        } else if (percentage >= 50) {
            scoreValue.style.color = '#d97706'; // Gold
        } else {
            scoreValue.style.color = '#1e3a8a'; // Navy
        }
    }

    function updateAssumptions() {
        const savedNotes = localStorage.getItem(CONFIG.storageKeys.checklistNotes);
        const checklistLabels = {
            '1': 'Produktkenntnis',
            '2': 'Zielkundenprofil',
            '3': 'Wettbewerbsanalyse',
            '4': 'Einwandbehandlung',
            '5': 'Preismodell',
            '6': 'Sales-Prozess',
            '7': 'Materialien'
        };

        if (!savedNotes) {
            elements.assumptionsList.innerHTML = '<p class="no-assumptions">Keine Anmerkungen vorhanden. Fügen Sie Notizen zu den Checklisten-Punkten hinzu.</p>';
            return;
        }

        const notes = JSON.parse(savedNotes);
        const noteEntries = Object.entries(notes);

        if (noteEntries.length === 0) {
            elements.assumptionsList.innerHTML = '<p class="no-assumptions">Keine Anmerkungen vorhanden. Fügen Sie Notizen zu den Checklisten-Punkten hinzu.</p>';
            return;
        }

        // Check for incomplete items
        const incompleteItems = [];
        elements.checkboxes.forEach(checkbox => {
            if (!checkbox.checked) {
                incompleteItems.push(checklistLabels[checkbox.dataset.step]);
            }
        });

        let html = '';

        if (incompleteItems.length > 0) {
            html += `<div class="assumption-item">
                <strong>Offene Punkte:</strong> ${incompleteItems.join(', ')}
            </div>`;
        }

        noteEntries.forEach(([step, note]) => {
            html += `<div class="assumption-item">
                <strong>${checklistLabels[step]}:</strong> ${escapeHtml(note)}
            </div>`;
        });

        elements.assumptionsList.innerHTML = html;
    }

    // =========================================================================
    // Google Drive Integration
    // =========================================================================

    function initDriveIntegration() {
        // Load saved URL
        if (CONFIG.googleDriveUrl) {
            elements.driveUrlInput.value = CONFIG.googleDriveUrl;
            updateDriveLinks(CONFIG.googleDriveUrl);
        }

        // Save URL handler
        elements.saveDriveUrl.addEventListener('click', () => {
            const url = elements.driveUrlInput.value.trim();
            if (url && isValidDriveUrl(url)) {
                localStorage.setItem(CONFIG.storageKeys.driveUrl, url);
                CONFIG.googleDriveUrl = url;
                updateDriveLinks(url);
                showNotification('Google Drive URL gespeichert');
            } else if (!url) {
                localStorage.removeItem(CONFIG.storageKeys.driveUrl);
                CONFIG.googleDriveUrl = '';
                updateDriveLinks('');
                showNotification('Google Drive URL entfernt');
            } else {
                showNotification('Bitte geben Sie eine gültige Google Drive URL ein', 'error');
            }
        });
    }

    function isValidDriveUrl(url) {
        return url.includes('drive.google.com') || url.includes('docs.google.com');
    }

    function updateDriveLinks(url) {
        const defaultUrl = '#';
        const targetUrl = url || defaultUrl;

        if (elements.driveFolderLink) {
            elements.driveFolderLink.href = targetUrl;
            if (!url) {
                elements.driveFolderLink.addEventListener('click', handleEmptyDriveLink);
            } else {
                elements.driveFolderLink.removeEventListener('click', handleEmptyDriveLink);
            }
        }

        if (elements.googleDriveLink) {
            elements.googleDriveLink.href = targetUrl;
            if (!url) {
                elements.googleDriveLink.addEventListener('click', handleEmptyDriveLink);
            } else {
                elements.googleDriveLink.removeEventListener('click', handleEmptyDriveLink);
            }
        }
    }

    function handleEmptyDriveLink(e) {
        e.preventDefault();
        switchView('documents');
        updateActiveNav(document.querySelector('[data-view="documents"]'), 'data-view');
        elements.driveUrlInput.focus();
        showNotification('Bitte konfigurieren Sie zuerst die Google Drive URL', 'warning');
    }

    // =========================================================================
    // Utility Functions
    // =========================================================================

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    function showNotification(message, type = 'success') {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            padding: 12px 24px;
            background-color: ${type === 'error' ? '#dc2626' : type === 'warning' ? '#d97706' : '#059669'};
            color: white;
            border-radius: 6px;
            font-size: 14px;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        // Add animation keyframes if not exists
        if (!document.getElementById('notification-styles')) {
            const style = document.createElement('style');
            style.id = 'notification-styles';
            style.textContent = `
                @keyframes slideIn {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(notification);

        // Remove after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideIn 0.3s ease reverse';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    // =========================================================================
    // Initialization
    // =========================================================================

    function init() {
        initNavigation();
        initChat();
        initChecklist();
        initDriveIntegration();

        // Focus chat input on load
        elements.chatInput.focus();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
