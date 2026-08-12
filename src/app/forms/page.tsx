import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import FormCard from '@/components/sections/FormCard';
import { forms, WHATSAPP_COMMUNITY_URL } from '@/data/forms';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Registration Forms',
  description: 'Access official registration links for The Speaking Studio — Free Mentorship Sessions and Join Team Application.',
};

export default function FormsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#C49A6C]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5C6B3A] text-xs font-semibold tracking-widest uppercase">Official Forms</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Registration & <span className="gradient-text">Application</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Fill out our official Google Forms to register for free mentorship sessions or join The Speaking Studio team.
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <SectionHeading
            eyebrow="Official Links"
            title="Get Started Today"
            description="Select the registration link below to open the official form."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {forms.map((form, i) => (
              <FormCard key={form.id} form={form} index={i} />
            ))}
          </div>

          {/* WhatsApp Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#25D366]/15 via-[#128C7E]/10 to-[#25D366]/15 border border-[#25D366]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow flex-shrink-0">
                <MessageCircle size={28} />
              </div>
              <div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-xl">Join 430+ Students on WhatsApp</h3>
                <p className="text-stone-600 text-sm mt-1">Stay updated with free mentorship schedules, announcements, and peer connections.</p>
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
            If you have any questions regarding registration, mentorship classes, or team applications, feel free to email our team.
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

