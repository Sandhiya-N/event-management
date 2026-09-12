"use client";

import { useState } from "react";
import StepIndicator from "../components/StepIndicator";
import Step1EventBasics from "../components/Step1EventBasics";
import Step2CategoryRequirements from "../components/Step2CategoryRequirements";
import Step3Review from "../components/Step3Review";
import Step4Success from "../components/Step4Success";
import { createRequirement } from "../../lib/api";

const initialFormData = {
  eventName: "",
  eventType: "",
  startDate: "",
  endDate: "",
  location: "",
  venue: "",
  category: "",
  categoryDetails: {},
};

export default function PostRequirementPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const updateCategoryDetail = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      categoryDetails: { ...prev.categoryDetails, [field]: value },
    }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleCategoryListItem = (field, value) => {
    setFormData((prev) => {
      const current = prev.categoryDetails[field] || [];
      const next = current.includes(value)
        ? current.filter((item) => item !== value)
        : [...current, value];
      return {
        ...prev,
        categoryDetails: { ...prev.categoryDetails, [field]: next },
      };
    });
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validateStep1 = () => {
    const newErrors = {};
    if (!formData.eventName.trim()) newErrors.eventName = "Event name is required";
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.startDate) newErrors.startDate = "Start date is required";
    if (!formData.endDate) newErrors.endDate = "End date is required";
    if (
      formData.startDate &&
      formData.endDate &&
      formData.endDate < formData.startDate
    ) {
      newErrors.endDate = "End date must not be before start date";
    }
    if (!formData.location.trim()) newErrors.location = "Location is required";
    if (!formData.category) newErrors.category = "Please select a requirement category";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};
    const { category, categoryDetails } = formData;

    if (category === "planner") {
      if (!categoryDetails.expectedGuestCount && categoryDetails.expectedGuestCount !== 0) {
        newErrors.expectedGuestCount = "Please enter expected guest count";
      }
      if (!categoryDetails.budgetRange) {
        newErrors.budgetRange = "Please select a budget range";
      }
      if (!categoryDetails.servicesRequired || categoryDetails.servicesRequired.length === 0) {
        newErrors.servicesRequired = "Select at least one service";
      }
      if (!categoryDetails.planningRequirement) {
        newErrors.planningRequirement = "Please select a planning requirement";
      }
    }

    if (category === "performer") {
      if (!categoryDetails.performerType) {
        newErrors.performerType = "Please select a performer type";
      }
      if (!categoryDetails.language) {
        newErrors.language = "Please select a language";
      }
      if (!categoryDetails.numberOfPerformers || Number(categoryDetails.numberOfPerformers) <= 0) {
        newErrors.numberOfPerformers = "Please enter number of performers";
      }
      if (!categoryDetails.duration) {
        newErrors.duration = "Please select a performance duration";
      }
      if (!categoryDetails.budget) {
        newErrors.budget = "Please select a budget range";
      }
      if (!categoryDetails.genres || categoryDetails.genres.length === 0) {
        newErrors.genres = "Select at least one genre";
      }
      if (!categoryDetails.equipment || categoryDetails.equipment.length === 0) {
        newErrors.equipment = "Select at least one equipment item";
      }
    }

    if (category === "crew") {
      if (!categoryDetails.crewType || categoryDetails.crewType.length === 0) {
        newErrors.crewType = "Select at least one crew type";
      }
      if (!categoryDetails.numberOfCrewMembers || Number(categoryDetails.numberOfCrewMembers) <= 0) {
        newErrors.numberOfCrewMembers = "Please enter number of crew members";
      }
      if (!categoryDetails.experienceLevel) {
        newErrors.experienceLevel = "Please select experience level";
      }
      if (!categoryDetails.workingStartTime) {
        newErrors.workingStartTime = "Please select start time";
      }
      if (!categoryDetails.workingEndTime) {
        newErrors.workingEndTime = "Please select end time";
      }
      if (!categoryDetails.responsibilities || categoryDetails.responsibilities.length === 0) {
        newErrors.responsibilities = "Select at least one responsibility";
      }
      if (!categoryDetails.budgetPerPerson) {
        newErrors.budgetPerPerson = "Please select budget per person";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const goNext = () => {
    if (step === 1 && !validateStep1()) return;
    if (step === 2 && !validateStep2()) return;
    setStep((prev) => Math.min(prev + 1, 4));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEditStep = (targetStep) => setStep(targetStep);

  const handleSubmit = async () => {
    setSubmitting(true);
    setSubmitError("");
    try {
      const response = await createRequirement(formData);
      setReferenceId(response.data?._id || "");
      setStep(4);
      if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitError(
        error.message ||
          "Something went wrong while posting your requirement. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors({});
    setSubmitError("");
    setReferenceId("");
    setStep(1);
  };

  return (
    <main className="min-h-screen px-4 py-10 sm:py-16">
      <div className="mx-auto w-full max-w-2xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Event Management
          </h1>
        </div>

        <div className="mt-10">
          <StepIndicator currentStep={step} />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {step === 1 && (
            <Step1EventBasics
              formData={formData}
              updateField={updateField}
              errors={errors}
              onNext={goNext}
            />
          )}

          {step === 2 && (
            <Step2CategoryRequirements
              formData={formData}
              updateCategoryDetail={updateCategoryDetail}
              toggleCategoryListItem={toggleCategoryListItem}
              errors={errors}
              onBack={goBack}
              onNext={goNext}
            />
          )}

          {step === 3 && (
            <Step3Review
              formData={formData}
              onBack={goBack}
              onEditStep={handleEditStep}
              onSubmit={handleSubmit}
              submitting={submitting}
              submitError={submitError}
            />
          )}

          {step === 4 && (
            <Step4Success
              referenceId={referenceId}
              eventName={formData.eventName}
              category={formData.category}
              location={formData.location}
              onReset={handleReset}
            />
          )}
        </div>
      </div>
    </main>
  );
}
