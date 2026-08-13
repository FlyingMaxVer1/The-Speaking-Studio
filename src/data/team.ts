// src/data/team.ts

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  department: string;
  bio: string;
  image?: string;
  imagePosition?: string;
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
  isFounder?: boolean;
  isLead?: boolean;
  isExecutive?: boolean;
}

export const team: TeamMember[] = [
  {
    id: 'vaishnavi-verma',
    name: 'Vaishnavi Verma',
    position: 'Founder & CEO',
    department: 'Executive Leadership',
    image: '/team/vaishnavi-verma.jpg',
    imagePosition: 'object-[center_20%]',
    bio: 'Founder and CEO of The Speaking Studio. A visionary young leader dedicated to empowering students with the confidence to communicate articulately, think critically, and lead purposefully across global stages.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isFounder: true,
    isExecutive: true,
    isLead: true,
  },
  {
    id: 'sparsh-vaish',
    name: 'Sparsh Vaish',
    position: 'President & Head of MUN Department',
    department: 'Model United Nations',
    image: '/team/sparsh-vaish.jpg',
    imagePosition: 'object-[center_25%]',
    bio: 'President and Head of the Model United Nations Department. Experienced in multilateral diplomacy, parliamentary rules, and crisis committees, mentoring delegates to excel and win accolades at premier conferences.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isExecutive: true,
    isLead: true,
  },
  {
    id: 'kanika-pahuja',
    name: 'Kanika Pahuja',
    position: 'Vice President & Head of Public Speaking',
    department: 'Public Speaking',
    image: '/team/kanika-pahuja.jpg',
    imagePosition: 'object-top',
    bio: 'Vice President and Head of Public Speaking. Passionate about speech craft, voice modulation, and stage presence, guiding hundreds of students to overcome stage fear and speak with conviction.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isExecutive: true,
    isLead: true,
  },
  {
    id: 'dhwaani-gera',
    name: 'Dhwaani Gera',
    position: 'Head of Marketing & Social Media',
    department: 'Marketing & Communications',
    image: '/team/dhwaani-gera.jpg',
    imagePosition: 'object-[center_15%]',
    bio: 'Head of Marketing and Social Media. Leads digital brand strategy, creative campaign storytelling, and social presence to connect with students and build an engaged, thriving international community.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isLead: true,
  },
  {
    id: 'girvaan-shhakya-pradhan',
    name: 'Girvaan Shhakya Pradhan',
    position: 'Head of Debate Department & Outreach',
    department: 'Debate & Outreach',
    image: '/team/girvaan-shhakya-pradhan.jpg',
    imagePosition: 'object-[center_20%]',
    bio: 'Head of Debate Department and Outreach. Seasoned competitive debater specialising in parliamentary formats, argumentative structure, rebuttal frameworks, and strategic institutional outreach.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isLead: true,
  },
  {
    id: 'vrinda-sayal',
    name: 'Vrinda Sayal',
    position: 'Head of Management',
    department: 'Management & Operations',
    image: '/team/vrinda-sayal.jpg',
    imagePosition: 'object-[center_20%]',
    bio: 'Head of Management. Oversees organizational operations, program execution, logistics, and resource management to ensure seamless coordination across all studio initiatives and student sessions.',
    social: {
      instagram: 'https://instagram.com/the.speaking.studio',
      email: 'thespeakingstudio25@gmail.com',
    },
    isLead: true,
  },
];

