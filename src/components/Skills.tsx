import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import {
  Code2,
  Globe,
  Cpu,
  Database,
  Wrench,
  Sparkles,
  Check,
  Binary,
  Palette,
  FileEdit,
  Briefcase,
  Users2,
  Lightbulb
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Web Development',
    'AI & Machine Learning',
    'Database',
    'Development Tools',
    'Data & Problem Solving',
    'UI/UX & Design',
    'Content & Communication',
    'Freelancing & Delivery',
    'Leadership & Collaboration',
    'Innovation & Strengths'
  ];

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Programming':
        return <Code2 className="w-4 h-4 text-rose-600" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-pink-600" />;
      case 'AI & Machine Learning':
        return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'Database':
        return <Database className="w-4 h-4 text-emerald-600" />;
      case 'Development Tools':
        return <Wrench className="w-4 h-4 text-amber-600" />;
      case 'Data & Problem Solving':
        return <Binary className="w-4 h-4 text-blue-600" />;
      case 'UI/UX & Design':
        return <Palette className="w-4 h-4 text-rose-500" />;
      case 'Content & Communication':
        return <FileEdit className="w-4 h-4 text-teal-600" />;
      case 'Freelancing & Delivery':
        return <Briefcase className="w-4 h-4 text-indigo-600" />;
      case 'Leadership & Collaboration':
        return <Users2 className="w-4 h-4 text-pink-600" />;
      case 'Innovation & Strengths':
        return <Lightbulb className="w-4 h-4 text-amber-500" />;
      default:
        return <Sparkles className="w-4 h-4 text-rose-600" />;
    }
  };

  const filteredCategories =
    selectedCategory === 'All'
      ? portfolioData.skillCategories
      : portfolioData.skillCategories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 border-t border-slate-200/70 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
              02. Technical & Professional Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              Skills & Expertise
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl">
              Languages, engineering frameworks, design workflows, and communication skills honed through coursework and real-world execution.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100 border border-slate-200/80 rounded-2xl max-w-xl self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:shadow-md hover:border-rose-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center">
                      {getCategoryIcon(group.category)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-400 tabular-nums">
                    {group.skills.length} skills
                  </span>
                </div>

                <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                  {group.description}
                </p>

                {/* Skill Items List */}
                <div className="space-y-2">
                  {group.skills.map((skillName) => (
                    <div
                      key={skillName}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-between group hover:border-rose-300 hover:bg-rose-50/40 transition-all"
                    >
                      <div className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                        <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-rose-950">
                          {skillName}
                        </span>
                      </div>
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400 opacity-60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-5 pt-3 border-t border-slate-100 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Domain Competency</span>
                <span className="text-rose-600 font-mono font-medium">Verified in projects</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
