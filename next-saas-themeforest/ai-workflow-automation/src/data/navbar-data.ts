import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';
import { FooterOneData } from '@/interface';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'platform',
    title: 'Platform',
    submenu: [
      { id: 'workflows', label: 'Workflows', href: './features/workflows' },
      { id: 'ai-agents', label: 'AI Agents', href: './features/ai-agents' },
      { id: 'knowledge-base', label: 'Knowledge Base', href: './features/knowledge-base' },
      { id: 'control-room', label: 'Control Room', href: './features/control-room' },
      { id: 'audit-trails', label: 'Audit Trails', href: './features/audit-trails' },
      { id: 'integrations', label: 'Integrations', href: './features/integrations' },
      { id: 'security', label: 'Security & Compliance', href: './security' },
      { id: 'trust', label: 'Trust Center', href: './trust' },
    ],
  },

  {
    id: 'solutions',
    title: 'Solutions',
    submenu: [
      { id: 'private-equity', label: 'Private Equity', href: './solutions/private-equity' },
      { id: 'wealth-management', label: 'Wealth Management', href: './solutions/wealth-management' },
      { id: 'real-estate', label: 'Real Estate', href: './solutions/real-estate' },
      { id: 'banking', label: 'Banking', href: './solutions/banking' },
      { id: 'mnpi-screening', label: 'MNPI Screening', href: './use-cases/mnpi-screening' },
      { id: 'capital-calls', label: 'Capital Calls', href: './use-cases/capital-calls' },
      { id: 'kyc-aml', label: 'KYC/AML Automation', href: './use-cases/kyc-aml' },
      { id: 'rfp-automation', label: 'RFP Automation', href: './use-cases/rfp-automation' },
      { id: 'due-diligence', label: 'Due Diligence', href: './use-cases/due-diligence' },
    ],
  },

  {
    id: 'resources',
    title: 'Resources',
    submenu: [
      { id: 'ai-handbook', label: 'AI Handbook', href: './resources/ai-handbook' },
      { id: 'blog', label: 'Blog', href: './blog' },
      { id: 'case-studies', label: 'Case Studies', href: './case-study' },
      { id: 'customers', label: 'Customer Stories', href: './customer' },
      { id: 'documentation', label: 'Documentation', href: './documentation' },
      { id: 'faq', label: 'FAQ', href: './faq' },
    ],
  },

  {
    id: 'company',
    title: 'Company',
    submenu: [
      { id: 'about-us', label: 'About Us', href: './about' },
      { id: 'team', label: 'Our Team', href: './team' },
      { id: 'career', label: 'Careers', href: './career' },
      { id: 'press', label: 'Press', href: './press' },
      { id: 'contact', label: 'Contact', href: './contact-us' },
    ],
  },

  {
    id: 'plans-support',
    title: 'Pricing & Legal',
    submenu: [
      { id: 'pricing', label: 'Pricing', href: './pricing' },
      { id: 'login', label: 'Login', href: './login' },
      { id: 'create-account', label: 'Get Started', href: './signup' },
      { id: 'terms-conditions', label: 'Terms & Conditions', href: './terms-conditions' },
      { id: 'privacy-policy', label: 'Privacy Policy', href: './privacy-policy' },
      { id: 'gdpr', label: 'GDPR', href: './gdpr' },
    ],
  },
];

export const footerData: FooterOneData[] = [
  {
    title: 'Platform',
    links: [
      { label: 'Workflows', href: '/features/workflows' },
      { label: 'AI Agents', href: '/features/ai-agents' },
      { label: 'Control Room', href: '/features/control-room' },
      { label: 'Integrations', href: '/features/integrations' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Private Equity', href: '/solutions/private-equity' },
      { label: 'Wealth Management', href: '/solutions/wealth-management' },
      { label: 'MNPI Screening', href: '/use-cases/mnpi-screening' },
      { label: 'KYC/AML Automation', href: '/use-cases/kyc-aml' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'AI Handbook', href: '/resources/ai-handbook' },
      { label: 'Documentation', href: '/documentation' },
      { label: 'Security', href: '/security' },
      { label: 'Trust Center', href: '/trust' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact Us', href: '/contact-us' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
    ],
  },
];
