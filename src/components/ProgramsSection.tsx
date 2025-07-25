// components/ProgramsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const programs = [
  {
    title: "Website Design That Converts",
    description:
      "Built over 100+ dental websites – mobile-first, SEO-ready, lightning-fast. Integrated with online booking, reviews, WhatsApp & Google Maps.",
  },
  {
    title: "Local SEO That Delivers",
    description:
      "Appear in the Top 3 on Google Maps within 90 days and get found for searches like “emergency dentist London” or “Invisalign near me”.",
  },
  {
    title: "Google Ads & Meta Campaigns",
    description:
      "3.2x average ROI from ad campaigns, generating 30–70 new patient enquiries per month through PPC.",
  },
  {
    title: "Performance Reporting",
    description:
      "Monthly reports showing traffic, calls and bookings with 100% measurable ROI.",
  },
  {
    title: "Affordable Packages",
    description:
      "Plans starting from just £199/month with 24–48 hour turnaround on content and updates.",
  },
  {
    title: "Compliance & Real-Time Support",
    description:
      "Full UK data/GDPR compliance plus real-time support via our UK number.",
  },
];

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Floating blobs
      gsap.to(".program-blob", {
        y: 30,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 6,
        stagger: 0.5,
      });

      // Heading animation
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Underline animation
      gsap.from(".heading-underline", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.6,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Card animation
      gsap.from(".program-card", {
        opacity: 0,
        y: 50,
        scale: 1.5,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white pt-28 pb-40 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#070d23,#1d2d74)" }}
      id="programs"
    >
      {/* Decorative Blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="program-blob absolute top-0 -left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full" />
        <div className="program-blob absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-16">
        <div className="mb-14">
          <h2
            ref={headingRef}
            className="font-[Times_New_Roman] text-4xl md:text-5xl lg:text-6xl"
          >
            Our Specialized Programs
          </h2>
          <div className="heading-underline mt-2 h-[3px] w-156 bg-white/70 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {programs.map((p, i) => (
            <div
              key={p.title}
              className="program-card group relative p-[1px] rounded-2xl bg-gradient-to-br from-white/20 to-white/0 transform-gpu"
            >
              <div className="h-full rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 p-6 flex flex-col transition duration-300 group-hover:shadow-2xl group-hover:scale-[1.09]">
                <div className="flex items-start justify-between">
                  <h3 className="font-[Times_New_Roman] text-2xl mb-3">
                    {p.title}
                  </h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-200 flex-1">
                  {p.description}
                </p>
                <div className="mt-6">
                  <span className="text-[11px] uppercase tracking-wide text-gray-300 group-hover:text-white transition-colors">
                    Learn More →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
