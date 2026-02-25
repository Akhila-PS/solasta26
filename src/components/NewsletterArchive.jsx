import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function NewsletterArchive() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.filter(Boolean).forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50, rotateX: 10 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          delay: i * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      id="newsletter"
      className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            The Communiqué
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            Newsletter{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Archive
            </span>
          </h2>
          <p className="mt-4 font-chakra text-white/50 max-w-2xl mx-auto text-base md:text-lg">
            Browse through editions of "The Communiqué" — our department
            newsletter chronicling the journey of STACS and the CSE Department.
          </p>
        </div>

        {/* Newsletter grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.newsletters.map((nl, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-xl transition-all duration-500 hover:border-main_primary/30 hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]"
            >
              {/* Top gradient bar */}
              <div className="h-1 bg-gradient-to-r from-main_primary/60 via-cyan-300/40 to-main_primary/60" />

              <div className="p-6 md:p-8">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-main_primary/10 border border-main_primary/20 flex items-center justify-center mb-6 group-hover:bg-main_primary/20 transition-colors duration-300">
                  <svg
                    className="w-7 h-7 text-main_primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>

                {/* Edition label */}
                <span className="font-ibm text-[10px] tracking-[0.2em] uppercase text-main_primary/70">
                  {nl.edition}
                </span>

                <h3 className="font-clash font-bold text-xl text-white mt-2 mb-3 group-hover:text-main_primary transition-colors duration-300">
                  {nl.title}
                </h3>

                <p className="font-chakra text-sm text-white/40 leading-relaxed mb-6">
                  {nl.description}
                </p>

                {/* Download link */}
                <Link
                  href={nl.downloadUrl}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-clash font-semibold text-sm text-main_primary hover:text-white transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View / Download PDF
                </Link>
              </div>

              {/* Bottom hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-main_primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
