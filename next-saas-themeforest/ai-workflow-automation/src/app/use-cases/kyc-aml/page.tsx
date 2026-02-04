import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import UseCaseHero from '@/components/use-cases/UseCaseHero';
import HowItWorks from '@/components/use-cases/HowItWorks';
import KeyBenefits from '@/components/use-cases/KeyBenefits';
import UseCaseCTA from '@/components/use-cases/UseCaseCTA';
import SolutionTestimonial from '@/components/solutions/SolutionTestimonial';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'KYC/AML Automation | 88% Faster Compliance | Lunnoa Automate',
  description:
    'Automate Know Your Customer and Anti-Money Laundering checks. Clear KYC backlogs, process reassessments in minutes, and maintain continuous compliance.',
};

// Icons
const UserCheckIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 11l-2 2-2-2" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const SearchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const RefreshIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);

// How it works steps
const steps = [
  {
    number: 1,
    title: 'Client Data Collection',
    description: 'Client uploads documents through secure portal or you import existing records. AI extracts identity data, beneficial ownership, source of funds automatically.',
    icon: <DocumentIcon />,
  },
  {
    number: 2,
    title: 'Identity Verification',
    description: 'Automated verification against government databases, document authenticity checks, and biometric matching where required.',
    icon: <UserCheckIcon />,
  },
  {
    number: 3,
    title: 'Screening & Checks',
    description: 'AI runs PEP screening, sanctions list checks, adverse media scanning, and beneficial ownership verification—all in parallel.',
    icon: <SearchIcon />,
  },
  {
    number: 4,
    title: 'Risk Scoring',
    description: 'Automated risk score calculated based on your criteria: geography, industry, transaction patterns, source of wealth. Risk flags highlighted for review.',
    icon: <ChartIcon />,
  },
  {
    number: 5,
    title: 'Compliance Review',
    description: 'Compliance officer reviews flagged items and risk assessments. Approve, request more info, or escalate—all in a streamlined queue.',
    icon: <CheckCircleIcon />,
  },
  {
    number: 6,
    title: 'Ongoing Monitoring',
    description: 'Continuous monitoring for changes: sanctions updates, adverse media, transaction patterns. Automatic alerts when reassessment needed.',
    icon: <RefreshIcon />,
  },
];

// Key benefits
const benefits = [
  {
    icon: <ClockIcon />,
    title: '88% Faster Processing',
    description: 'Complete KYC checks in 30-45 minutes instead of 4-6 hours. Clear your reassessment backlog in weeks, not months.',
    metric: '30-45 min vs 4-6 hours',
  },
  {
    icon: <ShieldIcon />,
    title: 'Reduced Compliance Risk',
    description: 'Consistent, thorough checks every time. No more gaps from rushed manual reviews or inconsistent processes.',
    metric: '100% Coverage',
  },
  {
    icon: <RefreshIcon />,
    title: 'Clear Backlog Fast',
    description: 'Periodic review backlogs are common. Clear 6+ months of overdue reassessments in 6 weeks with automated processing.',
    metric: 'Backlog Cleared',
  },
  {
    icon: <SearchIcon />,
    title: 'Enhanced Due Diligence',
    description: 'For high-risk clients, AI gathers additional data: corporate structures, media coverage, related party analysis—automatically.',
    metric: 'Deeper Analysis',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Audit-Ready Records',
    description: 'Complete documentation for every check. When regulators ask, you have instant access to full KYC files.',
    metric: 'Instant Audit Trails',
  },
  {
    icon: <ChartIcon />,
    title: 'Continuous Monitoring',
    description: 'Don\'t wait for periodic reviews. Get alerts when client risk profiles change—sanctions, adverse media, transaction patterns.',
    metric: 'Real-time Alerts',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'We had a 6-month KYC reassessment backlog that kept growing. Lunnoa helped us clear it in 6 weeks while staying current on new clients. Our compliance team finally sleeps at night.',
    author: 'Jennifer Walsh',
    title: 'Chief Compliance Officer',
    company: 'Multi-Family Office',
    metric: '88%',
    metricLabel: 'Faster KYC',
  },
  {
    quote: 'The continuous monitoring is a game-changer. We caught a PEP flag on an existing client through the automated alerts—something we would have missed until the next periodic review.',
    author: 'Michael Torres',
    title: 'AML Officer',
    company: 'Private Wealth Manager',
    metric: 'Real-time',
    metricLabel: 'Monitoring',
  },
];

// Related use cases
const relatedUseCases = [
  {
    title: 'Client Onboarding',
    href: '/use-cases/client-onboarding',
    description: 'Full onboarding automation',
  },
  {
    title: 'RFP Automation',
    href: '/use-cases/rfp-automation',
    description: 'Complete DDQs faster',
  },
  {
    title: 'Portfolio Reporting',
    href: '/use-cases/portfolio-monitoring',
    description: 'Client reporting',
  },
];

export default function KYCAMLPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <UseCaseHero
        badge="KYC/AML Automation"
        headline="Complete KYC Checks"
        highlightedText="in Minutes, Not Hours"
        description="AI agents automate identity verification, PEP screening, sanctions checks, and risk scoring. Clear your reassessment backlog, stay compliant with continuous monitoring, and give your compliance team time back for judgment calls."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        beforeAfter={{
          before: '4-6 hrs',
          after: '30-45 min',
          improvement: '88%',
        }}
        industries={['Wealth Management', 'Private Banking', 'Asset Management']}
      />

      <div id="how-it-works">
        <HowItWorks
          headline="From Document to Decision"
          subheadline="A complete KYC workflow with risk scoring and ongoing monitoring"
          steps={steps}
        />
      </div>

      <KeyBenefits
        headline="Why Automate KYC/AML"
        subheadline="Clear backlogs, reduce risk, and let compliance focus on judgment calls"
        benefits={benefits}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <UseCaseCTA
        headline="Ready to Automate Your KYC/AML Process?"
        description="See how wealth managers are clearing backlogs and staying compliant with 88% faster KYC processing. Self-hosted, audit-ready, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        relatedUseCases={relatedUseCases}
      />
    </main>
  );
}
