'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { type FormItem } from '@/data/forms';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

interface FormCardProps {
  form: FormItem;
  index?: number;
}

export default function FormCard({ form, index = 0 }: FormCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: form.color + '15' }}
      >
        <DynamicIcon name={form.icon} size={24} style={{ color: form.color }} />
      </div>

      {/* Content */}
      <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2">{form.title}</h3>
      <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-5">{form.description}</p>

      {/* CTA */}
      {form.isComingSoon ? (
        <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 text-stone-400 text-sm font-semibold cursor-not-allowed">
          Coming Soon
        </div>
      ) : (
        <a
          href={form.formUrl || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 group"
          style={{ backgroundColor: form.color }}
        >
          {form.ctaText}
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      )}
    </motion.div>
  );
}
