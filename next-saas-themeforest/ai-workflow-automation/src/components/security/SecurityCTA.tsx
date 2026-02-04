'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

const SecurityCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <RevealAnimation delay={0.1}>
            <h2 className="text-heading-4 md:text-heading-2 text-white mb-4">
              Ready to Talk Security?
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Our security team is available to discuss your specific requirements, answer security questionnaires, and walk through our architecture.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-lg bg-white text-primary-500 hover:bg-white/90"
                aria-label="Schedule Security Review">
                Schedule Security Review
              </LinkButton>
              <LinkButton
                href="/trust"
                className="btn btn-lg btn-outline border-white text-white hover:bg-white/10"
                aria-label="View Trust Center">
                View Trust Center
              </LinkButton>
            </div>
          </RevealAnimation>

          {/* Quick contact */}
          <RevealAnimation delay={0.4}>
            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                For security incidents or urgent inquiries: <a href="mailto:security@lunnoa.com" className="text-white hover:underline">security@lunnoa.com</a>
              </p>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default SecurityCTA;
