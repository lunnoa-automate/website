'use client';

import { useICP } from '@/context/ICPContext';
import { testimonialContent } from '@/data/icp-content';
import RevealAnimation from '../animation/RevealAnimation';
import FadeTestimonial from '../shared/FadeTestimonial';

const Testimonial = () => {
  const { icp } = useICP();
  const content = testimonialContent[icp];

  return (
    <section className="bg-background-2 dark:bg-background-5 relative py-16 md:py-[100px] xl:py-[200px]">
      <div className="main-container">
        <div className="space-y-16 sm:space-y-20">
          <div className="text-center">
            <RevealAnimation delay={0.1}>
              <h2 className="mx-auto w-full max-w-[776px]">{content.heading}</h2>
            </RevealAnimation>
          </div>
          <FadeTestimonial />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
