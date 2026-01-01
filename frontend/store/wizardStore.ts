import { create } from 'zustand';

export interface WizardState {
    currentStep: number;
    totalSteps: number;
    formData: Record<string, any>;
    nextStep: () => void;
    prevStep: () => void;
    setStep: (step: number) => void;
    updateFormData: (data: Record<string, any>) => void;
}

export const useWizardStore = create<WizardState>((set) => ({
    currentStep: 0,
    totalSteps: 3, // Intro, Business Info, Review
    formData: {},
    nextStep: () => set((state) => ({ currentStep: Math.min(state.currentStep + 1, state.totalSteps - 1) })),
    prevStep: () => set((state) => ({ currentStep: Math.max(state.currentStep - 1, 0) })),
    setStep: (step) => set({ currentStep: step }),
    updateFormData: (data) => set((state) => ({ formData: { ...state.formData, ...data } })),
}));
