import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch about a frontend, Shopify, or automation project.',
};

export default function Contact() {
  return (
    <div className="max-w-[620px] mx-auto px-7 py-14">
      <h1 className="display text-[clamp(36px,6vw,58px)] mb-3">GET IN TOUCH</h1>
      <p className="text-muted mb-10">
        Tell me what you&apos;re building. Usually reply within a day.
      </p>
      <ContactForm />
    </div>
  );
}
