// src/data/forms.ts

export const FREE_MENTORSHIP_FORM_URL = 'https://forms.gle/SbNxqt83H2QTgbcf6';
export const JOIN_TEAM_FORM_URL = 'https://forms.gle/BUAZyxXZqm3so6fv5';
export const WHATSAPP_COMMUNITY_URL = 'https://chat.whatsapp.com/Fzeglh6Qbkd76Eh7MRz8kd?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGneCZ6bpHfvysyfFX_W-n4L0sGnmCp6AEfk1lH6cscFHVcPEuEhHrj1-tRf9g_aem_oEyBccgzUabEIOwUtvTzog';

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
    id: 'free-mentorship',
    title: 'Free Mentorship Session',
    description: 'Register for our free interactive mentoring sessions led by experienced mentors to enhance your public speaking, debate, and communication skills.',
    icon: 'GraduationCap',
    ctaText: 'Register for Free Class',
    formUrl: FREE_MENTORSHIP_FORM_URL,
    category: 'registration',
    color: '#5C6B3A',
  },
  {
    id: 'join-team',
    title: 'Join the Team',
    description: 'Want to be part of The Speaking Studio team? Apply to join us as a mentor, coordinator, content creator, or community manager.',
    icon: 'Users',
    ctaText: 'Join the Team',
    formUrl: JOIN_TEAM_FORM_URL,
    category: 'application',
    color: '#C49A6C',
  },
];

