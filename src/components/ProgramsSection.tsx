// components/ProgramsSection.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const programs = [
  {
    title: 'Website Design That Converts',
    description:
      'Built over 100+ dental websites – mobile-first, SEO-ready, lightning-fast. Integrated with online booking, reviews, WhatsApp & Google Maps.',
  },
  {
    title: 'Local SEO That Delivers',
    description:
      'Appear in the Top 3 on Google Maps within 90 days and get found for searches like “emergency dentist London” or “Invisalign near me”.',
  },
  {
    title: 'Google Ads & Meta Campaigns',
    description:
      '3.2x average ROI from ad campaigns, generating 30–70 new patient enquiries per month through PPC.',
  },
  {
    title: 'Performance Reporting',
    description:
      'Monthly reports showing traffic, calls and bookings with 100% measurable ROI.',
  },
  {
    title: 'Affordable Packages',
    description:
      'Plans starting from just £199/month with 24–48 hour turnaround on content and updates.',
  },
  {
    title: 'Compliance & Real‑Time Support',
    description:
      'Full UK data/GDPR compliance plus real-time support via our UK number.',
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Floating blobs (skip on < 640 px)
      gsap.matchMedia().add('(min-width: 640px)', () => {
        gsap.to('.program-blob', {
          y: 30,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          duration: 6,
          stagger: 0.5,
        });
      });

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      gsap.from('.heading-underline', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });

      // Card animation — gentler on phones
      gsap.matchMedia().add(
        {
          isMobile: '(max-width: 767px)',
          isDesktop: '(min-width: 768px)',
        },
        (context) => {
          const { isMobile } = context.conditions as { isMobile: boolean };
          gsap.from('.program-card', {
            opacity: 0,
            y: isMobile ? 30 : 50,
            scale: isMobile ? 1 : 1.5,
            duration: 0.8,
            ease: 'power4.out',
            stagger: 0.2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              once: true,
            },
          });
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="programs"
      className="relative overflow-hidden bg-gradient-to-b from-[#070d23] to-[#1d2d74] pt-24 pb-32 text-white sm:pt-28 sm:pb-40"
    >
      {/* Decorative blobs (hidden on xs) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="program-blob absolute -left-16 -top-10 hidden h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl sm:block md:h-72 md:w-72" />
        <div className="program-blob absolute bottom-0 right-0 hidden h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl sm:block md:h-80 md:w-80" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        {/* Heading */}
        <div className="mb-12 sm:mb-14">
          <h2
            ref={headingRef}
            className="font-[Times_New_Roman] text-[28px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Our Specialized Programs
          </h2>
          <div className="heading-underline mt-2 h-[3px] w-40 rounded-full bg-white/70 sm:w-56 md:w-72" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="program-card group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/20 to-white/0"
            >
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm transition duration-300 group-hover:scale-[1.05] group-hover:shadow-2xl">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-[Times_New_Roman] text-xl leading-tight sm:text-2xl">
                    {p.title}
                  </h3>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-gray-200">
                  {p.description}
                </p>
                <span className="mt-6 text-[11px] uppercase tracking-wide text-gray-300 transition-colors group-hover:text-white">
                  Learn More →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
