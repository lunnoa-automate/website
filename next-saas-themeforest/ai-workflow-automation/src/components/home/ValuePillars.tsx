'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';

const pillars = [
  {
    id: 1,
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
    title: 'Entity-Centric Automation',
    description: 'Define Deals, Clients, Investments as objects. Track each through complete processes—not isolated tasks.',
    metric: 'End-to-End',
    metricLabel: 'Process Orchestration',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    id: 2,
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Speed & Efficiency',
    description: 'MNPI screening: 2-4 hours → 15-30 minutes. KYC reassessments: weeks → days. Capital calls: automated.',
    metric: '50-80%',
    metricLabel: 'Time Saved',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    id: 3,
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
        />
      </svg>
    ),
    title: 'Full Control Room',
    description: 'Monitor every deal and client in real-time. Intervene when needed. One dashboard for complete oversight.',
    metric: '100%',
    metricLabel: 'Visibility',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-500/10',
  },
];

const ValuePillars = () => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="text-center mb-12 md:mb-16">
            <span className="badge badge-primary-light inline-block mb-4">Why Lunnoa Automate</span>
            <h2 className="mx-auto max-w-[600px]">
              Three pillars that transform your operations
            </h2>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <RevealAnimation key={pillar.id} delay={0.2 + index * 0.1}>
              <div className="group relative h-full">
                <div
                  className={cn(
                    'relative h-full overflow-hidden rounded-3xl bg-white dark:bg-background-7 p-8 transition-all duration-300',
                    'hover:shadow-xl hover:-translate-y-1',
                  )}>
                  {/* Gradient accent bar */}
                  <div
                    className={cn(
                      'absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity',
                      pillar.color,
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      'inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-colors',
                      pillar.bgColor,
                      'text-secondary dark:text-accent',
                    )}>
                    {pillar.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-5 text-secondary dark:text-accent mb-3">{pillar.title}</h3>
                  <p className="text-tagline-1 text-secondary/70 dark:text-accent/70 mb-6 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Metric */}
                  <div className="pt-6 border-t border-stroke-1 dark:border-stroke-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn(
                          'text-3xl font-bold bg-gradient-to-r bg-clip-text text-transparent',
                          pillar.color,
                        )}>
                        {pillar.metric}
                      </span>
                      <span className="text-tagline-2 text-secondary/50 dark:text-accent/50">
                        {pillar.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <RevealAnimation delay={0.5}>
          <div className="text-center mt-12">
            <p className="text-tagline-1 text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              Private Equity firms using Lunnoa report <span className="font-semibold text-secondary dark:text-accent">€75k-150k annual savings</span> per automated workflow
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ValuePillars;
