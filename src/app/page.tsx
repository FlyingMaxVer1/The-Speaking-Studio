import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Mic, Globe, Crown, Star, Users, CheckCircle2, Sparkles, ChevronRight, Award } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ProgramCard from '@/components/sections/ProgramCard';
import CTASection from '@/components/sections/CTASection';
import { programs } from '@/data/programs';
import { FREE_MENTORSHIP_FORM_URL, JOIN_TEAM_FORM_URL } from '@/data/forms';

export const metadata: Metadata = {
  title: 'Home — Empowering Young Voices. Inspiring Young Leaders.',
  description: 'The Speaking Studio is a youth-led educational organisation developing confidence, communication, leadership, and public speaking skills for 430+ students.',
};

const featuredPrograms = programs.slice(0, 6);

const whyChooseUs = [
  {
    icon: Users,
    title: 'Student-Led',
    description: 'Founded and driven by young leaders who understand what students truly need to succeed.',
    color: '#5C6B3A',
  },
  {
    icon: Mic,
    title: 'Interactive Learning',
    description: 'Every session is hands-on, practice-oriented, and built for real skill development.',
    color: '#C49A6C',
  },
  {
    icon: Star,
    title: 'Free Mentorship',
    description: 'Regular free mentoring sessions led by experienced mentors in public speaking, debate, and MUN.',
    color: '#8B6914',
  },
  {
    icon: Globe,
    title: 'Growing Community',
    description: 'Be part of a thriving community of 430+ students empowering each other.',
    color: '#5C6B3A',
  },
  {
    icon: Crown,
    title: 'Leadership Focused',
    description: 'Every program is designed with youth empowerment and leadership development at its core.',
    color: '#C49A6C',
  },
  {
    icon: Award,
    title: 'Globally Recognized',
    description: 'Proud recipient of the 2026 Global Recognition Award for excellence in student education.',
    color: '#8B6914',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F5F0E8] via-[#FAFAF7] to-[#EAE3D5]">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-[#C49A6C]/10 blur-3xl animate-float" />
          <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-[#5C6B3A]/10 blur-3xl" style={{ animationDelay: '3s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C49A6C]/5 blur-3xl" />
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#1C1C1C 1px, transparent 1px), linear-gradient(90deg, #1C1C1C 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-[#C49A6C]/30 rounded-full px-4 py-2 shadow-sm">
                <Award size={14} className="text-[#C49A6C]" />
                <span className="text-xs font-semibold text-[#5C6B3A]">2026 Global Recognition Award Winner</span>
              </div>

              {/* Headline */}
              <div>
                <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.1] text-[#1C1C1C]">
                  Empowering Young Voices.<br />
                  <span className="gradient-text">Inspiring Young Leaders.</span>
                </h1>
              </div>

              {/* Sub */}
              <p className="text-stone-600 text-lg sm:text-xl leading-relaxed max-w-xl">
                A youth-led platform dedicated to empowering students with the confidence to communicate, lead, and create meaningful impact through training in public speaking, debate, MUN, and leadership.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={FREE_MENTORSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 group"
                >
                  Free Mentorship Class
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a
                  href={JOIN_TEAM_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
                >
                  Join the Team
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap items-center gap-6 pt-2">
                {[
                  { label: '430+ Students', sub: 'Growing Community' },
                  { label: 'Free Mentoring', sub: 'Sessions' },
                  { label: 'Youth-Led', sub: 'Platform' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#5C6B3A]" />
                    <div>
                      <span className="font-semibold text-sm text-[#1C1C1C]">{item.label}</span>
                      <span className="text-stone-500 text-xs block">{item.sub}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Logo + decorative */}
            <div className="relative flex items-center justify-center">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#C49A6C]/20 to-[#5C6B3A]/20 blur-2xl scale-110 animate-pulse-soft" />
                
                {/* Logo circle */}
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-white shadow-2xl border-4 border-[#C49A6C]/20 flex items-center justify-center">
                  <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
                    <Image
                      src="/logo.png"
                      alt="The Speaking Studio"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>

                {/* Floating chips */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg border border-stone-100 px-4 py-3 animate-float" style={{ animationDelay: '0s' }}>
                  <div className="flex items-center gap-2">
                    <Mic size={16} className="text-[#5C6B3A]" />
                    <span className="text-xs font-semibold text-[#1C1C1C]">Public Speaking & Debate</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg border border-stone-100 px-4 py-3 animate-float" style={{ animationDelay: '2s' }}>
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-[#C49A6C]" />
                    <span className="text-xs font-semibold text-[#1C1C1C]">MUN & Diplomacy</span>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-lg border border-stone-100 px-4 py-3 animate-float" style={{ animationDelay: '4s' }}>
                  <div className="flex items-center gap-2">
                    <Crown size={16} className="text-[#8B6914]" />
                    <span className="text-xs font-semibold text-[#1C1C1C]">Leadership Skills</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="#FAFAF7" />
          </svg>
        </div>
      </section>

      {/* ─── FEATURED PROGRAMS ────────────────────────────────── */}
      <section className="py-20 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="What We Offer"
              title="Our Programs"
              description="Comprehensive skill development programs designed to transform students into confident communicators and leaders."
              centered={false}
            />
            <Link
              href="/programs"
              className="flex items-center gap-2 text-[#5C6B3A] font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0"
            >
              View All Programs <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPrograms.map((program, i) => (
              <ProgramCard key={program.id} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why Us"
            title="Why Choose The Speaking Studio?"
            description="We are a youth-led platform committed to accessible, high-impact skill training for 430+ students."
            className="mb-14"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChooseUs.map((item, i) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: item.color + '15' }}
                >
                  <item.icon size={24} style={{ color: item.color }} />
                </div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2">{item.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Students Say"
            title="Real Stories, Real Impact"
            description="Hear from the students and mentors who have experienced The Speaking Studio firsthand."
            className="mb-14"
          />
          <TestimonialsCarousel />

          <div className="text-center mt-10">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 text-[#5C6B3A] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Read All Testimonials <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Your Journey Starts Here"
            title="Ready to Find Your Voice and Lead with Confidence?"
            description="Join 430+ students who have transformed their communication, built their confidence, and unlocked their leadership potential with The Speaking Studio."
            primaryCta={{ label: 'Register for Free Mentorship', href: FREE_MENTORSHIP_FORM_URL }}
            secondaryCta={{ label: 'Join the Team', href: JOIN_TEAM_FORM_URL }}
          />
        </div>
      </section>

      {/* ─── SOCIAL LINKS STRIP ───────────────────────────────── */}
      <section className="py-12 bg-[#F5F0E8] border-t border-stone-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-500 text-sm mb-6 font-medium">Follow Our Journey</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://instagram.com/the.speaking.studio?igsh=cXY1Y3RyM2I3dzcz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-stone-200 hover:border-pink-300 hover:text-pink-500 text-stone-600 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md group"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://youtube.com/@the.speaking.studio?si=tYlJhCxiUC801D6I"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-stone-200 hover:border-red-300 hover:text-red-500 text-stone-600 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
            <a
              href="https://pin.it/3h3gVm4Uk"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-stone-200 hover:border-red-300 hover:text-red-600 text-stone-600 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
              </svg>
              Pinterest
            </a>
            <a
              href="mailto:thespeakingstudio25@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-xl border border-stone-200 hover:border-[#C49A6C] hover:text-[#C49A6C] text-stone-600 text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
