import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { GlassSculpture } from './GlassSculpture';
import { ArrowDown, Github, Linkedin, Mail, FileText, ChevronRight, Sparkles, User, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = portfolioData.personal.dynamicRoles[roleIndex];
    const typingSpeed = isDeleting ? 25 : 65;
    const pauseTime = 2200;

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % portfolioData.personal.dynamicRoles.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#fafafd] via-white to-[#f8f9fc]"
    >
      {/* Subtle light geometric grid backdrop */}
      <div className="absolute inset-0 bg-light-grid opacity-70 pointer-events-none" aria-hidden="true" />

      {/* Ambient pink/magenta soft light diffusion */}
      <div
        className="absolute top-20 right-10 w-[550px] h-[550px] bg-rose-200/25 rounded-full blur-[130px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-6 z-10 w-full">
        {/* Two-Column Grid: Left Content & Right Photo + 3D Glass Sculpture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Personal Info & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Status / Greeting kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50/80 border border-rose-200/70 text-xs text-rose-700 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span className="font-medium">{portfolioData.personal.college}</span>
              <span aria-hidden="true" className="text-rose-300">·</span>
              <span className="font-mono text-[11px] text-rose-600">B.Tech CSE</span>
            </div>

            {/* Name */}
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-1 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                <span>{portfolioData.personal.location}</span>
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 font-display">
                {portfolioData.personal.name}
              </h1>
            </div>

            {/* Dynamic Animated Headline */}
            <div className="h-10 sm:h-12 flex items-center">
              <p className="text-lg sm:text-2xl font-semibold text-slate-800">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600">
                  {displayedText}
                </span>
                <span className="inline-block w-[2.5px] h-5 sm:h-6 ml-1 bg-rose-500 animate-pulse align-middle" />
              </p>
            </div>

            {/* Real Tagline / Introduction */}
            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-xl">
              {portfolioData.personal.tagline}
            </p>

            {/* Unboxed domains metadata with typographic separators */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 font-medium">
              <span>Artificial Intelligence</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Machine Learning</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Full-Stack Development</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-rose-600">Healthcare Technology</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-all shadow-[0_8px_25px_rgba(244,63,94,0.35)] hover:shadow-[0_12px_32px_rgba(244,63,94,0.5)] flex items-center gap-2 group cursor-pointer"
              >
                Explore Work
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>

              <a
                href="#contact"
                className="px-5 py-3 text-sm font-medium text-slate-800 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-all shadow-xs flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-rose-500" />
                Contact Me
              </a>

              <a
                href="#resume"
                className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 bg-transparent hover:bg-slate-100/60 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                Resume
              </a>
            </div>

            {/* Social Channels with Real URLs */}
            <div className="flex items-center gap-3 pt-2 text-slate-500">
              <a
                href={portfolioData.personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 transition-all hover:scale-105 shadow-2xs cursor-pointer"
                aria-label="GitHub Profile (shreyashbhat1111)"
                title="GitHub: shreyashbhat1111"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 transition-all hover:scale-105 shadow-2xs cursor-pointer"
                aria-label="LinkedIn Profile (Shreyash Bhat)"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.social.email}
                className="p-2.5 rounded-full bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-600 transition-all hover:scale-105 shadow-2xs cursor-pointer"
                aria-label="Send direct email to shreyashbhat1111@gmail.com"
                title="Email: shreyashbhat1111@gmail.com"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Profile Photo + 3D Translucent Pink Glass Sculpture */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* The 3D Translucent Pink Glass Sculpture (positioned behind/beside photo) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none scale-90 sm:scale-105 lg:scale-115 translate-x-4 lg:translate-x-8">
              <GlassSculpture />
            </div>

            {/* Profile Photo Card (Shreyash's real photo from /profile.jpg, 100% visible face, zero blockage) */}
            <div className="relative z-20 w-[260px] sm:w-[300px] aspect-[3/4] rounded-3xl overflow-hidden bg-white/95 border-2 border-white shadow-[0_25px_60px_-15px_rgba(15,23,42,0.18)] transition-transform duration-500 hover:scale-[1.02] group">
              <img
                src="/profile.jpg"
                alt="Shreyash Bhat - Computer Science Engineering Student @ SVKM"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Delicate glass gloss reflection across bottom of photo */}
              <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/85 via-slate-950/35 to-transparent flex items-center justify-between text-white text-xs">
                <div>
                  <div className="font-semibold text-white">{portfolioData.personal.name}</div>
                  <div className="text-[11px] text-rose-300 font-mono">SVKM COE Shirpur</div>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              </div>
            </div>

            {/* Floating Glass Accent Pill on side */}
            <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 z-30 px-3.5 py-2 rounded-2xl bg-white/90 backdrop-blur-md border border-rose-200/80 shadow-lg flex items-center gap-2.5 text-xs">
              <div className="w-7 h-7 rounded-xl bg-rose-100 flex items-center justify-center text-rose-600">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-slate-900 leading-tight">AI & Full-Stack</div>
                <div className="text-[11px] text-slate-500">Healthcare Innovator</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="mt-12 flex justify-center">
          <a
            href="#about"
            className="text-slate-400 hover:text-rose-600 transition-colors p-2 inline-flex flex-col items-center gap-1 text-xs"
            aria-label="Scroll to About section"
          >
            <span className="font-mono text-[10px] tracking-wider uppercase text-slate-400">Scroll</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-rose-500" />
          </a>
        </div>
      </div>
    </section>
  );
};
