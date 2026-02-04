'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const documents = [
  {
    category: 'Security',
    items: [
      {
        title: 'Security Overview',
        description: 'High-level overview of our security architecture and practices.',
        type: 'PDF',
        available: true,
        href: '/security',
      },
      {
        title: 'Infrastructure Security',
        description: 'Details on our deployment architecture and security controls.',
        type: 'PDF',
        available: true,
        href: '#',
      },
      {
        title: 'Penetration Test Summary',
        description: 'Summary of our latest third-party penetration test results.',
        type: 'PDF',
        available: true,
        requiresNDA: true,
        href: '#',
      },
    ],
  },
  {
    category: 'Compliance',
    items: [
      {
        title: 'GDPR Compliance Statement',
        description: 'How we comply with GDPR requirements.',
        type: 'PDF',
        available: true,
        href: '/gdpr',
      },
      {
        title: 'Data Processing Agreement',
        description: 'Standard DPA for customers processing personal data.',
        type: 'PDF',
        available: true,
        href: '#',
      },
      {
        title: 'Sub-processor List',
        description: 'List of sub-processors used in our service delivery.',
        type: 'PDF',
        available: true,
        href: '#',
      },
    ],
  },
  {
    category: 'Policies',
    items: [
      {
        title: 'Privacy Policy',
        description: 'How we collect, use, and protect personal information.',
        type: 'Web',
        available: true,
        href: '/privacy-policy',
      },
      {
        title: 'Terms of Service',
        description: 'Terms governing use of our platform.',
        type: 'Web',
        available: true,
        href: '/terms-conditions',
      },
      {
        title: 'Acceptable Use Policy',
        description: 'Guidelines for appropriate use of our services.',
        type: 'PDF',
        available: true,
        href: '#',
      },
    ],
  },
];

const SecurityDocuments = () => {
  return (
    <section className="py-16 md:py-24 bg-background-2 dark:bg-background-7">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              Documentation
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Security & Compliance Documents
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              Access our documentation to understand how we protect your data and meet compliance requirements.
            </p>
          </RevealAnimation>
        </div>

        {/* Document Categories */}
        <div className="space-y-12 max-w-4xl mx-auto">
          {documents.map((category, categoryIndex) => (
            <RevealAnimation key={categoryIndex} delay={0.2 + categoryIndex * 0.1}>
              <div>
                <h3 className="text-heading-6 text-secondary dark:text-accent mb-6 pb-2 border-b border-stroke-1 dark:border-stroke-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((doc, docIndex) => (
                    <Link
                      key={docIndex}
                      href={doc.href}
                      className="group flex items-center justify-between p-4 rounded-xl bg-white dark:bg-background-6 border border-stroke-1 dark:border-stroke-6 hover:border-primary-500/30 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium text-secondary dark:text-accent group-hover:text-primary-500 transition-colors">
                            {doc.title}
                          </h4>
                          {doc.requiresNDA && (
                            <span className="px-2 py-0.5 rounded-full bg-yellow-500/10 text-yellow-600 text-xs font-medium">
                              Requires NDA
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-secondary/60 dark:text-accent/60">
                          {doc.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 ml-4">
                        <span className="px-2 py-1 rounded-md bg-background-2 dark:bg-background-5 text-xs font-medium text-secondary/70 dark:text-accent/70">
                          {doc.type}
                        </span>
                        <svg className="w-5 h-5 text-secondary/40 dark:text-accent/40 group-hover:text-primary-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Request more */}
        <RevealAnimation delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-secondary/60 dark:text-accent/60 mb-4">
              Need additional documentation or have security questions?
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 text-primary-500 font-medium hover:underline">
              Contact our security team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default SecurityDocuments;
