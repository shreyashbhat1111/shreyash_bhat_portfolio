import React, { useEffect } from 'react';
import { X, ExternalLink, Award, FileCheck, CheckCircle2, ShieldCheck, Building2, Calendar, Hash, UserCheck } from 'lucide-react';
import { Certification, InternshipOpportunity } from '../data/portfolio';

type DocumentItem = 
  | { type: 'certification'; data: Certification }
  | { type: 'internship'; data: InternshipOpportunity }
  | null;

interface DocumentModalProps {
  item: DocumentItem;
  onClose: () => void;
}

export const DocumentModal: React.FC<DocumentModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  if (!item) return null;

  const isCert = item.type === 'certification';
  const cert = isCert ? item.data : null;
  const intern = !isCert ? item.data : null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
          aria-label="Close document modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isCert && cert && (
          <div>
            {/* Certificate Header Banner */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-rose-600 mb-3 font-semibold">
              <Award className="w-4 h-4 text-rose-500" />
              <span>Verified Credential</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{cert.issuer}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2">
              {cert.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Issued to <strong className="text-slate-800 font-semibold">Shreyash Shrikant Bhat</strong>
            </p>

            {/* Document Card Container */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-rose-50/20 border border-slate-200 shadow-xs mb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Issuing Authority
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    {cert.issuer}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Issue Date
                  </div>
                  <div className="text-sm font-semibold text-slate-700 mt-0.5 font-mono">
                    {cert.date}
                  </div>
                </div>
              </div>

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Credential Description
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {cert.signatory && (
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-600">
                  <UserCheck className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Authorized by: <strong className="text-slate-800">{cert.signatory}</strong></span>
                </div>
              )}

              {cert.credentialId && (
                <div className="p-3 rounded-xl bg-white border border-slate-200 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 min-w-0">
                    <Hash className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                    <span className="font-mono text-slate-700 truncate">
                      ID: {cert.credentialId}
                    </span>
                  </div>
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-rose-600 hover:text-rose-700 shrink-0"
                    >
                      <span>Verify Online</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {/* Validated Skills */}
              <div className="pt-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Competencies Demonstrated
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-xs font-medium text-slate-700 shadow-2xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-1.5 text-xs text-emerald-600">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified Academic & Professional Record</span>
              </div>
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                >
                  <span>Open Verification Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        )}

        {!isCert && intern && (
          <div>
            {/* Internship / Offer Letter Header */}
            <div className="flex items-center gap-2.5 text-xs font-mono text-rose-600 mb-3 font-semibold">
              <Building2 className="w-4 h-4 text-rose-500" />
              <span>{intern.status}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>{intern.organization}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-1">
              {intern.role}
            </h3>
            <p className="text-sm font-semibold text-slate-700 mb-6">
              Organization: {intern.organization}
            </p>

            {/* Document Details Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-pink-50/20 border border-slate-200 shadow-xs mb-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-200/80">
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Internship Period
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {intern.period}
                  </div>
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Document Date
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-0.5 font-mono">
                    {intern.dateIssued}
                  </div>
                </div>
              </div>

              {intern.letterId && (
                <div className="text-xs font-mono text-slate-600">
                  <span className="text-slate-400">Reference ID:</span> {intern.letterId}
                </div>
              )}

              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                  Scope & Overview
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {intern.description}
                </p>
              </div>

              {intern.tasks && intern.tasks.length > 0 && (
                <div className="space-y-1.5 pt-2">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Responsibilities & Focus Areas
                  </div>
                  {intern.tasks.map((task, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-500">
                <div>
                  Signatory: <strong className="text-slate-800">{intern.signatory}</strong> ({intern.signatoryTitle})
                </div>
                {intern.accreditation && (
                  <div className="font-mono text-[11px] text-rose-700">
                    {intern.accreditation}
                  </div>
                )}
              </div>
            </div>

            {/* Footer Notice */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-[11px] text-slate-600 flex items-center justify-between">
              <span>Candidate: <strong>Shreyash Shrikant Bhat</strong> (SVKM COE Shirpur)</span>
              <span className="font-mono text-emerald-600 font-semibold">{intern.isCompleted ? 'Completed' : 'Official Offer'}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
