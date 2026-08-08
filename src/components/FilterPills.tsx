"use client";

import { LayoutGroup, motion } from "motion/react";

type FilterPillsProps = {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
};

export default function FilterPills({ categories, active, onChange }: FilterPillsProps) {
  return (
    <LayoutGroup id={categories.join("-")}>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === active;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onChange(category)}
              className={`relative rounded-full border px-5 py-2.5 text-sm transition-colors ${
                isActive
                  ? "border-blush-deep text-primary-dark"
                  : "border-border bg-transparent text-body-ink hover:border-primary/40 hover:text-primary"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 rounded-full bg-blush"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>
    </LayoutGroup>
  );
}
