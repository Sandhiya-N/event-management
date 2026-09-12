"use client";

import {
  PLANNER_SERVICES,
  PLANNER_BUDGET_RANGES,
  PLANNER_PLANNING_REQUIREMENTS,
  PERFORMER_TYPES,
  PREFERRED_LANGUAGES,
  PERFORMANCE_DURATION_OPTIONS,
  PERFORMER_BUDGET_RANGES,
  PERFORMANCE_GENRES,
  EQUIPMENT_REQUIRED,
  CREW_TYPES,
  CREW_EXPERIENCE_LEVELS,
  CREW_RESPONSIBILITIES,
  CREW_BUDGET_RANGES,
} from "./constants";
import CheckboxGroup from "./CheckboxGroup";

export default function Step2CategoryRequirements({
  formData,
  updateCategoryDetail,
  toggleCategoryListItem,
  errors,
  onBack,
  onNext,
}) {
  const { category, categoryDetails } = formData;

  const handleDetailChange = (field) => (e) =>
    updateCategoryDetail(field, e.target.value);

  return (
    <div>
      <h2 className="text-lg font-semibold text-slate-900">
        {category === "planner" && "Event Planner Requirements"}
        {category === "performer" && "Performer Requirements"}
        {category === "crew" && "Crew Requirements"}
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Share a few more details so the right people can respond.
      </p>

      <div className="mt-6 space-y-6">
        {category === "planner" && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="expectedGuestCount">
                  Expected Guest Count
                </label>
                <input
                  id="expectedGuestCount"
                  type="number"
                  min="0"
                  className="field-input"
                  placeholder="e.g. 500"
                  value={categoryDetails.expectedGuestCount || ""}
                  onChange={handleDetailChange("expectedGuestCount")}
                />
                {errors.expectedGuestCount && (
                  <p className="field-error">{errors.expectedGuestCount}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="budgetRange">
                  Budget Range
                </label>
                <select
                  id="budgetRange"
                  className="field-input"
                  value={categoryDetails.budgetRange || ""}
                  onChange={handleDetailChange("budgetRange")}
                >
                  <option value="">Select budget range</option>
                  {PLANNER_BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budgetRange && <p className="field-error">{errors.budgetRange}</p>}
              </div>
            </div>

            <div>
              <label className="field-label">Services Required</label>
              <CheckboxGroup
                options={PLANNER_SERVICES}
                selected={categoryDetails.servicesRequired || []}
                onToggle={(value) => toggleCategoryListItem("servicesRequired", value)}
              />
              {errors.servicesRequired && (
                <p className="field-error">{errors.servicesRequired}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="planningRequirement">
                  Planning Requirement
                </label>
                <select
                  id="planningRequirement"
                  className="field-input"
                  value={categoryDetails.planningRequirement || ""}
                  onChange={handleDetailChange("planningRequirement")}
                >
                  <option value="">Select planning requirement</option>
                  {PLANNER_PLANNING_REQUIREMENTS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {errors.planningRequirement && (
                  <p className="field-error">{errors.planningRequirement}</p>
                )}
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="additionalRequirements">
                Additional Requirements <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="additionalRequirements"
                rows={4}
                className="field-input"
                placeholder="Tell us any extra preferred arrangements or notes"
                value={categoryDetails.additionalRequirements || ""}
                onChange={handleDetailChange("additionalRequirements")}
              />
            </div>
          </>
        )}

        {category === "performer" && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="performerType">
                  Performer Type <span className="text-rose-500">*</span>
                </label>
                <select
                  id="performerType"
                  className="field-input"
                  value={categoryDetails.performerType || ""}
                  onChange={handleDetailChange("performerType")}
                >
                  <option value="">Select performer type</option>
                  {PERFORMER_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.performerType && (
                  <p className="field-error">{errors.performerType}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="language">
                  Preferred Language
                </label>
                <select
                  id="language"
                  className="field-input"
                  value={categoryDetails.language || ""}
                  onChange={handleDetailChange("language")}
                >
                  <option value="">Select language</option>
                  {PREFERRED_LANGUAGES.map((language) => (
                    <option key={language} value={language}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label" htmlFor="numberOfPerformers">
                  Number of Performers
                </label>
                <input
                  id="numberOfPerformers"
                  type="number"
                  min="1"
                  className="field-input"
                  placeholder="e.g. 5"
                  value={categoryDetails.numberOfPerformers || ""}
                  onChange={handleDetailChange("numberOfPerformers")}
                />
                {errors.numberOfPerformers && (
                  <p className="field-error">{errors.numberOfPerformers}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="duration">
                  Performance Duration
                </label>
                <select
                  id="duration"
                  className="field-input"
                  value={categoryDetails.duration || ""}
                  onChange={handleDetailChange("duration")}
                >
                  <option value="">Select duration</option>
                  {PERFORMANCE_DURATION_OPTIONS.map((duration) => (
                    <option key={duration} value={duration}>
                      {duration}
                    </option>
                  ))}
                </select>
                {errors.duration && <p className="field-error">{errors.duration}</p>}
              </div>

              <div>
                <label className="field-label" htmlFor="budget">
                  Budget Range
                </label>
                <select
                  id="budget"
                  className="field-input"
                  value={categoryDetails.budget || ""}
                  onChange={handleDetailChange("budget")}
                >
                  <option value="">Select budget range</option>
                  {PERFORMER_BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && <p className="field-error">{errors.budget}</p>}
              </div>

              <div>
                <label className="field-label" htmlFor="genres">
                  Performance Genre
                </label>
                <CheckboxGroup
                  options={PERFORMANCE_GENRES}
                  selected={categoryDetails.genres || []}
                  onToggle={(value) => toggleCategoryListItem("genres", value)}
                />
                {errors.genres && <p className="field-error">{errors.genres}</p>}
              </div>
            </div>

            <div>
              <label className="field-label">Equipment Required</label>
              <CheckboxGroup
                options={EQUIPMENT_REQUIRED}
                selected={categoryDetails.equipment || []}
                onToggle={(value) => toggleCategoryListItem("equipment", value)}
              />
              {errors.equipment && <p className="field-error">{errors.equipment}</p>}
            </div>

            <div>
              <label className="field-label" htmlFor="additionalRequirements">
                Additional Requirements <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="additionalRequirements"
                rows={4}
                className="field-input"
                placeholder="Any songs, style, costume, or setup notes?"
                value={categoryDetails.additionalRequirements || ""}
                onChange={handleDetailChange("additionalRequirements")}
              />
            </div>
          </>
        )}

        {category === "crew" && (
          <>
            <div>
              <label className="field-label">Crew Type</label>
              <CheckboxGroup
                options={CREW_TYPES}
                selected={categoryDetails.crewType || []}
                onToggle={(value) => toggleCategoryListItem("crewType", value)}
              />
              {errors.crewType && <p className="field-error">{errors.crewType}</p>}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="numberOfCrewMembers">
                  Number of Crew Members
                </label>
                <input
                  id="numberOfCrewMembers"
                  type="number"
                  min="1"
                  className="field-input"
                  placeholder="e.g. 8"
                  value={categoryDetails.numberOfCrewMembers || ""}
                  onChange={handleDetailChange("numberOfCrewMembers")}
                />
                {errors.numberOfCrewMembers && (
                  <p className="field-error">{errors.numberOfCrewMembers}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="experienceLevel">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  className="field-input"
                  value={categoryDetails.experienceLevel || ""}
                  onChange={handleDetailChange("experienceLevel")}
                >
                  <option value="">Select experience level</option>
                  {CREW_EXPERIENCE_LEVELS.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                {errors.experienceLevel && (
                  <p className="field-error">{errors.experienceLevel}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="workingStartTime">
                  Working Start Time
                </label>
                <input
                  id="workingStartTime"
                  type="time"
                  className="field-input"
                  value={categoryDetails.workingStartTime || ""}
                  onChange={handleDetailChange("workingStartTime")}
                />
                {errors.workingStartTime && (
                  <p className="field-error">{errors.workingStartTime}</p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="workingEndTime">
                  Working End Time
                </label>
                <input
                  id="workingEndTime"
                  type="time"
                  className="field-input"
                  value={categoryDetails.workingEndTime || ""}
                  onChange={handleDetailChange("workingEndTime")}
                />
                {errors.workingEndTime && (
                  <p className="field-error">{errors.workingEndTime}</p>
                )}
              </div>
            </div>

            <div>
              <label className="field-label">Responsibilities</label>
              <CheckboxGroup
                options={CREW_RESPONSIBILITIES}
                selected={categoryDetails.responsibilities || []}
                onToggle={(value) => toggleCategoryListItem("responsibilities", value)}
              />
              {errors.responsibilities && (
                <p className="field-error">{errors.responsibilities}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="budgetPerPerson">
                  Budget Per Person
                </label>
                <select
                  id="budgetPerPerson"
                  className="field-input"
                  value={categoryDetails.budgetPerPerson || ""}
                  onChange={handleDetailChange("budgetPerPerson")}
                >
                  <option value="">Select budget per person</option>
                  {CREW_BUDGET_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budgetPerPerson && (
                  <p className="field-error">{errors.budgetPerPerson}</p>
                )}
              </div>
            </div>

            <div>
              <label className="field-label" htmlFor="additionalRequirements">
                Additional Requirements <span className="text-slate-400">(optional)</span>
              </label>
              <textarea
                id="additionalRequirements"
                rows={4}
                className="field-input"
                placeholder="Any specific shift timing, uniform, or skills needed?"
                value={categoryDetails.additionalRequirements || ""}
                onChange={handleDetailChange("additionalRequirements")}
              />
            </div>
          </>
        )}
      </div>

      <div className="mt-8 flex justify-between">
        <button type="button" className="btn-secondary" onClick={onBack}>
          Back
        </button>
        <button type="button" className="btn-primary" onClick={onNext}>
          Continue
        </button>
      </div>
    </div>
  );
}
