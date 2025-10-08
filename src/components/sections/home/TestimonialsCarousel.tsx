"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Container, Section } from "@/components/common/Layout";
import { Heading } from "@/components/common/Typography";
import { FadeIn } from "@/components/common/Animations";

interface Testimonial {
  id: string;
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: { url: string; alt: string };
  rating: number;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = testimonials.length - 1;
      if (nextIndex >= testimonials.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <Section spacing="xl" background="alternate" className="relative overflow-hidden border-t border-zinc-800">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <FadeIn className="text-center mb-20">
          <Heading as="h2" className="mb-8 text-4xl md:text-5xl lg:text-6xl font-black">
            <span className="bg-gradient-to-r from-zinc-100 via-white to-zinc-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </Heading>
          <p className="text-zinc-400 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our partners have to say about working with us.
          </p>
        </FadeIn>

        <div className="relative w-full">
          {/* Testimonial Card */}
          <div className="relative min-h-[450px] md:min-h-[400px] lg:min-h-[350px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="relative p-8 md:p-10 lg:p-12 rounded-2xl border border-zinc-700/50 shadow-2xl shadow-blue-500/10 backdrop-blur-xl bg-zinc-900/50">
                  {/* Decorative Quote Mark - Top Left */}
                  <div className="absolute top-4 left-4 opacity-10">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-blue-400 rotate-180" />
                  </div>

                  {/* Decorative Quote Mark - Bottom Right */}
                  <div className="absolute bottom-4 right-4 opacity-10">
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-purple-400" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative z-10 mb-6">
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-200 text-center leading-relaxed font-light italic max-w-4xl mx-auto">
                      &ldquo;{currentTestimonial.text}&rdquo;
                    </p>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-2 mb-6">
                    {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-blue-400 text-blue-400 drop-shadow-lg" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 p-1 mb-4">
                      <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold text-white">
                        {currentTestimonial.author.charAt(0)}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      {currentTestimonial.author}
                    </h4>
                    <p className="text-sm text-zinc-400">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={() => paginate(-1)}
              className="group p-3 rounded-full glass-card border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`h-3 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 ${
                    index === currentIndex
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-zinc-600 hover:bg-zinc-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => paginate(1)}
              className="group p-3 rounded-full glass-card border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" />
            </button>
          </div>

          {/* Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 pt-16 border-t border-zinc-700/50"
          >
            <p className="text-center text-sm text-zinc-400 uppercase tracking-wider mb-10 font-medium">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="text-zinc-300 hover:text-blue-400 transition-colors font-semibold text-base md:text-lg opacity-70 hover:opacity-100"
                >
                  {testimonial.company}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
