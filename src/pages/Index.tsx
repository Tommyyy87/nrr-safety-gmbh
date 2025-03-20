import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  // Funktion zur Handhabung von Scroll-Animationen
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

  return (
    <main className="overflow-x-hidden">
      <Header />
      <About />
      <Services />
      <Workflow />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;