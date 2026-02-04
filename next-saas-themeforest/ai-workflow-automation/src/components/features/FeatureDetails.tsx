'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import gradient6Img from '@public/images/ns-img-498.png';
import Image from 'next/image';

interface FeatureDetailsProps {
  badge: string;
  badgeClass?: string;
  title: string;
  description: string;
  features: string[];
  ctaText?: string;
  ctaHref?: string;
  imagePosition?: 'left' | 'right';
}

const FeatureDetails = ({
  badge,
  badgeClass = 'badge-cyan',
  title,
  description,
  features,
  ctaText = 'Learn More',
  ctaHref = '/contact-us',
  imagePosition = 'left',
}: FeatureDetailsProps) => {
  return (
    <section className="bg-background-2 dark:bg-background-5 overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="main-container">
        <div className={cn(
          "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16",
          imagePosition === 'right' && 'lg:flex-row-reverse'
        )}>
          {/* Image Side */}
          <div className={cn(imagePosition === 'right' ? 'lg:order-2' : 'lg:order-1')}>
            <RevealAnimation delay={0.2}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-500/5 rounded-3xl blur-2xl" />
                <div className="relative bg-background-3 dark:bg-background-6 rounded-3xl p-8 md:p-12 border border-stroke-1 dark:border-stroke-6">
                  <figure className="pointer-events-none absolute -top-20 -right-20 w-[400px] h-[400px] opacity-30">
                    <Image src={gradient6Img} alt="" className="w-full h-full object-cover" />
                  </figure>
                  <div className="relative z-10 space-y-4">
                    {features.slice(0, 4).map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-background-5 border border-stroke-1 dark:border-stroke-6">
                        <span className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="ns-shape-1 text-[12px] text-primary-500" />
                        </span>
                        <span className="text-secondary dark:text-accent text-sm font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Content Side */}
          <div className={cn(imagePosition === 'right' ? 'lg:order-1' : 'lg:order-2')}>
            <div className="max-w-lg">
              <RevealAnimation delay={0.1}>
                <span className={cn('badge mb-4', badgeClass)}>{badge}</span>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent mb-4">
                  {title}
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/70 dark:text-accent/70 mb-8 leading-relaxed">
                  {description}
                </p>
              </RevealAnimation>
              <RevealAnimation delay={0.4}>
                <ul className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="ns-shape-1 text-[10px] text-primary-500" />
                      </span>
                      <span className="text-secondary/80 dark:text-accent/80 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </RevealAnimation>
              <RevealAnimation delay={0.5}>
                <LinkButton
                  href={ctaHref}
                  className="btn btn-md btn-primary hover:btn-secondary"
                  aria-label={ctaText}>
                  {ctaText}
                </LinkButton>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetails;
