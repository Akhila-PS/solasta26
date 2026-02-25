import { useRef, useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Video from "@/components/Video";
import About from "@/components/About";
import Marque2 from "@/components/Marque2";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import Clock from "@/components/Clock";
import Map from "@/components/Map";
import gsap from "gsap";
import fsPromises from "fs/promises";
import path from "path";
import RitModel from "@/components/RitModel";
import FlagshipEvents from "@/components/FlagshipEvents";
import EventTimeline from "@/components/EventTimeline";
import SponsorPitch from "@/components/SponsorPitch";
import Legacy from "@/components/Legacy";
import NewsletterArchive from "@/components/NewsletterArchive";

import Reveal from "@/components/Reveal";
import { siteConfig } from "@/config/site";

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    gsap.fromTo(
      stagger.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
  }, []);

  const stagger = useRef(null);

  return (
    <div className="bg-black h-fit">
      <Head>
        <title>{siteConfig.eventName} '26 | {siteConfig.fullCollegeName} Tech Fest</title>
        <meta
          name="description"
          content={`${siteConfig.eventName} '26 — the annual techno-cultural fest organized by the ${siteConfig.departmentFull} at ${siteConfig.fullCollegeName}. March 6–8, 2026. CTF, 1v1 Coding, Innovation Auction, Workshops & more.`}
        />
        <meta name="keywords" content="Solasta, tech fest, NSSCE, hackathon, CTF, coding, computer science, Kerala, engineering" />
        <meta property="og:title" content={`${siteConfig.eventName} '26 | Annual Tech Fest`} />
        <meta property="og:description" content="Where Code Meets Culture — March 6–8, 2026 at NSS College of Engineering" />
        <meta property="og:type" content="website" />
      </Head>

      <Header id="navbar" />

      {/* ═══════════════ HERO SECTION ═══════════════ */}
      <section id="hero">
        <div
          ref={stagger}
          className="hidden xl:block italic relative w-full text-center top-[7rem] z-[10]"
        >
          <p className="text-white pl-[1rem] top-[6rem] uppercase font-clash font-bold text-[3.5rem] tracking-wide">
            {siteConfig.associationName}
          </p>
          <p className="text-white font-clash text-xl">PRESENTS</p>
        </div>

        <div>
          <Hero />
          <Video />
        </div>
      </section>

      {/* ═══════════════ COUNTDOWN TIMER ═══════════════ */}
      {isLoaded && (
        <Reveal width="100%">
          <Clock />
        </Reveal>
      )}

      {/* ═══════════════ ABOUT + VISION/MISSION ═══════════════ */}
      <div className="bg-gradient-to-b from-primary to-transparent">
        <Reveal width="100%">
          <RitModel />
        </Reveal>
        <section id="about">
          <Reveal width="100%">
            <About />
          </Reveal>
        </section>
      </div>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <Reveal width="100%">
        <Marque2 />
      </Reveal>

      {/* ═══════════════ FLAGSHIP EVENTS ═══════════════ */}
      <section id="flagship-events">
        <Reveal width="100%">
          <FlagshipEvents />
        </Reveal>
      </section>

      {/* ═══════════════ EVENT TIMELINE ═══════════════ */}
      <section id="event-timeline">
        <Reveal width="100%">
          <EventTimeline />
        </Reveal>
      </section>

      {/* ═══════════════ SPONSOR PITCH ═══════════════ */}
      <div className="bg-gradient-to-b from-transparent via-primary/50 to-transparent">
        <section id="sponsor-pitch">
          <Reveal width="100%">
            <SponsorPitch />
          </Reveal>
        </section>
      </div>

      {/* ═══════════════ LEGACY ═══════════════ */}
      <section id="legacy-section">
        <Reveal width="100%">
          <Legacy />
        </Reveal>
      </section>

      {/* ═══════════════ NEWSLETTER ARCHIVE ═══════════════ */}
      <div className="bg-gradient-to-b from-transparent to-primary/30">
        <section id="newsletter-archive">
          <Reveal width="100%">
            <NewsletterArchive />
          </Reveal>
        </section>
      </div>

      {/* ═══════════════ FAQ ═══════════════ */}
      <section id="faq">
        <Reveal width="100%">
          <Faq />
        </Reveal>
      </section>

      {/* ═══════════════ MAP ═══════════════ */}
      <Reveal width="100%">
        <Map />
      </Reveal>

      {/* ═══════════════ FOOTER ═══════════════ */}
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
