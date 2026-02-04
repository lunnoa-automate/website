'use client';

import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const PricingCTA = () => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-5">
      <div className="main-container">
        <div className="max-w-4xl mx-auto">
          <RevealAnimation delay={0.1}>
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-4xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
                <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
              </div>

              <div className="relative z-10">
                <h2 className="text-heading-4 md:text-heading-2 text-white mb-4">
                  Ready to Automate Your Workflows?
                </h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your specific use cases—whether it's MNPI screening, capital calls, 
                  KYC automation, or custom workflows. We'll show you exactly what's possible.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                  <LinkButton
                    href="/contact-us"
                    className="btn btn-lg bg-white text-primary-500 hover:bg-white/90"
                    aria-label="Schedule Discovery Call">
                    Schedule Discovery Call
                  </LinkButton>
                  <LinkButton
                    href="/solutions/private-equity"
                    className="btn btn-lg btn-outline border-white text-white hover:bg-white/10"
                    aria-label="See Use Cases">
                    See Use Cases
                  </LinkButton>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-white/70 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="ns-shape-8 text-[16px]" />
                    <span>No commitment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="ns-shape-21 text-[16px]" />
                    <span>Custom demo with your use case</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="ns-shape-34 text-[16px]" />
                    <span>Transparent pricing</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default PricingCTA;
