'use client';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Sparkles, Award } from 'lucide-react';
import { type TeamMember } from '@/data/team';


interface TeamCardProps {
  member: TeamMember;
  index?: number;
  featured?: boolean;
}

export default function TeamCard({ member, index = 0, featured = false }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group bg-white rounded-3xl border border-stone-200/80 p-5 sm:p-6 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden ${
        featured ? 'ring-2 ring-[#C49A6C]/50 shadow-xl' : 'shadow-md'
      }`}
    >
      {/* Decorative top background glow */}
      <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-[#C49A6C]/10 blur-2xl group-hover:bg-[#5C6B3A]/15 transition-colors duration-500 pointer-events-none" />

      <div>
        {/* Photo Container */}
        <div className="relative w-full aspect-[4/4.5] sm:h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-stone-100 to-stone-200 mb-5 shadow-inner">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ objectPosition: member.imagePosition || 'center top' }}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#5C6B3A] to-[#C49A6C] flex items-center justify-center text-white font-display font-bold text-5xl">
              {member.name.charAt(0)}
            </div>
          )}

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />

          {/* Badge at top of image */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            {member.isFounder ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#C49A6C] text-white shadow-md backdrop-blur-md">
                <Sparkles size={12} />
                Founder &amp; CEO
              </span>
            ) : member.isExecutive ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#5C6B3A] text-white shadow-md backdrop-blur-md">
                <Award size={12} />
                Executive Board
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-black/50 text-white shadow-md backdrop-blur-md">
                Department Lead
              </span>
            )}
          </div>
        </div>

        {/* Member Info */}
        <div className="text-center mb-3">
          <h3 className="font-display font-bold text-[#1C1C1C] text-xl mb-1 group-hover:text-[#5C6B3A] transition-colors">
            {member.name}
          </h3>
          <p className="text-[#C49A6C] font-semibold text-sm mb-2">
            {member.position}
          </p>
          <span className="inline-block text-stone-500 text-xs px-3 py-1 rounded-full bg-[#F5F0E8] font-medium border border-stone-200/60">
            {member.department}
          </span>
        </div>

        {/* Bio */}
        <p className="text-stone-600 text-sm leading-relaxed text-center mb-6">
          {member.bio}
        </p>
      </div>

      {/* Social Links */}
      <div className="pt-4 border-t border-stone-100 flex items-center justify-center gap-3">
        {member.social.instagram && (
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-stone-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-200 shadow-sm hover:shadow"
            aria-label={`${member.name} on Instagram`}
            title="Instagram"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        )}
        {member.social.email && (
          <a
            href={`mailto:${member.social.email}`}
            className="w-10 h-10 rounded-full bg-[#F5F0E8] flex items-center justify-center text-stone-600 hover:text-[#5C6B3A] hover:bg-green-50 transition-all duration-200 shadow-sm hover:shadow"
            aria-label={`Email ${member.name}`}
            title="Email"
          >
            <Mail size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}

