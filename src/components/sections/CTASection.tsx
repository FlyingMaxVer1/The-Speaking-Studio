'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  variant?: 'olive' | 'bronze' | 'light';
}

export default function CTASection({
  eyebrow = 'Get Started',
  title,
  description,
  primaryCta = { label: 'Join Us Now', href: '/join' },
  secondaryCta = { label: 'Learn More', href: '/about' },
  variant = 'olive',
}: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const bgClass =
    variant === 'olive'
      ? 'bg-[#5C6B3A]'
      : variant === 'bronze'
      ? 'bg-[#C49A6C]'
      : 'bg-[#F5F0E8]';

  const isLight = variant === 'light';

  return (
    <section
      className={cn(
        'relative overflow-hidden rounded-3xl',
        bgClass
      )}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 py-16 lg:py-20 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 mb-5">
              <span className={cn('h-px w-8', isLight ? 'bg-[#C49A6C]' : 'bg-white/50')} />
              <span className={cn('text-xs font-semibold tracking-widest uppercase', isLight ? 'text-[#C49A6C]' : 'text-white/70')}>
                {eyebrow}
              </span>
              <span className={cn('h-px w-8', isLight ? 'bg-[#C49A6C]' : 'bg-white/50')} />
            </div>
          )}

          <h2
            className={cn(
              'font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5 max-w-3xl mx-auto',
              isLight ? 'text-[#1C1C1C]' : 'text-white'
            )}
          >
            {title}
          </h2>

          {description && (
            <p className={cn('text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed', isLight ? 'text-stone-600' : 'text-white/75')}>
              {description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {primaryCta.href.startsWith('http') ? (
              <a
                href={primaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg group',
                  isLight
                    ? 'bg-[#5C6B3A] text-white hover:bg-[#404B28]'
                    : 'bg-white text-[#5C6B3A] hover:bg-stone-50'
                )}
              >
                {primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <Link
                href={primaryCta.href}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg group',
                  isLight
                    ? 'bg-[#5C6B3A] text-white hover:bg-[#404B28]'
                    : 'bg-white text-[#5C6B3A] hover:bg-stone-50'
                )}
              >
                {primaryCta.label}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            )}

            {secondaryCta.href.startsWith('http') ? (
              <a
                href={secondaryCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border',
                  isLight
                    ? 'border-[#5C6B3A] text-[#5C6B3A] hover:bg-[#5C6B3A] hover:text-white'
                    : 'border-white/30 text-white hover:bg-white/10'
                )}
              >
                {secondaryCta.label}
              </a>
            ) : (
              <Link
                href={secondaryCta.href}
                className={cn(
                  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 border',
                  isLight
                    ? 'border-[#5C6B3A] text-[#5C6B3A] hover:bg-[#5C6B3A] hover:text-white'
                    : 'border-white/30 text-white hover:bg-white/10'
                )}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
