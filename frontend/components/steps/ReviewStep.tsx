import React from 'react';
import { useWizardStore } from '@/store/wizardStore';

const ReviewStep: React.FC = () => {
    const { formData } = useWizardStore();

    return (
        <div className="space-y-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-slate-800">Review Your Information</h2>
            <p className="text-slate-600">Please check that the details below are correct.</p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-inner space-y-4">
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">Business Name</p>
                        <p className="font-medium text-slate-900 text-lg">{formData.businessName || 'Not provided'}</p>
                    </div>
                    <div>
                        <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">Structure</p>
                        <p className="font-medium text-slate-900 capitalize text-lg">{formData.structure?.replace('-', ' ') || 'Not selected'}</p>
                    </div>
                    <div className="col-span-2 pt-4 border-t border-slate-200">
                        <p className="text-xs uppercase tracking-wide text-slate-500 font-semibold mb-1">Industry</p>
                        <p className="font-medium text-slate-900">{formData.industry || 'Not provided'}</p>
                    </div>
                </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-md border border-yellow-100">
                <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> In the next version, clicking "Finish" will generate your custom checklist based on these answers.
                </p>
            </div>
        </div>
    );
};

export default ReviewStep;
