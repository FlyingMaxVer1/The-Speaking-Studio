import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { milestones } from '@/data/achievements';
import { FREE_MENTORSHIP_FORM_URL, JOIN_TEAM_FORM_URL } from '@/data/forms';
import { Award, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'Explore the milestones, achievements, and impact of The Speaking Studio — winner of the 2026 Global Recognition Award.',
};

export default function AchievementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Our <span className="text-[#C49A6C]">Achievements</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Recognized with the 2026 Global Recognition Award, empowering 430+ students across public speaking, debate, MUN, and leadership.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading
            eyebrow="Key Recognition"
            title="Excellence & Impact"
            description="Our dedication to quality youth education has been recognized globally."
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FAFAF7] rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#C49A6C]/15 flex items-center justify-center text-[#C49A6C] mb-6">
                <Award size={32} />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-2xl mb-3">2026 Global Recognition Award</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                Awarded for outstanding contributions to youth empowerment, accessible communication training, and fostering the next generation of student leaders.
              </p>
            </div>

            <div className="bg-[#FAFAF7] rounded-3xl p-8 border border-stone-200 shadow-sm flex flex-col items-start justify-between">
              <div className="w-14 h-14 rounded-2xl bg-[#5C6B3A]/15 flex items-center justify-center text-[#5C6B3A] mb-6">
                <Users size={32} />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-2xl mb-3">430+ Active Learners</h3>
              <p className="text-stone-600 leading-relaxed text-sm">
                A rapidly growing student community receiving free mentoring sessions, interactive workshops, and leadership development across India and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones & Growth"
            description="From a small student initiative to a globally recognized educational platform."
            className="mb-14"
          />

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#5C6B3A] via-[#C49A6C] to-[#5C6B3A]" />

              <div className="space-y-8">
                {milestones.map((milestone, i) => (
                  <div key={milestone.id} className="flex gap-6 pl-0 relative">
                    {/* Circle on line */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center font-display font-bold text-sm text-white shadow-lg"
                        style={{ background: i % 2 === 0 ? '#5C6B3A' : '#C49A6C' }}
                      >
                        {milestone.year}
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl p-6 border border-stone-100 flex-1 hover:shadow-md transition-shadow">
                      <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2">{milestone.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Be Part of History"
            title="Help Us Write the Next Chapter"
            description="Our best achievements are still ahead of us — and they will be written by students like you."
            primaryCta={{ label: 'Register for Free Mentorship', href: FREE_MENTORSHIP_FORM_URL }}
            secondaryCta={{ label: 'Join the Team', href: JOIN_TEAM_FORM_URL }}
          />
        </div>
      </section>
    </>
  );
}

