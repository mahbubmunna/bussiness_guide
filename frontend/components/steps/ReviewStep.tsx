import React from 'react';
import { useWizardStore } from '@/store/wizardStore';
import { CheckCircle2, Building, Briefcase } from 'lucide-react';

const ReviewStep: React.FC = () => {
    const { formData } = useWizardStore();

    return (
        <div className="space-y-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                Review Your Information
            </h2>
            <p className="text-slate-600">Please check that the details below are correct.</p>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-50 rounded-full"><Building className="w-5 h-5 text-blue-600" /></div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Business Identity</p>
                            <p className="font-semibold text-slate-900 text-lg">{formData.businessName || 'Not provided'}</p>
                            <p className="text-slate-500 capitalize text-sm mt-1">{formData.structure?.replace('-', ' ') || 'No structure selected'}</p>
                        </div>
                    </div>

                    <div className="w-full h-px bg-slate-100" />

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-indigo-50 rounded-full"><Briefcase className="w-5 h-5 text-indigo-600" /></div>
                        <div>
                            <p className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Sector</p>
                            <p className="font-medium text-slate-900">{formData.industry || 'Not provided'}</p>
                        </div>
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
