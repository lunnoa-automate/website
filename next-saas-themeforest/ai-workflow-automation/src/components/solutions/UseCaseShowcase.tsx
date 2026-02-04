'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/LinkButton';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { useState } from 'react';

interface UseCase {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  problem: string;
  solution: string;
  metrics: {
    before: string;
    after: string;
    improvement: string;
  };
  href: string;
}

interface UseCaseShowcaseProps {
  headline: string;
  subheadline?: string;
  useCases: UseCase[];
}

const UseCaseShowcase = ({ headline, subheadline, useCases }: UseCaseShowcaseProps) => {
  const [activeTab, setActiveTab] = useState(useCases[0]?.id || '');

  const activeUseCase = useCases.find((uc) => uc.id === activeTab);

  return (
    <section className="py-16 md:py-24 bg-background-1 dark:bg-background-6">
      <div className="main-container">
        {/* Header */}
        <div className="text-center mb-12">
          <RevealAnimation delay={0.1}>
            <span className="inline-block badge badge-cyan mb-4">
              Use Cases
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="text-heading-4 md:text-heading-2 text-secondary dark:text-accent mb-4">
              {headline}
            </h2>
          </RevealAnimation>
          {subheadline && (
            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/60 dark:text-accent/60 max-w-2xl mx-auto">
                {subheadline}
              </p>
            </RevealAnimation>
          )}
        </div>

        {/* Tabs - Enhanced pill style */}
        <RevealAnimation delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mb-12 p-2 max-w-fit mx-auto rounded-2xl bg-background-2 dark:bg-background-5">
            {useCases.map((useCase) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(useCase.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                  activeTab === useCase.id
                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                    : 'text-secondary/70 dark:text-accent/70 hover:text-secondary dark:hover:text-accent hover:bg-background-3 dark:hover:bg-background-4'
                )}>
                <span className={cn(
                  "w-5 h-5 transition-transform duration-300",
                  activeTab === useCase.id && "scale-110"
                )}>{useCase.icon}</span>
                <span className="hidden sm:inline">{useCase.title}</span>
                <span className="sm:hidden">{useCase.shortTitle}</span>
              </button>
            ))}
          </div>
        </RevealAnimation>

        {/* Active Use Case Content - Enhanced card */}
        {activeUseCase && (
          <RevealAnimation delay={0.5}>
            <div className="max-w-5xl mx-auto">
              <div className="relative p-[2px] rounded-[24px] bg-gradient-to-br from-primary-500/20 via-transparent to-primary-500/20">
                <div className="rounded-[22px] bg-white dark:bg-background-7 p-8 md:p-12">
                  {/* Problem & Solution - Side by side */}
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-10">
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-500/30 rounded-full" />
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-red-500 uppercase tracking-wider mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        The Problem
                      </h4>
                      <p className="text-secondary/80 dark:text-accent/80 leading-relaxed text-lg">
                        {activeUseCase.problem}
                      </p>
                    </div>
                    <div className="relative">
                      <div className="absolute -left-4 top-0 bottom-0 w-1 bg-primary-500/30 rounded-full" />
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        The Solution
                      </h4>
                      <p className="text-secondary/80 dark:text-accent/80 leading-relaxed text-lg">
                        {activeUseCase.solution}
                      </p>
                    </div>
                  </div>

                  {/* Metrics - Enhanced cards */}
                  <div className="grid grid-cols-3 gap-4 md:gap-6 mb-10">
                    <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10 text-center">
                      <p className="text-xs font-medium text-red-500/60 uppercase tracking-wider mb-2">Before</p>
                      <p className="text-xl md:text-2xl font-bold text-red-500">
                        {activeUseCase.metrics.before}
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-primary-500/5 border border-primary-500/10 text-center">
                      <p className="text-xs font-medium text-primary-500/60 uppercase tracking-wider mb-2">After</p>
                      <p className="text-xl md:text-2xl font-bold text-primary-500">
                        {activeUseCase.metrics.after}
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-green-500/5 border border-green-500/10 text-center">
                      <p className="text-xs font-medium text-green-500/60 uppercase tracking-wider mb-2">Improvement</p>
                      <p className="text-xl md:text-2xl font-bold text-green-500">
                        {activeUseCase.metrics.improvement}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <LinkButton
                      href={activeUseCase.href}
                      className="btn btn-md btn-primary hover:btn-secondary"
                      aria-label={`Learn more about ${activeUseCase.title}`}>
                      Learn more about {activeUseCase.title}
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </LinkButton>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        )}

        {/* View All Link */}
        <RevealAnimation delay={0.6}>
          <div className="text-center mt-10">
            <Link
              href="/use-case"
              className="inline-flex items-center gap-2 text-secondary/60 dark:text-accent/60 hover:text-primary-500 transition-colors font-medium">
              View all use cases
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default UseCaseShowcase;
