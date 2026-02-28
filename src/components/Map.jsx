import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    icon: <FaInstagram size="1.2rem" />,
    label: "Instagram",
    handle: "@stacs_nssce",
    href: "https://instagram.com/stacs_nssce",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: <FaFacebookF size="1.1rem" />,
    label: "Facebook",
    handle: "/nssce",
    href: "https://www.facebook.com/nssce",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: <AiOutlineGlobal size="1.3rem" />,
    label: "Website",
    handle: "stacs-nssce",
    href: "https://stacs-nssce.vercel.app/",
    gradient: "from-main_primary to-cyan-600",
  },
];

export default function ContactCTA() {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="connect"
      className="relative py-20 px-4 md:px-8 xl:px-20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-main_primary/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block font-ibm text-main_primary/80 text-sm tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-main_primary/20 bg-main_primary/5">
            Reach Out
          </span>
          <h2 className="font-clash font-bold text-white text-[2.5rem] md:text-[4rem] leading-tight tracking-wide">
            Get in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-main_primary to-cyan-300">
              Touch
            </span>
          </h2>
          <p className="mt-4 font-chakra text-white/50 max-w-xl mx-auto text-base md:text-lg">
            Questions about Solasta '26? Want to collaborate or sponsor? We'd
            love to hear from you.
          </p>
        </div>

        {/* Email CTA — hero-like centered block */}
        <div className="relative rounded-3xl p-10 md:p-14 border border-white/10 bg-white/[0.02] backdrop-blur-xl text-center mb-10 overflow-hidden group">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,240,255,0.4) 1px, transparent 0)`,
              backgroundSize: "30px 30px",
            }}
          />
          {/* Hover glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-main_primary/[0.03] via-transparent to-purple-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-main_primary/10 border border-main_primary/20 mb-6">
              <svg
                className="w-8 h-8 text-main_primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <p className="font-ibm text-[10px] tracking-[0.2em] uppercase text-white/30 mb-2">
              Drop us a line
            </p>
            <Link
              href={`mailto:${siteConfig.contactEmail}`}
              className="font-clash font-bold text-2xl md:text-3xl text-white hover:text-main_primary transition-colors duration-300"
            >
              {siteConfig.contactEmail}
            </Link>

            <div className="flex items-center justify-center gap-2 mt-4">
              <svg
                className="w-4 h-4 text-main_primary/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-chakra text-sm text-white/40">
                {siteConfig.fullCollegeName}, Palakkad, Kerala
              </span>
            </div>
          </div>

          {/* Top accent */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main_primary/30 to-transparent" />
        </div>

        {/* Social links + STACS bearers row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social links */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <h3 className="font-clash font-bold text-lg text-white mb-6">
              Follow STACS
            </h3>
            <div className="space-y-4">
              {socialLinks.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  target="_blank"
                  className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-clash font-semibold text-sm text-white group-hover:text-main_primary transition-colors">
                      {s.label}
                    </p>
                    <p className="font-ibm text-[10px] text-white/30">
                      {s.handle}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-white/20 ml-auto group-hover:text-main_primary group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Info */}
          <div className="rounded-2xl p-8 border border-white/10 bg-white/[0.02] backdrop-blur-xl">
            <h3 className="font-clash font-bold text-lg text-white mb-6">
              Quick Info
            </h3>
            <div className="space-y-5">
              {/* Dates */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-main_primary/20 to-cyan-600/10 border border-main_primary/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-main_primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-clash font-semibold text-sm text-white">March 6 – 8, 2026</p>
                  <p className="font-ibm text-[10px] text-white/30">3-Day Tech Festival</p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-600/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-clash font-semibold text-sm text-white">{siteConfig.fullCollegeName}</p>
                  <p className="font-ibm text-[10px] text-white/30">Palakkad, Kerala 678008</p>
                </div>
              </div>

              {/* Events count */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-clash font-semibold text-sm text-white">17+ Events</p>
                  <p className="font-ibm text-[10px] text-white/30">Technical · Gaming · Cultural · Creative</p>
                </div>
              </div>

              {/* Organized by */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-green-600/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-clash font-semibold text-sm text-white">{siteConfig.associationName}</p>
                  <p className="font-ibm text-[10px] text-white/30">{siteConfig.departmentFull}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
