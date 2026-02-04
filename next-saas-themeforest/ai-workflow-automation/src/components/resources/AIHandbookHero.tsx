'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { useState } from 'react';

const AIHandbookHero = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in production, this would send to your email service
    console.log('Email submitted:', email);
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-background-2 dark:bg-background-7 pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary-500/10 to-transparent blur-3xl" />
      </div>

      <div className="main-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            <RevealAnimation delay={0.1}>
              <span className="inline-block badge badge-green mb-6">
                Free Download
              </span>
            </RevealAnimation>

            <RevealAnimation delay={0.2}>
              <h1 className="text-heading-3 md:text-heading-2 lg:text-heading-1 text-secondary dark:text-accent mb-6">
                The AI Adoption Handbook for
                <span className="text-primary-500"> Financial Services</span>
              </h1>
            </RevealAnimation>

            <RevealAnimation delay={0.3}>
              <p className="text-lg text-secondary/70 dark:text-accent/70 mb-8 leading-relaxed">
                A practical guide for PE, wealth management, and banking leaders. Learn how to evaluate AI solutions, build the business case, manage change, and avoid the pitfalls that derail most implementations.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.4}>
              <div className="flex flex-wrap gap-4 text-sm text-secondary/60 dark:text-accent/60">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  35+ Pages
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  5 Checklists
                </span>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  ROI Framework
                </span>
              </div>
            </RevealAnimation>
          </div>

          {/* Right - Download Form Card */}
          <RevealAnimation delay={0.4}>
            <div className="relative p-[2px] rounded-[24px] bg-gradient-to-br from-primary-500/30 via-transparent to-primary-500/30">
              <div className="rounded-[22px] bg-white dark:bg-background-6 p-8 md:p-10">
                {!submitted ? (
                  <>
                    <h3 className="text-heading-5 text-secondary dark:text-accent mb-2 text-center">
                      Get Your Free Copy
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60 text-center mb-8">
                      Enter your work email to download instantly
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary dark:text-accent mb-2">
                          Work Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="you@company.com"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-background-2 dark:bg-background-5 border border-stroke-1 dark:border-stroke-6 text-secondary dark:text-accent placeholder:text-secondary/40 dark:placeholder:text-accent/40 focus:outline-none focus:ring-2 focus:ring-primary-500/50"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full btn btn-lg btn-primary hover:btn-secondary">
                        Download Free Handbook
                        <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                      </button>
                    </form>

                    <p className="text-xs text-secondary/40 dark:text-accent/40 text-center mt-4">
                      By downloading, you agree to receive occasional updates. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-heading-5 text-secondary dark:text-accent mb-2">
                      Check Your Email
                    </h3>
                    <p className="text-secondary/60 dark:text-accent/60">
                      We've sent the handbook to {email}. It should arrive within a minute.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default AIHandbookHero;
