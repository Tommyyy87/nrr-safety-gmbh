
import React, { useEffect, useState } from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { Menu, X } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <Container className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-nrr-blue font-bold text-2xl">
              NRR safety GmbH
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium text-gray-700 hover:text-nrr-blue transition-colors cursor-pointer"
            >
              Startseite
            </a>
            <a
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-gray-700 hover:text-nrr-blue transition-colors cursor-pointer"
            >
              Über uns
            </a>
            <a
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-gray-700 hover:text-nrr-blue transition-colors cursor-pointer"
            >
              Leistungen
            </a>
            <a
              onClick={() => scrollToSection("workflow")}
              className="text-sm font-medium text-gray-700 hover:text-nrr-blue transition-colors cursor-pointer"
            >
              Ablauf
            </a>
            <a
              onClick={() => scrollToSection("testimonials")}
              className="text-sm font-medium text-gray-700 hover:text-nrr-blue transition-colors cursor-pointer"
            >
              Referenzen
            </a>
            <CustomButton
              onClick={() => scrollToSection("contact")}
              variant="primary"
              size="md"
            >
              Kontakt
            </CustomButton>
          </nav>

          <button
            className="md:hidden text-nrr-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-screen w-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col p-8 pt-24 space-y-6">
          <a
            onClick={() => scrollToSection("home")}
            className="text-lg font-medium text-gray-800 hover:text-nrr-blue cursor-pointer"
          >
            Startseite
          </a>
          <a
            onClick={() => scrollToSection("about")}
            className="text-lg font-medium text-gray-800 hover:text-nrr-blue cursor-pointer"
          >
            Über uns
          </a>
          <a
            onClick={() => scrollToSection("services")}
            className="text-lg font-medium text-gray-800 hover:text-nrr-blue cursor-pointer"
          >
            Leistungen
          </a>
          <a
            onClick={() => scrollToSection("workflow")}
            className="text-lg font-medium text-gray-800 hover:text-nrr-blue cursor-pointer"
          >
            Ablauf
          </a>
          <a
            onClick={() => scrollToSection("testimonials")}
            className="text-lg font-medium text-gray-800 hover:text-nrr-blue cursor-pointer"
          >
            Referenzen
          </a>
          <CustomButton
            onClick={() => scrollToSection("contact")}
            variant="primary"
            size="lg"
            className="w-full"
          >
            Kontakt
          </CustomButton>
        </div>
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen pt-24 flex items-center relative overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581093577421-e484c757bd3c?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10 z-0"></div>
        
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-6">
                  Sicherheit ist unser Versprechen
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight text-balance">
                  NRR safety GmbH – Ihr Partner für{" "}
                  <span className="text-gradient">Brandschutz & Arbeitsschutz</span> in Deutschland
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Sichern Sie Ihr Unternehmen nachhaltig ab – kontaktieren Sie uns für eine unverbindliche Beratung!
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <CustomButton
                    onClick={() => scrollToSection("contact")}
                    variant="primary"
                    size="lg"
                    className="animate-pulse-slow"
                  >
                    Jetzt Kontakt aufnehmen
                  </CustomButton>
                  <CustomButton
                    onClick={() => scrollToSection("services")}
                    variant="outline"
                    size="lg"
                  >
                    Leistungen entdecken
                  </CustomButton>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform-gpu">
                  <img
                    src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2070&auto=format&fit=crop"
                    alt="Professioneller Brandschutz"
                    className="w-full object-cover h-[600px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl before-glass">
                  <p className="text-sm font-medium text-nrr-blue">
                    Professioneller Brandschutz für Ihr Unternehmen
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
