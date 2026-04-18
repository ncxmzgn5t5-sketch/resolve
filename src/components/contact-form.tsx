"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
};

const initialValues: FormValues = {
  name: "",
  email: "",
  company: "",
  serviceInterest: "",
  message: "",
};

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>(
    {},
  );
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function validate(formValues: FormValues) {
    const nextErrors: Partial<Record<keyof FormValues, string>> = {};

    if (!formValues.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formValues.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formValues.message.trim()) {
      nextErrors.message = "Please share a short summary of your enquiry.";
    }

    return nextErrors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "Unable to send your message.");
      }

      setValues(initialValues);
      setErrors({});
      setStatus({
        type: "success",
        message:
          "Thank you. Your enquiry has been received and stored for follow-up.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-stone-800">
          Name *
          <input
            className="field"
            type="text"
            name="name"
            value={values.name}
            onChange={(event) =>
              setValues((current) => ({ ...current, name: event.target.value }))
            }
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name ? (
            <span id="name-error" className="text-sm font-normal text-red-700">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-800">
          Email *
          <input
            className="field"
            type="email"
            name="email"
            value={values.email}
            onChange={(event) =>
              setValues((current) => ({ ...current, email: event.target.value }))
            }
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email ? (
            <span id="email-error" className="text-sm font-normal text-red-700">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-stone-800">
          Company
          <input
            className="field"
            type="text"
            name="company"
            value={values.company}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                company: event.target.value,
              }))
            }
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-stone-800">
          Service of Interest
          <select
            className="field"
            name="serviceInterest"
            value={values.serviceInterest}
            onChange={(event) =>
              setValues((current) => ({
                ...current,
                serviceInterest: event.target.value,
              }))
            }
          >
            <option value="">Select a service</option>
            <option value="Strategy & Transformation">
              Strategy & Transformation
            </option>
            <option value="Capability Development & Corporate Training">
              Capability Development & Corporate Training
            </option>
            <option value="Productisation & Commercial Growth">
              Productisation & Commercial Growth
            </option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </label>
      </div>

      <label className="grid gap-2 text-sm font-semibold text-stone-800">
        How can we help? *
        <textarea
          className="field min-h-40 resize-y"
          name="message"
          value={values.message}
          onChange={(event) =>
            setValues((current) => ({ ...current, message: event.target.value }))
          }
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message ? (
          <span id="message-error" className="text-sm font-normal text-red-700">
            {errors.message}
          </span>
        ) : null}
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" className="btn-primary cursor-pointer" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Enquiry"}
        </button>
        <p
          className={`text-sm ${
            status.type === "error"
              ? "text-red-700"
              : status.type === "success"
                ? "text-emerald-700"
                : "text-stone-600"
          }`}
        >
          {status.message ||
            "Required fields are validated before the form can be submitted."}
        </p>
      </div>
    </form>
  );
}
