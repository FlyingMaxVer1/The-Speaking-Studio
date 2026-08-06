import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/sections/TeamCard';
import CTASection from '@/components/sections/CTASection';
import { team } from '@/data/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the passionate student leaders behind The Speaking Studio — the team driving our mission to empower tomorrow\'s leaders.',
};

export default function TeamPage() {
  const founders = team.filter((m) => m.isFounder);
  const leads = team.filter((m) => m.isLead && !m.isFounder);
  const mentors = team.filter((m) => !m.isFounder && !m.isLead);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Meet the <span className="text-[#C49A6C]">Team</span>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The passionate student leaders who are driving The Speaking Studio forward — one session, one student, one transformation at a time.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Leadership" title="Founders & Directors" className="mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl mx-auto">
            {founders.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      {leads.length > 0 && (
        <section className="py-20 bg-[#F5F0E8]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Core Team" title="Department Leads" className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {leads.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mentors */}
      {mentors.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="Expert Guidance" title="Program Mentors" className="mb-12" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mentors.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join the team CTA */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Join Our Team"
            title="Want to Be Part of the Team?"
            description="We are always looking for passionate, dedicated students to join The Speaking Studio team as coordinators, mentors, and content creators."
            primaryCta={{ label: 'Apply to Join', href: '/forms' }}
            secondaryCta={{ label: 'Learn More', href: '/join' }}
          />
        </div>
      </section>
    </>
  );
}
