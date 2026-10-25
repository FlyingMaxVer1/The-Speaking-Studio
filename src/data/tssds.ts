// src/data/tssds.ts

export const TSSDS_REGISTRATION_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfJV5iv9Jm1vQPpf8YpWzYoUelDJAffSa29nZlW0K5MoftnxQ/viewform';

export const TSSDS_INSTAGRAM_URL = 'https://www.instagram.com/the.speaking.studio/';
export const TSSDS_OFFICIAL_URL = 'https://thespeakingstudio.netlify.app/tssds';

// Target anchor: Saturday, June 5, 2027, 09:00:00 IST (Weekend 1 kickoff)
export const TSSDS_TARGET_DATE = '2027-06-05T09:00:00+05:30';

export interface Championship {
  id: string;
  name: string;
  shortName: string;
  category: string;
  tagline: string;
  description: string;
  focusAreas: string[];
  fee: number;
}

export const championships: Championship[] = [
  {
    id: 'mun',
    name: 'Model United Nations',
    shortName: 'MUN',
    category: 'Diplomacy & Geopolitics',
    tagline: 'Draft resolutions, negotiate treaties, and defend national foreign policy.',
    description:
      'Represent sovereign nations in high-stakes committee simulations. Debate pressing global security, human rights, and economic agendas against delegate talent from across India.',
    focusAreas: ['Resolution Drafting', 'Foreign Policy', 'Lobbying & Bloc Building', 'Point of Information & Crisis Handling'],
    fee: 299,
  },
  {
    id: 'debate',
    name: 'Debate Championship',
    shortName: 'Debate',
    category: 'Competitive Argumentation',
    tagline: 'Defend your motions with logic, rebut on your feet, and dismantle opposition cases.',
    description:
      'Structured, high-tempo debate rounds designed to test your logical rigour, rebuttal speed, and conviction under cross-examination.',
    focusAreas: ['Motion Analysis', 'First-Principles Arguments', 'Cross-Examination Rebuttal', 'Structured Refutation'],
    fee: 249,
  },
  {
    id: 'public-speaking',
    name: 'Public Speaking Championship',
    shortName: 'Public Speaking',
    category: 'Oratory & Influence',
    tagline: 'Command the room with rhetorical precision, vocal control, and memorable storytelling.',
    description:
      'Craft and deliver speeches that move audiences. Judged on vocal dynamism, narrative structure, emotional cadence, and real stage presence.',
    focusAreas: ['Story Arc & Rhetoric', 'Vocal Modulation', 'Audience Persuasion', 'Impromptu Delivery'],
    fee: 249,
  },
];

export interface PassOption {
  id: string;
  title: string;
  badge?: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export const passes: PassOption[] = [
  {
    id: 'single-debate',
    title: 'Debate Championship',
    price: 249,
    description: 'Entry to all competitive debate rounds, motions, and adjudication.',
    features: [
      'Full participation in Debate Championship',
      'Comprehensive preparation kits & motions guide',
      'Verified Certificate of Participation',
      'Eligibility for Cash Prizes & Awards',
      'Access to training & masterclasses',
    ],
  },
  {
    id: 'single-speaking',
    title: 'Public Speaking Championship',
    price: 249,
    description: 'Entry to all speech rounds, themes, and expert evaluation.',
    features: [
      'Full participation in Public Speaking Championship',
      'Speech framework & preparation kits',
      'Verified Certificate of Participation',
      'Eligibility for Cash Prizes & Awards',
      'Access to training & masterclasses',
    ],
  },
  {
    id: 'single-mun',
    title: 'Model United Nations',
    price: 299,
    description: 'Committee country allocation, study guide, and diplomatic sessions.',
    features: [
      'Country portfolio allocation in simulated UN Committee',
      'Detailed background guides & agenda prep kits',
      'Verified Certificate of Participation',
      'Eligibility for Best Delegate & Cash Prizes',
      'Access to diplomatic training masterclasses',
    ],
  },
  {
    id: 'duo-pass',
    title: 'Any 2 Championships',
    badge: 'Popular Choice',
    price: 499,
    originalPrice: 548,
    description: 'Choose any two championships and compete across dual competitive tracks.',
    features: [
      'Entry into any 2 championships of your choice',
      'Complete preparation kits for both events',
      'Verified Certificates for both competitions',
      'Double eligibility for cash awards & trophies',
      'Access to all summit masterclasses',
      'Save up to ₹99 over separate entries',
    ],
  },
  {
    id: 'all-access',
    title: 'All-Access Pass (All 3)',
    badge: 'Best Value',
    price: 699,
    originalPrice: 797,
    description: 'The ultimate summit experience: compete in MUN, Debate, and Public Speaking.',
    features: [
      'Full access to all 3 National Championships',
      'All committee guides, motions & speech kits',
      '3x Verified Certificates of Participation',
      'Eligible for overall Best Speaker / Diplomat honours',
      'Priority access to future TSS leadership fellowships',
      'Save ₹98 compared to single entry prices',
    ],
    isPopular: true,
  },
];

export const perks = [
  {
    title: 'Verified Certificates',
    description: 'Nationally recognized credentials to strengthen your academic and extracurricular profile.',
  },
  {
    title: 'Cash Prizes & Awards',
    description: 'Substantial prize pool and awards for winners, runners-up, and outstanding performers across all tracks.',
  },
  {
    title: 'Masterclasses & Training',
    description: 'Live interactive training sessions led by seasoned debaters, diplomat mentors, and oratory coaches.',
  },
  {
    title: 'Comprehensive Prep Kits',
    description: 'Curated background guides, motion analyses, and speech frameworks delivered before rounds begin.',
  },
  {
    title: 'Pan-India Networking',
    description: 'Connect directly with ambitious student leaders, debaters, and MUNers from across the country.',
  },
  {
    title: 'Youth Spotlight Features',
    description: 'Top delegates and compelling speeches featured across The Speaking Studio national media channels.',
  },
  {
    title: 'Future Leadership Access',
    description: 'Direct pipeline to join TSS as mentors, event directors, and team leads for upcoming summits.',
  },
];

export const faqs = [
  {
    question: 'Who is eligible to participate in TSSDS 2027?',
    answer:
      'TSSDS is open to middle school, high school, and undergraduate college students across India. Whether you are a seasoned national circuit delegate or taking the floor for the first time, our preparation kits and masterclasses are designed to bring you to championship standards.',
  },
  {
    question: 'How does an online national summit work?',
    answer:
      'All committee sessions, debates, and speech rounds take place via secure video conferencing. You participate from home with zero travel logistics, while competing against delegates and judged by panels from across India.',
  },
  {
    question: 'When will exact dates and round schedules be announced?',
    answer:
      'The summit is tentatively scheduled for June 2027 during the summer holidays, spread comfortably across 2 weekends. Exact committee schedules, round timings, and agendas are detailed inside the pre-registration form and will be emailed to all pre-registered delegates.',
  },
  {
    question: 'Can I participate in more than one championship?',
    answer:
      'Yes! We offer the "Any 2 Championships Pass" (₹499) and the "All-Access Pass" (₹699) specifically scheduled to ensure minimal scheduling overlap, allowing ambitious students to compete across multiple formats.',
  },
  {
    question: 'What do I need to prepare before the summit?',
    answer:
      'Once you pre-register, you will receive our official background guides, committee agendas, debate motion primers, and oratory themes. We also run pre-summit masterclasses to help you master rules of procedure and speech structuring.',
  },
];
