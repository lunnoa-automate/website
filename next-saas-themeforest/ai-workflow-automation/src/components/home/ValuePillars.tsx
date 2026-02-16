'use client';

import { cn } from '@/utils/cn';
import { useICP } from '@/context/ICPContext';
import { valuePillarsContent } from '@/data/icp-content';
import RevealAnimation from '../animation/RevealAnimation';

const pillarIcons = [
  // Entity-Centric
  <svg key="1" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>,
  // Speed & Efficiency
  <svg key="2" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
  // Full Control Room
  <svg key="3" className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
    />
  </svg>,
];

const pillarColors = [
  { color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/10' },
  { color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/10' },
  { color: 'from-orange-500 to-amber-500', bgColor: 'bg-orange-500/10' },
];

const ValuePillars = () => {
  const { icp } = useICP();
  const content = valuePillarsContent[icp];

  return (
    <section className="bg-background-2 dark:bg-background-5 py-16 md:py-24">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mb-12 text-center md:mb-16">
            <span className="badge badge-primary-light mb-4 inline-block">Why Lunnoa Automate</span>
            <h2 className="mx-auto max-w-[600px]">Three pillars that transform your operations</h2>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {content.pillars.map((pillar, index) => (
            <RevealAnimation key={`${icp}-${index}`} delay={0.2 + index * 0.1}>
              <div className="group relative h-full">
                <div
                  className={cn(
                    'relative h-full overflow-hidden rounded-3xl bg-white p-8 transition-all duration-300 dark:bg-background-7',
                    'hover:-translate-y-1 hover:shadow-xl',
                  )}>
                  {/* Gradient accent bar */}
                  <div
                    className={cn(
                      'absolute top-0 right-0 left-0 h-1 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100',
                      pillarColors[index].color,
                    )}
                  />

                  {/* Icon */}
                  <div
                    className={cn(
                      'mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-colors',
                      pillarColors[index].bgColor,
                      'text-secondary dark:text-accent',
                    )}>
                    {pillarIcons[index]}
                  </div>

                  {/* Content */}
                  <h3 className="text-heading-5 text-secondary dark:text-accent mb-3">{pillar.title}</h3>
                  <p className="text-tagline-1 mb-6 leading-relaxed text-secondary/70 dark:text-accent/70">
                    {pillar.description}
                  </p>

                  {/* Metric */}
                  <div className="border-t border-stroke-1 pt-6 dark:border-stroke-6">
                    <div className="flex items-baseline gap-2">
                      <span
                        className={cn(
                          'bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent',
                          pillarColors[index].color,
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
          <div className="mt-12 text-center">
            <p className="text-tagline-1 mx-auto max-w-2xl text-secondary/60 dark:text-accent/60">
              {content.bottomCta}
              <span className="text-secondary dark:text-accent font-semibold">
                {content.bottomCtaHighlight}
              </span>
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ValuePillars;
