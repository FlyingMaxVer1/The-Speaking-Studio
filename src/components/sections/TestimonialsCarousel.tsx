'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { testimonials, type Testimonial } from '@/data/testimonials';
import { cn } from '@/lib/utils';

interface TestimonialsCarouselProps {
  filter?: 'student' | 'parent' | 'mentor';
  showFilter?: boolean;
}

export default function TestimonialsCarousel({
  filter,
  showFilter = false,
}: TestimonialsCarouselProps) {
  const [activeFilter, setActiveFilter] = useState<string>(filter || 'all');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const filtered =
    activeFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  const current = filtered[index] as Testimonial | undefined;

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + filtered.length) % filtered.length);
  };
  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % filtered.length);
  };

  const handleFilter = (f: string) => {
    setActiveFilter(f);
    setIndex(0);
  };

  if (!current) return null;

  return (
    <div className="space-y-8">
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-3">
          {['all', 'student', 'parent', 'mentor'].map((f) => (
            <button
              key={f}
              onClick={() => handleFilter(f)}
              className={cn(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 capitalize',
                activeFilter === f
                  ? 'bg-[#5C6B3A] text-white shadow-sm'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              )}
            >
              {f === 'all' ? 'All' : `${f.charAt(0).toUpperCase() + f.slice(1)} Testimonials`}
            </button>
          ))}
        </div>
      )}

      <div className="relative max-w-3xl mx-auto">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={`${activeFilter}-${index}`}
            custom={direction}
            initial={{ opacity: 0, x: direction * 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -60 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg border border-stone-100 relative"
          >
            {/* Quote icon */}
            <div className="absolute top-6 right-8 text-[#C49A6C]/20">
              <Quote size={60} fill="currentColor" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} size={16} className="text-[#C49A6C] fill-[#C49A6C]" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-[#1C1C1C] text-base lg:text-lg leading-relaxed font-medium relative z-10 mb-8">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5C6B3A] to-[#C49A6C] flex items-center justify-center text-white font-display font-bold text-lg">
                {current.name.charAt(0)}
              </div>
              <div>
                <div className="font-semibold text-[#1C1C1C] font-display">{current.name}</div>
                <div className="text-stone-500 text-sm">{current.role}</div>
                {current.program && (
                  <div className="text-[#C49A6C] text-xs font-medium mt-0.5">{current.program}</div>
                )}
              </div>
              <div className="ml-auto">
                <span
                  className={cn(
                    'px-3 py-1 rounded-full text-xs font-medium capitalize',
                    current.category === 'student' ? 'bg-[#5C6B3A]/10 text-[#5C6B3A]' :
                    current.category === 'parent' ? 'bg-[#C49A6C]/10 text-[#C49A6C]' :
                    'bg-stone-100 text-stone-600'
                  )}
                >
                  {current.category}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-200 shadow-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                className={cn(
                  'rounded-full transition-all duration-200',
                  i === index
                    ? 'w-6 h-2 bg-[#5C6B3A]'
                    : 'w-2 h-2 bg-stone-300 hover:bg-stone-400'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-200 shadow-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
