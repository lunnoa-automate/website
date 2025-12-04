import { ArrowRight, Play } from 'lucide-react';
import { Title } from '../ui/Title';
import { Button } from '../ui/Button';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

export default function Hero() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const stats = [
    { value: '58+', label: t.hero.integrations },
    { value: '100%', label: t.hero.swissMade },
  ];

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
              <p className="font-semibold text-foreground">
                {t.hero.subtitle}
              </p>
              
              {/* Stats */}
              <div className="flex sm:flex-row flex-col sm:items-center gap-8 sm:divide-x divide-accent pt-7.5">
                {stats.map((stat, index) => (
                  <div 
                    key={stat.label} 
                    className={`flex items-center gap-2 ${index > 0 ? 'sm:pl-8' : ''}`}
                  >
                    <span className="font-extrabold text-muted-foreground text-5xl lg:text-5.5xl">
                      {stat.value}
                    </span>
                    <p className="font-bold text-muted-foreground max-w-[170px]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>

        {/* Hero Image/Video Placeholder */}
        <SlideUp delay={0.2}>
          <div className="lg:mt-25 mt-16 rounded-[30px] relative">
            <div className="bg-gradient-to-br from-accent to-gray rounded-[30px] min-h-[400px] lg:min-h-[500px] flex items-center justify-center relative overflow-hidden">
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `linear-gradient(rgba(46, 77, 254, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(46, 77, 254, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />
              
              {/* Play Button */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <button className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg">
                  <Play size={32} fill="white" />
                </button>
                <p className="text-muted-foreground font-semibold">{t.hero.platformDemo}</p>
                <span className="text-foreground text-sm">{t.hero.placeholder}</span>
              </div>
            </div>
          </div>
        </SlideUp>

        {/* Partners/Trust Badges */}
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
