import { ArrowRight, Calendar, Check } from 'lucide-react';
import { Title } from '../ui/Title';
import { Button } from '../ui/Button';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

export default function CTA() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="demo" className="lg:py-15 py-9">
      <SlideUp>
        <div className="container mx-auto">
          <div className="rounded-[30px] bg-accent lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center gap-8">
            {/* Left Content */}
            <div className="max-w-[750px] w-full relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Calendar size={32} />
                </div>
              </div>
              
              <Title size="5xl" className="max-w-[707px]">
                {t.cta.title} <span className="text-primary-foreground">{t.cta.titleHighlight}</span>
              </Title>
              <p className="font-semibold text-foreground mt-4">
                {t.cta.subtitle}
              </p>

              {/* Benefits */}
              <div className="flex flex-wrap gap-6 mt-8">
                {t.cta.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green/20 flex items-center justify-center">
                      <Check size={12} className="text-green" />
                    </div>
                    <span className="font-semibold text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - CTA Button */}
            <div className="relative flex items-center justify-between">
              <Button size="xl" className="group">
                <a href="https://calendly.com/sasakelebuda-lunnoalabs/45min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  {t.cta.button}
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
}
