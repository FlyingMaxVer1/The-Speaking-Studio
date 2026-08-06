import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Star, Heart, Users, Handshake, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export const metadata: Metadata = {
  title: 'Join Us',
  description: 'Join The Speaking Studio as a student, mentor, volunteer, team member, or partner. Find the right path for you.',
};

const paths = [
  {
    id: 'student',
    icon: GraduationCap,
    title: 'Become a Student',
    description: 'Enroll in our programs and start your journey to becoming a confident communicator and leader.',
    benefits: [
      'Access to all 9 skill development programs',
      'One-on-one mentorship opportunities',
      'Community membership with 1000+ peers',
      'Certificates upon completion',
      'Priority access to events and workshops',
    ],
    cta: 'Register as Student',
    href: '/forms',
    color: '#5C6B3A',
    bg: 'bg-[#5C6B3A]',
  },
  {
    id: 'mentor',
    icon: Star,
    title: 'Become a Mentor',
    description: 'Share your expertise, guide the next generation of leaders, and make a lasting impact.',
    benefits: [
      'Develop your coaching and leadership skills',
      'Build your professional and student network',
      'Receive recognition and mentorship certificate',
      'Be featured on our platforms',
      'Flexible scheduling — mentor at your pace',
    ],
    cta: 'Apply as Mentor',
    href: '/forms',
    color: '#C49A6C',
    bg: 'bg-[#C49A6C]',
  },
  {
    id: 'volunteer',
    icon: Heart,
    title: 'Volunteer',
    description: 'Contribute to events, workshops, and community initiatives while gaining valuable experience.',
    benefits: [
      'Volunteer recognition certificate',
      'Event management experience',
      'Networking with team and mentors',
      'Letter of recommendation (merit-based)',
      'Be part of something meaningful',
    ],
    cta: 'Register as Volunteer',
    href: '/forms',
    color: '#8B6914',
    bg: 'bg-[#8B6914]',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Join the Team',
    description: 'Become a core team member — drive our mission, build programs, and lead our community.',
    benefits: [
      'Leadership experience in a growing organisation',
      'Work alongside passionate student leaders',
      'Build real-world skills in education and management',
      'Co-create programs and events',
      'Earn recognition as a team member',
    ],
    cta: 'Apply to Team',
    href: '/forms',
    color: '#5C6B3A',
    bg: 'bg-[#5C6B3A]',
  },
  {
    id: 'partner',
    icon: Handshake,
    title: 'Partner With Us',
    description: 'Collaborate with The Speaking Studio as a school, college, brand, or educational organisation.',
    benefits: [
      'Co-branded events and workshops',
      'Joint outreach and community building',
      'Access to our student network',
      'Shared brand visibility and impact',
      'Flexible partnership models available',
    ],
    cta: 'Explore Partnership',
    href: '/contact',
    color: '#C49A6C',
    bg: 'bg-[#C49A6C]',
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
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Whether you want to learn, teach, contribute, or collaborate — there is a role for everyone in our community.
          </p>
        </div>
      </section>

      {/* Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Choose Your Path"
            title="How Would You Like to Join?"
            description="Select the option that best describes how you want to be involved."
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
                      <Link
                        href={path.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 group"
                        style={{ backgroundColor: path.color }}
                      >
                        {path.cta}
                        <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                      </Link>
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
