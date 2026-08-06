'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={cn(
        'max-w-3xl',
        centered ? 'mx-auto text-center' : '',
        className
      )}
    >
      {eyebrow && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="h-px w-8 bg-[#C49A6C]" />
          <span
            className={cn(
              'text-xs font-semibold tracking-widest uppercase',
              light ? 'text-[#C49A6C]' : 'text-[#C49A6C]'
            )}
          >
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-[#C49A6C]" />
        </div>
      )}
      <h2
        className={cn(
          'font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4',
          light ? 'text-white' : 'text-[#1C1C1C]'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'text-base sm:text-lg leading-relaxed',
            light ? 'text-white/70' : 'text-stone-500'
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
