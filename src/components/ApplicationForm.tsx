import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import CustomButton from "@/components/ui/CustomButton";
import { AlertCircle, Check } from "lucide-react";
import Container from "@/components/ui/Container";

/**
 * -----------------------------
 * Typen & Konfiguration
 * -----------------------------
 */

type FieldOption = { value: string; label: string };

type FormFieldConfig = {
  name: string;
  label: string;
  type:
  | "text"
  | "email"
  | "tel"
  | "date"
  | "textarea"
  | "select"
  | "radio"
  | "checkbox-group"
  | "checkbox";
  options?: FieldOption[];
  placeholder?: string;
  validation: z.ZodTypeAny;
  className?: string;
};

export type FormConfig = FormFieldConfig[];

interface ApplicationFormProps {
  formConfig: FormConfig;
  formTitle: string;
  formDescription: string;
  infoBox1: { title: string; items: string[] };
  infoBox2: { title: string; text: string };
  emailJsServiceId: string;
  emailJsTemplateId: string;
  emailJsPublicKey: string;
}

/**
 * Hilfsfunktion: Zod-Schema dynamisch aus der Konfiguration bauen
 */
const generateZodSchema = (config: FormConfig) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  config.forEach((field) => {
    shape[field.name] = field.validation;
  });
  return z.object(shape);
};

/**
 * -----------------------------
 * Formular-Komponente
 * -----------------------------
 */

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  formConfig,
  formTitle,
  formDescription,
  infoBox1,
  infoBox2,
  emailJsServiceId,
  emailJsTemplateId,
  emailJsPublicKey,
}) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Honeypot (unsichtbares Feld – wenn befüllt, dann Spam)
  const [hpValue, setHpValue] = useState("");

  const zodSchema = generateZodSchema(formConfig);
  type FormData = z.infer<typeof zodSchema>;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
    defaultValues: formConfig.reduce((acc, field) => {
      (acc as any)[field.name] = field.type === "checkbox-group" ? [] : undefined;
      return acc;
    }, {} as Record<string, any>),
  });

  const onSubmit = async (data: FormData) => {
    // 0) Honeypot-Prüfung
    if (hpValue.trim() !== "") {
      toast.error("Versand abgebrochen (Spamverdacht).");
      return;
    }

    setLoading(true);
    try {
      // 1) Formulardaten formatieren (Strings erzwingen)
      const formattedData = Object.entries(data).reduce((acc, [key, value]) => {
        let out: string;
        if (Array.isArray(value)) out = value.join(", ");
        else if (value === undefined || value === null) out = "";
        else out = String(value);

        // Leere optionale Felder sauber befüllen
        if (out.trim() === "") out = "Nicht angegeben";
        acc[key] = out;
        return acc;
      }, {} as Record<string, string>);

      // 2) EmailJS-Parameter – nur Strings (keine Attachments)
      const templateParams = {
        ...formattedData,
      };

      // 3) Senden
      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        templateParams,
        emailJsPublicKey
      );

      setSubmitted(true);
    } catch (error: any) {
      console.error("Fehler beim Senden der Bewerbung:", error);
      const serverMsg = error?.text || error?.message || "Unbekannter Fehler beim Versand.";
      toast.error(`Senden fehlgeschlagen: ${serverMsg}`);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (fieldConfig: FormFieldConfig) => {
    const error = errors[fieldConfig.name]?.message as string | undefined;
    const baseClasses =
      "w-full px-4 py-3 rounded-lg border focus:border-transparent transition-all";
    const errorClasses = "border-red-500 focus:ring-red-500";
    const normalClasses = "border-gray-300 focus:ring-nrr-blue";

    return (
      <div key={fieldConfig.name} className={fieldConfig.className}>
        {fieldConfig.type !== "checkbox" && (
          <label
            htmlFor={fieldConfig.name}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {fieldConfig.label}
          </label>
        )}

        <Controller
          name={fieldConfig.name}
          control={control}
          render={({ field }) => {
            switch (fieldConfig.type) {
              case "textarea":
                return (
                  <textarea
                    {...field}
                    id={fieldConfig.name}
                    rows={4}
                    className={`${baseClasses} ${error ? errorClasses : normalClasses}`}
                  />
                );
              case "select":
                return (
                  <select
                    {...field}
                    id={fieldConfig.name}
                    className={`${baseClasses} bg-white ${error ? errorClasses : normalClasses}`}
                  >
                    <option value="">Bitte wählen.</option>
                    {fieldConfig.options?.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                );
              case "radio":
                return (
                  <div className="flex gap-4 pt-2">
                    {fieldConfig.options?.map((opt) => (
                      <label key={opt.value} className="flex items-center">
                        <input
                          type="radio"
                          {...field}
                          value={opt.value}
                          checked={field.value === opt.value}
                          onChange={() => field.onChange(opt.value)}
                          className="h-4 w-4 text-nrr-blue focus:ring-nrr-blue border-gray-300"
                        />
                        <span className="ml-2">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                );
              case "checkbox-group":
                return (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                    {fieldConfig.options?.map((opt) => (
                      <label key={opt.value} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={Array.isArray(field.value) ? field.value.includes(opt.value) : false}
                          onChange={(e) => {
                            const currentValues: string[] = Array.isArray(field.value) ? field.value : [];
                            if (e.target.checked) {
                              field.onChange([...currentValues, opt.value]);
                            } else {
                              field.onChange(currentValues.filter((v) => v !== opt.value));
                            }
                          }}
                          className="h-4 w-4 text-nrr-blue focus:ring-nrr-blue border-gray-300 rounded"
                        />
                        <span className="ml-2">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                );
              case "checkbox":
                return (
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      id={fieldConfig.name}
                      checked={!!field.value}
                      onChange={(e) => field.onChange(e.target.checked)}
                      className="h-4 w-4 text-nrr-blue focus:ring-nrr-blue border-gray-300 rounded mt-1"
                    />
                    <span
                      className="ml-2 text-sm text-gray-600"
                      dangerouslySetInnerHTML={{ __html: fieldConfig.label }}
                    />
                  </label>
                );
              default:
                return (
                  <input
                    type={fieldConfig.type}
                    id={fieldConfig.name}
                    {...field}
                    className={`${baseClasses} ${error ? errorClasses : normalClasses}`}
                  />
                );
            }
          }}
        />

        {error && (
          <p className="mt-1 text-sm text-red-600 flex items-center">
            <AlertCircle className="h-3 w-3 mr-1" />
            {error}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <Container className="max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
          {formTitle}
        </h1>
        <p className="text-gray-600 text-lg mb-8">{formDescription}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg bg-blue-50 border border-blue-200">
            <h3 className="font-semibold text-nrr-blue mb-2">{infoBox1.title}</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {infoBox1.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">{infoBox2.title}</h3>
            <p className="text-sm text-gray-700">{infoBox2.text}</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-12">
            <Check className="mx-auto h-16 w-16 text-green-500 bg-green-100 rounded-full p-2" />
            <h2 className="text-2xl font-bold mt-4">Bewerbung erfolgreich!</h2>
            <p className="text-gray-600 mt-2">
              Vielen Dank für Ihr Interesse. Wir haben Ihre Bewerbung erhalten.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Honeypot-Feld: für Nutzer unsichtbar/offscreen */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "-10000px",
                top: "auto",
                width: "1px",
                height: "1px",
                overflow: "hidden",
              }}
            >
              <label htmlFor="website">Bitte dieses Feld leer lassen</label>
              <input
                id="website"
                name="website"
                type="text"
                autoComplete="off"
                tabIndex={-1}
                value={hpValue}
                onChange={(e) => setHpValue(e.target.value)}
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold pb-2">Bewerbungsformular</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {formConfig.map(renderField)}
              </div>
              <div className="pt-4">
                <CustomButton
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? "Wird gesendet..." : "Bewerbung absenden"}
                </CustomButton>
              </div>
            </div>
          </form>
        )}
      </Container>
    </div>
  );
};

export default ApplicationForm;
