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
      gsap.fromTo(
        imageRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center 50%",
            scrub: 1,
          },
        }
      );

      gsap.from(cardRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      gsap.to(cardRef.current, {
        y: "+=10",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 4,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-32">
      {/* Background layers */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#070d23] via-[#101b38] to-[#1d2d74]" />
        <div className="absolute -top-10 left-1/3 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_60%)]" />

        {/* Wave pattern overlay */}
        <div className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="wavePattern"
                x="0"
                y="0"
                width="160"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M0 20 Q40 0 80 20 T160 20 V40 H0 Z"
                  fill="rgba(255,255,255,0.08)"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#wavePattern)" />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-0">
        {/* Image */}
        <div
          ref={imageRef}
          className="relative w-full lg:w-[80%] h-[480px] rounded-2xl overflow-hidden shadow-xl"
        >
          <Image
            src={quoteImg}
            alt="Caring dental support"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#070d23]/50 via-transparent to-[#1d2d74]/40" />
        </div>

        {/* Quote Card */}
        <div className="flex justify-end mt-12">
          <div
            ref={cardRef}
            className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-10 shadow-2xl max-w-4xl lg:me-[130px]"
          >
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
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1d2d74" />
              <stop offset="100%" stopColor="#070d23" />
            </linearGradient>
          </defs>
          {/* <path
            fill="url(#waveGradient)"
            d="M0 80 Q720 160 1440 80 L1440 160 0 160Z"
          /> */}
        </svg>
      </div>
    </section>
  );
}
