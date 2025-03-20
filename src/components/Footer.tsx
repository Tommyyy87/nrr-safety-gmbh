
import React from "react";
import Container from "./ui/Container";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-nrr-blue text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">NRR safety GmbH</h3>
            <p className="mb-4 text-blue-100">
              Ihr Partner für Brandschutz & Arbeitsschutz in ganz Deutschland. 
              Wir bieten professionelle Sicherheitslösungen für Unternehmen jeder Größe.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/notfallschullungen" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/notfallschulungen_rhein_ruhr/" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Schnelllinks</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#workflow" className="text-blue-100 hover:text-white transition-colors">
                  Ablauf
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Cookie-Einstellungen
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-sm">
            © {currentYear} NRR safety GmbH. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors">
              Cookie-Einstellungen
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-blue-300">
          <p>Neumarkt 8, 41460 Neuss | team@nrr-safety.de</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
