import About from '@/components/home/About';
import ContactUs from '@/components/home/ContactUs';
import CTA from '@/components/home/CTA';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import Pricing from '@/components/home/Pricing';
import Team from '@/components/home/Team';
import Testimonial from '@/components/home/Testimonial';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Personal Finance - NextSaaS',
};
const page = () => {
  return (
    <main className="dark:bg-background-7 bg-white">
      <Hero />
      <About />
      <Features />
      <WhyChooseUs />
      <Testimonial />
      <Team />
      <Pricing />
      <ContactUs />
      <CTA />
    </main>
  );
};

export default page;
