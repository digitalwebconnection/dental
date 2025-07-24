// components/ProgramsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Content taken from your document
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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".program-item", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
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
      className="relative bg-[#1d2d74] text-white pt-20 pb-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        <h2 className="font-[Times_New_Roman] text-4xl md:text-5xl lg:text-6xl mb-12">
          Our Specialized Programs
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-24">
          {programs.map((p) => (
            <div key={p.title} className="program-item max-w-xs">
              <h3 className="font-[Times_New_Roman] text-2xl mb-4">{p.title}</h3>
              <p className="text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        />
      </div>
    </section>
  );
}
