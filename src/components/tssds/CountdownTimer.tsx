'use client';

import { useState, useEffect } from 'react';
import { TSSDS_TARGET_DATE } from '@/data/tssds';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculateTimeLeft(targetIso: string): TimeLeft {
  const difference = +new Date(targetIso) - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isComplete: false,
  };
}

interface CountdownTimerProps {
  variant?: 'hero' | 'compact' | 'modal';
  className?: string;
}

export default function CountdownTimer({
  variant = 'hero',
  className = '',
}: CountdownTimerProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(calculateTimeLeft(TSSDS_TARGET_DATE));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(TSSDS_TARGET_DATE));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDigit = (num: number) => String(num).padStart(2, '0');

  // SSR hydration placeholder
  if (!mounted) {
    if (variant === 'compact') {
      return (
        <div className={`inline-flex items-center gap-1.5 font-mono text-xs ${className}`}>
          <span className="bg-white/90 text-stone-900 px-1.5 py-0.5 rounded font-bold tabular-nums">--d</span>
          <span>:</span>
          <span className="bg-white/90 text-stone-900 px-1.5 py-0.5 rounded font-bold tabular-nums">--h</span>
          <span>:</span>
          <span className="bg-white/90 text-stone-900 px-1.5 py-0.5 rounded font-bold tabular-nums">--m</span>
          <span>:</span>
          <span className="bg-[#C49A6C] text-[#1C1C1C] px-1.5 py-0.5 rounded font-bold tabular-nums">--s</span>
        </div>
      );
    }

    return (
      <div className={`grid grid-cols-4 gap-2 sm:gap-4 max-w-lg mx-auto ${className}`}>
        {['DAYS', 'HOURS', 'MINS', 'SECS'].map((label) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-2xl bg-white/90 border border-stone-200/80 shadow-sm"
          >
            <span className="font-display font-bold text-2xl sm:text-4xl text-[#1C1C1C] tabular-nums">
              --
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-stone-500 mt-1">
              {label}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-1 font-mono text-xs sm:text-sm font-bold text-white ${className}`}>
        <span className="bg-white/95 text-stone-900 px-1.5 py-0.5 rounded shadow-xs tabular-nums">
          {timeLeft.days}d
        </span>
        <span className="text-white/70">:</span>
        <span className="bg-white/95 text-stone-900 px-1.5 py-0.5 rounded shadow-xs tabular-nums">
          {formatDigit(timeLeft.hours)}h
        </span>
        <span className="text-white/70">:</span>
        <span className="bg-white/95 text-stone-900 px-1.5 py-0.5 rounded shadow-xs tabular-nums">
          {formatDigit(timeLeft.minutes)}m
        </span>
        <span className="text-white/70">:</span>
        <span className="bg-[#C49A6C] text-[#1C1C1C] px-1.5 py-0.5 rounded shadow-xs tabular-nums">
          {formatDigit(timeLeft.seconds)}s
        </span>
      </div>
    );
  }

  if (variant === 'modal') {
    return (
      <div className={`grid grid-cols-4 gap-2 text-center ${className}`}>
        {[
          { label: 'Days', val: timeLeft.days },
          { label: 'Hours', val: formatDigit(timeLeft.hours) },
          { label: 'Mins', val: formatDigit(timeLeft.minutes) },
          { label: 'Secs', val: formatDigit(timeLeft.seconds) },
        ].map((item, idx) => (
          <div
            key={item.label}
            className={`p-2.5 sm:p-3 rounded-xl border ${
              idx === 3
                ? 'bg-[#5C6B3A]/10 border-[#5C6B3A]/30 text-[#5C6B3A]'
                : 'bg-stone-50 border-stone-200 text-[#1C1C1C]'
            }`}
          >
            <div className="font-display font-bold text-xl sm:text-2xl tabular-nums leading-none">
              {item.val}
            </div>
            <div className="text-[10px] font-medium text-stone-500 uppercase tracking-wider mt-1">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Hero default variant
  return (
    <div className={`max-w-xl mx-auto ${className}`}>
      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        {[
          { label: 'DAYS', val: timeLeft.days },
          { label: 'HOURS', val: formatDigit(timeLeft.hours) },
          { label: 'MINUTES', val: formatDigit(timeLeft.minutes) },
          { label: 'SECONDS', val: formatDigit(timeLeft.seconds) },
        ].map((slot, index) => (
          <div
            key={slot.label}
            className={`relative group overflow-hidden rounded-2xl p-3.5 sm:p-5 border transition-all duration-200 ${
              index === 3
                ? 'bg-[#FAFAF7] border-[#C49A6C]/50 shadow-md ring-1 ring-[#C49A6C]/30'
                : 'bg-white/95 border-stone-200 shadow-sm'
            }`}
          >
            <div className="font-display font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#1C1C1C] tabular-nums tracking-tight">
              {slot.val}
            </div>
            <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-stone-500 uppercase mt-1">
              {slot.label}
            </div>
            {index === 3 && (
              <div className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-[#5C6B3A] animate-pulse" />
            )}
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-stone-500 mt-3 font-medium">
        Tentative Kickoff: June 2027 • Spread across 2 weekends • Online Pan-India
      </p>
    </div>
  );
}
