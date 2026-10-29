'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, MessageSquare, Mic, Sparkles, ShieldCheck } from 'lucide-react';
import {
  CHAMPARENA_TSSDS_MUN_URL,
  CHAMPARENA_TAKKAR_DEBATE_URL,
  CHAMPARENA_DIL_KI_BAAT_URL,
} from '@/data/tssds';

interface EventSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

const eventOptions = [
  {
    id: 'mun',
    name: 'TSSDS 2027 – MUN',
    category: 'Model United Nations',
    tagline: 'Draft resolutions, negotiate treaties, and defend foreign policy.',
    fee: '₹299',
    icon: Globe,
    color: '#5C6B3A',
    bgTint: 'bg-[#5C6B3A]/10',
    borderTint: 'border-[#5C6B3A]/30',
    url: CHAMPARENA_TSSDS_MUN_URL,
    badge: 'Flagship Summit',
  },
  {
    id: 'debate',
    name: 'Takkar – Debate Championship',
    category: 'Competitive Debate',
    tagline: 'Structured, high-tempo debate rounds under rigorous cross-examination.',
    fee: '₹249',
    icon: MessageSquare,
    color: '#8B6914',
    bgTint: 'bg-[#8B6914]/10',
    borderTint: 'border-[#8B6914]/30',
    url: CHAMPARENA_TAKKAR_DEBATE_URL,
    badge: 'National Debate',
  },
  {
    id: 'public-speaking',
    name: 'Dil Ki Baat – Public Speaking',
    category: 'Oratory & Influence',
    tagline: 'Command the room with rhetorical precision and persuasive storytelling.',
    fee: '₹249',
    icon: Mic,
    color: '#C49A6C',
    bgTint: 'bg-[#C49A6C]/10',
    borderTint: 'border-[#C49A6C]/30',
    url: CHAMPARENA_DIL_KI_BAAT_URL,
    badge: 'Oratory Championship',
  },
];

export default function EventSelectModal({
  isOpen,
  onClose,
  title = 'Select Your Championship Track',
  subtitle = 'Official registrations and ticket bookings are powered by ChampArena.',
}: EventSelectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/65 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 26, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="event-selector-title"
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden z-10 my-auto text-[#1C1C1C]"
          >
            {/* Top decorative gradient bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#5C6B3A] via-[#C49A6C] to-[#5C6B3A]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Close championship selector"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Badge & Title */}
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FAFAF7] text-[#5C6B3A] border border-[#5C6B3A]/25 mb-3">
                  <ShieldCheck size={13} className="text-[#5C6B3A]" />
                  <span>Official Ticketing Partner: ChampArena</span>
                </div>
                <h3
                  id="event-selector-title"
                  className="font-display font-bold text-2xl sm:text-3xl text-[#1C1C1C] tracking-tight"
                >
                  {title}
                </h3>
                <p className="text-stone-600 text-sm mt-1 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {/* Event Cards */}
              <div className="space-y-3.5">
                {eventOptions.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <a
                      key={opt.id}
                      href={opt.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#FAFAF7] border border-stone-200/90 hover:border-[#C49A6C] hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-4 min-w-0 pr-3">
                        <div
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${opt.bgTint} group-hover:scale-105 transition-transform`}
                          style={{ color: opt.color }}
                        >
                          <Icon size={24} />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-display font-bold text-base text-[#1C1C1C] group-hover:text-[#5C6B3A] transition-colors truncate">
                              {opt.name}
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white border border-stone-200 text-stone-600">
                              {opt.badge}
                            </span>
                          </div>
                          <p className="text-stone-500 text-xs mt-1 truncate">
                            {opt.tagline}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <span className="font-display font-bold text-sm sm:text-base text-[#1C1C1C]">
                          {opt.fee}
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-500 group-hover:bg-[#5C6B3A] group-hover:text-white group-hover:border-[#5C6B3A] transition-all">
                          <ExternalLink size={14} />
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Security & Support Footer */}
              <div className="pt-2 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
                <span className="inline-flex items-center gap-1.5">
                  <Sparkles size={13} className="text-[#C49A6C]" />
                  Instant registration & verified digital pass on ChampArena
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="font-medium text-stone-600 hover:text-stone-900 underline underline-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
