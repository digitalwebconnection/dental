// components/About.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import aboutImg from "../../public/chairs-arranged-in-medical-building-961288374-5c0ac61146e0fb0001e2e5a8.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
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
    <section
      ref={sectionRef}
      className="relative bg-[#070d23] text-white py-28 overflow-hidden"
    >
      {/* Decorative blurred circles (desktop only) */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-indigo-600/30 rounded-full blur-3xl hidden md:block" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl hidden md:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Card */}
          <div className="about-fade order-2 lg:order-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-10 border border-white/10 shadow-lg relative">
              <h2 className="font-[Times_New_Roman] text-4xl md:text-5xl mb-6">
                Why Dentists Choose Us
              </h2>
              <p className="text-sm leading-relaxed text-gray-200">
                We help London dental clinics scale patient enquiries with a
                conversion‑focused website and performance marketing engine.
              </p>

              <ul className="mt-6 space-y-4">
                {[
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
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#070d23] text-xs font-semibold">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-xs text-gray-300">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="mt-8 rounded-full bg-white text-[#070d23] px-8 py-3 text-sm font-medium transition-all duration-300 hover:bg-gray-200 hover:shadow-lg hover:-translate-y-0.5">
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
            </div>
          </div>

          {/* Image */}
          <div className="about-fade relative order-1 lg:order-2">
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-white/20 rounded-2xl pointer-events-none" />
            <div className="relative w-full h-[360px] md:h-[480px]">
              <Image
                src={aboutImg}
                alt="Dental marketing results"
                fill
                priority
                className="object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#070d23]/30 via-transparent to-[#1d2d74]/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
