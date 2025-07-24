"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import heroImg from "../../public/image1.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        })
        .from(headingRef.current, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          contentRef.current,
          {
            y: 40,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3"
        );

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          x: 120,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070d23] text-white overflow-hidden min-h-screen flex items-center px-5 lg:px-20"
    >
  
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block bg-[#070d23]/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl py-24">
          <h1
            ref={headingRef}
            className="font-[Times_New_Roman] leading-tight text-4xl sm:text-5xl lg:text-[68px]"
          >
            We Help 50+ Dental Clinics
            <br /> Get <span className="whitespace-nowrap">3X More</span> Patient Leads
          </h1>

          <div ref={contentRef} className="mt-16">
            <h2 className="font-[Times_New_Roman] text-3xl mb-4">
              You Could Too
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Grow your clinic with proven patient‑acquisition strategies,
              conversion‑focused funnels and marketing automation. Start today
              and see how quickly we can fill your appointment calendar.
            </p>
            <button className="mt-8 rounded-full bg-white text-[#070d23] px-8 py-3 text-sm font-medium hover:bg-gray-200 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
         {/* Right-side image */}
      <div
        ref={imageRef}
        className=" inset-y-10 right-2 w-[100%] h-[550px] "
      >
        <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/20 rounded-2xl pointer-events-none" />
        <Image
          src={heroImg}
          alt="Dental marketing growth"
          fill
          className="object-cover rounded-2xl shadow-4xl"
          priority
        />
      </div>
    </section>
  );
}
