import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeading from '@/components/ui/SectionHeading';
import FormCard from '@/components/sections/FormCard';
import { champarenaCompetitions, forms, WHATSAPP_COMMUNITY_URL } from '@/data/forms';
import { MessageCircle, ArrowRight, Ticket, Sparkles, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Official Registrations & Forms | The Speaking Studio',
  description:
    'Access official registration links for TSSDS 2027 on ChampArena, Free Mentorship Sessions, and Join Team Applications.',
};

export default function FormsPage() {
  const ongoingForms = forms.filter((f) => f.category !== 'registration' || f.id === 'free-mentorship');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] via-[#FAFAF7] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#C49A6C]/30 rounded-full px-4 py-2 mb-6 shadow-xs">
            <span className="text-[#5C6B3A] text-xs font-semibold tracking-widest uppercase">
              Official Registrations & Applications
            </span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6 tracking-tight">
            Registration & <span className="gradient-text">Application Hub</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Book passes for our TSSDS 2027 national championships through our official ticketing partner ChampArena, or register for free mentorship sessions and team applications.
          </p>
        </div>
      </section>

      {/* Flagship TSSDS Competitions Section */}
      <section className="py-16 lg:py-20 bg-white border-b border-stone-200/70">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-stone-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B6914] bg-[#C49A6C]/15 border border-[#C49A6C]/30 px-3 py-1 rounded-full uppercase tracking-wider mb-3">
                <Ticket size={13} /> Official Ticketing Partner: ChampArena
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#1C1C1C]">
                TSSDS 2027 National Championships
              </h2>
              <p className="text-stone-600 text-sm mt-1 max-w-2xl">
                Direct booking for the 3 flagship tracks of The Speaking Studio Diplomacy Summit 2027.
              </p>
            </div>
            <Link
              href="/tssds"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#5C6B3A] hover:text-[#404B28] underline underline-offset-4 self-start md:self-auto"
            >
              <span>View Summit Overview & Passes</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {champarenaCompetitions.map((item, i) => (
              <FormCard key={item.id} form={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Mentorship & Applications */}
      <section className="py-16 lg:py-20 bg-[#FAFAF7]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading
            eyebrow="Community & Growth"
            title="Mentorship & Team Applications"
            description="Participate in our free weekly masterclasses or apply to join our leadership team."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ongoingForms.map((form, i) => (
              <FormCard key={form.id} form={form} index={i} />
            ))}
          </div>

          {/* WhatsApp Banner */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#25D366]/15 via-[#128C7E]/10 to-[#25D366]/15 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow flex-shrink-0">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-xl">Join 430+ Students on WhatsApp</h3>
                <p className="text-stone-600 text-sm mt-1">
                  Stay updated with free mentorship schedules, announcements, and peer connections.
                </p>
              </div>
            </div>
            <a
              href={WHATSAPP_COMMUNITY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366] text-white rounded-xl font-semibold text-sm hover:bg-[#128C7E] transition-all shadow hover:shadow-md flex-shrink-0"
            >
              Join WhatsApp Group
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Help section */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-[#1C1C1C] mb-4">Need Help?</h2>
          <p className="text-stone-600 text-sm mb-6">
            If you have any questions regarding championship tickets on ChampArena, mentorship classes, or team applications, feel free to email our team.
          </p>
          <a
            href="mailto:thespeakingstudio25@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-colors"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
