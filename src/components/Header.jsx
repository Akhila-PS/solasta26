import React from "react";
import Link from "next/link";

import { Slant as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import Navlink from "@/components/Navlink";

export default function Header() {
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navItems = [
    { name: "HOME", link: "/", page: "01" },
    { name: "EVENTS", link: "/events", page: "02" },
    { name: "SCHEDULE", link: "/#event-timeline", page: "03" },
    { name: "ABOUT", link: "/#about", page: "04" },
    { name: "SPONSORS", link: "/#sponsor-pitch", page: "05" },
    { name: "LEGACY", link: "/#legacy-section", page: "06" },
    { name: "FAQ", link: "/#faq", page: "07" },
    { name: "BROCHURE", link: "/Brochure.pdf", page: "08" },
    { name: "TEAMS", link: "/teams", page: "09" },
  ];

  return (
    <>
      <header
        className="fixed z-[25] top-2 md:top-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] xl:w-[80%] h-[4.5rem] flex items-center py-2 px-6 rounded-3xl border border-white/10 bg-black/20 backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
      >
        <div
          className="ml:2 md:ml-4 z-[26]"
          style={{ opacity: isOpen ? 0 : 1 }}
        >
          <Hamburger
            color="white"
            label="Show menu"
            direction="right"
            size={25}
            rounded={true}
            toggle={setOpen}
            toggled={isOpen}
          />
        </div>

        <Link
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hover:scale-110 z-50 transition duration-300 ease-in-out font-clash font-bold text-2xl text-white tracking-wider"
          href="/"
        >
          Solasta'26
        </Link>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-4 bottom-4 left-4 w-[calc(100vw-2rem)] sm:w-[400px] z-[50] border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-[2rem] overflow-hidden"
            initial={{ x: "-120%" }}
            animate={{ x: 0 }}
            exit={{ x: "-120%" }}
            transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
          >
            {/* Glass Background Layer */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[20px] saturate-150 z-0" />

            <div className="relative flex flex-col h-full z-10">
              <div className="pl-4 z-[26] h-[4.5rem] flex items-center border-b border-white/10 shrink-0">
                <Hamburger
                  color="white"
                  label="Show menu"
                  direction="right"
                  size={40}
                  rounded={true}
                  toggle={setOpen}
                  toggled={isOpen}
                />
                <div className="ml-4 border-l border-white/10 h-10"></div>
              </div>
              <div className="text-4xl md:text-5xl font-clash font-black flex flex-col mt-6 ml-8 gap-3 overflow-y-auto pb-8">
                {navItems.map((item, i) => (
                  <div
                    key={item.page}
                    className={`relative hackNav ${
                      i === 0
                        ? "bg-main_primary text-white"
                        : "hover:bg-white hover:text-black text-white"
                    } w-fit text-left pl-2 pr-4 py-1 rounded-[4px]`}
                  >
                    <Navlink
                      name={item.name}
                      link={item.link}
                      setToggle={setOpen}
                    />
                    <p
                      className={`absolute right-[-2rem] top-[2px] text-[8px] font-bold ${
                        i === 0 ? "text-main_primary" : "text-transparent navPageNo"
                      }`}
                    >
                      PAGE <br /> {item.page}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
