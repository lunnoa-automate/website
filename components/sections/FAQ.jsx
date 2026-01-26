'use client';

import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { cn } from '@/lib/utils';
import { useTracking, useIntersectionTracking } from '@/hooks/useTracking';
import { EVENTS, SECTION_IDS } from '@/lib/tracking-events';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackFaqInteraction, trackEvent } = useTracking();
  const sectionRef = useRef(null);
  
  // Track section view
  useIntersectionTracking(sectionRef, {
    sectionName: SECTION_IDS.FAQ,
    threshold: 0.3,
  });

  const toggleFaq = (index) => {
    const wasOpen = openIndex === index;
    const newIndex = wasOpen ? -1 : index;
    setOpenIndex(newIndex);
    
    // Track FAQ interaction
    if (!wasOpen) {
      // Opening FAQ
      trackFaqInteraction(EVENTS.FAQ_EXPAND, t.faq.items[index].question, index);
      
      // Check for compliance-related questions
      const question = t.faq.items[index].question.toLowerCase();
      if (question.includes('dsgvo') || question.includes('gdpr') || 
          question.includes('compliance') || question.includes('finma')) {
        trackEvent(EVENTS.COMPLIANCE_INTEREST, { 
          compliance_topic: 'gdpr',
          question_text: t.faq.items[index].question
        });
      }
    } else {
      // Closing FAQ
      trackFaqInteraction(EVENTS.FAQ_COLLAPSE, t.faq.items[index].question, index);
    }
  };

  return (
    <section id="faq" ref={sectionRef} className="lg:py-15 py-9 bg-gray">
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.faq.label}</SectionLabel>
            <Title size="5xl" className="max-w-[817px] pt-6 text-center">
              {t.faq.title} <span className="text-primary-foreground">{t.faq.titleHighlight}</span>
            </Title>
            <p className="pt-7.5 pb-10 font-semibold text-center max-w-[679px] text-foreground">
              {t.faq.subtitle}
            </p>
          </div>
        </SlideUp>

        <div className="max-w-[871px] mx-auto">
          {t.faq.items.map((faq, index) => (
            <SlideUp key={index} delay={index * 0.05}>
              <div className="mb-2.5 bg-background rounded-[15px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-7.5 py-7.5 text-left font-semibold transition-colors",
                    openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )} 
                    size={24} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-7.5 pb-7.5 text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
