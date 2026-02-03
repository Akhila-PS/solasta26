import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Navlink from "./Navlink";
import { siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const trigger = useRef(null);
  const aboutdarpan = useRef(null);
  const aboutaec = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      trigger.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: trigger.current,
          start: window.innerWidth > 768 ? "top 80%" : "top 20%",
          end: "bottom 80%",

          ease: "power4.eae-InOut",
        },
      }
    );
    // gsap.fromTo(
    //   aboutdarpan.current,
    //   { opacity: 0, y: 100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: aboutdarpan.current,
    //       start: "top 70%",
    //       scrub: true,
    //       ease: "expo.eae-InOut",
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   aboutaec.current,
    //   { opacity: 0, y: 100 },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     scrollTrigger: {
    //       trigger: aboutaec.current,
    //       start: "top 80%",
    //       end: "bottom 80%",
    //       scrub: true,
    //       ease: "expo.eae-InOut",
    //     },
    // //   }
    // );
  }, []);

  return (
    <div className="h-fit relative pt-4 px-2 xl:px-20  ">
      <div className="about flex flex-wrap text-white tracking-wide xl:tracking-[.5rem]  text-[2.7rem] sm:text-[4.3rem] md:text-[6rem] lg:text-[5.5rem] xl:text-[6.7rem]  leading-[3rem] md:leading-[5rem] font-clash font-bold mt-16">
        <span>You might be</span>
        <span>Thinking what is</span>
        <span
          ref={trigger}
          className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9.5rem] xl:text-[12.5rem] md:mt-4 lg:mt-12"
        >
          <span className="text-main_primary">{siteConfig.eventName}</span>
        </span>
        <span className="text-[3.7rem] sm:text-[5rem] md:text-[7rem] lg:text-[9rem] xl:text-[12rem] md:mt-4 lg:mt-8">
          ?
        </span>

      </div>
      <div className="flex flex-col xl:flex-row items-center justify-between gap-8 mt-8">
        <div className="font-chakra text-base leading-[5px] xl:mt-4 w-full xl:w-2/3">
          <span
            ref={aboutdarpan}
            className="text-base font-medium text-white xl:text-xl"
          >
            <b>
              {siteConfig.eventName}'{siteConfig.eventYear.slice(2)}
            </b>{" "}
            the annual techno - cultural fest organized by the {siteConfig.collegeName}{" "}
            of {siteConfig.fullCollegeName}, is an exciting event that celebrates
            the technical expertise and artistic talents of aspiring engineers.
            element. The <b>three-day</b> mega event is a visual treat for
            attendees, transporting them to another world with a variety of
            captivating performances by aspiring engineers and artists. From
            technical competitions to cultural events{" "}
            <b>
              {siteConfig.eventName}'{siteConfig.eventYear.slice(2)}
            </b>{" "}
            offers a diverse range of activities that cater to everyone's
            interests.
          </span>
        </div>
        <video
          src="/About.mp4"
          autoPlay
          loop
          muted
          className="abvideo w-full md:w-[24rem] xl:w-[28rem] h-[15rem] md:h-[18rem] object-cover rounded-2xl border border-gray/50 xl:mr-10"
        ></video>
      </div>
      <div className="absolute font-clash font-bold text-white">
        <span className="flex gap-6 text-[3.3rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[5.5rem]">
          About <Navlink name={"NSS CE"} link={"/#about"} />{" "}
        </span>
      </div>
      <div
        ref={aboutaec}
        className="flex flex-col mt-8 lg:flex-row items-center gap-8 py-8"
      >
        <p className="text-white text-base xl:text-xl font-chakra font-medium">
          {siteConfig.fullCollegeName} is one of the premier institutions in the state.
          It provides quality education and fosters innovation among its students.
          We are dedicated to excellence in education, research, and development.
        </p>
      </div>
    </div>
  );
}
