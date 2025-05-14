import React from "react";
import Container from "./ui/Container";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ui/ScrollReveal";
import CustomButton from "./ui/CustomButton";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  // Funktion um zurück zur Hauptseite zu navigieren
  const handleBackClick = () => {
    navigate("/");
  };

  // Scrollt nach oben wenn die Komponente geladen wird
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
            onClick={handleBackClick}
            className="flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Zurück zur Startseite</span>
          </CustomButton>
        </div>

        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        </ScrollReveal>

        <div className="prose prose-blue max-w-none">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Einleitung und Überblick</h2>
            <p>
              Wir haben diese Datenschutzerklärung verfasst, um Ihnen gemäß der Vorgaben der
              {" "}
              <a
                href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=EN"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datenschutz-Grundverordnung (EU) 2016/679
              </a>{" "}
              und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche – und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) – verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben.
            </p>
            <p>
              <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Verantwortlicher</h2>
            <p>
              <strong>NRR safety GmbH</strong>
              <br />
              Giesbertstraße 26
              <br />
              46117 Oberhausen
              <br />
              Deutschland
            </p>
            <p>
              <strong>E-Mail:</strong> team@nrr-safety.de
              <br />
              <strong>Telefon:</strong> +49 157 80589539 
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Grundsätze der Datenverarbeitung</h2>
            <p>
              Die Verarbeitung personenbezogener Daten basiert auf strengen Grundsätzen, die wir für Sie transparent darstellen möchten:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Rechtmäßigkeit:</strong> Wir verarbeiten Ihre Daten nur, wenn eine rechtliche Grundlage vorliegt.</li>
              <li><strong>Zweckbindung:</strong> Die Verarbeitung Ihrer Daten erfolgt nur für festgelegte, eindeutige und legitime Zwecke.</li>
              <li><strong>Datenminimierung:</strong> Wir verarbeiten nur Daten, die für den jeweiligen Zweck erforderlich sind.</li>
              <li><strong>Richtigkeit:</strong> Wir achten auf die Richtigkeit und Aktualität Ihrer Daten.</li>
              <li><strong>Speicherbegrenzung:</strong> Wir speichern Ihre Daten nur solange, wie es für den jeweiligen Zweck notwendig ist.</li>
              <li><strong>Integrität und Vertraulichkeit:</strong> Wir schützen Ihre Daten durch angemessene technische und organisatorische Maßnahmen.</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Erhebung und Speicherung personenbezogener Daten</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">4.1 Datenarten, die wir verarbeiten</h3>
            <p>
              Wir verarbeiten folgende Arten von Daten, die Sie uns beim Besuch unserer Website mitteilen:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Kontaktdaten (z.B. Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
              <li>Inhaltsdaten (z.B. Eingaben in Kontaktformularen)</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">4.2 Kontaktformular</h3>
            <p>
              Wenn Sie unser Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die Angabe einer gültigen E-Mail-Adresse sowie Ihres Namens erforderlich. Dies dient der Zuordnung der Anfrage und der anschließenden Beantwortung.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage).
            </p>
            <p>
              <strong>Speicherdauer:</strong> Wir speichern Ihre Daten nur solange, wie es für die Bearbeitung Ihrer Anfrage erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies und Analysedienste</h2>
            <h3 className="text-xl font-medium mt-6 mb-3">5.1 Cookies</h3>
            <p>
              Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Sie richten auf Ihrem Gerät keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
            </p>
            <p>
              Wir verwenden sowohl technisch notwendige Cookies als auch optional Cookies für Analyse- und Marketingzwecke. Sie können der Verwendung optionaler Cookies über unser Cookie-Banner widersprechen.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung von technisch notwendigen Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der optimalen Funktionalität unserer Website). Die Verarbeitung optionaler Cookies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
            </p>
            <p>
              <strong>Speicherdauer:</strong> Die Cookies werden je nach Typ unterschiedlich lange gespeichert:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Session-Cookies: Werden nach Schließen des Browsers gelöscht</li>
              <li>Persistente Cookies: Je nach Cookie zwischen einem Tag und zwei Jahren</li>
            </ul>

            <h3 className="text-xl font-medium mt-6 mb-3">5.2 Google Analytics</h3>
            <p>
              Wir nutzen Google Analytics, einen Webanalysedienst der Google LLC ("Google"). Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglichen. Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p>
              Wir haben die IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.
            </p>
            <p>
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung).
            </p>
            <p>
              <strong>Widerspruchsmöglichkeit:</strong> Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Ihre Einwilligung über unser Cookie-Banner widerrufen</li>
              <li>Das Browser-Plugin zur Deaktivierung von Google Analytics unter folgendem Link herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a></li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Social Media</h2>
            <p>
              Auf unserer Website verwenden wir Links zu unseren Social-Media-Präsenzen auf folgenden Plattformen:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
            <p>
              Wir weisen darauf hin, dass beim Besuch der verlinkten Social-Media-Plattformen die Datenschutzbestimmungen und Datenverarbeitungen der jeweiligen Plattformbetreiber gelten. Wir haben keinen Einfluss auf die Datenerhebung und deren weitere Verwendung durch die Plattformen.
            </p>
            <p>
              Erst wenn Sie auf ein entsprechendes Symbol klicken und dadurch zu dem entsprechenden Netzwerk weitergeleitet werden, werden Ihre Daten an das jeweilige Netzwerk übertragen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Ihre Rechte</h2>
            <p>
              Nach der DSGVO stehen Ihnen folgende Rechte zu:
            </p>
            <ul className="list-disc pl-5 mb-4 space-y-2">
              <li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das Recht, Auskunft darüber zu verlangen, ob und welche Daten über Sie bei uns gespeichert sind.</li>
              <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die Berichtigung unrichtiger oder unvollständiger Daten zu verlangen.</li>
              <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten Daten zu verlangen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Verarbeitung Ihrer personenbezogenen Daten einzuschränken.</li>
              <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, der Verarbeitung Ihrer Daten zu widersprechen.</li>
              <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
            <p>
              Um diese Rechte auszuüben, können Sie sich jederzeit an uns unter den im Abschnitt "Verantwortlicher" angegebenen Kontaktdaten wenden.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Datensicherheit</h2>
            <p>
              Wir treffen technische und organisatorische Sicherheitsmaßnahmen, um Ihre personenbezogenen Daten gegen zufällige oder vorsätzliche Manipulationen, Verlust, Zerstörung oder gegen den Zugriff unberechtigter Personen zu schützen. Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung fortlaufend verbessert.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long' })}.
            </p>
            <p>
              Durch die Weiterentwicklung unserer Website und Angebote oder aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf unserer Website abgerufen werden.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;