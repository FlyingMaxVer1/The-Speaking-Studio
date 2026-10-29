'use client';

import { useState } from 'react';
import { ExternalLink, Ticket } from 'lucide-react';
import EventSelectModal from './EventSelectModal';

export default function BottomSummitCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#5C6B3A] text-white font-bold text-base hover:bg-[#7A8F4E] shadow-xl hover:shadow-2xl transition-all duration-200 group cursor-pointer"
      >
        <Ticket size={18} />
        <span>Book Passes on ChampArena</span>
        <ExternalLink size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </button>

      <EventSelectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Register for TSSDS 2027 on ChampArena"
        subtitle="Select your preferred championship track to complete registration."
      />
    </>
  );
}
