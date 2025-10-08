'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface ContactHeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

const contactMethods = [
  { icon: Mail, title: 'Email Us', value: 'hello@mikasasoft.com', action: 'mailto:hello@mikasasoft.com' },
  { icon: Phone, title: 'Call Us', value: '+1 (555) 123-4567', action: 'tel:+15551234567' },
  { icon: MapPin, title: 'Visit Us', value: 'San Francisco, CA', action: '#' },
  { icon: MessageCircle, title: 'Chat Support', value: 'Available 24/7', action: '#' }
];

export const ContactHero = ({ data: _data }: ContactHeroProps) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
      background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)
        `
      }} />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-20" style={{ maxWidth: 'clamp(800px, 90vw, 1400px)' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-orange-400 font-medium">Let&apos;s Build Something Amazing</span>
            </motion.div>

            <h1 className="font-bold mb-6" style={{
              fontSize: 'clamp(3rem, 6vw, 5rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Ready to Start</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
                Your Project?
              </span>
            </h1>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.5rem)'
              }}
            >
              Get in touch with our team and let&apos;s discuss how we can bring your vision to life with cutting-edge technology.
            </motion.p>
          </div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group relative p-8 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-300 text-center"
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 p-4 flex items-center justify-center mx-auto group-hover:rotate-12 transition-transform duration-300" style={{
                      width: 'clamp(50px, 4vw, 64px)',
                      height: 'clamp(50px, 4vw, 64px)'
                    }}>
                      <IconComponent className="w-8 h-8 text-white" style={{
                        width: 'clamp(24px, 2vw, 32px)',
                        height: 'clamp(24px, 2vw, 32px)'
                      }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 
                      className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                    >
                      {method.title}
                    </h3>
                    <p 
                      className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300"
                      style={{ fontSize: 'clamp(0.8rem, 1.1vw, 0.95rem)' }}
                    >
                      {method.value}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 hover:from-orange-500 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Start Your Project Today →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
