import React from "react";
import Head from "next/head";
import { Chakra_Petch } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import LocalFont from "next/font/local";

// import dynamic from "next/dynamic";
// import { useRouter } from "next/router";
import "../styles/global.css";
import "../styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import InitialLoader from "@/components/InitialLoader";
import CustomCursor from "@/components/CustomCursor";
import { useRouter } from "next/router";

const font_chakra = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-chakra",
});

const font_ibm = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm",
});

const font_bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const font_clash_display = LocalFont({
  src: "../fonts/ClashDisplay-Variable.ttf",
  variable: "--font-clash-display",
});

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

const [initialLoading, setInitialLoading] = React.useState(
  router.pathname === "/"
);
  React.useEffect(() => {
    // Remove timer-based loading
    // setTimeout(() => {
    //   setInitialLoading(false);
    // }, 2700);

    const handleLoaderComplete = () => {
      setInitialLoading(false);
    };

    window.addEventListener('solasta-loader-complete', handleLoaderComplete);

    return () => {
      window.removeEventListener('solasta-loader-complete', handleLoaderComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/STACS-Logo.svg" type="image/svg+xml" />
        <title>SOLASTA '26</title>
      </Head>
      {initialLoading ? (
        <InitialLoader />
      ) : (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <main
              className={`${font_chakra.variable} ${font_clash_display.variable} ${font_ibm.variable} ${font_bebas.variable}`}
            >
              <Component {...pageProps} />
              <Analytics />
            </main>
          </motion.div>
          <CustomCursor />
        </>
      )}
    </>
  );
}
