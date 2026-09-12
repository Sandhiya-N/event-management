"use client";

import { STEPS } from "./constants";

export default function StepIndicator({ currentStep }) {
  return (
    <ol className="mb-10 grid grid-cols-4 gap-2 sm:gap-4">
      {STEPS.map((step) => {
        const isComplete = currentStep > step.id;
        const isActive = currentStep === step.id;

        return (
          <li key={step.id} className="flex flex-col items-center text-center">
            <div
              className={[
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold transition",
                isComplete
                  ? "bg-brand-600 text-white"
                  : isActive
                  ? "bg-brand-100 text-brand-700 ring-2 ring-brand-600"
                  : "bg-slate-100 text-slate-400",
              ].join(" ")}
            >
              {isComplete ? "✓" : step.id}
            </div>
            <span
              className={[
                "mt-2 hidden text-xs font-medium sm:block",
                isActive || isComplete ? "text-slate-800" : "text-slate-400",
              ].join(" ")}
            >
              {step.label}
            </span>
            <div
              className={[
                "mt-3 h-1 w-full rounded-full",
                isComplete || isActive ? "bg-brand-600" : "bg-slate-200",
              ].join(" ")}
            />
          </li>
        );
      })}
    </ol>
  );
}
