import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export default function Legacy() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section id="legacy" className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,240,255,0.4) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            Our Journey
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Legacy
            </span>
          </h2>
          <p className="mt-4 font-chakra text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            From pioneering hackathons to cutting-edge workshops, every edition
            of Solasta pushes the boundaries of what a tech fest can be.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-main_primary/30 via-main_primary/10 to-transparent" />

          {siteConfig.legacyHighlights.map((highlight, i) => (
            <div
              key={highlight.year}
              ref={(el) => (cardsRef.current[i] = el)}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Year marker */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                <div className="w-8 h-8 rounded-full bg-soothing_black border-2 border-main_primary flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.3)]">
                  <div className="w-3 h-3 rounded-full bg-main_primary animate-pulse" />
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <div className="group rounded-2xl p-6 md:p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-main_primary/30 hover:bg-white/[0.05] hover:shadow-[0_0_40px_rgba(0,240,255,0.05)]">
                  <span className="font-clash font-bold text-6xl text-white/[0.07] absolute top-2 right-4 select-none">
                    '{highlight.year.slice(2)}
                  </span>

                  <div className="relative z-10">
                    <span className="font-ibm text-main_primary text-xs tracking-[0.2em] uppercase">
                      {highlight.year}
                    </span>
                    <h3 className="font-clash font-bold text-2xl md:text-3xl text-white mt-2 group-hover:text-main_primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="font-chakra text-white/50 mt-3 text-sm md:text-base leading-relaxed">
                      {highlight.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {highlight.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-ibm text-[10px] tracking-[0.1em] uppercase px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
