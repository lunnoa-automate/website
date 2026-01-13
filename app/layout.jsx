import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Lunnoa Automate - Ihre AI-Workforce beginnt hier',
  description: 'Mit Lunnoa Automate befähigen Sie Ihre Teams, mit eigenen AI-Agenten zu wirken und ihre Arbeitsweise gezielt für mehr Wertschöpfung zu optimieren.',
  keywords: ['AI Agents', 'Automatisierung', 'KI', 'Workflows', 'Swiss Made', 'Enterprise AI'],
  authors: [{ name: 'Lunnoa GmbH' }],
  creator: 'Lunnoa GmbH',
  publisher: 'Lunnoa GmbH',
  metadataBase: new URL('https://lunnoaautomate.ch'),
  openGraph: {
    title: 'Lunnoa Automate - Ihre AI-Workforce beginnt hier',
    description: 'Mit Lunnoa Automate befähigen Sie Ihre Teams, mit eigenen AI-Agenten zu wirken und ihre Arbeitsweise gezielt für mehr Wertschöpfung zu optimieren.',
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
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
