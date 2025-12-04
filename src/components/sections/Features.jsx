import { Bot, Workflow, Users, Database, ArrowRight } from 'lucide-react';
import { Title } from '../ui/Title';
import { SectionLabel } from '../ui/SectionLabel';
import { Button } from '../ui/Button';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

const featureIcons = [Bot, Workflow, Users, Database];
const featureKeys = ['aiAgents', 'workflows', 'workspace', 'knowledgeBase'];
const featureColors = [
  'text-primary bg-[rgba(46,77,254,0.10)]',
  'text-green bg-[#32A5521A]',
  'text-purple bg-[#A22EFE1A]',
  'text-[#00A3FF] bg-[#00A3FF1A]',
];

export default function Features() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="features" className="lg:py-15 py-9">
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.features.label}</SectionLabel>
            <Title size="5xl" className="max-w-[869px] pt-6 text-center">
              {t.features.title}
              <br />
              <span className="text-primary-foreground">{t.features.titleHighlight}</span>
            </Title>
          </div>
        </SlideUp>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {featureKeys.map((key, index) => {
            const Icon = featureIcons[index];
            const item = t.features.items[key];
            return (
              <SlideUp key={key} delay={index * 0.1}>
                <div className="bg-gray rounded-[30px] p-8 lg:p-10 group hover:shadow-3xl transition-all duration-500">
                  {/* Feature Image Placeholder */}
                  <div className="bg-gradient-to-br from-accent to-background rounded-2.5xl aspect-video mb-8 flex items-center justify-center relative overflow-hidden">
                    <div 
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `linear-gradient(rgba(46, 77, 254, 0.1) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(46, 77, 254, 0.1) 1px, transparent 1px)`,
                        backgroundSize: '20px 20px'
                      }}
                    />
                    <div className="text-center z-10">
                      <Icon size={48} className={`mx-auto mb-2 ${featureColors[index].split(' ')[0]}`} />
                      <p className="text-muted-foreground font-medium">{t.features.featureScreenshot}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex items-start gap-4">
                    <div className={`min-w-[60px] min-h-[60px] rounded-full flex items-center justify-center ${featureColors[index]} group-hover:scale-90 transition-transform`}>
                      <Icon size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-muted-foreground mb-3 multiline-hover">
                        {item.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SlideUp>
            );
          })}
        </div>

        {/* Integrations Banner */}
        <SlideUp delay={0.4}>
          <div className="mt-16 rounded-[30px] bg-accent p-8 lg:p-12 flex lg:flex-row flex-col justify-between lg:items-center gap-8">
            <div>
              <Title size="4xl">
                <span className="text-primary-foreground">58+</span> {t.features.integrations.title}
              </Title>
              <p className="font-semibold text-foreground mt-2">
                {t.features.integrations.subtitle} <strong className="text-muted-foreground">{t.features.integrations.noProblem}</strong>
              </p>
            </div>
            <Button variant="outline" size="lg" className="group shrink-0">
              <a href="#demo" className="flex items-center gap-2">
                {t.features.integrations.cta}
                <ArrowRight className="-rotate-45 group-hover:rotate-0 transition-transform" size={18} />
              </a>
            </Button>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
