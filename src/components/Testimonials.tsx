import React, { useRef } from "react";
import Container from "./ui/Container";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import LogoSlider from "./LogoSlider";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ich habe eine tolle Fortbildung bei Frau Melissa Reinbothe zum Ersthelfer besucht. Die Fortbildung war sehr lehrreich, sie hat tolle Eselsbrücken gebaut, es wurde nicht langweilig und es hat Spaß gemacht. Vielen Dank für den tollen Tag.",
      company: "Marion Eßler",
      logo: null,
      rating: 5,
    },
    {
      quote: "Schulung durch Frau Melissa Reinbothe bei der Firma AVL Neuss. Insgesamt war es eine sehr lehrreiche Schulung, die auch viel Spaß gemacht hat, mit einer souveränen und kompetenten Lehrkraft. Vielen Dank für diesen Tag. Wir freuen uns aufs nächste mal.",
      company: "AVL Neuss",
      logo: null,
      rating: 5,
    },
    {
      quote: "Melissa Reinbothe war so eine gute Lehrerin. Es war sehr interaktiv und wurde nicht langweilig. Es wurde auf unsere Bedürfnisse eingegangen und sehr professionell, aber doch familiär und freundlich gestaltet.",
      company: "Dogukan",
      logo: null,
      rating: 5,
    },
    {
      quote: "Die Liebe Leonie hat uns sehr interessiert alle Themen nahegelegt und praktisch umgesetzt. Es hat sehr viel Spaß gemacht und man konnte trotz des wichtigen und ernstes Themas miteinander lachen. :)",
      company: "Luna Specht",
      logo: null,
      rating: 5,
    },
    {
      quote: "Sehr interessante Schulung, sehr informativ aber trotzdem locker gestaltet.",
      company: "Dagmar Pahl",
      logo: null,
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
      const scrollAmount = direction === "left" ? -360 : 360; // Feste Scrollmenge
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

        <div className="relative group">
          <button
            onClick={() => scroll("left")}
            aria-label="Vorherige Referenz"
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="h-5 w-5 text-nrr-blue" />
          </button>

          <div
            ref={testimonialsRef}
            className="flex gap-6 overflow-x-auto hide-scroll-bar pb-8 pt-4 px-2 snap-x snap-mandatory"
          >
            {testimonials.map((testimonial, index) => (
              <ScrollReveal
                key={index}
                delay={100 + index * 100}
                className="snap-center"
              >
                <div className="w-[300px] md:w-[320px] h-[320px] p-6 rounded-xl before-glass flex flex-col">
                  <div className="flex items-center space-x-1 mb-4 text-amber-400">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <div className="overflow-y-auto flex-grow mb-4 thin-scroll">
                    <p className="italic text-gray-700 text-sm line-clamp-none">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="mt-auto pt-2 border-t border-gray-100">
                    {testimonial.logo && (
                      <img
                        src={testimonial.logo}
                        alt={`${testimonial.company} Logo`}
                        className="h-8 mb-2"
                      />
                    )}
                    <p className="font-medium text-nrr-blue">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            aria-label="Nächste Referenz"
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="h-5 w-5 text-nrr-blue" />
          </button>
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