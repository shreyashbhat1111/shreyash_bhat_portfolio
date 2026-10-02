import React, { useRef } from 'react';
import { portfolioData } from '../data/portfolio';
import { useProfilePhoto } from '../utils/useProfilePhoto';
import { Brain, Layers, HeartPulse, Palette, GraduationCap, MapPin, CheckCircle2, User, Building, Upload } from 'lucide-react';

export const About: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { photoSrc, photoError, setPhotoError, handleFileUpload } = useProfilePhoto();

  const getFocusIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return <Brain className="w-5 h-5 text-rose-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-600" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-rose-500" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-pink-600" />;
      default:
        return <Brain className="w-5 h-5 text-rose-600" />;
    }
  };

  return (
    <section id="about" className="py-24 border-t border-slate-200/70 bg-[#fafafd] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            01. Background & Perspective
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            About Me
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Computer Science and Engineering student at SVKM College of Engineering, Shirpur, combining technical systems, artificial intelligence, and digital creativity.
          </p>
        </div>

        {/* Top Grid: Bio + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Photo Card / Avatar Showcase */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileUpload(file);
              }}
            />

            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-3xl overflow-hidden bg-white border-2 border-white shadow-[0_15px_35px_-10px_rgba(15,23,42,0.12)] group">
              {!photoError ? (
                <img
                  src={photoSrc}
                  alt="Shreyash Bhat - CSE Student @ SVKM"
                  referrerPolicy="no-referrer"
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
                  <div className="w-20 h-20 rounded-2xl bg-rose-100 border border-rose-200 flex items-center justify-center mb-3 shadow-2xs">
                    <User className="w-10 h-10 text-rose-500" />
                  </div>
                  <span className="text-base font-bold text-slate-800 font-display">
                    {portfolioData.personal.name}
                  </span>
                  <span className="text-xs text-slate-500 mt-0.5">
                    {portfolioData.personal.college}
                  </span>

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="mt-4 px-3.5 py-1.5 rounded-xl bg-white border border-rose-200 hover:border-rose-400 text-xs font-semibold text-rose-600 hover:text-rose-700 shadow-2xs transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    <span>Load Original Photo</span>
                  </button>
                </div>
              )}
              {/* Subtle scrim overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-70 pointer-events-none" />
              
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-200">
                <span className="font-semibold text-white">{portfolioData.personal.name}</span>
                <span className="text-rose-300 font-mono text-[11px]">SVKM Shirpur</span>
              </div>
            </div>

            {/* Location & college info caption */}
            <div className="mt-4 text-center text-xs text-slate-500 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>{portfolioData.personal.location}</span>
            </div>
          </div>

          {/* Professional Bio (Authentic User Story) */}
          <div className="lg:col-span-8 flex flex-col justify-center space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            {portfolioData.about.bio.map((paragraph, idx) => (
              <p key={idx} className="text-slate-700">
                {paragraph}
              </p>
            ))}

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#skills"
                className="text-xs font-semibold text-rose-600 hover:text-rose-700 transition-colors flex items-center gap-1 cursor-pointer"
              >
                Inspect Technical Capabilities
                <span aria-hidden="true">→</span>
              </a>
              <span className="text-slate-300">·</span>
              <a
                href="#experience"
                className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 cursor-pointer"
              >
                View Experience & Opportunities
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {portfolioData.about.stats.map((stat, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all"
            >
              <div className="text-2xl sm:text-3xl font-extrabold font-mono tabular-nums text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-slate-800 mt-1">{stat.label}</div>
              <div className="text-[11px] text-slate-500 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>

        {/* 4 Focus Areas */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-slate-900 mb-6 font-display flex items-center gap-2">
            <span>Core Pillars & Focus Areas</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {portfolioData.about.focusAreas.map((focus, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  {getFocusIcon(focus.iconName)}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                  {focus.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {focus.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Rigor */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-rose-600" />
              </div>
              <div>
                <span className="text-xs font-mono text-rose-600 uppercase tracking-wider font-semibold">
                  Formal Degree Program
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-slate-900 font-display">
                  {portfolioData.about.education.degree}
                </h4>
                <div className="text-xs text-slate-500 mt-1 flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-slate-700">{portfolioData.about.education.institution}</span>
                  <span aria-hidden="true" className="text-slate-300">·</span>
                  <span>{portfolioData.about.education.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Building className="w-3.5 h-3.5 text-rose-600" />
              <span>Program Highlights & Engineering Focus</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-slate-700">
              {portfolioData.about.education.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 border border-slate-200/70"
                >
                  <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span className="font-medium leading-relaxed">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
