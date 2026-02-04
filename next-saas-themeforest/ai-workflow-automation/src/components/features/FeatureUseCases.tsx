'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';

interface UseCase {
  icon: string;
  title: string;
  description: string;
  href?: string;
}

interface FeatureUseCasesProps {
  badge?: string;
  badgeClass?: string;
  title: string;
  description?: string;
  useCases: UseCase[];
}

const FeatureUseCases = ({
  badge = 'Use Cases',
  badgeClass = 'badge-green',
  title,
  description,
  useCases,
}: FeatureUseCasesProps) => {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-background-3 dark:bg-background-7">
      <div className="main-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="lg:max-w-xl">
            <RevealAnimation delay={0.1}>
              <span className={cn('badge mb-4', badgeClass)}>{badge}</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent">
                {title}
              </h2>
            </RevealAnimation>
          </div>
          {description && (
            <div className="lg:max-w-md">
              <RevealAnimation delay={0.3}>
                <p className="text-secondary/60 dark:text-accent/60">
                  {description}
                </p>
              </RevealAnimation>
            </div>
          )}
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <RevealAnimation key={index} delay={0.3 + index * 0.1}>
              <div className="group p-8 rounded-2xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-stroke-6 hover:border-primary-500/30 transition-all duration-300 h-full">
                <div className="mb-6">
                  <span className={cn('text-secondary dark:text-accent inline-block text-[48px] group-hover:scale-110 transition-transform duration-300', useCase.icon)} />
                </div>
                <h3 className="text-heading-5 text-secondary dark:text-accent mb-3">
                  {useCase.title}
                </h3>
                <p className="text-secondary/60 dark:text-accent/60 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                {useCase.href && (
                  <LinkButton
                    href={useCase.href}
                    className="btn btn-md btn-white dark:btn-transparent hover:btn-primary"
                    aria-label={`Learn more about ${useCase.title}`}>
                    Learn More
                  </LinkButton>
                )}
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureUseCases;
