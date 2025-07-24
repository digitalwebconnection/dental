// components/About.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import aboutImg from "../../public/chairs-arranged-in-medical-building-961288374-5c0ac61146e0fb0001e2e5a8.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const imageWrapRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      tl.from(headingRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })
        .from(
          imageWrapRef.current,
          {
            x: -80,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.2"
        )
        .from(
          textRef.current,
          {
            x: 80,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#070d23] text-white py-24">
      <div className="relative z-10 w-full max-w-7xl mx-auto lg:px-20">
        {/* Heading */}
        <h2
          ref={headingRef}
          className="font-[Times_New_Roman] text-4xl md:text-5xl lg:text-6xl leading-tight"
        >
          About Seves Healthcare
        </h2>

        {/* Image + Text */}
        <div className="mt-10 grid lg:grid-cols-[560px_1fr] gap-y-6 lg:gap-x-20 items-start lg:-ml-12">
          {/* Image */}
          <div ref={imageWrapRef} className="relative w-full">
            <div className="w-full h-[340px] md:h-[380px] lg:h-[420px] relative overflow-hidden">
              <Image
                src={aboutImg}
                alt="About Seves Healthcare"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div ref={textRef} className="max-w-lg lg:pl-24">
            <p className="text-base leading-relaxed">
              At Seves, we are passionate about delivering high-quality
              healthcare services that make a difference in people&apos;s lives.
              Our focus is on promoting wellness, preventing illness, and
              ensuring access to comprehensive medical care for all.
            </p>
            <button className="mt-10 rounded-full bg-white text-[#070d23] px-8 py-3 text-sm font-medium hover:bg-gray-200 transition">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
