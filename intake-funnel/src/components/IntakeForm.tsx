"use client";

import { useState } from "react";

type FormData = {
  fullName: string;
  contact: string;
  symptom: string;
  preferredDate: string;
  preferredTime: string;
};

export default function IntakeForm({ onSubmitSuccess }: { onSubmitSuccess?: (data: FormData) => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    contact: "",
    symptom: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to webhook or backend
    console.log("Submitting secure payload:", JSON.stringify(formData, null, 2));
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    if (onSubmitSuccess) {
      onSubmitSuccess(formData);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center space-y-4 max-w-md mx-auto">
        <div className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-semibold text-foreground">You&apos;re all set!</h3>
        <p className="text-gray-600">
          Thank you, {formData.fullName.split(' ')[0] || 'there'}. We&apos;ve received your request and our friendly staff will be in touch shortly to confirm your appointment.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 max-w-xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-500">Step {step} of 3</span>
          <span className="text-sm font-medium text-primary">
            {step === 1 && "Basic Info"}
            {step === 2 && "Symptoms"}
            {step === 3 && "Scheduling"}
          </span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-300 ease-in-out"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={step === 3 ? submitForm : (e) => { e.preventDefault(); nextStep(); }}>
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label htmlFor="fullName" className="block text-lg font-medium text-gray-800 mb-2">
                What&apos;s your full name?
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => updateField("fullName", e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
              />
            </div>
            <div>
              <label htmlFor="contact" className="block text-lg font-medium text-gray-800 mb-2">
                How can we reach you?
              </label>
              <p className="text-sm text-gray-500 mb-2">A phone number or email works best.</p>
              <input
                id="contact"
                type="text"
                required
                value={formData.contact}
                onChange={(e) => updateField("contact", e.target.value)}
                placeholder="+91 98765 43210 or email@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg"
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label htmlFor="symptom" className="block text-lg font-medium text-gray-800 mb-2">
                What brings you in today?
              </label>
              <p className="text-sm text-gray-500 mb-3">Briefly describe your symptoms or reason for visit so we can prepare for you.</p>
              <textarea
                id="symptom"
                required
                rows={4}
                value={formData.symptom}
                onChange={(e) => updateField("symptom", e.target.value)}
                placeholder="e.g., I've had a persistent cough for a few days..."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg resize-none"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <label htmlFor="preferredDate" className="block text-lg font-medium text-gray-800 mb-2">
                When would you like to visit?
              </label>
              <input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => updateField("preferredDate", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg mb-4"
              />
              <select
                required
                value={formData.preferredTime}
                onChange={(e) => updateField("preferredTime", e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-lg bg-white"
              >
                <option value="" disabled>Select a preferred time</option>
                <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
              </select>
            </div>
          </div>
        )}

        <div className="mt-10 flex gap-4">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition-colors w-1/3"
            >
              Back
            </button>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg ${step > 1 ? 'w-2/3' : 'w-full'} flex justify-center items-center`}
          >
            {isSubmitting ? (
              <span className="animate-pulse">Processing...</span>
            ) : step === 3 ? (
              "Confirm & Book"
            ) : (
              "Continue"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
