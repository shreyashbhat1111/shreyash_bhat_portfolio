import React, { useState } from 'react';
import { portfolioData, InternshipOpportunity } from '../data/portfolio';
import { DocumentModal } from './DocumentModal';
import { Briefcase, Building2, Calendar, FileText, CheckCircle2, ShieldCheck, ArrowRight, Award } from 'lucide-react';

export const Experience: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<InternshipOpportunity | null>(null);

  return (
    <section id="experience" className="py-24 border-t border-slate-200/70 bg-[#fafafd] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            04. Professional Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Internships & Opportunities
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Verified internship experience and official industry selections across Machine Learning and Web Development.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.internships.map((intern) => (
            <div
              key={intern.id}
              className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Top Status & Date */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 leading-tight">
                        {intern.organization}
                      </h4>
                      <span className="text-[11px] font-mono text-slate-400">
                        {intern.accreditation}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      intern.isCompleted
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-rose-50 text-rose-700 border border-rose-200'
                    }`}
                  >
                    {intern.status}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-bold text-slate-900 font-display mb-1 group-hover:text-rose-600 transition-colors">
                  {intern.role}
                </h3>

                {/* Period */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono mb-4">
                  <Calendar className="w-3.5 h-3.5 text-rose-500" />
                  <span>Duration: {intern.period}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  {intern.description}
                </p>

                {/* Key Deliverables/Tasks */}
                {intern.tasks && (
                  <div className="space-y-2 mb-6">
                    {intern.tasks.map((task, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                        <span>{task}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-5 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-500">
                  Authority: <strong className="text-slate-800">{intern.signatory}</strong>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedItem(intern)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100/70 border border-rose-200/80 rounded-xl transition-colors cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>{intern.isCompleted ? 'View Credentials' : 'View Offer Letter'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Modal */}
      <DocumentModal
        item={selectedItem ? { type: 'internship', data: selectedItem } : null}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
