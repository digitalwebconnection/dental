// components/BenefitsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Updated content from the document
const benefits = [
  { title: "7+ Years Experience", icon: InnovationIcon },
  { title: "Real-Time UK Support", icon: CompassionIcon },
  { title: "Affordable from £199/mo", icon: ExpertiseIcon },
  { title: "24–48h Turnaround", icon: GlobeIcon },
  { title: "GDPR-Compliant", icon: QualityIcon },
  { title: "1,200+ Leads Generated (2024)", icon: DiamondIcon },
];

export default function BenefitsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(
      () => {
        gsap.from(".benefit-item", {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      },
      sectionRef
    );
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#e3e4eb] text-[#1d1f28] pt-40 pb-40 overflow-hidden"
    >
      {/* Top curved wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <path fill="#1d2d74" d="M0 80 Q720 0 1440 80 L1440 0 0 0Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-10 lg:px-16">
        <h2 className="text-center font-[Times_New_Roman] text-4xl md:text-5xl lg:text-6xl mb-24">
          Benefits
        </h2>

        {/* Top row */}
        <div className="grid md:grid-cols-3 gap-y-24 text-center mb-12">
          {benefits.slice(0, 3).map(({ title, icon: Icon }) => (
            <div key={title} className="benefit-item flex flex-col items-center">
              <Icon />
              <p className="mt-6 font-[Times_New_Roman] text-lg">{title}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="max-w-[90%] mx-auto border-t border-[#1d1f28] my-4" />

        {/* Bottom row */}
        <div className="grid md:grid-cols-3 gap-y-24 text-center mt-12">
          {benefits.slice(3).map(({ title, icon: Icon }) => (
            <div key={title} className="benefit-item flex flex-col items-center">
              <Icon />
              <p className="mt-6 font-[Times_New_Roman] text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom curved wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <path fill="#1d2d74" d="M0 80 Q720 160 1440 80 L1440 160 0 160Z" />
        </svg>
      </div>
    </section>
  );
}

/* ---------- Icons (unchanged) ---------- */
function baseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      stroke="#1d2d74"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
}
function InnovationIcon() {
  return baseIcon({
    children: (
      <>
        <circle cx="28" cy="28" r="18" />
        <path d="M28 10v8M28 38v8M10 28h8M38 28h8" />
        <circle cx="28" cy="28" r="6" />
      </>
    ),
  });
}
function CompassionIcon() {
  return baseIcon({
    children: (
      <>
        <circle cx="28" cy="28" r="18" />
        <path d="M28 16v24M16 28h24M21 21l14 14M35 21L21 35" />
      </>
    ),
  });
}
function ExpertiseIcon() {
  return baseIcon({
    children: (
      <>
        <circle cx="28" cy="28" r="18" />
        <path d="M28 16c6 6 6 18 0 24c-6-6-6-18 0-24Z" />
        <path d="M16 28c6-6 18-6 24 0c-6 6-18 6-24 0Z" />
      </>
    ),
  });
}
function GlobeIcon() {
  return baseIcon({
    children: (
      <>
        <circle cx="28" cy="28" r="18" />
        <path d="M10 28h36M28 10c6 6 6 30 0 36c-6-6-6-30 0-36Z" />
      </>
    ),
  });
}
function QualityIcon() {
  return baseIcon({
    children: (
      <>
        <circle cx="28" cy="28" r="18" />
        <circle cx="28" cy="28" r="8" />
        <path d="M28 10v10M28 36v10M10 28h10M36 28h10" />
      </>
    ),
  });
}
function DiamondIcon() {
  return baseIcon({
    children: (
      <>
        <rect x="20" y="20" width="16" height="16" transform="rotate(45 28 28)" />
        <rect x="24" y="24" width="8" height="8" transform="rotate(45 28 28)" />
      </>
    ),
  });
}
