import { cn } from '@/utils/cn';
import gradient24Img from '@public/images/ns-img-512.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';

const data = [
  {
    id: '1',
    title: 'Capital Calls Processed',
    value: '1,200+',
    description: 'Automated capital call detection and booking.',
  },
  {
    id: '2',
    title: 'KYC Profiles Reviewed',
    value: '4,500+',
    description: 'Automated compliance reassessments completed.',
  },
  {
    id: '3',
    title: 'Meeting Dossiers Created',
    value: '620+',
    description: 'Client meeting preparations automated.',
  },
  {
    id: '4',
    title: 'Hours Saved Weekly',
    value: '375+',
    description: 'Manual work eliminated through automation.',
  },
  {
    id: '5',
    title: 'Compliance Checks',
    value: '22K+',
    description: 'Transcript and document compliance verified.',
  },
  {
    id: '6',
    title: 'AI Agents in Production',
    value: '125+',
    description: 'Specialized agents automating workflows.',
  },
];

const Statistics = () => {
  return (
    <section className="bg-background-2 dark:bg-background-5 relative overflow-hidden pt-14 pb-14 md:pt-16 md:pb-16 lg:pt-[88px] lg:pb-[88px] xl:pt-[100px] xl:pb-[100px]">
      <RevealAnimation delay={0.1}>
        <div className="relative">
          <div className="dark:from-background-5 absolute top-0 left-0 z-40 h-full w-[15%] bg-gradient-to-r from-white to-transparent md:w-[20%]" />
          <div className="dark:from-background-5 absolute top-0 right-0 z-40 h-full w-[15%] bg-gradient-to-l from-white to-transparent md:w-[20%]" />

          <Marquee pauseOnHover={true} autoFill={true}>
            <div className="mb-14 flex items-center justify-center max-md:gap-x-8 max-md:gap-y-[42px] md:gap-8">
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className={cn(
                    'hover:bg-secondary hover:dark:bg-background-8 border-stroke-4 dark:border-stroke-6 group relative z-0 flex min-h-[270px] w-full min-w-[360px] flex-col justify-between gap-y-8 overflow-hidden rounded-[20px] border p-8 transition-all duration-500 ease-in-out',
                    index === 0 && 'ml-8',
                  )}>
                  <div className="pointer-events-none absolute -top-[85%] -right-[60%] -z-10 size-[500px] transform opacity-0 transition-all duration-700 ease-out select-none group-hover:scale-105 group-hover:opacity-100">
                    <Image src={gradient24Img} alt="gradient" />
                  </div>
                  <div className="transform transition-all duration-500 ease-in-out group-hover:translate-y-[-4px]">
                    <p className="mb-2 text-lg transition-colors duration-500 ease-in-out group-hover:text-white">
                      {item.title}
                    </p>
                    <h3 className="group-hover:text-ns-yellow text-secondary dark:text-accent transition-colors duration-500 ease-in-out">
                      {item.value}
                    </h3>
                  </div>
                  <p className="group-hover:text-accent/60 text-secondary/60 dark:text-accent/60 transform transition-all duration-500 ease-in-out group-hover:translate-y-[4px]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealAnimation>
    </section>
  );
};

export default Statistics;
