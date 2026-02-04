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

const PlayIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
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
                <span className="badge badge-cyan">AI Workflow Automation for Financial Services</span>
              </RevealAnimation>
              <div className="space-y-4">
                <RevealAnimation delay={0.3}>
                  <h1 className="mx-auto lg:mx-0 max-w-[500px] lg:max-w-none text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-bold leading-[1.15]">
                    Scale Operations{' '}
                    <span className="text-primary-500">10x Without Adding Headcount</span>
                  </h1>
                </RevealAnimation>
                <RevealAnimation delay={0.4}>
                  <p className="mx-auto lg:mx-0 max-w-[400px] lg:max-w-[460px] text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    Track Deals, Clients, and Investments through complete AI-powered processes. MNPI screening, capital calls, KYC—orchestrated end-to-end with full control.
                  </p>
                </RevealAnimation>
                <RevealAnimation delay={0.5}>
                  <p className="mx-auto lg:mx-0 max-w-[400px] lg:max-w-[460px] text-base lg:text-lg font-medium text-secondary/80 dark:text-accent/80 leading-relaxed">
                    Self-hosted. Full audit trails. Built for PE, Wealth Management, and Banking.
                  </p>
                </RevealAnimation>
              </div>

              {/* Dual CTA Buttons */}
              <RevealAnimation delay={0.6}>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Link
                    href="/contact-us"
                    className="relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full font-bold text-base transition-all duration-500 bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] text-white shadow-[0_0_0_4px_rgba(59,130,246,0.2),0_12px_32px_-6px_rgba(59,130,246,0.5)] hover:scale-105 hover:shadow-[0_0_0_5px_rgba(59,130,246,0.25),0_16px_40px_-6px_rgba(59,130,246,0.6)] active:scale-95"
                  >
                    <span>Get a Demo</span>
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
                  <Link
                    href="#product-tour"
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-semibold text-base transition-all duration-300 bg-white dark:bg-background-7 text-secondary dark:text-accent border border-stroke-2 dark:border-stroke-6 hover:border-primary-500 dark:hover:border-primary-500 hover:text-primary-500"
                  >
                    <PlayIcon />
                    <span>Watch Product Tour</span>
                  </Link>
                </div>
              </RevealAnimation>

              {/* Key metrics */}
              <RevealAnimation delay={0.7}>
                <div className="pt-6 flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-secondary dark:text-accent">50-80%</p>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">Time Saved</p>
                  </div>
                  <div className="w-px h-12 bg-stroke-2 dark:bg-stroke-6 hidden sm:block" />
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-secondary dark:text-accent">15 min</p>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">MNPI Screening</p>
                  </div>
                  <div className="w-px h-12 bg-stroke-2 dark:bg-stroke-6 hidden sm:block" />
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-secondary dark:text-accent">Days</p>
                    <p className="text-sm text-secondary/60 dark:text-accent/60">Not Months to Deploy</p>
                  </div>
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
