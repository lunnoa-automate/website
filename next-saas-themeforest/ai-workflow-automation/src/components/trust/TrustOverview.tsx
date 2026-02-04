'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const trustPillars = [
  {
    icon: 'ns-shape-24',
    title: 'Self-Hosted',
    description: 'Your data stays on your infrastructure. We never see or access your sensitive information.',
  },
  {
    icon: 'ns-shape-7',
    title: 'Encrypted',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. Your data is protected at every layer.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Auditable',
    description: 'Complete audit trails for every action. Full traceability for compliance and oversight.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Compliant',
    description: 'Built for regulated industries. GDPR ready, with data residency controls you need.',
  },
];

const TrustOverview = () => {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-background-6">
      <div className="main-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustPillars.map((pillar, index) => (
            <RevealAnimation key={index} delay={0.1 + index * 0.1}>
              <div className="text-center p-8 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 h-full">
                <div className="mb-6">
                  <span className={cn('text-secondary dark:text-accent inline-block text-[40px]', pillar.icon)} />
                </div>
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-3">
                  {pillar.title}
                </h3>
                <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustOverview;
