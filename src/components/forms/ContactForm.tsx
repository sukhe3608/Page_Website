import { useNavigate } from "react-router";
import { Send } from "lucide-react";
import { useForm, rules } from "@/hooks/useForm";
import { services } from "@/data/services";
import { Field, Input, Select, Textarea } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import { Honeypot, simulateSubmit } from "@/components/forms/submit";

const serviceOptions = [{ value: "", label: "Select a service…" }, ...services.map((s) => ({ value: s.slug, label: s.name }))];
const budgetOptions = [
  { value: "", label: "Select a budget range…" },
  { value: "under-25k", label: "Under $25,000" },
  { value: "25-50k", label: "$25,000 – $50,000" },
  { value: "50-100k", label: "$50,000 – $100,000" },
  { value: "100-250k", label: "$100,000 – $250,000" },
  { value: "250k+", label: "$250,000+" },
];

export function ContactForm({ className }: { className?: string }) {
  const navigate = useNavigate();
  const { values, errors, status, setValue, onBlur, submit } = useForm([
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Work email", required: true, validate: rules.email },
    { name: "company", label: "Company" },
    { name: "phone", label: "Phone", validate: rules.phone },
    { name: "service", label: "Service of interest" },
    { name: "budget", label: "Budget range" },
    { name: "message", label: "Project details", required: true },
    { name: "_hp", label: "Company website" },
  ]);

  const handleSubmit = async (formValues: Record<string, string>) => {
    if (formValues._hp) return;
    await simulateSubmit(formValues);
    navigate("/thank-you", { state: { form: "Contact form" } });
  };

  return (
    <form className={className} onSubmit={(e) => submit(e, handleSubmit)} noValidate>
      <Honeypot value={values._hp} onChange={(v) => setValue("_hp", v)} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="contact-name" required error={errors.name}>
          <Input
            id="contact-name"
            name="name"
            value={values.name}
            onChange={(e) => setValue("name", e.target.value)}
            onBlur={() => onBlur("name")}
            error={!!errors.name}
            placeholder="Jane Doe"
            autoComplete="name"
            required
          />
        </Field>
        <Field label="Work email" htmlFor="contact-email" required error={errors.email}>
          <Input
            id="contact-email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => setValue("email", e.target.value)}
            onBlur={() => onBlur("email")}
            error={!!errors.email}
            placeholder="jane@company.com"
            autoComplete="email"
            required
          />
        </Field>
        <Field label="Company" htmlFor="contact-company" error={errors.company}>
          <Input
            id="contact-company"
            name="company"
            value={values.company}
            onChange={(e) => setValue("company", e.target.value)}
            onBlur={() => onBlur("company")}
            error={!!errors.company}
            placeholder="Company Inc."
            autoComplete="organization"
          />
        </Field>
        <Field label="Phone" htmlFor="contact-phone" hint="Optional" error={errors.phone}>
          <Input
            id="contact-phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValue("phone", e.target.value)}
            onBlur={() => onBlur("phone")}
            error={!!errors.phone}
            placeholder="+91 90000 00000"
            autoComplete="tel"
          />
        </Field>
        <Field label="Service of interest" htmlFor="contact-service" error={errors.service}>
          <Select
            id="contact-service"
            name="service"
            options={serviceOptions}
            value={values.service}
            onChange={(e) => setValue("service", e.target.value)}
            onBlur={() => onBlur("service")}
            error={!!errors.service}
          />
        </Field>
        <Field label="Budget range" htmlFor="contact-budget" error={errors.budget}>
          <Select
            id="contact-budget"
            name="budget"
            options={budgetOptions}
            value={values.budget}
            onChange={(e) => setValue("budget", e.target.value)}
            onBlur={() => onBlur("budget")}
            error={!!errors.budget}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Project details" htmlFor="contact-message" required error={errors.message}>
            <Textarea
              id="contact-message"
              name="message"
              value={values.message}
              onChange={(e) => setValue("message", e.target.value)}
              onBlur={() => onBlur("message")}
              error={!!errors.message}
              placeholder="Tell us about your site, requirements and any constraints…"
              required
            />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <Button type="submit" size="lg" loading={status === "submitting"} icon={<Send className="h-4 w-4" aria-hidden="true" />}>
          Send message
        </Button>
        {status === "error" && (
          <p role="alert" className="text-sm text-danger">
            Something went wrong sending your message. Please try again.
          </p>
        )}
        <p className="text-[13px] text-muted">We reply within one business day. No spam, ever.</p>
      </div>
    </form>
  );
}