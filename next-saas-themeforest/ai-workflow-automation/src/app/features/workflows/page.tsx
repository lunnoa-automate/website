import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Workflow Automation | Build End-to-End Processes | Lunnoa',
  description:
    'Create powerful automated workflows for financial services. Visual builder, conditional logic, human-in-the-loop approvals, and full audit trails.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-36',
    title: 'Visual Workflow Builder',
    description: 'Drag-and-drop interface to design complex workflows without code. Connect steps, add conditions, and test in real-time.',
  },
  {
    icon: 'ns-shape-34',
    title: 'Conditional Logic',
    description: 'Build smart workflows with if/then logic, loops, and parallel execution paths based on your business rules.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Human-in-the-Loop',
    description: 'Add approval gates and review steps where humans need to validate AI decisions before proceeding.',
  },
  {
    icon: 'ns-shape-41',
    title: 'AI Agent Integration',
    description: 'Embed AI agents into any workflow step for document analysis, data extraction, or intelligent decision-making.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Error Handling',
    description: 'Built-in retry logic, fallback paths, and error notifications to ensure workflows complete reliably.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Version Control',
    description: 'Track changes, roll back to previous versions, and maintain a complete history of workflow modifications.',
  },
];

const detailsFeatures = [
  'Multi-step workflows with unlimited complexity',
  'Real-time execution monitoring',
  'Scheduled and trigger-based execution',
  'Template library for common processes',
  'Team collaboration with role-based access',
  'API webhooks for external integrations',
];

const useCases = [
  {
    icon: 'ns-shape-8',
    title: 'Document Processing',
    description: 'Automatically extract data from invoices, contracts, and reports. Route to the right team for review.',
    href: '/use-cases/capital-calls',
  },
  {
    icon: 'ns-shape-7',
    title: 'Compliance Workflows',
    description: 'Build KYC/AML screening, MNPI checks, and regulatory reporting workflows with full audit trails.',
    href: '/use-cases/kyc-aml',
  },
  {
    icon: 'ns-shape-34',
    title: 'Client Onboarding',
    description: 'Streamline client intake with automated document collection, verification, and account setup.',
    href: '/solutions/wealth-management',
  },
];

const ctaFeatures = [
  'Start with pre-built templates or create from scratch',
  'Connect to your existing tools and data sources',
  'Scale from simple automations to enterprise processes',
  'Full support during implementation and beyond',
];

const metrics = [
  { value: '50-80%', label: 'Time Saved' },
  { value: '10x', label: 'Faster Processing' },
  { value: 'Days', label: 'Not Months to Deploy' },
];

export default function WorkflowsFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-cyan"
        title="Build Workflows That"
        titleHighlight="Actually Work"
        description="Design, deploy, and monitor automated workflows for any financial services process. From simple document routing to complex multi-step compliance reviews."
        primaryCta={{ text: 'See Workflows in Action', href: '/contact-us' }}
        secondaryCta={{ text: 'View Use Cases', href: '/solutions/private-equity' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="How It Works"
        title="From Idea to Automated Process in Hours"
        description="Our visual workflow builder makes it easy to automate complex processes. No coding required—just drag, drop, connect, and deploy."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="left"
      />
      <FeatureUseCases
        badge="Applications"
        title="What You Can Automate"
        description="Workflows power every aspect of financial services operations—from back-office processing to client-facing services."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready to automate your most time-consuming processes?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}
