import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: "NBA",
    label: "Accredited",
    detail: "Until June 30, 2028",
    icon: "🏅",
  },
  {
    value: "100%",
    label: "Pass Result",
    detail: "S8 Batch 2024–25",
    icon: "🎯",
  },
  {
    value: "500+",
    label: "Students",
    detail: "Active CSE Department",
    icon: "👨‍💻",
  },
  {
    value: "3",
    label: "Day Fest",
    detail: "20+ Events & Workshops",
    icon: "🚀",
  },
];

export default function SponsorPitch() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
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
      ref={sectionRef}
      id="sponsors"
      className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-main_primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            Partner With Excellence
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            Why{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Sponsor
            </span>{" "}
            Solasta?
          </h2>
          <p className="mt-4 font-chakra text-white/60 max-w-2xl mx-auto text-base md:text-lg">
            The {siteConfig.departmentFull} at {siteConfig.fullCollegeName} is a
            hub of innovation, producing industry-ready engineers year after
            year.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative rounded-2xl p-6 border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-main_primary/40 hover:bg-white/[0.06] hover:shadow-[0_0_40px_rgba(0,240,255,0.08)]"
            >
              {/* Glass shine effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <span className="text-3xl mb-4 block">{stat.icon}</span>
                <div className="font-clash font-bold text-4xl md:text-5xl text-white group-hover:text-main_primary transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="font-clash font-semibold text-lg text-white/80 mt-1">
                  {stat.label}
                </div>
                <div className="font-chakra text-sm text-white/40 mt-1">
                  {stat.detail}
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-main_primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="mt-16 text-center">
          <div className="inline-block relative rounded-2xl p-8 md:p-12 border border-white/10 bg-white/[0.02] backdrop-blur-xl max-w-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-main_primary/5 via-transparent to-main_primary/5 rounded-2xl" />
            <div className="relative z-10">
              <h3 className="font-clash font-bold text-2xl md:text-3xl text-white mb-3">
                Invest in Tomorrow's Tech Leaders
              </h3>
              <p className="font-chakra text-white/60 mb-6 text-sm md:text-base">
                Connect your brand with {siteConfig.fullCollegeName}'s top engineering talent.
                Our {siteConfig.nbaAccreditation.toLowerCase()} and track record of{" "}
                <span className="text-main_primary font-semibold">
                  {siteConfig.passResult.toLowerCase()}
                </span>{" "}
                speaks for the quality of our student body.
              </p>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=Solasta'26 Sponsorship Inquiry`}
                className="inline-flex items-center gap-2 font-clash font-bold text-sm tracking-wider uppercase px-8 py-3 rounded-full bg-main_primary text-black hover:bg-white hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] transition-all duration-300"
              >
                Become a Sponsor
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
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
