'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const AIHandbookCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Ready to See AI in Action?
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 mb-8 leading-relaxed">
              The handbook gives you the framework. A demo shows you the reality. See how Lunnoa Automate handles MNPI screening, capital calls, and KYC for PE and wealth management teams.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-lg btn-primary hover:btn-secondary"
                aria-label="Get a Demo">
                Get a Demo
              </LinkButton>
              <LinkButton
                href="/solutions/private-equity"
                className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                aria-label="Explore Solutions">
                Explore Solutions
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AIHandbookCTA;
