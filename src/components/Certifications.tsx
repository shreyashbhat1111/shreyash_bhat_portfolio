import React, { useState } from 'react';
import { portfolioData, Certification, Achievement } from '../data/portfolio';
import { DocumentModal } from './DocumentModal';
import { Award, ExternalLink, Calendar, CheckCircle2, Bookmark, Trophy, ShieldCheck, FileCheck, Sparkles } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const getBadgeIcon = (type: Certification['badgeType']) => {
    switch (type) {
      case 'google':
        return <Award className="w-5 h-5 text-rose-600" />;
      case 'internship':
        return <Award className="w-5 h-5 text-pink-600" />;
      case 'simulation':
        return <Award className="w-5 h-5 text-purple-600" />;
      case 'industry':
        return <Award className="w-5 h-5 text-indigo-600" />;
      default:
        return <Bookmark className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="certifications" className="py-24 border-t border-slate-200/70 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            05. Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Authorized certifications from Google via Coursera, Forage simulations, Skill Nexis, and MeitY/nasscom digital skilling.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolioData.certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Date */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center shrink-0">
                    {getBadgeIcon(cert.badgeType)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-900 font-display mb-1.5 group-hover:text-rose-600 transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-semibold text-rose-600 mb-3">
                  {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-5">
                  {cert.description}
                </p>

                {/* Validated Skills */}
                <div className="space-y-1.5 mb-6">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                    Skills Validated:
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-700">
                    {cert.skills.map((skill, idx) => (
                      <span key={skill} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3 h-3 text-rose-500" />
                        <span>{skill}</span>
                        {idx < cert.skills.length - 1 && (
                          <span aria-hidden="true" className="text-slate-300">·</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Credential Link / View */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                {cert.credentialId ? (
                  <span className="text-[11px] font-mono text-slate-400 truncate max-w-[140px]">
                    ID: {cert.credentialId}
                  </span>
                ) : (
                  <span className="text-[11px] font-mono text-slate-400">
                    Verified
                  </span>
                )}

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors cursor-pointer"
                  >
                    <FileCheck className="w-3.5 h-3.5" />
                    <span>View</span>
                  </button>

                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-rose-600 transition-colors p-1"
                      title="Verify Online"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. ACHIEVEMENTS & HACKATHONS */}
        <div id="achievements" className="pt-8 border-t border-slate-200">
          <div className="mb-10">
            <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
              06. Competitive Innovation
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 font-display">
              Hackathons & Achievements
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              National and university-level competitive problem-solving representing SVKM College of Engineering Shirpur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolioData.achievements.map((achieve) => (
              <div
                key={achieve.id}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:shadow-xs hover:border-rose-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-rose-100/70 border border-rose-200 flex items-center justify-center text-rose-600">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold font-mono bg-white border border-rose-200 text-rose-700">
                      {achieve.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 font-display mb-1">
                    {achieve.title}
                  </h4>
                  <div className="text-xs font-semibold text-rose-600 mb-2">
                    {achieve.organizer}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {achieve.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>{achieve.institution}</span>
                  <span className="text-rose-600 font-semibold">{achieve.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Document Modal */}
      <DocumentModal
        item={selectedCert ? { type: 'certification', data: selectedCert } : null}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
};
