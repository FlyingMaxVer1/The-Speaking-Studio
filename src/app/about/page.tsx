import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Target, Eye, Star, Lightbulb, Users, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import StatsSection from '@/components/sections/StatsSection';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Speaking Studio — our story, mission, vision, core values, and the impact we are creating for students across India.',
};

const coreValues = [
  { icon: Star, title: 'Excellence', description: 'We pursue the highest standards in every session, interaction, and experience we create for our students.' },
  { icon: Heart, title: 'Empathy', description: 'We understand the fears and challenges students face and approach every interaction with compassion.' },
  { icon: Users, title: 'Community', description: 'We believe in the power of connection. Every student belongs to our growing family.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously evolve our methods to ensure the most relevant and effective learning experiences.' },
  { icon: Target, title: 'Impact', description: 'Every program, session, and interaction is designed to create measurable, lasting positive change.' },
  { icon: TrendingUp, title: 'Growth', description: 'We are committed to the continuous growth of our students, our team, and our organisation.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#C49A6C] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
            <span className="text-white/80 text-xs font-semibold tracking-widest uppercase">About The Speaking Studio</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Our Story of{' '}
            <span className="text-[#C49A6C]">Purpose</span>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Born from a desire to empower every student with the skills to communicate confidently, lead purposefully, and impact their world meaningfully.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="How It All Began"
                centered={false}
              />
              <div className="mt-6 space-y-4 text-stone-600 leading-relaxed">
                <p>
                  The Speaking Studio was founded by a group of passionate young students who recognised a critical gap in the educational ecosystem: students were learning facts and figures, but missing the essential life skills — communication, confidence, and leadership — that truly determine success.
                </p>
                <p>
                  We started small — a few friends helping each other prepare for presentations and MUN conferences. But the demand grew rapidly. Students across the country were seeking exactly what we were offering: practical, engaging, youth-led skill development.
                </p>
                <p>
                  Today, The Speaking Studio has grown into a thriving community of over 1,000 students, with 9 comprehensive programs, 50+ events hosted, and 500+ students mentored — all while staying true to our founding mission: <strong>Empowering Tomorrow&apos;s Leaders.</strong>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2025', desc: 'Youth-led from day one' },
                { label: 'Growth', value: '200%', desc: 'Community growth in 1 year' },
                { label: 'Programs', value: '9', desc: 'Comprehensive offerings' },
                { label: 'Reach', value: 'India-wide', desc: 'Online-first organisation' },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-2xl p-5 border border-stone-100 hover:shadow-md transition-shadow">
                  <div className="text-2xl font-display font-bold text-[#5C6B3A] mb-1">{item.value}</div>
                  <div className="font-semibold text-[#1C1C1C] text-sm mb-1">{item.label}</div>
                  <div className="text-stone-500 text-xs">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Direction"
            title="Mission & Vision"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative bg-gradient-to-br from-[#5C6B3A] to-[#404B28] rounded-3xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  To make quality communication and leadership skill development accessible to every student in India — regardless of background, location, or prior experience. We empower students with practical skills, confidence, and community to navigate academics, careers, and life with purpose.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#C49A6C] to-[#A07845] rounded-3xl p-8 lg:p-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A generation of students who speak with clarity, lead with empathy, think critically, and act boldly — students who are not just academically prepared but are complete, confident, and compassionate human beings ready to create meaningful change in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What We Stand For"
            title="Our Core Values"
            description="The principles that guide every decision we make and every interaction we have."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#5C6B3A]/10 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-[#5C6B3A]" />
                </div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2">{value.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Impact"
            title="The Numbers Speak"
            description="A snapshot of the difference The Speaking Studio has made."
            className="mb-14"
          />
          <StatsSection />
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                eyebrow="Looking Ahead"
                title="Our Future Goals"
                centered={false}
              />
              <div className="mt-6 space-y-4">
                {[
                  'Reach 10,000+ students across India by 2027',
                  'Launch regional chapters in 10 major cities',
                  'Introduce scholarship programs for deserving students',
                  'Build India\'s largest student communication community',
                  'Partner with schools and colleges for integrated programs',
                  'Launch a digital learning platform for self-paced courses',
                  'Host a national MUN conference and public speaking championship',
                  'Create a peer mentorship network connecting students across India',
                ].map((goal, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#5C6B3A] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <ArrowRight size={10} className="text-white" />
                    </div>
                    <p className="text-stone-700 text-sm">{goal}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#5C6B3A] to-[#404B28] rounded-3xl p-8 lg:p-10 text-center text-white">
              <div className="text-5xl font-display font-bold mb-4 text-[#C49A6C]">2027</div>
              <h3 className="font-display font-bold text-2xl mb-4">Our Vision for Tomorrow</h3>
              <p className="text-white/80 leading-relaxed">
                By 2027, we aim to be India&apos;s most trusted youth-led educational organisation — a platform that every student knows about, every parent recommends, and every educator respects.
              </p>
              <div className="mt-8">
                <Link
                  href="/join"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-colors duration-200"
                >
                  Be Part of This Journey <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Join Us"
            title="Be Part of Something Meaningful"
            description="Whether as a student, mentor, volunteer, or partner — there is a place for you at The Speaking Studio."
            primaryCta={{ label: 'Join the Community', href: '/join' }}
            secondaryCta={{ label: 'Meet the Team', href: '/team' }}
          />
        </div>
      </section>
    </>
  );
}
