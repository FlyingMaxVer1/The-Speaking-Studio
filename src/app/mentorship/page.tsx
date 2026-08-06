import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Users, Star, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Mentorship Program',
  description: 'Apply for The Speaking Studio mentorship program — personalised one-on-one guidance to help you develop communication, leadership, and life skills.',
};

const mentorBenefits = [
  'Give back to the student community',
  'Develop your coaching and leadership skills',
  'Build your professional network',
  'Gain recognition and a mentorship certificate',
  'Be featured on The Speaking Studio platforms',
  'Make a real, measurable impact on a student\'s life',
];

const studentBenefits = [
  'One-on-one personalised guidance sessions',
  'Tailored feedback and skill development plan',
  'Access to mentor\'s expertise and network',
  'Career and academic guidance',
  'Accountability partner for your growth journey',
  'Priority access to events and programs',
];

const processSteps = [
  { step: '01', title: 'Apply', description: 'Fill out the mentorship registration form with your goals, interests, and preferred program areas.' },
  { step: '02', title: 'Review', description: 'Our team reviews your application and matches you with a suitable mentor based on your goals.' },
  { step: '03', title: 'Introduction', description: 'Meet your mentor in an introductory session to establish goals, schedule, and expectations.' },
  { step: '04', title: 'Begin', description: 'Start your mentorship journey with regular one-on-one sessions, feedback, and milestone tracking.' },
  { step: '05', title: 'Graduate', description: 'Complete your mentorship cohort, receive your certificate, and become part of our alumni network.' },
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
                <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">One-on-One Guidance</span>
              </div>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Mentorship <span className="text-[#C49A6C]">Program</span>
              </h1>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Get paired with an experienced mentor for personalised, one-on-one guidance in public speaking, MUN, debate, leadership, or any of our program areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/forms"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-all duration-200 shadow-lg hover:shadow-xl group"
                >
                  Apply for Mentorship
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/30 text-white rounded-xl font-semibold text-sm hover:bg-white/10 transition-all duration-200"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Users, label: 'Mentees Supported', value: '100+' },
                { icon: Star, label: 'Mentor Rating', value: '4.9/5' },
                { icon: Clock, label: 'Session Duration', value: '60 min' },
                { icon: CheckCircle2, label: 'Completion Rate', value: '95%' },
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
            description="Our Mentorship Program is a structured, personalised learning experience that pairs students with experienced mentors for guided skill development."
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
            title="Application Process"
            description="Getting started with mentorship is simple. Here's how the process works."
            className="mb-14"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {processSteps.map((step, i) => (
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
            eyebrow="Apply Now"
            title="Ready to Start Your Mentorship Journey?"
            description="Applications are reviewed on a rolling basis. Apply today to secure your spot in the next mentorship cohort."
            primaryCta={{ label: 'Apply for Mentorship', href: '/forms' }}
            secondaryCta={{ label: 'Learn More', href: '/contact' }}
          />
        </div>
      </section>
    </>
  );
}
