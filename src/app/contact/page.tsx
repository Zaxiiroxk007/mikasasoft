import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';

import contactData from '@/data/contact.json';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero data={contactData.hero} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <ContactForm data={{
          title: "Let's Start Your Project",
          subtitle: "Get In Touch",
          description: "Fill out the form below and we'll get back to you within 24 hours with a tailored proposal for your project."
        }} />
        <ContactInfo data={{
          title: "Contact Information",
          subtitle: "Stay Connected",
          description: "Reach out to us through any of the following channels. We're here to help and always ready to discuss your next project.",
          contacts: [
            {
              icon: "mail",
              title: "Email Us",
              value: contactData.contactInfo.email,
              description: "Send us an email and we'll respond within 24 hours",
              action: "Send Email"
            },
            {
              icon: "location",
              title: "Location",
              value: "Remote First / Global",
              description: "Serving clients worldwide",
              action: "View Map"
            },
            {
              icon: "website",
              title: "Follow Us",
              value: "@mikasasoft",
              description: "Stay updated with our latest projects and insights",
              action: "Follow"
            }
          ]
        }} />
      </div>

    </main>
  );
}
