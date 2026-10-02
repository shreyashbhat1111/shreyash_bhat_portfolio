import React, { useState, useRef, useEffect } from 'react';
import { processAssistantQuery, AssistantResponse } from '../services/assistantService';
import { portfolioData } from '../data/portfolio';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestedAction?: AssistantResponse['suggestedAction'];
  relatedTopics?: string[];
}

interface PortfolioAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioAssistant: React.FC<PortfolioAssistantProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-init',
      sender: 'assistant',
      text: `Hello! I am Shreyash's Portfolio Assistant. I run entirely locally in your browser to help you explore his engineering projects, technical stack, and healthcare innovations.`,
      timestamp: 'Just now',
      relatedTopics: [
        'Who is Shreyash?',
        'What is Pulse Feel?',
        'What are his skills?',
        'Show projects',
        'How can I contact him?'
      ]
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        scrollToBottom();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = processAssistantQuery(query);
      const assistantMsg: Message = {
        id: `asst-${Date.now()}`,
        sender: 'assistant',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedAction: response.suggestedAction,
        relatedTopics: response.relatedTopics
      };
      setMessages((prev) => [...prev, assistantMsg]);
      setIsTyping(false);
    }, 220);
  };

  const handleActionClick = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth < 768) {
        onClose();
      }
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'assistant',
        text: `Conversation cleared. What would you like to know about Shreyash's portfolio?`,
        timestamp: 'Just now',
        relatedTopics: [
          'What is Pulse Feel?',
          'What are his skills?',
          'Show projects',
          'How can I contact him?'
        ]
      }
    ]);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[420px] h-[560px] max-h-[85vh] flex flex-col bg-white border border-rose-200/90 rounded-3xl shadow-[0_20px_60px_-15px_rgba(244,63,94,0.25)] overflow-hidden animate-slideUp text-slate-800"
      role="dialog"
      aria-label="Portfolio Assistant"
    >
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-rose-50/90 via-pink-50/80 to-white border-b border-rose-100 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-900 font-display">
                Portfolio Assistant
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.7)]" />
            </div>
            <span className="text-[10px] font-mono text-rose-600 block font-semibold">
              Local Browser Engine · Zero API Cost
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1 text-slate-500">
          <button
            type="button"
            onClick={handleReset}
            className="p-1.5 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer"
            title="Reset conversation"
            aria-label="Reset conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 hover:text-slate-800 hover:bg-white rounded-lg transition-colors cursor-pointer"
            title="Close Assistant"
            aria-label="Close Assistant"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-[#fafafd]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div
              className={`flex items-start gap-2 max-w-[88%] ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {msg.sender === 'assistant' ? (
                <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Bot className="w-3.5 h-3.5" />
                </div>
              ) : (
                <div className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                  <User className="w-3.5 h-3.5" />
                </div>
              )}

              <div
                className={`p-3.5 rounded-2xl leading-relaxed whitespace-pre-line shadow-2xs ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-rose-500 to-pink-600 text-white font-medium'
                    : 'bg-white text-slate-800 border border-slate-200/80'
                }`}
              >
                {msg.text}

                {/* Suggested Section Deep-Link */}
                {msg.suggestedAction && (
                  <div className="mt-2.5 pt-2 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => handleActionClick(msg.suggestedAction!.sectionId)}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold text-rose-600 hover:text-rose-700 hover:underline transition-colors cursor-pointer"
                    >
                      <span>{msg.suggestedAction.label}</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Related Topic Buttons */}
            {msg.relatedTopics && msg.relatedTopics.length > 0 && (
              <div className="mt-2 pl-8 flex flex-wrap gap-1.5">
                {msg.relatedTopics.map((topic, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSend(topic)}
                    className="text-[10px] font-medium text-slate-700 hover:text-rose-600 bg-white hover:bg-rose-50 border border-slate-200 px-2.5 py-1 rounded-lg transition-colors text-left shadow-2xs cursor-pointer"
                  >
                    {topic}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-slate-500 text-xs pl-8">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce" />
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce [animation-delay:0.15s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-bounce [animation-delay:0.3s]" />
            <span className="text-[11px] font-mono text-slate-400">Searching local knowledge base...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Field */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-white border-t border-slate-100 flex items-center gap-2"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about projects, skills, contact..."
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-2.5 bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl transition-all shadow-xs cursor-pointer"
          aria-label="Send query"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
