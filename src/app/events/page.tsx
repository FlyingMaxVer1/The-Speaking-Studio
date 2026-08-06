import type { Metadata } from 'next';
import SectionHeading from '@/components/ui/SectionHeading';
import EventCard from '@/components/sections/EventCard';
import CTASection from '@/components/sections/CTASection';
import { events } from '@/data/events';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Explore The Speaking Studio\'s upcoming and past events — workshops, MUN conferences, competitions, webinars, and community sessions.',
};

const upcomingEvents = events.filter((e) => e.status === 'upcoming');
const pastEvents = events.filter((e) => e.status === 'past');

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Events & <span className="text-[#C49A6C]">Workshops</span>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Workshops, bootcamps, MUN conferences, competitions, and community sessions — curated for your growth.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Happening Soon"
            title="Upcoming Events"
            description="Register early — seats are limited and fill up fast!"
            className="mb-12"
          />
          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {upcomingEvents.map((event, i) => (
                <EventCard key={event.id} event={event} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-stone-500">
              <p>No upcoming events at the moment. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our History"
            title="Past Events"
            description="A look at the workshops, conferences, and competitions we have hosted."
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pastEvents.map((event, i) => (
              <EventCard key={event.id} event={event} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Stay Updated"
            title="Never Miss an Event"
            description="Join our community to receive instant notifications about upcoming events, workshops, and registration deadlines."
            primaryCta={{ label: 'Join Community', href: '/community' }}
            secondaryCta={{ label: 'Register for Events', href: '/forms' }}
          />
        </div>
      </section>
    </>
  );
}
