import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { Title } from '../ui/Title';
import { SectionLabel } from '../ui/SectionLabel';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import { cn } from '../../lib/utils';
import { useTracking, useIntersectionTracking } from '../../hooks/useTracking';
import { EVENTS, SECTION_IDS, COMPLIANCE_TOPICS } from '../../lib/tracking-events';

// Keywords for compliance tracking
const COMPLIANCE_KEYWORDS = {
  [COMPLIANCE_TOPICS.GDPR]: ['gdpr', 'dsgvo', 'datenschutz', 'privacy', 'data protection'],
  [COMPLIANCE_TOPICS.SWISS_DATA]: ['swiss', 'schweiz', 'switzerland', 'schweizer'],
  [COMPLIANCE_TOPICS.FINMA]: ['finma', 'compliance', 'regulated', 'reguliert'],
  [COMPLIANCE_TOPICS.SELF_HOSTED]: ['self-hosted', 'on-premise', 'cloud', 'data stored', 'daten gespeichert'],
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackFaqInteraction, trackEvent } = useTracking();
  
  // Section visibility tracking
  const sectionRef = useRef(null);
  useIntersectionTracking(sectionRef, {
    sectionName: SECTION_IDS.FAQ,
    threshold: 0.3,
    trackOnce: true,
  });

  // Check if question relates to compliance topics
  const checkComplianceTopic = (questionText) => {
    const lowerText = questionText.toLowerCase();
    for (const [topic, keywords] of Object.entries(COMPLIANCE_KEYWORDS)) {
      if (keywords.some(keyword => lowerText.includes(keyword))) {
        return topic;
      }
    }
    return null;
  };

  const toggleFaq = (index) => {
    const isOpening = openIndex !== index;
    const faq = t.faq.items[index];
    
    if (isOpening) {
      // Track FAQ expansion
      trackFaqInteraction(EVENTS.FAQ_EXPAND, faq.question, index);
      
      // Check for compliance interest
      const complianceTopic = checkComplianceTopic(faq.question);
      if (complianceTopic) {
        trackEvent(EVENTS.COMPLIANCE_INTEREST, { 
          compliance_topic: complianceTopic,
          question_index: index 
        });
      }
    } else {
      // Track FAQ collapse
      trackFaqInteraction(EVENTS.FAQ_COLLAPSE, faq.question, index);
    }
    
    setOpenIndex(isOpening ? index : -1);
  };

  return (
    <section id="faq" className="lg:py-15 py-9 bg-gray" ref={sectionRef}>
      <div className="container mx-auto">
        <SlideUp>
          <div className="flex flex-col items-center">
            <SectionLabel>{t.faq.label}</SectionLabel>
            <Title size="5xl" className="max-w-[817px] pt-6 text-center">
              {t.faq.title} <span className="text-primary-foreground">{t.faq.titleHighlight}</span>
            </Title>
            <p className="pt-7.5 pb-10 font-semibold text-center max-w-[679px] text-foreground">
              {t.faq.subtitle}
            </p>
          </div>
        </SlideUp>

        <div className="max-w-[871px] mx-auto">
          {t.faq.items.map((faq, index) => (
            <SlideUp key={index} delay={index * 0.05}>
              <div className="mb-2.5 bg-background rounded-[15px] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className={cn(
                    "w-full flex items-center justify-between gap-4 px-7.5 py-7.5 text-left font-semibold transition-colors",
                    openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                  aria-expanded={openIndex === index}
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={cn(
                      "shrink-0 transition-transform duration-300",
                      openIndex === index && "rotate-180"
                    )} 
                    size={24} 
                  />
                </button>
                
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-7.5 pb-7.5 text-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  );
}
