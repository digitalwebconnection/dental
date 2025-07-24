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
      // Timeline for text
      gsap.timeline({
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

      // Image animation
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
      className="relative bg-[#070d23] text-white overflow-hidden min-h-screen flex items-center"
    >
      {/* Right-side background image */}
      <div
        ref={imageRef}
        className="absolute inset-y-10 right-2 w-[620px] h-[650px] hidden lg:block"
      >
        <Image
          src={heroImg}
          alt="Healthcare"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Optional dark overlay */}
      <div className="absolute inset-y-0 right-0 w-1/2 hidden lg:block bg-[#070d23]/10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl py-24">
          <h1
            ref={headingRef}
            className="font-[Times_New_Roman] leading-tight text-4xl sm:text-5xl lg:text-[68px]"
          >
            Transforming <br /> Healthcare <br /> Experience for You
          </h1>

          <div ref={contentRef} className="mt-16">
            <h2 className="font-[Times_New_Roman] text-3xl mb-4">
              Discover Seves Health
            </h2>
            <p className="text-sm text-gray-200 leading-relaxed">
              Welcome to Seves, where we prioritize your health and well-being.
              Our dedicated team is committed to providing exceptional care and
              innovative solutions tailored to your needs.
            </p>
            <button className="mt-8 rounded-full bg-white text-[#070d23] px-8 py-3 text-sm font-medium hover:bg-gray-200 transition">
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
