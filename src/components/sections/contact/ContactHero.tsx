'use client';

import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { Container } from "@/components/common/Layout";

interface ContactHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const contactMethods = [
  { icon: Mail, title: 'Email Us', value: 'contact@mikasasoft.com', action: 'mailto:contact@mikasasoft.com' },
  { icon: MapPin, title: 'Location', value: 'Remote First / Global', action: '#' },
  { icon: MessageCircle, title: 'Project Inquiry', value: 'Start a conversation', action: '#contact-form' }
];

export const ContactHero = ({ data: _data }: ContactHeroProps) => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-zinc-950 pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <Container size="xl" className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-orange-500 rounded-full" />
            Let&apos;s Build Something Amazing
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 animate-fade-in [animation-delay:200ms]">
            Ready to Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">
              Your Project?
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
            Get in touch with our team and let&apos;s discuss how we can bring your vision to life with cutting-edge technology.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto animate-fade-in [animation-delay:600ms]">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={index}
                  href={method.action}
                  className="group p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-all hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 mx-auto text-white group-hover:bg-zinc-700 transition-colors">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {method.title}
                  </h3>
                  <p className="text-zinc-400 text-sm">
                    {method.value}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

