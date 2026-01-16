'use client';

import React from 'react';
import { useWizardStore } from '@/store/wizardStore';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface WizardLayoutProps {
    children: React.ReactNode;
}

export const WizardLayout: React.FC<WizardLayoutProps> = ({ children }) => {
    const { currentStep, totalSteps, nextStep, prevStep } = useWizardStore();
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 font-sans">
            <div className="w-full max-w-3xl bg-white shadow-2xl shadow-slate-200/50 rounded-3xl overflow-hidden border border-slate-100">
                {/* Header / Progress */}
                <div className="bg-slate-100 h-2 w-full relative">
                    <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 ease-out shadow-[0_0_10px_rgba(59,130,246,0.5)] relative overflow-hidden"
                        style={{ width: `${progress}%` }}
                    >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                    </div>
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
                <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-between">
                    <button
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold transition-all duration-200 ${currentStep === 0
                            ? 'bg-slate-100 text-slate-300 cursor-not-allowed'
                            : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 hover:text-slate-900 shadow-sm hover:shadow'
                            }`}
                    >
                        <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                        Back
                    </button>
                    <button
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1}
                        className="flex items-center gap-2 px-8 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all duration-200 shadow-lg shadow-blue-500/30 active:scale-[0.98]"
                    >
                        {currentStep === totalSteps - 1 ? 'Finish' : 'Next'}
                        <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                    </button>
                </div>
            </div>
        </div>
    );
};
