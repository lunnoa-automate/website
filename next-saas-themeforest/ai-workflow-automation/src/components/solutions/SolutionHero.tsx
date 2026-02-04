'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

interface SolutionHeroProps {
  badge: string;
  headline: string;
  highlightedText?: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  metrics: Array<{
    value: string;
    label: string;
  }>;
  icon?: React.ReactNode;
}

const SolutionHero = ({
  badge,
  headline,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  metrics,
  icon,
}: SolutionHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-background-2 dark:bg-background-7 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration - gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/10 to-transparent blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary-500/5 blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <RevealAnimation delay={0.1}>
            <span className="inline-flex items-center gap-2 badge badge-cyan mb-6">
              {icon && <span className="w-5 h-5">{icon}</span>}
              {badge}
            </span>
          </RevealAnimation>

          {/* Headline */}
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-1 text-secondary dark:text-accent mb-6">
              {headline}
              {highlightedText && (
                <span className="text-primary-500"> {highlightedText}</span>
              )}
            </h1>
          </RevealAnimation>

          {/* Description */}
          <RevealAnimation delay={0.3}>
            <p className="text-lg md:text-xl text-secondary/70 dark:text-accent/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              {description}
            </p>
          </RevealAnimation>

          {/* CTAs */}
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
              <LinkButton
                href={primaryCTA.href}
                className="btn btn-lg btn-primary hover:btn-secondary w-[85%] sm:w-auto"
                aria-label={primaryCTA.text}>
                {primaryCTA.text}
              </LinkButton>
              {secondaryCTA && (
                <LinkButton
                  href={secondaryCTA.href}
                  className="btn btn-lg btn-outline-secondary dark:btn-outline-accent hover:btn-secondary dark:hover:btn-accent w-[85%] sm:w-auto"
                  aria-label={secondaryCTA.text}>
                  {secondaryCTA.text}
                </LinkButton>
              )}
            </div>
          </RevealAnimation>

          {/* Metrics - Enhanced cards */}
          <RevealAnimation delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className="group relative p-[1px] rounded-2xl bg-gradient-to-br from-primary-500/30 via-transparent to-primary-500/30 hover:from-primary-500/50 hover:to-primary-500/50 transition-all duration-300">
                  <div className="px-6 py-4 rounded-2xl bg-white dark:bg-background-6 text-center min-w-[140px]">
                    <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                      {metric.value}
                    </p>
                    <p className="text-sm text-secondary/60 dark:text-accent/60 mt-1">
                      {metric.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;
