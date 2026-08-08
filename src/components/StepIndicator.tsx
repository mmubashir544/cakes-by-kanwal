const STEPS = ["Event", "Cake", "Design", "Logistics", "Details"];

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start justify-between">
      {STEPS.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === current;
        const isDone = stepNumber < current;
        const isReached = stepNumber <= current;
        return (
          <div key={label} className="relative flex flex-1 flex-col items-center">
            {index > 0 && (
              <div
                className={`absolute left-[-50%] top-[18px] h-px w-full ${
                  isReached ? "bg-primary" : "bg-border"
                }`}
              />
            )}
            <div
              className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                isActive || isDone
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-body-ink/60"
              }`}
            >
              {stepNumber}
            </div>
            <p
              className={`mt-2 max-w-[4.25rem] text-center font-sans text-[10px] uppercase leading-tight tracking-wide sm:max-w-none sm:text-[0.8125rem] sm:tracking-[0.08em] ${
                isActive ? "text-primary" : "text-body-ink/60"
              }`}
            >
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
