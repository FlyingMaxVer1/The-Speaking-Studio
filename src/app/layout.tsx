import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'The Speaking Studio — Empowering Tomorrow\'s Leaders',
    template: '%s | The Speaking Studio',
  },
  description:
    'The Speaking Studio is a youth-led educational organisation developing confidence, communication, leadership, diplomacy, and life skills among students through expert programs, mentorship, and community.',
  keywords: [
    'public speaking',
    'MUN',
    'Model United Nations',
    'debate',
    'leadership',
    'communication skills',
    'student development',
    'youth organisation',
    'mentorship',
    'speaking skills',
  ],
  authors: [{ name: 'The Speaking Studio' }],
  creator: 'The Speaking Studio',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://thespeakingstudio.in',
    siteName: 'The Speaking Studio',
    title: 'The Speaking Studio — Empowering Tomorrow\'s Leaders',
    description:
      'A youth-led educational organisation developing confidence, communication, and leadership skills among students.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'The Speaking Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Speaking Studio',
    description: 'Empowering Tomorrow\'s Leaders through communication and leadership programs.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans bg-[#FAFAF7] text-[#1C1C1C] antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
