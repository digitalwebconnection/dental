// components/TestimonialsSection.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import topImg from "../../public/image2.jpg"; // use your banner image

const testimonials = [
  {
    quote:
      "We went from 12 to 50+ new enquiries per month — and our GMB is now ranked #1.",
    author: "Dr. Ria Patel, SmileBright Dental",
  },
  {
    quote:
      "Their team redesigned our old site, ran ads, and within 8 weeks we saw a 212 % traffic boost.",
    author: "Dr. James Hunt, Bayswater Dental",
  },
  {
    quote:
      "1,200+ patient leads generated in 2024 and a 3.5× conversion-rate lift — the numbers speak for themselves.",
    author: "2024 Performance Report",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-item", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative">
      {/* Top full-width image */}
      <div className="w-full h-[340px] lg:h-[660px] relative border-y-4 border-[#1d2d74]">
        <Image
          src={topImg}
          alt="Client success banner"
          fill
          priority
          className="object-cover"
        />
      </div>


      {/* Blue block overlapping image */}
      <div className="-mt-20 relative z-10 bg-[#1d2d74] text-white px-8 lg:px-16 pt-24 pb-40 overflow-hidden">
        <h2 className="font-[Times_New_Roman] text-4xl md:text-5xl mb-15 text-center">
          Testimonials
        </h2>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`testimonial-item ${i === 0 ? "lg:pr-8" : ""}`}
            >
              {i === 0 && (
                <></>
              )}
              <p className="font-[Times_New_Roman] text-lg leading-relaxed mb-6">
                {t.quote}
              </p>
              <p className="text-sm">{t.author}</p>
            </div>
          ))}
        </div>

        {/* Bottom curved wave */}
        <div className="absolute bottom-0 left-0 w-full pointer-events-none">
          <svg
            viewBox="0 0 1440 160"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[160px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0 80 Q720 160 1440 80 L1440 160 0 160Z"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
