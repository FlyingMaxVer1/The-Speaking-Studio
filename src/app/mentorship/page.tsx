import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Star, Clock, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { FREE_MENTORSHIP_FORM_URL, JOIN_TEAM_FORM_URL } from '@/data/forms';

export const metadata: Metadata = {
  title: 'Mentorship Program',
  description: 'Register for free mentorship sessions at The Speaking Studio — personalised guidance in public speaking, debate, MUN, and leadership.',
};

const mentorBenefits = [
  'Give back to the student community',
  'Develop your coaching and leadership skills',
  'Build your student network across India',
  'Gain recognition and team certificates',
  'Be featured on The Speaking Studio platforms',
  'Make a real, measurable impact on a student\'s life',
];

const studentBenefits = [
  'Interactive free mentorship sessions',
  'Tailored feedback and skill development',
  'Access to experienced mentors and debaters',
  'Leadership and communication guidance',
  'Accountability partner for your growth journey',
  'Direct entry into 430+ student community',
];

const processSteps = [
  { step: '01', title: 'Register', description: 'Fill out the free mentorship session form with your details and skill areas.' },
  { step: '02', title: 'Schedule', description: 'Receive your session schedule and join link directly via email and WhatsApp.' },
  { step: '03', title: 'Attend', description: 'Participate in live interactive mentoring sessions, practice speeches, and debate drills.' },
  { step: '04', title: 'Grow', description: 'Receive constructive feedback, build your confidence, and find your voice.' },
];

export default function MentorshipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C49A6C] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
                <Star size={14} className="text-[#C49A6C]" />
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">Free Student Sessions</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Mentorship <span className="text-[#C49A6C]">Sessions</span>
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Join our free interactive mentoring sessions in public speaking, MUN, debate, and leadership led by experienced mentors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={FREE_MENTORSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Register for Free Class
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href={JOIN_TEAM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Become a Mentor / Join Team
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Community Learners', value: '430+' },
                { icon: Star, label: 'Global Recognition', value: '2026 Award' },
                { icon: Clock, label: 'Session Type', value: 'Live Online' },
                { icon: CheckCircle2, label: 'Cost to Students', value: '100% Free' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 border border-white/20 rounded-2xl p-5 text-center">
                  <stat.icon size={24} className="text-[#C49A6C] mx-auto mb-2" />
                  <div className="font-display font-bold text-white text-xl mb-1">{stat.value}</div>
                  <div className="text-white/60 text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Program Overview"
            title="What is the Mentorship Program?"
            description="Our Mentorship Program is an accessible, youth-led initiative offering free mentoring sessions and guidance for students."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <div className="w-12 h-12 bg-[#5C6B3A]/10 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} className="text-[#5C6B3A]" />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-xl mb-4">For Students</h3>
              <div className="space-y-3">
                {studentBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#5C6B3A] flex-shrink-0 mt-0.5" />
                    <p className="text-stone-600 text-sm">{b}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
              <div className="w-12 h-12 bg-[#C49A6C]/10 rounded-xl flex items-center justify-center mb-6">
                <Star size={24} className="text-[#C49A6C]" />
              </div>
              <h3 className="font-display font-bold text-[#1C1C1C] text-xl mb-4">For Mentors</h3>
              <div className="space-y-3">
                {mentorBenefits.map((b) => (
                  <div key={b} className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#C49A6C] flex-shrink-0 mt-0.5" />
                    <p className="text-stone-600 text-sm">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="How It Works"
            title="How to Register"
            description="Joining our free mentorship sessions takes less than a minute."
            className="mb-14"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="flex items-start gap-5 bg-[#F5F0E8] rounded-2xl p-6 border border-stone-100"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5C6B3A] text-white flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-1">{step.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Register Now"
            title="Ready to Start Your Mentorship Journey?"
            description="Seats for free mentorship sessions are filled on a first-come, first-served basis. Register today!"
            primaryCta={{ label: 'Register for Free Mentorship', href: FREE_MENTORSHIP_FORM_URL }}
            secondaryCta={{ label: 'Join the Team', href: JOIN_TEAM_FORM_URL }}
          />
        </div>
      </section>
    </>
  );
}

