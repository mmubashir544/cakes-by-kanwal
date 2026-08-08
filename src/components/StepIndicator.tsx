"use client";

import { motion } from "motion/react";

const STEPS = ["Event", "Cake", "Design", "Logistics", "Details"];
const EASE = [0.22, 1, 0.36, 1] as const;

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
              <div className="absolute left-[-50%] top-[18px] h-px w-full bg-border">
                <motion.div
                  className="h-full origin-left bg-primary"
                  initial={false}
                  animate={{ scaleX: isReached ? 1 : 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                />
              </div>
            )}
            <motion.div
              className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-medium"
              initial={false}
              animate={{
                backgroundColor: isActive || isDone ? "#a23a51" : "#ffffff",
                borderColor: isActive || isDone ? "#a23a51" : "#e6dfd3",
                color: isActive || isDone ? "#ffffff" : "#4a4041",
                scale: isActive ? 1.12 : 1,
              }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              {stepNumber}
            </motion.div>
            <p
              className={`mt-2 max-w-[4.25rem] text-center font-sans text-[10px] uppercase leading-tight tracking-wide transition-colors duration-300 sm:max-w-none sm:text-[0.8125rem] sm:tracking-[0.08em] ${
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
