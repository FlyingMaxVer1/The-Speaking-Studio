// src/data/resources.ts

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: 'public-speaking' | 'debate' | 'mun' | 'leadership' | 'research' | 'presentation' | 'communication' | 'general';
  type: 'guide' | 'template' | 'reading-list' | 'pdf' | 'video' | 'worksheet';
  icon: string;
  downloadUrl?: string;
  isComingSoon?: boolean;
  tags: string[];
}

export const resources: Resource[] = [
  {
    id: 'ps-guide-001',
    title: 'The Ultimate Public Speaking Guide',
    description: 'A comprehensive guide covering everything from overcoming stage fright to mastering vocal variety. Perfect for beginners and intermediate speakers.',
    category: 'public-speaking',
    type: 'guide',
    icon: 'Mic',
    downloadUrl: '#',
    tags: ['Beginner', 'Public Speaking', 'Stage Presence'],
  },
  {
    id: 'ps-guide-002',
    title: 'Speech Structure Templates',
    description: 'Ready-to-use templates for structuring persuasive, informative, and motivational speeches.',
    category: 'public-speaking',
    type: 'template',
    icon: 'FileText',
    downloadUrl: '#',
    tags: ['Templates', 'Speech Writing', 'Structure'],
  },
  {
    id: 'mun-guide-001',
    title: 'MUN Position Paper Template',
    description: 'Professional position paper template used at top MUN conferences. Includes guidelines, formatting tips, and example excerpts.',
    category: 'mun',
    type: 'template',
    icon: 'Globe',
    downloadUrl: '#',
    tags: ['MUN', 'Position Paper', 'Template'],
  },
  {
    id: 'mun-guide-002',
    title: 'Parliamentary Procedure Cheat Sheet',
    description: 'A quick-reference guide to MUN parliamentary procedure including motions, points, and committee rules.',
    category: 'mun',
    type: 'guide',
    icon: 'ClipboardList',
    downloadUrl: '#',
    tags: ['MUN', 'Parliamentary Procedure', 'Cheat Sheet'],
  },
  {
    id: 'debate-guide-001',
    title: 'Debate Argumentation Framework',
    description: 'Learn how to construct powerful arguments using PEEL, STAR, and other argumentation frameworks used in competitive debate.',
    category: 'debate',
    type: 'guide',
    icon: 'MessageSquare',
    downloadUrl: '#',
    tags: ['Debate', 'Argumentation', 'Framework'],
  },
  {
    id: 'research-guide-001',
    title: 'Research Skills Handbook',
    description: 'A step-by-step handbook for conducting academic research, evaluating sources, and synthesising information effectively.',
    category: 'research',
    type: 'guide',
    icon: 'Search',
    downloadUrl: '#',
    tags: ['Research', 'Academic', 'Sources'],
  },
  {
    id: 'leadership-guide-001',
    title: 'Leadership Styles Reading List',
    description: 'Curated list of the best books on leadership, including summaries and key takeaways for each recommendation.',
    category: 'leadership',
    type: 'reading-list',
    icon: 'Crown',
    downloadUrl: '#',
    tags: ['Leadership', 'Books', 'Reading List'],
  },
  {
    id: 'presentation-guide-001',
    title: 'Presentation Design Principles',
    description: 'Learn the visual design principles that make presentations stand out. Includes templates and before/after examples.',
    category: 'presentation',
    type: 'guide',
    icon: 'Monitor',
    downloadUrl: '#',
    tags: ['Presentation', 'Design', 'Visual Communication'],
  },
  {
    id: 'comm-guide-001',
    title: 'English Communication Workbook',
    description: 'Daily exercises, vocabulary builders, and grammar activities to improve your English communication skills systematically.',
    category: 'communication',
    type: 'worksheet',
    icon: 'BookOpen',
    downloadUrl: '#',
    tags: ['English', 'Vocabulary', 'Grammar', 'Exercises'],
  },
  {
    id: 'general-001',
    title: 'Student Soft Skills Handbook',
    description: 'A comprehensive resource covering essential soft skills for students including time management, emotional intelligence, and networking.',
    category: 'general',
    type: 'guide',
    icon: 'Sparkles',
    downloadUrl: '#',
    tags: ['Soft Skills', 'Student Guide', 'All Programs'],
  },
];

export const resourceCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'public-speaking', label: 'Public Speaking' },
  { id: 'debate', label: 'Debate' },
  { id: 'mun', label: 'MUN' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'research', label: 'Research' },
  { id: 'presentation', label: 'Presentation' },
  { id: 'communication', label: 'Communication' },
  { id: 'general', label: 'General' },
];
