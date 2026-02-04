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
  title: 'AI Automation for Private Equity | MNPI, Capital Calls, Due Diligence | Lunnoa',
  description:
    'Automate MNPI screening in 15 minutes, process capital calls automatically, and accelerate due diligence. Self-hosted AI agents built for PE firms with full audit trails.',
};

// Icons
const BriefcaseIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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

const UsersIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const ChartIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
  </svg>
);

const DealIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
  </svg>
);

const PortfolioIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
  </svg>
);

const LPIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
  </svg>
);

// Pain points data
const painPoints = [
  {
    icon: <ClockIcon />,
    title: 'MNPI Screening Takes Hours',
    description: 'Manual review of restricted lists against deal flow. Every analyst spends 2-4 hours per screen, risking compliance gaps.',
    stat: '2-4 hours per screening',
  },
  {
    icon: <DocumentIcon />,
    title: 'Capital Calls Pile Up',
    description: 'Processing notices, calculating amounts, updating investor records—repetitive work that delays distributions.',
    stat: '3-5 days processing time',
  },
  {
    icon: <UsersIcon />,
    title: 'LP Communications Scattered',
    description: 'Quarterly reports, K-1 preparation, ad-hoc requests—all requiring manual data pulls from multiple systems.',
    stat: '40+ hours per quarter',
  },
  {
    icon: <ChartIcon />,
    title: 'Due Diligence Bottlenecks',
    description: 'Investment teams wait on operations. Document review, data room analysis, and meeting prep slow down deal velocity.',
    stat: '2-3 weeks per deal',
  },
  {
    icon: <ShieldIcon />,
    title: 'Compliance Documentation Gaps',
    description: 'Audit trails scattered across emails, spreadsheets, and notes. Proving compliance takes days of reconstruction.',
    stat: 'Days for audit prep',
  },
  {
    icon: <UsersIcon />,
    title: 'Team Stretched Thin',
    description: 'Ops teams doing admin work instead of strategic support. Hiring is slow, but deal flow keeps increasing.',
    stat: '60% time on admin',
  },
];

// Use cases data
const useCases = [
  {
    id: 'mnpi',
    title: 'MNPI Screening',
    shortTitle: 'MNPI',
    icon: <ShieldIcon />,
    problem: 'Every potential deal requires checking against restricted lists, public filings, and internal records. Analysts spend 2-4 hours per screen, and mistakes mean regulatory risk.',
    solution: 'AI agents automatically cross-reference deal information against restricted lists, public announcements, and your internal MNPI database. Results in 15-30 minutes with full audit trail.',
    metrics: {
      before: '2-4 hours',
      after: '15-30 min',
      improvement: '85% faster',
    },
    href: '/use-cases/mnpi-screening',
  },
  {
    id: 'capital-calls',
    title: 'Capital Call Processing',
    shortTitle: 'Capital Calls',
    icon: <DocumentIcon />,
    problem: 'Processing capital call notices requires calculating each LP\'s commitment, generating notices, and updating investor records. Manual work leads to errors and delays.',
    solution: 'Automated workflows read capital call documents, calculate LP amounts based on commitment data, generate personalized notices, and update your systems—all with approval checkpoints.',
    metrics: {
      before: '3-5 days',
      after: '4-6 hours',
      improvement: '90% faster',
    },
    href: '/use-cases/capital-calls',
  },
  {
    id: 'due-diligence',
    title: 'Due Diligence Prep',
    shortTitle: 'Due Diligence',
    icon: <BriefcaseIcon />,
    problem: 'Investment teams need dossiers before meetings: company research, market analysis, comparable deals. Operations scrambles to pull data from multiple sources.',
    solution: 'AI agents compile meeting dossiers automatically: company data, recent news, comparable transactions, and key questions—ready before every meeting.',
    metrics: {
      before: '4-6 hours',
      after: '30 min',
      improvement: '92% faster',
    },
    href: '/use-cases/due-diligence',
  },
  {
    id: 'rfp',
    title: 'RFP Responses',
    shortTitle: 'RFPs',
    icon: <DocumentIcon />,
    problem: 'LP due diligence questionnaires require pulling data from across the firm. Each RFP takes days and pulls senior people from other work.',
    solution: 'AI agents match questions to your knowledge base, draft responses using approved language, and flag items needing review. Complete RFPs in hours, not days.',
    metrics: {
      before: '2-3 days',
      after: '3-4 hours',
      improvement: '85% faster',
    },
    href: '/use-cases/rfp-automation',
  },
];

// Entity feature data
const entities = [
  {
    name: 'Deals',
    description: 'Track every deal from sourcing to close with custom fields for your investment process.',
    icon: <DealIcon />,
    fields: ['Stage', 'Deal Team', 'Target Company', 'Sector', 'Entry Multiple', 'IC Status'],
  },
  {
    name: 'Portfolio Companies',
    description: 'Monitor your investments with financials, reporting schedules, and key contacts.',
    icon: <PortfolioIcon />,
    fields: ['Financials', 'Board Members', 'Reporting Dates', 'KPIs', 'Value Creation'],
  },
  {
    name: 'Limited Partners',
    description: 'Manage LP relationships, commitments, and communications in one place.',
    icon: <LPIcon />,
    fields: ['Commitment', 'Distributions', 'K-1 Status', 'Contact Preferences', 'Reporting'],
  },
];

const processSteps = [
  'Deal Sourcing',
  'Initial Screen',
  'MNPI Check',
  'Due Diligence',
  'IC Memo',
  'Closing',
  'Portfolio Ops',
];

// Testimonials
const testimonials = [
  {
    quote: 'MNPI screening used to take our analysts 3-4 hours per deal. Now it\'s done in 20 minutes with better coverage. We\'ve processed 40% more deals this quarter without adding headcount.',
    author: 'Sarah Chen',
    title: 'Chief Operating Officer',
    company: 'Mid-Market PE Fund ($2B AUM)',
    metric: '85%',
    metricLabel: 'Time Saved',
  },
  {
    quote: 'Capital call processing was our biggest operational bottleneck. Lunnoa automated 90% of it. Our IR team now focuses on LP relationships instead of spreadsheets.',
    author: 'Michael Torres',
    title: 'Head of Fund Operations',
    company: 'Growth Equity Fund',
    metric: '90%',
    metricLabel: 'Automated',
  },
];

export default function PrivateEquityPage() {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <SolutionHero
        badge="Private Equity"
        headline="Scale Your PE Operations"
        highlightedText="Without Adding Headcount"
        description="Automate MNPI screening, capital calls, and due diligence prep. Track every deal through your entire process—from sourcing to portfolio ops—with AI agents you control."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Use Cases', href: '#use-cases' }}
        metrics={[
          { value: '85%', label: 'Faster MNPI Screening' },
          { value: '90%', label: 'Capital Call Automation' },
          { value: '40%', label: 'More Deals Processed' },
        ]}
        icon={<BriefcaseIcon />}
      />

      <PainPoints
        headline="Sound familiar?"
        subheadline="PE operations teams are stretched thin. Deal flow keeps increasing, but hiring can't keep up."
        painPoints={painPoints}
      />

      <div id="use-cases">
        <UseCaseShowcase
          headline="Automate Your Highest-Volume Workflows"
          subheadline="Each workflow tracks your Deals, LPs, and Portfolio Companies through end-to-end processes."
          useCases={useCases}
        />
      </div>

      <EntityFeature
        headline="Your Deals, LPs, and Portfolio Companies as Objects"
        subheadline="Create custom entities that match your investment process. Track each through multiple workflows and AI agents—all monitored in one Control Room."
        entities={entities}
        processSteps={processSteps}
      />

      <SolutionTestimonial testimonials={testimonials} />

      <SolutionCTA
        headline="Ready to Scale Your PE Operations?"
        description="See how mid-market PE firms are processing 40% more deals without adding headcount. Self-hosted, compliant, deployed in days."
        primaryCTA={{ text: 'Get a Demo', href: '/contact-us' }}
        secondaryCTA={{ text: 'See Pricing', href: '/pricing' }}
        features={['Self-Hosted', 'Full Audit Trails', 'Deploy in Days']}
      />
    </main>
  );
}
