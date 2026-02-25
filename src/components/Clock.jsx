import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

function FlipDigit({ value, label }) {
  const [prev, setPrev] = useState(value);
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    if (value !== current) {
      setPrev(current);
      setCurrent(value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const padded = String(current).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        {/* Glow behind */}
        <div className="absolute inset-0 bg-main_primary/5 blur-xl rounded-2xl" />

        {/* Card container */}
        <div className="relative w-[4.5rem] h-[5.5rem] sm:w-[5.5rem] sm:h-[6.5rem] md:w-[6.5rem] md:h-[7.5rem] lg:w-[7.5rem] lg:h-[8.5rem]">
          {/* Background card */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl overflow-hidden">
            {/* HUD grid lines */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0,240,255,0.5) 1px, transparent 1px)",
                backgroundSize: "100% 8px",
              }}
            />

            {/* Center divider line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 z-10" />

            {/* Corner indicators */}
            <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-main_primary/30" />
            <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-main_primary/30" />
            <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-main_primary/30" />
            <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-main_primary/30" />
          </div>

          {/* Number display */}
          <AnimatePresence mode="popLayout">
            <motion.div
              key={padded}
              initial={{ y: -20, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 20, opacity: 0, scale: 0.8 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
                mass: 0.8,
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="font-clash font-bold text-[2.2rem] sm:text-[2.8rem] md:text-[3.5rem] lg:text-[4rem] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 leading-none tracking-tight select-none">
                {padded}
              </span>
            </motion.div>
          </AnimatePresence>

          {/* Active pulse ring on change */}
          <AnimatePresence>
            {prev !== current && (
              <motion.div
                initial={{ opacity: 0.5, scale: 0.9 }}
                animate={{ opacity: 0, scale: 1.15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 rounded-xl sm:rounded-2xl border border-main_primary/40"
              />
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Label */}
      <span className="font-ibm text-[9px] sm:text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/30">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 pt-2 sm:pt-0">
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-main_primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"
      />
      <motion.div
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-main_primary shadow-[0_0_8px_rgba(0,240,255,0.6)]"
      />
    </div>
  );
}

function Clock() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const targetDate = new Date(siteConfig.targetDate).getTime();

    const tick = () => {
      const now = Date.now();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  const targetDate = new Date(siteConfig.targetDate).getTime();
  const now = Date.now();
  const diff = targetDate - now;
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const initialTotal = Math.floor((targetDate - (targetDate - 30 * 24 * 60 * 60 * 1000)) / 1000); // ~30 days baseline
  const progressPct = Math.max(0, Math.min(100, ((initialTotal - totalSeconds) / initialTotal) * 100));

  return (
    <section className="w-full flex flex-col items-center justify-center py-8 lg:py-16 px-4">
      {/* Outer container with ambient glow */}
      <div className="relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-main_primary/[0.04] rounded-full blur-[80px] pointer-events-none" />

        {/* Main timer card */}
        <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden">
          {/* Scanline effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main_primary/20 to-transparent"
            />
          </div>

          {/* Top status bar */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.6)]"
              />
              <span className="font-ibm text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-white/30">
                SYS.CLOCK // ACTIVE
              </span>
            </div>
            <span className="font-ibm text-[9px] sm:text-[10px] tracking-[0.15em] uppercase text-main_primary/50">
              {siteConfig.eventName} '{siteConfig.eventYear.slice(2)} T-MINUS
            </span>
          </div>

          {/* Countdown digits */}
          <div className="flex items-start gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center">
            <FlipDigit value={timeLeft.days} label="Days" />
            <Separator />
            <FlipDigit value={timeLeft.hours} label="Hours" />
            <Separator />
            <FlipDigit value={timeLeft.minutes} label="Minutes" />
            <Separator />
            <FlipDigit value={timeLeft.seconds} label="Seconds" />
          </div>

          {/* Progress bar */}
          <div className="mt-6 sm:mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="font-ibm text-[8px] sm:text-[9px] tracking-[0.15em] uppercase text-white/20">
                Countdown Progress
              </span>
              <span className="font-ibm text-[8px] sm:text-[9px] tracking-[0.15em] uppercase text-main_primary/40">
                {progressPct.toFixed(1)}%
              </span>
            </div>
            <div className="relative h-[3px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-main_primary/60 to-main_primary rounded-full"
              />
              {/* Pulse glow at tip */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
                style={{ left: `${progressPct}%` }}
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-main_primary shadow-[0_0_10px_rgba(0,240,255,0.8)]"
              />
            </div>
          </div>

          {/* Bottom date info */}
          <div className="mt-6 sm:mt-8 flex items-center justify-center gap-3 sm:gap-6">
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-main_primary/40"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="font-chakra text-xs sm:text-sm text-white/50">
                <span className="text-white/80 font-semibold">
                  {siteConfig.eventYear}
                </span>{" "}
                <span className="font-clash font-bold text-main_primary">
                  {siteConfig.eventDate.month}
                </span>{" "}
                {siteConfig.eventDate.dates.map((d, i) => (
                  <span key={i}>
                    {i > 0 && <span className="text-white/20"> · </span>}
                    <span className="text-white/70 font-semibold">{d.day}</span>
                    <sup className="text-[8px] text-white/30">{d.suffix}</sup>
                  </span>
                ))}
              </span>
            </div>
          </div>

          {/* Border glow effect */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main_primary/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-main_primary/10 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export default Clock;
