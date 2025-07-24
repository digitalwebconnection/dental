// components/ByTheNumbers.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Stat {
  id: string;
  label: string;
  value: string;        // final display (with %,+,/ etc.)
  numeric?: number;     // only for count‑up
  suffix?: string;
}

const stats: Stat[] = [
  { id: "s1", label: "On-Time Appointment Rate", value: "99%", numeric: 99, suffix: "%" },
  { id: "s2", label: "Emergency Care Availability", value: "24/7" },
  { id: "s3", label: "Years of Exceptional Service", value: "20+", numeric: 20, suffix: "+" },
  { id: "s4", label: "Patients Treated Annually", value: "50,000+", numeric: 50000, suffix: "+" },
  { id: "s5", label: "Average Waiting Time for Telemedicine Consultations", value: "5 Min.", numeric: 5, suffix: " Min." },
  { id: "s6", label: "Experienced Medical Professionals", value: "250+", numeric: 250, suffix: "+" },
  { id: "s7", label: "Accuracy in Diagnostic Results", value: "98%", numeric: 98, suffix: "%" },
  { id: "s8", label: "Patient Satisfaction Rate", value: "95%", numeric: 95, suffix: "%" },
];

export default function ByTheNumbers() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Fade/slide in
      gsap.from(".number-item", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          once: true,
        },
      });

      // Count-up for items with data-count
      const counters = gsap.utils.toArray<HTMLSpanElement>(".countup");
      counters.forEach((el) => {
        const end = Number(el.dataset.to);
        if (!end) return;
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: end,
            duration: 1.5,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
            onUpdate() {
              el.innerText = Math.floor(Number(el.innerText)).toLocaleString();
            },
            onComplete() {
              el.innerText = end.toLocaleString();
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#1d2d74] text-white pt-48 pb-32 overflow-hidden"
    >
      {/* Curved top wave */}
      <div className="absolute top-0 left-0 w-full pointer-events-none">
        <svg
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[160px]"
          preserveAspectRatio="none"
        >
          {/* <path fill="#e3e4eb" d="M0 80 Q720 0 1440 80 L1440 0 0 0Z" /> */}
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <h2 className="text-center font-[Times_New_Roman] text-4xl md:text-5xl lg:text-6xl mb-20">
          By the Numbers
        </h2>

        <div className="grid md:grid-cols-4 gap-y-16 text-center">
          {stats.map((stat) => (
            <div key={stat.id} className="number-item flex flex-col items-center">
              <div className="font-[Times_New_Roman] text-[40px] md:text-[48px] leading-none mb-2">
                {stat.numeric ? (
                  <>
                    <span
                      className="countup"
                      data-to={stat.numeric}
                      aria-hidden="true"
                    />
                    <span>{stat.suffix}</span>
                  </>
                ) : (
                  stat.value
                )}
              </div>
              <p className="text-xs md:text-sm max-w-[200px] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button className="rounded-full bg-white text-[#1d2d74] px-8 py-3 text-sm font-medium hover:bg-gray-200 transition">
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
}
