'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  metric?: string;
  metricLabel?: string;
}

interface SolutionTestimonialProps {
  testimonials: Testimonial[];
}

const SolutionTestimonial = ({ testimonials }: SolutionTestimonialProps) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="text-center mb-12">
            <span className="inline-block badge badge-green mb-4">
              Testimonials
            </span>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent">
              What our clients say
            </h2>
          </div>
        </RevealAnimation>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="group relative h-full">
                {/* Gradient border on hover */}
                <div className="absolute -inset-[2px] rounded-[22px] bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 group-hover:from-primary-500/20 group-hover:via-transparent group-hover:to-primary-500/20 transition-all duration-500 opacity-0 group-hover:opacity-100" />

                <div className="relative p-8 md:p-10 rounded-[20px] bg-background-2 dark:bg-background-5 h-full flex flex-col">
                  {/* Quote icon */}
                  <div className="mb-6">
                    <svg
                      className="w-12 h-12 text-primary-500/20"
                      fill="currentColor"
                      viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Quote text */}
                  <div className="flex-1 mb-8">
                    <p className="text-secondary/80 dark:text-accent/80 leading-relaxed text-lg md:text-xl">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  {/* Author & Metric */}
                  <div className="flex items-end justify-between pt-6 border-t border-stroke-1 dark:border-stroke-6">
                    <div className="flex items-center gap-4">
                      {/* Avatar placeholder */}
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-500/5 flex items-center justify-center">
                        <span className="text-primary-500 font-semibold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-semibold text-secondary dark:text-accent">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-secondary/60 dark:text-accent/60">
                          {testimonial.title}
                        </p>
                        <p className="text-sm text-secondary/40 dark:text-accent/40">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                    {testimonial.metric && (
                      <div className="text-right">
                        <p className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                          {testimonial.metric}
                        </p>
                        {testimonial.metricLabel && (
                          <p className="text-xs text-secondary/50 dark:text-accent/50">
                            {testimonial.metricLabel}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionTestimonial;
