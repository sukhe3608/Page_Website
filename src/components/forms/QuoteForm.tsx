import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router";
import { ArrowLeft, ArrowRight, Check, FileText, Send, Sparkles, User } from "lucide-react";
import { useForm, rules } from "@/hooks/useForm";
import { services } from "@/data/services";
import { Field, Input, Select, Textarea } from "@/components/ui/Fields";
import { Button } from "@/components/ui/Button";
import { Honeypot, simulateSubmit, formTransition } from "@/components/forms/submit";
import { motionTokens } from "@/animations/tokens";
import { cn } from "@/utils/cn";

const stepMeta = [
  { label: "Your information", icon: User },
  { label: "Project type", icon: Sparkles },
  { label: "Requirements", icon: FileText },
  { label: "Budget & timeline", icon: Check },
  { label: "Review & submit", icon: Send },
];

const budgetOptions = [
  { value: "under-25k", label: "Under $25,000" },
  { value: "25-50k", label: "$25,000 – $50,000" },
  { value: "50-100k", label: "$50,000 – $100,000" },
  { value: "100-250k", label: "$100,000 – $250,000" },
  { value: "250k+", label: "$250,000+" },
];

const timelineOptions = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-2-months", label: "Within 1–2 months" },
  { value: "3-6-months", label: "Within 3–6 months" },
  { value: "exploring", label: "Just exploring" },
];

export function QuoteForm({ className }: { className?: string }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const { values, errors, status, setValue, onBlur, submit } = useForm([
    { name: "name", label: "Full name", required: true },
    { name: "email", label: "Work email", required: true, validate: rules.email },
    { name: "company", label: "Company" },
    { name: "phone", label: "Phone", validate: rules.phone },
    { name: "projectType", label: "Project type", required: true },
    { name: "projectScope", label: "Project scope", required: true },
    { name: "timeline", label: "Timeline" },
    { name: "budget", label: "Budget range" },
    { name: "notes", label: "Additional notes" },
    { name: "_hp", label: "Company website" },
  ]);

  const stepFields: string[][] = [
    ["name", "email", "company", "phone"],
    ["projectType"],
    ["projectScope"],
    ["timeline", "budget"],
    [],
  ];

  const validateStep = (stepIndex: number) => {
    const needed = stepFields[stepIndex];
    const invalid: string[] = [];
    for (const name of needed) {
      const value = values[name] ?? "";
      const fieldRequired = ["name", "email", "projectType", "projectScope"].includes(name);
      if (fieldRequired && !value.trim()) invalid.push(name);
      if (name === "email" && value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) invalid.push(name);
    }
    return invalid.length === 0;
  };

  const next = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 4));
  };

  const back = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = async (formValues: Record<string, string>) => {
    if (formValues._hp) return;
    await simulateSubmit(formValues, 1200);
    navigate("/thank-you", { state: { form: "Quote request" } });
  };

  const serviceName = services.find((s) => s.slug === values.projectType)?.name ?? values.projectType;

  return (
    <form className={className} onSubmit={(e) => submit(e, handleSubmit)} noValidate>
      <Honeypot value={values._hp} onChange={(v) => setValue("_hp", v)} />

      <div className="mb-10" role="group" aria-label="Form progress">
        <ol className="flex items-center gap-0">
          {stepMeta.map((meta, i) => (
            <li key={meta.label} className={cn("flex items-center", i < 4 && "flex-1")}>
              <div className="flex flex-col items-center gap-2">
                <span
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-300",
                    i < step
                      ? "border-primary bg-primary text-white"
                      : i === step
                        ? "border-primary bg-soft text-primary"
                        : "border-line bg-white text-muted"
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  {i < step ? <Check className="h-4 w-4" aria-hidden="true" /> : String(i + 1).padStart(2, "0")}
                </span>
                <span className={cn("hidden text-[11px] font-semibold sm:block", i === step ? "text-primary" : "text-muted")}>
                  {meta.label}
                </span>
              </div>
              {i < 4 && (
                <div className="relative mx-2 h-0.5 flex-1 overflow-hidden rounded bg-line">
                  <motion.span
                    className="absolute inset-y-0 left-0 bg-primary"
                    initial={false}
                    animate={{ width: i < step ? "100%" : "0%" }}
                    transition={{ duration: 0.4, ease: motionTokens.ease.standard }}
                  />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={formTransition}
        >
          {step === 0 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full name" htmlFor="q-name" required error={errors.name}>
                <Input id="q-name" value={values.name} onChange={(e) => setValue("name", e.target.value)} onBlur={() => onBlur("name")} error={!!errors.name} placeholder="Jane Doe" autoComplete="name" />
              </Field>
              <Field label="Work email" htmlFor="q-email" required error={errors.email}>
                <Input id="q-email" type="email" value={values.email} onChange={(e) => setValue("email", e.target.value)} onBlur={() => onBlur("email")} error={!!errors.email} placeholder="jane@company.com" autoComplete="email" />
              </Field>
              <Field label="Company" htmlFor="q-company" error={errors.company}>
                <Input id="q-company" value={values.company} onChange={(e) => setValue("company", e.target.value)} onBlur={() => onBlur("company")} error={!!errors.company} placeholder="Company Inc." autoComplete="organization" />
              </Field>
              <Field label="Phone" htmlFor="q-phone" hint="Optional" error={errors.phone}>
                <Input id="q-phone" type="tel" value={values.phone} onChange={(e) => setValue("phone", e.target.value)} onBlur={() => onBlur("phone")} error={!!errors.phone} placeholder="+91 90000 00000" autoComplete="tel" />
              </Field>
            </div>
          )}

          {step === 1 && (
            <div role="radiogroup" aria-label="Project type" aria-describedby="q-type-error">
              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s.slug}
                    role="radio"
                    aria-checked={values.projectType === s.slug}
                    onClick={() => setValue("projectType", s.slug)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl border bg-white p-4 text-left transition-all duration-300",
                      values.projectType === s.slug
                        ? "border-primary bg-soft/60 shadow-glow"
                        : "border-line hover:border-primary/40"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                        values.projectType === s.slug ? "border-primary bg-primary" : "border-line bg-white"
                      )}
                    >
                      {values.projectType === s.slug && <Check className="h-3 w-3 text-white" aria-hidden="true" />}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-semibold text-navy">{s.name}</span>
                      <span className="text-xs text-muted">{s.tagline}</span>
                    </span>
                  </button>
                ))}
              </div>
              {errors.projectType && (
                <p id="q-type-error" role="alert" className="mt-2 text-sm text-danger">
                  {errors.projectType}
                </p>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="grid gap-5">
              <Field label="Project scope" htmlFor="q-scope" required error={errors.projectScope}>
                <Textarea
                  id="q-scope"
                  value={values.projectScope}
                  onChange={(e) => setValue("projectScope", e.target.value)}
                  onBlur={() => onBlur("projectScope")}
                  error={!!errors.projectScope}
                  className="min-h-44"
                  placeholder="What does your site need? How many doors or cameras? What matters most — coverage, compliance, budget?"
                />
              </Field>
              <Field label="Timeline" htmlFor="q-timeline" hint="Optional" error={errors.timeline}>
                <Select id="q-timeline" options={[{ value: "", label: "Select a timeline…" }, ...timelineOptions]} value={values.timeline} onChange={(e) => setValue("timeline", e.target.value)} error={!!errors.timeline} />
              </Field>
            </div>
          )}

          {step === 3 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Budget range" htmlFor="q-budget" error={errors.budget}>
                <Select id="q-budget" options={[{ value: "", label: "Select a budget range…" }, ...budgetOptions]} value={values.budget} onChange={(e) => setValue("budget", e.target.value)} error={!!errors.budget} />
              </Field>
              <Field label="Preferred start" htmlFor="q-start" error={errors.timeline}>
                <Select id="q-start" options={[{ value: "", label: "Select…" }, ...timelineOptions]} value={values.timeline} onChange={(e) => setValue("timeline", e.target.value)} error={!!errors.timeline} />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Additional notes" htmlFor="q-notes" hint="Optional" error={errors.notes}>
                  <Textarea id="q-notes" value={values.notes} onChange={(e) => setValue("notes", e.target.value)} onBlur={() => onBlur("notes")} error={!!errors.notes} placeholder="Anything else we should know…" />
                </Field>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="rounded-2xl border border-line bg-white p-6 sm:p-8">
              <h3 className="text-lg font-semibold text-navy">Review your request</h3>
              <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {[
                  ["Name", values.name],
                  ["Email", values.email],
                  ["Company", values.company || "—"],
                  ["Phone", values.phone || "—"],
                  ["Project type", serviceName || "—"],
                  ["Timeline", timelineOptions.find((o) => o.value === values.timeline)?.label ?? "—"],
                  ["Budget", budgetOptions.find((o) => o.value === values.budget)?.label ?? "—"],
                ].map(([label, value]) => (
                  <div key={label} className="flex flex-col gap-0.5 border-b border-line pb-3">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">{label}</dt>
                    <dd className="text-sm font-medium text-navy">{value}</dd>
                  </div>
                ))}
                {values.projectScope && (
                  <div className="sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-muted">Scope</dt>
                    <dd className="mt-1 text-sm leading-relaxed text-navy">{values.projectScope}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 flex items-center justify-between gap-4">
        <Button type="button" variant="ghost" onClick={back} disabled={step === 0} className={cn(step === 0 && "invisible")}>
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </Button>
        {step < 4 ? (
          <Button type="button" onClick={next} icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}>
            Continue
          </Button>
        ) : (
          <Button type="submit" loading={status === "submitting"} icon={<Send className="h-4 w-4" aria-hidden="true" />}>
            Submit request
          </Button>
        )}
      </div>

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-danger">
          Something went wrong submitting your request. Please try again.
        </p>
      )}
    </form>
  );
}