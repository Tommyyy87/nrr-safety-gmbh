
import React, { useEffect } from "react";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Function to handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-reveal").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll(".animate-reveal").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Cookie consent banner state
  const [showCookieBanner, setShowCookieBanner] = React.useState(true);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-50 p-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-700 mb-4 md:mb-0 md:mr-8">
              Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu bieten. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Ablehnen
              </button>
              <button
                onClick={() => setShowCookieBanner(false)}
                className="px-4 py-2 bg-nrr-blue text-white rounded hover:bg-nrr-lightblue transition-colors"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Index;
