'use client';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail } from 'lucide-react';
import { type TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member, index = 0 }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center"
    >
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#5C6B3A] to-[#C49A6C] flex items-center justify-center text-white font-display font-bold text-2xl shadow-lg">
          {member.name.charAt(0)}
        </div>
        {member.isFounder && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#C49A6C] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">★</span>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="mb-1 flex items-center gap-2 flex-wrap justify-center">
        <h3 className="font-display font-bold text-[#1C1C1C] text-base">{member.name}</h3>
      </div>
      <div className="text-[#C49A6C] text-sm font-medium mb-1">{member.position}</div>
      <div className="text-stone-400 text-xs mb-4 px-2 py-0.5 rounded-full bg-stone-100">{member.department}</div>

      <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">{member.bio}</p>

      {/* Social links */}
      <div className="flex items-center gap-3">
        {member.social.instagram && (
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-pink-500 hover:bg-pink-50 transition-all duration-200"
            aria-label="Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 hover:text-[#C49A6C] hover:bg-amber-50 transition-all duration-200"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
