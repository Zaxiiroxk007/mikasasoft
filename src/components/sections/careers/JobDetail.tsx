'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowLeft, MapPin, Briefcase, Clock, DollarSign, Calendar, Check } from 'lucide-react';

interface JobDetailProps {
  job: {
    id: string;
    slug: string;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    responsibilities: string[];
    requirements: string[];
    niceToHave: string[];
    salary: string;
    posted: string;
    featured: boolean;
  };
}

export const JobDetail = ({ job }: JobDetailProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="relative bg-deep-midnight">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end overflow-hidden bg-gradient-to-b from-obsidian via-deep-midnight to-deep-midnight">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(45, 95, 76, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 76, 0.2) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 w-full w-full px-6 lg:px-8 pb-12">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 text-military-brass hover:text-survey-corps-emerald transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Careers</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-2 rounded-full bg-survey-corps-emerald/10 text-military-brass text-sm font-medium border border-survey-corps-emerald/30">
                {job.department}
              </span>
              {job.featured && (
                <span className="px-4 py-2 rounded-full bg-gradient-to-r from-military-brass to-survey-corps-emerald text-white text-sm font-bold">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-platinum">
              {job.title}
            </h1>

            <div className="flex flex-wrap gap-4 text-sm text-silver mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-military-brass" />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-military-brass" />
                <span>{job.type}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-military-brass" />
                <span>{job.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-military-brass" />
                <span>{job.salary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-military-brass" />
                <span>Posted {new Date(job.posted).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <div className="relative w-full px-6 lg:px-8 py-16" ref={ref}>
        {/* Description */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            About the Role
          </h2>
          <p className="text-lg text-silver leading-relaxed">{job.description}</p>
        </motion.section>

        {/* Responsibilities */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Responsibilities
          </h2>
          <ul className="space-y-3">
            {job.responsibilities.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-silver">
                <Check className="w-5 h-5 text-survey-corps-emerald mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Requirements */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Requirements
          </h2>
          <ul className="space-y-3">
            {job.requirements.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-silver">
                <Check className="w-5 h-5 text-survey-corps-emerald mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Nice to Have */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-survey-corps-emerald to-military-brass rounded-full" />
            Nice to Have
          </h2>
          <ul className="space-y-3">
            {job.niceToHave.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-silver">
                <Check className="w-5 h-5 text-military-brass mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Apply CTA */}
        <motion.section
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-survey-corps-emerald/10 to-military-brass/10 border border-survey-corps-emerald/20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-platinum mb-4">Ready to Apply?</h2>
          <p className="text-silver text-lg mb-8 max-w-2xl mx-auto">
            Join our team and help us build amazing products. We&apos;d love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-survey-corps-emerald to-military-brass text-white font-bold hover:scale-105 transition-transform duration-300 shadow-lg shadow-survey-corps-emerald/20"
          >
            <span>Apply Now</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </Link>
        </motion.section>
      </div>
    </div>
  );
};
