// src/data/testimonials.ts

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  category: 'student' | 'parent' | 'mentor';
  quote: string;
  avatar?: string;
  program?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    role: 'Grade 11 Student',
    category: 'student',
    quote: 'The Speaking Studio completely transformed how I communicate. I went from being terrified of speaking in class to winning our school\'s debate competition. The mentors are incredibly supportive and the sessions are genuinely fun!',
    program: 'Public Speaking',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Mehta',
    role: 'Grade 12 Student',
    category: 'student',
    quote: 'MUN training here is top-tier. I walked into my first conference after just 6 weeks of training and won Best Delegate. The research skills and position paper workshops were game-changers.',
    program: 'MUN',
    rating: 5,
  },
  {
    id: '3',
    name: 'Rohan Verma',
    role: 'Grade 10 Student',
    category: 'student',
    quote: 'I joined for debate training and ended up discovering a passion for leadership too. The community here is incredibly warm and inspiring. I\'ve made friendships that will last a lifetime.',
    program: 'Debate',
    rating: 5,
  },
  {
    id: '4',
    name: 'Ananya Nair',
    role: 'Grade 11 Student',
    category: 'student',
    quote: 'The personality development sessions gave me tools I use every day. I\'m more confident in social situations, in interviews, and in how I present myself. Truly life-changing.',
    program: 'Personality Development',
    rating: 5,
  },
  {
    id: '5',
    name: 'Mrs. Sunita Sharma',
    role: 'Parent of Aarav',
    category: 'parent',
    quote: 'As a parent, I\'ve seen a remarkable change in my son. He used to be shy and withdrawn. After joining The Speaking Studio, he is confident, articulate, and genuinely excited about learning. I couldn\'t be more grateful.',
    rating: 5,
  },
  {
    id: '6',
    name: 'Mr. Rajesh Patel',
    role: 'Parent of Diya',
    category: 'parent',
    quote: 'The organisation is incredibly professional. The team communicates clearly, sessions are well-structured, and the impact on my daughter\'s confidence has been extraordinary. Highly recommend to every parent.',
    rating: 5,
  },
  {
    id: '7',
    name: 'Kavitha Rajan',
    role: 'Volunteer Mentor',
    category: 'mentor',
    quote: 'Mentoring at The Speaking Studio is one of the most rewarding experiences I\'ve had. The students are motivated, curious, and genuinely eager to grow. The team\'s dedication to quality is inspiring.',
    rating: 5,
  },
  {
    id: '8',
    name: 'Vikram Iyer',
    role: 'Program Coordinator',
    category: 'mentor',
    quote: 'What sets The Speaking Studio apart is the genuine care for student growth. We don\'t just teach skills — we build confidence, character, and community. Being part of this mission is truly meaningful.',
    rating: 5,
  },
  {
    id: '9',
    name: 'Ishaan Kapoor',
    role: 'Grade 12 Student',
    category: 'student',
    quote: 'The interview preparation sessions helped me crack my college admissions interviews. The mock interviews were rigorous and the feedback was incredibly specific and actionable. Worth every moment.',
    program: 'Interview Preparation',
    rating: 5,
  },
  {
    id: '10',
    name: 'Divya Krishnan',
    role: 'Grade 10 Student',
    category: 'student',
    quote: 'English Communication sessions gave me the fluency and vocabulary I was missing. I\'m now comfortable speaking in any situation and my academic writing has improved drastically.',
    program: 'English Communication',
    rating: 5,
  },
];
