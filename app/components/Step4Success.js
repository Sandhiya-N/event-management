"use client";

export default function Step4Success({ referenceId, eventName, category, location, onReset }) {
  return (
    <div className="flex flex-col items-center py-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8" stroke="currentColor" strokeWidth="2">
          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <h2 className="mt-5 text-xl font-semibold text-slate-900">
        Requirement Posted Successfully!
      </h2>

      <div className="mt-5 w-full max-w-md rounded-xl border border-slate-200 bg-slate-50 p-4 text-left text-sm">
        <div className="flex justify-between gap-4 py-2">
          <span className="text-slate-500">Requirement ID</span>
          <span className="font-medium text-slate-900">{referenceId || "—"}</span>
        </div>
        <div className="flex justify-between gap-4 py-2">
          <span className="text-slate-500">Event Name</span>
          <span className="font-medium text-slate-900">{eventName || "—"}</span>
        </div>
        <div className="flex justify-between gap-4 py-2">
          <span className="text-slate-500">Category</span>
          <span className="font-medium text-slate-900">{category || "—"}</span>
        </div>
        <div className="flex justify-between gap-4 py-2">
          <span className="text-slate-500">Location</span>
          <span className="font-medium text-slate-900">{location || "—"}</span>
        </div>
      </div>

      <button type="button" className="btn-primary mt-8" onClick={onReset}>
        Post Another Requirement
      </button>
    </div>
  );
}
