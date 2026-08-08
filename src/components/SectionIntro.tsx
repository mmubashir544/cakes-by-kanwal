function FlowerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M12 2C13 6 13 8 12 12C11 8 11 6 12 2Z M12 22C11 18 11 16 12 12C13 16 13 18 12 22Z M2 12C6 11 8 11 12 12C8 13 6 13 2 12Z M22 12C18 13 16 13 12 12C16 11 18 11 22 12Z"
        fill="currentColor"
        opacity="0.55"
      />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  );
}

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "ink" | "onDark";
};

export default function SectionIntro({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "ink",
}: SectionIntroProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl"}>
      {eyebrow && (
        <p className="eyebrow mb-3 text-primary">{eyebrow}</p>
      )}
      <h2
        className={`text-4xl sm:text-5xl ${tone === "onDark" ? "text-heading" : ""}`}
      >
        {title}
      </h2>
      <div
        className={`divider-ornament my-5 ${isCenter ? "justify-center" : "justify-start"}`}
      >
        <FlowerIcon />
      </div>
      {subtitle && (
        <p className="text-lg leading-relaxed text-body-ink/80">{subtitle}</p>
      )}
    </div>
  );
}
