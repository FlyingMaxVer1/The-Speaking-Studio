// src/data/events.ts

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  type: 'workshop' | 'conference' | 'competition' | 'webinar' | 'session' | 'seminar';
  status: 'upcoming' | 'past' | 'ongoing';
  location?: string;
  isOnline: boolean;
  registrationUrl?: string;
  image?: string;
  tags: string[];
}

export const events: Event[] = [
  {
    id: 'evt-001',
    title: 'Public Speaking Bootcamp — August 2026',
    description: 'An intensive weekend bootcamp focusing on the fundamentals of public speaking. Participants will practice speeches, receive expert feedback, and develop lasting confidence on stage.',
    date: '2026-08-20',
    time: '10:00 AM – 4:00 PM',
    type: 'workshop',
    status: 'upcoming',
    isOnline: true,
    tags: ['Public Speaking', 'Bootcamp', 'Beginners Welcome'],
    registrationUrl: '#forms',
  },
  {
    id: 'evt-002',
    title: 'The Speaking Studio MUN 2026',
    description: 'Our flagship Model United Nations conference featuring committees on Climate Change, Global Security, and Youth Empowerment. Open to students grades 8–12.',
    date: '2026-09-15',
    time: '9:00 AM – 6:00 PM',
    type: 'conference',
    status: 'upcoming',
    isOnline: false,
    location: 'To be announced',
    tags: ['MUN', 'Diplomacy', 'Leadership', 'Flagship Event'],
    registrationUrl: '#forms',
  },
  {
    id: 'evt-003',
    title: 'Debate Workshop — Parliamentary Style',
    description: 'Learn the British Parliamentary debate format in this hands-on workshop. Perfect for students new to debate or those wanting to refine their competitive skills.',
    date: '2026-08-30',
    time: '11:00 AM – 2:00 PM',
    type: 'workshop',
    status: 'upcoming',
    isOnline: true,
    tags: ['Debate', 'Parliamentary', 'Workshop'],
    registrationUrl: '#forms',
  },
  {
    id: 'evt-004',
    title: 'Leadership Masterclass with Industry Mentors',
    description: 'An exclusive webinar featuring industry professionals sharing insights on leadership, career development, and personal growth for students.',
    date: '2026-09-05',
    time: '6:00 PM – 8:00 PM',
    type: 'webinar',
    status: 'upcoming',
    isOnline: true,
    tags: ['Leadership', 'Masterclass', 'Mentorship'],
    registrationUrl: '#forms',
  },
  {
    id: 'evt-005',
    title: 'Orientation Session — August 2026',
    description: 'An introduction to The Speaking Studio — meet the team, learn about our programs, and find out how you can get involved.',
    date: '2026-08-10',
    time: '5:00 PM – 6:30 PM',
    type: 'session',
    status: 'upcoming',
    isOnline: true,
    tags: ['Orientation', 'Introduction', 'Free Event'],
    registrationUrl: '#forms',
  },
  {
    id: 'evt-006',
    title: 'Inaugural Public Speaking Championship',
    description: 'Our first inter-school public speaking competition brought together over 50 participants. Winners were felicitated with certificates and prizes.',
    date: '2026-06-15',
    type: 'competition',
    status: 'past',
    isOnline: false,
    tags: ['Competition', 'Public Speaking', 'Inter-School'],
  },
  {
    id: 'evt-007',
    title: 'Summer Communication Workshop',
    description: 'A 4-day summer workshop covering English Communication, Body Language, and Presentation Skills. Attended by 80+ students from across the city.',
    date: '2026-05-20',
    type: 'workshop',
    status: 'past',
    isOnline: false,
    tags: ['Communication', 'Summer Workshop', 'Multi-Day'],
  },
  {
    id: 'evt-008',
    title: 'Research Skills for MUN — Webinar Series',
    description: 'A 3-part webinar series teaching students how to research effectively for MUN conferences, with templates and live demonstrations.',
    date: '2026-04-10',
    type: 'webinar',
    status: 'past',
    isOnline: true,
    tags: ['Research', 'MUN', 'Webinar Series'],
  },
];
