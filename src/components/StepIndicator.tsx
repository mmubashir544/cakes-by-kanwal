const STEPS = ["Event", "Cake", "Design", "Logistics", "Details"];

export default function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-start justify-between">
      {STEPS.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === current;
        const isDone = stepNumber < current;
        return (
          <div key={label} className="flex flex-1 flex-col items-center">
            <div className="flex w-full items-center">
              <div
                className={`mx-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium transition-colors ${
                  isActive || isDone
                    ? "bg-primary text-white"
                    : "border border-border bg-white text-body-ink/60"
                }`}
              >
                {stepNumber}
              </div>
            </div>
            <p
              className={`nav-link mt-2 text-center ${
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
