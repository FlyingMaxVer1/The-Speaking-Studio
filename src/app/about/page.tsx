import type { Metadata } from 'next';
import Link from 'next/link';
import { Heart, Target, Eye, Star, Lightbulb, Users, TrendingUp, ArrowRight, Award, MessageCircle, Mic, Globe, Shield, Sparkles, Quote } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';
import { FREE_MENTORSHIP_FORM_URL, JOIN_TEAM_FORM_URL, WHATSAPP_COMMUNITY_URL } from '@/data/forms';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about The Speaking Studio — Empowering Young Voices. Inspiring Young Leaders. Discover our mission, community of 430+ students, and our 2026 Global Recognition Award.',
};

const coreValues = [
  { icon: Star, title: 'Excellence', description: 'We pursue the highest standards in every session, interaction, and experience we create for our students.' },
  { icon: Heart, title: 'Empathy', description: 'We understand the fears and challenges students face and approach every interaction with compassion.' },
  { icon: Users, title: 'Community', description: 'We believe in the power of connection. Every student belongs to our growing family of 430+ learners.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We continuously evolve our methods to ensure the most relevant and effective learning experiences.' },
  { icon: Target, title: 'Impact', description: 'Every program, session, and interaction is designed to create measurable, lasting positive change.' },
  { icon: TrendingUp, title: 'Growth', description: 'We are committed to the continuous growth of our students, our team, and our organisation.' },
];

const programPillars = [
  { icon: Mic, title: 'Public Speaking', desc: 'Overcome stage fright and deliver compelling speeches with poise and clarity.' },
  { icon: Shield, title: 'Debate', desc: 'Sharpen logic, construct persuasive arguments, and master debate formats.' },
  { icon: Globe, title: 'Model UN (MUN)', desc: 'Experience international diplomacy, resolution drafting, and committee strategy.' },
  { icon: Sparkles, title: 'Leadership', desc: 'Build essential leadership qualities, decision-making skills, and team guidance.' },
  { icon: MessageCircle, title: 'Communication', desc: 'Master interpersonal communication, active listening, and articulate expression.' },
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
            <Sparkles size={14} className="text-[#C49A6C]" />
            <span className="text-white/90 text-xs font-semibold tracking-widest uppercase">About The Speaking Studio</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Empowering Young Voices.<br />
            <span className="text-[#C49A6C]">Inspiring Young Leaders.</span>
          </h1>
          <p className="text-white/80 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            A youth-led platform dedicated to empowering students with the confidence to communicate, lead, and create meaningful impact.
          </p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <SectionHeading
                eyebrow="Who We Are"
                title="Empowering Tomorrow's Changemakers"
                centered={false}
              />
              
              <div className="space-y-5 text-stone-700 leading-relaxed text-base sm:text-lg">
                <p className="font-medium text-[#1C1C1C]">
                  The Speaking Studio is a youth-led platform dedicated to empowering students with the confidence to communicate, lead, and create meaningful impact. Guided by our motto, <span className="text-[#5C6B3A] font-semibold">&quot;Empowering Young Voices. Inspiring Young Leaders.&quot;</span>, we provide training in public speaking, debate, Model United Nations (MUN), leadership, and communication skills, helping students become confident speakers, critical thinkers, and future changemakers.
                </p>

                <p>
                  As part of our mission to make quality communication education accessible, we regularly conduct free mentoring sessions, interactive workshops, competitions, and community initiatives led by experienced mentors. With a growing community of <strong>430+ students</strong>, we strive to create an environment where every learner has the opportunity to grow, collaborate, and find their voice.
                </p>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-4">
                  <Award className="w-8 h-8 text-[#C49A6C] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-[#1C1C1C] block mb-1">2026 Global Recognition Award Winner</span>
                    <p className="text-stone-700 text-sm leading-relaxed">
                      Recognized with the 2026 Global Recognition Award, The Speaking Studio continues to inspire the next generation by fostering confidence, leadership, effective communication, and lifelong learning—one voice at a time.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href={FREE_MENTORSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  Register for Free Mentorship Session
                  <ArrowRight size={16} />
                </a>
                <a
                  href={JOIN_TEAM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-all shadow-md hover:shadow-lg hover:scale-105"
                >
                  Join the Team
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>

            {/* Right Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white rounded-3xl p-6 border border-stone-200/80 shadow-md">
                <h3 className="font-display font-bold text-[#1C1C1C] text-xl mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-[#C49A6C]" />
                  Core Focus Areas
                </h3>
                <div className="space-y-3">
                  {programPillars.map((pillar) => (
                    <div key={pillar.title} className="p-3.5 rounded-xl bg-[#F5F0E8]/50 border border-stone-100 flex items-start gap-3 hover:bg-[#F5F0E8] transition-colors">
                      <div className="w-9 h-9 rounded-lg bg-[#5C6B3A]/10 flex items-center justify-center text-[#5C6B3A] flex-shrink-0 mt-0.5">
                        <pillar.icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#1C1C1C] text-sm">{pillar.title}</h4>
                        <p className="text-stone-500 text-xs leading-snug">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp Community Card */}
              <div className="bg-gradient-to-br from-[#25D366]/10 to-[#128C7E]/10 rounded-3xl p-6 border border-[#25D366]/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shadow">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C1C1C]">430+ Active Students</h4>
                    <p className="text-xs text-stone-600">Join our official WhatsApp Community</p>
                  </div>
                </div>
                <p className="text-stone-600 text-xs mb-4 leading-relaxed">
                  Get direct access to free mentorship updates, workshop schedules, and connect with fellow student leaders.
                </p>
                <a
                  href={WHATSAPP_COMMUNITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white rounded-xl font-semibold text-xs hover:bg-[#128C7E] transition-colors shadow"
                >
                  Join WhatsApp Community
                  <ArrowRight size={14} />
                </a>
              </div>
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
            <div className="relative bg-gradient-to-br from-[#5C6B3A] to-[#404B28] rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Target size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  To make quality communication, public speaking, debate, and leadership education accessible to every student — regardless of background. We empower learners with practical skills, confidence, and free mentorship to find their voice and lead.
                </p>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-[#C49A6C] to-[#A07845] rounded-3xl p-8 lg:p-10 overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye size={24} className="text-white" />
                </div>
                <h3 className="font-display font-bold text-white text-2xl mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed text-base">
                  A generation of students who speak with clarity, lead with empathy, think critically, and act boldly — empowered to turn impossible obstacles into temporary milestones and become future global changemakers.
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
            description="The principles that guide every decision we make and every interaction we have with our 430+ students."
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

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Join Us"
            title="Be Part of Something Meaningful"
            description="Whether as a student taking free mentoring sessions, or joining our passionate team — there is a place for you at The Speaking Studio."
            primaryCta={{ label: 'Register for Free Mentorship', href: FREE_MENTORSHIP_FORM_URL }}
            secondaryCta={{ label: 'Join the Team', href: JOIN_TEAM_FORM_URL }}
          />
        </div>
      </section>

      {/* Founder's Quote - At the VERY END of the About Page */}
      <section className="py-20 bg-gradient-to-br from-[#1C1C1C] via-[#2A2D24] to-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C49A6C] blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#C49A6C]/20 border border-[#C49A6C]/40 mx-auto flex items-center justify-center mb-8 shadow-inner">
            <Quote className="w-8 h-8 text-[#C49A6C]" />
          </div>

          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-stone-100 leading-relaxed italic mb-8">
            &ldquo;Be the reason someone believes that impossible is only temporary.&rdquo;
          </blockquote>

          <div className="inline-block">
            <div className="font-display font-bold text-xl text-[#C49A6C]">Vaishnavi Verma</div>
            <div className="text-stone-400 text-sm font-medium tracking-wide uppercase mt-1">Founder, The Speaking Studio</div>
          </div>
        </div>
      </section>
    </>
  );
}

