'use client';
import Link from 'next/link';
import { Mail, ArrowRight, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function ContactPageClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Have a question, collaboration idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact methods */}
            <div>
              <SectionHeading
                eyebrow="Reach Out"
                title="Ways to Connect"
                centered={false}
                className="mb-8"
              />

              <div className="space-y-4">
                <a
                  href="mailto:thespeakingstudio25@gmail.com"
                  className="flex items-center gap-4 p-5 bg-[#F5F0E8] rounded-2xl border border-stone-100 hover:bg-white hover:shadow-md hover:border-[#C49A6C]/30 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-[#5C6B3A]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-[#5C6B3A]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C] text-sm mb-0.5">Email Us</div>
                    <div className="text-stone-500 text-sm">thespeakingstudio25@gmail.com</div>
                    <div className="text-[#5C6B3A] text-xs font-medium mt-1 group-hover:underline">We reply within 24-48 hours</div>
                  </div>
                </a>

                <a
                  href="https://instagram.com/the.speaking.studio?igsh=cXY1Y3RyM2I3dzcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#F5F0E8] rounded-2xl border border-stone-100 hover:bg-white hover:shadow-md hover:border-pink-200 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-pink-500">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C] text-sm mb-0.5">Instagram DMs</div>
                    <div className="text-stone-500 text-sm">@the.speaking.studio</div>
                    <div className="text-pink-500 text-xs font-medium mt-1 group-hover:underline">Fastest response via Instagram</div>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@the.speaking.studio?si=tYlJhCxiUC801D6I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-[#F5F0E8] rounded-2xl border border-stone-100 hover:bg-white hover:shadow-md hover:border-red-200 transition-all duration-200 group"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-red-500">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C] text-sm mb-0.5">YouTube</div>
                    <div className="text-stone-500 text-sm">@the.speaking.studio</div>
                    <div className="text-red-500 text-xs font-medium mt-1 group-hover:underline">Watch our sessions and content</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-[#F5F0E8] rounded-2xl border border-stone-100">
                  <div className="w-12 h-12 bg-[#C49A6C]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-[#C49A6C]" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#1C1C1C] text-sm mb-0.5">Location</div>
                    <div className="text-stone-500 text-sm">India (Online-First Organisation)</div>
                    <div className="text-stone-400 text-xs mt-1">Serving students across the country</div>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="mt-8">
                <h3 className="font-display font-semibold text-[#1C1C1C] text-base mb-4">Quick Links</h3>
                <div className="flex flex-wrap gap-3">
                  <Link href="/faq" className="flex items-center gap-1.5 text-sm text-[#5C6B3A] font-medium hover:underline">
                    <ArrowRight size={14} /> FAQ Page
                  </Link>
                  <Link href="/forms" className="flex items-center gap-1.5 text-sm text-[#5C6B3A] font-medium hover:underline">
                    <ArrowRight size={14} /> Registration Forms
                  </Link>
                  <Link href="/join" className="flex items-center gap-1.5 text-sm text-[#5C6B3A] font-medium hover:underline">
                    <ArrowRight size={14} /> Join the Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <div className="bg-[#F5F0E8] rounded-3xl p-8 border border-stone-100">
              <h3 className="font-display font-bold text-[#1C1C1C] text-2xl mb-6">Send Us a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">First Name</label>
                    <input
                      type="text"
                      id="contact-first-name"
                      placeholder="Your first name"
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-[#1C1C1C] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1.5">Last Name</label>
                    <input
                      type="text"
                      id="contact-last-name"
                      placeholder="Your last name"
                      className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-[#1C1C1C] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-[#1C1C1C] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Subject</label>
                  <select
                    id="contact-subject"
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-stone-600 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-sm"
                  >
                    <option>General Inquiry</option>
                    <option>Program Registration</option>
                    <option>Mentorship Application</option>
                    <option>Collaboration / Partnership</option>
                    <option>Team Application</option>
                    <option>Feedback</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us how we can help you..."
                    className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl text-[#1C1C1C] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit"
                  className="w-full py-4 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-colors duration-200 shadow-sm"
                >
                  Send Message
                </button>
                <p className="text-stone-400 text-xs text-center">
                  We typically respond within 24–48 hours. For urgent matters, reach out via Instagram DMs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
