// src/components/Services.tsx
import React, { useState } from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { Shield, UserCheck, Flame, Monitor, Heart, ExternalLink } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

// Optimale Bildgrößen:
// - Seitenverhältnis: 16:9 oder 4:3
// - Auflösung: 1200-1500px Breite, 800-900px Höhe
// - Dateigröße: <300KB für schnelle Ladezeiten
// - Format: WebP oder optimiertes JPEG

const Services = () => {
  const [activeTab, setActiveTab] = useState("brandschutz");

  const brandschutzServices = [
    "Beratung und Umsetzung von Brandschutzmaßnahmen",
    "Wartung und Prüfung von Feuerlöschern, Brandschutztüren, Sprinkleranlagen & Wandhydranten",
    "Erstellung von Evakuierungs- und Rettungsplänen",
    "Schulungen & Zertifizierungen für Brandschutzbeauftragte und -helfer",
  ];

  const arbeitsschutzServices = [
    "Externe Fachkräfte für Arbeitssicherheit & Stellung von Betriebsärzten",
    "Schulung & Unterweisung: Sicherheitsbeauftragte, Gefahrstoffe (§14), Atemschutz (DGUV 112-190), Behälterarbeiten & Freimessen (DGUV 113-004)",
    "Ausbildung & Unterweisung für Gabelstapler, Hubarbeitsbühnen, Krane & Arbeiten in der Höhe",
    "Prüfung & Unterweisung: Leitern, Tritte (DGUV 208-016), STK/MDK für med. Produkte & elektrische Betriebsmittel",
    "Persönliche Schutzausrüstung (PSA/PSAgA) – Beratung, Auswahl, Schulung",
    "Erstellung von Betriebsanweisungen & Notfalltafeln für gefährliche Stoffe",
  ];

  const digitaleSchulungenServices = [
    "[Platzhalter] Online-Kurse für Brandschutzhelfer mit interaktiven Modulen",
    "[Platzhalter] Digitale Arbeitsschutz-Unterweisungen nach DGUV-Richtlinien",
    "[Platzhalter] Webinare zu aktuellen Themen in der Arbeitssicherheit",
    "[Platzhalter] E-Learning-Plattform mit Zertifizierungsmöglichkeiten",
    "[Platzhalter] Video-Tutorials für Erste-Hilfe-Maßnahmen am Arbeitsplatz",
  ];

  const ersteHilfeServices = [
    "Betriebliche Ersthelfer Aus- und Fortbildung nach DGUV Grundsatz 304-001",
    "Erste-Hilfe-Kurse für Führerscheinbewerber gemäß FeV-Anforderungen",
    "Ausbildung von Brandschutzhelfern in Theorie und Praxis",
    "Spezielle Erste-Hilfe-Schulungen für Kinder- und Betreuungseinrichtungen",
    "Ausbildung von Rhein-Ruhr Helden mit erweiterten Handlungskompetenzen",
    "Kindernotfallseminare für Eltern, Erzieher und Betreuungspersonal",
    "Erste-Hilfe-Kurse speziell für Trainer in Sportvereinen",
    "AED-Schulungen (Automatisierter Externer Defibrillator) mit praktischen Übungen",
  ];

  const getServiceIcon = (tab) => {
    switch (tab) {
      case "brandschutz":
        return <Flame className="h-6 w-6" />;
      case "arbeitsschutz":
        return <UserCheck className="h-6 w-6" />;
      case "digitaleschulung":
        return <Monitor className="h-6 w-6" />;
      case "erstehilfe":
        return <Heart className="h-6 w-6" />;
      default:
        return <Flame className="h-6 w-6" />;
    }
  };

  const getServiceImage = (tab) => {
    switch (tab) {
      case "brandschutz":
        return "/reiter1.webp";
      case "arbeitsschutz":
        return "/reiter2.webp";
      case "digitaleschulung":
        return "/reiter3.webp";
      case "erstehilfe":
        return "/reiter4.webp"; // Hier wurde das lokale Bild eingebunden
      default:
        return "/reiter1.webp";
    }
  };

  const getServiceTitle = (tab) => {
    switch (tab) {
      case "brandschutz":
        return "Brandschutz";
      case "arbeitsschutz":
        return "Arbeitsschutz";
      case "digitaleschulung":
        return "Digitale Schulungsangebote";
      case "erstehilfe":
        return "Erste-Hilfe-Schulungen";
      default:
        return "Brandschutz";
    }
  };

  const getServiceDescription = (tab) => {
    switch (tab) {
      case "brandschutz":
        return "Umfassender Brandschutz für die Sicherheit Ihrer Mitarbeiter und Einrichtungen.";
      case "arbeitsschutz":
        return "Maßgeschneiderte Arbeitsschutzlösungen für ein sicheres Arbeitsumfeld.";
      case "digitaleschulung":
        return "Moderne digitale Schulungskonzepte für flexible und effiziente Weiterbildung.";
      case "erstehilfe":
        return "Professionelle Erste-Hilfe-Schulungen durch unseren Partner Notfallschulungen Rhein-Ruhr.";
      default:
        return "Umfassender Brandschutz für die Sicherheit Ihrer Mitarbeiter und Einrichtungen.";
    }
  };

  const getServicesList = (tab) => {
    switch (tab) {
      case "brandschutz":
        return brandschutzServices;
      case "arbeitsschutz":
        return arbeitsschutzServices;
      case "digitaleschulung":
        return digitaleSchulungenServices;
      case "erstehilfe":
        return ersteHilfeServices;
      default:
        return brandschutzServices;
    }
  };

  const getServiceButtonText = (tab) => {
    switch (tab) {
      case "brandschutz":
        return "Für Brandschutz beraten lassen";
      case "arbeitsschutz":
        return "Für Arbeitsschutz beraten lassen";
      case "digitaleschulung":
        return "Zu den digitalen Angeboten";
      case "erstehilfe":
        return "Zur Website von Notfallschulungen Rhein-Ruhr";
      default:
        return "Für Brandschutz beraten lassen";
    }
  };

  const getServiceButtonAction = (tab) => {
    if (tab === "erstehilfe") {
      return () => window.open("https://www.notfallschulungen-rhein-ruhr.de/", "_blank");
    } else {
      return () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Prüfen, ob der aktuelle Tab viele Leistungspunkte hat (für dynamische Bildanpassung)
  const hasMoreServices = activeTab === "erstehilfe";

  return (
    <section id="services" className="section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-4">
              Unsere Leistungen
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professionelle Sicherheitslösungen für Ihr Unternehmen
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-700 text-lg">
              Wir bieten umfassende Dienstleistungen in den Bereichen Brandschutz, Arbeitsschutz und digitale Schulungen an,
              die auf die spezifischen Anforderungen Ihres Unternehmens zugeschnitten sind.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-wrap justify-center mb-10 gap-4">
          <ScrollReveal>
            <button
              onClick={() => setActiveTab("brandschutz")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "brandschutz"
                ? "bg-nrr-blue text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Brandschutz
            </button>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <button
              onClick={() => setActiveTab("arbeitsschutz")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "arbeitsschutz"
                ? "bg-nrr-blue text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Arbeitsschutz
            </button>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <button
              onClick={() => setActiveTab("digitaleschulung")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "digitaleschulung"
                ? "bg-nrr-blue text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Digitale Schulungsangebote
            </button>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <button
              onClick={() => setActiveTab("erstehilfe")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${activeTab === "erstehilfe"
                ? "bg-nrr-blue text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
            >
              Erste-Hilfe-Schulungen
            </button>
          </ScrollReveal>
        </div>

        <div className={`grid grid-cols-1 ${hasMoreServices ? 'lg:grid-cols-1 xl:grid-cols-2' : 'lg:grid-cols-2'} gap-10 items-start`}>
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getServiceImage(activeTab)}
                alt={`${getServiceTitle(activeTab)} Leistungen`}
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>

              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
                  <h3 className="text-2xl font-bold mb-3 text-nrr-blue">
                    <span className="flex items-center">
                      {getServiceIcon(activeTab)}
                      <span className="ml-2">{getServiceTitle(activeTab)}</span>
                    </span>
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {getServiceDescription(activeTab)}
                  </p>
                  <CustomButton
                    variant="primary"
                    size="md"
                    onClick={getServiceButtonAction(activeTab)}
                  >
                    {getServiceButtonText(activeTab)}
                    {activeTab === "erstehilfe" && (
                      <ExternalLink className="ml-1 h-4 w-4" />
                    )}
                  </CustomButton>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-6">
                {activeTab === "erstehilfe"
                  ? "Leistungen unseres Partners Notfallschulungen Rhein-Ruhr"
                  : `Unsere ${getServiceTitle(activeTab)}`}
              </h3>
            </ScrollReveal>

            <div className={`grid grid-cols-1 ${hasMoreServices ? 'md:grid-cols-2' : ''} gap-4`}>
              {getServicesList(activeTab).map((service, index) => (
                <ScrollReveal key={index} delay={100 + index * 100}>
                  <div className="flex p-4 rounded-lg before-glass service-card">
                    <div className="mr-4 flex-shrink-0 text-nrr-blue">
                      {getServiceIcon(activeTab)}
                    </div>
                    <div>
                      <p className="text-gray-800">{service}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={500}>
              <div className="mt-8">
                {activeTab === "erstehilfe" ? (
                  <CustomButton
                    variant="primary"
                    size="md"
                    onClick={() => window.open("https://www.notfallschulungen-rhein-ruhr.de/", "_blank")}
                    className="flex items-center"
                  >
                    Zur Website von Notfallschulungen Rhein-Ruhr
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </CustomButton>
                ) : (
                  <CustomButton
                    variant="outline"
                    size="md"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Unverbindliches Angebot anfordern
                  </CustomButton>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;