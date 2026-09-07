import { useState } from "react";
import { useNavigate } from "react-router";
import { FileUp, Send } from "lucide-react";
import { useForm, rules } from "@/hooks/useForm";
import { Field, Input, Textarea } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import { Honeypot, simulateSubmit } from "@/components/forms/submit";

export function JobApplicationForm({ jobTitle, className }: { jobTitle: string; className?: string }) {
  const navigate = useNavigate();
  const { values, errors, status, setValue, onBlur, submit } = useForm([
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Email", required: true, validate: rules.email },
    { name: "phone", label: "Phone", validate: rules.phone },
    { name: "linkedin", label: "LinkedIn or portfolio URL" },
    { name: "cover", label: "Why are you a good fit?", required: true },
    { name: "_hp", label: "Company website" },
  ]);
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (formValues: Record<string, string>) => {
    if (formValues._hp) return;
    await simulateSubmit(formValues, 1200);
    navigate("/thank-you", { state: { form: `Application for ${jobTitle}` } });
  };

  return (
    <form className={className} onSubmit={(e) => submit(e, handleSubmit)} noValidate>
      <Honeypot value={values._hp} onChange={(v) => setValue("_hp", v)} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="j-name" required error={errors.name}>
          <Input id="j-name" value={values.name} onChange={(e) => setValue("name", e.target.value)} onBlur={() => onBlur("name")} error={!!errors.name} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Email" htmlFor="j-email" required error={errors.email}>
          <Input id="j-email" type="email" value={values.email} onChange={(e) => setValue("email", e.target.value)} onBlur={() => onBlur("email")} error={!!errors.email} placeholder="jane@company.com" autoComplete="email" />
        </Field>
        <Field label="Phone" htmlFor="j-phone" hint="Optional" error={errors.phone}>
          <Input id="j-phone" type="tel" value={values.phone} onChange={(e) => setValue("phone", e.target.value)} onBlur={() => onBlur("phone")} error={!!errors.phone} placeholder="+91 90000 00000" autoComplete="tel" />
        </Field>
        <Field label="LinkedIn or portfolio URL" htmlFor="j-linkedin" hint="Optional" error={errors.linkedin}>
          <Input id="j-linkedin" type="url" value={values.linkedin} onChange={(e) => setValue("linkedin", e.target.value)} onBlur={() => onBlur("linkedin")} error={!!errors.linkedin} placeholder="https://…" autoComplete="url" />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Resume" htmlFor="j-resume" hint="PDF, DOC or DOCX. Optional for now." error={errors.resume}>
            <label
              htmlFor="j-resume"
              className="flex cursor-pointer items-center justify-center gap-3 rounded-xl border border-dashed border-line bg-white px-4 py-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-soft/40"
            >
              <FileUp className="h-5 w-5 text-primary" aria-hidden="true" />
              <span className="text-sm font-medium text-muted">
                {fileName ? (
                  <span className="font-semibold text-navy">{fileName}</span>
                ) : (
                  <>Click to upload your resume</>
                )}
              </span>
              <input
                id="j-resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="sr-only"
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
              />
            </label>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field label="Why are you a good fit?" htmlFor="j-cover" required error={errors.cover}>
            <Textarea id="j-cover" value={values.cover} onChange={(e) => setValue("cover", e.target.value)} onBlur={() => onBlur("cover")} error={!!errors.cover} placeholder="Tell us about relevant experience, projects and what excites you about this role…" />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <Button type="submit" size="lg" loading={status === "submitting"} icon={<Send className="h-4 w-4" aria-hidden="true" />}>
          Submit application
        </Button>
        {status === "error" && (
          <p role="alert" className="text-sm text-danger">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-[13px] text-muted">We review every application and respond within 5 business days.</p>
      </div>
    </form>
  );
}