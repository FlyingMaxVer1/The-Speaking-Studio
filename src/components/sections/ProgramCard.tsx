'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { type Program } from '@/data/programs';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

interface ProgramCardProps {
  program: Program;
  index?: number;
  compact?: boolean;
}

export default function ProgramCard({ program, index = 0, compact = false }: ProgramCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link href={`/programs/${program.slug}`}>
        <div
          className={cn(
            'group relative bg-white rounded-2xl border border-stone-100 overflow-hidden',
            'hover:shadow-xl hover:-translate-y-1 transition-all duration-300',
            compact ? 'p-5' : 'p-6 lg:p-7'
          )}
        >
          {/* Color accent top bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: `linear-gradient(90deg, ${program.color}, ${program.color}80)` }}
          />

          {/* Icon */}
          <div
            className={cn(
              'rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110',
              compact ? 'w-10 h-10' : 'w-12 h-12'
            )}
            style={{ backgroundColor: program.color + '15' }}
          >
            <DynamicIcon
              name={program.icon}
              size={compact ? 20 : 24}
              style={{ color: program.color }}
            />
          </div>

          {/* Content */}
          <h3
            className={cn(
              'font-display font-bold text-[#1C1C1C] mb-2 group-hover:text-[#5C6B3A] transition-colors',
              compact ? 'text-base' : 'text-lg'
            )}
          >
            {program.title}
          </h3>
          <p className={cn('text-stone-500 leading-relaxed', compact ? 'text-xs line-clamp-2' : 'text-sm mb-5')}>
            {program.shortDescription}
          </p>

          {!compact && (
            <>
              {/* Skills preview */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {program.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-600"
                  >
                    {skill}
                  </span>
                ))}
                {program.skills.length > 3 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-400">
                    +{program.skills.length - 3}
                  </span>
                )}
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-1 text-sm font-semibold transition-all duration-200 group-hover:gap-2"
                style={{ color: program.color }}
              >
                Learn More
                <ArrowRight size={14} />
              </div>
            </>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
