import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for The Speaking Studio — please read these carefully before using our services.',
};

export default function TermsPage() {
  return (
    <>
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16 bg-gradient-to-br from-[#F5F0E8] to-[#EAE3D5]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-[#1C1C1C] mb-4">Terms & Conditions</h1>
          <p className="text-stone-500 text-sm">Last updated: August 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-8">
            {[
              {
                title: '1. Acceptance of Terms',
                content: 'By accessing The Speaking Studio website, registering for any program, or joining our community, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.',
              },
              {
                title: '2. Our Services',
                content: 'The Speaking Studio provides educational programs, mentorship, community access, events, and resources related to communication, leadership, and life skills development. We reserve the right to modify, suspend, or discontinue any service at any time.',
              },
              {
                title: '3. Registration',
                content: 'To participate in our programs, you must provide accurate, complete, and up-to-date information. Students under 18 may participate with parental knowledge and consent. You are responsible for maintaining the confidentiality of your registration information.',
              },
              {
                title: '4. Code of Conduct',
                content: 'All members of The Speaking Studio community are expected to treat others with respect and courtesy; refrain from any form of harassment, discrimination, or bullying; contribute positively to discussions and sessions; and follow the instructions of mentors and coordinators.',
              },
              {
                title: '5. Intellectual Property',
                content: 'All content on The Speaking Studio website, including text, graphics, logos, and materials, is the property of The Speaking Studio and is protected by applicable copyright laws. You may not reproduce, distribute, or create derivative works without written permission.',
              },
              {
                title: '6. Certificates',
                content: 'Certificates issued by The Speaking Studio are recognition of participation and completion and do not constitute professional or academic qualifications. Certificates may be revoked if a participant is found to have violated our code of conduct.',
              },
              {
                title: '7. Limitation of Liability',
                content: 'The Speaking Studio is a student-led organisation and provides services on a best-effort basis. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.',
              },
              {
                title: '8. External Links',
                content: 'Our website may link to external platforms (Google Forms, Instagram, YouTube, etc.). We are not responsible for the content or practices of these third-party platforms.',
              },
              {
                title: '9. Termination',
                content: 'We reserve the right to terminate or suspend access to our services for any user who violates these Terms, engages in inappropriate conduct, or misuses our community resources.',
              },
              {
                title: '10. Governing Law',
                content: 'These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of Indian courts.',
              },
              {
                title: '11. Contact',
                content: 'For any questions regarding these Terms, please contact us at thespeakingstudio25@gmail.com.',
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
