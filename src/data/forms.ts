// src/data/forms.ts

export interface FormItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  ctaText: string;
  formUrl?: string;
  isComingSoon?: boolean;
  category: 'registration' | 'application' | 'community' | 'verification' | 'feedback' | 'volunteer';
  color: string;
}

export const forms: FormItem[] = [
  {
    id: 'mentorship-reg',
    title: 'Mentorship Registration',
    description: 'Apply to join our mentorship program and get paired with an experienced mentor who will guide your personal and professional growth.',
    icon: 'GraduationCap',
    ctaText: 'Apply for Mentorship',
    formUrl: 'https://docs.google.com/forms',
    category: 'application',
    color: '#5C6B3A',
  },
  {
    id: 'session-reg',
    title: 'Session Registration',
    description: 'Register for our upcoming workshops, bootcamps, and training sessions. Limited seats available — register early to secure your spot.',
    icon: 'CalendarCheck',
    ctaText: 'Register for Sessions',
    formUrl: 'https://docs.google.com/forms',
    category: 'registration',
    color: '#C49A6C',
  },
  {
    id: 'team-recruitment',
    title: 'Team Recruitment',
    description: 'Want to be part of The Speaking Studio team? Apply to join us as a coordinator, content creator, mentor, or community manager.',
    icon: 'Users',
    ctaText: 'Join the Team',
    formUrl: 'https://docs.google.com/forms',
    category: 'application',
    color: '#8B6914',
  },
  {
    id: 'community-reg',
    title: 'Community Registration',
    description: 'Join The Speaking Studio community to access resources, connect with peers, receive updates about events, and be part of a thriving student network.',
    icon: 'UserPlus',
    ctaText: 'Join the Community',
    formUrl: 'https://docs.google.com/forms',
    category: 'community',
    color: '#5C6B3A',
  },
  {
    id: 'whatsapp-reg',
    title: 'WhatsApp Community Registration',
    description: 'Join our official WhatsApp community to receive instant updates, announcements, session reminders, and connect with fellow members.',
    icon: 'MessageCircle',
    ctaText: 'Join WhatsApp Community',
    formUrl: 'https://docs.google.com/forms',
    category: 'community',
    color: '#25D366',
  },
  {
    id: 'volunteer-reg',
    title: 'Volunteer Registration',
    description: 'Volunteer with us at events, workshops, and conferences. Give back to the community while gaining valuable experience and recognition.',
    icon: 'Heart',
    ctaText: 'Volunteer With Us',
    formUrl: 'https://docs.google.com/forms',
    category: 'volunteer',
    color: '#C49A6C',
  },
  {
    id: 'feedback-form',
    title: 'Feedback Form',
    description: 'Share your feedback about our sessions, events, or overall experience. Your insights help us continuously improve and serve you better.',
    icon: 'Star',
    ctaText: 'Share Feedback',
    formUrl: 'https://docs.google.com/forms',
    category: 'feedback',
    color: '#8B6914',
  },
  {
    id: 'certificate-verify',
    title: 'Certificate Verification',
    description: 'Verify the authenticity of certificates issued by The Speaking Studio. This service will be available soon for all certificate holders.',
    icon: 'BadgeCheck',
    ctaText: 'Coming Soon',
    isComingSoon: true,
    category: 'verification',
    color: '#5C6B3A',
  },
];
