import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { FileText, Download, Eye, CheckCircle2, GraduationCap, Code2, Award, X, Printer, Briefcase } from 'lucide-react';

export const ResumeSection: React.FC = () => {
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = portfolioData.personal.resumePath;
    link.download = 'Shreyash_Bhat_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <section id="resume" className="py-24 border-t border-slate-200/70 bg-[#fafafd] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            07. Verified Curriculum Vitae
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Resume & Qualifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            A comprehensive summary of educational credentials at SVKM COE Shirpur, internships, Google certifications, and hackathon accomplishments.
          </p>
        </div>

        {/* Resume Action Banner Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-rose-50/20 to-pink-50/20 border border-rose-200/80 shadow-[0_15px_40px_-10px_rgba(244,63,94,0.1)] relative overflow-hidden mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-600 font-semibold">
                <FileText className="w-4 h-4 text-rose-500" />
                <span>Format: PDF / ATS-Optimized</span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>Updated for 2026</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-display">
                Curriculum Vitae — Shreyash Shrikant Bhat
              </h3>
              <p className="text-sm text-slate-600 max-w-xl">
                SVKM College of Engineering Shirpur · Ready for software engineering internships and AI/ML technical roles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowPreviewModal(true)}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <Eye className="w-4 h-4 text-rose-500" />
                View Resume
              </button>

              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-all shadow-[0_4px_18px_rgba(244,63,94,0.3)] flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Resume download initiated successfully (Shreyash_Bhat_Resume.pdf).</span>
            </div>
          )}
        </div>

        {/* Structured On-Page Resume Summary (Light Theme) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Education Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-rose-600 font-semibold flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h4>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
              <span className="text-xs font-mono text-slate-400">Undergraduate Degree</span>
              <h5 className="text-base font-bold text-slate-900 mt-1">
                {portfolioData.personal.degree}
              </h5>
              <p className="text-xs font-medium text-slate-700 mt-1">
                {portfolioData.personal.college}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5 font-mono">
                {portfolioData.personal.location}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Specializations:</span> Artificial Intelligence, Machine Learning, Full-Stack Architectures.
              </div>
            </div>
          </div>

          {/* Experience & Internships Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-rose-600 font-semibold flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h4>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-3">
              <div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Completed</span>
                <p className="text-xs font-bold text-slate-900 mt-1">Skill Nexis — ML & AI Intern</p>
                <p className="text-[11px] text-slate-500 font-mono">6 Weeks (Certified: 30-09-2026)</p>
              </div>
              <div className="pt-2 border-t border-slate-100">
                <span className="text-xs font-semibold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">Selected / Offer</span>
                <p className="text-xs font-bold text-slate-900 mt-1">CodSoft — Web Development Virtual Intern</p>
                <p className="text-[11px] text-slate-500 font-mono">Offer Letter ID: BY26RY238844</p>
              </div>
            </div>
          </div>

          {/* Key Recognitions Column */}
          <div className="space-y-4">
            <h4 className="text-sm font-mono uppercase tracking-wider text-rose-600 font-semibold flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Top Credentials</span>
            </h4>
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs space-y-2.5 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Google: Maximize Productivity with AI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Google: Discover the Art of Prompting</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Google: Introduction to AI</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>Adobe University Hackathon (unstop)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span>CodeCraze 3.0 Hackathon (Team LifeLedger)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* In-App Resume Preview Modal */}
      {showPreviewModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowPreviewModal(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-10 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Controls */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-rose-600" />
                <span className="font-bold text-slate-900 text-base">
                  Interactive Resume Document
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  title="Print Resume"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body */}
            <div className="space-y-6 text-slate-700">
              {/* Header */}
              <div className="text-center pb-6 border-b border-slate-100">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">
                  {portfolioData.personal.fullName}
                </h2>
                <p className="text-xs sm:text-sm text-rose-600 font-mono mt-1 font-semibold">
                  {portfolioData.personal.headline}
                </p>
                <div className="mt-2 text-xs text-slate-500 flex flex-wrap items-center justify-center gap-3">
                  <span>{portfolioData.personal.college}</span>
                  <span aria-hidden="true">·</span>
                  <span>{portfolioData.personal.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{portfolioData.personal.email}</span>
                </div>
              </div>

              {/* Summary */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-rose-600 mb-2 font-bold">
                  About
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {portfolioData.about.bio[0]}
                </p>
              </div>

              {/* Education */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-rose-600 mb-2 font-bold">
                  Education
                </h3>
                <div className="text-xs sm:text-sm">
                  <div className="flex justify-between font-bold text-slate-900">
                    <span>{portfolioData.personal.degree}</span>
                    <span className="font-mono text-xs text-slate-500 font-medium">In Progress</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    {portfolioData.personal.college} — {portfolioData.personal.location}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-rose-600 mb-2 font-bold">
                  Internships & Opportunities
                </h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>Skill Nexis — Machine Learning & AI Intern</span>
                      <span className="font-mono text-xs text-emerald-600">Completed (6 Weeks)</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Applied machine learning algorithms, model evaluation and practical AI problem solving.
                    </p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between font-bold text-slate-900">
                      <span>CodSoft — Web Development Virtual Intern</span>
                      <span className="font-mono text-xs text-rose-600">Offer Letter (ID: BY26RY238844)</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">
                      Virtual internship offer in frontend web development and responsive JavaScript systems.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h3 className="text-xs uppercase font-mono tracking-wider text-rose-600 mb-2 font-bold">
                  Technical Arsenal
                </h3>
                <div className="text-xs text-slate-600 space-y-1">
                  <div><strong className="text-slate-900">Programming:</strong> Python, C, C++, Java</div>
                  <div><strong className="text-slate-900">Web:</strong> HTML, CSS, JavaScript, Responsive Web Design</div>
                  <div><strong className="text-slate-900">AI / ML:</strong> Machine Learning, Generative AI, Prompt Engineering, AI App Dev</div>
                  <div><strong className="text-slate-900">Database & Tools:</strong> SQL, DBMS, Firebase, Git, GitHub, VS Code, Google Colab, Jupyter</div>
                  <div><strong className="text-slate-900">UI/UX & Creative:</strong> Figma, Prototyping, Technical Writing, Product Ideation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
