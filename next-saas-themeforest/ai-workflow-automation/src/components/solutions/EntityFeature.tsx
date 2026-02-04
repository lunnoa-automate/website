'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface Entity {
  name: string;
  description: string;
  icon: React.ReactNode;
  fields: string[];
}

interface EntityFeatureProps {
  headline: string;
  subheadline: string;
  entities: Entity[];
  processSteps: string[];
}

const EntityFeature = ({ headline, subheadline, entities, processSteps }: EntityFeatureProps) => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-primary-500/5 via-transparent to-primary-500/5 blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-4">
              Entity-Centric Platform
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              {headline}
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              {subheadline}
            </p>
          </RevealAnimation>
        </div>

        {/* Entities Grid - Enhanced cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {entities.map((entity, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="group relative p-[2px] rounded-[20px] bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/20 hover:from-primary-500/40 hover:to-primary-500/40 transition-all duration-500">
                <div className="p-8 rounded-[18px] bg-white dark:bg-background-6 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500/10 to-primary-500/5 text-primary-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {entity.icon}
                    </span>
                    <h3 className="text-heading-5 text-secondary dark:text-accent">
                      {entity.name}
                    </h3>
                  </div>
                  <p className="text-secondary/60 dark:text-accent/60 mb-6">
                    {entity.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {entity.fields.map((field, fieldIndex) => (
                      <span
                        key={fieldIndex}
                        className="px-3 py-1.5 rounded-full bg-background-2 dark:bg-background-5 text-xs font-medium text-secondary/70 dark:text-accent/70 border border-stroke-1 dark:border-stroke-6">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Process Flow - Enhanced visual timeline */}
        <RevealAnimation delay={0.5}>
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-heading-5 text-secondary dark:text-accent">
                Run through <span className="text-primary-500">end-to-end processes</span>
              </h3>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Connecting line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2 hidden lg:block" />

              <div className="flex flex-wrap items-center justify-center gap-3 lg:gap-0 lg:justify-between">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className={cn(
                      "relative flex flex-col items-center",
                      index === 0 && "lg:items-start",
                      index === processSteps.length - 1 && "lg:items-end"
                    )}>
                      {/* Step indicator */}
                      <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold mb-3 relative z-10">
                        {index + 1}
                      </div>
                      {/* Step label */}
                      <span className="px-4 py-2 rounded-xl bg-white dark:bg-background-6 text-sm font-medium text-secondary dark:text-accent border border-stroke-1 dark:border-stroke-6 shadow-sm whitespace-nowrap">
                        {step}
                      </span>
                    </div>
                    {/* Arrow for mobile/tablet */}
                    {index < processSteps.length - 1 && (
                      <svg className="w-5 h-5 text-primary-500/50 mx-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Control Room badge */}
            <div className="text-center mt-10">
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary-500/10 to-primary-500/5 border border-primary-500/20">
                <svg className="w-6 h-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
                <div className="text-left">
                  <p className="text-sm font-semibold text-secondary dark:text-accent">Control Room</p>
                  <p className="text-xs text-secondary/50 dark:text-accent/50">Monitor and steer everything in real-time</p>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default EntityFeature;
