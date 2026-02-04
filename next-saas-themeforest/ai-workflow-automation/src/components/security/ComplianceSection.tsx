'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const complianceItems = [
  {
    title: 'GDPR',
    description: 'Full compliance with EU data protection requirements. Data residency controls, right to erasure, data portability.',
    status: 'Ready',
    statusColor: 'bg-green-500/10 text-green-500',
  },
  {
    title: 'Data Residency',
    description: 'Choose where your data lives. EU, US, UK, Switzerland, or your own jurisdiction with on-premise deployment.',
    status: 'Supported',
    statusColor: 'bg-green-500/10 text-green-500',
  },
  {
    title: 'Audit Trails',
    description: 'Complete logging of all AI decisions, user actions, and system events. Exportable for regulatory review.',
    status: 'Built-in',
    statusColor: 'bg-green-500/10 text-green-500',
  },
  {
    title: 'SOC 2 Type II',
    description: 'SOC 2 Type II certification in progress. Contact us for current audit status and security questionnaire.',
    status: 'In Progress',
    statusColor: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    title: 'ISO 27001',
    description: 'ISO 27001 certification planned. Our security practices align with ISO 27001 requirements.',
    status: 'Planned',
    statusColor: 'bg-blue-500/10 text-blue-500',
  },
  {
    title: 'Penetration Testing',
    description: 'Regular third-party penetration testing. Summary reports available under NDA for enterprise customers.',
    status: 'Annual',
    statusColor: 'bg-green-500/10 text-green-500',
  },
];

const ComplianceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              Compliance
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              Compliance & Certifications
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              We're building for regulated industries. Here's where we stand on certifications and compliance.
            </p>
          </RevealAnimation>
        </div>

        {/* Compliance Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {complianceItems.map((item, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="p-6 rounded-2xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 h-full">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-heading-6 text-secondary dark:text-accent">
                    {item.title}
                  </h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Additional note */}
        <RevealAnimation delay={0.6}>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-secondary/60 dark:text-accent/60">
              Need a specific certification or compliance documentation? <a href="/contact-us" className="text-primary-500 hover:underline">Contact our security team</a> to discuss your requirements.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ComplianceSection;
