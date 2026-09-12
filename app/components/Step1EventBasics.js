"use client";

import { EVENT_TYPES, CATEGORIES } from "./constants";
import CategoryCard from "./CategoryCard";

export default function Step1EventBasics({ formData, updateField, errors, onNext }) {
  const handleChange = (field) => (e) => updateField(field, e.target.value);

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">Event Basics</h2>
      <p className="mt-1 text-sm text-slate-500">
        Tell us about the event you're organizing.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="eventName">
            Event Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="eventName"
            type="text"
            className="field-input"
            placeholder="e.g. Annual Tech Fest 2026"
            value={formData.eventName}
            onChange={handleChange("eventName")}
          />
          {errors.eventName && <p className="field-error">{errors.eventName}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="eventType">
            Event Type <span className="text-rose-500">*</span>
          </label>
          <select
            id="eventType"
            className="field-input"
            value={formData.eventType}
            onChange={handleChange("eventType")}
          >
            <option value="">Select event type</option>
            {EVENT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.eventType && <p className="field-error">{errors.eventType}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="location">
            Location <span className="text-rose-500">*</span>
          </label>
          <input
            id="location"
            type="text"
            className="field-input"
            placeholder="e.g. Chennai, Tamil Nadu"
            value={formData.location}
            onChange={handleChange("location")}
          />
          {errors.location && <p className="field-error">{errors.location}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="startDate">
            Start Date <span className="text-rose-500">*</span>
          </label>
          <input
            id="startDate"
            type="date"
            className="field-input"
            value={formData.startDate}
            onChange={handleChange("startDate")}
          />
          {errors.startDate && <p className="field-error">{errors.startDate}</p>}
        </div>

        <div>
          <label className="field-label" htmlFor="endDate">
            End Date <span className="text-rose-500">*</span>
          </label>
          <input
            id="endDate"
            type="date"
            className="field-input"
            value={formData.endDate}
            onChange={handleChange("endDate")}
          />
          {errors.endDate && <p className="field-error">{errors.endDate}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="field-label" htmlFor="venue">
            Venue <span className="text-slate-400">(optional)</span>
          </label>
          <input
            id="venue"
            type="text"
            className="field-input"
            placeholder="e.g. Main Auditorium"
            value={formData.venue}
            onChange={handleChange("venue")}
          />
        </div>
      </div>

      <div className="mt-8">
        <label className="field-label">
          Requirement Category <span className="text-rose-500">*</span>
        </label>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.value}
              category={category}
              selected={formData.category === category.value}
              onSelect={(value) => updateField("category", value)}
            />
          ))}
        </div>
        {errors.category && <p className="field-error">{errors.category}</p>}
      </div>

      <div className="mt-8 flex justify-end">
        <button type="button" className="btn-primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}
