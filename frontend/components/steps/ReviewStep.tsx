import React from 'react';
import { useWizardStore } from '@/store/wizardStore';

const ReviewStep: React.FC = () => {
    const { formData } = useWizardStore();

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Review Your Information</h2>
            <p className="text-gray-600">Please check that the details below are correct.</p>

            <div className="bg-gray-50 p-6 rounded-lg border space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Business Name</p>
                        <p className="font-medium text-gray-900">{formData.businessName || 'Not provided'}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Structure</p>
                        <p className="font-medium text-gray-900 capitalize">{formData.structure?.replace('-', ' ') || 'Not selected'}</p>
                    </div>
                    <div className="col-span-2">
                        <p className="text-sm text-gray-500">Industry</p>
                        <p className="font-medium text-gray-900">{formData.industry || 'Not provided'}</p>
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
