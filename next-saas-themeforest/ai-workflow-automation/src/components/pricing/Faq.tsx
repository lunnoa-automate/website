'use client';

import RevealAnimation from '../animation/RevealAnimation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const faqs = [
  {
    id: '1',
    question: 'How is Lunnoa priced?',
    answer: 'Pricing is based on your specific requirements: the number of workflows and AI agents you need, your deployment model (on-premise, private cloud, or hybrid), integrations with your existing systems, and your support requirements. We provide a detailed quote after understanding your use case during a discovery call.',
  },
  {
    id: '2',
    question: 'What about LLM/AI costs?',
    answer: 'Since Lunnoa is self-hosted, you pay for LLM API usage directly to your chosen provider (OpenAI, Anthropic, Azure OpenAI, or local models). This means you have full control over costs and your data never passes through our infrastructure. We help you optimize token usage and select the right models during implementation.',
  },
  {
    id: '3',
    question: 'Is there a minimum contract term?',
    answer: 'We typically work with annual agreements for enterprise implementations. This includes the initial setup, workflow development, training, and ongoing support. Custom terms are available based on your requirements.',
  },
  {
    id: '4',
    question: 'What\'s included in the implementation?',
    answer: 'Every implementation includes: workflow design and development, AI agent configuration, integration with your existing systems, deployment on your infrastructure, team training, documentation, and a support period. We work closely with your team to ensure successful adoption.',
  },
  {
    id: '5',
    question: 'Can I start small and expand later?',
    answer: 'Absolutely. Many clients start with a pilot project—often automating a single high-impact workflow like MNPI screening or capital call processing. Once you see results, you can expand to additional workflows and AI agents. Your pilot investment applies to your expanded implementation.',
  },
  {
    id: '6',
    question: 'Do you offer a proof of concept?',
    answer: 'Yes, we can arrange a proof of concept using your actual data (under NDA) to demonstrate how Lunnoa handles your specific workflows. This helps you evaluate the solution before committing to a full implementation.',
  },
  {
    id: '7',
    question: 'What support options are available?',
    answer: 'We offer Standard support (business hours, email/chat), Priority support (extended hours, faster response times), and Dedicated support (24/7 with a dedicated success manager and custom SLAs). Your support level is factored into your overall pricing.',
  },
  {
    id: '8',
    question: 'Are there any hidden fees?',
    answer: 'No hidden fees. Your quote includes everything: implementation, training, support, and platform updates for your contract term. LLM costs are separate because you pay your provider directly, giving you full transparency and control.',
  },
];

const Faq = () => {
  return (
    <section className="py-16 md:py-24" aria-label="Frequently Asked Questions">
      <div className="main-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-cyan mb-4">FAQ</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="text-heading-4 md:text-heading-3 text-secondary dark:text-accent mb-3">
                Common Pricing Questions
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="text-secondary/60 dark:text-accent/60">
                Everything you need to know about how we price Lunnoa implementations.
              </p>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.4}>
            <Accordion className="w-full" defaultValue="1">
              {faqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger
                    className="flex w-full cursor-pointer items-center justify-between py-5"
                    titleClassName="flex-1 text-left text-heading-6 md:text-tagline-1 font-medium text-secondary dark:text-accent pr-4"
                    value={faq.id}
                    iconType="arrow">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent value={faq.id}>
                    <p className="text-secondary/70 dark:text-accent/70 leading-relaxed pb-4">
                      {faq.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </RevealAnimation>

          {/* Additional CTA */}
          <RevealAnimation delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-secondary/60 dark:text-accent/60 mb-4">
                Have a question that's not answered here?
              </p>
              <a
                href="/contact-us"
                className="text-primary-500 font-medium hover:underline inline-flex items-center gap-2">
                Talk to our team
                <span className="ns-shape-2 text-[14px]" />
              </a>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default Faq;
