'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const features = [
  {
    icon: 'ns-shape-24',
    title: 'Self-Hosted Deployment',
    description: 'Deploy Lunnoa on your own infrastructure—on-premise, private cloud, or your existing cloud environment. You control where your data lives.',
    details: ['On-premise deployment', 'Private cloud (AWS, Azure, GCP)', 'Air-gapped environments', 'Your security perimeter'],
  },
  {
    icon: 'ns-shape-7',
    title: 'Data Never Leaves',
    description: 'Your sensitive data—MNPI, client information, deal data—never leaves your infrastructure. Full data sovereignty by design.',
    details: ['No data sent to external APIs', 'Local LLM deployment available', 'Encrypted at rest and in transit', 'You own your data'],
  },
  {
    icon: 'ns-shape-8',
    title: 'Complete Audit Trails',
    description: 'Every AI action, user decision, and system event is logged with timestamps, user IDs, and full context. Ready for regulatory review.',
    details: ['Every action logged', 'Immutable audit logs', 'Export for compliance', 'Real-time monitoring'],
  },
  {
    icon: 'ns-shape-15',
    title: 'Role-Based Access Control',
    description: 'Fine-grained permissions for every user and AI agent. Control who can access what data, which workflows, and what actions.',
    details: ['Workspace isolation', 'Custom role definitions', 'AI agent permissions', 'SSO integration'],
  },
  {
    icon: 'ns-shape-21',
    title: 'Enterprise Encryption',
    description: 'AES-256 encryption at rest, TLS 1.3 in transit. Optional BYOK (Bring Your Own Keys) for complete key management control.',
    details: ['AES-256 at rest', 'TLS 1.3 in transit', 'BYOK support', 'HSM integration'],
  },
  {
    icon: 'ns-shape-34',
    title: 'Security Monitoring',
    description: 'Real-time monitoring, anomaly detection, and alerting. Integrate with your existing SIEM and security tools.',
    details: ['Real-time monitoring', 'Anomaly detection', 'SIEM integration', 'Security dashboards'],
  },
];

const SecurityFeatures = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              Security Features
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Security That Meets Financial Services Standards
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              Built from the ground up for regulated industries. Every feature designed with compliance in mind.
            </p>
          </RevealAnimation>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="group relative p-[2px] rounded-[20px] bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 hover:from-primary-500/20 hover:to-primary-500/20 transition-all duration-500 h-full">
                <div className="p-8 rounded-[18px] bg-background-2 dark:bg-background-5 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <span className={cn(
                      'text-secondary dark:text-accent inline-block text-[40px] group-hover:scale-110 transition-transform duration-300',
                      feature.icon
                    )} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-heading-6 text-secondary dark:text-accent">
                      {feature.title}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mt-6 pt-6 border-t border-stroke-1 dark:border-stroke-6">
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-sm text-secondary/70 dark:text-accent/70">
                          <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0">
                            <span className="ns-shape-1 text-[10px] text-primary-500" />
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityFeatures;
