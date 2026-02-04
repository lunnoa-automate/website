'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/LinkButton';

export const slides = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    position: 'COO, Mid-Market PE Fund (€2B AUM)',
    image: '/images/ns-avatar-6.png',
    text: 'MNPI screening used to take our analysts 3-4 hours per deal. With Lunnoa, we\'re down to 20 minutes with better accuracy and full audit trails. That\'s time back on sourcing and due diligence.',
    metric: '85% time reduction',
  },
  {
    id: 2,
    name: 'Thomas Weber',
    position: 'Head of Operations, Swiss Wealth Manager',
    image: '/images/ns-avatar-1.png',
    text: 'KYC reassessments were our biggest bottleneck—2-3 weeks per UHNW client. Lunnoa cut that to days. Our advisors are finally focused on relationships, not paperwork.',
    metric: 'Weeks to days',
  },
  {
    id: 3,
    name: 'Alexandra Chen',
    position: 'Managing Director, Growth Equity Fund',
    image: '/images/ns-avatar-2.png',
    text: 'During fundraising, we could only respond to 30% of RFPs due to bandwidth. Lunnoa automates 70% of our responses. We\'ve tripled throughput without adding headcount.',
    metric: '3x RFP throughput',
  },
  {
    id: 4,
    name: 'Marcus Bergmann',
    position: 'Head of Compliance, Regional Bank',
    image: '/images/ns-avatar-3.png',
    text: 'The self-hosted deployment was critical for us—no client data leaves our infrastructure. Full audit trails satisfy our regulators, and our compliance team can finally keep up with volume.',
    metric: '100% data sovereignty',
  },
];

const FadeTestimonial = () => {
  useEffect(() => {
    // Add custom CSS for enhanced fade effect
    const style = document.createElement('style');
    style.textContent = `
      .reviews-fade-in-swiper .swiper-slide {
        transition: opacity 0.8s ease-out, transform 0.8s ease-out, filter 0.8s ease-out;
        opacity: 0;
        transform: scale(0.6);
        filter: blur(7px);
      }
      .reviews-fade-in-swiper .swiper-slide-active {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
      }
      .reviews-fade-in-swiper .swiper-slide-prev,
      .reviews-fade-in-swiper .swiper-slide-next {
        opacity: 0;
        transform: scale(0.6);
        filter: blur(7px);
      }
      .reviews-fade-in-swiper .swiper-slide .review-text,
      .reviews-fade-in-swiper .swiper-slide .review-name,
      .reviews-fade-in-swiper .swiper-slide .review-title,
      .reviews-fade-in-swiper .swiper-slide .avatar-ring {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.4s ease-out, transform 0.4s ease-out;
      }
      .reviews-fade-in-swiper .swiper-slide-active .review-text,
      .reviews-fade-in-swiper .swiper-slide-active .review-name,
      .reviews-fade-in-swiper .swiper-slide-active .review-title,
      .reviews-fade-in-swiper .swiper-slide-active .avatar-ring {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    // Cleanup function
    return () => {
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);
  const handleSlideChangeTransitionStart = (swiper: SwiperType) => {
    // Clear all animations and reset content immediately
    const slides = swiper.slides;
    slides.forEach((slide: Element) => {
      const elements = slide.querySelectorAll('.review-text, .review-name, .review-title, .avatar-ring');
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.animation = 'none';
        (el as HTMLElement).style.transition = 'none';
        (el as HTMLElement).style.opacity = '0';
        (el as HTMLElement).style.transform = 'translateY(30px)';
      });
    });
  };
  const handleSlideChangeTransitionEnd = (swiper: SwiperType) => {
    // Animate content after slide transition is complete
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (activeSlide) {
      const elements = activeSlide.querySelectorAll('.review-text, .review-name, .review-title, .avatar-ring');

      // Reset transition property
      elements.forEach((el: Element) => {
        (el as HTMLElement).style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
      });

      // Stagger the animations
      elements.forEach((el: Element, index: number) => {
        setTimeout(() => {
          (el as HTMLElement).style.opacity = '1';
          (el as HTMLElement).style.transform = 'translateY(0)';
        }, index * 100);
      });
    }
  };
  return (
    <RevealAnimation delay={0.2}>
      <div className="relative">
        <Swiper
          className="reviews-fade-in-swiper"
          effect="fade"
          slidesPerView={1}
          spaceBetween={70}
          fadeEffect={{
            crossFade: true,
          }}
          modules={[Autoplay, Navigation, EffectFade, Pagination]}
          speed={1000}
          autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
          loop={true}
          navigation={{
            nextEl: '.reviews-fade-in-next',
            prevEl: '.reviews-fade-in-prev',
          }}
          pagination={{
            el: '.reviews-fade-in-pagination',
            clickable: true,
            dynamicBullets: true,
          }}
          onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
          onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}>
          <div className="swiper-wrapper">
            {slides.map((slide) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div className="dark:bg-background-8 relative min-h-[470px] w-full rounded-4xl bg-white">
                  <div className="absolute -top-14 left-1/2 mx-auto w-full max-w-[464px] -translate-x-1/2 px-6 text-center sm:px-0">
                    <figure className="avatar-ring bg-background-1 dark:bg-background-8 dark:border-background-5 mx-auto mb-4 size-28 overflow-hidden rounded-full border-4 border-white sm:mb-[42px]">
                      <Image
                        src={slide.image}
                        width={112}
                        height={112}
                        alt="avatar"
                        className="size-full object-cover"
                      />
                    </figure>
                    <p className="review-text text-tagline-1 text-secondary dark:text-accent leading-[27px] font-medium md:text-lg">
                      &quot;{slide.text}&quot;
                    </p>
                    {(slide as typeof slide & { metric?: string }).metric && (
                      <span className="inline-block mt-4 px-4 py-1.5 rounded-full bg-primary-500/10 text-primary-500 text-sm font-semibold">
                        {(slide as typeof slide & { metric?: string }).metric}
                      </span>
                    )}
                    <div className="bg-stroke-2 dark:bg-stroke-6 mx-auto my-7 h-px w-full origin-center" />
                    <div>
                      <h3 className="review-name text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                        {slide.name}
                      </h3>
                      <p className="review-title text-tagline-2">{slide.position}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-14 left-1/2 -translate-x-1/2">
                    <LinkButton
                      href="/testimonial"
                      className="btn hover:btn-primary dark:btn-transparent btn-secondary btn-md">
                      Read success stories
                    </LinkButton>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
          {/* Navigation buttons */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 items-center justify-between px-4 sm:px-16">
            <button className="reviews-fade-in-prev pointer-events-auto" aria-label="Previous testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                <path
                  d="M14.1875 17L9.1875 12L14.1875 7"
                  className="dark:stroke-accent stroke-[#292929]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="reviews-fade-in-next pointer-events-auto" aria-label="Next testimonial">
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
                <path
                  d="M10.8125 17L15.8125 12L10.8125 7"
                  className="dark:stroke-accent stroke-[#292929]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          {/* Pagination dots */}
          <div className="reviews-fade-in-pagination" />
        </Swiper>
      </div>
    </RevealAnimation>
  );
};

export default FadeTestimonial;
