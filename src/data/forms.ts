// src/data/forms.ts

import { TSSDS_REGISTRATION_FORM_URL } from './tssds';

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
}

export const forms: FormItem[] = [
  {
    id: 'tssds-registration',
    title: 'TSSDS 2027 Pre-Registration',
    description:
      'Pre-register for The Speaking Studio Diplomacy Summit 2027. Compete in 3 National Championships (MUN, Debate, Public Speaking) with verified certificates and cash prizes.',
    icon: 'Trophy',
    ctaText: 'Pre-Register for Summit',
    formUrl: TSSDS_REGISTRATION_FORM_URL,
    category: 'registration',
    color: '#5C6B3A',
  },
  {
    id: 'free-mentorship',
    title: 'Free Mentorship Session',
    description:
      'Register for our free interactive mentoring sessions led by experienced mentors to enhance your public speaking, debate, and communication skills.',
    icon: 'GraduationCap',
    ctaText: 'Register for Free Class',
    formUrl: FREE_MENTORSHIP_FORM_URL,
    category: 'registration',
    color: '#8B6914',
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
  },
];
