import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what students, parents, and mentors have to say about their experience with The Speaking Studio.',
};

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Real <span className="gradient-text">Stories</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            The best measure of our impact is the voices of the students, parents, and mentors who have experienced The Speaking Studio firsthand.
          </p>
        </div>
      </section>

      {/* Testimonials with filter */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What They Say"
            title="Voices from Our Community"
            description="Hear from our students, parents, and mentors about their transformative experiences."
            className="mb-14"
          />
          <TestimonialsCarousel showFilter />
        </div>
      </section>

      {/* Stats strip */}
      <section className="py-16 bg-[#5C6B3A]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '4.9/5', label: 'Average Rating' },
              { value: '98%', label: 'Would Recommend' },
              { value: '95%', label: 'Completion Rate' },
              { value: '100+', label: 'Reviews Collected' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-display font-bold text-[#C49A6C] mb-1">{stat.value}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Share Your Story"
            title="Have an Experience to Share?"
            description="We'd love to hear about your journey with The Speaking Studio. Submit your testimonial and inspire the next generation."
            primaryCta={{ label: 'Share Feedback', href: '/forms' }}
            secondaryCta={{ label: 'Join the Community', href: '/community' }}
            variant="light"
          />
        </div>
      </section>
    </>
  );
}
