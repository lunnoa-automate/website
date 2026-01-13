'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';

// Note: metadata export not supported in client components
// Metadata is set in layout.jsx or a parent server component

export default function ImpressumPage() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-linear py-20 lg:py-32">
        <div className="container mx-auto">
          <SlideUp>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {t.impressum.backToHome}
            </Link>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-muted-foreground">
              {t.impressum.title}
            </h1>
            <p className="text-foreground mt-4">{t.impressum.date}</p>
          </SlideUp>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 lg:py-20">
        <SlideUp delay={0.1}>
          <div className="max-w-3xl prose">
            <div className="bg-gray rounded-[20px] p-8 lg:p-10 mb-10">
              <p className="text-xl font-bold text-muted-foreground mb-4">Lunnoa GmbH</p>
              <p className="mb-0">
                Albulastrasse 6<br />
                8200 Schaffhausen<br />
                Schweiz
              </p>
            </div>

            <h2>{t.impressum.contact}</h2>
            <p>
              <strong>{t.impressum.phone}:</strong> +41 76 338 35 16<br />
              <strong>{t.impressum.email}:</strong>{' '}
              <a href="mailto:sasakelebuda@lunnoalabs.ch">sasakelebuda@lunnoalabs.ch</a><br />
              <strong>{t.impressum.website}:</strong>{' '}
              <a href="https://www.lunnoaautomate.ch" target="_blank" rel="noopener noreferrer">
                www.lunnoaautomate.ch
              </a>
            </p>

            <h2>{t.impressum.legalInfo}</h2>
            <p>
              <strong>{t.impressum.legalForm}:</strong> {t.impressum.legalFormValue}<br />
              <strong>{t.impressum.tradeRegister}:</strong> CHE‑413.063.503<br />
              <strong>{t.impressum.tradeRegisterOffice}:</strong> {t.impressum.tradeRegisterOfficeValue}
            </p>

            <h2>{t.impressum.managingDirector}</h2>
            <p>Sasa Kelebuda</p>

            <h2>{t.impressum.purpose}</h2>
            <p>
              {t.impressum.purposeValue}
            </p>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
