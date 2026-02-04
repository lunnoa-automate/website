import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import UseCaseHero from '@/components/use-cases/UseCaseHero';
import HowItWorks from '@/components/use-cases/HowItWorks';
import KeyBenefits from '@/components/use-cases/KeyBenefits';
import UseCaseCTA from '@/components/use-cases/UseCaseCTA';
import SolutionTestimonial from '@/components/solutions/SolutionTestimonial';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'MNPI Screening Automation | 85% Faster Compliance | Lunnoa Automate',
  description:
    'Automate Material Non-Public Information screening in 15-30 minutes instead of 2-4 hours. AI agents cross-reference restricted lists with full audit trails for PE compliance.',
};

// Icons
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

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

// How it works steps
const steps = [
  {
    number: 1,
    title: 'Deal Information Intake',
    description: 'Input target company name, deal details, or upload deal documents. The AI agent extracts relevant entities—company names, individuals, related parties.',
    icon: <DocumentIcon />,
  },
  {
    number: 2,
    title: 'Automated Cross-Reference',
    description: 'AI agents automatically check against your restricted lists, public announcements, SEC filings, and internal MNPI database. Multiple sources checked in parallel.',
    icon: <SearchIcon />,
  },
  {
    number: 3,
    title: 'Risk Assessment & Flagging',
    description: 'Any potential conflicts are flagged with context: why it was flagged, which source, confidence level. Clear/conditional/blocked recommendations generated.',
    icon: <ShieldIcon />,
  },
  {
    number: 4,
    title: 'Compliance Review & Approval',
    description: 'Compliance officer reviews flagged items in a queue. One-click approve or escalate. Every decision logged with timestamp and rationale.',
    icon: <CheckCircleIcon />,
  },
  {
    number: 5,
    title: 'Audit Trail Generation',
    description: 'Complete audit trail generated automatically: what was checked, when, by whom, what was found, decisions made. Ready for regulatory review.',
    icon: <DatabaseIcon />,
  },
];

// Key benefits
const benefits = [
  {
    icon: <ClockIcon />,
    title: '85% Faster Screening',
    description: 'What used to take 2-4 hours per deal now completes in 15-30 minutes. Process more deals without adding compliance headcount.',
    metric: '15-30 min vs 2-4 hours',
  },
  {
    icon: <ShieldIcon />,
    title: 'Reduced Compliance Risk',
    description: 'Consistent, thorough checks every time. No more human error or missed connections. AI catches relationships humans might miss.',
    metric: '100% Coverage',
  },
  {
    icon: <SearchIcon />,
    title: 'Deeper Analysis',
    description: 'Check more sources than manual processes allow: SEC filings, news, social media mentions, public records, internal databases—all in minutes.',
    metric: '10x More Sources',
  },
  {
    icon: <DocumentIcon />,
    title: 'Audit-Ready Documentation',
    description: 'Every screening automatically generates compliance-ready documentation. When regulators ask, you have complete records instantly.',
    metric: 'Instant Audit Trails',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Scalable Process',
    description: 'Handle 40% more deal flow without adding staff. Peak periods no longer create compliance bottlenecks.',
    metric: '+40% Deal Capacity',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Self-Hosted & Secure',
    description: 'MNPI data never leaves your infrastructure. Full data sovereignty with on-premise or private cloud deployment.',
    metric: 'Your Data, Your Control',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'MNPI screening was our biggest bottleneck. Junior analysts spent 3-4 hours per deal, and we still worried about missing something. Lunnoa cut that to 20 minutes with better coverage than we ever had manually.',
    author: 'James Patterson',
    title: 'Chief Compliance Officer',
    company: 'Mid-Market PE Fund',
    metric: '85%',
    metricLabel: 'Time Saved',
  },
  {
    quote: 'The audit trail alone is worth it. When our regulators came for the annual review, we pulled up complete documentation for every screen in seconds. They were genuinely impressed.',
    author: 'Maria Chen',
    title: 'General Counsel',
    company: 'Growth Equity Firm',
    metric: '100%',
    metricLabel: 'Audit Ready',
  },
];

// Related use cases
const relatedUseCases = [
  {
    title: 'Capital Calls',
    href: '/use-cases/capital-calls',
    description: 'Automate LP communications',
  },
  {
    title: 'Due Diligence',
    href: '/use-cases/due-diligence',
    description: 'Accelerate deal analysis',
  },
  {
    title: 'RFP Automation',
    href: '/use-cases/rfp-automation',
    description: 'Complete DDQs faster',
  },
];

export default function MNPIScreeningPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <UseCaseHero
        badge="MNPI Screening"
        headline="Screen Deals for MNPI"
        highlightedText="in Minutes, Not Hours"
        description="AI agents automatically cross-reference deal information against restricted lists, public filings, and your internal MNPI database. Complete screenings in 15-30 minutes with full audit trails—so your compliance team can focus on decisions, not document processing."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        beforeAfter={{
          before: '2-4 hrs',
          after: '15-30 min',
          improvement: '85%',
        }}
        industries={['Private Equity', 'Hedge Funds', 'Asset Management']}
      />

      <div id="how-it-works">
        <HowItWorks
          headline="From Deal Intake to Audit Trail"
          subheadline="A complete end-to-end process that runs automatically while keeping compliance in control"
          steps={steps}
        />
      </div>

      <KeyBenefits
        headline="Why Automate MNPI Screening"
        subheadline="The business case is clear: faster deals, lower risk, better compliance"
        benefits={benefits}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <UseCaseCTA
        headline="Ready to Automate Your MNPI Screening?"
        description="See how PE firms are screening deals 85% faster while improving compliance coverage. Self-hosted, audit-ready, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        relatedUseCases={relatedUseCases}
      />
    </main>
  );
}
