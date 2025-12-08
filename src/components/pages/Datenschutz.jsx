import { ArrowLeft } from 'lucide-react';
import { SlideUp } from '../animations/SlideUp';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';

export default function Datenschutz() {
  const { language } = useLanguage();
  const t = useTranslation(language);

  // Content is kept in German for legal compliance but titles are translated
  const content = language === 'en' ? {
    intro1: 'Lunnoa Labs ("we", "us" or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and protect information when you visit our website or use our AI agent services.',
    intro2: 'We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.',
    section1: {
      title: '1. What Data We Collect ',
      sub1: '1.1 Information You Provide',
      sub1Desc: 'We may collect information that you voluntarily provide to us, including:',
      sub1Items: ['Name and contact information', 'Account credentials', 'Company information', 'Communication preferences'],
      sub2: '1.2 Automatically Collected Information',
      googleTitle: 'Google Analytics',
      googleDesc: 'We use Google Analytics to understand website usage. Data collected includes:',
      googleItems: ['Pages visited and time spent', 'Device information', 'Geographic location', 'Referral sources', 'Browser type and settings'],
      hotjarTitle: 'Hotjar',
      hotjarDesc: 'We use Hotjar to improve user experience by collecting:',
      hotjarItems: ['Mouse movements and clicks', 'Scroll behavior', 'Pages visited', 'Device information', 'Anonymous feedback'],
      sub3: '1.3 Cookies and Similar Technologies',
      sub3Desc: 'We use cookies and similar tracking technologies to:',
      sub3Items: ['Improve website functionality', 'Analyze usage patterns', 'Store your preferences', 'Deliver targeted content'],
    },
    section2: {
      title: '2. How We Use Your Data',
      desc: 'We use the collected information to:',
      items: ['Provide and improve our services', 'Communicate with you', 'Analyze service usage', 'Optimize user experience', 'Comply with legal obligations', 'Prevent fraud and misuse'],
    },
    section3: {
      title: '3. Data Storage and Security',
      sub1: '3.1 Data Storage',
      sub1Items: ['Your data is stored on secure servers in Switzerland', 'We retain your data only as long as necessary for service delivery or as required by law', 'We implement appropriate technical and organizational security measures'],
      sub2: '3.2 Data Security',
      sub2Desc: 'We use industry-standard security measures to protect your data, including:',
      sub2Items: ['Encryption in transit', 'Access controls', 'Regular security audits'],
    },
    section4: {
      title: '4. Your Rights and Choices',
      desc: 'Under applicable data protection laws, you have the right to:',
      items: ['Access your personal data', 'Correct inaccurate data', 'Request deletion of your data', 'Object to processing of your data', 'Request data portability', 'Withdraw consent at any time'],
    },
    section5: {
      title: '5. Changes to Privacy Policy',
      desc: 'We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated version on our website.',
    },
    section6: {
      title: '6. Contact',
      desc: 'For privacy-related questions or to exercise your rights, please contact us at:',
    },
  } : {
    intro1: 'Lunnoa Labs („wir", „uns" oder „unser") verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung erläutert, wie wir Informationen erfassen, verwenden, offenlegen und schützen, wenn Sie unsere Website besuchen oder unsere KI-Agenten-Dienste nutzen.',
    intro2: 'Wir verwenden Ihre Daten zur Bereitstellung und Verbesserung des Dienstes. Durch die Nutzung des Dienstes erklären Sie sich mit der Erfassung und Nutzung von Informationen in Übereinstimmung mit dieser Richtlinie einverstanden.',
    section1: {
      title: '1. Welche Daten wir erfassen',
      sub1: '1.1 Von Ihnen bereitgestellte Informationen',
      sub1Desc: 'Wir erfassen möglicherweise Informationen, die Sie uns freiwillig zur Verfügung stellen, darunter:',
      sub1Items: ['Name und Kontaktinformationen', 'Kontozugangsdaten', 'Unternehmensinformationen', 'Kommunikationspräferenzen'],
      sub2: '1.2 Automatisch erfasste Informationen',
      googleTitle: 'Google Analytics',
      googleDesc: 'Wir verwenden Google Analytics, um die Nutzung unserer Website zu verstehen. Erfasst werden unter anderem:',
      googleItems: ['Besuchte Seiten und Verweildauer', 'Geräteinformationen', 'Geografischer Standort', 'Verweisquellen (Referrer)', 'Browsertyp und -einstellungen'],
      hotjarTitle: 'Hotjar',
      hotjarDesc: 'Wir verwenden Hotjar zur Verbesserung der Benutzerfreundlichkeit durch Erfassung von:',
      hotjarItems: ['Mausbewegungen und Klicks', 'Scroll-Verhalten', 'Besuchte Seiten', 'Geräteinformationen', 'Anonymes Feedback'],
      sub3: '1.3 Cookies und ähnliche Technologien',
      sub3Desc: 'Wir verwenden Cookies und ähnliche Tracking-Technologien, um:',
      sub3Items: ['Die Funktionalität unserer Website zu verbessern', 'Nutzungsmuster zu analysieren', 'Ihre Präferenzen zu speichern', 'Zielgerichtete Inhalte bereitzustellen'],
    },
    section2: {
      title: '2. Wie wir Ihre Daten verwenden',
      desc: 'Wir nutzen die gesammelten Informationen, um:',
      items: ['Unsere Dienste bereitzustellen und zu verbessern', 'Mit Ihnen zu kommunizieren', 'Die Nutzung unserer Dienste zu analysieren', 'Die Benutzererfahrung zu optimieren', 'Gesetzlichen Verpflichtungen nachzukommen', 'Betrug und Missbrauch zu verhindern'],
    },
    section3: {
      title: '3. Datenspeicherung und Sicherheit',
      sub1: '3.1 Datenspeicherung',
      sub1Items: ['Ihre Daten werden auf sicheren Servern in der Schweiz gespeichert', 'Wir bewahren Ihre Daten nur so lange auf, wie es für die Dienstleistung oder gesetzlich erforderlich ist', 'Wir setzen geeignete technische und organisatorische Sicherheitsmaßnahmen ein'],
      sub2: '3.2 Datensicherheit',
      sub2Desc: 'Wir verwenden branchenübliche Sicherheitsmaßnahmen zum Schutz Ihrer Daten, darunter:',
      sub2Items: ['Verschlüsselung bei der Übertragung', 'Zugriffskontrollen', 'Regelmäßige Sicherheitsüberprüfungen'],
    },
    section4: {
      title: '4. Ihre Rechte und Wahlmöglichkeiten',
      desc: 'Gemäß den geltenden Datenschutzgesetzen haben Sie das Recht:',
      items: ['Auf Ihre personenbezogenen Daten zuzugreifen', 'Unrichtige Daten zu korrigieren', 'Die Löschung Ihrer Daten zu verlangen', 'Der Verarbeitung Ihrer Daten zu widersprechen', 'Die Übertragung Ihrer Daten zu verlangen', 'Eine erteilte Einwilligung jederzeit zu widerrufen'],
    },
    section5: {
      title: '5. Änderungen der Datenschutzerklärung',
      desc: 'Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Über wesentliche Änderungen informieren wir Sie durch Veröffentlichung der aktualisierten Version auf unserer Website.',
    },
    section6: {
      title: '6. Kontakt',
      desc: 'Bei datenschutzbezogenen Fragen oder zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte unter:',
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-linear py-20 lg:py-32">
        <div className="container mx-auto">
          <SlideUp>
            <a 
              href="#/" 
              className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              {t.datenschutz.backToHome}
            </a>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-muted-foreground">
              {t.datenschutz.title}
            </h1>
            <p className="text-foreground mt-4">{t.datenschutz.date}</p>
          </SlideUp>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto py-16 lg:py-20">
        <SlideUp delay={0.1}>
          <div className="max-w-3xl prose">
            <p className="text-lg">{content.intro1}</p>
            <p>{content.intro2}</p>

            <h2>{content.section1.title}</h2>
            
            <h6>{content.section1.sub1}</h6>
            <p>{content.section1.sub1Desc}</p>
            <ul>
              {content.section1.sub1Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h6>{content.section1.sub2}</h6>
            
            <h3>{content.section1.googleTitle}</h3>
            <p>{content.section1.googleDesc}</p>
            <ul>
              {content.section1.googleItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3>{content.section1.hotjarTitle}</h3>
            <p>{content.section1.hotjarDesc}</p>
            <ul>
              {content.section1.hotjarItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h6>{content.section1.sub3}</h6>
            <p>{content.section1.sub3Desc}</p>
            <ul>
              {content.section1.sub3Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{content.section2.title}</h2>
            <p>{content.section2.desc}</p>
            <ul>
              {content.section2.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{content.section3.title}</h2>

            <h6>{content.section3.sub1}</h6>
            <ul>
              {content.section3.sub1Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h6>{content.section3.sub2}</h6>
            <p>{content.section3.sub2Desc}</p>
            <ul>
              {content.section3.sub2Items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{content.section4.title}</h2>
            <p>{content.section4.desc}</p>
            <ul>
              {content.section4.items.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h2>{content.section5.title}</h2>
            <p>{content.section5.desc}</p>

            <h2>{content.section6.title}</h2>
            <p>{content.section6.desc}</p>
            <div className="bg-gray rounded-[20px] p-8 mt-6">
              <p className="font-bold text-muted-foreground mb-2">Sasa Kelebuda</p>
              <p className="mb-0">
                <a href="mailto:sasakelebuda@lunnoalabs.ch">sasakelebuda@lunnoalabs.ch</a>
              </p>
            </div>
          </div>
        </SlideUp>
      </div>
    </div>
  );
}
