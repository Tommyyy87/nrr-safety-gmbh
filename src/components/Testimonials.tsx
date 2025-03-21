import React, { useRef } from "react";
import Container from "./ui/Container";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import LogoSlider from "./LogoSlider";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Dank NRR safety fühlen wir uns bestens betreut – schneller Service und fachkundige Beratung!",
      company: "Musterfirma GmbH",
      logo: "https://placehold.co/200x80/eef/fff?text=Musterfirma",
      rating: 5,
    },
    {
      quote: "Professionelles Team und zuverlässige Wartung. Wir setzen auf NRR safety für unseren Brandschutz.",
      company: "Beispiel AG",
      logo: "https://placehold.co/200x80/eef/fff?text=Beispiel+AG",
      rating: 5,
    },
    {
      quote: "Kompetente Schulungen und individuelle Beratung – NRR safety ist ein verlässlicher Partner.",
      company: "Muster GmbH & Co. KG",
      logo: "https://placehold.co/200x80/eef/fff?text=Muster+GmbH",
      rating: 5,
    },
    {
      quote: "Schnelle Reaktionszeiten und maßgeschneiderte Lösungen für unsere Sicherheitsanforderungen.",
      company: "Sample Corp.",
      logo: "https://placehold.co/200x80/eef/fff?text=Sample+Corp",
      rating: 5,
    },
  ];

  // Partner- und Kunden-Logos aus den vorhandenen Dateien im public/partner-Ordner
  const partnerLogos = [
    { src: "/partner/AOK_Logo_kompakt_RH_Vert_Gruen_RGB-75b639ba.png", alt: "AOK Logo" },
    { src: "/partner/Aurubis_1500x1500-d9a7361d.jpg", alt: "Aurubis" },
    { src: "/partner/Dresen_1500x1500-8e6ffc69.jpg", alt: "Dresen" },
    { src: "/partner/evonik_1500x1500-fd712c50.jpg", alt: "Evonik" },
    { src: "/partner/header-dortmunder-vb-01ee02d5.jpg", alt: "Dortmunder" },
    { src: "/partner/Kitarino_Logo_ohne_claim-33bfc30f.png", alt: "Kitarino" },
    { src: "/partner/Logo_BüterSchmitz-92647778.png", alt: "Büter Schmitz" },
    { src: "/partner/stadtEssen_1500x1500-f3102b98.jpg", alt: "Stadt Essen" },
    { src: "/partner/steag_1500x1500-5858e75c.png", alt: "Steag" },
    { src: "/partner/stratmann_1500x1500-075c5e4d.jpg", alt: "Stratmann" },
    { src: "/partner/tillmann_1500x1500-bc78a20e.png", alt: "Tillmann" },
  ];

  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (testimonialsRef.current) {
      const { current } = testimonialsRef;
      const scrollAmount = direction === "left" ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="section-padding">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-4">
              Referenzen
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Zufriedene Kunden – Unsere besten Referenzen
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-700 text-lg">
              Entdecken Sie, was unsere Kunden über unsere Dienstleistungen sagen und warum sie sich
              auf NRR safety verlassen.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -left-4 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="h-5 w-5 text-nrr-blue" />
            </button>
          </div>

          <div
            ref={testimonialsRef}
            className="flex space-x-6 overflow-x-auto hide-scroll-bar pb-4 pt-2"
          >
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                delay={100 + index * 100}
                className="min-w-[320px] md:min-w-[400px] flex-shrink-0"
              >
                <div className="p-6 rounded-xl before-glass h-full flex flex-col">
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>

                  <p className="italic text-gray-700 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </p>

                  <div className="mt-auto">
                    <img
                      src={testimonial.logo}
                      alt={`${testimonial.company} Logo`}
                      className="h-10 mb-2"
                    />
                    <p className="font-medium text-nrr-blue">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10">
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="h-5 w-5 text-nrr-blue" />
            </button>
          </div>
        </div>

        <div className="mt-24">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-center mb-10">
              Unsere Partner und Kunden
            </h3>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="relative overflow-hidden py-4">
              {/* Responsiver Logo-Slider mit den Partnerlogos */}
              <div className="py-4 px-2 md:px-12">
                <LogoSlider
                  logos={partnerLogos}
                  slidesToShow={4}
                  autoScrollInterval={3000}
                  className="mb-6"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;