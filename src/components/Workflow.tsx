
import React from "react";
import Container from "./ui/Container";
import { MessageSquare, FilePenLine, ClipboardCheck, Settings } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Workflow = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: "Beratungsgespräch",
      description: "Individuelle Analyse Ihrer Sicherheitsanforderungen",
      color: "bg-nrr-blue",
    },
    {
      icon: <FilePenLine className="h-10 w-10 text-white" />,
      title: "Planungsphase",
      description: "Erstellung maßgeschneiderter Schutzkonzepte",
      color: "bg-nrr-lightblue",
    },
    {
      icon: <ClipboardCheck className="h-10 w-10 text-white" />,
      title: "Servicevertrag",
      description: "Langfristige Betreuung und regelmäßige Prüfungen",
      color: "bg-blue-500",
    },
    {
      icon: <Settings className="h-10 w-10 text-white" />,
      title: "Umsetzung",
      description: "Praktische Schulungen, Prüfungen & Bereitstellung von Sicherheitslösungen",
      color: "bg-blue-600",
    },
  ];

  return (
    <section
      id="workflow"
      className="section-padding bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nrr-blue/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nrr-blue/20 to-transparent"></div>
      
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-4">
              Unser Prozess
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ablauf der Zusammenarbeit
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-gray-700 text-lg">
              Wir begleiten Sie durch den gesamten Prozess – von der ersten Beratung 
              bis zur vollständigen Umsetzung aller Sicherheitsmaßnahmen.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={100 + index * 150}>
              <div className="relative before-glass p-6 rounded-xl">
                <div className="absolute h-1 bg-gradient-to-r from-nrr-blue to-blue-500 top-0 left-8 right-8 -translate-y-1/2"></div>
                
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                  {step.icon}
                </div>
                
                <div className="absolute top-16 left-1/2 -translate-x-1/2 text-nrr-blue font-bold text-lg">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ScrollReveal>
            <p className="text-nrr-blue font-medium">
              Jeder Schritt wird individuell auf Ihre Bedürfnisse abgestimmt, um optimale Ergebnisse zu erzielen.
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Workflow;
