import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import CustomButton from "@/components/ui/CustomButton";
import { AlertCircle, Check, Upload, X } from "lucide-react";
import Container from "@/components/ui/Container";

// --- Typen-Definitionen für die Konfiguration ---

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
  | "file"
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

// --- Hilfsfunktionen ---

const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

const generateZodSchema = (config: FormConfig) => {
  const shape: Record<string, z.ZodTypeAny> = {};
  config.forEach((field) => {
    shape[field.name] = field.validation;
  });
  return z.object(shape);
};

// --- Die Formular-Komponente ---

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
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const zodSchema = generateZodSchema(formConfig);
  type FormData = z.infer<typeof zodSchema>;

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zodSchema),
    defaultValues: formConfig.reduce((acc, field) => {
      // @ts-ignore
      acc[field.name] = field.type === "checkbox-group" ? [] : undefined;
      return acc;
    }, {}),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      let base64File = "";
      let uploadedFileName = "Keine Datei angehängt";

      if (data.lebenslauf instanceof File) {
        base64File = await fileToBase64(data.lebenslauf);
        uploadedFileName = data.lebenslauf.name;
      }

      const formattedData = Object.entries(data).reduce(
        (acc, [key, value]) => {
          if (Array.isArray(value)) {
            // @ts-ignore
            acc[key] = value.join(", ");
          } else if (value instanceof File) {
            // file object should not be sent directly
          } else {
            // @ts-ignore
            acc[key] = value;
          }
          return acc;
        },
        {}
      );

      const templateParams = {
        ...formattedData,
        form_title: formTitle,
        lebenslauf_name: uploadedFileName,
        lebenslauf_data: base64File,
      };

      await emailjs.send(
        emailJsServiceId,
        emailJsTemplateId,
        templateParams,
        emailJsPublicKey
      );
      setSubmitted(true);
    } catch (error) {
      console.error("Fehler beim Senden der Bewerbung:", error);
      alert(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
      );
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
        <label
          htmlFor={fieldConfig.name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {fieldConfig.label}
        </label>
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
                    className={`${baseClasses} bg-white ${error ? errorClasses : normalClasses
                      }`}
                  >
                    <option value="">Bitte wählen...</option>
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
                          value={opt.value}
                          onChange={(e) => {
                            const currentValues = field.value || [];
                            const newValue = e.target.checked
                              ? [...currentValues, opt.value]
                              : currentValues.filter((v: string) => v !== opt.value);
                            field.onChange(newValue);
                          }}
                          className="h-4 w-4 text-nrr-blue focus:ring-nrr-blue border-gray-300 rounded"
                        />
                        <span className="ml-2">{opt.label}</span>
                      </label>
                    ))}
                  </div>
                );
              case "file":
                return (
                  <div className="flex items-center gap-4">
                    <CustomButton
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-4 w-4 mr-2" />
                      Datei auswählen
                    </CustomButton>
                    <input
                      type="file"
                      id={fieldConfig.name}
                      ref={fileInputRef}
                      className="hidden"
                      accept=".pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setValue(fieldConfig.name, file);
                          setFileName(file.name);
                        }
                      }}
                    />
                    {fileName && (
                      <div className="flex items-center gap-2 text-sm">
                        <span>{fileName}</span>
                        <button
                          type="button"
                          onClick={() => {
                            setValue(fieldConfig.name, null);
                            setFileName(null);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                          }}
                          className="text-red-500 hover:text-red-700"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              case "checkbox":
                return (
                  <label className="flex items-start">
                    <input
                      type="checkbox"
                      {...field}
                      id={fieldConfig.name}
                      checked={!!field.value}
                      className="h-4 w-4 text-nrr-blue focus:ring-nrr-blue border-gray-300 rounded mt-1"
                    />
                    <span className="ml-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: fieldConfig.label }} />
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
            <h3 className="font-semibold text-nrr-blue mb-2">
              {infoBox1.title}
            </h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {infoBox1.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-gray-50 border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">
              {infoBox2.title}
            </h3>
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
            <div className="space-y-6">
              {/* KORREKTUR: "border-b" entfernt, um den Strich auszublenden */}
              <h3 className="text-xl font-semibold pb-2">
                Bewerbungsformular
              </h3>
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