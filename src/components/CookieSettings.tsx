import React, { useState } from "react";
import Container from "./ui/Container";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CustomButton from "./ui/CustomButton";
import { ShieldCheck, LineChart, Settings, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import type { CookiePreferences } from "./CookieConsent";
import { useCookieConsent } from "@/hooks/use-cookie-consent";
import ScrollReveal from "./ui/ScrollReveal";

const CookieSettings = () => {
  const navigate = useNavigate();
  const {
    preferences: currentPreferences,
    acceptSelected,
    resetConsent
  } = useCookieConsent();

  const [preferences, setPreferences] = useState<CookiePreferences>({
    ...currentPreferences
  });

  const handleSave = () => {
    acceptSelected(preferences);
    navigate("/");
  };

  const handleReset = () => {
    resetConsent();
    navigate("/");
  };

  // Zurück zur Startseite
  const handleBack = () => {
    navigate("/");
  };

  // Beim Laden der Komponente ans Seitenanfang scrollen
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-24 bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Container className="max-w-4xl">
        <div className="mb-8">
          <CustomButton
            variant="ghost"
            size="sm"
            onClick={handleBack}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Startseite</span>
          </CustomButton>
        </div>

        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-balance">Cookie-Einstellungen</h1>
          <p className="text-gray-700 mb-8">
            Hier können Sie festlegen, welche Cookies Sie auf unserer Website zulassen möchten.
            Notwendige Cookies werden immer aktiviert, da sie für das Funktionieren der Website erforderlich sind.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-nrr-blue">Ihre Cookie-Präferenzen</CardTitle>
              <CardDescription>
                Wählen Sie aus, welche Arten von Cookies Sie akzeptieren möchten.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
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
                    Diese Cookies sind für das Funktionieren der Website unbedingt erforderlich und können nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, wie etwa dem Festlegen Ihrer Datenschutzeinstellungen oder dem Ausfüllen von Formularen.
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
                    Diese Cookies ermöglichen es uns zu verstehen, wie Besucher mit unserer Website interagieren, indem sie Informationen anonym sammeln und melden. Sie helfen uns, die Nutzung und Leistung unserer Website zu messen und zu verbessern.
                  </p>
                  <div className="text-xs text-gray-500 mt-1">
                    <p>Verwendete Dienste: Google Analytics, Firebase Analytics</p>
                  </div>
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
                    Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung auf unserer Website. Sie können von uns oder von Drittanbietern gesetzt werden, deren Dienste wir auf unseren Seiten verwenden.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-3 justify-between border-t p-6">
              <CustomButton
                variant="outline"
                onClick={handleReset}
                className="w-full sm:w-auto"
              >
                Zurücksetzen
              </CustomButton>
              <CustomButton
                variant="primary"
                onClick={handleSave}
                className="w-full sm:w-auto"
              >
                Einstellungen speichern
              </CustomButton>
            </CardFooter>
          </Card>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-8 text-sm text-gray-600">
            <p>
              Weitere Informationen über die Verwendung von Cookies auf unserer Website finden Sie in unserer{" "}
              <Link to="/datenschutz" className="text-nrr-blue hover:underline">
                Datenschutzerklärung
              </Link>.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
};

export default CookieSettings;