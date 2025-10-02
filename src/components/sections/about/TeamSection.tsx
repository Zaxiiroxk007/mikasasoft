'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';
import Image from 'next/image';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

interface TeamSectionProps {
  members: TeamMember[];
}

export const TeamSection = ({ members }: TeamSectionProps) => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 30% 40%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 60%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)
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
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full border border-green-500/20 bg-green-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-green-400 font-medium">Meet Our Team</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">The Minds</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                Behind Innovation
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
              Our diverse team of experts brings together decades of experience in cutting-edge technologies and business innovation.
            </motion.p>
          </div>

          {/* Team Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {members.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -10 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500"
                style={{
                  backdropFilter: 'blur(20px)'
                }}
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <div className={`relative w-full h-full bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-blue-500/20 to-purple-500/20' :
                    index % 3 === 1 ? 'from-green-500/20 to-blue-500/20' :
                    'from-purple-500/20 to-pink-500/20'
                  }`}>
                    {/* Placeholder for member image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${
                        index % 3 === 0 ? 'from-blue-500 to-purple-500' :
                        index % 3 === 1 ? 'from-green-500 to-blue-500' :
                        'from-purple-500 to-pink-500'
                      } flex items-center justify-center shadow-xl`}>
                        <span className="text-white text-4xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    
                    {/* Dark overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/50 to-transparent" />
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6 md:p-8">
                  <div className="mb-4">
                    <h3 
                      className="text-white font-bold mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-green-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300"
                      style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
                    >
                      {member.name}
                    </h3>
                    <p 
                      className="text-green-400 font-semibold mb-4"
                      style={{ fontSize: 'clamp(0.9rem, 1.1vw, 1rem)' }}
                    >
                      {member.role}
                    </p>
                  </div>

                  <p 
                    className="text-zinc-300 mb-6 leading-relaxed"
                    style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)', lineHeight: '1.6' }}
                  >
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-3">
                    {member.social.linkedin && (
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center hover:bg-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4 text-blue-400" />
                      </motion.a>
                    )}
                    {member.social.github && (
                      <motion.a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-zinc-500/20 border border-zinc-500/30 flex items-center justify-center hover:bg-zinc-500/30 hover:border-zinc-500/50 transition-all duration-300"
                      >
                        <Github className="w-4 h-4 text-zinc-400" />
                      </motion.a>
                    )}
                    {member.social.twitter && (
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center hover:bg-sky-500/30 hover:border-sky-500/50 transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4 text-sky-400" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-blue-500/5 to-purple-500/5' :
                  index % 3 === 1 ? 'from-green-500/5 to-blue-500/5' :
                  'from-purple-500/5 to-pink-500/5'
                } opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-20 text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-500 hover:to-purple-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
              style={{
                fontSize: 'clamp(16px, 1.5vw, 20px)',
                padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
              }}
            >
              Join Our Team →
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};