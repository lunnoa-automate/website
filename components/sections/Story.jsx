'use client';

import { Shield, Database, FileCheck } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';

export default function Story() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const painPoints = [
    { icon: FileCheck, text: t.story.painPoints?.documents },
    { icon: Shield, text: t.story.painPoints?.compliance },
    { icon: Database, text: t.story.painPoints?.operations },
  ].filter(item => item.text);

  return (
    <section className="lg:py-15 py-9 bg-gray">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center gap-12">
          {/* Left - Image */}
          <div className="lg:w-1/2 w-full order-1 lg:order-0">
            <SlideUp>
              <div className="rounded-[30px] aspect-square max-w-[554px] mx-auto overflow-hidden">
                <img 
                  src="/images/image_swiss_location.jpg" 
                  alt="Swiss Innovation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </SlideUp>
          </div>

          {/* Right - Content */}
          <div className="lg:w-1/2 w-full order-0 lg:order-1">
            <SlideUp delay={0.1}>
              <SectionLabel>{t.story.label}</SectionLabel>
              <Title size="5xl" className="max-w-[703px] pt-6">
                {t.story.title}
              </Title>
              <div className="max-w-[563px]">
                <p className="font-semibold text-muted-foreground pt-6">
                  {t.story.description1}
                </p>
                <p className="font-semibold pt-7.5">
                  <strong>{t.story.weUnderstand}</strong> {t.story.description2}
                </p>

                {/* Pain Points */}
                {painPoints.length > 0 && (
                  <div className="mt-8 space-y-4">
                    {painPoints.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                          <item.icon size={20} />
                        </div>
                        <span className="text-foreground font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
