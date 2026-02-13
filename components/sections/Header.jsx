'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslation } from '@/translations';
import { cn } from '@/lib/utils';
import { useTracking } from '@/hooks/useTracking';
import { EVENTS, CTA_LOCATIONS } from '@/lib/tracking-events';
import { pushEvent, EVENT_CATEGORIES } from '@/lib/tracking';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);
  const { trackNavClick, trackCtaClick, trackCalendlyClick } = useTracking();

  const menuItems = [
    { label: t.nav.benefits, href: '/#vorteile', key: 'benefits' },
    { label: t.nav.useCases, href: '/#use-cases', key: 'use-cases' },
    { label: t.nav.features, href: '/#features', key: 'features' },
    { label: t.nav.integrations, href: '/integrations', key: 'integrations' },
    { label: t.nav.team, href: '/#team', key: 'team' },
    { label: t.nav.faq, href: '/#faq', key: 'faq' },
  ];
  
  // Handle navigation click tracking
  const handleNavClick = (item) => {
    trackNavClick(item.key, {
      nav_label: item.label,
      nav_href: item.href,
    });
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    pushEvent(newState ? EVENTS.MOBILE_MENU_OPEN : EVENTS.MOBILE_MENU_CLOSE, {
      event_category: EVENT_CATEGORIES.NAVIGATION,
    });
  };

  // Handle CTA click (demo button)
  const handleDemoClick = () => {
    trackCtaClick(CTA_LOCATIONS.HEADER);
    trackCalendlyClick(CTA_LOCATIONS.HEADER);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300 bg-white",
        isScrolled && "shadow-3xl"
      )}
    >
      <div className="container mx-auto">
        <div className="border-t border-accent" />
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/images/lunnoa_automate_Logo.png" 
              alt="Lunnoa Automate" 
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-10">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item)}
                    className="font-semibold text-muted-foreground hover:text-primary-foreground transition-colors duration-300 hover-underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA + Language */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSelector />
            <Button size="sm">
              <a 
                href="https://calendly.com/sasakelebuda-lunnoalabs/45min" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleDemoClick}
              >
                {t.nav.freeDemo}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              className="p-2 text-muted-foreground"
              onClick={handleMobileMenuToggle}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 top-[73px] bg-white z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="container mx-auto py-8">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-semibold text-xl text-muted-foreground hover:text-primary-foreground transition-colors"
                  onClick={() => {
                    handleNavClick(item);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-4">
              <Button size="lg" className="w-full">
                <a 
                  href="https://calendly.com/sasakelebuda-lunnoalabs/45min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleDemoClick}
                >
                  {t.nav.freeDemo}
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
