import React, { useState } from 'react';
import { portfolioData, Project } from '../data/portfolio';
import { ProjectModal } from './ProjectModal';
import {
  ExternalLink,
  Github,
  Sparkles,
  HeartPulse,
  MapPin,
  Calendar,
  AlertTriangle,
  FolderLock,
  Bell,
  Users,
  Languages,
  ArrowRight,
  Code2
} from 'lucide-react';

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filterTabs = ['All', 'Healthcare & AI', 'Web & Systems', 'Exploration'];

  const featuredProject = portfolioData.projects.find((p) => p.featured) || portfolioData.projects[0];
  const regularProjects = portfolioData.projects.filter((p) => !p.featured);

  const filteredProjects =
    selectedFilter === 'All'
      ? regularProjects
      : regularProjects.filter((p) => p.category === selectedFilter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const getPulseFeatureIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Sparkles className="w-4 h-4 text-rose-500" />;
      case 1: return <MapPin className="w-4 h-4 text-pink-500" />;
      case 2: return <Calendar className="w-4 h-4 text-purple-500" />;
      case 3: return <AlertTriangle className="w-4 h-4 text-rose-600" />;
      case 4: return <FolderLock className="w-4 h-4 text-emerald-500" />;
      case 5: return <Bell className="w-4 h-4 text-amber-500" />;
      case 6: return <Users className="w-4 h-4 text-indigo-500" />;
      case 7: return <Languages className="w-4 h-4 text-teal-500" />;
      default: return <HeartPulse className="w-4 h-4 text-rose-500" />;
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-slate-200/70 bg-[#fafafd] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            03. Engineering Portfolio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Featured Projects & Implementations
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Systems developed to solve real problems across digital healthcare, predictive machine learning, and responsive web applications.
          </p>
        </div>

        {/* 1. HERO FEATURED SHOWCASE: PULSE FEEL */}
        <div
          id="pulse-feel-showcase"
          className="mb-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-white via-rose-50/30 to-pink-50/20 border border-rose-200/90 shadow-[0_20px_50px_-15px_rgba(244,63,94,0.12)] relative overflow-hidden"
        >
          {/* Subtle pink decorative ambient glow */}
          <div
            className="absolute top-0 right-0 w-[420px] h-[300px] bg-rose-200/25 rounded-full blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Featured Header & Category */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider font-mono text-rose-600 font-bold flex items-center gap-1.5">
                <HeartPulse className="w-4 h-4 text-rose-500 animate-pulse" />
                Featured Healthcare Innovation
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-xs text-slate-500">Concept & Architecture</span>
            </div>

            {/* Unboxed tech stack */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
              {featuredProject.technologies.map((tech, i) => (
                <span key={tech} className="flex items-center gap-2">
                  <span className="text-slate-700 font-medium">{tech}</span>
                  {i < featuredProject.technologies.length - 1 && (
                    <span aria-hidden="true" className="text-slate-300">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Main Grid: Left Details & Right Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="text-base sm:text-lg text-rose-600 font-semibold mt-1">
                  {featuredProject.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* 8 Core Features Grid */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Key System Capabilities:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {featuredProject.features?.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-rose-100 shadow-2xs text-xs text-slate-800"
                    >
                      {getPulseFeatureIcon(idx)}
                      <span className="truncate font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(featuredProject)}
                  className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-all shadow-[0_4px_18px_rgba(244,63,94,0.35)] flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  View Architecture & Deep Dive
                </button>

                <a
                  href={featuredProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl transition-colors flex items-center gap-2 shadow-2xs"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repository
                </a>
              </div>
            </div>

            {/* Right Visual Image */}
            <div className="lg:col-span-5">
              <div
                className="relative rounded-3xl overflow-hidden bg-white border-2 border-white shadow-[0_15px_40px_-10px_rgba(15,23,42,0.15)] aspect-[4/3] group cursor-pointer"
                onClick={() => setActiveModalProject(featuredProject)}
                title="Click to expand Pulse Feel"
              >
                {!failedImages[featuredProject.id] ? (
                  <img
                    src={featuredProject.image}
                    alt="Pulse Feel - AI-Powered Healthcare Companion"
                    referrerPolicy="no-referrer"
                    onError={() => handleImageError(featuredProject.id)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-rose-50 to-pink-50">
                    <HeartPulse className="w-16 h-16 text-rose-500 mb-3" />
                    <span className="text-lg font-bold text-slate-900">Pulse Feel</span>
                    <span className="text-xs text-slate-500 mt-1">AI Healthcare Companion</span>
                  </div>
                )}
                {/* Visual Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                  <span className="font-mono text-[11px] text-rose-300 font-semibold">Mobile Concept UI</span>
                  <span className="text-slate-200">Click to expand</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SECONDARY PROJECTS GALLERY */}
        <div className="space-y-8">
          {/* Gallery Header & Filter Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Additional Research & Applications
            </h3>

            {/* Segmented Filter Control */}
            <div className="flex flex-wrap gap-1 p-1 bg-slate-100 border border-slate-200/80 rounded-xl">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                    selectedFilter === tab
                      ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Secondary Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => {
              const hasImage = project.image && !failedImages[project.id];

              return (
                <div
                  key={project.id}
                  className="rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Project Visual Cover or Styled Fallback Container */}
                    <div
                      className="w-full aspect-[16/9] bg-slate-50 border-b border-slate-100 relative overflow-hidden cursor-pointer"
                      onClick={() => setActiveModalProject(project)}
                    >
                      {hasImage ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          onError={() => handleImageError(project.id)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-rose-50 via-white to-pink-50">
                          <Code2 className="w-10 h-10 text-rose-500 mb-2" />
                          <span className="text-base font-bold text-slate-900 font-display">
                            {project.title}
                          </span>
                          <span className="text-xs font-mono text-rose-600 mt-1 font-medium">
                            {project.status || 'Active Development'}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-3 left-3 text-[11px] font-mono text-rose-700 bg-white/90 px-2.5 py-1 rounded-md backdrop-blur-sm border border-rose-200 shadow-2xs font-semibold">
                        {project.category}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-semibold text-rose-600">{project.status || 'Completed'}</span>
                        <span className="font-mono text-slate-400">{project.category}</span>
                      </div>

                      <h4 className="text-xl font-bold text-slate-900 font-display mb-1 group-hover:text-rose-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs font-semibold text-rose-600 mb-3">
                        {project.tagline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Unboxed Tech Tags with dot separators */}
                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-600 font-mono mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={tech} className="flex items-center gap-2">
                            <span className="text-slate-800 font-medium">{tech}</span>
                            {idx < project.technologies.length - 1 && (
                              <span aria-hidden="true" className="text-slate-300">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      Details & Features
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-slate-800 transition-colors"
                        aria-label={`${project.title} GitHub repository`}
                        title="GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="text-slate-400 hover:text-rose-600 transition-colors cursor-pointer"
                        aria-label={`Preview ${project.title}`}
                        title="Live Preview"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
