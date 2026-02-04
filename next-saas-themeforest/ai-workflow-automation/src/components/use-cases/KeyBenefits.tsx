'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  metric?: string;
}

interface KeyBenefitsProps {
  headline: string;
  subheadline?: string;
  benefits: Benefit[];
}

const KeyBenefits = ({ headline, subheadline, benefits }: KeyBenefitsProps) => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              Benefits
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

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="group relative p-[2px] rounded-[20px] bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 hover:from-primary-500/20 hover:to-primary-500/20 transition-all duration-500">
                <div className="p-8 rounded-[18px] bg-white dark:bg-background-6 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <span className="inline-flex w-14 h-14 rounded-2xl bg-primary-500/10 text-primary-500 items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-heading-6 text-secondary dark:text-accent">
                      {benefit.title}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Metric */}
                  {benefit.metric && (
                    <div className="mt-6 pt-6 border-t border-stroke-1 dark:border-stroke-6">
                      <span className="text-lg font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                        {benefit.metric}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
