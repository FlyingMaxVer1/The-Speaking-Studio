'use client';

import { useState } from 'react';
import { Sparkles, CheckCircle2, ExternalLink, Ticket } from 'lucide-react';
import { passes } from '@/data/tssds';
import EventSelectModal from './EventSelectModal';

export default function PassesGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Select Your Championship Track');

  const handleOpenComboModal = (passTitle: string) => {
    setModalTitle(`Choose Track for ${passTitle}`);
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
        {passes.map((pass) => {
          const isDirect = Boolean(pass.registrationUrl);

          return (
            <div
              key={pass.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                pass.isPopular
                  ? 'bg-[#1C1C1C] text-white border-2 border-[#C49A6C] shadow-2xl lg:-translate-y-2'
                  : 'bg-white text-[#1C1C1C] border border-stone-200 shadow-sm hover:shadow-md'
              }`}
            >
              {/* Popular or Savings Badge */}
              {pass.badge && (
                <div className="absolute -top-3 left-6">
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${
                      pass.isPopular
                        ? 'bg-[#C49A6C] text-[#1C1C1C]'
                        : 'bg-[#5C6B3A] text-white'
                    }`}
                  >
                    <Sparkles size={12} />
                    {pass.badge}
                  </span>
                </div>
              )}

              <div>
                <h3
                  className={`font-display font-bold text-xl sm:text-2xl mt-2 ${
                    pass.isPopular ? 'text-white' : 'text-[#1C1C1C]'
                  }`}
                >
                  {pass.title}
                </h3>

                <p
                  className={`text-xs mt-1 mb-6 leading-relaxed ${
                    pass.isPopular ? 'text-stone-300' : 'text-stone-600'
                  }`}
                >
                  {pass.description}
                </p>

                {/* Price Block */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl tracking-tight">
                    ₹{pass.price}
                  </span>
                  {pass.originalPrice && (
                    <span
                      className={`text-sm line-through ${
                        pass.isPopular ? 'text-stone-500' : 'text-stone-400'
                      }`}
                    >
                      ₹{pass.originalPrice}
                    </span>
                  )}
                  <span
                    className={`text-xs font-medium ${
                      pass.isPopular ? 'text-stone-400' : 'text-stone-500'
                    }`}
                  >
                    / delegate
                  </span>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 mb-8 text-xs sm:text-sm">
                  {pass.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle2
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          pass.isPopular ? 'text-[#C49A6C]' : 'text-[#5C6B3A]'
                        }`}
                      />
                      <span className={pass.isPopular ? 'text-stone-200' : 'text-stone-700'}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Primary CTA */}
              {isDirect ? (
                <a
                  href={pass.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm ${
                    pass.isPopular
                      ? 'bg-[#C49A6C] text-[#1C1C1C] hover:bg-[#D4B48A]'
                      : 'bg-[#5C6B3A] text-white hover:bg-[#404B28]'
                  }`}
                >
                  <span>Book on ChampArena</span>
                  <ExternalLink size={15} />
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => handleOpenComboModal(pass.title)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm cursor-pointer ${
                    pass.isPopular
                      ? 'bg-[#C49A6C] text-[#1C1C1C] hover:bg-[#D4B48A]'
                      : 'bg-[#5C6B3A] text-white hover:bg-[#404B28]'
                  }`}
                >
                  <Ticket size={16} />
                  <span>Select Track & Book</span>
                </button>
              )}
            </div>
          );
        })}
      </div>

      <EventSelectModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title={modalTitle}
        subtitle="Individual track passes and registrations are officially processed through ChampArena."
      />
    </>
  );
}
