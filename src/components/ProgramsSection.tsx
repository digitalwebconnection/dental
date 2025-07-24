// components/ProgramsSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const programs = [
  {
    title: "Primary Care",
    description:
      "Our primary care program emphasizes preventive care, routine check-ups, and early intervention to keep you healthy and address any health concerns proactively.",
  },
  {
    title: "Specialty Care",
    description:
      "Our specialty care services cover a wide range of medical specialties, ensuring that you receive expert care tailored to your specific health needs.",
  },
  {
    title: "Emergency Care",
    description:
      "In emergencies, our dedicated team is available 24/7 to provide urgent medical attention and care when you need it most.",
  },
  {
    title: "Mental Health Support",
    description:
      "We offer comprehensive mental health support services to address emotional well-being, providing counseling, therapy, and support for mental health challenges.",
  },
  {
    title: "Wellness Programs",
    description:
      "Our wellness programs focus on holistic health, offering fitness classes, nutritional guidance, and lifestyle coaching to promote overall well-being.",
  },
  {
    title: "Maternal Care",
    description:
      "Our maternal care program provides comprehensive care for expectant mothers, including prenatal care, childbirth support, and postpartum services to ensure a healthy pregnancy and delivery.",
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

      {/* Curved white separator */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          {/* <path fill="#ffffff" d="M0 80 Q720 160 1440 80 L1440 160 0 160Z" /> */}
        </svg>
      </div>
    </section>
  );
}
