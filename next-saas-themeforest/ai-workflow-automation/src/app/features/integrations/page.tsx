import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Integrations | Connect Your Financial Services Stack | Lunnoa',
  description:
    'Connect Lunnoa to your CRM, document management, portfolio systems, and more. Pre-built connectors and flexible APIs for any integration.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-36',
    title: 'Pre-Built Connectors',
    description: 'Ready-to-use integrations for popular financial services tools—Salesforce, DealCloud, Box, and more.',
  },
  {
    icon: 'ns-shape-34',
    title: 'REST API',
    description: 'Full API access for custom integrations. Trigger workflows, access data, and extend functionality.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Webhooks',
    description: 'Real-time event notifications to your systems. React to workflow completions, approvals, and alerts.',
  },
  {
    icon: 'ns-shape-15',
    title: 'SSO Integration',
    description: 'Connect to your identity provider—Okta, Azure AD, OneLogin, or any SAML/OIDC provider.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Data Sync',
    description: 'Bidirectional data synchronization with your systems of record. Always up to date.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Secure Connections',
    description: 'All integrations use encrypted connections. Credentials stored securely with your KMS.',
  },
];

const detailsFeatures = [
  'OAuth 2.0 and API key authentication',
  'Rate limiting and retry handling',
  'Connection health monitoring',
  'Detailed integration logs',
  'Sandbox environments for testing',
  'Custom connector development available',
];

const useCases = [
  {
    icon: 'ns-shape-34',
    title: 'CRM Integration',
    description: 'Sync client data with Salesforce, DealCloud, or your CRM. Trigger workflows from CRM events.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Document Management',
    description: 'Connect to Box, SharePoint, or Dropbox. Automatically process new documents as they arrive.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Portfolio Systems',
    description: 'Integrate with portfolio management and accounting systems for real-time data access.',
  },
];

const ctaFeatures = [
  'Most integrations configured in hours',
  'Dedicated integration support',
  'Custom connector development available',
  'Full documentation and SDKs',
];

const metrics = [
  { value: '50+', label: 'Pre-Built Connectors' },
  { value: 'REST API', label: 'Full Access' },
  { value: 'Hours', label: 'To Integrate' },
];

export default function IntegrationsFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-primary-light"
        title="Connect to"
        titleHighlight="Everything"
        description="Lunnoa integrates with your existing tools and systems. Pre-built connectors for popular platforms, plus APIs for custom integrations."
        primaryCta={{ text: 'Explore Integrations', href: '/contact-us' }}
        secondaryCta={{ text: 'API Documentation', href: '/contact-us' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="Capabilities"
        title="Seamless Integration, Zero Disruption"
        description="Connect to your existing infrastructure without replacing what works. Our integrations are designed for enterprise security and reliability."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="right"
      />
      <FeatureUseCases
        badge="Common Integrations"
        title="Built for Financial Services Stacks"
        description="We integrate with the tools PE, wealth management, and banking teams already use."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready to connect your systems?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}
