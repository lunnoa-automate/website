'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import aboutBg from '@public/images/ns-img-14.png';
import Image from 'next/image';

interface FeatureCTAProps {
  title: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
}

const FeatureCTA = ({
  title,
  features,
  ctaText = 'Get Started',
  ctaHref = '/contact-us',
}: FeatureCTAProps) => {
  return (
    <section className="py-16 md:py-24 bg-background-1 dark:bg-background-6">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="relative z-10 overflow-hidden rounded-3xl">
            <div className="absolute inset-0 -z-10">
              <Image src={aboutBg} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
              <div>
                <h2 className="text-heading-5 md:text-heading-4 text-accent mb-8 max-w-md">
                  {title}
                </h2>
                <LinkButton
                  href={ctaHref}
                  className="btn btn-md btn-white hover:btn-primary"
                  aria-label={ctaText}>
                  {ctaText}
                </LinkButton>
              </div>
              <div>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <span className="ns-shape-1 text-[10px] text-accent" />
                      </span>
                      <span className="text-accent">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default FeatureCTA;
