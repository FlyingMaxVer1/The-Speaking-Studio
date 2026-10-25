'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Trophy, Sparkles, Globe, ExternalLink } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { TSSDS_REGISTRATION_FORM_URL } from '@/data/tssds';

const STORAGE_KEY = 'tssds_summit_modal_dismissed_v1';

export default function SummitPopupModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if dismissed in this browser session
    try {
      const dismissed = sessionStorage.getItem(STORAGE_KEY);
      if (!dismissed) {
        // Open with slight delay for silky smooth page entrance
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 900);
        return () => clearTimeout(timer);
      }
    } catch {
      // Storage unavailable fallback
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
  };

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
            onClick={handleDismiss}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-stone-200/80 overflow-hidden z-10 my-auto"
          >
            {/* Top decorative accent ribbon */}
            <div className="h-2 w-full bg-gradient-to-r from-[#5C6B3A] via-[#C49A6C] to-[#5C6B3A]" />

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="absolute top-4 right-4 p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
              aria-label="Close summit announcement"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8 space-y-6">
              {/* Header Badge */}
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#5C6B3A]/10 text-[#5C6B3A] border border-[#5C6B3A]/20">
                  <Globe size={12} />
                  Pan-India Online Summit • June 2027
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#C49A6C]">
                  <Sparkles size={12} /> Pre-Registrations Open
                </span>
              </div>

              {/* Title & Hook */}
              <div>
                <h2
                  id="modal-title"
                  className="font-display font-bold text-2xl sm:text-3xl text-[#1C1C1C] leading-snug tracking-tight"
                >
                  The Speaking Studio Diplomacy Summit 2027
                </h2>
                <p className="text-stone-600 text-sm sm:text-base mt-2 leading-relaxed">
                  Three national championships. Two summer weekends. Real foreign policy simulations, high-tempo debate motions, and the sharpest orators across India.
                </p>
              </div>

              {/* Countdown Unit */}
              <div className="bg-stone-50/80 rounded-2xl p-4 border border-stone-200/60">
                <div className="text-[11px] font-bold tracking-wider text-stone-500 uppercase mb-2 text-center">
                  Countdown to Summit Kickoff
                </div>
                <CountdownTimer variant="modal" />
              </div>

              {/* Fast highlight pills */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 rounded-xl bg-[#F5F0E8] border border-stone-200">
                  <div className="font-bold text-[#5C6B3A]">MUN</div>
                  <div className="text-stone-500 text-[10px]">Committees & Blocs</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F5F0E8] border border-stone-200">
                  <div className="font-bold text-[#C49A6C]">Debate</div>
                  <div className="text-stone-500 text-[10px]">National Motions</div>
                </div>
                <div className="p-2 rounded-xl bg-[#F5F0E8] border border-stone-200">
                  <div className="font-bold text-[#8B6914]">Public Speaking</div>
                  <div className="text-stone-500 text-[10px]">Oratory Honors</div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3 pt-1">
                <a
                  href={TSSDS_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-[#5C6B3A] text-white font-semibold text-sm hover:bg-[#404B28] shadow-md hover:shadow-lg transition-all duration-200 group"
                >
                  <span>Pre-Register on Official Google Form</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <div className="flex items-center justify-between text-xs pt-1 px-1">
                  <Link
                    href="/tssds"
                    onClick={handleDismiss}
                    className="inline-flex items-center gap-1 font-semibold text-[#5C6B3A] hover:text-[#404B28] underline underline-offset-4"
                  >
                    View Full Details, Fees & Passes <ArrowRight size={14} />
                  </Link>
                  <button
                    onClick={handleDismiss}
                    className="text-stone-400 hover:text-stone-600 transition-colors"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
