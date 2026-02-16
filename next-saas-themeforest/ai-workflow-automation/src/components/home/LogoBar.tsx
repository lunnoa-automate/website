'use client';

import gradientBorder from '@public/images/ns-img-523.png';
import Image from 'next/image';
import { useICP, type ICPType } from '@/context/ICPContext';
import { logoBarContent } from '@/data/icp-content';
import RevealAnimation from '../animation/RevealAnimation';

const cardsByICP: Record<ICPType, { shapeClass: string; title: string; description: string }[]> = {
  pe: [
    { shapeClass: 'ns-shape-34', title: 'Entity-Centric', description: 'Deals, Funds & Portfolio Companies' },
    { shapeClass: 'ns-shape-36', title: 'End-to-End', description: 'Intake to closing, orchestrated' },
    { shapeClass: 'ns-shape-8', title: 'Control Room', description: 'Monitor every deal in real-time' },
    { shapeClass: 'ns-shape-19', title: 'Self-Hosted', description: 'Your data never leaves your cloud' },
    { shapeClass: 'ns-shape-4', title: 'Audit Trails', description: 'Full traceability for regulators' },
  ],
  wealth: [
    { shapeClass: 'ns-shape-34', title: 'Entity-Centric', description: 'Clients, Portfolios & Mandates' },
    { shapeClass: 'ns-shape-36', title: 'End-to-End', description: 'Onboarding to activation, orchestrated' },
    { shapeClass: 'ns-shape-8', title: 'Control Room', description: 'Monitor every client in real-time' },
    { shapeClass: 'ns-shape-19', title: 'Self-Hosted', description: 'Your data never leaves your cloud' },
    { shapeClass: 'ns-shape-4', title: 'Audit Trails', description: 'Full traceability for regulators' },
  ],
  banking: [
    { shapeClass: 'ns-shape-34', title: 'Entity-Centric', description: 'Accounts, Loans & Transactions' },
    { shapeClass: 'ns-shape-36', title: 'End-to-End', description: 'Application to disbursement, orchestrated' },
    { shapeClass: 'ns-shape-8', title: 'Control Room', description: 'Monitor every case in real-time' },
    { shapeClass: 'ns-shape-19', title: 'Self-Hosted', description: 'Your data never leaves your cloud' },
    { shapeClass: 'ns-shape-4', title: 'Audit Trails', description: 'Full traceability for regulators' },
  ],
};

const LogoBar = () => {
  const { icp } = useICP();
  const content = logoBarContent[icp];
  const cards = cardsByICP[icp];

  return (
    <section className="py-12 md:py-16">
      <div className="main-container">
        {/* Tagline */}
        <RevealAnimation delay={0.1}>
          <div className="mb-10 text-center">
            <p className="text-tagline-1 font-medium text-secondary/60 dark:text-accent/60">
              {content.tagline}
            </p>
          </div>
        </RevealAnimation>

        {/* Feature cards */}
        <div className="flex flex-wrap items-stretch justify-center gap-5">
          {cards.map((card, index) => (
            <RevealAnimation key={`${icp}-${index}`} delay={0.15 + index * 0.08}>
              <div className="dark:bg-background-7 relative w-full overflow-hidden rounded-[20px] bg-white p-2 min-[480px]:w-[220px] xl:w-[230px]">
                {/* Gradient border image */}
                <figure className="pointer-events-none absolute top-[-95%] left-[-85%] size-[800px] rotate-[82deg] overflow-hidden select-none">
                  <Image src={gradientBorder} alt="" className="size-full" />
                </figure>
                {/* Card content */}
                <div className="bg-background-1 dark:bg-background-6 relative z-10 space-y-4 rounded-xl p-6">
                  <div className="inline-block">
                    <span className={`${card.shapeClass} text-secondary dark:text-accent text-[44px]`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-heading-6 text-secondary dark:text-accent font-semibold">{card.title}</h4>
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{card.description}</p>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoBar;
