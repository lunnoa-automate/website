import { MapPin, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import { useTracking } from '../../hooks/useTracking';
import { FOOTER_LINK_CATEGORIES, CTA_LOCATIONS } from '../../lib/tracking-events';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackFooterLinkClick, trackSocialClick, trackCtaClick, trackCalendlyClick } = useTracking();

  const footerLinks = {
    navigation: [
      { label: t.nav.benefits, href: '#vorteile', category: FOOTER_LINK_CATEGORIES.NAVIGATION },
      { label: t.nav.useCases, href: '#use-cases', category: FOOTER_LINK_CATEGORIES.NAVIGATION },
      { label: t.nav.features, href: '#features', category: FOOTER_LINK_CATEGORIES.NAVIGATION },
      { label: t.nav.team, href: '#team', category: FOOTER_LINK_CATEGORIES.NAVIGATION },
      { label: t.nav.faq, href: '#faq', category: FOOTER_LINK_CATEGORIES.NAVIGATION },
    ],
    product: [
      { label: t.nav.integrations, href: '#/integrations', category: FOOTER_LINK_CATEGORIES.PRODUCT },
      { label: t.footer.releaseNotes || 'Release Notes', href: '#/release-notes', category: FOOTER_LINK_CATEGORIES.PRODUCT },
    ],
    legal: [
      { label: t.footer.impressum, href: '#/impressum', category: FOOTER_LINK_CATEGORIES.LEGAL },
      { label: t.footer.privacy, href: '#/datenschutz', category: FOOTER_LINK_CATEGORIES.LEGAL },
    ],
    contact: [
      { label: t.footer.requestDemo, href: 'https://calendly.com/sasakelebuda-lunnoalabs/45min', category: FOOTER_LINK_CATEGORIES.CONTACT, isDemo: true },
      { label: 'sasakelebuda@lunnoalabs.ch', href: 'mailto:sasakelebuda@lunnoalabs.ch', category: FOOTER_LINK_CATEGORIES.CONTACT },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', platform: 'linkedin' },
    { icon: Mail, href: 'mailto:sasakelebuda@lunnoalabs.ch', label: 'Email', platform: 'email' },
  ];

  // Handle footer link click
  const handleLinkClick = (link) => {
    if (link.isDemo) {
      trackCtaClick(CTA_LOCATIONS.FOOTER);
      trackCalendlyClick(CTA_LOCATIONS.FOOTER);
    } else {
      trackFooterLinkClick(link.category, link.label, link.href);
    }
  };

  // Handle social link click
  const handleSocialClick = (social) => {
    trackSocialClick(social.platform);
  };

  return (
    <footer className="bg-accent rounded-tr-[30px] rounded-tl-[30px] pt-[77px]">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-[auto_65%] lg:grid-cols-[auto_60%] grid-cols-1 gap-x-7 justify-between">
          {/* Brand Column */}
          <div>
            {/* Address */}
            <div className="flex items-start gap-3 text-foreground mb-8">
              <MapPin size={20} className="text-primary shrink-0 mt-1" />
              <address className="not-italic">
                Lunnoa GmbH<br />
                Albulastrasse 6<br />
                8200 Schaffhausen
              </address>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    onClick={() => handleSocialClick(social)}
                    className="w-10 h-10 rounded-full bg-muted/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Columns */}
          <div className="grid sm:grid-cols-4 grid-cols-2 gap-8 mt-10 lg:mt-0">
            {/* Navigation */}
            <div>
              <h5 className="font-extrabold text-muted-foreground mb-6">{t.footer.navigation}</h5>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => handleLinkClick(link)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product */}
            <div>
              <h5 className="font-extrabold text-muted-foreground mb-6">{t.footer.product || 'Product'}</h5>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => handleLinkClick(link)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h5 className="font-extrabold text-muted-foreground mb-6">{t.footer.legal}</h5>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => handleLinkClick(link)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-extrabold text-muted-foreground mb-6">{t.footer.contact}</h5>
              <ul className="space-y-3">
                {footerLinks.contact.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => handleLinkClick(link)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                      {...(link.isDemo ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <span className="inline-block bg-muted/20 h-[1px] w-full mt-[54px]" />

        {/* Copyright */}
        <div className="py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-foreground text-sm">
            Lunnoa GmbH © {currentYear} {t.footer.copyright}
          </p>
          <div className="flex items-center gap-2 bg-muted/10 rounded-full px-4 py-2">
            <span>🇨🇭</span>
            <span className="text-muted-foreground font-semibold text-sm">{t.footer.swissMade}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
