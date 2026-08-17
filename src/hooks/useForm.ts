import { useCallback, useState, type FormEvent } from "react";

export type FieldRule = (value: string) => string | null;

export interface FormField {
  name: string;
  label: string;
  required?: boolean;
  validate?: FieldRule;
}

export type FormValues = Record<string, string>;
export type FormErrors = Partial<Record<string, string>>;
export type SubmitStatus = "idle" | "submitting" | "error";

export const rules: {
  required: (label: string) => FieldRule;
  email: FieldRule;
  phone: FieldRule;
} = {
  required: (label: string) => (value) =>
    value.trim() ? null : `${label} is required.`,
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? null : "Enter a valid email address.",
  phone: (value) =>
    value.trim() === "" || /^[+\d\s()-]{7,20}$/.test(value.trim())
      ? null
      : "Enter a valid phone number.",
};

export function useForm(fields: FormField[]) {
  const initial = Object.fromEntries(fields.map((f) => [f.name, ""]));
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const validateField = useCallback(
    (field: FormField, value: string) => {
      if (field.required && !value.trim()) return `${field.label} is required.`;
      if (value.trim() && field.validate) return field.validate(value);
      return null;
    },
    []
  );

  const validateAll = useCallback(() => {
    const next: FormErrors = {};
    for (const field of fields) {
      const error = validateField(field, values[field.name] ?? "");
      if (error) next[field.name] = error;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }, [fields, values, validateField]);

  const setValue = (name: string, value: string) => {
    setValues((v) => ({ ...v, [name]: value }));
    if (touched.has(name)) {
      const field = fields.find((f) => f.name === name);
      if (field) {
        const error = validateField(field, value);
        setErrors((e) => ({ ...e, [name]: error ?? undefined }));
      }
    }
  };

  const onBlur = (name: string) => {
    setTouched((t) => {
      const next = new Set(t);
      next.add(name);
      return next;
    });
    const field = fields.find((f) => f.name === name);
    if (field) {
      const error = validateField(field, values[name] ?? "");
      setErrors((e) => ({ ...e, [name]: error ?? undefined }));
    }
  };

  const submit = async (
    e: FormEvent,
    handler: (values: FormValues) => Promise<void> | void
  ) => {
    e.preventDefault();
    const valid = validateAll();
    if (!valid) {
      setTouched(new Set(fields.map((f) => f.name)));
      return false;
    }
    setStatus("submitting");
    try {
      await handler(values);
      return true;
    } catch {
      setStatus("error");
      return false;
    }
  };

  return {
    values,
    errors,
    status,
    setValue,
    onBlur,
    submit,
    reset: () => {
      setValues(initial);
      setErrors({});
      setTouched(new Set());
      setStatus("idle");
    },
  };
}