// src/data/programs.ts

export interface Program {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string; // Lucide icon name
  color: string; // Tailwind color class
  skills: string[];
  benefits: string[];
  whoShouldJoin: string[];
  learningOutcomes: string[];
  faqs: { question: string; answer: string }[];
  registrationUrl?: string;
  duration?: string;
  level?: string;
}

export const programs: Program[] = [
  {
    id: 'public-speaking',
    slug: 'public-speaking',
    title: 'Public Speaking',
    shortDescription: 'Master the art of commanding any room with confidence, clarity, and charisma.',
    fullDescription: 'Our Public Speaking program is designed to transform hesitant speakers into confident communicators. Through structured practice, constructive feedback, and real-world speaking opportunities, students develop the skills to articulate their ideas clearly, engage audiences effectively, and present themselves with authority.',
    icon: 'Mic',
    color: '#5C6B3A',
    skills: ['Voice Modulation', 'Stage Presence', 'Audience Engagement', 'Impromptu Speaking', 'Structured Delivery', 'Eye Contact', 'Body Language'],
    benefits: [
      'Build unshakeable confidence in speaking',
      'Overcome stage fright permanently',
      'Articulate ideas with clarity and precision',
      'Engage and inspire any audience',
      'Master storytelling techniques',
    ],
    whoShouldJoin: [
      'Students who want to overcome stage fright',
      'Aspiring leaders and orators',
      'Students preparing for competitions',
      'Anyone who wants to express themselves better',
    ],
    learningOutcomes: [
      'Deliver 5-minute structured speeches confidently',
      'Adapt communication style to different audiences',
      'Use vocal variety, pausing, and emphasis effectively',
      'Handle Q&A sessions with poise',
    ],
    faqs: [
      { question: 'Do I need any prior experience?', answer: 'No! This program is open to complete beginners as well as experienced speakers looking to refine their skills.' },
      { question: 'How long is the program?', answer: 'Sessions are typically 4–8 weeks depending on the cohort. Each session is approximately 90 minutes.' },
      { question: 'Will I get to practice speaking?', answer: 'Absolutely. Every session involves active speaking practice, peer feedback, and mentor guidance.' },
    ],
    duration: '4-8 weeks',
    level: 'All Levels',
  },
  {
    id: 'mun',
    slug: 'mun',
    title: 'Model United Nations (MUN)',
    shortDescription: 'Simulate global diplomacy, debate world issues, and develop your leadership voice on the international stage.',
    fullDescription: 'Model United Nations is one of the most powerful educational simulations available to students. At The Speaking Studio, we train students to research complex global issues, draft position papers, engage in parliamentary debate, and collaborate toward resolutions — all while developing diplomacy, critical thinking, and leadership.',
    icon: 'Globe',
    color: '#C49A6C',
    skills: ['Diplomatic Communication', 'Research & Analysis', 'Position Paper Writing', 'Negotiation', 'Parliamentary Procedure', 'Crisis Management', 'Resolution Drafting'],
    benefits: [
      'Gain deep understanding of global affairs',
      'Develop negotiation and diplomacy skills',
      'Build confidence in formal debate settings',
      'Learn to write compelling position papers',
      'Network with like-minded peers',
    ],
    whoShouldJoin: [
      'Students interested in international relations',
      'Aspiring diplomats and policymakers',
      'Students preparing for MUN conferences',
      'Anyone who wants to understand global issues',
    ],
    learningOutcomes: [
      'Research and write professional position papers',
      'Participate effectively in committee sessions',
      'Draft and negotiate resolutions',
      'Represent countries or organizations with accuracy',
    ],
    faqs: [
      { question: 'Is MUN training available for beginners?', answer: 'Yes! We offer training for first-timers as well as advanced delegates who want to win Best Delegate awards.' },
      { question: 'Do you organize MUN conferences?', answer: 'Yes, we host and participate in MUN conferences throughout the year.' },
    ],
    duration: '6-10 weeks',
    level: 'Beginner to Advanced',
  },
  {
    id: 'debate',
    slug: 'debate',
    title: 'Debate',
    shortDescription: 'Sharpen your critical thinking and argumentation skills through structured competitive debate.',
    fullDescription: 'Debate is the ultimate intellectual sport. Our program teaches students how to construct compelling arguments, identify logical fallacies, rebut opposing viewpoints, and think on their feet under pressure. We cover multiple debate formats including British Parliamentary, Asian Parliamentary, and Lincoln-Douglas.',
    icon: 'MessageSquare',
    color: '#8B6914',
    skills: ['Argumentation', 'Rebuttal', 'Critical Thinking', 'Research', 'Logic', 'Time Management', 'Persuasion'],
    benefits: [
      'Develop razor-sharp critical thinking',
      'Learn to argue any side of an issue',
      'Build confidence in competitive environments',
      'Improve persuasive writing and speaking',
    ],
    whoShouldJoin: [
      'Students who love intellectual challenges',
      'Aspiring lawyers and policymakers',
      'Students preparing for debate competitions',
      'Anyone who wants to think faster and argue better',
    ],
    learningOutcomes: [
      'Construct logical, evidence-based arguments',
      'Effectively rebut opposing arguments',
      'Manage time and structure speeches',
      'Compete in formal debate formats',
    ],
    faqs: [
      { question: 'What debate formats do you teach?', answer: 'We cover British Parliamentary, Asian Parliamentary, Lincoln-Douglas, and Oxford-style formats.' },
      { question: 'Do you help students prepare for competitions?', answer: 'Yes, we provide competition-specific coaching and mock debates.' },
    ],
    duration: '4-6 weeks',
    level: 'All Levels',
  },
  {
    id: 'english-communication',
    slug: 'english-communication',
    title: 'English Communication',
    shortDescription: 'Build fluency, vocabulary, and confidence in everyday and professional English.',
    fullDescription: 'Strong English communication is a gateway to global opportunities. This program focuses on practical English skills — from everyday conversation to professional communication — helping students express themselves clearly, correctly, and confidently in any setting.',
    icon: 'BookOpen',
    color: '#5C6B3A',
    skills: ['Fluency', 'Grammar', 'Vocabulary', 'Listening', 'Reading Comprehension', 'Writing', 'Pronunciation'],
    benefits: [
      'Speak English with confidence and fluency',
      'Improve grammar and pronunciation',
      'Build a rich professional vocabulary',
      'Write clearly and professionally',
    ],
    whoShouldJoin: [
      'Students who want to improve English fluency',
      'Non-native English speakers',
      'Students preparing for international programs',
      'Anyone who wants to communicate more effectively',
    ],
    learningOutcomes: [
      'Hold professional conversations in English',
      'Write clear, grammatically correct emails and essays',
      'Read and comprehend complex texts',
      'Improve accent and pronunciation clarity',
    ],
    faqs: [
      { question: 'Is this suitable for beginners?', answer: 'Yes, we offer modules for all proficiency levels from basic to advanced.' },
    ],
    duration: '6-12 weeks',
    level: 'All Levels',
  },
  {
    id: 'interview-preparation',
    slug: 'interview-preparation',
    title: 'Interview Preparation',
    shortDescription: 'Walk into any interview with confidence — from college admissions to corporate placements.',
    fullDescription: 'Whether you are preparing for a college interview, scholarship selection, internship, or job placement, our Interview Preparation program equips you with the techniques, confidence, and self-presentation skills to make a lasting impression.',
    icon: 'Briefcase',
    color: '#C49A6C',
    skills: ['Self-Presentation', 'STAR Method', 'Confidence', 'Research Skills', 'Body Language', 'Question Handling', 'Storytelling'],
    benefits: [
      'Enter interviews calm and prepared',
      'Tell your story compellingly',
      'Handle difficult questions with ease',
      'Present your achievements impressively',
    ],
    whoShouldJoin: [
      'Students applying to colleges or universities',
      'Students seeking internships or jobs',
      'Scholarship applicants',
      'Anyone who wants to ace any selection process',
    ],
    learningOutcomes: [
      'Structure responses using the STAR method',
      'Research interviewers and organizations effectively',
      'Present body language that inspires confidence',
      'Handle unexpected questions gracefully',
    ],
    faqs: [
      { question: 'Do you do mock interviews?', answer: 'Yes, mock interviews with detailed feedback are a core part of this program.' },
    ],
    duration: '2-4 weeks',
    level: 'All Levels',
  },
  {
    id: 'presentation-skills',
    slug: 'presentation-skills',
    title: 'Presentation Skills',
    shortDescription: 'Create and deliver stunning presentations that inform, persuade, and inspire.',
    fullDescription: 'Great presenters are made, not born. Our Presentation Skills program teaches students how to design compelling slides, structure their content logically, and deliver presentations with professional polish — from classroom projects to boardroom pitches.',
    icon: 'Presentation',
    color: '#8B6914',
    skills: ['Slide Design', 'Content Structure', 'Data Visualization', 'Delivery', 'Audience Engagement', 'Visual Storytelling', 'Q&A Handling'],
    benefits: [
      'Design beautiful, effective presentations',
      'Structure content for maximum impact',
      'Deliver with confidence and energy',
      'Handle audience questions professionally',
    ],
    whoShouldJoin: [
      'Students with upcoming presentations or projects',
      'Aspiring professionals and entrepreneurs',
      'Students preparing for pitch competitions',
      'Anyone who wants to communicate visually',
    ],
    learningOutcomes: [
      'Design professional slides using best practices',
      'Structure presentations with clear narrative arcs',
      'Deliver confidently without reading from slides',
      'Engage audiences through storytelling and visuals',
    ],
    faqs: [
      { question: 'What tools do you teach?', answer: 'We teach principles applicable to PowerPoint, Google Slides, Canva, and Keynote.' },
    ],
    duration: '3-5 weeks',
    level: 'Beginner to Advanced',
  },
  {
    id: 'leadership-development',
    slug: 'leadership-development',
    title: 'Leadership Development',
    shortDescription: 'Discover and develop your leadership potential to inspire, influence, and create change.',
    fullDescription: 'Leadership is not a title — it is a mindset. Our Leadership Development program empowers students to understand different leadership styles, develop emotional intelligence, build teams, manage conflict, and create positive impact in their communities and institutions.',
    icon: 'Crown',
    color: '#5C6B3A',
    skills: ['Emotional Intelligence', 'Decision Making', 'Team Building', 'Conflict Resolution', 'Vision Setting', 'Influence', 'Accountability'],
    benefits: [
      'Develop your unique leadership identity',
      'Build emotional intelligence and empathy',
      'Learn to lead teams and manage conflict',
      'Inspire and motivate others effectively',
    ],
    whoShouldJoin: [
      'Student council members and aspiring leaders',
      'Students who want to make a positive impact',
      'Future entrepreneurs and change-makers',
      'Anyone who wants to lead with confidence',
    ],
    learningOutcomes: [
      'Identify and develop your personal leadership style',
      'Apply emotional intelligence in real situations',
      'Lead and motivate diverse teams',
      'Create a personal leadership development plan',
    ],
    faqs: [
      { question: 'Is this only for students in leadership positions?', answer: 'No! Leadership skills benefit everyone regardless of current position or role.' },
    ],
    duration: '6-8 weeks',
    level: 'All Levels',
  },
  {
    id: 'research-skills',
    slug: 'research-skills',
    title: 'Research Skills',
    shortDescription: 'Learn to find, evaluate, and synthesise information like an expert researcher.',
    fullDescription: 'In the age of information, knowing how to research effectively is a superpower. Our Research Skills program teaches students how to identify credible sources, evaluate information critically, synthesise findings, and present research professionally — skills that are essential for MUN, academics, and professional life.',
    icon: 'Search',
    color: '#C49A6C',
    skills: ['Source Evaluation', 'Academic Research', 'Note-Taking', 'Citation Methods', 'Critical Analysis', 'Synthesis', 'Report Writing'],
    benefits: [
      'Research any topic efficiently and thoroughly',
      'Evaluate sources for credibility and bias',
      'Synthesise findings into clear arguments',
      'Write evidence-based papers and reports',
    ],
    whoShouldJoin: [
      'Students preparing for MUN or debate',
      'Students working on academic projects',
      'Anyone who wants to think more critically',
      'Future academics and professionals',
    ],
    learningOutcomes: [
      'Use academic databases and research tools',
      'Evaluate sources using credibility frameworks',
      'Write well-cited, evidence-based arguments',
      'Synthesise complex information clearly',
    ],
    faqs: [
      { question: 'Is this useful outside of academics?', answer: 'Absolutely. Research skills are essential for journalism, law, business, and any field where decisions are data-driven.' },
    ],
    duration: '3-4 weeks',
    level: 'Beginner to Intermediate',
  },
  {
    id: 'personality-development',
    slug: 'personality-development',
    title: 'Personality Development',
    shortDescription: 'Build a confident, authentic, and magnetic personal presence that opens doors.',
    fullDescription: 'Your personality is your personal brand. Our Personality Development program helps students cultivate self-awareness, build confidence, develop social intelligence, improve their professional image, and project an authentic presence that creates lasting impressions in every setting.',
    icon: 'Star',
    color: '#8B6914',
    skills: ['Self-Awareness', 'Confidence Building', 'Social Intelligence', 'Grooming & Etiquette', 'Networking', 'First Impressions', 'Positive Mindset'],
    benefits: [
      'Build deep, authentic self-confidence',
      'Develop social intelligence and emotional awareness',
      'Present yourself professionally in all settings',
      'Build meaningful networks and relationships',
    ],
    whoShouldJoin: [
      'Students who want to build confidence',
      'Students preparing for interviews or placements',
      'Anyone who wants to improve social skills',
      'Students who want to develop their personal brand',
    ],
    learningOutcomes: [
      'Develop a clear personal brand and identity',
      'Project confidence in social and professional settings',
      'Build meaningful relationships through networking',
      'Manage impressions and non-verbal communication',
    ],
    faqs: [
      { question: 'Is personality development really teachable?', answer: 'Yes! With structured practice, feedback, and the right mindset frameworks, anyone can develop a stronger, more authentic personality.' },
    ],
    duration: '4-6 weeks',
    level: 'All Levels',
  },
];
