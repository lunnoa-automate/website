import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import UseCaseHero from '@/components/use-cases/UseCaseHero';
import HowItWorks from '@/components/use-cases/HowItWorks';
import KeyBenefits from '@/components/use-cases/KeyBenefits';
import UseCaseCTA from '@/components/use-cases/UseCaseCTA';
import SolutionTestimonial from '@/components/solutions/SolutionTestimonial';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'RFP & DDQ Automation | 85% Faster Responses | Lunnoa Automate',
  description:
    'Automate RFP and due diligence questionnaire responses. AI matches questions to your knowledge base and drafts answers in hours instead of days.',
};

// Icons
const DocumentSearchIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z" />
  </svg>
);

const DocumentIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const PencilIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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

const FlagIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
  </svg>
);

// How it works steps
const steps = [
  {
    number: 1,
    title: 'DDQ/RFP Upload',
    description: 'Upload the questionnaire in any format—Excel, Word, PDF, or portal export. AI parses questions, identifies categories, and structures the document.',
    icon: <DocumentIcon />,
  },
  {
    number: 2,
    title: 'Question Analysis',
    description: 'AI analyzes each question, matches it to your knowledge base, and identifies similar questions you\'ve answered before. Confidence scores assigned.',
    icon: <DocumentSearchIcon />,
  },
  {
    number: 3,
    title: 'Draft Generation',
    description: 'AI drafts responses using your approved language library, previous answers, and current firm data. Responses tailored to match the questionnaire\'s style.',
    icon: <PencilIcon />,
  },
  {
    number: 4,
    title: 'Review Flagging',
    description: 'Low-confidence answers and new questions flagged for human review. SME routing based on question category—legal, compliance, operations, investment.',
    icon: <FlagIcon />,
  },
  {
    number: 5,
    title: 'SME Review & Approval',
    description: 'Subject matter experts review their sections in a collaborative workspace. Edits tracked, approvals logged, version control maintained.',
    icon: <CheckCircleIcon />,
  },
  {
    number: 6,
    title: 'Final Assembly & Export',
    description: 'Approved responses assembled into final document. Export in original format or your branded template. Knowledge base updated with new approved answers.',
    icon: <DatabaseIcon />,
  },
];

// Key benefits
const benefits = [
  {
    icon: <ClockIcon />,
    title: '85% Faster Completion',
    description: 'Complete DDQs in 3-4 hours instead of 2-3 days. Win more mandates by responding faster than competitors.',
    metric: '3-4 hours vs 2-3 days',
  },
  {
    icon: <UsersIcon />,
    title: 'Free Senior Resources',
    description: 'Stop pulling partners and senior staff for questionnaire reviews. AI handles the heavy lifting; humans add judgment.',
    metric: '70% Less Senior Time',
  },
  {
    icon: <CheckCircleIcon />,
    title: 'Consistent Messaging',
    description: 'Every response uses approved language. No more inconsistent answers across different DDQs sent to the same prospect.',
    metric: '100% Consistent',
  },
  {
    icon: <DatabaseIcon />,
    title: 'Institutional Memory',
    description: 'Every approved answer feeds your knowledge base. Over time, AI gets smarter and drafts improve. Nothing lost when people leave.',
    metric: 'Knowledge Captured',
  },
  {
    icon: <PencilIcon />,
    title: 'Quality Improvement',
    description: 'AI uses your best previous answers. Response quality actually improves because you\'re always building on your best work.',
    metric: 'Better Over Time',
  },
  {
    icon: <FlagIcon />,
    title: 'Smart Routing',
    description: 'Questions automatically routed to the right SME. Legal questions go to legal, compliance to compliance. No manual sorting.',
    metric: 'Auto-Routing',
  },
];

// Testimonials
const testimonials = [
  {
    quote: 'DDQs used to take our team 2-3 days and pulled me away from clients every time. Now I review for an hour, the AI handles the rest. We\'ve responded to 40% more RFPs this quarter.',
    author: 'Robert Kim',
    title: 'Managing Director',
    company: 'Private Wealth Advisor',
    metric: '85%',
    metricLabel: 'Faster',
  },
  {
    quote: 'The consistency is huge. We used to give slightly different answers to the same questions. Now every response uses our approved language, and we track what we\'ve told each client.',
    author: 'Lisa Chen',
    title: 'Head of Client Relations',
    company: 'Asset Manager',
    metric: '40%',
    metricLabel: 'More RFPs',
  },
];

// Related use cases
const relatedUseCases = [
  {
    title: 'MNPI Screening',
    href: '/use-cases/mnpi-screening',
    description: 'Compliance automation',
  },
  {
    title: 'Due Diligence',
    href: '/use-cases/due-diligence',
    description: 'Deal analysis',
  },
  {
    title: 'KYC/AML',
    href: '/use-cases/kyc-aml',
    description: 'Client compliance',
  },
];

export default function RFPAutomationPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <UseCaseHero
        badge="RFP Automation"
        headline="Complete DDQs & RFPs"
        highlightedText="in Hours, Not Days"
        description="AI agents match questionnaire questions to your knowledge base, draft responses using approved language, and route complex items to the right SMEs. Respond faster, with consistent messaging and complete audit trails."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See How It Works', href: '#how-it-works' }}
        beforeAfter={{
          before: '2-3 days',
          after: '3-4 hrs',
          improvement: '85%',
        }}
        industries={['Private Equity', 'Wealth Management', 'Asset Management']}
      />

      <div id="how-it-works">
        <HowItWorks
          headline="From Questionnaire to Submission"
          subheadline="A complete RFP workflow with smart routing and knowledge capture"
          steps={steps}
        />
      </div>

      <KeyBenefits
        headline="Why Automate RFP Responses"
        subheadline="Respond faster, win more, and stop pulling senior people for paperwork"
        benefits={benefits}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <UseCaseCTA
        headline="Ready to Automate Your RFP Process?"
        description="See how firms are completing DDQs 85% faster while improving response quality. Self-hosted, compliant, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        relatedUseCases={relatedUseCases}
      />
    </main>
  );
}
