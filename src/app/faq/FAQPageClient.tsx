'use client';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import FAQAccordion from '@/components/sections/FAQAccordion';
import CTASection from '@/components/sections/CTASection';
import { faqs, faqCategories } from '@/data/faqs';
import { cn } from '@/lib/utils';

export default function FAQPageClient() {
  const [activeCategory, setActiveCategory] = useState('General');
  const filtered = faqs.filter((f) => f.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Answers to the most common questions about The Speaking Studio, our programs, mentorship, and community.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex flex-wrap gap-2 mb-10">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-[#5C6B3A] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <FAQAccordion faqs={filtered} />
        </div>
      </section>

      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Still Have Questions?"
            title="We're Here to Help"
            description="Can't find the answer you're looking for? Reach out directly and our team will get back to you within 24 hours."
            primaryCta={{ label: 'Contact Us', href: '/contact' }}
            secondaryCta={{ label: 'Email Us', href: 'mailto:thespeakingstudio25@gmail.com' }}
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
