// src/providers/CookieConsentProvider.tsx

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import { useCookieConsent } from '@/hooks/use-cookie-consent';
import CookieBanner from '@/components/CookieBanner';
import CookieConsent from '@/components/CookieConsent';
import { processCookiePreferences } from '@/utils/cookie-utils';
import type { CookiePreferences } from '@/components/CookieConsent';

// Kontext-Typ
type CookieConsentContextType = {
    preferences: CookiePreferences;
    consentGiven: boolean;
    openSettings: () => void;
    resetConsent: () => void;
};

// Kontext erstellen
const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

// Hook für den Zugriff auf den Kontext
export const useCookieConsentContext = () => {
    const context = useContext(CookieConsentContext);
    if (context === undefined) {
        throw new Error('useCookieConsentContext must be used within a CookieConsentProvider');
    }
    return context;
};

// Provider-Eigenschaften
type CookieConsentProviderProps = {
    children: ReactNode;
};

// Provider-Komponente
export const CookieConsentProvider: React.FC<CookieConsentProviderProps> = ({ children }) => {
    const {
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
    } = useCookieConsent();

    // Cookie-Einstellungen anwenden, wenn sie sich ändern
    useEffect(() => {
        try {
            if (consentGiven) {
                processCookiePreferences(preferences);
            }
        } catch (error) {
            console.warn('Fehler beim Anwenden der Cookie-Einstellungen:', error);
        }
    }, [preferences, consentGiven]);

    // Kontext-Wert
    const contextValue: CookieConsentContextType = {
        preferences,
        consentGiven,
        openSettings,
        resetConsent,
    };

    return (
        <CookieConsentContext.Provider value={contextValue}>
            {children}

            {/* Cookie-Banner (unten auf der Seite) */}
            {showBanner && (
                <CookieBanner
                    onAcceptAll={acceptAll}
                    onDecline={declineAll}
                    onOpenSettings={openSettings}
                />
            )}

            {/* Cookie-Einstellungen Dialog */}
            <CookieConsent
                open={showSettings}
                onOpenChange={setShowSettings}
                onAccept={acceptSelected}
                onDecline={declineAll}
                defaultPreferences={preferences}
                showTabs={true}
            />
        </CookieConsentContext.Provider>
    );
};