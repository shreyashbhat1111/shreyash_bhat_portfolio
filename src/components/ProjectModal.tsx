import React, { useEffect } from 'react';
import { Project } from '../data/portfolio';
import { X, Github, ExternalLink, CheckCircle, Sparkles, Layers, ShieldCheck } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white border border-slate-200 rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-rose-600 mb-2 font-semibold">
            <span>{project.category}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>{project.status || 'Active Project'}</span>
          </div>
          <h3
            id="project-modal-title"
            className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display mb-2"
          >
            {project.title}
          </h3>
          <p className="text-sm font-semibold text-rose-600">
            {project.tagline}
          </p>
        </div>

        {/* Project Image Preview */}
        {project.image && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6 relative shadow-xs">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        )}

        {/* Description */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-2 font-semibold">
            Concept & Architecture
          </h4>
          <p className="text-sm text-slate-700 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Key Features List */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-3 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-rose-500" />
              <span>Core System Capabilities</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700"
                >
                  <CheckCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Technologies List */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono tracking-wider text-slate-500 mb-2 flex items-center gap-1.5 font-semibold">
            <Layers className="w-3.5 h-3.5 text-rose-500" />
            <span>Technologies & Frameworks</span>
          </h4>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-700 font-mono">
            {project.technologies.map((tech, idx) => (
              <React.Fragment key={tech}>
                <span className="text-rose-700 font-medium">{tech}</span>
                {idx < project.technologies.length - 1 && (
                  <span aria-hidden="true" className="text-slate-300">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-100">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Production-ready concept & verifiable source</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-colors shadow-xs"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo / Preview
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
