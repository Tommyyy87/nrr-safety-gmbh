// src/utils/cookie-utils.ts

import type { CookiePreferences } from "@/components/CookieConsent";

/**
 * Initialisiert Google Analytics (Firebase Analytics) basierend auf den Cookie-Einstellungen
 * 
 * @param preferences Die Cookie-Einstellungen
 */
export function initializeAnalytics(preferences: CookiePreferences) {
    try {
        // Wenn Analytics-Cookies verweigert wurden, Google Analytics deaktivieren
        if (!preferences.analytics) {
            disableAnalytics();
            return;
        }

        // Google Analytics aktivieren
        enableAnalytics();
    } catch (error) {
        console.warn("Fehler bei der Initialisierung von Analytics:", error);
        // Fehler abfangen und nicht weitergeben
    }
}

/**
 * Google Analytics aktivieren
 */
function enableAnalytics() {
    try {
        // Speichern der Einstellung im localStorage
        localStorage.setItem('ga-disable', 'false');

        // Wenn die analytics.js oder gtag.js bereits geladen ist
        if (window.gaData || window.ga || window.gtag) {
            // Analytics ist bereits geladen, erlaube die Datenerfassung
            if (window.gtag) {
                window.gtag('consent', 'update', {
                    'analytics_storage': 'granted',
                });
            }

            // Für analytics.js
            if (window.ga) {
                window.ga('set', 'anonymizeIp', false);
            }
        } else {
            console.info('Google Analytics wurde entsprechend der Cookie-Einstellungen aktiviert.');
        }
    } catch (error) {
        console.warn('Fehler beim Aktivieren von Analytics:', error);
        // Fehler abfangen und nicht weitergeben
    }
}

/**
 * Google Analytics deaktivieren
 */
function disableAnalytics() {
    try {
        // Speichern der Einstellung im localStorage
        localStorage.setItem('ga-disable', 'true');

        // Google Analytics Opt-Out
        window['ga-disable-UA-XXXXXXXX-X'] = true; // UA-ID mit der tatsächlichen ID ersetzen

        // Für Global Site Tag (gtag.js)
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'analytics_storage': 'denied',
            });
        }

        // Für analytics.js
        if (window.ga) {
            window.ga('set', 'anonymizeIp', true);
        }

        console.info('Google Analytics wurde entsprechend der Cookie-Einstellungen deaktiviert.');
    } catch (error) {
        console.warn('Fehler beim Deaktivieren von Analytics:', error);
        // Fehler abfangen und nicht weitergeben
    }
}

/**
 * Initialisiert funktionale Cookie-Features
 * 
 * @param preferences Die Cookie-Einstellungen
 */
export function initializeFunctionalCookies(preferences: CookiePreferences) {
    try {
        if (!preferences.functional) {
            // Funktionale Cookies deaktivieren
            console.info('Funktionale Cookies wurden deaktiviert.');
            return;
        }

        // Funktionale Cookies aktivieren
        console.info('Funktionale Cookies wurden aktiviert.');
    } catch (error) {
        console.warn('Fehler beim Initialisieren funktionaler Cookies:', error);
        // Fehler abfangen und nicht weitergeben
    }
}

/**
 * Verarbeitet alle Cookie-Einstellungen
 * 
 * @param preferences Die Cookie-Einstellungen
 */
export function processCookiePreferences(preferences: CookiePreferences) {
    try {
        // Notwendige Cookies werden immer geladen

        // Analytics-Cookies verarbeiten
        initializeAnalytics(preferences);

        // Funktionale Cookies verarbeiten
        initializeFunctionalCookies(preferences);
    } catch (error) {
        console.warn('Fehler bei der Verarbeitung der Cookie-Einstellungen:', error);
        // Fehler abfangen und nicht weitergeben
    }
}

// Typdefinitionen für Google Analytics
declare global {
    interface Window {
        ga?: any;
        gaData?: any;
        gtag?: (...args: any[]) => void;
        dataLayer?: any[];
        'ga-disable-UA-XXXXXXXX-X'?: boolean;
    }
}