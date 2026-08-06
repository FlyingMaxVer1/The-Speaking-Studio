import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for The Speaking Studio — how we collect, use, and protect your personal information.',
};

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1C1C1C] mb-4">Privacy Policy</h1>
          <p className="text-stone-500 text-sm">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl prose-studio">
          <div className="space-y-8">
            {[
              {
                title: '1. Information We Collect',
                content: 'When you register for our programs, join our community, or contact us, we may collect personal information such as your name, email address, phone number, age, educational institution, and program preferences. We collect this information only with your consent and only as needed to provide our services.',
              },
              {
                title: '2. How We Use Your Information',
                content: 'We use your information to communicate about programs, events, and sessions; process registrations and applications; personalise your learning experience; send newsletters and updates (with your consent); improve our programs and services; and issue certificates and recognitions.',
              },
              {
                title: '3. Information Sharing',
                content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers (such as Google Forms and email platforms) solely to operate our services. We may disclose information if required by law.',
              },
              {
                title: '4. Data Security',
                content: 'We take reasonable measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
              },
              {
                title: '5. Cookies',
                content: 'Our website may use cookies to enhance your browsing experience. You can choose to disable cookies in your browser settings. Some features of the website may not function properly without cookies.',
              },
              {
                title: '6. Third-Party Links',
                content: 'Our website may contain links to third-party platforms (such as Google Forms, Instagram, YouTube, and Pinterest). We are not responsible for the privacy practices of these platforms and encourage you to review their policies.',
              },
              {
                title: '7. Children\'s Privacy',
                content: 'Our programs are designed for students aged 13 and above. We do not knowingly collect personal information from children under 13 without parental consent. Parents or guardians may register on behalf of younger students.',
              },
              {
                title: '8. Your Rights',
                content: 'You have the right to access, correct, or delete your personal information held by us. You may also opt out of receiving communications from us at any time by contacting us at thespeakingstudio25@gmail.com.',
              },
              {
                title: '9. Changes to This Policy',
                content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. Continued use of our services after changes constitutes acceptance of the revised policy.',
              },
              {
                title: '10. Contact',
                content: 'If you have any questions about this Privacy Policy, please contact us at thespeakingstudio25@gmail.com.',
              },
            ].map((section) => (
              <div key={section.title} className="bg-[#F5F0E8] rounded-2xl p-6 border border-stone-100">
                <h2 className="font-display font-bold text-[#1C1C1C] text-lg mb-3">{section.title}</h2>
                <p className="text-stone-600 text-sm leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
