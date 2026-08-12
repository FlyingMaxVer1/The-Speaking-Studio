import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Star, Heart, Users, Handshake, CheckCircle2, MessageCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { FREE_MENTORSHIP_FORM_URL, JOIN_TEAM_FORM_URL, WHATSAPP_COMMUNITY_URL } from '@/data/forms';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Join The Speaking Studio community of 430+ students — Register for free mentorship sessions or join our team.',
};

const paths = [
  {
    id: 'student',
    icon: GraduationCap,
    title: 'Register for Free Mentorship',
    description: 'Enroll in our free mentoring sessions and start your journey to becoming a confident communicator and leader.',
    benefits: [
      'Access to interactive skill development sessions',
      'One-on-one mentorship opportunities',
      'Community membership with 430+ peers',
      'Certificates upon completion',
      'Training in public speaking, debate, MUN & leadership',
    ],
    cta: 'Register for Free Class',
    href: FREE_MENTORSHIP_FORM_URL,
    color: '#5C6B3A',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Join the Team',
    description: 'Become a core team member or mentor — drive our mission, build programs, and lead our community.',
    benefits: [
      'Leadership experience in a recognized youth organisation',
      'Work alongside passionate student leaders',
      'Build real-world skills in education and management',
      'Co-create programs, workshops, and competitions',
      'Earn recognition and team certificates',
    ],
    cta: 'Apply to Join Team',
    href: JOIN_TEAM_FORM_URL,
    color: '#C49A6C',
  },
  {
    id: 'whatsapp',
    icon: MessageCircle,
    title: 'Join WhatsApp Community',
    description: 'Connect directly with 430+ student leaders and receive real-time updates for workshops and mentoring.',
    benefits: [
      'Direct updates on free mentorship schedules',
      'Networking with peer debaters and MUN delegates',
      'Instant access to resources and event announcements',
      'Interactive discussions and collaboration',
      '100% free to join and participate',
    ],
    cta: 'Join WhatsApp Group',
    href: WHATSAPP_COMMUNITY_URL,
    color: '#25D366',
  },
  {
    id: 'partner',
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Collaborate with The Speaking Studio as a school, college, brand, or educational organisation.',
    benefits: [
      'Co-branded events and workshops',
      'Joint outreach and community building',
      'Access to our student network of 430+ members',
      'Shared brand visibility and impact',
      'Flexible partnership models available',
    ],
    cta: 'Explore Partnership',
    href: '/contact',
    color: '#8B6914',
  },
];

export default function JoinPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C49A6C] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Find Your Place at<br />
            <span className="text-[#C49A6C]">The Speaking Studio</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Register for free mentorship sessions, apply to join our passionate team, or join 430+ students on WhatsApp.
          </p>
        </div>
      </section>

      {/* Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="How Would You Like to Join?"
            description="Select an option below to get started with the official registration form or community group."
            className="mb-14"
          />

          <div className="space-y-6">
            {paths.map((path, i) => (
              <div
                key={path.id}
                className={`rounded-3xl overflow-hidden border border-stone-100 ${i % 2 === 0 ? 'bg-white' : 'bg-[#F5F0E8]'} hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="p-8 lg:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                    {/* Left */}
                    <div className="lg:col-span-1">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                        style={{ backgroundColor: path.color + '15' }}
                      >
                        <path.icon size={28} style={{ color: path.color }} />
                      </div>
                      <h3 className="font-display font-bold text-[#1C1C1C] text-2xl mb-3">{path.title}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-6">{path.description}</p>
                      {path.href.startsWith('http') ? (
                        <a
                          href={path.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 group"
                          style={{ backgroundColor: path.color }}
                        >
                          {path.cta}
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </a>
                      ) : (
                        <Link
                          href={path.href}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 group"
                          style={{ backgroundColor: path.color }}
                        >
                          {path.cta}
                          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      )}
                    </div>

                    {/* Right: Benefits */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {path.benefits.map((benefit) => (
                        <div key={benefit} className="flex items-start gap-3 bg-white/70 rounded-xl p-3.5 border border-stone-100">
                          <CheckCircle2 size={16} style={{ color: path.color }} className="flex-shrink-0 mt-0.5" />
                          <p className="text-stone-700 text-sm">{benefit}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="py-16 bg-[#F5F0E8] text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-[#1C1C1C] mb-4">Not Sure Where to Start?</h2>
          <p className="text-stone-600 text-sm mb-6">
            Reach out to us and we&apos;ll help you find the perfect way to get involved based on your interests, skills, and availability.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-colors"
          >
            Talk to Us <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
