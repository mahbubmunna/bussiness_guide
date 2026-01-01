import React from 'react';

const IntroStep: React.FC = () => {
    return (
        <div className="space-y-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Welcome to Your Business Setup Guide</h2>
            <p className="text-gray-600">
                This wizard will guide you through the process of setting up your business locally.
                We will ask a few questions to tailor the checklist for you.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg text-left">
                <h3 className="font-semibold text-blue-800 mb-2">What we'll cover:</h3>
                <ul className="list-disc list-inside text-blue-700 space-y-1">
                    <li>Business Structure Selection</li>
                    <li>Registration Requirements</li>
                    <li>Tax Obligations</li>
                    <li>Local Permits</li>
                </ul>
            </div>
            <p className="text-sm text-gray-500 italic">No value is stored online. Everything stays on your device.</p>
        </div>
    );
};

export default IntroStep;
