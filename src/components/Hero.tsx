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
      /* Run heavy entrance animation only on screens ≥ 768 px  */
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
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
            statsRef.current
              ? statsRef.current.querySelectorAll(".stat-chip")
              : [],
            {
              y: 20,
              opacity: 0,
              stagger: 0.15,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.4"
          );
      });

      /* Gentle floating motion for decorative shapes on ≥ 640 px  */
      mm.add("(min-width: 640px)", () => {
        gsap.to(".floaty", {
          y: 15,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          duration: 3,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative overflow-hidden bg-[#070d23] text-white"
    >
      {/* Decorative shapes (skip on very small screens) */}
      <div className="pointer-events-none absolute inset-0 hidden sm:block">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-indigo-600/30 blur-3xl floaty" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl floaty" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-28 pb-12 sm:px-6 md:gap-20 md:px-12 lg:grid-cols-2 lg:items-center lg:gap-24 lg:pt-36 lg:pb-16">
        {/* Copy block */}
        <div>
          <h1
            ref={headingRef}
            className="font-[Times_New_Roman] leading-tight text-[34px] sm:text-4xl md:text-5xl lg:text-[60px]"
          >
            We Help 50+ Dental Clinics <br />
            Get <span className="text-cyan-300">3X More</span> Patient Leads
          </h1>

          <div ref={subRef} className="mt-6 max-w-md sm:mt-8">
            <h2 className="font-[Times_New_Roman] text-2xl sm:text-3xl mb-3">
              You Could Too
            </h2>
            <p className="text-sm leading-relaxed text-gray-200">
              Grow your clinic with proven patient‑acquisition strategies,
              conversion‑focused funnels and marketing automation. Start today
              and see how quickly we can fill your appointment calendar.
            </p>
            <button className="mt-8 rounded-full bg-white px-8 py-3 text-sm font-medium text-[#070d23] transition hover:bg-gray-200 shadow-lg hover:shadow-xl">
              Book Now
            </button>
          </div>

          {/* Stats chips */}
          <div
            ref={statsRef}
            className="mt-10 flex flex-wrap gap-3 text-xs font-medium sm:gap-4"
          >
            {[
              { k: "100+ Websites", d: "Built & Optimised" },
              { k: "3.2x ROI", d: "Average Campaign Return" },
              { k: "Top 3", d: "Google Maps in 90 Days" },
            ].map((s) => (
              <div
                key={s.k}
                className="stat-chip rounded-xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <p className="font-[Times_New_Roman] text-base">{s.k}</p>
                <p className="tracking-wide text-[10px] text-gray-300">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          ref={imgRef}
          className="relative h-60 w-full sm:h-72 md:h-96 lg:h-[520px]"
        >
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-full w-full rounded-2xl border-2 border-white/20" />
          <Image
            src={heroImg}
            alt="Dental marketing growth chart on tablet"
            fill
            priority
            className="rounded-2xl object-cover shadow-2xl"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#070d23]/30 via-transparent to-[#1d2d74]/20" />
        </div>
      </div>
    </section>
  );
}
