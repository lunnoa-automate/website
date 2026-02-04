import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import UseCaseHero from '@/components/use-cases/UseCaseHero';
import HowItWorks from '@/components/use-cases/HowItWorks';
import KeyBenefits from '@/components/use-cases/KeyBenefits';
import UseCaseCTA from '@/components/use-cases/UseCaseCTA';
import SolutionTestimonial from '@/components/solutions/SolutionTestimonial';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Capital Call Processing Automation | 90% Faster | Lunnoa Automate',
  description:
    'Automate capital call processing from notice to LP communication. Calculate commitments, generate notices, and update records in hours instead of days.',
};

// Icons
const CalculatorIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

const DatabaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

// How it works steps
const steps = [
  {
    number: 1,
    title: 'Capital Call Document Upload',
    description: 'Upload the capital call notice or input the call details. AI extracts the total amount, purpose, due date, and wire instructions automatically.',
    icon: <DocumentIcon />,
  },
  {
    number: 2,
    title: 'LP Commitment Calculation',
    description: 'System pulls each LP\'s commitment data and calculates their pro-rata share. Handles multiple funds, side letters, and special allocations automatically.',
    icon: <CalculatorIcon />,
  },
  {
    number: 3,
    title: 'Personalized Notice Generation',
    description: 'AI generates personalized capital call notices for each LP with their specific amounts, bank details, and any LP-specific language from their subscription docs.',
    icon: <DocumentIcon />,
  },
  {
    number: 4,
    title: 'Review & Approval Queue',
    description: 'IR team reviews generated notices in a queue. Bulk approve or edit individual notices. All changes tracked with audit trail.',
    icon: <CheckCircleIcon />,
  },
  {
    number: 5,
    title: 'Automated Distribution',
    description: 'Approved notices sent via LP\'s preferred channel—email, portal upload, or both. Delivery confirmation and read receipts tracked automatically.',
    icon: <MailIcon />,
  },
  {
    number: 6,
    title: 'Record Updates & Reconciliation',
    description: 'Investor records updated automatically. Track payments received, follow up on outstanding amounts, reconcile against bank statements.',
    icon: <DatabaseIcon />,
  },
];

// Key benefits
const benefits = [
  {
    icon: <ClockIcon />,
    title: '90% Faster Processing',
    description: 'What used to take 3-5 days now completes in 4-6 hours. Issue capital calls same-day when needed.',
    metric: '4-6 hours vs 3-5 days',
  },
  {
    icon: <CalculatorIcon />,
    title: 'Zero Calculation Errors',
    description: 'No more spreadsheet mistakes. System handles complex allocations, side letter terms, and multi-currency calculations perfectly.',
    metric: '100% Accuracy',
  },
  {
    icon: <UsersIcon />,
    title: 'IR Team Focus Shift',
    description: 'Free your IR team from administrative tasks. They can focus on LP relationships instead of spreadsheet processing.',
    metric: '60% Admin Reduction',
  },
  {
    icon: <MailIcon />,
    title: 'Professional LP Experience',
    description: 'Every LP gets consistent, professional communications. Personalized notices with their specific terms and preferences.',
    metric: 'Consistent Quality',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Complete Audit Trail',
    description: 'Every calculation, approval, and communication logged. Easy compliance reporting and audit support.',
    metric: 'Full Traceability',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Integrated Records',
    description: 'Automatically updates investor records, tracks payments, and reconciles with your accounting system.',
    metric: 'Real-time Updates',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'Capital call processing was eating 3-4 days every quarter. Now it\'s done in a morning. Our IR team is actually doing IR work—talking to LPs about the portfolio instead of processing spreadsheets.',
    author: 'Sarah Martinez',
    title: 'Head of Investor Relations',
    company: 'Growth Equity Fund',
    metric: '90%',
    metricLabel: 'Time Saved',
  },
  {
    quote: 'We had a calculation error once that cost us weeks of cleanup. Since Lunnoa, not a single mistake. The system handles our complex side letter terms perfectly.',
    author: 'David Kim',
    title: 'Fund Controller',
    company: 'Mid-Market PE Fund',
    metric: '0',
    metricLabel: 'Errors',
  },
];

// Related use cases
const relatedUseCases = [
  {
    title: 'MNPI Screening',
    href: '/use-cases/mnpi-screening',
    description: 'Automate compliance checks',
  },
  {
    title: 'RFP Automation',
    href: '/use-cases/rfp-automation',
    description: 'Complete DDQs faster',
  },
  {
    title: 'Portfolio Monitoring',
    href: '/use-cases/portfolio-monitoring',
    description: 'Track investments',
  },
];

export default function CapitalCallsPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <UseCaseHero
        badge="Capital Calls"
        headline="Process Capital Calls"
        highlightedText="in Hours, Not Days"
        description="AI workflows automatically calculate LP commitments, generate personalized notices, and handle distribution. From call document to LP communication in hours—with zero calculation errors and complete audit trails."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        beforeAfter={{
          before: '3-5 days',
          after: '4-6 hrs',
          improvement: '90%',
        }}
        industries={['Private Equity', 'Venture Capital', 'Real Estate PE']}
      />

      <div id="how-it-works">
        <HowItWorks
          headline="From Notice to Distribution"
          subheadline="A complete end-to-end process with approval checkpoints and full audit trail"
          steps={steps}
        />
      </div>

      <KeyBenefits
        headline="Why Automate Capital Calls"
        subheadline="Free your IR team to focus on relationships, not spreadsheets"
        benefits={benefits}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <UseCaseCTA
        headline="Ready to Automate Capital Call Processing?"
        description="See how PE firms are processing capital calls 90% faster with zero errors. Self-hosted, compliant, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        relatedUseCases={relatedUseCases}
      />
    </main>
  );
}
