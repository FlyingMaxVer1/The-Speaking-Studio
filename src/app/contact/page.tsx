import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with The Speaking Studio. We\'d love to hear from you — for inquiries, collaborations, and support.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
