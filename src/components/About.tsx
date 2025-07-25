"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import aboutImg from "../../public/1.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const featuresRef = useRef<HTMLLIElement[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgWrapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // Image + card entrance
      gsap
        .timeline({
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 70%",
            once: true,
          },
        })
        .from(imgWrapRef.current, {
          x: -80,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          cardRef.current,
          { x: 80, opacity: 0, duration: 0.8, ease: "power3.out" },
          "-=0.5"
        )
        .from(
          featuresRef.current,
          {
            opacity: 0,
            y: 20,
            stagger: 0.15,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.4"
        );
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  const features = [
    {
      title: "High‑Converting Websites",
      desc: "100+ custom builds – mobile‑first & SEO‑ready.",
    },
    {
      title: "Local SEO Wins",
      desc: "Clients reach Top 3 on Google Maps within 90 days.",
    },
    {
      title: "Paid Ads Growth",
      desc: "Google & Meta campaigns delivering 3.2x ROI.",
    },
    {
      title: "Transparent Reporting",
      desc: "Track every lead & pound with monthly dashboards.",
    },
  ];

  return (
    <section
      ref={aboutRef}
      className="relative bg-[#070d23] text-white py-32 overflow-hidden"
      id="about"
    >
      {/* Soft shapes */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-indigo-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div ref={imgWrapRef} className="relative">
          <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/20 rounded-2xl pointer-events-none" />
          <div className="relative w-full h-[420px] rounded-2xl overflow-hidden">
            <Image
              src={aboutImg}
              alt="Dental marketing results"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#070d23]/40 via-transparent to-[#1d2d74]/30" />
          </div>
        </div>

        {/* Card */}
        <div
          ref={cardRef}
          className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-xl"
        >
          <h2 className="font-[Times_New_Roman] text-4xl md:text-5xl mb-6">
            Why Dentists Choose Us
          </h2>
          <p className="text-sm leading-relaxed text-gray-200 max-w-lg">
            We help London dental clinics scale patient enquiries with a
            conversion‑focused website and performance marketing engine.
          </p>

          <ul className="mt-8 space-y-5">
            {features.map((f, i) => (
              <li
                key={f.title}
                ref={(el) => {
                  if (el) featuresRef.current[i] = el;
                }}
                className="flex gap-4 items-start"
              >
                <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#070d23] text-xs font-semibold">
                  ✓
                </span>
                <div>
                  <p className="font-semibold">{f.title}</p>
                  <p className="text-xs text-gray-300">{f.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-10 rounded-full bg-white text-[#070d23] px-8 py-3 text-sm font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5">
            Book a Free Strategy Call
          </button>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 text-center text-xs">
            <div>
              <p className="font-[Times_New_Roman] text-2xl">100+</p>
              <p className="text-gray-300">Websites Built</p>
            </div>
            <div>
              <p className="font-[Times_New_Roman] text-2xl">3.2x</p>
              <p className="text-gray-300">Average ROI</p>
            </div>
            <div>
              <p className="font-[Times_New_Roman] text-2xl">90 Days</p>
              <p className="text-gray-300">Map Rank Gains</p>
            </div>
          </div>

          {/* Accent bar */}
          {/* <div className="absolute -top-3 left-10 h-2 w-24 rounded-full bg-white/60" />s */}
        </div>
      </div>
    </section>
  );
}
