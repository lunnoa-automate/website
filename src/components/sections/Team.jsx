import { Linkedin, Mail } from 'lucide-react';
import { Title } from '../ui/Title';
import { SectionLabel } from '../ui/SectionLabel';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

const teamData = [
  { key: 'sasa', initials: 'SK', image: '/images/team/sasa_kelebuda.jpg' },
  { key: 'alessandro', initials: 'AD', image: '/images/team/Alessandro_Di_Vito.jpg' },
];

export default function Team() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="team" className="lg:py-15 py-9">
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.team.label}</SectionLabel>
            <Title size="5xl" className="max-w-[869px] pt-6 text-center">
              {t.team.title}
            </Title>
          </div>
        </SlideUp>

        {/* Team Cards - Modern Image Background Style */}
        <div className="flex flex-wrap justify-center gap-8 mt-12">
          {teamData.map((data, index) => {
            const member = t.team.members[data.key];
            return (
              <SlideUp key={data.key} delay={index * 0.1}>
                <div className="relative w-[320px] h-[420px] rounded-[30px] overflow-hidden group cursor-pointer">
                  {/* Background Image/Placeholder */}
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                    {data.image ? (
                      <img 
                        src={data.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Gradient placeholder */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-purple" />
                        {/* Placeholder Pattern */}
                        <div 
                          className="absolute inset-0 opacity-20"
                          style={{
                            backgroundImage: `radial-gradient(circle at 30% 20%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                              radial-gradient(circle at 70% 80%, rgba(255,255,255,0.2) 0%, transparent 40%)`,
                          }}
                        />
                        {/* Large Initials as placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-[120px] font-extrabold text-white/20 select-none">
                            {data.initials}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    {/* Social Links - Top Right */}
                    <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                        aria-label="LinkedIn"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href="#" 
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all"
                        aria-label="Email"
                      >
                        <Mail size={18} />
                      </a>
                    </div>

                    {/* Name & Role */}
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-2">
                      <h4 className="text-2xl font-extrabold text-white mb-2">
                        {member.name}
                      </h4>
                      <p className="text-white/70 font-medium">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-[30px] border-2 border-white/0 group-hover:border-white/30 transition-all duration-300" />
                </div>
              </SlideUp>
            );
          })}
        </div>

        {/* Partner Section */}
        <SlideUp delay={0.3}>
          <div className="mt-20 text-center">
            <Title size="4xl" className="mb-8">
              {t.team.partners.title} <span className="text-primary-foreground">{t.team.partners.titleHighlight}</span>
            </Title>
            
            {/* Quote */}
            <div className="max-w-[800px] mx-auto bg-gray rounded-[20px] p-8 border-l-4 border-primary mb-8">
              <p className="text-xl italic text-muted-foreground leading-relaxed">
                {t.team.partners.quote}
              </p>
            </div>

            <p className="max-w-[700px] mx-auto text-foreground leading-relaxed mb-12">
              {t.team.partners.description}
            </p>

            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center items-center gap-10">
              <a href="https://www.fintra.ch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/partner/fintra_logo.png" 
                  alt="Fintra" 
                  className="h-8 w-auto object-contain"
                />
              </a>
              <a href="https://www.elab.ch" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img 
                  src="/images/partner/elab_logo_red.png" 
                  alt="eLab" 
                  className="h-8 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </SlideUp>
      </div>
    </section>
  );
}
