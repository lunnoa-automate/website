'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useState } from 'react';

interface VideoTestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  quote: string;
  videoThumbnail?: string;
  videoUrl?: string;
  metric?: string;
  metricLabel?: string;
}

interface VideoTestimonialsProps {
  headline?: string;
  subheadline?: string;
  testimonials: VideoTestimonial[];
}

const VideoTestimonials = ({
  headline = 'Hear From Our Customers',
  subheadline,
  testimonials,
}: VideoTestimonialsProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-4">
              Customer Stories
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              {headline}
            </h2>
          </RevealAnimation>
          {subheadline && (
            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
                {subheadline}
              </p>
            </RevealAnimation>
          )}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation key={testimonial.id} delay={0.2 + index * 0.1}>
              <div className="group relative h-full">
                {/* Card */}
                <div className="relative p-[2px] rounded-[24px] bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 group-hover:from-primary-500/20 group-hover:to-primary-500/20 transition-all duration-500 h-full">
                  <div className="rounded-[22px] bg-white dark:bg-background-6 overflow-hidden h-full flex flex-col">
                    {/* Video Thumbnail / Placeholder */}
                    <div className="relative aspect-video bg-gradient-to-br from-primary-500/10 to-primary-500/5 flex items-center justify-center">
                      {testimonial.videoUrl ? (
                        <>
                          {activeVideo === testimonial.id ? (
                            <iframe
                              src={testimonial.videoUrl}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            <button
                              onClick={() => setActiveVideo(testimonial.id)}
                              className="absolute inset-0 flex items-center justify-center group/play">
                              {testimonial.videoThumbnail && (
                                <div
                                  className="absolute inset-0 bg-cover bg-center"
                                  style={{ backgroundImage: `url(${testimonial.videoThumbnail})` }}
                                />
                              )}
                              <div className="relative z-10 w-16 h-16 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-lg group-hover/play:scale-110 transition-transform">
                                <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              </div>
                            </button>
                          )}
                        </>
                      ) : (
                        // Placeholder for video coming soon
                        <div className="text-center p-8">
                          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary-500/20 flex items-center justify-center">
                            <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-sm text-secondary/40 dark:text-accent/40">
                            Video coming soon
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      {/* Quote */}
                      <p className="text-secondary/80 dark:text-accent/80 leading-relaxed mb-6 flex-1">
                        "{testimonial.quote}"
                      </p>

                      {/* Author & Metric */}
                      <div className="flex items-end justify-between pt-4 border-t border-stroke-1 dark:border-stroke-6">
                        <div className="flex items-center gap-3">
                          {/* Avatar */}
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/20 to-primary-500/5 flex items-center justify-center">
                            <span className="text-primary-500 font-semibold">
                              {testimonial.name.charAt(0)}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-secondary dark:text-accent text-sm">
                              {testimonial.name}
                            </p>
                            <p className="text-xs text-secondary/60 dark:text-accent/60">
                              {testimonial.title}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                        {testimonial.metric && (
                          <div className="text-right">
                            <p className="text-2xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
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
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
