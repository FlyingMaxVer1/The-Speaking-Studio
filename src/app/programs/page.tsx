import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import ProgramCard from '@/components/sections/ProgramCard';
import CTASection from '@/components/sections/CTASection';
import { programs } from '@/data/programs';

export const metadata: Metadata = {
  title: 'Programs',
  description: 'Explore all 9 skill development programs at The Speaking Studio — Public Speaking, MUN, Debate, Leadership, Communication, and more.',
};

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C49A6C] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#5C6B3A] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#C49A6C]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5C6B3A] text-xs font-semibold tracking-widest uppercase">Comprehensive Skill Development</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Our <span className="gradient-text">Programs</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Nine comprehensive programs designed to develop every dimension of a student&apos;s communication, leadership, and personal growth journey.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Start Learning"
            title="Not Sure Which Program to Choose?"
            description="Tell us your goals and we'll help you find the perfect program. Or register for a free orientation session to explore everything we offer."
            primaryCta={{ label: 'Register for Orientation', href: '/forms' }}
            secondaryCta={{ label: 'Contact Us', href: '/contact' }}
            variant="olive"
          />
        </div>
      </section>
    </>
  );
}
