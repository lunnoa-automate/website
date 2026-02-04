import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Agents | Intelligent Automation for Finance | Lunnoa',
  description:
    'Deploy specialized AI agents for MNPI screening, document analysis, KYC checks, and more. Full control over permissions, tools, and audit trails.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-41',
    title: 'Specialized Agents',
    description: 'Create purpose-built agents for specific tasks—MNPI screening, document analysis, data extraction, and more.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Knowledge-Grounded',
    description: 'Agents access your knowledge base for accurate, context-aware responses. No hallucinations.',
  },
  {
    icon: 'ns-shape-36',
    title: 'Tool Access',
    description: 'Give agents access to specific tools—search, calculations, API calls—with fine-grained permissions.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Role Definitions',
    description: 'Define agent roles, responsibilities, and boundaries. Control what each agent can and cannot do.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Decision Logging',
    description: 'Every agent decision is logged with full context—inputs, reasoning, outputs, and confidence scores.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Human Oversight',
    description: 'Configure when agents should escalate to humans. Set confidence thresholds and approval requirements.',
  },
];

const detailsFeatures = [
  'Choose your LLM provider (OpenAI, Anthropic, Azure, local)',
  'Fine-tune agent behavior with custom prompts',
  'Chain multiple agents for complex tasks',
  'Real-time agent monitoring and intervention',
  'A/B test different agent configurations',
  'Cost tracking per agent and task',
];

const useCases = [
  {
    icon: 'ns-shape-7',
    title: 'MNPI Screening Agent',
    description: 'Automatically screen communications and documents for material non-public information with compliance-grade accuracy.',
    href: '/use-cases/mnpi-screening',
  },
  {
    icon: 'ns-shape-8',
    title: 'Document Analysis Agent',
    description: 'Extract key terms, dates, and obligations from contracts, agreements, and regulatory filings.',
    href: '/use-cases/capital-calls',
  },
  {
    icon: 'ns-shape-15',
    title: 'KYC/AML Agent',
    description: 'Verify identities, screen against watchlists, and flag suspicious patterns for compliance review.',
    href: '/use-cases/kyc-aml',
  },
];

const ctaFeatures = [
  'Deploy your first agent in days, not months',
  'Full control over AI model selection and costs',
  'Enterprise-grade security and audit trails',
  'Dedicated support for agent configuration',
];

const metrics = [
  { value: '15 min', label: 'MNPI Screening' },
  { value: '99%+', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Always Available' },
];

export default function AIAgentsFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-green"
        title="AI Agents Built for"
        titleHighlight="Financial Services"
        description="Deploy intelligent agents that understand your domain. From document analysis to compliance screening, our agents work alongside your team with full transparency."
        primaryCta={{ text: 'See Agents in Action', href: '/contact-us' }}
        secondaryCta={{ text: 'MNPI Screening Demo', href: '/use-cases/mnpi-screening' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="Capabilities"
        title="Agents That Think, Not Just Respond"
        description="Our AI agents go beyond simple chat. They reason through complex tasks, access your data securely, and explain their decisions—all with complete audit trails."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="right"
      />
      <FeatureUseCases
        badge="Agent Types"
        title="Purpose-Built for Your Workflows"
        description="Pre-configured agents for common financial services tasks, customizable to your specific requirements."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready to put AI agents to work for your team?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}
