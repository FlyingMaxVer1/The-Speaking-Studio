'use client';

import { useState } from 'react';
import { ExternalLink, Ticket } from 'lucide-react';
import EventSelectModal from './EventSelectModal';

export default function SummitHeroCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsModalOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C6B3A] text-white font-semibold text-base hover:bg-[#404B28] shadow-lg hover:shadow-xl transition-all duration-200 group cursor-pointer"
      >
        <Ticket size={18} />
        <span>Register on ChampArena</span>
        <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-90" />
      </button>

      <EventSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Select Championship on ChampArena"
        subtitle="Choose your event track to complete official registration on ChampArena."
      />
    </>
  );
}
