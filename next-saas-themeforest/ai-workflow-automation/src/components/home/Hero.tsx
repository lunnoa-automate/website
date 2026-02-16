'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/utils/cn';
import { useICP } from '@/context/ICPContext';
import { heroContent, icpOptions } from '@/data/icp-content';
import RevealAnimation from '../animation/RevealAnimation';
import { HeroWorkflowDemo } from './workflow-demo';

const ArrowIcon = () => (
  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Hero = () => {
  const [workflowComplete, setWorkflowComplete] = useState(false);
  const { icp, setIcp } = useICP();
  const content = heroContent[icp];

  return (
    <section className="overflow-hidden pt-[120px] pb-[60px] lg:pt-[160px] lg:pb-[80px]">
      <div className="main-container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
          {/* Left content */}
          <div className="mb-8 w-full space-y-6 lg:mb-0 lg:w-[38%] lg:space-y-8 xl:w-[35%]">
            <div className="space-y-4 text-center lg:text-left">
              {/* Static badge */}
              <RevealAnimation delay={0.2}>
                <span className="badge badge-cyan">AI Workflow Automation for Financial Services</span>
              </RevealAnimation>

              {/* ICP Selector Pills */}
              <RevealAnimation delay={0.25}>
                <div className="flex flex-wrap items-center gap-2 justify-center lg:justify-start pt-1">
                  <span className="text-tagline-3 text-secondary/50 dark:text-accent/50 font-medium mr-1">
                    Built for:
                  </span>
                  {icpOptions.map((option) => (
                    <button
                      key={option.key}
                      onClick={() => setIcp(option.key)}
                      className={cn(
                        'rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 border',
                        icp === option.key
                          ? 'border-primary-500 bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                          : 'border-stroke-1 bg-white text-secondary/60 hover:border-primary-500/50 hover:text-primary-500 dark:border-stroke-6 dark:bg-background-7 dark:text-accent/60 dark:hover:border-primary-500/50',
                      )}>
                      {option.label}
                    </button>
                  ))}
                </div>
              </RevealAnimation>

              {/* Dynamic content with transition */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={icp}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="space-y-4">
                  <h1 className="mx-auto max-w-[500px] text-3xl font-bold leading-[1.15] sm:text-4xl lg:mx-0 lg:max-w-none lg:text-[2.75rem] xl:text-[3.25rem]">
                    {content.heading}
                    <span className="text-primary-500">{content.headingHighlight}</span>
                  </h1>
                  <p className="mx-auto max-w-[400px] text-base leading-relaxed text-gray-600 lg:mx-0 lg:max-w-[460px] lg:text-lg dark:text-gray-400">
                    {content.description}
                  </p>
                  <p className="mx-auto max-w-[400px] text-base font-medium leading-relaxed text-secondary/80 lg:mx-0 lg:max-w-[460px] lg:text-lg dark:text-accent/80">
                    {content.subDescription}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CTA Buttons (static) */}
              <RevealAnimation delay={0.6}>
                <div className="flex flex-col gap-3 pt-4 sm:flex-row justify-center lg:justify-start">
                  <Link
                    href="/contact-us"
                    className="relative inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] px-7 py-4 text-base font-bold text-white shadow-[0_0_0_4px_rgba(59,130,246,0.2),0_12px_32px_-6px_rgba(59,130,246,0.5)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_0_5px_rgba(59,130,246,0.25),0_16px_40px_-6px_rgba(59,130,246,0.6)] active:scale-95">
                    <span>Get a Demo</span>
                    <ArrowIcon />
                    {workflowComplete && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -bottom-1.5 -right-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-emerald-400 shadow-lg">
                        <CheckIcon />
                      </motion.span>
                    )}
                  </Link>
                </div>
              </RevealAnimation>

              {/* Dynamic metrics */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`metrics-${icp}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-wrap gap-6 pt-6 justify-center lg:justify-start">
                  {content.metrics.map((metric, i) => (
                    <div key={i} className="text-center lg:text-left">
                      <p className="text-2xl font-bold text-secondary dark:text-accent">{metric.value}</p>
                      <p className="text-sm text-secondary/60 dark:text-accent/60">{metric.label}</p>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right content - workflow animation (remounts on ICP change) */}
          <div className="w-full lg:-mr-8 lg:w-[62%] xl:-mr-16 xl:w-[65%]">
            <RevealAnimation delay={0.3} duration={0.8} direction="right" offset={40}>
              <div className="relative">
                <HeroWorkflowDemo
                  onComplete={() => setWorkflowComplete(true)}
                />
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
