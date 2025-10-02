'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

interface FAQSectionProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    faqs: FAQItem[];
    categories: string[];
  };
}

export const FAQSection = ({ data }: FAQSectionProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [openItem, setOpenItem] = useState<number | null>(null);

  const filteredFAQs = data.faqs.filter(faq => 
    activeFilter === 'All' || faq.category === activeFilter
  );

  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(249, 115, 22, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(96, 165, 250, 0.05) 0%, transparent 50%)
        `
      }} />

      <div className="relative z-10 w-full mx-auto px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ maxWidth: 'clamp(800px, 90vw, 1200px)' }}>
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <HelpCircle className="w-4 h-4 mr-2 text-orange-400" />
              <span className="text-orange-400 font-medium">Frequently Asked Questions</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Got</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Questions?
              </span>
            </h2>

            <motion.p
              className="text-zinc-300 max-w-4xl mx-auto leading-relaxed mb-12"
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

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center mb-16"
            >
              {['All', ...data.categories].map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === category
                      ? 'bg-gradient-to-r from-orange-600 to-purple-600 text-white shadow-xl'
                      : 'bg-black/40 text-zinc-300 hover:bg-black/60 hover:text-white border border-white/10'
                  }`}
                  style={{
                    fontSize: 'clamp(0.8rem, 1vw, 1rem)',
                    backdropFilter: 'blur(10px)'
                  }}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <AnimatePresence>
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-300 ${
                    openItem === index ? 'border-white/20' : 'hover:border-white/15'
                  }`}
                  style={{
                    backdropFilter: 'blur(20px)'
                  }}
                >
                  {/* Question */}
                  <motion.button
                    onClick={() => setOpenItem(openItem === index ? null : index)}
                    className="w-full p-8 text-left flex items-center justify-between group"
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/20 to-purple-500/20 border border-orange-500/30 flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-orange-400" />
                      </div>
                      <h3 
                        className="text-white font-semibold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300"
                        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)' }}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: openItem === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-6 h-6 text-zinc-400 group-hover:text-orange-400 transition-colors duration-300" />
                    </motion.div>
                  </motion.button>

                  {/* Answer */}
                  <AnimatePresence>
                    {openItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="pl-14">
                            <p 
                              className="text-zinc-300 leading-relaxed"
                              style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1rem)', lineHeight: '1.7' }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div 
              className="p-8 rounded-3xl border border-orange-500/20 bg-orange-500/5 backdrop-blur-xl mx-auto"
              style={{
                maxWidth: 'clamp(400px, 50vw, 600px)',
                backdropFilter: 'blur(20px)'
              }}
            >
              <h3 
                className="text-white font-bold mb-4"
                style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
              >
                Still have questions?
              </h3>
              <p 
                className="text-zinc-300 mb-8"
                style={{ fontSize: 'clamp(0.8rem, 1vw, 0.9rem)' }}
              >
                Our team is here to help you with any additional questions or concerns.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-orange-600 via-purple-600 to-blue-600 hover:from-orange-500 hover:to-blue-500 rounded-xl text-white font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl"
                style={{
                  fontSize: 'clamp(14px, 1.2vw, 16px)'
                }}
              >
                Contact Our Team →
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};