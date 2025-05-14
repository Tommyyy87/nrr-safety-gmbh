// src/components/Agb.tsx
import React from "react";
import Container from "./ui/Container";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "./ui/ScrollReveal";
import CustomButton from "./ui/CustomButton";

const Agb = () => {
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
                    <h1 className="text-3xl md:text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
                </ScrollReveal>

                <div className="prose prose-blue max-w-none">
                    <ScrollReveal>
                        <h2 className="text-2xl font-semibold mt-8 mb-4">Inhaltsverzeichnis</h2>
                        <ol className="list-decimal pl-5 mb-8">
                            <li><a href="#geltungsbereich" className="text-nrr-blue hover:underline">Geltungsbereich</a></li>
                            <li><a href="#vertragsschluss" className="text-nrr-blue hover:underline">Vertragsschluss</a></li>
                            <li><a href="#widerrufsrecht" className="text-nrr-blue hover:underline">Widerrufsrecht</a></li>
                            <li><a href="#preise" className="text-nrr-blue hover:underline">Preise und Zahlungsbedingungen</a></li>
                            <li><a href="#lieferung" className="text-nrr-blue hover:underline">Liefer- und Versandbedingungen</a></li>
                            <li><a href="#nutzungsrecht" className="text-nrr-blue hover:underline">Einräumung von Nutzungsrechten für digitale Inhalte</a></li>
                            <li><a href="#eigentumsvorbehalt" className="text-nrr-blue hover:underline">Eigentumsvorbehalt</a></li>
                            <li><a href="#maengelhaftung" className="text-nrr-blue hover:underline">Mängelhaftung (Gewährleistung)</a></li>
                            <li><a href="#recht" className="text-nrr-blue hover:underline">Anwendbares Recht</a></li>
                            <li><a href="#gerichtsstand" className="text-nrr-blue hover:underline">Gerichtsstand</a></li>
                            <li><a href="#streitbeilegung" className="text-nrr-blue hover:underline">Alternative Streitbeilegung</a></li>
                        </ol>
                    </ScrollReveal>

                    <ScrollReveal>
                        <section id="geltungsbereich">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Geltungsbereich</h2>
                            <div className="space-y-4">
                                <p>
                                    1.1 Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") der NRR safety GmbH, Giesbertstraße 26, 46117 Oberhausen, Deutschland (nachfolgend "Verkäufer"), gelten für alle Verträge, die ein Verbraucher oder Unternehmer (nachfolgend „Kunde") mit dem Verkäufer hinsichtlich der vom Verkäufer angebotenen Waren und Dienstleistungen im Bereich Brandschutz und Arbeitsschutz abschließt. Hiermit wird der Einbeziehung von eigenen Bedingungen des Kunden widersprochen, es sei denn, es ist etwas anderes vereinbart.
                                </p>
                                <p>
                                    1.2 Für Verträge über die Lieferung digitaler Inhalte gelten diese AGB entsprechend, sofern insoweit nicht ausdrücklich etwas Abweichendes geregelt ist.
                                </p>
                                <p>
                                    1.3 Für Verträge über die Buchungen von Schulungen, Kursen oder Seminarveranstaltungen gelten diese AGB entsprechend, sofern insoweit nicht ausdrücklich etwas Abweichendes geregelt ist. Dabei regeln diese AGB lediglich den Verkauf von Tickets für bestimmte, in der Artikelbeschreibung des Verkäufers näher bezeichnete Veranstaltungen und nicht die Durchführung dieser Veranstaltungen. Für die Durchführung der Veranstaltungen gelten ausschließlich die gesetzlichen Bestimmungen im Verhältnis zwischen dem Kunden und dem Veranstalter sowie ggf. hiervon abweichende Bedingungen des Veranstalters. Sofern der Verkäufer nicht zugleich auch Veranstalter ist, haftet er nicht für die ordnungsgemäße Durchführung der Veranstaltung, für die ausschließlich der jeweilige Veranstalter verantwortlich ist.
                                </p>
                                <p>
                                    1.4 Verbraucher im Sinne dieser AGB ist jede natürliche Person, die ein Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit zugerechnet werden können. Unternehmer im Sinne dieser AGB ist eine natürliche oder juristische Person oder eine rechtsfähige Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in Ausübung ihrer gewerblichen oder selbständigen beruflichen Tätigkeit handelt.
                                </p>
                                <p>
                                    1.5 Digitale Inhalte im Sinne dieser AGB sind alle nicht auf einem körperlichen Datenträger befindlichen Daten, die in digitaler Form hergestellt und vom Verkäufer unter Einräumung bestimmter in diesen AGB genauer geregelten Nutzungsrechte, bereitgestellt werden.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={100}>
                        <section id="vertragsschluss">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Vertragsschluss</h2>
                            <div className="space-y-4">
                                <p>
                                    2.1 Die auf der Internetseite des Verkäufers enthaltenen Produktbeschreibungen stellen keine verbindlichen Angebote seitens des Verkäufers dar, sondern dienen zur Abgabe eines verbindlichen Angebots durch den Kunden.
                                </p>
                                <p>
                                    2.2 Der Kunde kann das Angebot über das Online-Kontaktformular, per E-Mail oder telefonisch gegenüber dem Verkäufer abgeben.
                                </p>
                                <p>
                                    2.3 Der Verkäufer kann das Angebot des Kunden innerhalb von fünf Tagen annehmen,
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>indem er dem Kunden eine schriftliche Auftragsbestätigung oder eine Auftragsbestätigung in Textform (Fax oder E-Mail) übermittelt, wobei insoweit der Zugang der Auftragsbestätigung beim Kunden maßgeblich ist, oder</li>
                                    <li>indem er dem Kunden die bestellte Ware liefert, wobei insoweit der Zugang der Ware beim Kunden maßgeblich ist, oder</li>
                                    <li>indem er den Kunden nach Abgabe von dessen Bestellung zur Zahlung auffordert.</li>
                                </ul>
                                <p>
                                    Liegen mehrere der vorgenannten Alternativen vor, kommt der Vertrag in dem Zeitpunkt zustande, in dem eine der vorgenannten Alternativen zuerst eintritt. Die Frist zur Annahme des Angebots beginnt am Tag nach der Absendung des Angebots durch den Kunden zu laufen und endet mit dem Ablauf des fünften Tages, welcher auf die Absendung des Angebots folgt. Nimmt der Verkäufer das Angebot des Kunden innerhalb vorgenannter Frist nicht an, so gilt dies als Ablehnung des Angebots mit der Folge, dass der Kunde nicht mehr an seine Willenserklärung gebunden ist.
                                </p>
                                <p>
                                    2.4 Bei der Abgabe eines Angebots über das Online-Kontaktformular des Verkäufers wird der Vertragstext nach dem Vertragsschluss vom Verkäufer gespeichert und dem Kunden nach Absendung von dessen Bestellung in Textform (z. B. E-Mail, Fax oder Brief) übermittelt. Eine darüber hinausgehende Zugänglichmachung des Vertragstextes durch den Verkäufer erfolgt nicht.
                                </p>
                                <p>
                                    2.5 Für den Vertragsschluss steht ausschließlich die deutsche Sprache zur Verfügung.
                                </p>
                                <p>
                                    2.6 Die Bestellabwicklung und Kontaktaufnahme finden in der Regel per E-Mail und automatisierter Bestellabwicklung statt. Der Kunde hat sicherzustellen, dass die von ihm zur Bestellabwicklung angegebene E-Mail-Adresse zutreffend ist, so dass unter dieser Adresse die vom Verkäufer versandten E-Mails empfangen werden können. Insbesondere hat der Kunde bei dem Einsatz von SPAM-Filtern sicherzustellen, dass alle vom Verkäufer oder von diesem mit der Bestellabwicklung beauftragten Dritten versandten E-Mails zugestellt werden können.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={200}>
                        <section id="widerrufsrecht">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Widerrufsrecht</h2>
                            <div className="space-y-4">
                                <p>
                                    3.1 Verbrauchern steht grundsätzlich ein Widerrufsrecht zu.
                                </p>
                                <p>
                                    3.2 Nähere Informationen zum Widerrufsrecht ergeben sich aus der Widerrufsbelehrung des Verkäufers.
                                </p>
                                <p>
                                    3.3 Gemäß § 312g Abs. 2 Nr. 9 BGB besteht ein Widerrufsrecht, soweit nichts anderes vereinbart ist, nicht bei Verträgen zur Erbringung von Dienstleistungen im Zusammenhang mit Freizeitbetätigungen, wenn der Vertrag für die Erbringung einen spezifischen Termin oder Zeitraum vorsieht. Danach ist ein Widerrufsrecht auch bei Verträgen ausgeschlossen, die den Verkauf von Tickets für termingebundene Veranstaltungen zum Gegenstand haben.
                                </p>
                                <p>
                                    3.4 Das Widerrufsrecht gilt nicht für die Buchung unserer termingebundenen Veranstaltungen (z.B. Brandschutz- oder Arbeitsschutzschulungen).
                                </p>
                                <p>
                                    3.5 Beachten Sie, dass Veranstaltungen nur bis 7 Tage vor Veranstaltungsbeginn storniert werden können. Danach ist eine Stornierung oder Umbuchung nicht mehr möglich! Eine Stornierung oder Umbuchung bis sieben Tage vor Veranstaltungsbeginn ist kostenpflichtig und wird mit pauschal 10 € berechnet. Bei Teilnehmern, die sich über unser Buchungsportal eingebucht haben und nicht erscheinen, behalten wir uns das Recht vor, den gesamten Buchungspreis in Rechnung zu stellen, da eine Reservierung eines Kursplatzes verbindlich ist. Wir bitten um Verständnis. Eine Stornierung ist auch bei Krankheit oder Urlaub nicht möglich. Nach Einreichung eines ärztlichen Attestes bekommen Sie kulanterweise einen neuen Termin.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={300}>
                        <section id="preise">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Preise und Zahlungsbedingungen</h2>
                            <div className="space-y-4">
                                <p>
                                    4.1 Sofern sich aus der Produktbeschreibung des Verkäufers nichts anderes ergibt, handelt es sich bei den angegebenen Preisen um Nettopreise, die die gesetzliche Umsatzsteuer nicht enthalten. Gegebenenfalls zusätzlich anfallende Liefer- und Versandkosten werden in der jeweiligen Produktbeschreibung gesondert angegeben.
                                </p>
                                <p>
                                    4.2 Die Zahlungsmöglichkeit/en wird/werden dem Kunden im Rahmen des Angebots mitgeteilt.
                                </p>
                                <p>
                                    4.3 Ist Vorauskasse per Banküberweisung vereinbart, ist die Zahlung sofort nach Vertragsabschluss fällig, sofern die Parteien keinen späteren Fälligkeitstermin vereinbart haben.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={400}>
                        <section id="lieferung">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Liefer- und Versandbedingungen</h2>
                            <div className="space-y-4">
                                <p>
                                    5.1 Die Lieferung von Waren erfolgt auf dem Versandweg an die vom Kunden angegebene Lieferanschrift, sofern nichts anderes vereinbart ist. Bei der Abwicklung der Transaktion ist die in der Bestellabwicklung des Verkäufers angegebene Lieferanschrift maßgeblich.
                                </p>
                                <p>
                                    5.2 Sendet das Transportunternehmen die versandte Ware an den Verkäufer zurück, da eine Zustellung beim Kunden nicht möglich war, trägt der Kunde die Kosten für den erfolglosen Versand. Dies gilt nicht, wenn der Kunde den Umstand, der zur Unmöglichkeit der Zustellung geführt hat, nicht zu vertreten hat oder wenn er vorübergehend an der Annahme der angebotenen Leistung verhindert war, es sei denn, dass der Verkäufer ihm die Leistung eine angemessene Zeit vorher angekündigt hatte. Ferner gilt dies im Hinblick auf die Kosten für die Hinsendung nicht, wenn der Kunde sein Widerrufsrecht wirksam ausübt. Für die Rücksendekosten gilt bei wirksamer Ausübung des Widerrufsrechts durch den Kunden die in der Widerrufsbelehrung des Verkäufers hierzu getroffene Regelung.
                                </p>
                                <p>
                                    5.3 Bei Selbstabholung wird der Kunde vom Verkäufer informiert, dass die von ihm bestellte Ware zur Abholung bereitsteht. Nach Erhalt dieser E-Mail kann der Kunde die Ware nach Absprache mit dem Verkäufer am Sitz des Verkäufers abholen. In diesem Fall werden keine Versandkosten berechnet.
                                </p>
                                <p>
                                    5.4 Digitale Inhalte werden dem Kunden ausschließlich in elektronischer Form wie folgt überlassen:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>per Download</li>
                                    <li>per E-Mail</li>
                                </ul>
                                <p>
                                    5.5 Tickets werden dem Kunden wie folgt überlassen:
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>per Download</li>
                                    <li>per E-Mail</li>
                                </ul>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={500}>
                        <section id="nutzungsrecht">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Einräumung von Nutzungsrechten für digitale Inhalte</h2>
                            <div className="space-y-4">
                                <p>
                                    6.1 Sofern sich aus der Inhaltsbeschreibung des Verkäufers nichts anderes ergibt, räumt der Verkäufer dem Kunden an den überlassenen Inhalten das nicht ausschließliche, örtlich und zeitlich unbeschränkte Recht ein, die überlassenen Inhalte ausschließlich zu privaten Zwecken zu nutzen.
                                </p>
                                <p>
                                    6.2 Eine Weitergabe der Inhalte an Dritte oder die Erstellung von Kopien für Dritte außerhalb des Rahmens dieser AGB ist nicht gestattet, soweit nicht der Verkäufer einer Übertragung der vertragsgegenständlichen Lizenz an den Dritten zugestimmt hat.
                                </p>
                                <p>
                                    6.3 Die Rechtseinräumung wird erst wirksam, wenn der Kunde die vertraglich geschuldete Vergütung vollständig geleistet hat. Der Verkäufer kann eine Benutzung der vertragsgegenständlichen Inhalte auch schon vor diesem Zeitpunkt vorläufig erlauben. Ein Übergang der Rechte findet durch eine solche vorläufige Erlaubnis nicht statt.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={600}>
                        <section id="eigentumsvorbehalt">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Eigentumsvorbehalt</h2>
                            <div className="space-y-4">
                                <p>
                                    Tritt der Verkäufer in Vorleistung, behält er sich bis zur vollständigen Bezahlung des geschuldeten Kaufpreises das Eigentum an der gelieferten Ware vor.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={700}>
                        <section id="maengelhaftung">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Mängelhaftung (Gewährleistung)</h2>
                            <div className="space-y-4">
                                <p>
                                    8.1 Ist die Kaufsache mangelhaft, gelten die Vorschriften der gesetzlichen Mängelhaftung.
                                </p>
                                <p>
                                    8.2 Abweichend hiervon gilt bei gebrauchten Waren: Mängelansprüche sind ausgeschlossen, wenn der Mangel erst nach Ablauf eines Jahres ab Ablieferung der Ware auftritt. Mängel, die innerhalb eines Jahres ab Ablieferung der Ware auftreten, können innerhalb der gesetzlichen Verjährungsfrist geltend gemacht werden. Die Verkürzung der Haftungsdauer auf ein Jahr gilt jedoch nicht
                                </p>
                                <ul className="list-disc pl-5 space-y-2">
                                    <li>für Sachen, die entsprechend ihrer üblichen Verwendungsweise für ein Bauwerk verwendet worden sind und dessen Mangelhaftigkeit verursacht haben,</li>
                                    <li>für Schadensersatz- und Aufwendungsersatzansprüche des Kunden, sowie</li>
                                    <li>für den Fall, dass der Verkäufer den Mangel arglistig verschwiegen hat.</li>
                                </ul>
                                <p>
                                    8.3 Der Kunde wird gebeten, angelieferte Waren mit offensichtlichen Transportschäden bei dem Zusteller zu reklamieren und den Verkäufer hiervon in Kenntnis zu setzen. Kommt der Kunde dem nicht nach, hat dies keinerlei Auswirkungen auf seine gesetzlichen oder vertraglichen Mängelansprüche.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={800}>
                        <section id="recht">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Anwendbares Recht</h2>
                            <div className="space-y-4">
                                <p>
                                    Für sämtliche Rechtsbeziehungen der Parteien gilt das Recht der Bundesrepublik Deutschland unter Ausschluss der Gesetze über den internationalen Kauf beweglicher Waren. Bei Verbrauchern gilt diese Rechtswahl nur insoweit, als nicht der gewährte Schutz durch zwingende Bestimmungen des Rechts des Staates, in dem der Verbraucher seinen gewöhnlichen Aufenthalt hat, entzogen wird.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={900}>
                        <section id="gerichtsstand">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Gerichtsstand</h2>
                            <div className="space-y-4">
                                <p>
                                    Handelt der Kunde als Kaufmann, juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen mit Sitz im Hoheitsgebiet der Bundesrepublik Deutschland, ist ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag der Geschäftssitz des Verkäufers. Hat der Kunde seinen Sitz außerhalb des Hoheitsgebiets der Bundesrepublik Deutschland, so ist der Geschäftssitz des Verkäufers ausschließlicher Gerichtsstand für alle Streitigkeiten aus diesem Vertrag, wenn der Vertrag oder Ansprüche aus dem Vertrag der beruflichen oder gewerblichen Tätigkeit des Kunden zugerechnet werden können. Der Verkäufer ist in den vorstehenden Fällen jedoch in jedem Fall berechtigt, das Gericht am Sitz des Kunden anzurufen.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={1000}>
                        <section id="streitbeilegung">
                            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Alternative Streitbeilegung</h2>
                            <div className="space-y-4">
                                <p>
                                    11.1 Die EU-Kommission stellt im Internet unter folgendem Link eine Plattform zur Online-Streitbeilegung bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-nrr-blue hover:underline">https://ec.europa.eu/consumers/odr</a>
                                </p>
                                <p>
                                    Diese Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten aus Online-Kauf- oder Dienstleistungsverträgen, an denen ein Verbraucher beteiligt ist.
                                </p>
                                <p>
                                    11.2 Der Verkäufer ist zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
                                </p>
                            </div>
                        </section>
                    </ScrollReveal>

                    <ScrollReveal delay={1100}>
                        <div className="mt-12 text-sm text-gray-600">
                            <p className="italic">Stand: März 2025</p>
                        </div>
                    </ScrollReveal>
                </div>
            </Container>
        </div>
    );
};

export default Agb;