'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';

const chapters = [
  {
    number: '01',
    title: 'Evaluating AI for Financial Services',
    description: 'How to assess AI solutions against your specific requirements: security, compliance, integration, and ROI.',
    topics: ['Vendor evaluation criteria', 'Security requirements checklist', 'Integration assessment', 'Build vs buy analysis'],
  },
  {
    number: '02',
    title: 'Building the Business Case',
    description: 'Quantify the opportunity and build a compelling case for AI investment that resonates with leadership.',
    topics: ['ROI calculation framework', 'Cost-benefit templates', 'Risk-adjusted projections', 'Executive presentation guide'],
  },
  {
    number: '03',
    title: 'Data Security for Regulated Industries',
    description: 'Navigate compliance requirements while implementing AI. Self-hosted vs cloud, data residency, and audit trails.',
    topics: ['Deployment models compared', 'Data residency requirements', 'Audit trail requirements', 'Vendor security assessment'],
  },
  {
    number: '04',
    title: 'Change Management for AI Adoption',
    description: 'Get your team on board. Strategies for training, communication, and managing resistance to change.',
    topics: ['Stakeholder mapping', 'Training program design', 'Communication templates', 'Measuring adoption'],
  },
  {
    number: '05',
    title: 'Implementation Playbook',
    description: 'A step-by-step guide from pilot to production. Avoid the common pitfalls that derail AI projects.',
    topics: ['Pilot selection criteria', 'Success metrics definition', 'Scaling strategy', 'Common pitfalls to avoid'],
  },
];

const AIHandbookContent = () => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              What's Inside
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              5 Chapters of Practical Guidance
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
              No fluff. Just actionable frameworks, checklists, and templates you can use immediately.
            </p>
          </RevealAnimation>
        </div>

        {/* Chapters */}
        <div className="max-w-4xl mx-auto space-y-6">
          {chapters.map((chapter, index) => (
            <RevealAnimation key={index} delay={0.2 + index * 0.1}>
              <div className="group relative p-[2px] rounded-[20px] bg-gradient-to-br from-primary-500/0 via-transparent to-primary-500/0 hover:from-primary-500/20 hover:to-primary-500/20 transition-all duration-500">
                <div className="p-6 md:p-8 rounded-[18px] bg-background-2 dark:bg-background-5">
                  <div className="flex gap-6">
                    {/* Chapter number */}
                    <div className="flex-shrink-0">
                      <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-primary-400 bg-clip-text text-transparent">
                        {chapter.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-heading-6 md:text-heading-5 text-secondary dark:text-accent mb-2">
                        {chapter.title}
                      </h3>
                      <p className="text-secondary/60 dark:text-accent/60 mb-4">
                        {chapter.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {chapter.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1.5 rounded-full bg-background-1 dark:bg-background-6 text-xs font-medium text-secondary/70 dark:text-accent/70 border border-stroke-1 dark:border-stroke-6">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Who it's for */}
        <RevealAnimation delay={0.7}>
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-r from-primary-500/5 to-primary-500/10 border border-primary-500/20">
              <h3 className="text-heading-6 text-secondary dark:text-accent text-center mb-6">
                Written for Financial Services Leaders
              </h3>
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="p-4">
                  <p className="text-2xl mb-1">🏦</p>
                  <p className="text-sm font-medium text-secondary dark:text-accent">COOs & Operations</p>
                </div>
                <div className="p-4">
                  <p className="text-2xl mb-1">⚖️</p>
                  <p className="text-sm font-medium text-secondary dark:text-accent">Compliance Officers</p>
                </div>
                <div className="p-4">
                  <p className="text-2xl mb-1">💼</p>
                  <p className="text-sm font-medium text-secondary dark:text-accent">Managing Partners</p>
                </div>
                <div className="p-4">
                  <p className="text-2xl mb-1">🔧</p>
                  <p className="text-sm font-medium text-secondary dark:text-accent">Technology Leaders</p>
                </div>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default AIHandbookContent;
