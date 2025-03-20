import React, { useState, useEffect } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CustomButton from "./ui/CustomButton";
import { X, Info, ShieldCheck, LineChart, Settings } from "lucide-react";
import { Link } from "react-router-dom";

// Cookie-Typen
export type CookiePreferences = {
    necessary: boolean; // Immer true
    analytics: boolean;
    functional: boolean;
};

// Props für die Komponente
type CookieConsentProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onAccept: (preferences: CookiePreferences) => void;
    onDecline: () => void;
    defaultPreferences?: CookiePreferences;
    showTabs?: boolean;
};

const CookieConsent: React.FC<CookieConsentProps> = ({
    open,
    onOpenChange,
    onAccept,
    onDecline,
    defaultPreferences = { necessary: true, analytics: false, functional: false },
    showTabs = false,
}) => {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [activeTab, setActiveTab] = useState<string>("overview");

    // Reset preferences wenn der Dialog neu geöffnet wird
    useEffect(() => {
        if (open) {
            setPreferences(defaultPreferences);
        }
    }, [open, defaultPreferences]);

    const handleAcceptAll = () => {
        const allAccepted: CookiePreferences = {
            necessary: true,
            analytics: true,
            functional: true,
        };
        onAccept(allAccepted);
    };

    const handleAcceptSelected = () => {
        onAccept(preferences);
    };

    const handleDecline = () => {
        onDecline();
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-3xl rounded-xl shadow-lg">
                <DialogHeader className="flex flex-row items-center justify-between">
                    <div>
                        <DialogTitle className="text-xl md:text-2xl font-bold text-nrr-blue">
                            Cookie-Einstellungen
                        </DialogTitle>
                        <DialogDescription className="text-gray-600 mt-2">
                            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
                        </DialogDescription>
                    </div>
                    <div className="shrink-0">
                        <div className="h-12 w-12 rounded-full bg-nrr-gray flex items-center justify-center">
                            <Settings className="h-6 w-6 text-nrr-blue" />
                        </div>
                    </div>
                </DialogHeader>

                {showTabs ? (
                    <Tabs
                        defaultValue="overview"
                        value={activeTab}
                        onValueChange={setActiveTab}
                        className="mt-4"
                    >
                        <TabsList className="w-full grid grid-cols-2">
                            <TabsTrigger value="overview" className="text-sm md:text-base">Übersicht</TabsTrigger>
                            <TabsTrigger value="details" className="text-sm md:text-base">Einstellungen</TabsTrigger>
                        </TabsList>
                        <TabsContent value="overview" className="pt-4">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Einige dieser Cookies sind für den Betrieb der Website unbedingt erforderlich, während andere uns helfen, Ihr Erlebnis zu verbessern.
                                </p>
                                <p>
                                    Weitere Informationen zu den von uns verwendeten Cookies finden Sie in unserer{" "}
                                    <Link to="/datenschutz" className="text-nrr-blue hover:underline">
                                        Datenschutzerklärung
                                    </Link>.
                                </p>
                            </div>
                        </TabsContent>
                        <TabsContent value="details" className="pt-4">
                            <div className="space-y-4">
                                <div className="p-4 rounded-lg border bg-gray-50 flex items-start gap-4">
                                    <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                                    <div className="space-y-2 flex-1">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="necessary" className="text-base font-medium">
                                                Notwendige Cookies
                                            </Label>
                                            <Switch
                                                id="necessary"
                                                checked={preferences.necessary}
                                                disabled
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg border bg-white flex items-start gap-4">
                                    <LineChart className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                                    <div className="space-y-2 flex-1">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="analytics" className="text-base font-medium">
                                                Analyse-Cookies
                                            </Label>
                                            <Switch
                                                id="analytics"
                                                checked={preferences.analytics}
                                                onCheckedChange={(checked) =>
                                                    setPreferences((prev) => ({ ...prev, analytics: checked }))
                                                }
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies ermöglichen es uns zu verstehen, wie Besucher mit unserer Website interagieren und helfen uns, Ihre Erfahrung zu verbessern.
                                        </p>
                                    </div>
                                </div>

                                <div className="p-4 rounded-lg border bg-white flex items-start gap-4">
                                    <Settings className="h-6 w-6 text-purple-600 shrink-0 mt-0.5" />
                                    <div className="space-y-2 flex-1">
                                        <div className="flex justify-between items-center">
                                            <Label htmlFor="functional" className="text-base font-medium">
                                                Funktionale Cookies
                                            </Label>
                                            <Switch
                                                id="functional"
                                                checked={preferences.functional}
                                                onCheckedChange={(checked) =>
                                                    setPreferences((prev) => ({ ...prev, functional: checked }))
                                                }
                                            />
                                        </div>
                                        <p className="text-sm text-gray-600">
                                            Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung auf unserer Website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                ) : (
                    <div className="mt-6 space-y-4">
                        <div className="p-4 rounded-lg border bg-gray-50 flex items-start gap-4">
                            <ShieldCheck className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                            <div className="space-y-2 flex-1">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="necessary-simple" className="text-base font-medium">
                                        Notwendige Cookies
                                    </Label>
                                    <Switch
                                        id="necessary-simple"
                                        checked={preferences.necessary}
                                        disabled
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Diese Cookies sind für das Funktionieren der Website erforderlich.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg border bg-white flex items-start gap-4">
                            <LineChart className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                            <div className="space-y-2 flex-1">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="analytics-simple" className="text-base font-medium">
                                        Analyse-Cookies
                                    </Label>
                                    <Switch
                                        id="analytics-simple"
                                        checked={preferences.analytics}
                                        onCheckedChange={(checked) =>
                                            setPreferences((prev) => ({ ...prev, analytics: checked }))
                                        }
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Diese Cookies helfen uns, die Nutzung der Website zu verstehen.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-lg border bg-white flex items-start gap-4">
                            <Settings className="h-6 w-6 text-purple-600 shrink-0 mt-0.5" />
                            <div className="space-y-2 flex-1">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="functional-simple" className="text-base font-medium">
                                        Funktionale Cookies
                                    </Label>
                                    <Switch
                                        id="functional-simple"
                                        checked={preferences.functional}
                                        onCheckedChange={(checked) =>
                                            setPreferences((prev) => ({ ...prev, functional: checked }))
                                        }
                                    />
                                </div>
                                <p className="text-sm text-gray-600">
                                    Diese Cookies ermöglichen erweiterte Website-Funktionen.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                <div className="mt-2 text-xs text-gray-500">
                    <p>
                        Durch die Nutzung dieser Website stimmen Sie unserer{" "}
                        <Link to="/datenschutz" className="text-nrr-blue hover:underline">
                            Datenschutzerklärung
                        </Link>{" "}
                        zu.
                    </p>
                </div>

                <DialogFooter className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3">
                    {showTabs && activeTab === "details" ? (
                        <>
                            <CustomButton
                                variant="outline"
                                onClick={() => setActiveTab("overview")}
                                className="w-full sm:w-auto order-1 sm:order-none"
                            >
                                Zurück
                            </CustomButton>
                            <div className="flex-1"></div>
                            <CustomButton
                                variant="ghost"
                                onClick={handleDecline}
                                className="w-full sm:w-auto"
                            >
                                Ablehnen
                            </CustomButton>
                            <CustomButton
                                variant="outline"
                                onClick={handleAcceptSelected}
                                className="w-full sm:w-auto"
                            >
                                Auswahl akzeptieren
                            </CustomButton>
                            <CustomButton
                                variant="primary"
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto"
                            >
                                Alle akzeptieren
                            </CustomButton>
                        </>
                    ) : showTabs && activeTab === "overview" ? (
                        <>
                            <CustomButton
                                variant="ghost"
                                onClick={handleDecline}
                                className="w-full sm:w-auto order-1 sm:order-none"
                            >
                                Ablehnen
                            </CustomButton>
                            <div className="flex-1"></div>
                            <CustomButton
                                variant="outline"
                                onClick={() => setActiveTab("details")}
                                className="w-full sm:w-auto"
                            >
                                Einstellungen
                            </CustomButton>
                            <CustomButton
                                variant="primary"
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto"
                            >
                                Alle akzeptieren
                            </CustomButton>
                        </>
                    ) : (
                        <>
                            <CustomButton
                                variant="ghost"
                                onClick={handleDecline}
                                className="w-full sm:w-auto order-1 sm:order-none"
                            >
                                Ablehnen
                            </CustomButton>
                            <div className="flex-1"></div>
                            <CustomButton
                                variant="outline"
                                onClick={() => onOpenChange(true)}
                                className="w-full sm:w-auto"
                            >
                                Einstellungen
                            </CustomButton>
                            <CustomButton
                                variant="primary"
                                onClick={handleAcceptAll}
                                className="w-full sm:w-auto"
                            >
                                Alle akzeptieren
                            </CustomButton>
                        </>
                    )}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default CookieConsent;