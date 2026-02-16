import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import { ThemeProvider } from '@/components/shared/ThemeProvider';

import Footer from '@/components/shared/footer/Footer';
import Navbar from '@/components/shared/navbar/Navbar';
import { AppContextProvider } from '@/context/AppContext';
import { ICPProvider } from '@/context/ICPContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" translate="no" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <AppContextProvider>
          <ICPProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <Suspense>
                <SmoothScrollProvider>
                  <Navbar />
                  {children}
                  <Footer />
                </SmoothScrollProvider>
              </Suspense>
            </ThemeProvider>
          </ICPProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
