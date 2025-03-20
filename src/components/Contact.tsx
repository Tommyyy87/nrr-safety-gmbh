
import React, { useState } from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { Mail, Phone, MapPin, Check } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would normally send the form data to your server
    setSubmitted(true);
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="section-padding bg-gradient-to-b from-white to-blue-50 relative"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-nrr-blue/20 to-transparent"></div>

      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <span className="inline-block px-3 py-1 bg-nrr-gray text-nrr-blue rounded-full text-sm font-medium mb-4">
              Kontakt
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Kontaktieren Sie uns für eine unverbindliche Beratung
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-gray-700 text-lg">
              Ob per E-Mail oder Telefon – wir freuen uns darauf, Ihre Fragen zu beantworten und Ihnen ein maßgeschneidertes Angebot zu erstellen.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <ScrollReveal>
              <div className="before-glass rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-semibold mb-6">Direkte Kontaktdaten</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 text-nrr-blue">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">E-Mail</p>
                      <p className="text-gray-700"><a href="mailto:team@nrr-safety.de">team@nrr-safety.de</a></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-nrr-blue">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Telefon</p>
                      <p className="text-gray-700"><a href="tel:+4915756686199">49 1575 6686199</a></p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 text-nrr-blue">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium mb-1">Adresse</p>
                      <p className="text-gray-700"><a href="https://maps.app.goo.gl/Dicy2gMBK4LRY3sJ7" target="_blank">Neumarkt 8, 41460 Neuss</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="before-glass rounded-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Geschäftszeiten</h3>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Montag - Freitag</span>
                    <span className="font-medium">09:00 - 17:00 Uhr</span>
                  </div>
                  {/* <div className="flex justify-between">
                    <span className="text-gray-700">Samstag</span>
                    <span className="font-medium">Geschlossen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Sonntag</span>
                    <span className="font-medium">Geschlossen</span>
                  </div> */}
                </div>

                {/* <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-nrr-blue font-medium">
                    Notfälle? Wir bieten für Bestandskunden einen 24/7 Notdienst an.
                  </p>
                </div> */}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left">
            <div className="before-glass rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Kontaktformular</h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Nachricht gesendet!</h4>
                  <p className="text-gray-600 text-center">
                    Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name / Firma
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nrr-blue focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      E-Mail-Adresse
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nrr-blue focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefonnummer (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nrr-blue focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Ihre Nachricht / Ihr Anliegen
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-nrr-blue focus:border-transparent transition-all"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <CustomButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                    >
                      Absenden
                    </CustomButton>
                  </div>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
