import React from 'react';
import { useWizardStore } from '@/store/wizardStore';

const BusinessInfoStep: React.FC = () => {
    const { formData, updateFormData } = useWizardStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800">Basic Business Information</h2>

            <div className="space-y-4">
                <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        placeholder="My Awesome Company"
                    />
                </div>

                <div>
                    <label htmlFor="structure" className="block text-sm font-medium text-gray-700">Business Structure</label>
                    <select
                        id="structure"
                        name="structure"
                        value={formData.structure || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                    >
                        <option value="">Select a structure...</option>
                        <option value="sole-proprietorship">Sole Proprietorship</option>
                        <option value="llc">LLC</option>
                        <option value="corporation">Corporation</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry</label>
                    <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                        placeholder="Technology, Retail, Consulting..."
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoStep;
