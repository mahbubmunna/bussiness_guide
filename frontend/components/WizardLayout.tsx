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
                <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-10">
                    <h1 className="text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
                        Business Setup
                        <span className="text-slate-300 font-light">|</span>
                        <span className="text-blue-600">Assistant</span>
                    </h1>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-100">Step {currentStep + 1} of {totalSteps}</span>
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
                        className={`flex items-center gap-2 px-6 py-3.5 rounded-full font-bold transition-all duration-300 ${currentStep === 0
                            ? 'bg-slate-50 text-slate-300 cursor-not-allowed hidden'
                            : 'bg-white border text-slate-600 border-slate-200 hover:border-slate-800 hover:text-slate-900 hover:bg-slate-50'
                            }`}
                    >
                        <ArrowLeft className="w-4 h-4" strokeWidth={2.5} />
                        <span className="tracking-wide">Back</span>
                    </button>
                    <button
                        onClick={nextStep}
                        disabled={currentStep === totalSteps - 1}
                        className="flex items-center gap-2 pl-8 pr-6 py-3.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 active:scale-[0.98] active:shadow-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                        <span className="tracking-wide">{currentStep === totalSteps - 1 ? 'Finish' : 'Next'}</span>
                        <div className="bg-white/20 p-1.5 rounded-full group-hover:bg-white/30 transition-colors">
                            <ArrowRight className="w-4 h-4" strokeWidth={3} />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};
