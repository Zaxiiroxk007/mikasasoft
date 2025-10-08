'use client';

import { motion } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';

interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  description: string;
  icon?: string;
  achievements?: string[];
  impact?: {
    metric: string;
    value: string;
  };
}

interface CompanyTimelineProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    timeline: TimelineEvent[];
  };
}

const iconMap = {
  calendar: Calendar,
  award: Award,
  users: Users,
  trendingUp: TrendingUp
};

export const CompanyTimeline = ({ data }: CompanyTimelineProps) => {
  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827  0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 75%, rgba(79, 172, 254, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 25%, rgba(192, 132, 252, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.05) 0%, transparent 50%)
        `
      }} />

      {/* Connecting Line Background */}
      <div className="absolute inset-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1200 1500" preserveAspectRatio="none">
          <motion.path
            d="M 100 100 Q 200 200 300 150 Q 400 100 500 200 Q 600 300 700 250 Q 800 200 900 300 Q 1000 400 1100 350"
            stroke="rgba(79, 172, 254, 0.2)"
            strokeWidth="4"
            fill="none"
            strokeDasharray="20,10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 4, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      </div>

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
              className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-blue-400 font-medium">Our Journey</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Company</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                Timeline
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

          {/* Timeline */}
          <div className="max-w-5xl mx-auto">
            {data.timeline.map((event, index) => {
              const IconComponent = iconMap[event.icon as keyof typeof iconMap] || Calendar;
              const isEven = index % 2 === 0;
              
              return (
                <div key={event.year} className="relative mb-16 last:mb-0">
                  {/* Timeline Item */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                    className={`flex items-center gap-8 lg:gap-16 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="relative"
                      >
                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 flex items-center justify-center shadow-2xl" style={{
                          width: 'clamp(60px, 5vw, 80px)',
                          height: 'clamp(60px, 5vw, 80px)'
                        }}>
                          <span 
                            className="text-white font-bold"
                            style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}
                          >
                            {event.year}
                          </span>
                        </div>
                        
                        {/* Icon */}
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center shadow-xl" style={{
                          width: 'clamp(24px, 2vw, 32px)',
                          height: 'clamp(24px, 2vw, 32px)'
                        }}>
                          <IconComponent 
                            className="w-4 h-4 text-white" 
                            style={{
                              width: 'clamp(12px, 1.2vw, 16px)',
                              height: 'clamp(12px, 1.2vw, 16px)'
                            }} 
                          />
                        </div>
                      </motion.div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className={`flex-1 relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl hover:border-white/20 transition-all duration-500 p-8 lg:p-10`}
                      style={{
                        backdropFilter: 'blur(20px)'
                      }}
                    >
                      {/* Title & Description */}
                      <h3 
                        className="text-white font-bold mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                        style={{ fontSize: 'clamp(1.3rem, 2vw, 1.6rem)' }}
                      >
                        {event.title}
                      </h3>
                      <p 
                        className="text-zinc-300 mb-6 leading-relaxed"
                        style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: '1.7' }}
                      >
                        {event.description}
                      </p>

                      {/* Achievements */}
                      {event.achievements && event.achievements.length > 0 && (
                        <div className="mb-6">
                          <h4 
                            className="text-blue-400 font-semibold mb-3"
                            style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
                          >
                            Key Achievements:
                          </h4>
                          <ul className="space-y-2">
                            {event.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex-shrink-0" />
                                <span 
                                  className="text-zinc-300"
                                  style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}
                                >
                                  {achievement}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Impact Metric */}
                      {event.impact && (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 border border-orange-500/30 p-2">
                              <TrendingUp className="w-4 h-4 text-orange-400" />
                            </div>
                            <div>
                              <div 
                                className="text-white font-bold"
                                style={{ fontSize: 'clamp(1.1rem, 1.5vw, 1.3rem)' }}
                              >
                                {event.impact.value}
                              </div>
                              <div 
                                className="text-zinc-400"
                                style={{ fontSize: 'clamp(0.7rem, 1vw, 0.8rem)' }}
                              >
                                {event.impact.metric}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  </motion.div>

                  {/* Connection Line for Mobile */}
                  {index < data.timeline.length - 1 && (
                    <div className="md:hidden flex justify-center mt-8">
                      <div className="w-0.5 h-16 bg-gradient-to-b from-blue-500/50 to-transparent" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-20 text-center"
          >
            <div 
              className="p-10 rounded-3xl border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl mx-auto"
              style={{
                maxWidth: 'clamp(500px, 60vw, 800px)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <h3 
                className="text-white font-bold mb-4"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)' }}
              >
                Looking Ahead
              </h3>
              <p 
                className="text-zinc-300 mb-8"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)' }}
              >
                Our journey continues as we innovate, grow, and create even greater impact in the years to come.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 hover:from-blue-500 hover:to-green-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 16px)',
                  padding: 'clamp(12px, 1.2vw, 18px) clamp(24px, 2vw, 40px)'
                }}
              >
                Join Our Story →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};