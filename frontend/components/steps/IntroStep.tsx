import React from 'react';

const IntroStep: React.FC = () => {
    return (
        <div className="space-y-8 text-center max-w-lg mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">Welcome to Your Business Setup Guide</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
                This wizard will guide you through the process of setting up your business locally.
                We will ask a few questions to tailor the checklist for you.
            </p>
            <div className="bg-blue-50/80 p-6 rounded-2xl border border-blue-100 text-left shadow-sm">
                <h3 className="font-bold text-blue-900 mb-3 text-lg">What we'll cover:</h3>
                <ul className="list-disc list-inside text-blue-800 space-y-2 font-medium">
                    <li>Business Structure Selection</li>
                    <li>Registration Requirements</li>
                    <li>Tax Obligations</li>
                    <li>Local Permits</li>
                </ul>
            </div>
            <p className="text-xs text-slate-400 italic">No value is stored online. Everything stays on your device.</p>
        </div>
    );
};

export default IntroStep;
