'use client';

import { cn } from '@/utils/cn';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const pricingFactors = [
  {
    icon: 'ns-shape-36',
    title: 'Workflows',
    description: 'Number of automated workflows you need built and maintained.',
  },
  {
    icon: 'ns-shape-41',
    title: 'AI Agents',
    description: 'Custom AI agents for MNPI screening, KYC, document analysis, and more.',
  },
  {
    icon: 'ns-shape-24',
    title: 'Deployment',
    description: 'On-premise, private cloud (AWS/Azure/GCP), or hybrid setup.',
  },
  {
    icon: 'ns-shape-34',
    title: 'Integrations',
    description: 'Connections to your existing systems—CRM, DMS, portfolio tools.',
  },
  {
    icon: 'ns-shape-3',
    title: 'LLM Provider',
    description: 'Your choice of AI models—OpenAI, Anthropic, Azure OpenAI, or local models.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Support Level',
    description: 'Standard, priority, or dedicated support with SLAs.',
  },
];

const includedFeatures = [
  'Unlimited users within your organization',
  'Full source code access',
  'Custom entity types (Deals, Clients, Investments)',
  'Control Room dashboard',
  'Complete audit trails',
  'Role-based access control',
  'SSO integration (SAML, OIDC)',
  'API access for custom integrations',
  'Knowledge base with RAG',
  'Ongoing platform updates',
];

const Pricing = () => {
  return (
    <section className="relative pt-[100px] pb-16 md:pt-[160px] md:pb-24">
      <div className="main-container">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-5">Enterprise Pricing</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1 text-secondary dark:text-accent mb-6">
              Pricing Built Around
              <span className="text-primary-500"> Your Needs</span>
            </h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/70 dark:text-accent/70 mb-8 leading-relaxed">
              As a self-hosted solution, your investment depends on the complexity of your workflows, 
              the AI agents you need, and your infrastructure requirements. No hidden fees. 
              You control your LLM costs directly.
            </p>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <LinkButton
                href="/contact-us"
                className="btn btn-lg btn-primary hover:btn-secondary"
                aria-label="Talk to Sales">
                Talk to Sales
              </LinkButton>
              <LinkButton
                href="/resources/ai-handbook"
                className="btn btn-lg btn-outline-secondary dark:btn-outline-accent"
                aria-label="Download Pricing Guide">
                Download AI Handbook
              </LinkButton>
            </div>
          </RevealAnimation>
        </div>

        {/* Pricing Factors */}
        <div className="mb-20">
          <RevealAnimation delay={0.3}>
            <div className="text-center mb-12">
              <span className="badge badge-cyan mb-4">What Determines Your Price</span>
              <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent">
                Tailored to Your Requirements
              </h2>
            </div>
          </RevealAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingFactors.map((factor, index) => (
              <RevealAnimation key={index} delay={0.3 + index * 0.1}>
                <div className="group p-6 rounded-2xl bg-background-3 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 hover:border-primary-500/30 transition-all duration-300 h-full">
                  <div className="mb-4">
                    <span className={cn('text-secondary dark:text-accent inline-block text-[36px] group-hover:scale-110 transition-transform duration-300', factor.icon)} />
                  </div>
                  <h3 className="text-heading-6 text-secondary dark:text-accent mb-2">
                    {factor.title}
                  </h3>
                  <p className="text-secondary/60 dark:text-accent/60 text-sm">
                    {factor.description}
                  </p>
                </div>
              </RevealAnimation>
            ))}
          </div>
        </div>

        {/* What's Included + CTA Card */}
        <RevealAnimation delay={0.4}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-primary-500/5 to-primary-500/10 rounded-4xl blur-xl" />
            <div className="relative bg-white dark:bg-background-6 rounded-4xl p-8 md:p-12 lg:p-16 border border-stroke-1 dark:border-stroke-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - What's Included */}
                <div>
                  <span className="badge badge-green mb-4">What's Included</span>
                  <h3 className="text-heading-4 text-secondary dark:text-accent mb-6">
                    Every Implementation Includes
                  </h3>
                  <ul className="space-y-3">
                    {includedFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="ns-shape-1 text-[10px] text-primary-500" />
                        </span>
                        <span className="text-secondary/80 dark:text-accent/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right - CTA Card */}
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-10 text-white">
                  <h3 className="text-heading-4 mb-4">Let's Build Your Solution</h3>
                  <p className="text-white/80 mb-6 leading-relaxed">
                    Our team will work with you to understand your workflows, 
                    compliance requirements, and infrastructure—then provide 
                    a transparent quote with no surprises.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="ns-shape-8 text-[20px]" />
                      <span>Detailed scope assessment</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="ns-shape-34 text-[20px]" />
                      <span>Custom implementation plan</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="ns-shape-21 text-[20px]" />
                      <span>Transparent, fixed pricing</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <LinkButton
                      href="/contact-us"
                      className="btn btn-lg bg-white text-primary-500 hover:bg-white/90 w-full sm:w-auto"
                      aria-label="Schedule a Call">
                      Schedule a Call
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* Cost Breakdown Note */}
        <RevealAnimation delay={0.5}>
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="bg-background-3 dark:bg-background-5 rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="ns-shape-3 text-[24px] text-primary-500 flex-shrink-0" />
                <div>
                  <h4 className="text-heading-6 text-secondary dark:text-accent mb-2">
                    About LLM Costs
                  </h4>
                  <p className="text-secondary/70 dark:text-accent/70 text-sm leading-relaxed">
                    Since Lunnoa is self-hosted, you pay for LLM API usage directly to your provider 
                    (OpenAI, Anthropic, Azure, or your local deployment). This gives you full control 
                    over costs and ensures your data never passes through our systems. We provide 
                    guidance on optimizing token usage and model selection during implementation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default Pricing;
