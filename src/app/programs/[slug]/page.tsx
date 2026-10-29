import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ArrowRight,
  Trophy,
  Ticket,
  ExternalLink,
} from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { programs } from '@/data/programs';
import { FREE_MENTORSHIP_FORM_URL } from '@/data/forms';
import {
  CHAMPARENA_TSSDS_MUN_URL,
  CHAMPARENA_TAKKAR_DEBATE_URL,
  CHAMPARENA_DIL_KI_BAAT_URL,
} from '@/data/tssds';
import CTASection from '@/components/sections/CTASection';
import FAQAccordion from '@/components/sections/FAQAccordion';
import ProgramCard from '@/components/sections/ProgramCard';

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

type Params = { slug: string };

const championshipSpotlights: Record<
  string,
  {
    title: string;
    badge: string;
    description: string;
    fee: number;
    url: string;
    date: string;
  }
> = {
  mun: {
    title: 'TSSDS 2027 – Model United Nations',
    badge: 'Official Diplomatic Summit',
    description:
      'Represent sovereign nations in simulated UN committees, debate global security agendas, and build diplomatic resolutions. Official ticketing hosted on ChampArena.',
    fee: 299,
    url: CHAMPARENA_TSSDS_MUN_URL,
    date: 'June 2027 • Summer Holidays',
  },
  debate: {
    title: 'Takkar – Debate Championship',
    badge: 'National Debate Championship',
    description:
      'Test your argumentative rigour, rebuttal agility, and conviction under cross-examination in our high-stakes national tournament. Official ticketing hosted on ChampArena.',
    fee: 249,
    url: CHAMPARENA_TAKKAR_DEBATE_URL,
    date: 'June 2027 • Summer Holidays',
  },
  'public-speaking': {
    title: 'Dil Ki Baat – Public Speaking Championship',
    badge: 'National Oratory Championship',
    description:
      'Deliver powerful speeches that move audiences. Evaluated on vocal dynamism, rhetorical structure, and stage presence. Official ticketing hosted on ChampArena.',
    fee: 249,
    url: CHAMPARENA_DIL_KI_BAAT_URL,
    date: 'June 2027 • Summer Holidays',
  },
};

export async function generateStaticParams(): Promise<Params[]> {
  return programs.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: 'Program Not Found' };
  return {
    title: program.title,
    description: program.fullDescription,
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) notFound();

  const relatedPrograms = programs.filter((p) => p.slug !== slug).slice(0, 3);
  const faqs = program.faqs.map((f, i) => ({
    id: `faq-${i}`,
    question: f.question,
    answer: f.answer,
    category: program.title,
  }));

  const spotlight = championshipSpotlights[slug];

  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${program.color}15 0%, #FAFAF7 60%, ${program.color}08 100%)` }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-[#5C6B3A] text-sm mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Programs
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xs"
                style={{ backgroundColor: program.color + '20' }}
              >
                <DynamicIcon name={program.icon} size={32} style={{ color: program.color }} />
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-5">
                {program.duration && (
                  <span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                    ⏱ {program.duration}
                  </span>
                )}
                {program.level && (
                  <span className="px-3 py-1 bg-white border border-stone-200 rounded-full text-xs font-medium text-stone-600">
                    📊 {program.level}
                  </span>
                )}
              </div>

              <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1C1C1C] mb-5 leading-tight">
                {program.title}
              </h1>
              <p className="text-stone-600 text-lg leading-relaxed mb-8">
                {program.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={FREE_MENTORSHIP_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-semibold text-white text-sm hover:scale-105 hover:shadow-lg transition-all duration-200 group"
                  style={{ backgroundColor: program.color }}
                >
                  Register for Free Mentorship
                  <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                </a>

                {spotlight && (
                  <a
                    href={spotlight.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-stone-800 bg-white border border-stone-300 text-sm hover:border-[#C49A6C] hover:text-[#C49A6C] shadow-xs transition-all duration-200"
                  >
                    <Ticket size={16} className="text-[#C49A6C]" />
                    <span>Compete at TSSDS 2027</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right card: Skills */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100">
              <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-5">Skills You&apos;ll Develop</h3>
              <div className="flex flex-wrap gap-2">
                {program.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full text-sm font-medium border"
                    style={{
                      backgroundColor: program.color + '10',
                      borderColor: program.color + '30',
                      color: program.color,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Championship Spotlight Banner for relevant programs */}
      {spotlight && (
        <section className="py-12 bg-gradient-to-r from-[#404B28] via-[#5C6B3A] to-[#404B28] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#C49A6C] text-[#1C1C1C]">
                  <Trophy size={14} /> {spotlight.badge}
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                  {spotlight.title}
                </h3>
                <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl">
                  {spotlight.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/80 pt-1">
                  <span>📅 {spotlight.date}</span>
                  <span>•</span>
                  <span>🎟️ ₹{spotlight.fee} Entry</span>
                  <span>•</span>
                  <span className="text-[#D4B48A] font-semibold">Official Ticketing: ChampArena</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto flex-shrink-0">
                <a
                  href={spotlight.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C49A6C] hover:bg-[#D4B48A] text-[#1C1C1C] font-bold text-sm transition-all shadow-md group"
                >
                  <Ticket size={16} />
                  <span>Book on ChampArena</span>
                  <ExternalLink size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </a>
                <Link
                  href="/tssds"
                  className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors border border-white/15"
                >
                  <span>Summit Overview</span>
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="text-xs font-semibold text-[#C49A6C] tracking-widest uppercase mb-3">Benefits</div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C1C] mb-6">What You&apos;ll Gain</h2>
              <div className="space-y-3">
                {program.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-[#5C6B3A] flex-shrink-0 mt-0.5" />
                    <p className="text-stone-600 text-sm">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-semibold text-[#C49A6C] tracking-widest uppercase mb-3">Learning Outcomes</div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C1C] mb-6">By the End of This Program</h2>
              <div className="space-y-3">
                {program.learningOutcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: program.color + '20' }}
                    >
                      <ArrowRight size={10} style={{ color: program.color }} />
                    </div>
                    <p className="text-stone-600 text-sm">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Join */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-xs font-semibold text-[#C49A6C] tracking-widest uppercase mb-3">Right Fit</div>
            <h2 className="font-display font-bold text-3xl text-[#1C1C1C] mb-10">Who Should Join?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {program.whoShouldJoin.map((who) => (
                <div key={who} className="bg-white rounded-2xl p-5 border border-stone-100 text-left flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-[#5C6B3A]/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={16} className="text-[#5C6B3A]" />
                  </div>
                  <p className="text-stone-700 text-sm font-medium">{who}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="text-center mb-10">
              <div className="text-xs font-semibold text-[#C49A6C] tracking-widest uppercase mb-3">Frequently Asked</div>
              <h2 className="font-display font-bold text-3xl text-[#1C1C1C]">Common Questions</h2>
            </div>
            <FAQAccordion faqs={faqs} />
          </div>
        </section>
      )}

      {/* Related Programs */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="text-xs font-semibold text-[#C49A6C] tracking-widest uppercase mb-3">Explore More</div>
            <h2 className="font-display font-bold text-3xl text-[#1C1C1C]">Other Programs You Might Like</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPrograms.map((p, i) => (
              <ProgramCard key={p.id} program={p} index={i} compact />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Enroll Today"
            title={`Ready to Master ${program.title}?`}
            description="Register for a free mentorship session to get started."
            primaryCta={{ label: 'Register for Free Class', href: FREE_MENTORSHIP_FORM_URL }}
            secondaryCta={{ label: 'Contact Us', href: '/contact' }}
          />
        </div>
      </section>
    </>
  );
}
