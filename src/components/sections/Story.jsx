import { ArrowRight, Star } from 'lucide-react';
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
          {/* Left - Image Placeholder */}
          <div className="lg:w-1/2 w-full order-1 lg:order-0">
            <SlideUp>
              <div className="bg-gradient-to-br from-accent to-background rounded-[30px] aspect-square max-w-[554px] mx-auto flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full" />
                <div className="absolute bottom-20 right-10 w-32 h-32 bg-green/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple/10 rounded-full" />
                
                <div className="text-center z-10">
                  <div className="w-24 h-24 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl">🤖</span>
                  </div>
                  <p className="text-muted-foreground font-semibold">{t.story.screenshot}</p>
                  <span className="text-foreground text-sm">{t.story.placeholder}</span>
                </div>
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

              {/* Stats Row */}
              <div className="flex items-center gap-5 pt-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 rounded-full bg-accent border-2 border-white flex items-center justify-center text-primary font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="font-semibold text-foreground">
                    {t.story.trustedBy} <span className="text-primary-foreground">{t.story.leadingCompanies}</span>
                  </p>
                </div>
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
