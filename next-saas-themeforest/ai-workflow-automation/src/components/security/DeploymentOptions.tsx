'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

const deploymentOptions = [
  {
    title: 'On-Premise',
    description: 'Deploy within your own data center. Complete control, air-gapped option available.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    features: ['Your hardware', 'Air-gapped support', 'Full network control', 'Custom integrations'],
    recommended: false,
  },
  {
    title: 'Private Cloud',
    description: 'Deploy on your AWS, Azure, or GCP account. Your VPC, your security groups, our software.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    features: ['Your cloud account', 'Your VPC/VNet', 'Terraform provided', 'Managed updates'],
    recommended: true,
  },
  {
    title: 'Hybrid',
    description: 'Keep sensitive data on-premise while using cloud for compute. Best of both worlds.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    features: ['Data stays local', 'Cloud compute', 'Flexible architecture', 'Scalable processing'],
    recommended: false,
  },
];

const DeploymentOptions = () => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-green mb-4">
              Deployment Options
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Deploy Where You Need
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              Choose the deployment model that matches your security requirements and infrastructure.
            </p>
          </RevealAnimation>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {deploymentOptions.map((option, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className={cn(
                "relative p-[2px] rounded-[20px] h-full",
                option.recommended
                  ? "bg-gradient-to-br from-primary-500 to-primary-400"
                  : "bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 hover:from-primary-500/20 hover:to-primary-500/20 transition-all duration-500"
              )}>
                {option.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary-500 text-white text-xs font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="p-8 rounded-[18px] bg-white dark:bg-background-6 h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <span className={cn(
                      "inline-flex w-16 h-16 rounded-2xl items-center justify-center",
                      option.recommended
                        ? "bg-primary-500 text-white"
                        : "bg-primary-500/10 text-primary-500"
                    )}>
                      {option.icon}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 mb-6">
                    <h3 className="text-heading-5 text-secondary dark:text-accent">
                      {option.title}
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 leading-relaxed">
                      {option.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-secondary/70 dark:text-accent/70">
                        <svg className="w-4 h-4 text-primary-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentOptions;
