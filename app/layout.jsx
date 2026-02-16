import { Inter } from 'next/font/google';
import Script from 'next/script';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import ConsentBanner from '@/components/consent/ConsentBanner';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Lunnoa Automate - AI Workflow Automation for Financial Services',
  description: 'Self-hosted AI agents for Private Equity, Real Estate, Wealth Management, and Banking. Automate compliance, document processing, and reporting workflows with full data sovereignty.',
  keywords: ['AI Agents', 'Private Equity Automation', 'Wealth Management AI', 'Banking Automation', 'Real Estate AI', 'Swiss Made', 'Self-hosted AI', 'FINMA Compliant', 'Financial Services AI', 'Workflow Automation'],
  authors: [{ name: 'Lunnoa GmbH' }],
  creator: 'Lunnoa GmbH',
  publisher: 'Lunnoa GmbH',
  metadataBase: new URL('https://lunnoaautomate.ch'),
  openGraph: {
    title: 'Lunnoa Automate - AI Workflow Automation for Financial Services',
    description: 'Self-hosted AI agents for Private Equity, Real Estate, Wealth Management, and Banking. Automate compliance, document processing, and reporting workflows.',
    url: 'https://lunnoaautomate.ch',
    siteName: 'Lunnoa Automate',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        {/* Initialize GTM Consent Mode (before GTM loads) */}
        <Script id="consent-mode-init" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent to denied (EU/Swiss compliance)
            gtag('consent', 'default', {
              'analytics_storage': 'denied',
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'wait_for_update': 500
            });
          `}
        </Script>
        
        {/* Google Tag Manager - Only loads after consent via consent-manager.js */}
        <Script id="google-tag-manager-init" strategy="afterInteractive">
          {`
            // GTM will be loaded dynamically by consent-manager.js after user consent
            // This ensures no tracking happens before consent is given
            console.log('GTM initialization ready - waiting for consent');
          `}
        </Script>
        
        {/* Google Tag Manager (noscript) - Respects consent mode */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TNG2GTXC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <LanguageProvider>
          <ConsentBanner />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
