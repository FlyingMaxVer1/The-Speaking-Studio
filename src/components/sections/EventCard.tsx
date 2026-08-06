'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, Wifi, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { type Event } from '@/data/events';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';

const typeColors: Record<string, string> = {
  workshop: 'bg-[#5C6B3A]/10 text-[#5C6B3A]',
  conference: 'bg-[#C49A6C]/10 text-[#C49A6C]',
  competition: 'bg-purple-100 text-purple-700',
  webinar: 'bg-blue-100 text-blue-700',
  session: 'bg-stone-100 text-stone-600',
  seminar: 'bg-amber-100 text-amber-700',
};

const statusColors: Record<string, string> = {
  upcoming: 'bg-green-100 text-green-700',
  past: 'bg-stone-100 text-stone-500',
  ongoing: 'bg-blue-100 text-blue-700',
};

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col"
    >
      {/* Header badges */}
      <div className="flex items-center gap-2 mb-4 flex-wrap">
        <span className={cn('text-xs px-2.5 py-1 rounded-full font-medium capitalize', typeColors[event.type])}>
          {event.type}
        </span>
        <span className={cn('text-xs px-2.5 py-1 rounded-full font-medium capitalize', statusColors[event.status])}>
          {event.status}
        </span>
        {event.isOnline && (
          <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-indigo-100 text-indigo-700 flex items-center gap-1">
            <Wifi size={10} />
            Online
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-[#1C1C1C] text-lg leading-tight mb-3">
        {event.title}
      </h3>

      {/* Description */}
      <p className="text-stone-500 text-sm leading-relaxed mb-5 flex-1">
        {event.description}
      </p>

      {/* Meta */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-stone-500 text-xs">
          <Calendar size={14} className="text-[#C49A6C]" />
          {formatDate(event.date)}
        </div>
        {event.time && (
          <div className="flex items-center gap-2 text-stone-500 text-xs">
            <Clock size={14} className="text-[#C49A6C]" />
            {event.time}
          </div>
        )}
        {event.location && (
          <div className="flex items-center gap-2 text-stone-500 text-xs">
            <MapPin size={14} className="text-[#C49A6C]" />
            {event.location}
          </div>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {event.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
            {tag}
          </span>
        ))}
      </div>

      {/* CTA */}
      {event.status === 'upcoming' && event.registrationUrl && (
        <Link
          href={event.registrationUrl}
          className="mt-auto flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#5C6B3A] text-white text-sm font-semibold hover:bg-[#404B28] transition-colors duration-200 group"
        >
          Register Now
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      )}
    </motion.div>
  );
}
