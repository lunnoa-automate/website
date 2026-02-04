'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

interface PainPoint {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
}

interface PainPointsProps {
  headline: string;
  subheadline?: string;
  painPoints: PainPoint[];
}

const PainPoints = ({ headline, subheadline, painPoints }: PainPointsProps) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-red mb-4">
              Challenges
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

        {/* Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <RevealAnimation key={index} delay={0.1 + index * 0.05}>
              <div className={cn(
                "group relative p-8 rounded-[20px] bg-background-2 dark:bg-background-5 h-full",
                "border border-stroke-1 dark:border-stroke-6",
                "hover:border-red-500/30 dark:hover:border-red-500/30",
                "transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5"
              )}>
                {/* Icon */}
                <div className="mb-6">
                  <span className="inline-flex w-14 h-14 rounded-2xl bg-red-500/10 text-red-500 items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {point.icon}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-heading-6 text-secondary dark:text-accent">
                    {point.title}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                {/* Stat badge */}
                {point.stat && (
                  <div className="mt-6 pt-6 border-t border-stroke-1 dark:border-stroke-6">
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/10 text-red-500 text-sm font-medium">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {point.stat}
                    </span>
                  </div>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
