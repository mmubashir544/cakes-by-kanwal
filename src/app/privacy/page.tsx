import type { Metadata } from "next";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | Cakes By Kanwal",
  description: "How Cakes By Kanwal collects, uses, and protects your information.",
};

const SECTIONS = [
  {
    title: "Information We Collect",
    body: (
      <>
        When you submit a custom order inquiry, we collect the information
        you provide directly &mdash; such as your name, email address, phone
        number, event details, and design preferences &mdash; so that we can
        respond to your request and plan your order.
      </>
    ),
  },
  {
    title: "How We Use Your Information",
    body: (
      <>
        We use the information you share with us solely to respond to
        inquiries, schedule consultations, fulfill orders, and communicate
        with you about your event. We do not sell or rent your personal
        information to third parties.
      </>
    ),
  },
  {
    title: "Cookies & Analytics",
    body: (
      <>
        This site may use basic, privacy-respecting analytics to understand
        overall site traffic and improve the browsing experience. This data
        is aggregated and not used to identify individual visitors.
      </>
    ),
  },
  {
    title: "Data Retention",
    body: (
      <>
        We retain inquiry details for as long as reasonably necessary to
        respond to your request and, if you become a client, to fulfill and
        document your order. You may request deletion of your information at
        any time.
      </>
    ),
  },
  {
    title: "Your Rights",
    body: (
      <>
        You may request access to, correction of, or deletion of your
        personal information at any time by contacting us directly through
        our{" "}
        <a href="/custom-order" className="link-underline text-primary">
          inquiry form
        </a>{" "}
        or via email.
      </>
    ),
  },
  {
    title: "Contact",
    body: (
      <>
        If you have any questions about this policy or how your information
        is handled, please reach out through our{" "}
        <a href="/custom-order" className="link-underline text-primary">
          custom order form
        </a>{" "}
        and we will be happy to assist.
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <Reveal>
        <h1 className="text-4xl sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-body-ink/60">Last updated: 2026</p>
      </Reveal>

      <div className="mt-10 space-y-8 text-body-ink/85">
        {SECTIONS.map((section, index) => (
          <Reveal key={section.title} delay={Math.min(index * 0.06, 0.24)} distance={16}>
            <div>
              <h2 className="text-2xl">{section.title}</h2>
              <p className="mt-3 leading-relaxed">{section.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
