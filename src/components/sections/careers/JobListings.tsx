'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { MapPin, Briefcase, Clock, ArrowRight, Star } from 'lucide-react';

interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  salary: string;
  posted: string;
  featured: boolean;
}

interface JobListingsProps {
  jobs: Job[];
}

export const JobListings = ({ jobs }: JobListingsProps) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const departments = ['all', ...Array.from(new Set(jobs.map(j => j.department)))];
  const filteredJobs = selectedDept === 'all' ? jobs : jobs.filter(j => j.department === selectedDept);

  return (
    <section className="relative py-24 bg-deep-midnight overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(184, 148, 95, 0.4) 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-platinum to-silver bg-clip-text text-transparent">
              Open Positions
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-survey-corps-emerald to-military-brass mx-auto rounded-full" />
        </motion.div>

        {/* Department Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              className={`px-5 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                selectedDept === dept
                  ? 'bg-gradient-to-r from-survey-corps-emerald to-military-brass text-white shadow-lg'
                  : 'bg-graphite/50 text-silver hover:bg-graphite border border-white/5 hover:border-survey-corps-emerald/30'
              }`}
            >
              {dept === 'all' ? 'All Departments' : dept}
            </button>
          ))}
        </motion.div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job, index) => (
            <motion.div
              key={job.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/careers/${job.slug}`}>
                <div className="relative h-full p-6 rounded-2xl bg-graphite/50 backdrop-blur-sm border border-white/5 hover:border-survey-corps-emerald/30 transition-all duration-500">
                  {job.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-military-brass to-survey-corps-emerald flex items-center gap-1">
                      <Star className="w-3 h-3 text-white fill-white" />
                      <span className="text-white text-xs font-bold">Featured</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-br from-survey-corps-emerald/0 to-military-brass/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                  <div className="relative z-10">
                    <div className="mb-4">
                      <span className="px-3 py-1 rounded-md bg-survey-corps-emerald/10 text-military-brass text-xs font-medium border border-survey-corps-emerald/20">
                        {job.department}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-platinum mb-2 group-hover:text-military-brass transition-colors duration-300">
                      {job.title}
                    </h3>

                    <p className="text-silver text-sm mb-4 line-clamp-2">{job.description}</p>

                    <div className="flex flex-wrap gap-4 text-xs text-ash mb-4 pb-4 border-b border-white/5">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="w-3 h-3" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-military-brass font-bold">{job.salary}</span>
                      <div className="flex items-center gap-2 text-military-brass font-medium text-sm group-hover:gap-3 transition-all duration-300">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
