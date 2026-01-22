'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import RevealAnimation from '../animation/RevealAnimation';
import { HeroWorkflowDemo } from './workflow-demo';

const ArrowIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Hero = () => {
  const [workflowComplete, setWorkflowComplete] = useState(false);

  return (
    <section className="overflow-hidden pt-[120px] pb-[60px] lg:pt-[160px] lg:pb-[80px]">
      {/* Use main-container alignment for the text content */}
      <div className="main-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left content - aligned with site container */}
          <div className="w-full lg:w-[38%] xl:w-[35%] space-y-6 lg:space-y-8 mb-8 lg:mb-0">
            <div className="space-y-4 text-center lg:text-left">
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">AI for Financial Services</span>
              </RevealAnimation>
              <div className="space-y-4">
                <RevealAnimation delay={0.3}>
                  <h1 className="mx-auto lg:mx-0 max-w-[500px] lg:max-w-none text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.15]">
                    Give Your Team Hours Back{' '}
                    <span className="text-primary-500">Every Week</span>
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="mx-auto lg:mx-0 max-w-[400px] lg:max-w-[460px] text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    AI agents that handle KYC, capital calls, due diligence, and reporting - so your team can focus on high-value work.
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <p className="mx-auto lg:mx-0 max-w-[400px] lg:max-w-[460px] text-base lg:text-lg font-medium text-secondary/80 dark:text-accent/80 leading-relaxed">
                    Scale operations without scaling headcount. Built for Private Equity, Wealth Management, and Banking.
                  </p>
                </RevealAnimation>
              </div>

              {/* CTA Button - positioned under text */}
              <RevealAnimation delay={0.6}>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact-us"
                    className="relative inline-flex items-center gap-2.5 px-7 py-4 rounded-full font-bold text-base transition-all duration-500 bg-gradient-to-r from-[#6f00ff] to-[#9945ff] text-white shadow-[0_0_0_4px_rgba(111,0,255,0.2),0_12px_32px_-6px_rgba(111,0,255,0.5)] hover:scale-105 hover:shadow-[0_0_0_5px_rgba(111,0,255,0.25),0_16px_40px_-6px_rgba(111,0,255,0.6)] active:scale-95"
                  >
                    <span>Start Automating</span>
                    <ArrowIcon />
                    {/* Checkmark badge - appears after workflow completes */}
                    {workflowComplete && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center border-2 border-white bg-gradient-to-br from-emerald-500 to-emerald-400 shadow-lg"
                      >
                        <CheckIcon />
                      </motion.span>
                    )}
                  </Link>
                </div>
              </RevealAnimation>
            </div>
          </div>

          {/* Right content - workflow animation */}
          <div className="w-full lg:w-[62%] xl:w-[65%] lg:-mr-8 xl:-mr-16">
            <RevealAnimation delay={0.3} duration={0.8} direction="right" offset={40}>
              <div className="relative">
                <HeroWorkflowDemo onComplete={() => setWorkflowComplete(true)} />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
