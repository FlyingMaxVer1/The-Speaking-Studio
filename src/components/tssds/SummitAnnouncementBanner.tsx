'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, ArrowRight, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import { TSSDS_REGISTRATION_FORM_URL } from '@/data/tssds';

const BANNER_STORAGE_KEY = 'tssds_banner_dismissed_v1';

export default function SummitAnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem(BANNER_STORAGE_KEY);
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem(BANNER_STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="TSSDS 2027 Summit Announcement"
      className="relative z-40 bg-gradient-to-r from-[#404B28] via-[#5C6B3A] to-[#404B28] text-white py-2 px-3 sm:px-6 shadow-sm border-b border-white/10"
    >
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Left: Summit Badge & Title */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1 bg-[#C49A6C] text-[#1C1C1C] px-2 py-0.5 rounded-full font-bold text-[10px] tracking-wide uppercase">
            <Sparkles size={10} /> TSSDS 2027
          </span>
          <span className="font-medium hidden md:inline text-white/90">
            Diplomacy Summit Pre-Registrations Open • June 2027
          </span>
        </div>

        {/* Center: Live Mini Countdown */}
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-white/80 hidden sm:inline">Kickoff in:</span>
          <div className="bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm border border-white/10 text-white">
            <CountdownTimer variant="compact" />
          </div>
        </div>

        {/* Right: Quick Action CTAs */}
        <div className="flex items-center gap-2">
          <Link
            href="/tssds"
            className="font-semibold text-white underline underline-offset-2 hover:text-[#D4B48A] transition-colors"
          >
            Details
          </Link>
          <a
            href={TSSDS_REGISTRATION_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 bg-[#C49A6C] hover:bg-[#D4B48A] text-[#1C1C1C] px-3 py-1 rounded-full font-bold text-[11px] transition-all shadow-sm group"
          >
            <span>Pre-Register</span>
            <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <button
            onClick={handleDismiss}
            className="p-1 rounded-md text-white/60 hover:text-white hover:bg-white/10 transition-colors ml-1"
            aria-label="Dismiss banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </aside>
  );
}
