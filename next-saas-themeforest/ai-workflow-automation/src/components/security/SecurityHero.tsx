'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const SecurityHero = () => {
  return (
    <section className="relative overflow-hidden bg-background-2 dark:bg-background-7 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/10 to-transparent blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-6">
              Enterprise Security
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1 text-secondary dark:text-accent mb-6">
              Security Built for
              <span className="text-primary-500"> Regulated Industries</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-lg md:text-xl text-secondary/70 dark:text-accent/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              Your data never leaves your infrastructure. Self-hosted deployment, complete audit trails, and compliance-ready architecture designed for PE, wealth management, and banking.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <LinkButton
                href="/contact-us"
                className="btn btn-lg btn-primary hover:btn-secondary"
                aria-label="Talk to Security Team">
                Talk to Security Team
              </LinkButton>
              <LinkButton
                href="/trust"
                className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                aria-label="View Trust Center">
                View Trust Center
              </LinkButton>
            </div>
          </RevealAnimation>

          {/* Trust badges */}
          <RevealAnimation delay={0.5}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-1 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                <span className="ns-shape-24 text-[18px] text-primary-500" />
                <span className="text-sm font-medium text-secondary dark:text-accent">Self-Hosted</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-1 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                <span className="ns-shape-21 text-[18px] text-primary-500" />
                <span className="text-sm font-medium text-secondary dark:text-accent">Data Sovereignty</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-1 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                <span className="ns-shape-8 text-[18px] text-primary-500" />
                <span className="text-sm font-medium text-secondary dark:text-accent">Full Audit Trails</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background-1 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                <span className="ns-shape-3 text-[18px] text-primary-500" />
                <span className="text-sm font-medium text-secondary dark:text-accent">GDPR Ready</span>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SecurityHero;
