import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/sections/CTASection';
import { milestones } from '@/data/achievements';

export const metadata: Metadata = {
  title: 'Achievements',
  description: 'Explore the milestones, achievements, and impact of The Speaking Studio since its founding.',
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
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Every number tells a story. Every milestone represents a student whose life we touched.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="By the Numbers"
            title="Our Impact in Numbers"
            description="From our first session to today — a snapshot of the difference we've made."
            className="mb-14"
          />
          <StatsSection />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones & Growth"
            description="From a small student initiative to a thriving educational organisation."
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
            primaryCta={{ label: 'Join the Community', href: '/join' }}
            secondaryCta={{ label: 'View Programs', href: '/programs' }}
          />
        </div>
      </section>
    </>
  );
}
