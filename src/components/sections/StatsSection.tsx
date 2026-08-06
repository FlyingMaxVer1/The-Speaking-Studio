'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import { achievements } from '@/data/achievements';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

export default function StatsSection({ light = false }: { light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
      {achievements.map((stat, i) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={cn(
            'rounded-2xl p-5 text-center group hover:scale-105 transition-transform duration-300',
            light
              ? 'bg-white/10 border border-white/20'
              : 'bg-white border border-stone-100 shadow-sm hover:shadow-md'
          )}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3"
            style={{ backgroundColor: stat.color + '20' }}
          >
            <DynamicIcon
              name={stat.icon}
              size={20}
              style={{ color: stat.color }}
            />
          </div>
          <div
            className={cn(
              'text-2xl font-display font-bold mb-1',
              light ? 'text-white' : 'text-[#1C1C1C]'
            )}
          >
            <AnimatedCounter
              value={stat.numericValue}
              suffix={stat.suffix}
            />
          </div>
          <div
            className={cn(
              'text-xs font-medium leading-tight',
              light ? 'text-white/70' : 'text-stone-500'
            )}
          >
            {stat.title}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
