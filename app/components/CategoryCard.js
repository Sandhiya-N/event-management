"use client";

const ICONS = {
  planner: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.75">
      <rect x="3.5" y="4.5" width="17" height="16" rx="2" />
      <path d="M3.5 9h17" strokeLinecap="round" />
      <path d="M8 3v3M16 3v3" strokeLinecap="round" />
      <path d="M7.5 13h3M7.5 16.5h6" strokeLinecap="round" />
    </svg>
  ),
  performer: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.75">
      <path d="M9 18V5l10-2v13" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6.5" cy="18" r="2.5" />
      <circle cx="16.5" cy="16" r="2.5" />
    </svg>
  ),
  crew: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.75">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 20c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" strokeLinecap="round" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.2 14.7c2.4.4 4.3 2.5 4.3 5.3" strokeLinecap="round" />
    </svg>
  ),
};

export default function CategoryCard({ category, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={() => onSelect(category.value)}
      aria-pressed={selected}
      className={[
        "flex w-full flex-col items-start gap-3 rounded-xl border p-5 text-left transition",
        selected
          ? "border-brand-600 bg-brand-50 ring-2 ring-brand-500"
          : "border-slate-200 bg-white hover:border-brand-300 hover:bg-slate-50",
      ].join(" ")}
    >
      <span
        className={[
          "flex h-11 w-11 items-center justify-center rounded-lg",
          selected ? "bg-brand-600 text-white" : "bg-slate-100 text-slate-600",
        ].join(" ")}
      >
        {ICONS[category.icon]}
      </span>
      <span className="text-base font-semibold text-slate-900">{category.title}</span>
      <span className="text-sm text-slate-500">{category.description}</span>
    </button>
  );
}
