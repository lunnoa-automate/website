import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import FeatureHero from '@/components/features/FeatureHero';
import FeatureDetails from '@/components/features/FeatureDetails';
import FeatureUseCases from '@/components/features/FeatureUseCases';
import FeatureCTA from '@/components/features/FeatureCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Audit Trails | Complete Traceability for Compliance | Lunnoa',
  description:
    'Every AI decision, workflow step, and user action logged. Immutable audit trails for regulatory compliance and operational transparency.',
};

const heroFeatures = [
  {
    icon: 'ns-shape-8',
    title: 'Complete Logging',
    description: 'Every action logged—AI decisions, user interactions, workflow steps, data access, and system events.',
  },
  {
    icon: 'ns-shape-21',
    title: 'Immutable Records',
    description: 'Audit logs cannot be modified or deleted. Tamper-proof records for regulatory requirements.',
  },
  {
    icon: 'ns-shape-41',
    title: 'AI Decision Tracing',
    description: 'See exactly how AI agents reached their conclusions—inputs, reasoning, confidence scores, and outputs.',
  },
  {
    icon: 'ns-shape-15',
    title: 'User Attribution',
    description: 'Every action tied to a specific user with timestamp, IP address, and session context.',
  },
  {
    icon: 'ns-shape-34',
    title: 'Search & Filter',
    description: 'Powerful search across all audit data. Filter by user, date, entity, action type, and more.',
  },
  {
    icon: 'ns-shape-3',
    title: 'Export & Reporting',
    description: 'Generate compliance reports, export to your SIEM, or integrate with existing audit systems.',
  },
];

const detailsFeatures = [
  'Configurable retention policies',
  'Real-time audit event streaming',
  'Role-based audit access',
  'Pre-built compliance report templates',
  'Integration with SIEM tools',
  'Automated anomaly detection',
];

const useCases = [
  {
    icon: 'ns-shape-7',
    title: 'Regulatory Examinations',
    description: 'Provide examiners with complete records of AI-assisted decisions, including all supporting context.',
  },
  {
    icon: 'ns-shape-8',
    title: 'Internal Audits',
    description: 'Self-serve audit reports for internal compliance teams. No IT involvement required.',
  },
  {
    icon: 'ns-shape-15',
    title: 'Incident Investigation',
    description: 'Reconstruct exactly what happened, when, and why. Trace issues back to their root cause.',
  },
];

const ctaFeatures = [
  'Compliance-ready from day one',
  'No additional configuration required',
  'Meets SOC 2 and regulatory requirements',
  'Your data stays on your infrastructure',
];

const metrics = [
  { value: '100%', label: 'Actions Logged' },
  { value: 'Immutable', label: 'Tamper-Proof Records' },
  { value: '7+ Years', label: 'Retention Available' },
];

export default function AuditTrailsFeaturePage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <FeatureHero
        badge="Core Feature"
        badgeClass="badge-secondary"
        title="Every Action."
        titleHighlight="Every Decision. Logged."
        description="Complete, immutable audit trails for every AI decision, workflow execution, and user action. Built for regulated industries where traceability isn't optional."
        primaryCta={{ text: 'See Audit Trail Demo', href: '/contact-us' }}
        secondaryCta={{ text: 'Security Overview', href: '/security' }}
        features={heroFeatures}
        metrics={metrics}
        media={{ type: 'placeholder' }}
      />
      <FeatureDetails
        badge="Capabilities"
        title="Traceability That Regulators Trust"
        description="Our audit system captures every detail needed for compliance—from high-level summaries to granular decision traces. All searchable, all exportable, all secure."
        features={detailsFeatures}
        ctaText="Schedule a Demo"
        ctaHref="/contact-us"
        imagePosition="left"
      />
      <FeatureUseCases
        badge="Applications"
        title="Built for Compliance Requirements"
        description="Whether it's a regulatory exam, internal audit, or incident investigation—you'll have the records you need."
        useCases={useCases}
      />
      <FeatureCTA
        title="Ready for compliance-grade audit trails?"
        features={ctaFeatures}
        ctaText="Get Started"
        ctaHref="/contact-us"
      />
    </main>
  );
}
