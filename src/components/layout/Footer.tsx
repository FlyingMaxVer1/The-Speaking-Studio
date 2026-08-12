import Link from 'next/link';
import Image from 'next/image';
import ScrollToTop from '@/components/ui/ScrollToTop';
import {
  Mail,
  ArrowUp,
  Heart,
  MapPin,
} from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Team', href: '/team' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Achievements', href: '/achievements' },
    { label: 'FAQ', href: '/faq' },
  ],
  Programs: [
    { label: 'Public Speaking', href: '/programs/public-speaking' },
    { label: 'MUN', href: '/programs/mun' },
    { label: 'Debate', href: '/programs/debate' },
    { label: 'Leadership', href: '/programs/leadership-development' },
    { label: 'Communication', href: '/programs/english-communication' },
    { label: 'Interview Prep', href: '/programs/interview-preparation' },
    { label: 'All Programs', href: '/programs' },
  ],
  'Get Involved': [
    { label: 'Join Us', href: '/join' },
    { label: 'Mentorship', href: '/mentorship' },
    { label: 'Community', href: '/community' },
    { label: 'Forms', href: '/forms' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};



export default function Footer() {
  return (
    <>
      <footer className="bg-[#1C1C1C] text-white">
        {/* Main footer */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-8">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-[#C49A6C]/40">
                  <Image
                    src="/logo.png"
                    alt="The Speaking Studio"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <div className="font-display font-bold text-lg leading-tight">The Speaking Studio</div>
                  <div className="text-xs text-[#C49A6C] font-medium">Empowering Tomorrow&apos;s Leaders</div>
                </div>
              </Link>

              <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                A youth-led educational organisation dedicated to developing confidence, 
                communication, leadership, diplomacy, and life skills among students.
              </p>

              {/* Social links */}
              <div className="flex items-center gap-3 flex-wrap">
                {/* WhatsApp */}
                <a
                  href="https://chat.whatsapp.com/Fzeglh6Qbkd76Eh7MRz8kd?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGneCZ6bpHfvysyfFX_W-n4L0sGnmCp6AEfk1lH6cscFHVcPEuEhHrj1-tRf9g_aem_oEyBccgzUabEIOwUtvTzog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-stone-400 hover:text-[#25D366] hover:bg-white/20 transition-all duration-200"
                  aria-label="WhatsApp Community"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com/the.speaking.studio?igsh=cXY1Y3RyM2I3dzcz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-stone-400 hover:text-pink-500 hover:bg-white/20 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                {/* YouTube */}
                <a
                  href="https://youtube.com/@the.speaking.studio?si=tYlJhCxiUC801D6I"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-white/20 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                {/* Pinterest */}
                <a
                  href="https://pin.it/3h3gVm4Uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-white/20 transition-all duration-200"
                  aria-label="Pinterest"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                  </svg>
                </a>
                {/* Email */}
                <a
                  href="mailto:thespeakingstudio25@gmail.com"
                  className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-stone-400 hover:text-[#C49A6C] hover:bg-white/20 transition-all duration-200"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* Contact info */}
              <div className="space-y-2">
                <a
                  href="mailto:thespeakingstudio25@gmail.com"
                  className="flex items-center gap-2 text-stone-400 hover:text-[#C49A6C] text-sm transition-colors"
                >
                  <Mail size={14} />
                  thespeakingstudio25@gmail.com
                </a>
                <div className="flex items-center gap-2 text-stone-500 text-sm">
                  <MapPin size={14} />
                  India (Online-first Organisation)
                </div>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).filter(([key]) => key !== 'Legal').map(([section, links]) => (
              <div key={section} className="space-y-4">
                <h3 className="text-white font-display font-semibold text-sm">{section}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-stone-400 hover:text-[#C49A6C] text-sm transition-colors duration-150"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-stone-500 text-xs text-center sm:text-left">
              © {new Date().getFullYear()} The Speaking Studio. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-stone-500 text-xs">
              Made with <Heart size={12} className="text-[#C49A6C] mx-1" fill="currentColor" /> for student growth
            </div>
            <div className="flex items-center gap-4">
              {footerLinks.Legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-stone-500 hover:text-stone-400 text-xs transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </>
  );
}
