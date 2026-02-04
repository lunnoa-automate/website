'use client';

import { cn } from '@/utils/cn';
import gradient6Img from '@public/images/ns-img-498.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const deploymentOptions = [
  {
    icon: 'ns-shape-24',
    title: 'On-Premise',
    description: 'Deploy on your own servers within your data center. Complete control, air-gapped option.',
    features: ['Full data sovereignty', 'Your security perimeter', 'Air-gapped support'],
  },
  {
    icon: 'ns-shape-36',
    title: 'Private Cloud',
    description: 'Deploy on your AWS, Azure, or GCP account. Terraform scripts provided.',
    features: ['Your cloud account', 'Managed updates', 'Scalable infrastructure'],
  },
  {
    icon: 'ns-shape-34',
    title: 'Hybrid',
    description: 'Keep sensitive data local while leveraging cloud compute power.',
    features: ['Flexible architecture', 'Best of both worlds', 'Custom configurations'],
  },
];

const llmOptions = [
  { name: 'OpenAI', description: 'GPT-4, GPT-4o, GPT-3.5' },
  { name: 'Anthropic', description: 'Claude 3.5, Claude 3' },
  { name: 'Azure OpenAI', description: 'Enterprise compliance' },
  { name: 'Local Models', description: 'Llama, Mistral, etc.' },
];

const Client = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="main-container">
        {/* Deployment Options */}
        <RevealAnimation delay={0.2}>
          <div className="bg-background-3 dark:bg-background-5 relative overflow-hidden rounded-4xl py-12 md:py-16 px-6 md:px-12">
            <div
              className="pointer-events-none absolute -top-[164%] -left-[35%] -z-10 h-full w-full rotate-[21deg] select-none"
              aria-hidden="true">
              <Image src={gradient6Img} alt="Decorative gradient background" className="scale-[60%]" />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <span className="badge badge-cyan mb-4">Deployment Options</span>
                <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent mb-3">
                  Deploy Where You Need
                </h2>
                <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto">
                  Choose the deployment model that matches your security and compliance requirements.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-16">
                {deploymentOptions.map((option, index) => (
                  <RevealAnimation key={index} delay={0.3 + index * 0.1}>
                    <div className="bg-white dark:bg-background-6 rounded-2xl p-6 h-full border border-stroke-1 dark:border-stroke-6">
                      <div className="mb-4">
                        <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', option.icon)} />
                      </div>
                      <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">
                        {option.title}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 text-sm mb-4">
                        {option.description}
                      </p>
                      <ul className="space-y-2">
                        {option.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-secondary/70 dark:text-accent/70">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </RevealAnimation>
                ))}
              </div>

              {/* LLM Options */}
              <div className="border-t border-stroke-1 dark:border-stroke-6 pt-12">
                <div className="text-center mb-8">
                  <h3 className="text-heading-5 text-secondary dark:text-accent mb-2">
                    Bring Your Own LLM
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 max-w-xl mx-auto text-sm">
                    Use your preferred AI provider. You control the API keys, you control the costs.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  {llmOptions.map((llm, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-background-6 rounded-xl px-5 py-3 border border-stroke-1 dark:border-stroke-6">
                      <p className="font-medium text-secondary dark:text-accent text-sm">{llm.name}</p>
                      <p className="text-xs text-secondary/50 dark:text-accent/50">{llm.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Client;
