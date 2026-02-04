'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

interface UseCaseHeroProps {
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
  beforeAfter: {
    before: string;
    after: string;
    improvement: string;
  };
  industries: string[];
}

const UseCaseHero = ({
  badge,
  headline,
  highlightedText,
  description,
  primaryCTA,
  secondaryCTA,
  beforeAfter,
  industries,
}: UseCaseHeroProps) => {
  return (
    <section className="relative overflow-hidden bg-background-2 dark:bg-background-7 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/10 to-transparent blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <RevealAnimation delay={0.1}>
              <span className="inline-block badge badge-cyan mb-6">
                {badge}
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1 text-secondary dark:text-accent mb-6">
                {headline}
                {highlightedText && (
                  <span className="text-primary-500"> {highlightedText}</span>
                )}
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/70 dark:text-accent/70 mb-8 leading-relaxed">
                {description}
              </p>
            </RevealAnimation>

            {/* Industries */}
            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap gap-2 mb-8">
                {industries.map((industry, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-full bg-background-1 dark:bg-background-5 text-sm text-secondary/70 dark:text-accent/70 border border-stroke-1 dark:border-stroke-6">
                    {industry}
                  </span>
                ))}
              </div>
            </RevealAnimation>

            {/* CTAs */}
            <RevealAnimation delay={0.5}>
              <div className="flex flex-col sm:flex-row gap-4">
                <LinkButton
                  href={primaryCTA.href}
                  className="btn btn-lg btn-primary hover:btn-secondary"
                  aria-label={primaryCTA.text}>
                  {primaryCTA.text}
                </LinkButton>
                {secondaryCTA && (
                  <LinkButton
                    href={secondaryCTA.href}
                    className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                    aria-label={secondaryCTA.text}>
                    {secondaryCTA.text}
                  </LinkButton>
                )}
              </div>
            </RevealAnimation>
          </div>

          {/* Right - Before/After Card */}
          <RevealAnimation delay={0.4}>
            <div className="relative p-[2px] rounded-[24px] bg-gradient-to-br from-primary-500/30 via-transparent to-primary-500/30">
              <div className="rounded-[22px] bg-white dark:bg-background-6 p-8 md:p-10">
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-8 text-center">
                  The Impact
                </h3>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                    <p className="text-xs font-medium text-red-500/60 uppercase tracking-wider mb-2">Before</p>
                    <p className="text-xl md:text-2xl font-bold text-red-500">
                      {beforeAfter.before}
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-primary-500/5 border border-primary-500/10">
                    <p className="text-xs font-medium text-primary-500/60 uppercase tracking-wider mb-2">After</p>
                    <p className="text-xl md:text-2xl font-bold text-primary-500">
                      {beforeAfter.after}
                    </p>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                    <p className="text-xs font-medium text-green-500/60 uppercase tracking-wider mb-2">Faster</p>
                    <p className="text-xl md:text-2xl font-bold text-green-500">
                      {beforeAfter.improvement}
                    </p>
                  </div>
                </div>

                {/* Visual arrow */}
                <div className="flex items-center justify-center gap-4">
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-red-500/50 to-transparent" />
                  <svg className="w-8 h-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <div className="flex-1 h-[2px] bg-gradient-to-l from-green-500/50 to-transparent" />
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default UseCaseHero;
