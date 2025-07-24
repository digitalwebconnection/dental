// components/QuoteSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import quoteImg from "../../public/Older_man_and_female_nurse_walking_together_5f72422cba.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
      gsap.from(cardRef.current, {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-32 "
        style={{ background: "linear-gradient(90deg,#070d23,#1d2d74)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-0  py-15 gap-16 items-center">
          {/* Image block */}
          <div ref={imageRef} className="relative w-full lg:w-[80%] h-[480px] rounded-2xl overflow-hidden">
            <Image
              src={quoteImg}
              alt="Caring dental support"
              fill
              priority
              className="object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-tr from-[#070d23]/60 via-transparent to-[#1d2d74]/40" /> */}
          </div>
        </div>


        {/* Quote Card */}
        <div className="flex justify-end items-end-safe">
          <div
            ref={cardRef}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-2xl max-w-4xl mx-auto me-[130px]"
          > 
            {/* Accent */}
            {/* <div className="absolute -top-4 left-8 h-2 w-20 rounded-full bg-white/60" /> */}
            <span className="text-5xl font-serif text-white/40 leading-none select-none">
              “
            </span>
            <h3 className="font-[Times_New_Roman] text-xl tracking-wide uppercase text-white/70 mb-4">
              Our Philosophy
            </h3>
            <p className="font-[Times_New_Roman] text-2xl leading-relaxed text-white">
              At Seves, we believe a healthy smile shapes confidence and quality
              of life. Our mission is to deliver compassionate, personalised care
              with measurable results — blending clinical precision with a human
              touch.
            </p>
            <p className="mt-6 text-sm text-white/70">— The Seves Dental Team</p>
          </div>
        </div>

        {/* Bottom wave */}
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
    </>
  );
}
