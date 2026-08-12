import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import { programs } from '@/data/programs';
import { FREE_MENTORSHIP_FORM_URL } from '@/data/forms';
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
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
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
