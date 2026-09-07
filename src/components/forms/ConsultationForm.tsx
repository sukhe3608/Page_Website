import { useNavigate } from "react-router";
import { CalendarClock } from "lucide-react";
import { useForm, rules } from "@/hooks/useForm";
import { Field, Input, Select, Textarea } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import { Honeypot, simulateSubmit } from "@/components/forms/submit";

const topicOptions = [
  { value: "", label: "Select a topic…" },
  { value: "fire", label: "Fire alarm & suppression" },
  { value: "security", label: "CCTV, access control & intruder alarm" },
  { value: "automation", label: "Building / ELV automation" },
  { value: "amc", label: "Maintenance (AMC) or upgrades" },
  { value: "other", label: "Something else" },
];

const timeOptions = [
  { value: "", label: "Preferred time…" },
  { value: "morning", label: "Morning (9:00 – 12:00)" },
  { value: "afternoon", label: "Afternoon (12:00 – 17:00)" },
  { value: "any", label: "Any time" },
];

export function ConsultationForm({ className }: { className?: string }) {
  const navigate = useNavigate();
  const { values, errors, status, setValue, onBlur, submit } = useForm([
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Work email", required: true, validate: rules.email },
    { name: "company", label: "Organization / site" },
    { name: "topic", label: "What would you like to discuss?", required: true },
    { name: "date", label: "Preferred date" },
    { name: "time", label: "Preferred time" },
    { name: "notes", label: "Anything we should know beforehand?" },
    { name: "_hp", label: "Company website" },
  ]);

  const handleSubmit = async (formValues: Record<string, string>) => {
    if (formValues._hp) return;
    await simulateSubmit(formValues);
    navigate("/thank-you", { state: { form: "Consultation request" } });
  };

  return (
    <form className={className} onSubmit={(e) => submit(e, handleSubmit)} noValidate>
      <Honeypot value={values._hp} onChange={(v) => setValue("_hp", v)} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="c-name" required error={errors.name}>
          <Input id="c-name" value={values.name} onChange={(e) => setValue("name", e.target.value)} onBlur={() => onBlur("name")} error={!!errors.name} placeholder="Jane Doe" autoComplete="name" />
        </Field>
        <Field label="Work email" htmlFor="c-email" required error={errors.email}>
          <Input id="c-email" type="email" value={values.email} onChange={(e) => setValue("email", e.target.value)} onBlur={() => onBlur("email")} error={!!errors.email} placeholder="jane@company.com" autoComplete="email" />
        </Field>
        <Field label="Company" htmlFor="c-company" error={errors.company}>
          <Input id="c-company" value={values.company} onChange={(e) => setValue("company", e.target.value)} onBlur={() => onBlur("company")} error={!!errors.company} placeholder="Company Inc." autoComplete="organization" />
        </Field>
        <Field label="What would you like to discuss?" htmlFor="c-topic" required error={errors.topic}>
          <Select id="c-topic" options={topicOptions} value={values.topic} onChange={(e) => setValue("topic", e.target.value)} onBlur={() => onBlur("topic")} error={!!errors.topic} />
        </Field>
        <Field label="Preferred date" htmlFor="c-date" hint="Optional" error={errors.date}>
          <Input id="c-date" type="date" value={values.date} onChange={(e) => setValue("date", e.target.value)} onBlur={() => onBlur("date")} error={!!errors.date} />
        </Field>
        <Field label="Preferred time" htmlFor="c-time" hint="Optional" error={errors.time}>
          <Select id="c-time" options={timeOptions} value={values.time} onChange={(e) => setValue("time", e.target.value)} onBlur={() => onBlur("time")} error={!!errors.time} />
        </Field>
        <div className="sm:col-span-2">
          <Field label="Anything we should know beforehand?" htmlFor="c-notes" hint="Optional" error={errors.notes}>
            <Textarea id="c-notes" value={values.notes} onChange={(e) => setValue("notes", e.target.value)} onBlur={() => onBlur("notes")} error={!!errors.notes} placeholder="Site details, system types, timelines…" />
          </Field>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-start gap-3">
        <Button type="submit" size="lg" loading={status === "submitting"} icon={<CalendarClock className="h-4 w-4" aria-hidden="true" />}>
          Request consultation
        </Button>
        {status === "error" && (
          <p role="alert" className="text-sm text-danger">
            Something went wrong. Please try again.
          </p>
        )}
        <p className="text-[13px] text-muted">A 30-minute call with a senior engineer. No sales pressure.</p>
      </div>
    </form>
  );
}