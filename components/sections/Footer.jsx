'use client';

import Link from 'next/link';
import { MapPin, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { useTracking } from '@/hooks/useTracking';
import { CTA_LOCATIONS } from '@/lib/tracking-events';
import ConsentButton from '@/components/consent/ConsentButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackFooterLinkClick, trackSocialClick, trackCtaClick, trackCalendlyClick } = useTracking();

  const footerLinks = {
    navigation: [
      { label: t.nav.benefits, href: '/#vorteile' },
      { label: t.nav.useCases, href: '/#use-cases' },
      { label: t.nav.features, href: '/#features' },
      { label: t.nav.team, href: '/#team' },
      { label: t.nav.faq, href: '/#faq' },
    ],
    product: [
      { label: t.nav.integrations, href: '/integrations' },
      { label: t.footer.releaseNotes || 'Release Notes', href: '/releases' },
    ],
    legal: [
      { label: t.footer.impressum, href: '/impressum' },
      { label: t.footer.privacy, href: '/datenschutz' },
    ],
    contact: [
      { label: t.footer.requestDemo, href: 'https://calendly.com/sasakelebuda-lunnoalabs/45min' },
      { label: 'sasakelebuda@lunnoalabs.ch', href: 'mailto:sasakelebuda@lunnoalabs.ch' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', platform: 'linkedin' },
    { icon: Mail, href: 'mailto:sasakelebuda@lunnoalabs.ch', label: 'Email', platform: 'email' },
  ];
  
  // Handle footer link click
  const handleFooterLinkClick = (category, label, href) => {
    trackFooterLinkClick(category, label, href);
  };
  
  // Handle social click
  const handleSocialClick = (platform) => {
    trackSocialClick(platform);
  };
  
  // Handle demo request click (special case)
  const handleDemoRequestClick = () => {
    trackCtaClick(CTA_LOCATIONS.FOOTER);
    trackCalendlyClick(CTA_LOCATIONS.FOOTER);
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
                    onClick={() => handleSocialClick(social.platform)}
                    aria-label={social.label}
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
                    <Link 
                      href={link.href}
                      onClick={() => handleFooterLinkClick('navigation', link.label, link.href)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link 
                      href={link.href}
                      onClick={() => handleFooterLinkClick('product', link.label, link.href)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
                    <Link 
                      href={link.href}
                      onClick={() => handleFooterLinkClick('legal', link.label, link.href)}
                      className="text-foreground hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <ConsentButton variant="text" />
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h5 className="font-extrabold text-muted-foreground mb-6">{t.footer.contact}</h5>
              <ul className="space-y-3">
                {footerLinks.contact.map((link, index) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      onClick={() => {
                        if (index === 0) {
                          // Demo request link
                          handleDemoRequestClick();
                        } else {
                          handleFooterLinkClick('contact', link.label, link.href);
                        }
                      }}
                      className="text-foreground hover:text-primary-foreground transition-colors"
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
