import React, { useEffect, useRef } from "react";
import ApplicationForm, { type FormConfig } from "@/components/ApplicationForm";
import { z } from "zod";

// --- iFrame Resizer Hook ---
const useIframeResizer = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            if (entry) {
                const height = entry.contentRect.height;
                window.parent.postMessage({ type: "resize-iframe", height }, "*");
            }
        });

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return ref;
};

// Formular-Konfiguration "Lehrkraft Erste Hilfe"
const ersteHilfeFormConfig: FormConfig = [
    {
        name: "anrede",
        label: "Anrede",
        type: "select",
        validation: z.string().min(1, "Anrede ist erforderlich."),
        options: [
            { value: "Herr", label: "Herr" },
            { value: "Frau", label: "Frau" },
            { value: "Divers", label: "Divers" },
        ],
        className: "md:col-span-2",
    },
    {
        name: "vorname",
        label: "Vorname",
        type: "text",
        validation: z.string().min(2, "Vorname ist erforderlich."),
    },
    {
        name: "nachname",
        label: "Nachname",
        type: "text",
        validation: z.string().min(2, "Nachname ist erforderlich."),
    },

    // Adresse (getrennte Felder)
    {
        name: "strasse",
        label: "Straße",
        type: "text",
        validation: z.string().min(3, "Straße ist erforderlich."),
    },
    {
        name: "hausnummer",
        label: "Hausnummer",
        type: "text",
        validation: z.string().min(1, "Hausnummer ist erforderlich."),
    },
    {
        name: "plz",
        label: "PLZ",
        type: "text",
        validation: z
            .string()
            .regex(/^\d{5}$/, "Bitte eine 5-stellige PLZ angeben."),
    },
    {
        name: "ort",
        label: "Ort",
        type: "text",
        validation: z.string().min(2, "Ort ist erforderlich."),
    },

    {
        name: "email",
        label: "E-Mail",
        type: "email",
        validation: z.string().email("Ungültige E-Mail-Adresse."),
    },
    {
        name: "telefon",
        label: "Telefon",
        type: "tel",
        validation: z.string().optional(),
    },
    {
        name: "geburtsdatum",
        label: "Geburtsdatum",
        type: "date",
        validation: z.string().min(1, "Geburtsdatum ist erforderlich."),
    },

    {
        name: "qualifikation",
        label: "Besitzen Sie die Qualifikation zum/zur Lehrkraft Erste-Hilfe?",
        type: "radio",
        validation: z.string().min(1, "Bitte wählen Sie eine Option."),
        options: [
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
        ],
        className: "md:col-span-2",
    },

    // Berufserfahrung jetzt OPTIONAL
    {
        name: "erfahrung",
        label: "Berufserfahrung (Kurzbeschreibung)",
        type: "textarea",
        validation: z.string().optional(),
        className: "md:col-span-2",
    },

    {
        name: "fuehrerschein",
        label: "Führerschein vorhanden?",
        type: "radio",
        validation: z.string().min(1, "Bitte wählen Sie eine Option."),
        options: [
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
        ],
        className: "md:col-span-2",
    },
    {
        name: "verfuegbarkeit",
        label: "Verfügbarkeit (mehrfach möglich)",
        type: "checkbox-group",
        options: [
            { value: "Mo-Vormittag", label: "Mo Vormittag" },
            { value: "Di-Vormittag", label: "Di Vormittag" },
            { value: "Mi-Vormittag", label: "Mi Vormittag" },
            { value: "Do-Vormittag", label: "Do Vormittag" },
            { value: "Fr-Vormittag", label: "Fr Vormittag" },
            { value: "Sa-Vormittag", label: "Sa Vormittag" },
            { value: "Mo-Nachmittag", label: "Mo Nachmittag" },
            { value: "Di-Nachmittag", label: "Di Nachmittag" },
            { value: "Mi-Nachmittag", label: "Mi Nachmittag" },
            { value: "Do-Nachmittag", label: "Do Nachmittag" },
            { value: "Fr-Nachmittag", label: "Fr Nachmittag" },
            { value: "Sa-Nachmittag", label: "Sa Nachmittag" },
        ],
        validation: z.array(z.string()).min(1, "Bitte geben Sie Ihre Verfügbarkeit an."),
        className: "md:col-span-2",
    },
    {
        name: "aufmerksam",
        label: "Wie sind Sie auf uns aufmerksam geworden?",
        type: "select",
        validation: z.string().min(1, "Bitte eine Option auswählen."),
        options: [
            { value: "empfehlung", label: "Empfehlung" },
            { value: "google", label: "Google" },
            { value: "social_media", label: "Social Media" },
            { value: "jobportal", label: "Jobportal" },
            { value: "sonstiges", label: "Sonstiges" },
        ],
        className: "md:col-span-2",
    },
    {
        name: "nachricht",
        label: "Ihre Nachricht an uns",
        type: "textarea",
        validation: z.string().min(10, "Nachricht muss mind. 10 Zeichen enthalten."),
        className: "md:col-span-2",
    },
    {
        name: "datenschutz",
        label:
            'Ich habe die <a href="/datenschutz" target="_blank" class="text-nrr-blue hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere sie.',
        type: "checkbox",
        validation: z.literal(true, {
            errorMap: () => ({
                message: "Sie müssen der Datenschutzerklärung zustimmen.",
            }),
        }),
        className: "md:col-span-2",
    },
];

const ErsteHilfeKarrierePage = () => {
    const pageRef = useIframeResizer();

    return (
        <div ref={pageRef}>
            <ApplicationForm
                formConfig={ersteHilfeFormConfig}
                formTitle="Bewerbung als Lehrkraft Erste Hilfe"
                formDescription="Werden Sie Erste-Hilfe-Trainer:in. Wir freuen uns auf Ihre Bewerbung!"
                infoBox1={{
                    title: "Wichtige Hinweise",
                    items: [
                        "Die mit * gekennzeichneten Felder sind Pflichtfelder.",
                        "Wir speichern Ihre Bewerbungsdaten streng nach DSGVO.",
                    ],
                }}
                infoBox2={{
                    title: "Bewerbungsprozess",
                    text:
                        "Nach Eingang Ihrer Bewerbung prüfen wir Ihre Angaben und melden uns innerhalb weniger Werktage bei Ihnen für die nächsten Schritte.",
                }}
                emailJsServiceId="service_wsqekqp"
                emailJsTemplateId="template_vjlm3n6"
                emailJsPublicKey="VYprboTK3z3nQQUTa"
            />
        </div>
    );
};

export default ErsteHilfeKarrierePage;
