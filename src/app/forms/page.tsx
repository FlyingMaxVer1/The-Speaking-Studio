import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import FormCard from '@/components/sections/FormCard';
import CTASection from '@/components/sections/CTASection';
import { forms } from '@/data/forms';

export const metadata: Metadata = {
  title: 'Forms',
  description: 'Access all The Speaking Studio registration forms — mentorship, sessions, community, team recruitment, volunteer, and feedback forms.',
};

export default function FormsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#C49A6C]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[#5C6B3A] text-xs font-semibold tracking-widest uppercase">Quick Access</span>
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Registration <span className="gradient-text">Forms</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            All our registration and application forms in one place. Click on any form to get started.
          </p>
        </div>
      </section>

      {/* Forms Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="All Forms"
            title="Choose Your Next Step"
            description="Each form is quick to fill and our team will respond within 48 hours."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {forms.map((form, i) => (
              <FormCard key={form.id} form={form} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Help section */}
      <section className="py-16 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl">
          <h2 className="font-display font-bold text-2xl text-[#1C1C1C] mb-4">Need Help?</h2>
          <p className="text-stone-600 text-sm mb-6">
            If you are having trouble with any form, or if you have a specific question about a program or application, don't hesitate to reach out. We are here to help.
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
