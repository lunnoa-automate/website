import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Control Room | Monitor AI Operations in Real-Time | Lunnoa',
  description:
    'Full visibility into your AI workflows. Track deals, clients, and investments through automated processes. Intervene when needed.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-34',
    title: 'Real-Time Dashboard',
    description: 'See every active workflow, AI agent task, and entity moving through your processes at a glance.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Entity Tracking',
    description: 'Track Deals, Clients, and Investments through their entire lifecycle. Know where everything stands.',
  },
  {
    icon: 'ns-shape-36',
    title: 'Process Visualization',
    description: 'Visual flow diagrams show exactly where each entity is in your multi-step processes.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Exception Handling',
    description: 'Instant alerts when something needs attention. One-click intervention to resolve issues.',
  },
  {
    icon: 'ns-shape-41',
    title: 'Agent Monitoring',
    description: 'Watch AI agents work in real-time. Review decisions, override when necessary, provide feedback.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Performance Metrics',
    description: 'Track throughput, processing times, error rates, and team productivity across all processes.',
  },
];

const detailsFeatures = [
  'Customizable dashboards for different roles',
  'Drill-down from summary to detail',
  'Historical trend analysis',
  'Export reports for compliance',
  'Mobile-friendly interface',
  'Team activity feeds',
];

const useCases = [
  {
    icon: 'ns-shape-8',
    title: 'Deal Pipeline Management',
    description: "Track every deal from sourcing through closing. See which step each deal is on, who's responsible, and what's pending.",
    href: '/solutions/private-equity',
  },
  {
    icon: 'ns-shape-7',
    title: 'Compliance Monitoring',
    description: 'Monitor KYC reviews, MNPI screenings, and approval workflows. Ensure nothing falls through the cracks.',
    href: '/use-cases/kyc-aml',
  },
  {
    icon: 'ns-shape-15',
    title: 'Client Onboarding Status',
    description: 'Track client onboarding from initial contact to fully onboarded. Identify bottlenecks and delays.',
    href: '/solutions/wealth-management',
  },
];

const ctaFeatures = [
  'Complete visibility from day one',
  'Customizable to your specific processes',
  'Role-based access and views',
  'Integration with your existing dashboards',
];

const metrics = [
  { value: 'Real-Time', label: 'Process Monitoring' },
  { value: '360°', label: 'Entity Visibility' },
  { value: '< 5 sec', label: 'Alert Response' },
];

export default function ControlRoomFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-yellow"
        title="Complete Visibility."
        titleHighlight="Total Control."
        description="Monitor every deal, client, and investment moving through your automated processes. See what's happening, intervene when needed, and never lose track of critical work."
        primaryCta={{ text: 'See Control Room Demo', href: '/contact-us' }}
        secondaryCta={{ text: 'View Entity Features', href: '/features/workflows' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="Capabilities"
        title="Your Command Center for AI Operations"
        description="The Control Room brings together everything happening across your automated processes. From high-level overviews to granular detail—all in one place."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="right"
      />
      <FeatureUseCases
        badge="Applications"
        title="Manage Every Process Type"
        description="Whether it's deals, compliance reviews, or client onboarding—the Control Room keeps you in command."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready to take control of your automated processes?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}
