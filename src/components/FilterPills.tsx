"use client";

type FilterPillsProps = {
  categories: readonly string[];
  active: string;
  onChange: (category: string) => void;
};

export default function FilterPills({ categories, active, onChange }: FilterPillsProps) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {categories.map((category) => {
        const isActive = category === active;
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`rounded-full border px-5 py-2.5 text-sm transition-colors ${
              isActive
                ? "border-blush-deep bg-blush text-primary-dark"
                : "border-border bg-transparent text-body-ink hover:border-primary/40 hover:text-primary"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
