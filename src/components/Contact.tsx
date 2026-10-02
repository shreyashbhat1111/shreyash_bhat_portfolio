import React, { useState } from 'react';
import { portfolioData } from '../data/portfolio';
import { Mail, Send, CheckCircle2, Copy, Github, Linkedin, MessageSquare, AlertCircle, MapPin, Building } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format (e.g., name@domain.com).';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a message or inquiry detail.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please write at least 10 characters so I have context.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subjectLine = encodeURIComponent(
      formData.subject.trim() || `Portfolio Inquiry from ${formData.name.trim()}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n--\nSent from Shreyash Bhat Portfolio`
    );

    const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${subjectLine}&body=${bodyContent}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioData.personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-slate-200/70 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-rose-600 font-mono mb-2 font-semibold">
            08. Direct Connection
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Have an internship opportunity, software development project, hackathon collaboration, or technical inquiry? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct channels & Quick Copy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-[#fafafd] border border-slate-200/80 shadow-xs">
              <h3 className="text-lg font-bold text-slate-900 font-display mb-2">
                Contact & Details
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                Computer Science and Engineering student at SVKM College of Engineering, Shirpur. Open to internships, collaborations, and engineering roles.
              </p>

              {/* Email Address with Copy Button */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Mail className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-800 truncate font-medium">
                    {portfolioData.personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location & Institution */}
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-2 mb-6 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-rose-500 shrink-0" />
                  <span className="font-semibold text-slate-900">{portfolioData.personal.college}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  Verified Developer Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white border border-slate-200 hover:border-rose-300 text-xs font-semibold text-slate-700 hover:text-rose-600 transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={portfolioData.personal.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-white border border-slate-200 hover:border-rose-300 text-xs font-semibold text-slate-700 hover:text-rose-600 transition-colors flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1">
              <span className="font-bold text-slate-900">Direct Transmission:</span>
              <p>
                Sending a message launches your device email client directly addressed to {portfolioData.personal.email}. No third-party data tracking.
              </p>
            </div>
          </div>

          {/* Right Column: Local Validated Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md space-y-5"
            >
              <h3 className="text-xl font-bold text-slate-900 font-display mb-1 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-rose-600" />
                <span>Send a Message</span>
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fields are validated locally in your browser.
              </p>

              {/* Name field */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                  Your Full Name <span className="text-rose-600">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Johnson"
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border transition-colors focus:outline-none focus:ring-1 focus:ring-rose-500 text-slate-900 ${
                    errors.name ? 'border-rose-500' : 'border-slate-200 focus:border-rose-500'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email field */}
              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                  Your Email Address <span className="text-rose-600">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@organization.com"
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border transition-colors focus:outline-none focus:ring-1 focus:ring-rose-500 text-slate-900 ${
                    errors.email ? 'border-rose-500' : 'border-slate-200 focus:border-rose-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject field (Optional) */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="e.g. Internship Opportunity / Pulse Feel Collaboration"
                  className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 focus:outline-none transition-colors text-slate-900"
                />
              </div>

              {/* Message field */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-slate-700 mb-1.5 font-semibold">
                  Message <span className="text-rose-600">*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or project requirements..."
                  className={`w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 border transition-colors focus:outline-none focus:ring-1 focus:ring-rose-500 text-slate-900 ${
                    errors.message ? 'border-rose-500' : 'border-slate-200 focus:border-rose-500'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 px-6 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 rounded-xl transition-all shadow-[0_4px_18px_rgba(244,63,94,0.3)] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Launch Mail Client</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2 animate-fadeIn">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Mail client dispatched! Alternatively, feel free to email {portfolioData.personal.email} directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
