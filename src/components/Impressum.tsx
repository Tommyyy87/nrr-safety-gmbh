import React from "react";
import Container from "./ui/Container";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ui/ScrollReveal";
import CustomButton from "./ui/CustomButton";

const Impressum = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>
        </ScrollReveal>

        <div className="prose prose-blue max-w-none">
          <ScrollReveal>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              <strong>NRR safety GmbH</strong><br />
              Neumarkt 8<br />
              41460 Neuss<br />
              Deutschland
            </p>
            
            <p>
              <strong>Handelsregister:</strong> HRB 20837<br />
              <strong>Registergericht:</strong> Amtsgericht Mönchengladbach
            </p>
            
            <h3 className="text-xl font-medium mt-6 mb-3">Vertreten durch</h3>
            <p>
              Geschäftsführer: Dennis Meenke und Michael Grotefels
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
            <p>
              <strong>Telefon:</strong> +49 1575 6686199<br />
              <strong>E-Mail:</strong> team@nrr-safety.de
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p>
              <strong>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</strong><br />
              Steuernummer: 114/5840/444 (Finanzamt Grevenbroich)
            </p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a>
            </p>
            <p>
              Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p>
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={700}>
            <h2 className="text-2xl font-semibold mt-8 mb-4">Hinweis zur Verwendung von Geschlechterformen</h2>
            <p>
              Aus Gründen der besseren Lesbarkeit wird in den Texten auf die gleichzeitige Verwendung verschiedener Geschlechterformen verzichtet. Sämtliche Personenbezeichnungen gelten gleichermaßen für alle Geschlechter.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </div>
  );
};

export default Impressum;