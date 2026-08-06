// src/data/team.ts

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image?: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
  isFounder?: boolean;
  isLead?: boolean;
}

export const team: TeamMember[] = [
  {
    id: 'founder-01',
    name: 'The Speaking Studio Team',
    position: 'Founder & Director',
    department: 'Leadership',
    bio: 'A passionate young leader committed to empowering students with the skills to communicate confidently and lead purposefully. Founded The Speaking Studio with a vision to make quality skill development accessible to every student.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isFounder: true,
  },
  {
    id: 'lead-01',
    name: 'Head of Programs',
    position: 'Programs Lead',
    department: 'Academic',
    bio: 'Designs and delivers all academic programs at The Speaking Studio. Brings expertise in curriculum development, pedagogy, and student mentorship to create transformative learning experiences.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
    },
    isLead: true,
  },
  {
    id: 'lead-02',
    name: 'Community Manager',
    position: 'Community & Outreach Lead',
    department: 'Community',
    bio: 'Manages The Speaking Studio\'s growing community, organising events, onboarding new members, and ensuring every student feels welcome and supported throughout their journey.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
    },
    isLead: true,
  },
  {
    id: 'lead-03',
    name: 'Creative Director',
    position: 'Creative & Content Lead',
    department: 'Creative',
    bio: 'Oversees all creative output at The Speaking Studio — from social media content and design to video production and visual storytelling. Ensures the brand stays vibrant, authentic, and engaging.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      youtube: 'https://youtube.com/@the.speaking.studio',
    },
    isLead: true,
  },
  {
    id: 'mentor-01',
    name: 'MUN & Debate Mentor',
    position: 'Senior Mentor — MUN & Debate',
    department: 'Mentorship',
    bio: 'An experienced MUN delegate and competitive debater who has participated in national and international conferences. Trains students in parliamentary procedure, research, and argumentation.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
    },
  },
  {
    id: 'mentor-02',
    name: 'Communication Skills Mentor',
    position: 'Senior Mentor — Communication',
    department: 'Mentorship',
    bio: 'Specialises in English communication and personality development. Has mentored over 100 students in building fluency, confidence, and professional communication skills.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
    },
  },
];
