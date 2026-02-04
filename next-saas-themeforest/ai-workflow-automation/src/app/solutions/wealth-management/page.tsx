import { Metadata } from 'next';
import { defaultMetadata } from '@/utils/generateMetaData';
import SolutionHero from '@/components/solutions/SolutionHero';
import PainPoints from '@/components/solutions/PainPoints';
import UseCaseShowcase from '@/components/solutions/UseCaseShowcase';
import EntityFeature from '@/components/solutions/EntityFeature';
import SolutionTestimonial from '@/components/solutions/SolutionTestimonial';
import SolutionCTA from '@/components/solutions/SolutionCTA';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI Automation for Wealth Management | KYC, Client Onboarding | Lunnoa',
  description:
    'Automate KYC/AML checks, client onboarding, and portfolio reporting. Self-hosted AI agents built for wealth managers and private banks with full compliance.',
};

// Icons
const WalletIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
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

const ShieldIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const UserIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const ClientIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
  </svg>
);

const HouseholdIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

// Pain points data
const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'Client Onboarding Takes Weeks',
    description: 'Document collection, KYC verification, risk profiling—each new client requires hours of manual work across multiple systems.',
    stat: '2-3 weeks per client',
  },
  {
    icon: <ShieldIcon />,
    title: 'KYC/AML Reassessments Backlog',
    description: 'Periodic reviews pile up. Risk scoring changes, but updating client profiles across systems takes forever.',
    stat: '6+ month backlog common',
  },
  {
    icon: <DocumentIcon />,
    title: 'RFP Responses Drain Resources',
    description: 'Institutional clients and family offices send due diligence questionnaires. Each one pulls senior staff for days.',
    stat: '2-3 days per RFP',
  },
  {
    icon: <ChartIcon />,
    title: 'Reporting Season Chaos',
    description: 'Quarterly and annual client reports require data from multiple sources. Manual compilation leads to errors and delays.',
    stat: '40+ hours per quarter',
  },
  {
    icon: <UserIcon />,
    title: 'Advisors Doing Admin Work',
    description: 'Your highest-paid talent spends 40% of time on paperwork instead of client relationships and advice.',
    stat: '40% time on admin',
  },
  {
    icon: <ShieldIcon />,
    title: 'Audit Trail Gaps',
    description: 'Regulators want to see every decision. Proving compliance means digging through emails and spreadsheets.',
    stat: 'Days for audit prep',
  },
];

// Use cases data
const useCases = [
  {
    id: 'kyc',
    title: 'KYC/AML Automation',
    shortTitle: 'KYC/AML',
    icon: <ShieldIcon />,
    problem: 'Manual KYC checks require pulling data from multiple sources, verifying documents, and updating risk scores. Each reassessment takes hours, and the backlog keeps growing.',
    solution: 'AI agents automatically gather required documents, verify against databases, calculate risk scores, and flag exceptions for human review. Full audit trail for every check.',
    metrics: {
      before: '4-6 hours',
      after: '30-45 min',
      improvement: '88% faster',
    },
    href: '/use-cases/kyc-aml',
  },
  {
    id: 'onboarding',
    title: 'Client Onboarding',
    shortTitle: 'Onboarding',
    icon: <UserIcon />,
    problem: 'New client onboarding requires document collection, identity verification, risk profiling, and account setup across multiple systems. Weeks of back-and-forth.',
    solution: 'Automated workflows guide clients through document submission, run KYC checks in parallel, calculate risk profiles, and provision accounts—reducing weeks to days.',
    metrics: {
      before: '2-3 weeks',
      after: '2-3 days',
      improvement: '85% faster',
    },
    href: '/use-cases/client-onboarding',
  },
  {
    id: 'rfp',
    title: 'RFP Responses',
    shortTitle: 'RFPs',
    icon: <DocumentIcon />,
    problem: 'Due diligence questionnaires from institutions and family offices require pulling data from everywhere. Each RFP takes days and pulls senior people away from clients.',
    solution: 'AI agents match questions to your knowledge base, draft responses using approved language, and flag items needing review. Complete RFPs in hours.',
    metrics: {
      before: '2-3 days',
      after: '3-4 hours',
      improvement: '85% faster',
    },
    href: '/use-cases/rfp-automation',
  },
  {
    id: 'reporting',
    title: 'Portfolio Reporting',
    shortTitle: 'Reporting',
    icon: <ChartIcon />,
    problem: 'Quarterly client reports require pulling performance data, market commentary, and allocation summaries from multiple systems. Manual compilation is error-prone.',
    solution: 'Automated workflows pull data from custodians and portfolio systems, generate personalized commentary, and produce client-ready reports with your branding.',
    metrics: {
      before: '8-10 hours',
      after: '1-2 hours',
      improvement: '80% faster',
    },
    href: '/use-cases/portfolio-monitoring',
  },
];

// Entity feature data
const entities = [
  {
    name: 'Clients',
    description: 'Track every client relationship with risk profiles, preferences, and compliance status.',
    icon: <ClientIcon />,
    fields: ['Risk Profile', 'KYC Status', 'Investment Policy', 'Preferences', 'Review Dates'],
  },
  {
    name: 'Portfolios',
    description: 'Monitor portfolios with real-time holdings, performance, and rebalancing triggers.',
    icon: <PortfolioIcon />,
    fields: ['Holdings', 'Performance', 'Benchmark', 'Allocations', 'Rebalance Triggers'],
  },
  {
    name: 'Households',
    description: 'Manage family relationships, estate planning, and multi-generational wealth.',
    icon: <HouseholdIcon />,
    fields: ['Family Members', 'Shared Accounts', 'Estate Plans', 'Succession', 'Total AUM'],
  },
];

const processSteps = [
  'Lead Capture',
  'Document Collection',
  'KYC/AML Check',
  'Risk Profiling',
  'Account Setup',
  'Ongoing Monitoring',
  'Periodic Review',
];

// Testimonials
const testimonials = [
  {
    quote: 'KYC reassessments were our biggest operational headache—a 6-month backlog. Lunnoa cleared it in 6 weeks and now we stay current. Compliance team finally sleeps at night.',
    author: 'Jennifer Walsh',
    title: 'Chief Compliance Officer',
    company: 'Multi-Family Office ($5B AUM)',
    metric: '88%',
    metricLabel: 'Faster KYC',
  },
  {
    quote: 'Our advisors were spending 40% of their time on paperwork. Now they\'re with clients. AUM per advisor is up 25% since we deployed Lunnoa for onboarding and reporting.',
    author: 'Robert Kim',
    title: 'Managing Director',
    company: 'Private Wealth Advisor',
    metric: '25%',
    metricLabel: 'AUM/Advisor Up',
  },
];

export default function WealthManagementPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <SolutionHero
        badge="Wealth Management"
        headline="Let Your Advisors Focus on"
        highlightedText="Clients, Not Paperwork"
        description="Automate KYC/AML checks, client onboarding, and portfolio reporting. Track every client through their entire journey—from prospect to multi-generational wealth."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Use Cases', href: '#use-cases' }}
        metrics={[
          { value: '88%', label: 'Faster KYC' },
          { value: '85%', label: 'Faster Onboarding' },
          { value: '25%', label: 'More Client Time' },
        ]}
        icon={<WalletIcon />}
      />

      <PainPoints
        headline="Sound familiar?"
        subheadline="Wealth management operations are drowning in compliance and admin work. Your best people are stuck doing paperwork."
        painPoints={painPoints}
      />

      <div id="use-cases">
        <UseCaseShowcase
          headline="Automate Your Client Operations"
          subheadline="Each workflow tracks your Clients, Portfolios, and Households through compliant, auditable processes."
          useCases={useCases}
        />
      </div>

      <EntityFeature
        headline="Your Clients, Portfolios, and Households as Objects"
        subheadline="Create custom entities that match your wealth management processes. Track each client through their entire journey—onboarding to succession planning."
        entities={entities}
        processSteps={processSteps}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <SolutionCTA
        headline="Ready to Free Your Advisors?"
        description="See how wealth managers are reducing compliance work by 80% and getting advisors back with clients. Self-hosted, compliant, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        features={['Self-Hosted', 'Full Audit Trails', 'Deploy in Days']}
      />
    </main>
  );
}
