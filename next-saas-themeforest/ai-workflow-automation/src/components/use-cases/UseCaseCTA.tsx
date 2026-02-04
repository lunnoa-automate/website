'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Link from 'next/link';

interface RelatedUseCase {
  title: string;
  href: string;
  description: string;
}

interface UseCaseCTAProps {
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
  relatedUseCases?: RelatedUseCase[];
}

const UseCaseCTA = ({
  headline,
  description,
  primaryCTA,
  secondaryCTA,
  relatedUseCases,
}: UseCaseCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
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

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href={primaryCTA.href}
                className="btn btn-lg bg-white text-primary-500 hover:bg-white/90"
                aria-label={primaryCTA.text}>
                {primaryCTA.text}
              </LinkButton>
              {secondaryCTA && (
                <LinkButton
                  href={secondaryCTA.href}
                  className="btn btn-lg btn-outline border-white text-white hover:bg-white/10"
                  aria-label={secondaryCTA.text}>
                  {secondaryCTA.text}
                </LinkButton>
              )}
            </div>
          </RevealAnimation>
        </div>

        {/* Related Use Cases */}
        {relatedUseCases && relatedUseCases.length > 0 && (
          <RevealAnimation delay={0.4}>
            <div className="pt-12 border-t border-white/20">
              <p className="text-center text-white/60 text-sm font-medium uppercase tracking-wider mb-6">
                Related Use Cases
              </p>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {relatedUseCases.map((useCase, index) => (
                  <Link
                    key={index}
                    href={useCase.href}
                    className="group p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                    <p className="text-white font-medium mb-1 group-hover:underline">
                      {useCase.title}
                    </p>
                    <p className="text-white/60 text-sm">
                      {useCase.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </RevealAnimation>
        )}
      </div>
    </section>
  );
};

export default UseCaseCTA;
