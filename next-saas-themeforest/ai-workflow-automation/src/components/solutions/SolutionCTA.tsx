'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

interface SolutionCTAProps {
  headline: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  features?: string[];
}

const SolutionCTA = ({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  features,
}: SolutionCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-600">
      <div className="main-container">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 md:text-heading-2 text-white mb-4">
              {headline}
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              {description}
            </p>
          </RevealAnimation>

          {features && features.length > 0 && (
            <RevealAnimation delay={0.3}>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {features.map((feature, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm">
                    <svg className="w-4 h-4 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </span>
                ))}
              </div>
            </RevealAnimation>
          )}

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href={primaryCTA.href}
                className="btn bg-white text-primary-500 hover:bg-white/90 px-8 py-4 text-base font-semibold">
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="btn btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-base font-semibold">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SolutionCTA;
