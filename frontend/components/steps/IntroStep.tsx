import React from 'react';
import { Briefcase, FileCheck, Landmark, ScrollText } from 'lucide-react';

const IntroStep: React.FC = () => {
    return (
        <div className="space-y-10 text-center max-w-2xl mx-auto px-4">
            <div className="space-y-4">
                <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-blue-100">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight sm:text-4xl">
                    Launch Your Local Business
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
                    From idea to operation. We guide you through registration, taxes, and permits in just a few simple steps.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600"><Landmark className="w-5 h-5" /></div>
                        <h3 className="font-semibold text-slate-900">Structure</h3>
                    </div>
                    <p className="text-sm text-slate-500">LLC, Sole Prop, or Corp selection guide.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600"><FileCheck className="w-5 h-5" /></div>
                        <h3 className="font-semibold text-slate-900">Requirements</h3>
                    </div>
                    <p className="text-sm text-slate-500">Federal and State specific checklists.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-50 rounded-lg text-amber-600"><Landmark className="w-5 h-5" /></div>
                        <h3 className="font-semibold text-slate-900">Taxes</h3>
                    </div>
                    <p className="text-sm text-slate-500">EIN setup and local tax obligations.</p>
                </div>
                <div className="p-4 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow transition-shadow">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-rose-50 rounded-lg text-rose-600"><ScrollText className="w-5 h-5" /></div>
                        <h3 className="font-semibold text-slate-900">Permits</h3>
                    </div>
                    <p className="text-sm text-slate-500">Zoning variances and certifications.</p>
                </div>
            </div>

            <p className="text-xs text-slate-400 font-medium">
                <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                100% Offline & Private. No data leaves your device.
            </p>
        </div>
    );
};

export default IntroStep;
