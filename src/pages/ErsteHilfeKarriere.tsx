import React, { useEffect, useRef } from "react";
import ApplicationForm, {
    type FormConfig,
} from "@/components/ApplicationForm";
import { z } from "zod";

// --- iFrame Resizer Hook ---
// Dieser kleine Helfer misst die Höhe der Seite und sendet sie an die umgebende Seite.
const useIframeResizer = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new ResizeObserver(([entry]) => {
            if (entry) {
                const height = entry.contentRect.height;
                // Sende die Höhe an das Parent-Window (die Contao-Seite)
                window.parent.postMessage({ type: "resize-iframe", height: height }, "*");
            }
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return ref;
};


// "Bauplan" für das Bewerbungsformular "Lehrkraft Erste Hilfe"
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
    {
        name: "strasse",
        label: "Straße und Hausnummer",
        type: "text",
        validation: z.string().min(3, "Angabe ist erforderlich."),
    },
    {
        name: "plzOrt",
        label: "PLZ und Ort",
        type: "text",
        validation: z.string().min(5, "PLZ und Ort sind erforderlich."),
    },
    {
        name: "land",
        label: "Land",
        type: "select",
        validation: z.string().min(1, "Länderauswahl ist erforderlich."),
        options: [{ value: "Deutschland", label: "Deutschland" }],
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
        options: [
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
        ],
        validation: z.enum(["ja", "nein"], {
            errorMap: () => ({ message: "Bitte eine Option auswählen." }),
        }),
        className: "md:col-span-2",
    },
    {
        name: "erfahrung",
        label: "Haben Sie bereits Erfahrung als Lehrkraft sammeln können?",
        type: "radio",
        options: [
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
        ],
        validation: z.enum(["ja", "nein"], {
            errorMap: () => ({ message: "Bitte eine Option auswählen." }),
        }),
        className: "md:col-span-2",
    },
    {
        name: "fuehrerschein",
        label: "Führerschein vorhanden?",
        type: "radio",
        options: [
            { value: "ja", label: "Ja" },
            { value: "nein", label: "Nein" },
        ],
        validation: z.enum(["ja", "nein"], {
            errorMap: () => ({ message: "Bitte eine Option auswählen." }),
        }),
        className: "md:col-span-2",
    },
    {
        name: "verfuegbarkeit",
        label: "An welchen Tagen sind Sie zeitlich flexibel?",
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
        validation: z
            .array(z.string())
            .min(1, "Bitte geben Sie Ihre Verfügbarkeit an."),
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
        validation: z
            .string()
            .min(10, "Nachricht muss mind. 10 Zeichen enthalten."),
        className: "md:col-span-2",
    },
    {
        name: "lebenslauf",
        label: "Lebenslauf hochladen (PDF, max. 5MB)",
        type: "file",
        validation: z
            .any()
            .optional()
            .refine(
                (file) => !file || file.size <= 5 * 1024 * 1024,
                `Die Datei darf maximal 5MB groß sein.`
            )
            .refine(
                (file) => !file || file.type === "application/pdf",
                "Nur PDF-Dateien sind erlaubt."
            ),
        className: "md:col-span-2",
    },
    {
        name: "datenschutz",
        label: 'Ich habe die <a href="/datenschutz" target="_blank" class="text-nrr-blue hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere sie.',
        type: "checkbox",
        validation: z.literal(true, {
            errorMap: () => ({ message: "Sie müssen der Datenschutzerklärung zustimmen." }),
        }),
        className: "md:col-span-2",
    }
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
                        "Bitte laden Sie Ihren Lebenslauf als PDF-Dokument hoch (max. 5MB).",
                    ],
                }}
                infoBox2={{
                    title: "Bewerbungsprozess",
                    text: "Nach Eingang Ihrer Bewerbung prüfen wir Ihre Unterlagen und melden uns innerhalb weniger Werktage bei Ihnen für die nächsten Schritte.",
                }}
                emailJsServiceId="service_wsqekqp"
                emailJsTemplateId="template_eu8mssv" // Hier sollte eine spezifische Template-ID für Bewerbungen hinterlegt werden
                emailJsPublicKey="VYprboTK3z3nQQUTa"
            />
        </div>
    );
};

export default ErsteHilfeKarrierePage;