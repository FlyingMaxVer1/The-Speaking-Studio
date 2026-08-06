'use client';
import { useState } from 'react';
import { Search, Download } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';
import { resources, resourceCategories } from '@/data/resources';
import { cn } from '@/lib/utils';

type IconName = keyof typeof LucideIcons;

function DynamicIcon({ name, ...props }: { name: string } & LucideProps) {
  const Icon = LucideIcons[name as IconName] as React.ComponentType<LucideProps> | undefined;
  if (!Icon) return null;
  return <Icon {...props} />;
}

const typeLabels: Record<string, string> = {
  guide: 'Guide',
  template: 'Template',
  'reading-list': 'Reading List',
  pdf: 'PDF',
  video: 'Video',
  worksheet: 'Worksheet',
};

const typeColors: Record<string, string> = {
  guide: 'bg-[#5C6B3A]/10 text-[#5C6B3A]',
  template: 'bg-[#C49A6C]/10 text-[#C49A6C]',
  'reading-list': 'bg-purple-100 text-purple-700',
  pdf: 'bg-red-100 text-red-700',
  video: 'bg-blue-100 text-blue-700',
  worksheet: 'bg-amber-100 text-amber-700',
};

export default function ResourcesPageClient() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'all' || r.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-24 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5] overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1C1C1C] mb-6">
            Resource <span className="gradient-text">Library</span>
          </h1>
          <p className="text-stone-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8">
            Free guides, templates, workbooks, and reading lists to support your learning journey.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-12 pr-4 py-4 bg-white border border-stone-200 rounded-xl text-[#1C1C1C] placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C49A6C] focus:border-transparent shadow-sm text-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {resourceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                  activeCategory === cat.id
                    ? 'bg-[#5C6B3A] text-white shadow-sm'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <p className="text-stone-500 text-sm mb-6">Showing {filtered.length} of {resources.length} resources</p>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((resource) => (
                <div key={resource.id} className="bg-white rounded-2xl border border-stone-100 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-[#5C6B3A]/10 rounded-xl flex items-center justify-center">
                      <DynamicIcon name={resource.icon} size={20} className="text-[#5C6B3A]" />
                    </div>
                    <span className={cn('text-xs px-2.5 py-1 rounded-full font-medium', typeColors[resource.type])}>
                      {typeLabels[resource.type]}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-[#1C1C1C] text-base mb-2">{resource.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {resource.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">{tag}</span>
                    ))}
                  </div>
                  {resource.downloadUrl ? (
                    <a
                      href={resource.downloadUrl}
                      className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#5C6B3A] text-white text-sm font-semibold hover:bg-[#404B28] transition-colors duration-200"
                    >
                      <Download size={14} />
                      Access Resource
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-stone-100 text-stone-400 text-sm font-semibold cursor-not-allowed">
                      Coming Soon
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-stone-500">
              <Search size={40} className="mx-auto mb-4 text-stone-300" />
              <p>No resources match your search. Try a different keyword or category.</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-[#F5F0E8]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <CTASection
            eyebrow="Need More?"
            title="Looking for Something Specific?"
            description="Can't find what you need? Reach out and we'll point you in the right direction or create it for you."
            primaryCta={{ label: 'Contact Us', href: '/contact' }}
            secondaryCta={{ label: 'Join Community', href: '/community' }}
            variant="olive"
          />
        </div>
      </section>
    </>
  );
}
