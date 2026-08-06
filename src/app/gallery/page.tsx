'use client';
import { useState } from 'react';
import SectionHeading from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

const categories = ['All', 'Events', 'Workshops', 'Sessions', 'Community'];

// Placeholder gallery items (replace with real images)
const galleryItems = Array.from({ length: 24 }, (_, i) => ({
  id: `img-${i + 1}`,
  category: categories[Math.floor(Math.random() * (categories.length - 1)) + 1],
  alt: `Speaking Studio Gallery Image ${i + 1}`,
  span: [2, 1, 1, 2, 1, 1, 1, 2][i % 8],
  bg: ['#5C6B3A', '#C49A6C', '#8B6914', '#404B28', '#A07845', '#7A8F4E'][i % 6],
}));

const speakingQuotes = [
  'Find Your Voice',
  'Lead with Confidence',
  'Words Have Power',
  'Think. Speak. Lead.',
  'Debate to Grow',
  'MUN: Be a Diplomat',
  'Speak Up. Stand Out.',
  'Research. Argue. Win.',
  'Your Story Matters',
  'Lead the Change',
  'Communication is Key',
  'Build Your Brand',
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#5C6B3A] to-[#404B28] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Our <span className="text-[#C49A6C]">Gallery</span>
          </h1>
          <p className="text-white/75 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Moments from our sessions, workshops, events, and community — captured in time.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-[#5C6B3A] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={item.id}
                className={cn(
                  'break-inside-avoid rounded-2xl overflow-hidden cursor-pointer group',
                  item.span === 2 ? 'h-64' : 'h-40',
                )}
                style={{ backgroundColor: item.bg }}
              >
                <div className="w-full h-full flex items-center justify-center p-4 relative group-hover:scale-105 transition-transform duration-500">
                  {/* Placeholder content */}
                  <div className="text-center">
                    <div className="text-white/20 text-5xl font-display font-bold mb-2">TSS</div>
                    <div className="text-white/60 text-xs font-medium px-3 text-center">
                      {speakingQuotes[i % speakingQuotes.length]}
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-2xl" />
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-black/40 px-2 py-1 rounded-lg backdrop-blur-sm">{item.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-stone-400 text-sm">
              📸 Real photos coming soon! Follow us on{' '}
              <a href="https://instagram.com/the.speaking.studio" target="_blank" rel="noopener noreferrer" className="text-[#5C6B3A] underline">
                Instagram
              </a>{' '}
              to see the latest moments.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
