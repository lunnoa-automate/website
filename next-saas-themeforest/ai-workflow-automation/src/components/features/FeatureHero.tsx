'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import Image from 'next/image';

interface FeatureHeroProps {
  badge: string;
  badgeClass?: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  features?: {
    icon: string;
    title: string;
    description: string;
  }[];
  media?: {
    type: 'image' | 'video' | 'placeholder';
    src?: string;
    alt?: string;
    posterSrc?: string;
  };
  metrics?: {
    value: string;
    label: string;
  }[];
}

const PlayIcon = () => (
  <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const FeatureHero = ({
  badge,
  badgeClass = 'badge-green',
  title,
  titleHighlight,
  description,
  primaryCta = { text: 'Get a Demo', href: '/contact-us' },
  secondaryCta,
  features,
  media = { type: 'placeholder' },
  metrics,
}: FeatureHeroProps) => {
  return (
    <section className="relative overflow-hidden pt-32 pb-14 sm:pt-36 md:pt-40 md:pb-16 lg:pb-20 xl:pt-[160px] xl:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/5 to-transparent blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        {/* Hero Content - Split Layout */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 mb-16 lg:mb-24">
          {/* Left: Text Content */}
          <div className="w-full lg:w-[45%] space-y-6 mb-10 lg:mb-0">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge', badgeClass)}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 lg:text-[2.75rem] xl:text-heading-1 text-secondary dark:text-accent leading-tight">
                {title}
                {titleHighlight && <span className="text-primary-500"> {titleHighlight}</span>}
              </h1>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/70 dark:text-accent/70 leading-relaxed max-w-lg">
                {description}
              </p>
            </RevealAnimation>
            <RevealAnimation delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
                <LinkButton
                  href={primaryCta.href}
                  className="btn btn-lg btn-primary hover:btn-secondary"
                  aria-label={primaryCta.text}>
                  {primaryCta.text}
                </LinkButton>
                {secondaryCta && (
                  <LinkButton
                    href={secondaryCta.href}
                    className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                    aria-label={secondaryCta.text}>
                    {secondaryCta.text}
                  </LinkButton>
                )}
              </div>
            </RevealAnimation>

            {/* Metrics */}
            {metrics && metrics.length > 0 && (
              <RevealAnimation delay={0.5}>
                <div className="flex flex-wrap gap-6 pt-6 border-t border-stroke-1 dark:border-stroke-6">
                  {metrics.map((metric, index) => (
                    <div key={index} className="text-left">
                      <p className="text-2xl font-bold text-secondary dark:text-accent">{metric.value}</p>
                      <p className="text-sm text-secondary/60 dark:text-accent/60">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </RevealAnimation>
            )}
          </div>

          {/* Right: Media (Image/Video/Placeholder) */}
          <div className="w-full lg:w-[55%]">
            <RevealAnimation delay={0.3} direction="right">
              <div className="relative">
                {media.type === 'placeholder' && (
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-background-3 to-background-2 dark:from-background-5 dark:to-background-6 border border-stroke-1 dark:border-stroke-6 shadow-2xl">
                    {/* Placeholder Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Decorative grid */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="w-full h-full" style={{ 
                          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
                          backgroundSize: '40px 40px'
                        }} />
                      </div>
                      
                      {/* Play button overlay */}
                      <div className="relative z-10 flex flex-col items-center gap-4">
                        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg shadow-primary-500/30 cursor-pointer hover:scale-110 transition-transform duration-300">
                          <PlayIcon />
                        </div>
                        <span className="text-secondary/60 dark:text-accent/60 text-sm font-medium">Watch Demo</span>
                      </div>

                      {/* Decorative elements */}
                      <div className="absolute top-6 left-6 flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      
                      {/* Floating cards for visual interest */}
                      <div className="absolute bottom-8 left-8 bg-white dark:bg-background-6 rounded-xl p-4 shadow-lg border border-stroke-1 dark:border-stroke-6 opacity-90">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                            <span className="ns-shape-1 text-primary-500 text-lg" />
                          </div>
                          <div>
                            <p className="text-xs text-secondary/60 dark:text-accent/60">Status</p>
                            <p className="text-sm font-medium text-secondary dark:text-accent">Completed</p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute top-8 right-8 bg-white dark:bg-background-6 rounded-xl p-4 shadow-lg border border-stroke-1 dark:border-stroke-6 opacity-90">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                            <span className="ns-shape-41 text-green-500 text-lg" />
                          </div>
                          <div>
                            <p className="text-xs text-secondary/60 dark:text-accent/60">AI Agent</p>
                            <p className="text-sm font-medium text-secondary dark:text-accent">Active</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {media.type === 'image' && media.src && (
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-stroke-1 dark:border-stroke-6">
                    <Image
                      src={media.src}
                      alt={media.alt || 'Feature illustration'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                
                {media.type === 'video' && media.src && (
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-stroke-1 dark:border-stroke-6">
                    <video
                      src={media.src}
                      poster={media.posterSrc}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Glow effect behind media */}
                <div className="absolute -inset-4 -z-10 bg-gradient-to-r from-primary-500/20 via-primary-500/10 to-primary-500/20 rounded-3xl blur-2xl opacity-50" />
              </div>
            </RevealAnimation>
          </div>
        </div>

        {/* Feature Cards */}
        {features && features.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <RevealAnimation key={index} delay={0.4 + index * 0.1}>
                <div className="group p-6 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-stroke-6 hover:border-primary-500/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="mb-4">
                    <span className={cn('text-primary-500 inline-block text-[40px] group-hover:scale-110 transition-transform duration-300', feature.icon)} />
                  </div>
                  <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeatureHero;
