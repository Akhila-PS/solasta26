import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { siteConfig } from "@/config/site";

function Hero() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const subtitle2 = useRef(null);
  const date = useRef(null);
  const render = useRef(null);

  useEffect(() => {
    //loop the video from 0:03 to 0:06
    if (render.current) {
      render.current.currentTime = 0.5;
      render.current.addEventListener("timeupdate", function () {
        if (this.currentTime > 9) {
          this.currentTime = 0.5;
        }
      });
    }
    gsap.fromTo(
      title.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      subtitle.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
    gsap.fromTo(
      subtitle2.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5 }
    );
    gsap.fromTo(
      date.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 3 }
    );
  }, []);

  return (
    <div className="hero relative xl:hidden py-8 h-fit flex flex-col uppercase justify-center">
      <video
        ref={render}
        src="/render.mp4"
        loop
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-cover bg-slate-300 opacity-50"
      ></video>

      <div className="text-white flex flex-col pt-[8rem] uppercase font-extrabold md:ml-[1rem] lg:ml-[2rem] px-5 ">
        <h1 ref={title} className="font-chakra sm:text-2xl opacity-0">
          {siteConfig.fullCollegeName} Presents
        </h1>
        <div ref={subtitle} className="font-clash flex flex-wrap opacity-0">
          <span className="text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[9rem]">
            {siteConfig.eventName}
          </span>
          <span className="text-main_primary relative top-[-3rem] font-chakra text-stroke-cyan text-[7rem] md:text-[9rem]">
            {siteConfig.eventYear}
          </span>
        </div>
        <span
          ref={subtitle2}
          className="opacity-0 relative top-[-5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash"
        >
          {siteConfig.tagline}
        </span>
      </div>

      <div
        ref={date}
        className="relative md:ml-10 opacity-0 flex flex-col font-bold bg-black/60 backdrop-blur-[20px] saturate-150 border border-white/20 w-fit text-xl rounded-[2rem] text-white p-6 pr-10 ml-[1.5rem] md:text-3xl z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <span className="font-chakra">
          {siteConfig.eventYear} <span className="font-clash">{siteConfig.eventDate.month}</span>
        </span>
        <span className="flex gap-2 text-[2rem] font-chakra font-bold">
          {siteConfig.eventDate.dates.map((d, i) => (
            <span key={i} className="flex"><span className="mr-1">{d.day}</span><b className="text-[16px]">{d.suffix}</b></span>
          ))}
        </span>
        <Image
          src="/edgeTriangle.png"
          width={30}
          height={30}
          alt="edgetriangle"
          className="absolute bottom-[-1px] right-[-1px]"
        />
      </div>
    </div>
  );
}

export default Hero;
