"use client";

import { CATEGORIES } from "./constants";

function formatDate(value) {
  if (!value) return "—";
  const date = new Date(value);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function formatKey(key) {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}

function ReviewRow({ label, value }) {
  if (value === undefined || value === null || value === "") return null;
  return (
    <div className="flex justify-between gap-4 py-2 text-sm">
      <span className="text-slate-500">{label}</span>
      <span className="text-right font-medium text-slate-900">{value}</span>
    </div>
  );
}

export default function Step3Review({
  formData,
  onBack,
  onEditStep,
  onSubmit,
  submitting,
  submitError,
}) {
  const categoryLabel =
    CATEGORIES.find((c) => c.value === formData.category)?.title || "—";
  const details = formData.categoryDetails;

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">Review Your Requirement</h2>
      <p className="mt-1 text-sm text-slate-500">
        Double-check everything before posting your requirement.
      </p>

      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-800">EVENT DETAILS</h3>
          <button
            type="button"
            className="text-xs font-semibold text-brand-600 hover:text-brand-700"
            onClick={() => onEditStep(1)}
          >
            Edit
          </button>
        </div>
        <div className="mt-2 divide-y divide-slate-100">
          <ReviewRow label="Event Name" value={formData.eventName} />
          <ReviewRow label="Event Type" value={formData.eventType} />
          <ReviewRow label="Start Date" value={formatDate(formData.startDate)} />
          <ReviewRow label="End Date" value={formatDate(formData.endDate)} />
          <ReviewRow label="Location" value={formData.location} />
          <ReviewRow label="Venue" value={formData.venue} />
          <ReviewRow label="Category" value={categoryLabel} />
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-white p-5">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-800">CATEGORY REQUIREMENTS</h3>
          <button
            type="button"
            className="text-xs font-semibold text-brand-600 hover:text-brand-700"
            onClick={() => onEditStep(2)}
          >
            Edit
          </button>
        </div>
        <div className="mt-2 divide-y divide-slate-100">
          {Object.entries(details).map(([key, value]) => {
            if (!value || (Array.isArray(value) && value.length === 0)) return null;
            const display = Array.isArray(value) ? value.join(", ") : value;
            return <ReviewRow key={key} label={formatKey(key)} value={display} />;
          })}
        </div>
      </div>

      {submitError && (
        <p className="mt-4 rounded-lg bg-rose-50 px-4 py-3 text-sm font-medium text-rose-600">
          {submitError}
        </p>
      )}

      <div className="mt-8 flex justify-between">
        <button type="button" className="btn-secondary" onClick={onBack} disabled={submitting}>
          Back
        </button>
        <button type="button" className="btn-primary" onClick={onSubmit} disabled={submitting}>
          {submitting ? "Posting..." : "Submit Requirement"}
        </button>
      </div>
    </div>
  );
}
