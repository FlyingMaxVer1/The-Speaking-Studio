// src/data/achievements.ts

export interface Achievement {
  id: string;
  title: string;
  value: string;
  numericValue: number;
  suffix?: string;
  description: string;
  icon: string;
  color: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  {
    id: 'students',
    title: 'Students Mentored',
    value: '500+',
    numericValue: 500,
    suffix: '+',
    description: 'Students who have completed our programs and grown into confident communicators.',
    icon: 'Users',
    color: '#5C6B3A',
  },
  {
    id: 'sessions',
    title: 'Sessions Conducted',
    value: '200+',
    numericValue: 200,
    suffix: '+',
    description: 'Live training sessions, workshops, and webinars delivered by expert mentors.',
    icon: 'Video',
    color: '#C49A6C',
  },
  {
    id: 'community',
    title: 'Community Members',
    value: '1000+',
    numericValue: 1000,
    suffix: '+',
    description: 'Active members in The Speaking Studio community network.',
    icon: 'Globe',
    color: '#8B6914',
  },
  {
    id: 'events',
    title: 'Events Hosted',
    value: '50+',
    numericValue: 50,
    suffix: '+',
    description: 'Workshops, MUN conferences, competitions, and community events organised.',
    icon: 'Calendar',
    color: '#5C6B3A',
  },
  {
    id: 'certificates',
    title: 'Certificates Issued',
    value: '300+',
    numericValue: 300,
    suffix: '+',
    description: 'Certificates of participation and completion awarded to deserving students.',
    icon: 'Award',
    color: '#C49A6C',
  },
  {
    id: 'programs',
    title: 'Programs Offered',
    value: '9',
    numericValue: 9,
    description: 'Comprehensive skill development programs designed for holistic student growth.',
    icon: 'BookOpen',
    color: '#8B6914',
  },
];

export const milestones: Milestone[] = [
  {
    id: 'm1',
    year: '2025',
    title: 'The Speaking Studio is Founded',
    description: 'Launched with a mission to empower students with communication, leadership, and life skills. Initial programs included Public Speaking and English Communication.',
    icon: 'Flag',
  },
  {
    id: 'm2',
    year: '2025',
    title: 'Community Reaches 500 Members',
    description: 'The Speaking Studio community rapidly grows to 500 active members across multiple cities, driven by word-of-mouth and impactful sessions.',
    icon: 'Users',
  },
  {
    id: 'm3',
    year: '2025',
    title: 'MUN & Debate Programs Launched',
    description: 'Expanded the program portfolio to include Model United Nations training and competitive debate coaching.',
    icon: 'Globe',
  },
  {
    id: 'm4',
    year: '2026',
    title: 'First MUN Conference Hosted',
    description: 'Successfully hosted The Speaking Studio\'s inaugural MUN conference with participants from across the region.',
    icon: 'Award',
  },
  {
    id: 'm5',
    year: '2026',
    title: '1000+ Community Members',
    description: 'The community crosses the 1,000-member milestone, making The Speaking Studio one of the fastest-growing youth educational platforms.',
    icon: 'TrendingUp',
  },
  {
    id: 'm6',
    year: '2026',
    title: 'Full Program Suite Launched',
    description: 'Launched all 9 core programs including Leadership Development, Research Skills, Personality Development, Interview Preparation, and Presentation Skills.',
    icon: 'Star',
  },
];
