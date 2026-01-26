'use client';

import { useRef } from 'react';
import { ShieldCheck, FileSearch, Settings2, Database, Users, MapPin } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { useIntersectionTracking } from '@/hooks/useTracking';
import { SECTION_IDS } from '@/lib/tracking-events';

const serviceIcons = [ShieldCheck, FileSearch, Settings2, Database, Users, MapPin];
const serviceKeys = ['compliant', 'auditTrails', 'tailored', 'dataSovereignty', 'rbac', 'swissMade'];
const serviceColors = [
  'text-green bg-[#32A5521A]',
  'text-primary bg-[rgba(46,77,254,0.10)]',
  'text-purple bg-[#A22EFE1A]',
  'text-[#00A3FF] bg-[#00A3FF1A]',
  'text-[#FF0000] bg-[#FF00001A]',
  'text-[#5A5579] bg-[#5A55791A]',
];

export default function Services() {
  const { language } = useLanguage();
  const t = useTranslation(language || 'de');
  const sectionRef = useRef(null);
  
  // Track section view
  useIntersectionTracking(sectionRef, {
    sectionName: SECTION_IDS.SERVICES,
    threshold: 0.3,
  });

  return (
    <section id="vorteile" ref={sectionRef} className="lg:py-[120px] py-16">
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.services.label}</SectionLabel>
            <Title size="5xl" className="max-w-[869px] pt-6 text-center">
              {t.services.title} <span className="text-primary-foreground">{t.services.titleHighlight}</span>
              <br />
              {t.services.subtitle}
            </Title>
          </div>
        </SlideUp>

        <div className="lg:pt-15 pt-8">
          <SlideUp delay={0.1}>
            <div className="grid xl:grid-cols-3 lg:grid-cols-3 sm:grid-cols-2 gap-8 lg:gap-12">
              {serviceKeys.map((key, index) => {
                const Icon = serviceIcons[index];
                const item = t.services.items[key];
                if (!item) return null;
                return (
                  <div 
                    key={key}
                    className="pt-8 text-center flex flex-col items-center group"
                  >
                    <div className={`md:w-[85px] md:h-[85px] w-16 h-16 md:p-6 p-4 rounded-full flex justify-center items-center mb-6 ${serviceColors[index]}`}>
                      <Icon className="transition-all duration-500 group-hover:scale-90" size={32} />
                    </div>
                    <h4 className="text-xl font-extrabold text-muted-foreground leading-[140%]">
                      {item.title}
                    </h4>
                    <p className="pt-4 text-foreground max-w-[300px]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
