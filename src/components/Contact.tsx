import React, { useState, useRef, useEffect } from "react";
import Container from "./ui/Container";
import CustomButton from "./ui/CustomButton";
import { Mail, Phone, MapPin, Check, AlertCircle } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";
import emailjs from '@emailjs/browser';
import { z } from "zod";

// Umgebungsvariablen
const RECAPTCHA_SITE_KEY = '6LdKQ_sqAAAAAE10DSqbn6v2MLrr4rwArJNiMU2t';
const EMAILJS_SERVICE_ID = 'service_wsqekqp';
const EMAILJS_TEMPLATE_ID = 'template_eu8mssv';
const EMAILJS_PUBLIC_KEY = 'VYprboTK3z3nQQUTa';

// Validierungsschema mit zod
const contactSchema = z.object({
  name: z.string().min(2, "Name muss mindestens 2 Zeichen lang sein").max(100),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  message: z.string().min(10, "Nachricht muss mindestens 10 Zeichen lang sein").max(1000),
  honeypot: z.string().max(0, "Dieses Feld muss leer bleiben"), // Honeypot-Feld muss leer sein
});

// Typen für Formular-Daten
type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  honeypot: string; // Honeypot-Feld
};

// Typen für Formular-Fehler
type FormErrors = {
  [key in keyof ContactFormData]?: string;
};

const Contact = () => {
  // FormData mit Honeypot erweitert
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    honeypot: "", // Honeypot-Feld, sollte immer leer bleiben
  });

  // Formularstatus
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formStartTime, setFormStartTime] = useState<number>(Date.now());
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  // Bei Komponenteninitialisierung den Zeitstempel setzen
  useEffect(() => {
    setFormStartTime(Date.now());

    // reCAPTCHA v3 laden
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action: 'contact_form' })
          .then((token: string) => {
            setRecaptchaToken(token);
          });
      });
    }
  }, []);

  // Bei Änderungen im Formular die Daten aktualisieren und Validierungsfehler zurücksetzen
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Fehler für dieses Feld zurücksetzen, wenn der Benutzer etwas ändert
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  // Validierungsfunktion
  const validateForm = (): boolean => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: FormErrors = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  // Zeitbasierte Validierung
  const validateSubmitTime = (): boolean => {
    const currentTime = Date.now();
    const timeDiff = currentTime - formStartTime;

    // Wenn das Formular in weniger als 3 Sekunden ausgefüllt wurde, 
    // handelt es sich wahrscheinlich um einen Bot
    return timeDiff > 3000;
  };

  // Formular abschicken
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Wenn Honeypot-Feld ausgefüllt wurde (durch Bot), dann verwerfen wir das Formular
    // ohne Fehlermeldung, um den Bot nicht zu alarmieren
    if (formData.honeypot) {
      console.log("Honeypot-Falle hat einen Bot erkannt");
      // Täusche eine erfolgreiche Übermittlung vor
      setSubmitted(true);
      return;
    }

    // Zeitbasierte Validierung
    if (!validateSubmitTime()) {
      console.log("Formular wurde zu schnell ausgefüllt, wahrscheinlich Bot");
      // Täusche eine erfolgreiche Übermittlung vor
      setSubmitted(true);
      return;
    }

    // Formular validieren
    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Füge das aktuelle Datum und reCAPTCHA-Token hinzu
      const currentDate = new Date().toLocaleString('de-DE', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      // Bereite die Daten für die Übermittlung vor
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Nicht angegeben",
        message: formData.message,
        date: currentDate,
        recaptchaToken: recaptchaToken
      };

      // Sende das Formular ab
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email erfolgreich gesendet:', result.text);
      setSubmitted(true);

      // Formular zurücksetzen nach Erfolgsmeldung
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          honeypot: ""
        });
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Fehler beim Senden der E-Mail:', error);
      alert("Fehler beim Senden der Nachricht. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt per E-Mail.");
    } finally {
      setLoading(false);
    }
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
                      <p className="text-gray-700"><a href="tel:+4915756686199">+49 1575 6686199</a></p>
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
                </div>
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
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-nrr-blue'} focus:border-transparent transition-all`}
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.name}
                      </p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-nrr-blue'} focus:border-transparent transition-all`}
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.email}
                      </p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-nrr-blue'} focus:border-transparent transition-all`}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.phone}
                      </p>
                    )}
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
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-nrr-blue'} focus:border-transparent transition-all`}
                      required
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 flex items-center">
                        <AlertCircle className="h-3 w-3 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Honeypot-Feld - Versteckt für echte Benutzer, aber sichtbar für Bots */}
                  <div className="opacity-0 absolute top-0 left-0 h-0 w-0 -z-10 overflow-hidden">
                    <label htmlFor="honeypot">Diese Feld nicht ausfüllen</label>
                    <input
                      type="text"
                      id="honeypot"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="pt-2">
                    <CustomButton
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Wird gesendet..." : "Absenden"}
                    </CustomButton>
                  </div>

                  <div className="text-xs text-gray-500 mt-3 text-center">
                    Diese Seite ist durch reCAPTCHA geschützt und es gelten die
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-nrr-blue hover:underline mx-1">
                      Datenschutzbestimmungen
                    </a>
                    und
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-nrr-blue hover:underline mx-1">
                      Nutzungsbedingungen
                    </a>
                    von Google.
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

// Typendefinition für reCAPTCHA
declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

export default Contact;