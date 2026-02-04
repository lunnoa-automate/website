'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface Step {
  number: number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface HowItWorksProps {
  headline: string;
  subheadline?: string;
  steps: Step[];
}

const HowItWorks = ({ headline, subheadline, steps }: HowItWorksProps) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-4">
              How It Works
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

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className={cn(
                "relative flex gap-6 md:gap-8",
                index !== steps.length - 1 && "pb-12"
              )}>
                {/* Connector line */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/50 to-primary-500/10" />
                )}

                {/* Step number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-lg font-bold relative z-10">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="p-6 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                    <div className="flex items-start gap-4">
                      {step.icon && (
                        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                          {step.icon}
                        </span>
                      )}
                      <div>
                        <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">
                          {step.title}
                        </h3>
                        <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                          {step.description}
                        </p>
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

export default HowItWorks;
