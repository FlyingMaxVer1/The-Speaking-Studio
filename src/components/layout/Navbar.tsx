'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Programs',
    href: '/programs',
    dropdown: [
      { label: 'Public Speaking', href: '/programs/public-speaking' },
      { label: 'Model United Nations', href: '/programs/mun' },
      { label: 'Debate', href: '/programs/debate' },
      { label: 'English Communication', href: '/programs/english-communication' },
      { label: 'Interview Preparation', href: '/programs/interview-preparation' },
      { label: 'Presentation Skills', href: '/programs/presentation-skills' },
      { label: 'Leadership Development', href: '/programs/leadership-development' },
      { label: 'Research Skills', href: '/programs/research-skills' },
      { label: 'Personality Development', href: '/programs/personality-development' },
    ],
  },
  { label: 'Mentorship', href: '/mentorship' },
  { label: 'Community', href: '/community' },
  { label: 'Events', href: '/events' },
  { label: 'Resources', href: '/resources' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-stone-100'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-[#C49A6C]/30 group-hover:ring-[#C49A6C] transition-all duration-300">
              <Image
                src="/logo.png"
                alt="The Speaking Studio"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-display font-bold text-sm lg:text-base text-[#1C1C1C] leading-tight">
                The Speaking
              </span>
              <span className="font-display font-bold text-sm lg:text-base text-[#C49A6C] leading-tight">
                Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                      pathname.startsWith(link.href)
                        ? 'text-[#5C6B3A] bg-[#5C6B3A]/10'
                        : 'text-stone-600 hover:text-[#5C6B3A] hover:bg-stone-100'
                    )}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        'transition-transform duration-200',
                        activeDropdown === link.label ? 'rotate-180' : ''
                      )}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-stone-100 overflow-hidden py-2"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'block px-4 py-2.5 text-sm transition-colors duration-150',
                              pathname === item.href
                                ? 'text-[#5C6B3A] bg-[#5C6B3A]/10 font-medium'
                                : 'text-stone-600 hover:text-[#5C6B3A] hover:bg-stone-50'
                            )}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                    pathname === link.href
                      ? 'text-[#5C6B3A] bg-[#5C6B3A]/10'
                      : 'text-stone-600 hover:text-[#5C6B3A] hover:bg-stone-100'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/forms"
              className="px-4 py-2 text-sm font-semibold text-stone-600 border border-stone-200 rounded-xl hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all duration-200"
            >
              Forms
            </Link>
            <Link
              href="/join"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#5C6B3A] rounded-xl hover:bg-[#404B28] transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Join Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                      pathname === link.href || pathname.startsWith(link.href + '/')
                        ? 'text-[#5C6B3A] bg-[#5C6B3A]/10'
                        : 'text-stone-600 hover:bg-stone-50'
                    )}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#C49A6C]/30 pl-3">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            'block px-3 py-2 rounded-lg text-xs font-medium transition-colors',
                            pathname === item.href
                              ? 'text-[#5C6B3A] bg-[#5C6B3A]/10'
                              : 'text-stone-500 hover:text-[#5C6B3A]'
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 pb-2 flex flex-col gap-2">
                <Link
                  href="/forms"
                  className="block px-4 py-3 text-center text-sm font-semibold text-stone-600 border border-stone-200 rounded-xl hover:border-[#C49A6C]"
                >
                  Forms
                </Link>
                <Link
                  href="/join"
                  className="block px-4 py-3 text-center text-sm font-semibold text-white bg-[#5C6B3A] rounded-xl hover:bg-[#404B28]"
                >
                  Join Us
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
