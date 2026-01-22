'use client';

import { useState } from 'react';
import { cn } from '@/utils/cn';
import realTimeChart from '@public/images/ns-img-200.png';
import gradient6 from '@public/images/ns-img-498.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

const data = [
  {
    id: 1,
    title: 'AI Agents',
    shortDescription: 'Create specialized AI agents in minutes',
    description: 'Create specialized AI agents in minutes. Define roles, goals, and tools individually. Connect them to internal systems with full audit trails.',
    icon: 'ns-shape-34',
    image: realTimeChart, // Replace with actual AI Agents screenshot
    analytics: {
      primaryMetric: {
        label: 'Documents Processed',
        value: '12,450',
        thisMonth: '1,240',
      },
      secondaryMetrics: [
        { label: 'Capital Calls Processed', value: '847' },
        { label: 'KYC Profiles Reviewed', value: '2,340' },
        { label: 'Meeting Dossiers Created', value: '1,890' },
      ],
    },
  },
  {
    id: 2,
    title: 'Automated Workflows',
    shortDescription: 'Automate repetitive tasks without programming',
    description: 'Automate repetitive tasks and free up your team. Create workflows without programming. Integrate your AI agents seamlessly.',
    icon: 'ns-shape-36',
    image: realTimeChart, // Replace with actual Workflows screenshot
    analytics: {
      primaryMetric: {
        label: 'Workflows Executed',
        value: '45,230',
        thisMonth: '4,890',
      },
      secondaryMetrics: [
        { label: 'Tasks Automated', value: '156,890' },
        { label: 'Manual Hours Saved', value: '3,240h' },
        { label: 'Error Rate Reduction', value: '92%' },
      ],
    },
  },
  {
    id: 3,
    title: 'Workspace Management',
    shortDescription: 'Maintain control over users and data',
    description: 'Maintain control over users, data, and processes. Assign AI agents and workflows to specific workspaces. Clear data access boundaries ensure compliance.',
    icon: 'ns-shape-8',
    image: realTimeChart, // Replace with actual Workspace screenshot
    analytics: {
      primaryMetric: {
        label: 'Active Workspaces',
        value: '24',
        thisMonth: '3',
      },
      secondaryMetrics: [
        { label: 'Users Managed', value: '156' },
        { label: 'Data Access Events', value: '89,450' },
        { label: 'Compliance Score', value: '98.5%' },
      ],
    },
  },
  {
    id: 4,
    title: 'Real-time Analytics',
    shortDescription: 'Track time saved, money saved, and cases processed',
    description: 'Track time saved, money saved, and cases processed in real-time. Monitor your automation impact with comprehensive analytics.',
    icon: 'ns-shape-8',
    image: realTimeChart,
    analytics: {
      primaryMetric: {
        label: 'Total Time Saved',
        value: '8,450h',
        thisMonth: '1,120h',
      },
      secondaryMetrics: [
        { label: 'Total Cost Savings', value: '$342,000' },
        { label: 'Documents Processed', value: '45,230' },
        { label: 'ROI Improvement', value: '+285%' },
      ],
    },
  },
  {
    id: 5,
    title: 'Central Knowledge Base',
    shortDescription: 'Supply AI agents with your validated data',
    description: 'Supply AI agents and workflows with your data. A vectorized knowledge base provides access to validated content without manual maintenance.',
    icon: 'ns-shape-41',
    image: realTimeChart, // Replace with actual Knowledge Base screenshot
    analytics: {
      primaryMetric: {
        label: 'Documents Indexed',
        value: '125,000',
        thisMonth: '8,450',
      },
      secondaryMetrics: [
        { label: 'Queries Processed', value: '89,450' },
        { label: 'Knowledge Updates', value: '2,340' },
        { label: 'Retrieval Accuracy', value: '96.8%' },
      ],
    },
  },
  {
    id: 6,
    title: 'Full Audit Trails',
    shortDescription: 'Every AI action logged and traceable',
    description: 'Every AI action is logged and traceable. Complete transparency for compliance and oversight.',
    icon: 'ns-shape-3',
    image: realTimeChart, // Replace with actual Audit Trails screenshot
    analytics: {
      primaryMetric: {
        label: 'Actions Logged',
        value: '1.24M',
        thisMonth: '145K',
      },
      secondaryMetrics: [
        { label: 'Compliance Checks', value: '45,230' },
        { label: 'Audit Reports Generated', value: '1,890' },
        { label: 'Traceability Rate', value: '100%' },
      ],
    },
  },
];

const FeatureV2 = () => {
  const [selectedFeature, setSelectedFeature] = useState(data[3]); // Default to Real-time Analytics

  const handleFeatureClick = (feature: typeof data[0]) => {
    setSelectedFeature(feature);
  };

  return (
    <section className="bg-background-3 dark:bg-background-7 relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="dark:bg-background-8 relative space-y-[70px] overflow-hidden rounded-4xl bg-white px-5 py-8 sm:px-8 sm:py-10 md:px-[42px] md:py-14">
          <RevealAnimation delay={0.3} direction="up" offset={100}>
            <figure className="pointer-events-none absolute -top-[15%] -right-[72%] max-h-[480px] max-w-[420px] rotate-[103deg] blur-[4px] select-none min-[470px]:-right-[60%] sm:-right-[40%] lg:-top-[30%] lg:-right-[24%] xl:-top-[27%] xl:-right-[21%]">
              <Image src={gradient6} className="h-full w-full object-cover" alt="NextSass" />
            </figure>
          </RevealAnimation>
          <div className="space-y-4 text-center sm:space-y-7 sm:text-left">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto w-full max-w-[350px] sm:mx-0 sm:max-w-[500px] lg:max-w-[731px]">
                Everything you need. In one platform.
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <div>
                <LinkButton
                  href="/integrations"
                  className="btn btn-secondary btn-md hover:btn-primary dark:btn-transparent mx-auto w-[90%] md:w-auto">
                  Explore Integrations
                </LinkButton>
              </div>
            </RevealAnimation>
          </div>
          <div>
            <div className="grid grid-cols-12 gap-y-8 min-[575px]:gap-8 md:gap-6 lg:gap-10 xl:gap-[60px]">
              <div className="order-1 col-span-12 min-[575px]:col-span-6 lg:order-1 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {data.slice(0, 3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="left" offset={100} key={item.id}>
                      <button
                        onClick={() => handleFeatureClick(item)}
                        className={cn(
                          'w-full text-left space-y-4 transition-all duration-300 rounded-lg p-4 hover:bg-background-2 dark:hover:bg-background-5',
                          selectedFeature.id === item.id && 'bg-background-2 dark:bg-background-5 ring-2 ring-primary/20'
                        )}>
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.shortDescription}</p>
                        </div>
                      </button>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
              <div className="order-3 col-span-12 lg:order-2 lg:col-span-6">
                <RevealAnimation delay={0.3} offset={100}>
                  <div className="bg-background-2 dark:bg-background-5 space-y-6 rounded-[20px] p-4 sm:p-6 xl:p-8">
                    <div className="space-y-2 text-center">
                      <h3 className="text-heading-5">{selectedFeature.title}</h3>
                      <p className="text-tagline-2">{selectedFeature.description}</p>
                    </div>
                    <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-4">
                      <div className="bg-background-3 dark:bg-background-8 h-full flex-1 overflow-hidden rounded-2xl">
                        <div className="bg-ns-green flex items-center justify-between px-[25px] py-2">
                          <p className="text-tagline-2 text-secondary">{selectedFeature.analytics.primaryMetric.label}</p>
                          <p className="text-tagline-2 font-semibold">{selectedFeature.analytics.primaryMetric.value}</p>
                        </div>
                        <div className="px-4 py-6">
                          <div className="space-y-3">
                            <div className="bg-background-2 dark:bg-background-5 rounded-lg p-3">
                              <p className="text-tagline-3 text-secondary dark:text-accent">This Month</p>
                              <p className="text-heading-6 mt-1">{selectedFeature.analytics.primaryMetric.thisMonth}</p>
                            </div>
                            <div className="dark:bg-background-7 rounded-lg p-3">
                              <p className="text-tagline-3 text-secondary dark:text-accent">All Time</p>
                              <p className="text-heading-6 mt-1">{selectedFeature.analytics.primaryMetric.value}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-background-3 dark:bg-background-8 h-full flex-1 overflow-hidden rounded-2xl">
                        <div className="p-4">
                          <p className="text-secondary dark:text-accent text-tagline-2 mb-4">Performance Metrics</p>
                          <figure className="mx-auto mt-2 mb-4 w-full max-w-[150px]">
                            <Image src={selectedFeature.image} alt={selectedFeature.title} className="w-full h-auto" />
                          </figure>
                          <div className="space-y-4">
                            {selectedFeature.analytics.secondaryMetrics.map((metric, index) => (
                              <div key={index} className="flex items-center justify-between">
                                <p className="text-tagline-3">{metric.label}</p>
                                <p className="text-tagline-3 text-secondary dark:text-accent font-semibold">
                                  {metric.value}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealAnimation>
              </div>
              <div className="order-2 col-span-12 min-[575px]:col-span-6 lg:order-3 lg:col-span-3">
                <div className="space-y-6 min-[575px]:space-y-8">
                  {data.slice(3).map((item, index) => (
                    <RevealAnimation delay={0.3 + index * 0.1} direction="right" offset={100} key={item.id}>
                      <button
                        onClick={() => handleFeatureClick(item)}
                        className={cn(
                          'w-full text-left space-y-4 transition-all duration-300 rounded-lg p-4 hover:bg-background-2 dark:hover:bg-background-5',
                          selectedFeature.id === item.id && 'bg-background-2 dark:bg-background-5 ring-2 ring-primary/20'
                        )}>
                        <div className="text-center min-[575px]:text-left">
                          <span className={cn('text-secondary dark:text-accent inline-block text-[36px]', item.icon)} />
                        </div>
                        <div className="text-center min-[575px]:text-left">
                          <p className="text-secondary dark:text-accent font-medium">{item.title}</p>
                          <p className="text-tagline-2">{item.shortDescription}</p>
                        </div>
                      </button>
                    </RevealAnimation>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureV2;
