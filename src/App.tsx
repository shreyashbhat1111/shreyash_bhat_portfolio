/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PortfolioAssistant } from './components/PortfolioAssistant';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fafafd] text-slate-900 flex flex-col relative selection:bg-rose-500/20 selection:text-rose-600">
      {/* Top Navigation */}
      <Navbar onOpenAssistant={() => setAssistantOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <ResumeSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Portfolio Assistant Launcher Button (when assistant is closed) */}
      {!assistantOpen && (
        <button
          type="button"
          onClick={() => setAssistantOpen(true)}
          className="fixed bottom-6 right-6 z-40 px-4 py-3 bg-white/90 hover:bg-rose-50/90 text-slate-900 border border-rose-300/90 rounded-full shadow-[0_8px_30px_rgba(244,63,94,0.22)] hover:shadow-[0_12px_40px_rgba(244,63,94,0.35)] transition-all flex items-center gap-2.5 group cursor-pointer backdrop-blur-md"
          aria-label="Open Local Portfolio Assistant"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-pulse shadow-[0_0_8px_rgba(244,63,94,0.8)]" />
          <Sparkles className="w-4 h-4 text-rose-500 transition-transform group-hover:rotate-12" />
          <span className="text-xs font-bold font-display tracking-wide text-slate-900">
            Portfolio Assistant
          </span>
        </button>
      )}

      {/* Floating Local Assistant Widget */}
      <PortfolioAssistant
        isOpen={assistantOpen}
        onClose={() => setAssistantOpen(false)}
      />
    </div>
  );
}
