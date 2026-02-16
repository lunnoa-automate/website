import type { ICPType } from '@/context/ICPContext';

/* ─── ICP Labels ─── */
export const icpOptions: { key: ICPType; label: string }[] = [
  { key: 'pe', label: 'Private Equity' },
  { key: 'wealth', label: 'Wealth Management' },
  { key: 'banking', label: 'Banking' },
];

/* ─── Hero Section ─── */
export const heroContent: Record<
  ICPType,
  {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
    subDescription: string;
    metrics: { value: string; label: string }[];
  }
> = {
  pe: {
    badge: 'AI Workflow Automation for Private Equity',
    heading: 'Scale Deal Operations ',
    headingHighlight: '10x Without Adding Headcount',
    description:
      'Track Deals, Portfolio Companies, and Funds through complete AI-powered processes. MNPI screening, due diligence, capital calls\u2014orchestrated end-to-end with full control.',
    subDescription: 'Self-hosted. Full audit trails. Built for PE firms of every size.',
    metrics: [
      { value: '85%', label: 'MNPI Time Saved' },
      { value: '15 min', label: 'Deal Screening' },
      { value: '\u20AC150K', label: 'Annual Savings' },
    ],
  },
  wealth: {
    badge: 'AI Workflow Automation for Wealth Management',
    heading: 'Scale Client Operations ',
    headingHighlight: '10x Without Adding Headcount',
    description:
      'Track Clients, Portfolios, and Mandates through complete AI-powered processes. KYC reviews, client onboarding, regulatory reporting\u2014orchestrated end-to-end with full control.',
    subDescription:
      'Self-hosted. Full audit trails. Built for wealth managers and family offices.',
    metrics: [
      { value: 'Weeks\u2192Days', label: 'KYC Processing' },
      { value: '3x', label: 'Client Capacity' },
      { value: '100%', label: 'Compliance Coverage' },
    ],
  },
  banking: {
    badge: 'AI Workflow Automation for Banking',
    heading: 'Scale Compliance & Ops ',
    headingHighlight: '10x Without Adding Headcount',
    description:
      'Track Accounts, Loans, and Transactions through complete AI-powered processes. AML checks, loan processing, regulatory reporting\u2014orchestrated end-to-end with full control.',
    subDescription:
      'Self-hosted. Full audit trails. Built for banks and financial institutions.',
    metrics: [
      { value: '50-80%', label: 'Faster Processing' },
      { value: '100%', label: 'Audit Coverage' },
      { value: 'Zero', label: 'Data Leaks' },
    ],
  },
};

/* ─── LogoBar Section ─── */
export const logoBarContent: Record<ICPType, { tagline: string }> = {
  pe: {
    tagline:
      'The only platform that tracks Deals, Portfolio Companies & Funds through end-to-end AI processes',
  },
  wealth: {
    tagline:
      'The only platform that tracks Clients, Portfolios & Mandates through end-to-end AI processes',
  },
  banking: {
    tagline:
      'The only platform that tracks Accounts, Loans & Transactions through end-to-end AI processes',
  },
};

/* ─── Value Pillars Section ─── */
export const valuePillarsContent: Record<
  ICPType,
  {
    pillars: {
      title: string;
      description: string;
      metric: string;
      metricLabel: string;
    }[];
    bottomCta: string;
    bottomCtaHighlight: string;
  }
> = {
  pe: {
    pillars: [
      {
        title: 'Entity-Centric Automation',
        description:
          'Track every deal from sourcing to exit. Portfolio companies, co-investments, fund vehicles\u2014each as a fully managed object.',
        metric: 'End-to-End',
        metricLabel: 'Deal Lifecycle',
      },
      {
        title: 'Speed & Efficiency',
        description:
          'MNPI screening: 2-4 hours \u2192 15-30 minutes. Capital call processing: automated. Due diligence: weeks \u2192 days.',
        metric: '50-80%',
        metricLabel: 'Time Saved',
      },
      {
        title: 'Full Control Room',
        description:
          'Monitor every deal and portfolio company in real-time. Intervene when needed. One dashboard for complete fund oversight.',
        metric: '100%',
        metricLabel: 'Visibility',
      },
    ],
    bottomCta: 'PE firms using Lunnoa report ',
    bottomCtaHighlight: '\u20AC75k-150k annual savings per automated workflow',
  },
  wealth: {
    pillars: [
      {
        title: 'Entity-Centric Automation',
        description:
          'Track every client from onboarding to ongoing management. Portfolios, mandates, advisory relationships\u2014each as a fully managed object.',
        metric: 'End-to-End',
        metricLabel: 'Client Lifecycle',
      },
      {
        title: 'Speed & Efficiency',
        description:
          'KYC reassessments: weeks \u2192 days. Client onboarding: fully automated. Regulatory reporting: instant.',
        metric: 'Weeks\u2192Days',
        metricLabel: 'KYC Time',
      },
      {
        title: 'Full Control Room',
        description:
          'Monitor every client and portfolio in real-time. Flag compliance issues instantly. One dashboard for complete AUM oversight.',
        metric: '100%',
        metricLabel: 'Compliance',
      },
    ],
    bottomCta: 'Wealth managers using Lunnoa report ',
    bottomCtaHighlight: '3x more client capacity without additional headcount',
  },
  banking: {
    pillars: [
      {
        title: 'Entity-Centric Automation',
        description:
          'Track every account, loan, and transaction. Compliance cases, audit reviews, risk assessments\u2014each as a fully managed object.',
        metric: 'End-to-End',
        metricLabel: 'Process Control',
      },
      {
        title: 'Speed & Efficiency',
        description:
          'AML screening: hours \u2192 minutes. Loan processing: fully automated. Compliance checks: continuous.',
        metric: '50-80%',
        metricLabel: 'Faster Processing',
      },
      {
        title: 'Full Control Room',
        description:
          'Monitor every compliance case and transaction in real-time. Escalate issues instantly. One dashboard for complete operational oversight.',
        metric: '100%',
        metricLabel: 'Audit Coverage',
      },
    ],
    bottomCta: 'Banks using Lunnoa report ',
    bottomCtaHighlight: '50-80% reduction in compliance processing time',
  },
};

/* ─── CTA Section ─── */
export const ctaContent: Record<
  ICPType,
  {
    badge: string;
    heading: string;
    headingHighlight: string;
    description: string;
  }
> = {
  pe: {
    badge: 'Start in Days, Not Months',
    heading: 'Ready to Scale Your ',
    headingHighlight: 'Deal Operations?',
    description:
      'See how PE firms are automating MNPI screening, due diligence, and capital calls. Deploy in days with full compliance and audit trails.',
  },
  wealth: {
    badge: 'Start in Days, Not Months',
    heading: 'Ready to Scale Your ',
    headingHighlight: 'Client Operations?',
    description:
      'See how wealth managers are automating KYC, client onboarding, and regulatory reporting. Deploy in days with full compliance and audit trails.',
  },
  banking: {
    badge: 'Start in Days, Not Months',
    heading: 'Ready to Scale Your ',
    headingHighlight: 'Banking Operations?',
    description:
      'See how banks are automating AML checks, loan processing, and compliance monitoring. Deploy in days with full audit trails and data sovereignty.',
  },
};

/* ─── Testimonial Section ─── */
export const testimonialContent: Record<ICPType, { heading: string }> = {
  pe: { heading: 'Trusted by PE firms and investment managers' },
  wealth: { heading: 'Trusted by wealth managers and family offices' },
  banking: { heading: 'Trusted by banks and financial institutions' },
};
