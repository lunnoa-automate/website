'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const TrustCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Have Security Questions?
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 mb-8 leading-relaxed">
              Our security team is available to answer your questions, complete security questionnaires, and discuss your specific compliance requirements.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-lg btn-primary hover:btn-secondary"
                aria-label="Talk to Security Team">
                Talk to Security Team
              </LinkButton>
              <LinkButton
                href="/security"
                className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                aria-label="View Security Details">
                View Security Details
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default TrustCTA;
