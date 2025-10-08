'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  serviceType?: string;
  budget?: string;
  projectType?: string;
  message: string;
}

interface ContactFormProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
  };
}

export const ContactForm = ({ data }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    budget: '',
    projectType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceType: '',
        budget: '',
        projectType: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section className="relative py-24 overflow-hidden" style={{
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)'
    }}>
      {/* Dynamic Background */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(circle at 25% 25%, rgba(239, 68, 68, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
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
              className="inline-flex items-center px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 mb-8"
              style={{
                fontSize: 'clamp(12px, 1vw, 16px)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <span className="text-red-400 font-medium">Get In Touch</span>
            </motion.div>

            <h2 className="font-bold mb-6" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              lineHeight: '1.1'
            }}>
              <span className="text-white">Let&apos;s Start</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-purple-500 to-blue-400 bg-clip-text text-transparent">
                Your Project
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div 
              className="p-8 lg:p-12 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl"
              style={{
                backdropFilter: 'blur(20px)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Name *
                    </label>
                    <motion.input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-zinc-400 focus:outline-none"
                      placeholder="Your full name"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-zinc-400 focus:outline-none"
                      placeholder="your@email.com"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Company
                    </label>
                    <motion.input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-zinc-400 focus:outline-none"
                      placeholder="Your company name"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.1 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Phone
                    </label>
                    <motion.input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-zinc-400 focus:outline-none"
                      placeholder="+1 (555) 123-4567"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    />
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Service Type
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white focus:outline-none"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    >
                      <option value="">Select service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="digital-transformation">Digital Transformation</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.3 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Project Type
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white focus:outline-none"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    >
                      <option value="">Select project type</option>
                      <option value="new-project">New Project</option>
                      <option value="redesign">Redesign</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                  >
                    <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                      Budget
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white focus:outline-none"
                      style={{
                        fontSize: 'clamp(14px, 1.2vw, 16px)'
                      }}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10K</option>
                      <option value="10k-25k">$10K - $25K</option>
                      <option value="25k-50k">$25K - $50K</option>
                      <option value="50k-100k">$50K - $100K</option>
                      <option value="over-100k">Over $100K</option>
                    </select>
                  </motion.div>
                </div>

                {/* Message */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                >
                  <label className="block text-white font-semibold mb-3" style={{ fontSize: 'clamp(14px, 1.2vw, 16px)' }}>
                    Project Description *
                  </label>
                  <motion.textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    whileFocus={{ scale: 1.01 }}
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border border-white/10 bg-white/5 focus:border-red-500/50 focus:bg-white/10 transition-all duration-300 text-white placeholder-zinc-400 focus:outline-none resize-none"
                    placeholder="Describe your project requirements, goals, and timeline..."
                    style={{
                      fontSize: 'clamp(14px, 1.2vw, 16px)'
                    }}
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.6 }}
                  className="text-center pt-6"
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`px-12 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 mx-auto ${
                      isSubmitting
                        ? 'bg-zinc-600 text-zinc-400 cursor-not-allowed'
                        : submitStatus === 'success'
                        ? 'bg-green-600 hover:bg-green-500 text-white'
                        : submitStatus === 'error'
                        ? 'bg-red-600 hover:bg-red-500 text-white'
                        : 'bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 hover:from-red-500 hover:to-blue-500 text-white shadow-xl hover:shadow-2xl'
                    }`}
                    style={{
                      fontSize: 'clamp(16px, 1.5vw, 20px)',
                      padding: 'clamp(16px, 1.5vw, 20px) clamp(32px, 3vw, 48px)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : submitStatus === 'success' ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : submitStatus === 'error' ? (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>Error Sending</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-purple-500/5 to-blue-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};