'use client';

import React from 'react';
import { useWizardStore } from '@/store/wizardStore';

interface WizardLayoutProps {
    children: React.ReactNode;
}

export const WizardLayout: React.FC<WizardLayoutProps> = ({ children }) => {
    const { currentStep, totalSteps, nextStep, prevStep } = useWizardStore();
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-10 font-sans">
            <div className="w-full max-w-2xl bg-white shadow-xl shadow-slate-200/60 rounded-2xl overflow-hidden border border-slate-100">
                {/* Header / Progress */}
                <div className="bg-slate-100 h-2 w-full">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white/50 backdrop-blur-sm">
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight">Business Setup Assistant</h1>
                    <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">Step {currentStep + 1} / {totalSteps}</span>
                </div>

                {/* Content */}
                <div className="p-8 min-h-[400px]">
                    {children}
                </div>

                {/* Footer / Navigation */}
                <div className="p-6 bg-gray-50 border-t flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-4 py-2 rounded-md font-medium transition-colors ${currentStep === 0
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                            : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        Back
                    </button>
                    <button
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1} // Review step might be final for now
                        className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
                    >
                        {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
                    </button>
                </div>
            </div>
        </div>
    );
};
