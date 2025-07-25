"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import heroImg from "../../public/checklist-business-performance-monitoring-concept-600nw-2503514245.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const subRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null); 
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Intro animation (no scroll trigger – plays immediately)
      const tl = gsap.timeline();
      tl.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          subRef.current,
          { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" },
          "-=0.3"
        )
        .from(
          imgRef.current,
          { x: 120, opacity: 0, duration: 0.9, ease: "power3.out" },
          "-=0.4"
        )
        .from(
          statsRef.current ? statsRef.current.querySelectorAll(".stat-chip") : [],
          {
            y: 20,
            opacity: 0,
            stagger: 0.15,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.4"
        );

      // Floating subtle motion for image & shapes
      gsap.to(".floaty", {
        y: 15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        duration: 3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#070d23] text-white"
      id="home"
    >
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 w-[380px] h-[380px] rounded-full bg-indigo-600/30 blur-3xl floaty" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-cyan-500/30 blur-3xl floaty" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 pt-36 pb-16 grid lg:grid-cols-2 gap-30 items-center relative">
        {/* Left */}
        <div>
          <h1
            ref={headingRef}
            className="font-[Times_New_Roman] leading-tight text-4xl sm:text-5xl lg:text-[60px]"
          >
            We Help 50+ Dental Clinics <br />
            Get <span className="text-cyan-300">3X More</span> Patient Leads
          </h1>

            <div ref={subRef} className="mt-8 max-w-md">
              <h2 className="font-[Times_New_Roman] text-3xl mb-4">
                You Could Too
              </h2>
              <p className="text-sm text-gray-200 leading-relaxed">
                Grow your clinic with proven patient‑acquisition strategies,
                conversion‑focused funnels and marketing automation. Start today
                and see how quickly we can fill your appointment calendar.
              </p>
              <button className="mt-8 rounded-full bg-white text-[#070d23] px-10 py-3 text-sm font-medium hover:bg-gray-200 transition shadow-lg hover:shadow-xl">
                Book Now
              </button>
            </div>

          {/* Floating stats */}
          <div
            ref={statsRef}
            className="mt-12 flex flex-wrap gap-4 text-xs font-medium"
          >
            {[
              { k: "100+ Websites", d: "Built & Optimised" },
              { k: "3.2x ROI", d: "Average Campaign Return" },
              { k: "Top 3", d: "Google Maps in 90 Days" },
            ].map((s) => (
              <div
                key={s.k}
                className="stat-chip rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 px-4 py-3"
              >
                <p className="font-[Times_New_Roman] text-base">
                  {s.k}
                </p>
                <p className="text-[10px] tracking-wide text-gray-300">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imgRef}
          className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px]"
        >
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/20 rounded-2xl pointer-events-none" />
          <Image
            src={heroImg}
            alt="Dental marketing growth"
            fill
            priority
            className="object-cover rounded-2xl shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#070d23]/30 via-transparent to-[#1d2d74]/20" />
        </div>
      </div>
    </section>
  );
}
