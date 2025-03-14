
import React, { useState } from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { Shield, UserCheck, Flame, Cpu } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Services = () => {
  const [activeTab, setActiveTab] = useState("brandschutz");

  const brandschutzServices = [
    "Beratung und Umsetzung von Brandschutzmaßnahmen",
    "Wartung und Prüfung von Feuerlöschern, Brandschutztüren, Sprinkleranlagen & Wandhydranten",
    "Erstellung von Evakuierungs- und Rettungsplänen",
    "Schulungen & Zertifizierungen für Brandschutzbeauftragte und -helfer",
  ];

  const arbeitsschutzServices = [
    "Stellung externer Fachkräfte für Arbeitssicherheit",
    "Ausbildung & Unterweisung für Gabelstapler, Hubarbeitsbühnen, Krane & Höhenarbeit",
    "Prüfung und Sicherheitskonzepte für Arbeits- und Schutzgerüste, Aufzugsanlagen & elektrische Betriebsmittel",
    "Persönliche Schutzausrüstung (PSA) – Beratung, Auswahl und Schulung",
  ];

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
              Wir bieten umfassende Dienstleistungen in den Bereichen Brandschutz und Arbeitsschutz an, 
              die auf die spezifischen Anforderungen Ihres Unternehmens zugeschnitten sind.
            </p>
          </ScrollReveal>
        </div>

        <div className="flex flex-col md:flex-row justify-center mb-10 space-y-4 md:space-y-0 md:space-x-4">
          <ScrollReveal>
            <button
              onClick={() => setActiveTab("brandschutz")}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "brandschutz"
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
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "arbeitsschutz"
                  ? "bg-nrr-blue text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Arbeitsschutz
            </button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <ScrollReveal direction="right">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={
                  activeTab === "brandschutz"
                    ? "https://images.unsplash.com/photo-1599177254953-42253b5e3d65?q=80&w=2070&auto=format&fit=crop"
                    : "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop"
                }
                alt={
                  activeTab === "brandschutz"
                    ? "Brandschutz Dienstleistungen"
                    : "Arbeitsschutz Dienstleistungen"
                }
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20"></div>
              
              <div className="absolute bottom-0 left-0 p-8">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg max-w-md">
                  <h3 className="text-2xl font-bold mb-3 text-nrr-blue">
                    {activeTab === "brandschutz" ? (
                      <span className="flex items-center">
                        <Flame className="mr-2 h-6 w-6" /> Brandschutz
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Shield className="mr-2 h-6 w-6" /> Arbeitsschutz
                      </span>
                    )}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {activeTab === "brandschutz"
                      ? "Umfassender Brandschutz für die Sicherheit Ihrer Mitarbeiter und Einrichtungen."
                      : "Maßgeschneiderte Arbeitsschutzlösungen für ein sicheres Arbeitsumfeld."}
                  </p>
                  <CustomButton
                    variant="primary"
                    size="md"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {activeTab === "brandschutz"
                      ? "Für Brandschutz beraten lassen"
                      : "Für Arbeitsschutz beraten lassen"}
                  </CustomButton>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div>
            <ScrollReveal>
              <h3 className="text-2xl font-bold mb-6">
                {activeTab === "brandschutz"
                  ? "Unsere Brandschutz-Leistungen"
                  : "Unsere Arbeitsschutz-Leistungen"}
              </h3>
            </ScrollReveal>

            <ul className="space-y-4">
              {(activeTab === "brandschutz"
                ? brandschutzServices
                : arbeitsschutzServices
              ).map((service, index) => (
                <ScrollReveal key={index} delay={100 + index * 100}>
                  <li className="flex p-4 rounded-lg before-glass service-card">
                    <div className="mr-4 flex-shrink-0 text-nrr-blue">
                      {activeTab === "brandschutz" ? (
                        <Flame className="h-6 w-6" />
                      ) : (
                        <UserCheck className="h-6 w-6" />
                      )}
                    </div>
                    <div>
                      <p className="text-gray-800">{service}</p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ul>

            <ScrollReveal delay={500}>
              <div className="mt-8">
                <CustomButton
                  variant="outline"
                  size="md"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Unverbindliches Angebot anfordern
                </CustomButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;
