
import React from "react";
import Container from "./ui/Container";
import { CheckCircle, Shield, Clock, MapPin } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-nrr-blue" />,
      title: "Alles aus einer Hand",
      description: "Von der Beratung bis zur Umsetzung",
    },
    {
      icon: <Shield className="h-8 w-8 text-nrr-blue" />,
      title: "Erfahrenes Team",
      description: "35 Fachkräfte mit geballtem Know-how",
    },
    {
      icon: <Clock className="h-8 w-8 text-nrr-blue" />,
      title: "Schnelle Umsetzung",
      description: "Keine langen Wartezeiten",
    },
    {
      icon: <MapPin className="h-8 w-8 text-nrr-blue" />,
      title: "Deutschlandweit tätig",
      description: "In allen großen Städten und Regionen",
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-4">
              Über uns
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              NRR safety GmbH – Wer wir sind
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-gray-700 text-lg">
              Die NRR safety GmbH ist ein deutschlandweit tätiges Unternehmen, spezialisiert 
              auf Brandschutz und Arbeitsschutz. Mit unserem Team aus 35 Sicherheitsexperten 
              bieten wir Ihnen ein ganzheitliches Konzept: von Beratung und Planung über Umsetzung 
              bis hin zur langfristigen Betreuung.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={100 + index * 100}>
              <div className="p-6 rounded-xl transition-all duration-300 before-glass hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 rounded-full bg-nrr-gray p-3 inline-flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
