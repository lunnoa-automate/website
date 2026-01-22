import { Inter } from 'next/font/google';
import Script from 'next/script';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
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
    locale: 'de_CH',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-inter antialiased">
        {/* Iubenda Cookie Consent */}
        <Script id="iubenda-config" strategy="beforeInteractive">
          {`
            var _iub = _iub || [];
            _iub.csConfiguration = {"siteId":4398079,"cookiePolicyId":30166399,"lang":"en","storage":{"useSiteId":true}};
          `}
        </Script>
        <Script
          src="https://cs.iubenda.com/autoblocking/4398079.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/gpp/stub.js"
          strategy="beforeInteractive"
        />
        <Script
          src="//cdn.iubenda.com/cs/iubenda_cs.js"
          strategy="afterInteractive"
          charSet="UTF-8"
        />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z875VKMS4G"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Z875VKMS4G');
          `}
        </Script>
        
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
