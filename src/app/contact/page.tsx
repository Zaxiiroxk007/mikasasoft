import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';
import { ContactInfo } from '@/components/sections/contact/ContactInfo';
import { FAQSection } from '@/components/sections/contact/FAQSection';
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
              icon: "phone", 
              title: "Call Us",
              value: contactData.contactInfo.phone || "+1 (555) 123-4567",
              description: "Speak directly with our team during business hours",
              action: "Call Now"
            },
            {
              icon: "location",
              title: "Visit Our Office",
              value: `${contactData.contactInfo.address.street}, ${contactData.contactInfo.address.city}`,
              description: "Schedule a meeting at our headquarters",
              action: "Visit"
            },
            {
              icon: "clock",
              title: "Office Hours",
              value: "Monday - Friday: 9:00 AM - 6:00 PM",
              description: "Our team is available during standard business hours",
              action: "Schedule Meeting"
            },
            {
              icon: "website",
              title: "Follow Us",
              value: "@mikasasoft",
              description: "Stay updated with our latest projects and insights",
              action: "Follow"
            },
            {
              icon: "general",
              title: "General Inquiry",
              value: "General questions",
              description: "Have a general question? We're here to help",
              action: "Ask Question"
            }
          ]
        }} />
      </div>
      <FAQSection data={{
        title: "Frequently Asked Questions",
        subtitle: "Got Questions?",
        description: "Find answers to common questions about our services, process, and how we work with clients.",
        faqs: contactData.faqs.map(faq => ({
          question: faq.question,
          answer: faq.answer,
          category: faq.category
        })),
        categories: Array.from(new Set(contactData.faqs.map(faq => faq.category)))
      }} />
    </main>
  );
}
