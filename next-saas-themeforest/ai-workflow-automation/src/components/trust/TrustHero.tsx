'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const TrustHero = () => {
  return (
    <section className="relative overflow-hidden bg-background-2 dark:bg-background-7 pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-6">
              Trust Center
            </span>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1 text-secondary dark:text-accent mb-6">
              Transparency in
              <span className="text-primary-500"> Security</span>
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="text-lg md:text-xl text-secondary/70 dark:text-accent/70 leading-relaxed">
              Access our security documentation, compliance certifications, and learn how we protect your data. We believe transparency builds trust.
            </p>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default TrustHero;
