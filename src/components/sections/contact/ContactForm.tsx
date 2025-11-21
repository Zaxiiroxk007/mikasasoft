'use client';

import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Container } from "@/components/common/Layout";
import { Button } from "@/components/ui/button";

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
    <section className="py-24 bg-zinc-950 border-t border-zinc-900">
      <Container size="xl">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full" />
            Get In Touch
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s Start <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
              Your Project
            </span>
          </h2>

          <p className="text-lg text-zinc-400">
            {data.description}
          </p>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-zinc-900 border border-zinc-800">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white placeholder-zinc-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white placeholder-zinc-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Company & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white placeholder-zinc-500 focus:outline-none"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white placeholder-zinc-500 focus:outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Service Type
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white focus:outline-none"
                  >
                    <option value="">Select service</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="cloud-migration">Cloud Migration</option>
                    <option value="digital-transformation">Digital Transformation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white focus:outline-none"
                  >
                    <option value="">Select project type</option>
                    <option value="new-project">New Project</option>
                    <option value="redesign">Redesign</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="consultation">Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm">
                    Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white focus:outline-none"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under $10K</option>
                    <option value="10k-25k">$10K - $25K</option>
                    <option value="25k-50k">$25K - $50K</option>
                    <option value="50k-100k">$50K - $100K</option>
                    <option value="over-100k">Over $100K</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-white font-medium mb-2 text-sm">
                  Project Description *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-zinc-800 bg-zinc-950 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors text-white placeholder-zinc-500 focus:outline-none resize-none"
                  placeholder="Describe your project requirements, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center pt-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className={`w-full md:w-auto min-w-[200px] ${submitStatus === 'success' ? 'bg-green-600 hover:bg-green-700' :
                    submitStatus === 'error' ? 'bg-red-600 hover:bg-red-700' :
                      ''
                    }`}
                  variant={submitStatus === 'idle' ? 'primary' : undefined}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Message Sent!
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <AlertCircle className="w-4 h-4 mr-2" />
                      Error Sending
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};