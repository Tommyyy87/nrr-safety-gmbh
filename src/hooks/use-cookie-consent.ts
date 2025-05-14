// src/hooks/use-cookie-consent.ts

import { useState, useEffect } from "react";
import type { CookiePreferences } from "@/components/CookieConsent";

const COOKIE_CONSENT_KEY = "nrr-cookie-consent";
const COOKIE_VERSION = "1.0"; // Wenn sich die Cookie-Struktur ändert, Version erhöhen

// Basis-Standardeinstellungen für Cookies
const defaultPreferences: CookiePreferences = {
    necessary: true, // Immer true
    analytics: false,
    functional: false,
};

interface StoredConsent {
    version: string;
    preferences: CookiePreferences;
    consentGiven: boolean;
    lastUpdated: string;
}

export function useCookieConsent() {
    // Zustand für Cookie-Einstellungen
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    // Zustand, ob Zustimmung gegeben wurde
    const [consentGiven, setConsentGiven] = useState<boolean>(false);

    // Zustand, ob der Cookie-Banner angezeigt werden soll
    const [showBanner, setShowBanner] = useState<boolean>(false);

    // Zustand, ob der Cookie-Einstellungsdialog angezeigt werden soll
    const [showSettings, setShowSettings] = useState<boolean>(false);

    // Beim ersten Laden, Cookie-Einstellungen aus dem localStorage laden
    useEffect(() => {
        const loadConsent = () => {
            try {
                const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY);

                if (!storedConsent) {
                    // Keine gespeicherten Einstellungen gefunden, Banner anzeigen
                    setShowBanner(true);
                    return;
                }

                const parsedConsent: StoredConsent = JSON.parse(storedConsent);

                // Wenn die Version nicht übereinstimmt, Banner anzeigen
                if (parsedConsent.version !== COOKIE_VERSION) {
                    setShowBanner(true);
                    return;
                }

                // Gespeicherte Einstellungen übernehmen
                setPreferences(parsedConsent.preferences);
                setConsentGiven(parsedConsent.consentGiven);

                // Wenn keine Zustimmung gegeben wurde, Banner anzeigen
                if (!parsedConsent.consentGiven) {
                    setShowBanner(true);
                }
            } catch (error) {
                console.warn("Fehler beim Laden der Cookie-Einstellungen:", error);
                setShowBanner(true);
            }
        };

        loadConsent();
    }, []);

    // Cookie-Einstellungen speichern
    const saveConsent = (newPreferences: CookiePreferences, hasConsented: boolean) => {
        try {
            const consent: StoredConsent = {
                version: COOKIE_VERSION,
                preferences: newPreferences,
                consentGiven: hasConsented,
                lastUpdated: new Date().toISOString(),
            };

            localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
            setPreferences(newPreferences);
            setConsentGiven(hasConsented);
        } catch (error) {
            console.warn("Fehler beim Speichern der Cookie-Einstellungen:", error);
        }
    };

    // Alle Cookies akzeptieren
    const acceptAll = () => {
        try {
            const allAccepted: CookiePreferences = {
                necessary: true,
                analytics: true,
                functional: true,
            };

            saveConsent(allAccepted, true);
            setShowBanner(false);
            setShowSettings(false);
        } catch (error) {
            console.warn("Fehler beim Akzeptieren aller Cookies:", error);
        }
    };

    // Ausgewählte Cookies akzeptieren
    const acceptSelected = (selectedPreferences: CookiePreferences) => {
        try {
            saveConsent({ ...selectedPreferences, necessary: true }, true);
            setShowBanner(false);
            setShowSettings(false);
        } catch (error) {
            console.warn("Fehler beim Akzeptieren ausgewählter Cookies:", error);
        }
    };

    // Alle Cookies ablehnen (nur notwendige akzeptieren)
    const declineAll = () => {
        try {
            saveConsent({ ...defaultPreferences, necessary: true }, true);
            setShowBanner(false);
            setShowSettings(false);
        } catch (error) {
            console.warn("Fehler beim Ablehnen aller Cookies:", error);
        }
    };

    // Cookie-Einstellungsdialog öffnen
    const openSettings = () => {
        try {
            setShowSettings(true);
            setShowBanner(false);
        } catch (error) {
            console.warn("Fehler beim Öffnen der Cookie-Einstellungen:", error);
        }
    };

    // Cookie-Einstellungen zurücksetzen
    const resetConsent = () => {
        try {
            localStorage.removeItem(COOKIE_CONSENT_KEY);
            setPreferences(defaultPreferences);
            setConsentGiven(false);
            setShowBanner(true);
        } catch (error) {
            console.warn("Fehler beim Zurücksetzen der Cookie-Einstellungen:", error);
        }
    };

    return {
        preferences,
        consentGiven,
        showBanner,
        showSettings,
        setShowSettings,
        acceptAll,
        acceptSelected,
        declineAll,
        openSettings,
        resetConsent,
    };
}