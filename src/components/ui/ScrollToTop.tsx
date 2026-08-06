'use client';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-[#5C6B3A] text-white rounded-2xl shadow-lg hover:bg-[#404B28] hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
    </button>
  );
}
