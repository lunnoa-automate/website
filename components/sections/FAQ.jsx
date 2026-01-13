'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { cn } from '@/lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="lg:py-15 py-9 bg-gray">
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
