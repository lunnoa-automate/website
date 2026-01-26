'use client';

import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Title } from '@/components/ui/Title';
import { Button } from '@/components/ui/Button';
import { SlideUp } from '@/components/animations/SlideUp';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { useTracking, useVideoTracking } from '@/hooks/useTracking';
import { CTA_LOCATIONS } from '@/lib/tracking-events';

export default function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackCtaClick, trackCalendlyClick } = useTracking();
  const videoRef = useRef(null);
  
  // Track video engagement
  useVideoTracking(videoRef, { enabled: true });
  
  // Handle CTA click tracking
  const handleCtaClick = () => {
    trackCtaClick(CTA_LOCATIONS.HERO);
    trackCalendlyClick(CTA_LOCATIONS.HERO);
  };

  return (
    <section className="pt-20 relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-[-1] bg-gradient-linear h-[calc(100vh-120px)]" />
      
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-[auto_505px] lg:grid-cols-[auto_48%] items-center justify-between xl:gap-20 gap-8">
          {/* Left Content */}
          <div>
            <SlideUp>
              <Title size="7.5xl">
                {t.hero.title}
              </Title>
            </SlideUp>
          </div>
          
          {/* Right Content */}
          <div>
            <SlideUp delay={0.1}>
              <p className="font-semibold text-foreground text-lg">
                {t.hero.subtitle}
              </p>
              
              {/* Trusted by line */}
              <p className="text-muted-foreground font-bold mt-4">
                {t.hero.trustedBy}
              </p>

              {/* CTA Button */}
              <div className="mt-8">
                <Button size="lg" className="group">
                  <a 
                    href="https://calendly.com/sasakelebuda-lunnoalabs/45min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    onClick={handleCtaClick}
                    className="flex items-center gap-2"
                  >
                    {t.hero.cta}
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                  </a>
                </Button>
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Hero Video */}
        <SlideUp delay={0.2}>
          <div className="lg:mt-25 mt-16 max-w-[1150px] mx-auto">
            <div 
              className="rounded-[20px] overflow-hidden shadow-2xl"
              style={{ aspectRatio: '16/7.5' }}
            >
              <video 
                ref={videoRef}
                className="w-full h-full object-cover object-center scale-[1.05]"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src="/videos/Header_Video_Website.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </SlideUp>

        {/* Trust Badges */}
        <SlideUp delay={0.3}>
          <div className="shadow-[0px_4px_40px_0px_rgba(44,54,109,0.25)] max-w-[1005px] mx-auto lg:-mt-14 -mt-6 z-[1] relative bg-white rounded-2.5xl p-8">
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
              {Object.values(t.hero.badges).map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-muted-foreground">
                  <div className="w-3 h-3 bg-green rounded-full" />
                  <span className="font-semibold">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
