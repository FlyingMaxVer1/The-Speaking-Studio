'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { type FAQ } from '@/data/faqs';
import { cn } from '@/lib/utils';

interface FAQAccordionProps {
  faqs: FAQ[];
  showCategory?: boolean;
}

export default function FAQAccordion({ faqs, showCategory = false }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          className="bg-white border border-stone-100 rounded-2xl overflow-hidden hover:border-[#C49A6C]/30 transition-colors duration-200"
        >
          <button
            onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            aria-expanded={openId === faq.id}
          >
            <div className="flex-1 pr-4">
              {showCategory && (
                <span className="text-[#C49A6C] text-xs font-semibold uppercase tracking-wide mb-1 block">
                  {faq.category}
                </span>
              )}
              <span className="font-display font-semibold text-[#1C1C1C] text-sm sm:text-base">
                {faq.question}
              </span>
            </div>
            <ChevronDown
              size={20}
              className={cn(
                'text-stone-400 flex-shrink-0 transition-transform duration-300',
                openId === faq.id ? 'rotate-180 text-[#5C6B3A]' : ''
              )}
            />
          </button>

          <AnimatePresence initial={false}>
            {openId === faq.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-stone-100 mb-4" />
                  <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
