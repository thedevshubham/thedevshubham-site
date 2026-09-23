import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { contact, site } from '@/lib/content';

export const metadata: Metadata = contact.meta;

export default function Contact() {
  return (
    <div className="max-w-[620px] mx-auto px-7 py-14">
      <h1 className="display text-[clamp(36px,6vw,58px)] mb-3">{contact.title}</h1>
      <p className="text-muted mb-10">
        {contact.intro} {site.replyTime}
      </p>
      <ContactForm />
    </div>
  );
}
