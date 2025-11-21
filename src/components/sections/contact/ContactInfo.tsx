'use client';

import { Mail, Phone, MapPin, Clock, Globe, MessageCircle } from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

interface ContactInfoProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    contacts: Array<{
      icon: string;
      title: string;
      value: string;
      description: string;
      action: string;
    }>;
  };
}

const iconMap = {
  mail: Mail,
  phone: Phone,
  location: MapPin,
  clock: Clock,
  website: Globe,
  general: MessageCircle
};

export const ContactInfo = ({ data }: ContactInfoProps) => {
  return (
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            Contact Information
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Our Team
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            {data.description}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {data.contacts.map((contact, index) => {
            const IconComponent = iconMap[contact.icon as keyof typeof iconMap] || MessageCircle;

            return (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-6 text-white group-hover:bg-zinc-700 transition-colors">
                  <IconComponent size={24} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {contact.title}
                </h3>

                <div className="text-zinc-400 font-medium mb-4">
                  {contact.value}
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {contact.description}
                </p>

                <Button
                  variant="outline"
                  className="w-full border-zinc-700 text-zinc-300 hover:text-white hover:bg-zinc-800"
                >
                  {contact.action}
                </Button>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="primary">
            Schedule a Consultation
          </Button>
        </div>
      </Container>
    </section>
  );
};