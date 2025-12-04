import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { LanguageSelector } from '../ui/LanguageSelector';
import { useLanguage } from '../../context/LanguageContext';
import { useTranslation } from '../../translations';
import { cn } from '../../lib/utils';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = useTranslation(language);

  const menuItems = [
    { label: t.nav.benefits, href: '#vorteile' },
    { label: t.nav.useCases, href: '#use-cases' },
    { label: t.nav.features, href: '#features' },
    { label: t.nav.team, href: '#team' },
    { label: t.nav.faq, href: '#faq' },
  ];

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
        "sticky top-0 w-full z-50 transition-all duration-300 bg-background",
        isScrolled && "shadow-3xl"
      )}
    >
      <div className="container mx-auto">
        <div className="border-t border-accent" />
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-extrabold text-xl">L</span>
            </div>
            <span className="font-extrabold text-2xl text-muted-foreground">Lunnoa</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-10">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-semibold text-muted-foreground hover:text-primary-foreground transition-colors duration-300 hover-underline"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA + Language */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSelector />
            <Button size="lg" asChild>
              <a href="https://calendly.com/sasakelebuda-lunnoalabs/45min" target="_blank" rel="noopener noreferrer">{t.nav.freeDemo}</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="xl:hidden flex items-center gap-3">
            <LanguageSelector />
            <button
              className="p-2 text-muted-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          "xl:hidden fixed inset-0 top-[73px] bg-background z-40 transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        <nav className="container mx-auto py-8">
          <ul className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="font-semibold text-xl text-muted-foreground hover:text-primary-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <Button size="lg" className="w-full" asChild>
                <a href="https://calendly.com/sasakelebuda-lunnoalabs/45min" target="_blank" rel="noopener noreferrer">{t.nav.freeDemo}</a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
