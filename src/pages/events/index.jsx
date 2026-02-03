import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import fsPromises from "fs/promises";
import path from "path";
import gsap from "gsap";
import Reveal from "@/components/Reveal";
import { ScrollTrigger } from "gsap/dist/all";

export default function Events({ posts, names }) {
  const allPosts = posts.flat();
  const animate = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      animate.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
  }, []);

  return (
    <div className="h-fit w-screen bg-soothing_black">
      <Head>
        <title>Solasta</title>
      </Head>
      <Header id="navbar" />

      <main>
        <div className='h-[15rem] md:h-[20rem] bg-[url("/banner.png")] object-fill text-white font-clash tracking-wide font-black flex flex-col items-center justify-center'>
          <span className="text-[1rem] pt-12 md:pt-16 md:text-[4rem]">
            Solasta' 26
          </span>
          <span className="text-[2.5rem] tracking-wider">EVENTS</span>
        </div>

        <div className="flex flex-wrap justify-center gap-8 p-6 mt-8">
          {allPosts.length > 0 ? (
            allPosts.map((post) => (
              <Reveal key={post.id}>
              <div
                className="relative w-[21rem] h-[20rem] hover:scale-105 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl overflow-hidden hover:shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 ease-in-out"
              >
                <Link href={`/events/${post.id}`}>
                  <Image
                    src={post.img}
                    width={500}
                    height={500}
                    alt="Event's Image"
                    className="cursor-pointer object-fill transform transition-all duration-500 ease-in-out"
                  />
                </Link>
              </div>
              </Reveal>
            ))
          ) : (
            <div className="text-white font-semibold font-chakra text-2xl py-8">
              Coming Soon...
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/data.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      posts: objectData.posts,
      names: objectData.names,
    },
  };
}
