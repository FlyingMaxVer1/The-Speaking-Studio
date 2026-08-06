import type { Metadata } from 'next';
import Link from 'next/link';
import { Home } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAF7] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* 404 decorative */}
        <div className="relative mb-8">
          <div className="text-[180px] font-display font-black text-[#5C6B3A]/10 leading-none select-none">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div>
              <div className="text-6xl mb-3">🎤</div>
            </div>
          </div>
        </div>

        <h1 className="font-display font-bold text-3xl text-[#1C1C1C] mb-4">
          Oops! This Page Lost Its Voice
        </h1>
        <p className="text-stone-500 text-base leading-relaxed mb-8">
          The page you are looking for doesn&apos;t exist or may have been moved. Don&apos;t worry — even the best speakers sometimes go off-script.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#5C6B3A] text-white rounded-xl font-semibold text-sm hover:bg-[#404B28] transition-colors shadow-sm"
          >
            <Home size={16} />
            Back to Home
          </Link>
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white border border-stone-200 text-stone-700 rounded-xl font-semibold text-sm hover:border-[#C49A6C] hover:text-[#C49A6C] transition-all"
          >
            Explore Programs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#C49A6C] text-white rounded-xl font-semibold text-sm hover:bg-[#A07845] transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
