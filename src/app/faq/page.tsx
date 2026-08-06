import type { Metadata } from 'next';
import FAQPageClient from './FAQPageClient';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Answers to the most common questions about The Speaking Studio, our programs, mentorship, and community.',
};

export default function FAQPage() {
  return <FAQPageClient />;
}
