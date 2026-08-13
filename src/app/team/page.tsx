import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TeamCard from '@/components/sections/TeamCard';
import CTASection from '@/components/sections/CTASection';
import { team } from '@/data/team';
import { Sparkles, Users, Award } from 'lucide-react';
import { JOIN_TEAM_FORM_URL, FREE_MENTORSHIP_FORM_URL } from '@/data/forms';

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet the passionate student leaders behind The Speaking Studio — the team driving our mission to empower tomorrow\'s leaders.',
};

export default function TeamPage() {
  const executiveBoard = team.filter((m) => m.isExecutive || m.isFounder);
  const departmentLeads = team.filter((m) => !m.isFounder && !m.isExecutive && m.isLead);
  const otherMembers = team.filter((m) => !m.isFounder && !m.isExecutive && !m.isLead);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#C49A6C] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles size={14} className="text-[#C49A6C]" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">The Leadership Behind Our Mission</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Meet the <span className="text-[#C49A6C]">Team</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The dedicated student leaders who are driving The Speaking Studio forward — empowering 430+ young voices, one session, one student, one transformation at a time.
          </p>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Executive Leadership"
            title="Founders & Executive Board"
            description="Leading the vision, strategy, and overall operations of The Speaking Studio."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {executiveBoard.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} featured={member.isFounder} />
            ))}
          </div>
        </div>
      </section>

      {/* Department Leads */}
      {departmentLeads.length > 0 && (
        <section className="py-20 bg-[#FAFAF7] border-t border-stone-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Department Leadership"
              title="Department Heads & Outreach"
              description="Spearheading specialized academic tracks, media campaigns, and community outreach."
              className="mb-14"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {departmentLeads.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Members / Mentors if added later */}
      {otherMembers.length > 0 && (
        <section className="py-20 bg-white border-t border-stone-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Mentorship Team"
              title="Program Mentors"
              description="Dedicated mentors guiding students across communication and public speaking sessions."
              className="mb-14"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {otherMembers.map((member, i) => (
                <TeamCard key={member.id} member={member} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Join the team CTA */}
      <section className="py-20 bg-[#F5F0E8] border-t border-stone-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Join Our Team"
            title="Want to Lead with Us?"
            description="We are always looking for passionate, dedicated students to join The Speaking Studio team as coordinators, mentors, and content creators."
            primaryCta={{ label: 'Apply to Join Team', href: JOIN_TEAM_FORM_URL }}
            secondaryCta={{ label: 'Explore Opportunities', href: '/join' }}
          />
        </div>
      </section>
    </>
  );
}

