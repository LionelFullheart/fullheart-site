"use client";

import { FormEvent, useState } from "react";

type FormState = {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  projectType: string;
  deployment: string;
  deadline: string;
  notes: string;
};

const initialState: FormState = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "",
  deployment: "yes",
  deadline: "",
  notes: "",
};

export function IntakeForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<{
    tone: "idle" | "success" | "error";
    message: string;
  }>({ tone: "idle", message: "" });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus({ tone: "idle", message: "" });

    try {
      const response = await fetch("/api/intake", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message || "Unable to send your request right now.");
      }

      setForm(initialState);
      setStatus({
        tone: "success",
        message:
          payload.message ||
          "Your request is in. We will review it and follow up shortly.",
      });
    } catch (error) {
      setStatus({
        tone: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your request.",
      });
    } finally {
      setSubmitting(false);
    }
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  return (
    <form className="form-shell" onSubmit={handleSubmit}>
      <div className="section-header">
        <span className="eyebrow">Project Intake</span>
        <h2 className="headline-lg">Start your project in a few quick steps.</h2>
        <p className="body-copy">
          Tell us what you need built, whether you need deployment, and when you
          want it delivered. We will review the scope and reply with the next step.
        </p>
      </div>

      <div className="form-grid">
        <div className="field">
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="Your full name"
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="businessName">Business Name</label>
          <input
            id="businessName"
            name="businessName"
            placeholder="Company or brand"
            required
            value={form.businessName}
            onChange={(event) => updateField("businessName", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Best callback number"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
          />
        </div>

        <div className="field field-full">
          <label htmlFor="projectType">What do you need built?</label>
          <textarea
            id="projectType"
            name="projectType"
            placeholder="Website, dashboard, booking page, event site, internal tool, or another build request."
            required
            value={form.projectType}
            onChange={(event) => updateField("projectType", event.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="deployment">Do you need deployment too?</label>
          <select
            id="deployment"
            name="deployment"
            value={form.deployment}
            onChange={(event) => updateField("deployment", event.target.value)}
          >
            <option value="yes">Yes, include deployment</option>
            <option value="no">No, build only</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="deadline">Deadline / target date</label>
          <input
            id="deadline"
            name="deadline"
            type="text"
            placeholder="ASAP, this week, or specific date"
            required
            value={form.deadline}
            onChange={(event) => updateField("deadline", event.target.value)}
          />
        </div>

        <div className="field field-full">
          <label htmlFor="notes">Budget / notes (optional)</label>
          <textarea
            id="notes"
            name="notes"
            placeholder="Anything else we should know before scoping your request?"
            value={form.notes}
            onChange={(event) => updateField("notes", event.target.value)}
          />
        </div>
      </div>

      <div className="submit-row">
        <button className="button" type="submit" disabled={submitting}>
          {submitting ? "Sending request..." : "Get a Quick Quote"}
        </button>
        <div
          className={`status ${status.tone === "success" ? "success" : ""} ${
            status.tone === "error" ? "error" : ""
          }`}
        >
          {status.message}
        </div>
      </div>
    </form>
  );
}
