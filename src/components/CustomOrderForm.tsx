"use client";

import { useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import StepIndicator from "@/components/StepIndicator";

type FormData = {
  occasion: string;
  eventDate: string;
  guestCount: string;
  orderType: string;
  servings: string;
  flavorPreferences: string;
  dietary: string;
  designStyle: string;
  colorPalette: string;
  inspirationNotes: string;
  deliveryMethod: string;
  deliveryAddress: string;
  budget: string;
  fullName: string;
  email: string;
  phone: string;
  additionalNotes: string;
};

const INITIAL_DATA: FormData = {
  occasion: "",
  eventDate: "",
  guestCount: "",
  orderType: "",
  servings: "",
  flavorPreferences: "",
  dietary: "",
  designStyle: "",
  colorPalette: "",
  inspirationNotes: "",
  deliveryMethod: "",
  deliveryAddress: "",
  budget: "",
  fullName: "",
  email: "",
  phone: "",
  additionalNotes: "",
};

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-heading">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

const inputClass =
  "w-full border-0 border-b border-border bg-transparent py-2 text-body-ink focus:border-primary focus:outline-none";

export default function CustomOrderForm() {
  const searchParams = useSearchParams();
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>(() => {
    const design = searchParams.get("design");
    const type = searchParams.get("type");
    const initial = { ...INITIAL_DATA };
    if (design) {
      initial.inspirationNotes = `I'm interested in the "${design}" design.`;
    }
    if (type === "macarons") initial.orderType = "Macarons";
    if (type === "cupcakes") initial.orderType = "Cupcakes";
    return initial;
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validateStep(currentStep: number): string | null {
    if (currentStep === 1) {
      if (!data.occasion || !data.eventDate) {
        return "Please share the occasion and date so we can check availability.";
      }
    }
    if (currentStep === 2) {
      if (!data.orderType || !data.servings) {
        return "Let us know what you'd like and roughly how many servings.";
      }
    }
    if (currentStep === 3) {
      if (!data.designStyle) {
        return "Pick a design direction so we can start dreaming it up.";
      }
    }
    if (currentStep === 4) {
      if (!data.deliveryMethod || !data.budget) {
        return "Delivery method and budget help us plan accurately.";
      }
    }
    if (currentStep === 5) {
      if (!data.fullName || !data.email) {
        return "We'll need your name and email to follow up.";
      }
    }
    return null;
  }

  function goNext() {
    const validationError = validateStep(step);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setStep((s) => Math.min(s + 1, 5));
  }

  function goBack() {
    setError(null);
    setStep((s) => Math.max(s - 1, 1));
  }

  function handleSubmit() {
    const validationError = validateStep(5);
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(null);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-border bg-white px-8 py-16 text-center">
        <p className="text-primary">&#10084;</p>
        <h2 className="mt-3 text-3xl sm:text-4xl">Thank you, {data.fullName.split(" ")[0]}.</h2>
        <p className="mx-auto mt-4 max-w-md text-body-ink/80">
          Your inquiry has been received. We personally review every request
          and will follow up within 2 business days to schedule your
          consultation.
        </p>
        <Link
          href="/"
          className="btn mt-8 inline-block rounded-sm bg-primary px-7 py-3.5 text-white transition-colors hover:bg-primary-dark"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div>
      <StepIndicator current={step} />

      <div className="mt-10 border border-border bg-white p-6 sm:p-10">
        {step === 1 && (
          <div>
            <h3 className="text-2xl sm:text-3xl">1. Event Details</h3>
            <div className="mt-6 border-t border-border pt-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Occasion">
                <select
                  className={inputClass}
                  value={data.occasion}
                  onChange={(e) => update("occasion", e.target.value)}
                >
                  <option value="">Select an occasion&hellip;</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Corporate Event</option>
                  <option>Baby or Bridal Shower</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Event Date">
                <input
                  type="date"
                  className={inputClass}
                  value={data.eventDate}
                  onChange={(e) => update("eventDate", e.target.value)}
                />
              </Field>
              <Field label="Estimated Guest Count">
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 150"
                  className={inputClass}
                  value={data.guestCount}
                  onChange={(e) => update("guestCount", e.target.value)}
                />
              </Field>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-2xl sm:text-3xl">2. Your Cake</h3>
            <div className="mt-6 border-t border-border pt-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="What are you ordering?">
                <select
                  className={inputClass}
                  value={data.orderType}
                  onChange={(e) => update("orderType", e.target.value)}
                >
                  <option value="">Select an option&hellip;</option>
                  <option>Custom Cake</option>
                  <option>Cupcakes</option>
                  <option>Macarons</option>
                  <option>A Combination</option>
                </select>
              </Field>
              <Field label="Estimated Servings">
                <input
                  type="number"
                  min="1"
                  placeholder="e.g., 60"
                  className={inputClass}
                  value={data.servings}
                  onChange={(e) => update("servings", e.target.value)}
                />
              </Field>
              <Field label="Flavor Preferences">
                <input
                  type="text"
                  placeholder="e.g., vanilla bean, chocolate espresso"
                  className={inputClass}
                  value={data.flavorPreferences}
                  onChange={(e) => update("flavorPreferences", e.target.value)}
                />
              </Field>
              <Field label="Dietary Considerations">
                <input
                  type="text"
                  placeholder="e.g., nut-free, gluten-free"
                  className={inputClass}
                  value={data.dietary}
                  onChange={(e) => update("dietary", e.target.value)}
                />
              </Field>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h3 className="text-2xl sm:text-3xl">3. Design &amp; Inspiration</h3>
            <div className="mt-6 border-t border-border pt-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Design Style">
                <select
                  className={inputClass}
                  value={data.designStyle}
                  onChange={(e) => update("designStyle", e.target.value)}
                >
                  <option value="">Select a direction&hellip;</option>
                  <option>Romantic &amp; Floral</option>
                  <option>Modern &amp; Minimal</option>
                  <option>Luxury &amp; Ornate</option>
                  <option>Whimsical</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              <Field label="Color Palette">
                <input
                  type="text"
                  placeholder="e.g., blush pink and gold"
                  className={inputClass}
                  value={data.colorPalette}
                  onChange={(e) => update("colorPalette", e.target.value)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Inspiration Notes">
                  <textarea
                    rows={4}
                    placeholder="Tell us about your vision, any reference designs, or a Pinterest board link."
                    className={inputClass}
                    value={data.inspirationNotes}
                    onChange={(e) => update("inspirationNotes", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div>
            <h3 className="text-2xl sm:text-3xl">4. Logistics</h3>
            <div className="mt-6 border-t border-border pt-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Delivery Method">
                <select
                  className={inputClass}
                  value={data.deliveryMethod}
                  onChange={(e) => update("deliveryMethod", e.target.value)}
                >
                  <option value="">Select an option&hellip;</option>
                  <option>Studio Pickup</option>
                  <option>Delivery &amp; Setup</option>
                </select>
              </Field>
              <Field label="Estimated Budget">
                <select
                  className={inputClass}
                  value={data.budget}
                  onChange={(e) => update("budget", e.target.value)}
                >
                  <option value="">Select a range&hellip;</option>
                  <option>Under $300</option>
                  <option>$300 &ndash; $600</option>
                  <option>$600 &ndash; $1,200</option>
                  <option>$1,200+</option>
                  <option>Not sure yet</option>
                </select>
              </Field>
              {data.deliveryMethod === "Delivery & Setup" && (
                <div className="sm:col-span-2">
                  <Field label="Delivery Address">
                    <input
                      type="text"
                      placeholder="Venue name and address"
                      className={inputClass}
                      value={data.deliveryAddress}
                      onChange={(e) => update("deliveryAddress", e.target.value)}
                    />
                  </Field>
                </div>
              )}
            </div>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-2xl sm:text-3xl">5. Your Details</h3>
            <div className="mt-6 border-t border-border pt-6" />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name">
                <input
                  type="text"
                  placeholder="Your name"
                  className={inputClass}
                  value={data.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className={inputClass}
                  value={data.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </Field>
              <Field label="Phone">
                <input
                  type="tel"
                  placeholder="(optional)"
                  className={inputClass}
                  value={data.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Anything else we should know?">
                  <textarea
                    rows={3}
                    placeholder="Optional"
                    className={inputClass}
                    value={data.additionalNotes}
                    onChange={(e) => update("additionalNotes", e.target.value)}
                  />
                </Field>
              </div>
            </div>
          </div>
        )}

        {error && <p className="mt-6 text-sm text-primary-dark">{error}</p>}

        <div className="mt-9 flex items-center justify-between border-t border-border pt-6">
          {step > 1 ? (
            <button
              type="button"
              onClick={goBack}
              className="btn rounded-sm border border-heading/30 px-6 py-3 text-heading transition-colors hover:bg-cream-deep"
            >
              Back
            </button>
          ) : (
            <span />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={goNext}
              className="btn rounded-sm bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              Next Step
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="btn rounded-sm bg-primary px-6 py-3 text-white transition-colors hover:bg-primary-dark"
            >
              Submit Inquiry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
