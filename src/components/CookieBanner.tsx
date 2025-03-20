import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./ui/CustomButton";
import { ArrowRight } from "lucide-react";

type CookieBannerProps = {
    onAcceptAll: () => void;
    onDecline: () => void;
    onOpenSettings: () => void;
};

const CookieBanner: React.FC<CookieBannerProps> = ({
    onAcceptAll,
    onDecline,
    onOpenSettings,
}) => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 z-50 p-4 animate-in slide-in-from-bottom duration-500">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="flex-1 pr-4">
                        <h3 className="text-lg font-semibold text-nrr-blue mb-2">Wir respektieren Ihre Privatsphäre</h3>
                        <p className="text-gray-700 text-sm">
                            Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Weitere Informationen finden Sie in unserer{" "}
                            <Link to="/datenschutz" className="text-nrr-blue hover:underline">
                                Datenschutzerklärung
                            </Link>.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
                        <CustomButton
                            variant="ghost"
                            onClick={onDecline}
                            className="sm:order-1 order-3"
                        >
                            Ablehnen
                        </CustomButton>
                        <CustomButton
                            variant="outline"
                            onClick={onOpenSettings}
                            className="flex items-center gap-2 sm:order-2 order-2"
                        >
                            Einstellungen
                            <ArrowRight className="h-4 w-4" />
                        </CustomButton>
                        <CustomButton
                            variant="primary"
                            onClick={onAcceptAll}
                            className="sm:order-3 order-1"
                        >
                            Alle akzeptieren
                        </CustomButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookieBanner;