import React from 'react';
import { useWizardStore } from '@/store/wizardStore';

const BusinessInfoStep: React.FC = () => {
    const { formData, updateFormData } = useWizardStore();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className="space-y-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-slate-800 border-b pb-4">Basic Business Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                    <label htmlFor="businessName" className="block text-sm font-semibold text-slate-700 mb-2">Business Name</label>
                    <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border transition-colors hover:border-blue-300"
                        placeholder="My Awesome Company"
                    />
                </div>

                <div>
                    <label htmlFor="structure" className="block text-sm font-semibold text-slate-700 mb-2">Business Structure</label>
                    <select
                        id="structure"
                        name="structure"
                        value={formData.structure || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border bg-white"
                    >
                        <option value="">Select a structure...</option>
                        <option value="sole-proprietorship">Sole Proprietorship</option>
                        <option value="llc">LLC</option>
                        <option value="corporation">Corporation</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="industry" className="block text-sm font-semibold text-slate-700 mb-2">Industry</label>
                    <input
                        type="text"
                        id="industry"
                        name="industry"
                        value={formData.industry || ''}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-3 border transition-colors hover:border-blue-300"
                        placeholder="Technology, Retail..."
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessInfoStep;
