'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe, MessageCircle } from 'lucide-react';

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
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #16213e 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 75%, rgba(148, 163, 184, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(47, 127, 243, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(192, 132, 252, 0.05) 0%, transparent 50%)
        `
      }} />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-gray-500/20 bg-gray-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-gray-400 font-medium">Contact Information</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Get In Touch</span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.2rem)'
              }}
            >
              {data.description}
            </motion.p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.contacts.map((contact, index) => {
              const IconComponent = iconMap[contact.icon as keyof typeof iconMap] || MessageCircle;
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-indigo-500', 
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500',
                'from-pink-500 to-rose-500',
                'from-teal-500 to-cyan-500'
              ];
              
              return (
                <motion.div
                  key={contact.icon}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500`}
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 p-8 text-center">
                    <div 
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${colors[index % colors.length]} p-6 flex items-center justify-center mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-xl mb-6`}
                      style={{
                        width: 'clamp(64px, 5vw, 80px)',
                        height: 'clamp(64px, 5vw, 80px)'
                      }}
                    >
                      <IconComponent 
                        className="w-10 h-10 text-white" 
                        style={{
                          width: 'clamp(24px, 2.5vw, 40px)',
                          height: 'clamp(24px, 2.5vw, 40px)'
                        }} 
                      />
                    </div>

                    {/* Content */}
                    <h3 
                      className="text-white font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}
                    >
                      {contact.title}
                    </h3>

                    <div 
                      className="text-gray-400 mb-4 font-medium"
                      style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
                    >
                      {contact.value}
                    </div>

                    <p 
                      className="text-zinc-300 mb-6 leading-relaxed"
                      style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: '1.6' }}
                    >
                      {contact.description}
                    </p>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 bg-gradient-to-r ${colors[index % colors.length]} hover:opacity-90 rounded-xl text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl w-full`}
                      style={{
                        fontSize: 'clamp(12px, 1vw, 14px)'
                      }}
                    >
                      {contact.action}
                    </motion.button>
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                </motion.div>
              );
            })}
          </div>

          {/* Additional Contact Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-gray-600 via-blue-600 to-purple-600 hover:from-gray-500 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Schedule a Consultation →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};