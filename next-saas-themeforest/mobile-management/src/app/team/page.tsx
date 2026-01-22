import Experience from '@/components/team/Experience';
import FAQ from '@/components/team/FAQ';
import TeamCTA from '@/components/team/TeamCTA';
import Teams from '@/components/team/Teams';
import Testimonial from '@/components/team/Testimonial';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Team - Mobile Management Software || NextSaaS',
};

const page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <Teams />
      <Experience />
      <Testimonial />
      <FAQ />
      <TeamCTA />
    </main>
  );
};

export default page;
