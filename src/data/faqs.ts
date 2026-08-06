// src/data/faqs.ts

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const faqs: FAQ[] = [
  // General
  {
    id: 'g1',
    question: 'What is The Speaking Studio?',
    answer: 'The Speaking Studio is a youth-led educational organisation dedicated to developing confidence, communication, leadership, diplomacy, and life skills among students. We offer a range of structured programs, mentorship, and community experiences to help students unlock their full potential.',
    category: 'General',
  },
  {
    id: 'g2',
    question: 'Who can join The Speaking Studio?',
    answer: 'Our programs are primarily designed for students from grades 8 through 12, as well as early college students. However, we welcome anyone who is passionate about developing their communication and leadership skills. Age is just a number!',
    category: 'General',
  },
  {
    id: 'g3',
    question: 'Are all programs online or offline?',
    answer: 'Most of our regular sessions and workshops are conducted online via video conferencing, making them accessible to students across the country. Some special events and conferences may be held in-person. We always communicate the format clearly in advance.',
    category: 'General',
  },
  {
    id: 'g4',
    question: 'Is The Speaking Studio free?',
    answer: 'We offer a range of free community resources, free orientation sessions, and free introductory webinars. Structured programs and mentorship may have nominal fees. We believe quality education should be as accessible as possible and offer scholarships where needed.',
    category: 'General',
  },
  // Programs
  {
    id: 'p1',
    question: 'How do I register for a program?',
    answer: 'Visit our Forms page and click on the "Session Registration" form. Fill in your details, select your desired program, and submit. Our team will contact you within 48 hours to confirm your spot and share session details.',
    category: 'Programs',
  },
  {
    id: 'p2',
    question: 'How long are the programs?',
    answer: 'Program durations vary. Most programs run for 4–8 weeks with sessions conducted 1–2 times per week. Bootcamps are condensed into 1–3 days. Check individual program pages for specific timelines.',
    category: 'Programs',
  },
  {
    id: 'p3',
    question: 'Do I receive a certificate after completing a program?',
    answer: 'Yes! Upon successfully completing a program, participants receive a digital certificate from The Speaking Studio recognising their achievement and the skills developed.',
    category: 'Programs',
  },
  {
    id: 'p4',
    question: 'Can I join multiple programs at the same time?',
    answer: 'Yes, you can enrol in multiple programs. However, we recommend starting with 1–2 programs to ensure you can dedicate sufficient time and energy to get the most out of each.',
    category: 'Programs',
  },
  // Mentorship
  {
    id: 'm1',
    question: 'What is the Mentorship Program?',
    answer: 'Our Mentorship Program pairs students with experienced mentors for personalised guidance in public speaking, MUN, leadership, and other skill areas. Mentors provide one-on-one sessions, feedback, and career/academic advice.',
    category: 'Mentorship',
  },
  {
    id: 'm2',
    question: 'How do I apply for mentorship?',
    answer: 'Visit our Forms page and complete the Mentorship Registration form. We review applications on a rolling basis and match students with suitable mentors based on goals and program preferences.',
    category: 'Mentorship',
  },
  // Community
  {
    id: 'c1',
    question: 'How do I join the community?',
    answer: 'You can join The Speaking Studio community by filling out the Community Registration form on our Forms page. You\'ll be added to our WhatsApp community and communication channels where you\'ll receive updates, resources, and event announcements.',
    category: 'Community',
  },
  {
    id: 'c2',
    question: 'What happens in the WhatsApp community?',
    answer: 'Our WhatsApp community is where members receive session announcements, resources, daily challenges, peer discussions, event updates, and exclusive content. It\'s a vibrant, moderated space for meaningful student interaction.',
    category: 'Community',
  },
  // Events
  {
    id: 'e1',
    question: 'How do I register for events?',
    answer: 'Visit our Forms page and fill out the Session Registration form, or check individual event listings on our Events page for specific registration links.',
    category: 'Events',
  },
  {
    id: 'e2',
    question: 'Are events free?',
    answer: 'Many of our orientation sessions, webinars, and community events are free to attend. Workshops, conferences, and competitive events may have a nominal participation fee. All pricing is clearly stated in advance.',
    category: 'Events',
  },
  // Contact
  {
    id: 'ct1',
    question: 'How can I contact The Speaking Studio?',
    answer: 'You can reach us via email at thespeakingstudio25@gmail.com, through our Instagram DMs at @the.speaking.studio, or via the Contact form on our website. We typically respond within 24–48 hours.',
    category: 'Contact',
  },
  {
    id: 'ct2',
    question: 'Can I collaborate or partner with The Speaking Studio?',
    answer: 'Absolutely! We welcome collaborations with schools, colleges, educational organisations, and aligned brands. Reach out via email with your proposal and we will get back to you promptly.',
    category: 'Contact',
  },
];

export const faqCategories = ['General', 'Programs', 'Mentorship', 'Community', 'Events', 'Contact'];
