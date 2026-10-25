import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Globe,
  Award,
  Trophy,
  Mic,
  MessageSquare,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Calendar,
  ShieldCheck,
  ArrowRight,
  Zap,
  Users,
} from 'lucide-react';
import CountdownTimer from '@/components/tssds/CountdownTimer';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  TSSDS_REGISTRATION_FORM_URL,
  TSSDS_INSTAGRAM_URL,
  championships,
  passes,
  perks,
  faqs,
} from '@/data/tssds';

export const metadata: Metadata = {
  title: 'TSSDS 2027 — The Speaking Studio Diplomacy Summit',
  description:
    'An online national youth summit bringing together aspiring diplomats, debaters, and public speakers from across India. Compete in 3 national championships with verified certificates and cash prizes.',
  openGraph: {
    title: 'TSSDS 2027 — The Speaking Studio Diplomacy Summit',
    description:
      'Compete in 3 National Championships: MUN, Debate, and Public Speaking. June 2027. Open to students across India.',
    url: 'https://thespeakingstudio.netlify.app/tssds',
  },
};

function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function TSSDSPage() {
  return (
    <div className="bg-[#FAFAF7] text-[#1C1C1C] overflow-hidden">
      {/* ─── HERO SECTION ────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-[#F5F0E8] via-[#FAFAF7] to-[#FAFAF7]">
        {/* Subtle decorative background gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#C49A6C]/10 blur-[120px] rounded-full" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-[#5C6B3A]/8 blur-[100px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Top Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#C49A6C]/40 px-4 py-1.5 rounded-full text-xs font-semibold text-[#5C6B3A] shadow-sm mb-6">
            <Globe size={14} className="text-[#C49A6C]" />
            <span>National Online Youth Summit • June 2027</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#5C6B3A]" />
            <span className="text-[#1C1C1C]">Pan-India Registration</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl text-[#1C1C1C] tracking-tight max-w-5xl mx-auto leading-[1.08]">
            The Speaking Studio <br />
            <span className="gradient-text">Diplomacy Summit 2027</span>
          </h1>

          {/* Tagline & Subtitle */}
          <div className="mt-4 mb-3">
            <span className="font-display font-semibold text-lg sm:text-xl tracking-wide uppercase text-[#8B6914]">
              Speak. Lead. Influence.
            </span>
          </div>

          <p className="text-stone-600 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            India&apos;s sharpest young voices on one national digital stage. Three competitive championships, verified credentials, cash awards, and the kind of stage presence you don&apos;t learn from textbooks.
          </p>

          {/* Real-time Live Countdown Display */}
          <div className="mb-10">
            <CountdownTimer variant="hero" />
          </div>

          {/* Primary Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={TSSDS_REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C6B3A] text-white font-semibold text-base hover:bg-[#404B28] shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <span>Pre-Register on Google Form</span>
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="#passes"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-stone-300 text-stone-800 font-semibold text-base hover:border-[#C49A6C] hover:text-[#C49A6C] shadow-sm transition-all duration-200"
            >
              <span>View Passes & Fees</span>
              <ArrowRight size={16} />
            </a>
          </div>

          {/* Legitimacy credentials bar */}
          <div className="mt-14 pt-8 border-t border-stone-200/80 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="space-y-1">
              <div className="font-display font-bold text-xl sm:text-2xl text-[#1C1C1C]">3</div>
              <div className="text-xs text-stone-500 font-medium">Championships</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-bold text-xl sm:text-2xl text-[#5C6B3A]">430+</div>
              <div className="text-xs text-stone-500 font-medium">Student Community</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-bold text-xl sm:text-2xl text-[#C49A6C]">2026</div>
              <div className="text-xs text-stone-500 font-medium">Global Award Winner</div>
            </div>
            <div className="space-y-1">
              <div className="font-display font-bold text-xl sm:text-2xl text-[#1C1C1C]">100%</div>
              <div className="text-xs text-stone-500 font-medium">Online Pan-India</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE 3 CHAMPIONSHIPS ─────────────────────────────────────── */}
      <section id="championships" className="py-20 lg:py-28 bg-white border-y border-stone-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="National Competitive Tracks"
            title="Three Flagship Championships"
            description="Compete in your primary discipline or enter multiple tracks to test your versatile diplomatic and oratory skillset."
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {championships.map((champ) => {
              const Icon =
                champ.id === 'mun'
                  ? Globe
                  : champ.id === 'debate'
                  ? MessageSquare
                  : Mic;

              return (
                <div
                  key={champ.id}
                  className="flex flex-col justify-between rounded-3xl bg-[#FAFAF7] border border-stone-200 p-8 hover:border-[#C49A6C] hover:shadow-xl transition-all duration-300 relative group"
                >
                  <div>
                    {/* Header Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 flex items-center justify-center text-[#5C6B3A] group-hover:bg-[#5C6B3A] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon size={26} />
                      </div>
                      <span className="text-xs font-bold text-[#8B6914] bg-[#C49A6C]/10 border border-[#C49A6C]/30 px-3 py-1 rounded-full">
                        ₹{champ.fee} Entry
                      </span>
                    </div>

                    {/* Championship Name & Category */}
                    <div className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                      {champ.category}
                    </div>
                    <h3 className="font-display font-bold text-2xl text-[#1C1C1C] mt-1 mb-3">
                      {champ.name}
                    </h3>

                    {/* Tagline & Description */}
                    <p className="text-stone-700 text-sm font-medium italic mb-4">
                      &ldquo;{champ.tagline}&rdquo;
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed mb-6">
                      {champ.description}
                    </p>

                    {/* Focus areas pills */}
                    <div className="space-y-2 mb-8">
                      <div className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                        Evaluated Areas:
                      </div>
                      <ul className="space-y-1.5">
                        {champ.focusAreas.map((area) => (
                          <li
                            key={area}
                            className="flex items-center gap-2 text-xs text-stone-600 font-medium"
                          >
                            <CheckCircle2 size={14} className="text-[#5C6B3A] flex-shrink-0" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-stone-200">
                    <a
                      href={TSSDS_REGISTRATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-stone-300 text-stone-800 text-sm font-semibold hover:bg-[#5C6B3A] hover:text-white hover:border-[#5C6B3A] transition-all duration-200"
                    >
                      <span>Pre-Register for {champ.shortName}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PASSES & PRICING ────────────────────────────────────────── */}
      <section id="passes" className="py-20 lg:py-28 bg-[#F5F0E8]/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Registration & Passes"
            title="Transparent, Accessible Fees"
            description="Choose single competition entry or bundle championships to maximize savings and compete for multiple national titles."
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            {passes.map((pass) => (
              <div
                key={pass.id}
                className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  pass.isPopular
                    ? 'bg-[#1C1C1C] text-white border-2 border-[#C49A6C] shadow-2xl lg:-translate-y-2'
                    : 'bg-white text-[#1C1C1C] border border-stone-200 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular or Savings Badge */}
                {pass.badge && (
                  <div className="absolute -top-3 left-6">
                    <span
                      className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                        pass.isPopular
                          ? 'bg-[#C49A6C] text-[#1C1C1C]'
                          : 'bg-[#5C6B3A] text-white'
                      }`}
                    >
                      <Sparkles size={12} />
                      {pass.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3
                    className={`font-display font-bold text-xl sm:text-2xl mt-2 ${
                      pass.isPopular ? 'text-white' : 'text-[#1C1C1C]'
                    }`}
                  >
                    {pass.title}
                  </h3>

                  <p
                    className={`text-xs mt-1 mb-6 leading-relaxed ${
                      pass.isPopular ? 'text-stone-300' : 'text-stone-600'
                    }`}
                  >
                    {pass.description}
                  </p>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                      ₹{pass.price}
                    </span>
                    {pass.originalPrice && (
                      <span
                        className={`text-sm line-through ${
                          pass.isPopular ? 'text-stone-500' : 'text-stone-400'
                        }`}
                      >
                        ₹{pass.originalPrice}
                      </span>
                    )}
                    <span
                      className={`text-xs font-medium ${
                        pass.isPopular ? 'text-stone-400' : 'text-stone-500'
                      }`}
                    >
                      / delegate
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-8 text-xs sm:text-sm">
                    {pass.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className={`flex-shrink-0 mt-0.5 ${
                            pass.isPopular ? 'text-[#C49A6C]' : 'text-[#5C6B3A]'
                          }`}
                        />
                        <span
                          className={pass.isPopular ? 'text-stone-200' : 'text-stone-700'}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Primary CTA */}
                <a
                  href={TSSDS_REGISTRATION_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm ${
                    pass.isPopular
                      ? 'bg-[#C49A6C] text-[#1C1C1C] hover:bg-[#D4B48A]'
                      : 'bg-[#5C6B3A] text-white hover:bg-[#404B28]'
                  }`}
                >
                  <span>Select Pass & Pre-Register</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-stone-500 mt-8 max-w-xl mx-auto">
            All passes include admission to corresponding competition tracks, preparation materials, evaluation rubrics, and participation certificates. Payment and confirmation details are processed through the pre-registration form.
          </p>
        </div>
      </section>

      {/* ─── PERKS & WHAT'S IN IT FOR YOU ────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white border-b border-stone-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Participant Advantages"
            title="What's in It for You?"
            description="TSSDS is engineered not just as a tournament, but as a platform to accelerate your speaking pedigree and build real-world leadership credentials."
            className="mb-14 text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="p-6 rounded-2xl bg-[#FAFAF7] border border-stone-200 hover:border-[#5C6B3A]/40 hover:shadow-md transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-[#5C6B3A]/10 text-[#5C6B3A] flex items-center justify-center mb-4">
                  <Award size={20} />
                </div>
                <h4 className="font-display font-bold text-lg text-[#1C1C1C] mb-2">
                  {perk.title}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}

            {/* Final Highlight Card */}
            <div className="p-6 rounded-2xl bg-[#5C6B3A] text-white flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                  <Trophy size={20} />
                </div>
                <h4 className="font-display font-bold text-lg mb-2">
                  National Standing
                </h4>
                <p className="text-white/85 text-sm leading-relaxed">
                  Stand out in college applications, debate circuit rankings, and student resumes with verified national summit honors.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/20 text-xs text-white/90 font-medium">
                Open to all school and college students across India.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SCHEDULE & FORMAT ───────────────────────────────────────── */}
      <section className="py-20 bg-[#F5F0E8]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-[#5C6B3A] uppercase tracking-wider">
                  Timeline & Execution
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#1C1C1C] mt-1">
                  Tentative Summit Schedule
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 bg-[#FAFAF7] border border-stone-300 px-4 py-2 rounded-xl text-xs font-semibold text-stone-700">
                <Calendar size={16} className="text-[#C49A6C]" />
                <span>June 2027 • Summer Holidays</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-lg text-[#1C1C1C] flex items-center gap-2">
                  <Users size={18} className="text-[#5C6B3A]" />
                  <span>Spread Across 2 Weekends</span>
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Designed around summer vacations to eliminate weekday school conflicts. Rounds are paced so delegates entering multiple championships have adequate breathing room and preparation time.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-display font-bold text-lg text-[#1C1C1C] flex items-center gap-2">
                  <Globe size={18} className="text-[#C49A6C]" />
                  <span>100% Online Pan-India</span>
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Participate from anywhere in India without accommodation or transit friction. Connect, debate, and network with delegates from Delhi, Mumbai, Bengaluru, Kolkata, and beyond.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-[#5C6B3A]/10 border border-[#5C6B3A]/20 flex items-center gap-3 text-xs sm:text-sm text-[#404B28] font-medium">
              <ShieldCheck size={20} className="flex-shrink-0 text-[#5C6B3A]" />
              <span>
                Exact dates, round schedules, committee agendas, and debate motions are detailed in the official pre-registration form. Pre-register now to receive priority updates.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUMMIT FAQS ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-t border-stone-200/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Got Questions?"
            title="Frequently Asked Questions"
            description="Everything you need to know about pre-registration, championships, and summit logistics."
            className="mb-14 text-center"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="p-6 rounded-2xl bg-[#FAFAF7] border border-stone-200"
              >
                <h4 className="font-display font-bold text-base sm:text-lg text-[#1C1C1C] mb-2">
                  {faq.question}
                </h4>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CONVERSION CTA ────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-[#1C1C1C] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#C49A6C] blur-[150px] rounded-full" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#C49A6C]/20 text-[#D4B48A] border border-[#C49A6C]/30 mb-6">
            <Zap size={14} /> Pre-Registrations Now Open
          </span>

          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-6">
            Don&apos;t Watch From the Sidelines. <br />
            <span className="text-[#C49A6C]">Claim Your National Stage.</span>
          </h2>

          <p className="text-stone-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Committees fill quickly and pre-registration grants you priority committee choices, prep kits, and early masterclass invitations.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={TSSDS_REGISTRATION_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C6B3A] text-white font-bold text-base hover:bg-[#7A8F4E] shadow-xl hover:shadow-2xl transition-all duration-200 group"
            >
              <span>Complete Official Pre-Registration</span>
              <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={TSSDS_INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all duration-200 border border-white/15"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @the.speaking.studio</span>
            </a>
          </div>

          <p className="text-xs text-stone-400 mt-8">
            Share TSSDS 2027 with your school MUN club, debate society, and fellow young leaders across India!
          </p>
        </div>
      </section>
    </div>
  );
}
