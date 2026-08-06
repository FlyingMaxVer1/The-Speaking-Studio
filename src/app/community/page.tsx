import type { Metadata } from 'next';
import Link from 'next/link';
import { MessageCircle, Users, Bell, Share2, BookOpen, ArrowRight, Heart } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Community',
  description: 'Join The Speaking Studio community — a thriving network of 1000+ students passionate about communication, leadership, and growth.',
};

const features = [
  { icon: MessageCircle, title: 'Active WhatsApp Community', description: 'Join our primary community channel where members receive daily updates, resources, challenges, and announcements.' },
  { icon: Users, title: 'Peer-to-Peer Networking', description: 'Connect with like-minded students from across India who share your passion for communication and leadership.' },
  { icon: Bell, title: 'Instant Announcements', description: 'Be the first to know about new programs, events, workshops, and opportunities.' },
  { icon: BookOpen, title: 'Exclusive Resources', description: 'Access resources, templates, and guides shared exclusively within the community.' },
  { icon: Share2, title: 'Collaboration Opportunities', description: 'Find partners for debate practice, MUN preparation, projects, and creative collaborations.' },
  { icon: Heart, title: 'Supportive Environment', description: 'A moderated, positive space where every member feels welcome, respected, and supported.' },
];

export default function CommunityPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C49A6C] blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#5C6B3A] blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="w-16 h-16 rounded-2xl bg-[#5C6B3A]/10 flex items-center justify-center mx-auto mb-6">
            <Users size={32} className="text-[#5C6B3A]" />
          </div>
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Our <span className="gradient-text">Community</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            1,000+ students. One shared mission. A thriving network of passionate communicators, aspiring leaders, and lifelong learners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/forms"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-all duration-200 shadow-lg group"
            >
              Join the Community <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/forms"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border border-stone-200 text-stone-700 rounded-xl font-semibold text-sm hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-200"
            >
              Join WhatsApp Group
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Community Life"
            title="What Happens in Our Community"
            description="Our community is far more than a group chat — it is a vibrant ecosystem of learning, sharing, and growing together."
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f) => (
              <div key={f.title} className="bg-[#F5F0E8] rounded-2xl p-6 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-stone-100">
                <div className="w-12 h-12 bg-[#5C6B3A]/10 rounded-xl flex items-center justify-center mb-4">
                  <f.icon size={24} className="text-[#5C6B3A]" />
                </div>
                <h3 className="font-display font-bold text-[#1C1C1C] text-lg mb-2">{f.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community guidelines */}
      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <SectionHeading
            eyebrow="Our Standards"
            title="Community Guidelines"
            description="We maintain a safe, respectful, and productive environment for all members."
            className="mb-10"
          />
          <div className="space-y-3">
            {[
              'Be respectful and kind to all members at all times.',
              'Share constructive feedback — never personal criticism.',
              'No spam, promotional content, or irrelevant links.',
              'Maintain confidentiality of shared personal experiences.',
              'Support fellow members in their growth journeys.',
              'Report any concerns to the community management team.',
            ].map((rule, i) => (
              <div key={i} className="bg-white rounded-xl p-4 flex items-start gap-3 border border-stone-100">
                <div className="w-6 h-6 rounded-full bg-[#5C6B3A] text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">
                  {i + 1}
                </div>
                <p className="text-stone-700 text-sm">{rule}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Join Today"
            title="Your Tribe is Waiting"
            description="Over 1,000 students have already found their community at The Speaking Studio. Don't miss out — join us today."
            primaryCta={{ label: 'Join the Community', href: '/forms' }}
            secondaryCta={{ label: 'Contact Us', href: '/contact' }}
          />
        </div>
      </section>
    </>
  );
}
