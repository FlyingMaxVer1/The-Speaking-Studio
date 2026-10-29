// src/data/forms.ts

import {
  CHAMPARENA_TSSDS_MUN_URL,
  CHAMPARENA_TAKKAR_DEBATE_URL,
  CHAMPARENA_DIL_KI_BAAT_URL,
  TSSDS_REGISTRATION_URL,
} from './tssds';

export const FREE_MENTORSHIP_FORM_URL = 'https://forms.gle/SbNxqt83H2QTgbcf6';
export const JOIN_TEAM_FORM_URL = 'https://forms.gle/BUAZyxXZqm3so6fv5';
export const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/IL60UtWXLFED7ODU0eYtLz';

export interface FormItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  ctaText: string;
  formUrl: string;
  isComingSoon?: boolean;
  category: 'registration' | 'application' | 'community';
  color: string;
  badge?: string;
}

export const champarenaCompetitions: FormItem[] = [
  {
    id: 'tssds-mun',
    title: 'TSSDS 2027 – MUN',
    description:
      'Official Model United Nations track at The Speaking Studio Diplomacy Summit 2027. Represent sovereign nations in high-stakes simulations. Ticketing powered by ChampArena.',
    icon: 'Globe',
    ctaText: 'Book on ChampArena',
    formUrl: CHAMPARENA_TSSDS_MUN_URL,
    category: 'registration',
    color: '#5C6B3A',
    badge: 'Ticketing Partner',
  },
  {
    id: 'takkar-debate',
    title: 'Takkar – Debate Championship',
    description:
      'Structured, high-tempo national debate championship at TSSDS 2027. Defend motions with logic and conviction. Official tickets on ChampArena.',
    icon: 'MessageSquare',
    ctaText: 'Book on ChampArena',
    formUrl: CHAMPARENA_TAKKAR_DEBATE_URL,
    category: 'registration',
    color: '#8B6914',
    badge: 'Ticketing Partner',
  },
  {
    id: 'dil-ki-baat',
    title: 'Dil Ki Baat – Public Speaking',
    description:
      'Command the national digital stage with rhetorical precision and storytelling. Flagship oratory championship at TSSDS 2027 on ChampArena.',
    icon: 'Mic',
    ctaText: 'Book on ChampArena',
    formUrl: CHAMPARENA_DIL_KI_BAAT_URL,
    category: 'registration',
    color: '#C49A6C',
    badge: 'Ticketing Partner',
  },
];

export const forms: FormItem[] = [
  ...champarenaCompetitions,
  {
    id: 'free-mentorship',
    title: 'Free Mentorship Session',
    description:
      'Register for our free interactive mentoring sessions led by experienced mentors to enhance your public speaking, debate, and communication skills.',
    icon: 'GraduationCap',
    ctaText: 'Register for Free Class',
    formUrl: FREE_MENTORSHIP_FORM_URL,
    category: 'registration',
    color: '#5C6B3A',
    badge: 'Google Form',
  },
  {
    id: 'join-team',
    title: 'Join the Team',
    description:
      'Want to be part of The Speaking Studio team? Apply to join us as a mentor, coordinator, content creator, or community manager.',
    icon: 'Users',
    ctaText: 'Join the Team',
    formUrl: JOIN_TEAM_FORM_URL,
    category: 'application',
    color: '#C49A6C',
    badge: 'Google Form',
  },
];
