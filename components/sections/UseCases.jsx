'use client';

import { useState, useRef } from 'react';
import { ArrowRight, Building2, Landmark, Briefcase, TrendingUp } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { Button } from '@/components/ui/Button';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { cn } from '@/lib/utils';
import { useTracking, useIntersectionTracking } from '@/hooks/useTracking';
import { EVENTS, SECTION_IDS, CTA_LOCATIONS } from '@/lib/tracking-events';

const categoryKeys = ['privateEquity', 'realEstate', 'wealthManagement', 'banking'];
const categoryIcons = {
  privateEquity: TrendingUp,
  realEstate: Building2,
  wealthManagement: Briefcase,
  banking: Landmark,
};

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState('privateEquity');
  const { language } = useLanguage();
  const t = useTranslation(language || 'de');
  const { trackUseCaseInteraction, trackCtaClick, trackCalendlyClick } = useTracking();
  const sectionRef = useRef(null);
  
  // Track section view
  useIntersectionTracking(sectionRef, {
    sectionName: SECTION_IDS.USE_CASES,
    threshold: 0.3,
  });

  const ActiveIcon = categoryIcons[activeCategory];
  
  // Handle category selection tracking
  const handleCategorySelect = (key) => {
    setActiveCategory(key);
    trackUseCaseInteraction(EVENTS.USE_CASE_CATEGORY_SELECT, key);
  };
  
  // Handle CTA click
  const handleCtaClick = () => {
    trackCtaClick(CTA_LOCATIONS.USE_CASES_SECTION);
    trackCalendlyClick(CTA_LOCATIONS.USE_CASES_SECTION);
  };

  return (
    <section id="use-cases" ref={sectionRef} className="lg:py-15 py-9 bg-gray">
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.useCases.label}</SectionLabel>
            <Title size="5xl" className="max-w-[869px] pt-6 text-center">
              {t.useCases.title} <span className="text-primary-foreground">{t.useCases.titleHighlight}</span>
            </Title>
            <p className="pt-7.5 pb-10 font-semibold text-center max-w-[679px] text-foreground">
              {t.useCases.subtitle}
            </p>
          </div>
        </SlideUp>

        {/* Category Tabs */}
        <SlideUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categoryKeys.map((key) => {
              const Icon = categoryIcons[key];
              return (
                <button
                  key={key}
                  onClick={() => handleCategorySelect(key)}
                  className={cn(
                    "px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2",
                    activeCategory === key
                      ? "bg-primary text-white"
                      : "bg-background text-muted-foreground hover:bg-accent hover:text-primary-foreground"
                  )}
                >
                  <Icon size={18} />
                  {t.useCases.categories[key]}
                </button>
              );
            })}
          </div>
        </SlideUp>

        {/* Use Case Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
          {t.useCases.items[activeCategory]?.map((useCase, index) => {
            if (!useCase || !useCase.title) return null;
            return (
              <SlideUp key={useCase.title} delay={index * 0.1}>
                <div className="bg-background rounded-[20px] p-8 hover:shadow-3xl hover:border-primary/20 border border-transparent transition-all duration-300 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary">
                      {t.useCases.categories[activeCategory]}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-primary">
                      <ActiveIcon size={18} />
                    </div>
                  </div>
                  <h4 className="text-xl font-extrabold text-muted-foreground mb-4">
                    {useCase.title}
                  </h4>
                  <p className="text-foreground leading-relaxed flex-grow">
                    {useCase.description}
                  </p>
                  {useCase.impact && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-green">{useCase.impact}</span>
                    </div>
                  )}
                </div>
              </SlideUp>
            );
          })}
        </div>

        {/* CTA */}
        <SlideUp delay={0.4}>
          <div className="mt-16 text-center border-t border-border pt-12">
            <p className="text-foreground font-semibold mb-6">
              {t.useCases.cta.text}
            </p>
            <Button size="lg">
              <a 
                href="https://calendly.com/sasakelebuda-lunnoalabs/45min" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={handleCtaClick}
                className="flex items-center gap-2"
              >
                {t.useCases.cta.button}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
