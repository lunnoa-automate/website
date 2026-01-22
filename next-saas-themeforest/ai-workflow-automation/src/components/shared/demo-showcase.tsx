'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface UseCase {
  id: number;
  title: string;
  description: string;
  category: string;
  iconUrl: string;
}

const BASE_ICON_URL = 'https://lunnoa-assets-global.s3.eu-central-1.amazonaws.com/assets/apps';

const useCasesData: UseCase[] = [
  // Private Equity
  { id: 1, title: 'Capital Call Processing', description: 'Automate capital call notices, collection, and investor communication workflows', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/dealcloud.png` },
  { id: 2, title: 'Fund Reporting Automation', description: 'Generate and distribute periodic fund reports to LPs with regulatory compliance', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 3, title: 'Due Diligence Automation', description: 'Extract and analyze deal documents, financial statements, and legal contracts', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 4, title: 'Portfolio Company Monitoring', description: 'Track portfolio company KPIs and generate automated alerts for deviations', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/dealcloud.png` },
  { id: 5, title: 'Investor Onboarding', description: 'Automate KYC/AML checks and subscription document processing for new LPs', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 6, title: 'Distribution Processing', description: 'Calculate and process distributions to investors with audit trail compliance', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 7, title: 'Deal Pipeline Management', description: 'Track deal flow, automate document collection, and generate deal memos', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/dealcloud.png` },
  { id: 8, title: 'Valuation Workflows', description: 'Automate portfolio company valuations and reporting to investors', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 9, title: 'LP Communication', description: 'Automate investor updates, meeting scheduling, and document distribution', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/gmail.svg` },
  { id: 10, title: 'Compliance Reporting', description: 'Generate regulatory reports and maintain audit trails for FINMA compliance', category: 'Private Equity', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  
  // Real Estate
  { id: 11, title: 'Lease Abstraction', description: 'Extract key terms from lease documents and populate property management systems', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 12, title: 'Property Document Processing', description: 'Process property acquisition documents, titles, and due diligence materials', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 13, title: 'Asset Valuation', description: 'Automate property valuations using market data and financial models', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 14, title: 'Rent Roll Analysis', description: 'Extract and analyze rent roll data from property management systems', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 15, title: 'Tenant Onboarding', description: 'Automate tenant screening, lease execution, and move-in workflows', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 16, title: 'Property Financial Reporting', description: 'Generate property-level financial reports and NOI calculations', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 17, title: 'Maintenance Request Routing', description: 'Route maintenance requests to appropriate vendors and track completion', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/slack.svg` },
  { id: 18, title: 'Lease Renewal Management', description: 'Track lease expirations and automate renewal offer generation', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/google-calendar.svg` },
  { id: 19, title: 'Property Tax Management', description: 'Track property tax assessments and automate payment workflows', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 20, title: 'Investment Committee Prep', description: 'Compile property investment packages and financial analysis for review', category: 'Real Estate', iconUrl: `${BASE_ICON_URL}/dealcloud.png` },
  
  // Wealth Management
  { id: 21, title: 'KYC Reassessment', description: 'Automate periodic KYC reviews and risk assessment updates for clients', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 22, title: 'Client Meeting Preparation', description: 'Generate client meeting briefs with portfolio performance and recommendations', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/google-calendar.svg` },
  { id: 23, title: 'Regulatory Reporting', description: 'Generate FINMA-compliant reports for client portfolios and transactions', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 24, title: 'Portfolio Rebalancing', description: 'Monitor portfolios and trigger rebalancing workflows based on investment policy', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 25, title: 'Client Onboarding', description: 'Automate account opening, document collection, and compliance checks', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 26, title: 'Performance Reporting', description: 'Generate personalized performance reports for clients with explanations', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 27, title: 'Risk Assessment', description: 'Automate client risk profiling and suitability assessments', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 28, title: 'Document Management', description: 'Organize and retrieve client documents with version control and audit trails', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/google-drive.svg` },
  { id: 29, title: 'Compliance Monitoring', description: 'Monitor transactions for suspicious activity and regulatory violations', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 30, title: 'Client Communication', description: 'Automate client updates, market commentary, and investment insights', category: 'Wealth Management', iconUrl: `${BASE_ICON_URL}/gmail.svg` },
  
  // Banking
  { id: 31, title: 'Transaction Monitoring', description: 'Monitor transactions for AML compliance and suspicious activity patterns', category: 'Banking', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 32, title: 'Client Onboarding', description: 'Automate KYC/AML checks, document verification, and account opening workflows', category: 'Banking', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 33, title: 'Credit Risk Assessment', description: 'Automate credit application analysis and risk scoring using AI models', category: 'Banking', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 34, title: 'Loan Processing', description: 'Streamline loan origination, underwriting, and approval workflows', category: 'Banking', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 35, title: 'Regulatory Reporting', description: 'Generate FINMA regulatory reports with full audit trail compliance', category: 'Banking', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 36, title: 'Account Reconciliation', description: 'Automate account reconciliation and exception handling', category: 'Banking', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 37, title: 'Fraud Detection', description: 'Detect fraudulent transactions using pattern recognition and AI models', category: 'Banking', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 38, title: 'Document Processing', description: 'Extract data from bank statements, invoices, and financial documents', category: 'Banking', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 39, title: 'Customer Due Diligence', description: 'Automate CDD reviews and enhanced due diligence for high-risk clients', category: 'Banking', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 40, title: 'Compliance Alerts', description: 'Monitor regulatory changes and alert compliance teams to required actions', category: 'Banking', iconUrl: `${BASE_ICON_URL}/slack.svg` },
  
  // Cross-Industry Financial Services
  { id: 41, title: 'Document Extraction', description: 'Extract structured data from PDFs, emails, and scanned documents', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/pdf.svg` },
  { id: 42, title: 'Audit Trail Management', description: 'Maintain comprehensive audit trails for all automated processes', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/google-drive.svg` },
  { id: 43, title: 'Regulatory Compliance', description: 'Ensure all workflows meet FINMA and other regulatory requirements', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/hubspot.svg` },
  { id: 44, title: 'Data Integration', description: 'Integrate with core banking systems, CRMs, and portfolio management platforms', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/dealcloud.png` },
  { id: 45, title: 'Report Generation', description: 'Generate standardized financial reports with automated distribution', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/google-sheets.svg` },
  { id: 46, title: 'Workflow Orchestration', description: 'Coordinate complex multi-step processes across systems and teams', category: 'Financial Services', iconUrl: `${BASE_ICON_URL}/slack.svg` },
];

export default function DemoShowcase({ activeDemoId }: Readonly<{ activeDemoId?: number }>) {
  const [isOpen, setIsOpen] = useState(false);
  const [useCases] = useState<UseCase[]>(useCasesData);

  useEffect(() => {
    if (globalThis.window !== undefined) {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }

    // Cleanup on unmount
    return () => {
      if (globalThis.window !== undefined) {
        document.body.style.overflow = 'auto';
      }
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const getCardClassName = (id: number) => {
    const isActive = id === activeDemoId;
    return `use-case-card block border cursor-pointer transition-all duration-300 ease-in-out max-w-[500px] mx-auto rounded-[36px] p-2 ${
      isActive ? 'border-primary-500 border-2' : 'border-stroke-3 group hover:border-primary-400'
    }`;
  };

  const categories = Array.from(new Set(useCases.map(uc => uc.category)));
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredUseCases = selectedCategory === 'All' 
    ? useCases 
    : useCases.filter(uc => uc.category === selectedCategory);

  return (
    <>
      <button
        style={{ writingMode: 'sideways-lr', textOrientation: 'mixed' }}
        onClick={handleOpen}
        className="text-accent text-tagline-1 fixed right-0 bottom-1/2 z-[99999] flex translate-y-1/2 cursor-pointer items-center gap-4 rounded-l-xl bg-[#DE4A40] pt-4 pb-1 font-medium sm:pr-1 sm:pl-1">
        <span className="">
          <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
            <path d="M10 44C4.47715 44 0 39.5228 0 34L0 0L44 0L44 44L10 44Z" fill="#1A1A1C" fillOpacity="0.1" />
            <path d="M16.1728 24.1932L14 21.9995L16.1728 19.8059L18.3456 21.9995L16.1728 24.1932Z" fill="#F5F5F7" />
            <path d="M23.2157 12.6936L25.3886 10.5L27.5614 12.6936L25.3886 14.8873L23.2157 12.6936Z" fill="#F5F5F7" />
            <path
              d="M19.2456 27.2955L17.0728 25.1018L19.2456 22.9082L21.4184 25.1018L19.2456 27.2955Z"
              fill="#F5F5F7"
            />
            <path
              d="M20.1429 15.7959L22.3157 13.6023L24.4885 15.7959L22.3157 17.9895L20.1429 15.7959Z"
              fill="#F5F5F7"
            />
            <path
              d="M22.3184 30.3977L20.1456 28.2041L22.3184 26.0105L24.4912 28.2041L22.3184 30.3977Z"
              fill="#F5F5F7"
            />
            <path
              d="M17.0701 18.8982L19.2429 16.7045L21.4157 18.8982L19.2429 21.0918L17.0701 18.8982Z"
              fill="#F5F5F7"
            />
            <path d="M25.3912 33.5L23.2184 31.3064L25.3912 29.1127L27.564 31.3064L25.3912 33.5Z" fill="#F5F5F7" />
            <path
              d="M20.1429 22.0005L22.3157 19.8068L24.4885 22.0005L22.3157 24.1941L20.1429 22.0005Z"
              fill="#F5F5F7"
            />
            <path d="M25.6544 22.0005L27.8272 19.8068L30 22.0005L27.8272 24.1941L25.6544 22.0005Z" fill="#F5F5F7" />
          </svg>
        </span>
        <span>
          {' '}
          {useCases.length}+ Prebuilt Use Cases
        </span>
      </button>

      <div
        className={`fixed top-0 left-0 z-[99999] h-screen w-full origin-center transition-[transform,opacity,filter] duration-[900ms] ease-[cubic-bezier(0.23,1,0.32,1)] will-change-[transform,opacity,filter] backface-hidden ${
          isOpen ? 'opacity-100 blur-none' : 'opacity-0 blur-[22px]'
        }`}
        style={{
          transform: isOpen ? 'translateX(0) scale(1) rotateY(0deg)' : 'translateX(100%) scale(0.65) rotateY(20deg)',
        }}
        data-lenis-prevent="true">
        <button
          onClick={handleClose}
          className="bg-secondary fixed top-5 right-5 z-[999999] flex cursor-pointer items-center justify-center rounded-[80px] border-6 border-white p-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.15)] lg:top-10 lg:right-10 lg:border-8 lg:p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <div
          className="bg-background-12 fixed top-0 left-0 h-screen w-full overflow-y-auto pt-14 pb-16"
          style={{
            touchAction: 'pan-y',
            WebkitOverflowScrolling: 'touch',
            overscrollBehavior: 'contain',
          }}>
          <div className="mx-auto max-w-[1560px] min-[1880px]:!px-0 md:px-4">
            <div className="mb-8 text-center">
              <h2 className="text-secondary text-center text-heading-3 font-normal mb-4">
                {useCases.length}+ Prebuilt Use Cases
              </h2>
              <p className="text-secondary/60 text-center max-w-2xl mx-auto">
                Discover ready-to-use automation workflows for your business
              </p>
            </div>

            {/* Category Filter */}
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === 'All'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white dark:bg-background-7 text-secondary border border-stroke-3 hover:border-primary-400'
                }`}>
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-background-7 text-secondary border border-stroke-3 hover:border-primary-400'
                  }`}>
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-12 gap-y-5 sm:gap-3 xl:gap-6">
              {filteredUseCases.map((useCase) => (
                <div key={useCase.id} className="col-span-12 md:col-span-6 xl:col-span-4">
                  <div className={getCardClassName(useCase.id)}>
                    <div className="rounded-[28px] bg-white dark:bg-background-7 p-6 shadow-[0_1px_4px_0_rgba(16,24,40,0.10)] transition-all duration-400 ease-in-out group-hover:shadow-[0_8px_6px_0_rgba(16,24,40,0.16)]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 relative">
                          <Image
                            src={useCase.iconUrl}
                            alt={useCase.title}
                            fill
                            className="object-contain"
                            sizes="48px"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="mb-2">
                            <span className="text-tagline-2 text-primary-500 dark:text-primary-400 text-xs font-medium">
                              {useCase.category}
                            </span>
                          </div>
                          <h3 className="text-secondary dark:text-accent text-heading-6 font-medium mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-secondary/60 dark:text-accent/60 text-sm leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
