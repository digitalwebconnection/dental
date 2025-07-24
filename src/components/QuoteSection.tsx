// components/QuoteSection.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import quoteImg from "../../public/Older_man_and_female_nurse_walking_together_5f72422cba.webp"; // change to your image
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function QuoteSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
      });
      gsap.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#070d23] text-white pt-16 pb-40 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-7 lg:px-10">
        {/* Top row with image */}
        <div className="grid lg:grid-cols-2 gap-10">
          <div ref={imgRef} className="relative h-[430px] w-[80%]">
            <Image
              src={quoteImg}
              alt="Therapy"
              fill
              priority
              className="object-cover "
            />
          </div>
          {/* Empty right side so image stands alone like screenshot */}
          {/* <div className="hidden lg:block" /> */}
        </div>

        {/* Quote row */}
        <div className="mt-8 grid lg:grid-cols-2 gap-10">
          <div className="hidden lg:block" />
          <div ref={textRef} className="max-w-2xl">
            <h3 className="font-[Times_New_Roman] mb-4">Quote</h3>
            <p className="font-[Times_New_Roman] text-xl leading-relaxed">
              At Seves, we believe that good health is the foundation of a happy
              life. Our goal is to provide compassionate and personalized care to
              all our patients, ensuring their well-being and comfort every step
              of the way. With a dedicated team of healthcare professionals, we
              are committed to making a positive impact on the lives of those we
              serve.
            </p>
          </div>
        </div>
      </div>

      {/* Curved bottom shape */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          <path
            fill="#1d2d74"
            d="M0 80 Q720 160 1440 80 L1440 160 0 160Z"
          />
        </svg>
      </div>
    </section>
  );
}
