import { ArrowRight } from 'lucide-react';
import { Title } from '../ui/Title';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

export default function Story() {
  const { language } = useLanguage();
  const t = useTranslation(language);

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
              </div>

              <div className="pt-8">
                <Button variant="outline" size="lg" className="group">
                  <a href="#features" className="flex items-center gap-2">
                    {t.story.learnMore}
                    <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" size={18} />
                  </a>
                </Button>
              </div>
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
}
