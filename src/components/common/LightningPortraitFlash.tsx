"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type FlashPhase = "idle" | "strike" | "hold" | "fade";

/**
 * Every ~5s: big lightning flash. Hoodie image only exists in the DOM during the strike.
 * When lightning is off, the image is not rendered at all.
 */
export function LightningPortraitFlash() {
  const [phase, setPhase] = useState<FlashPhase>("idle");
  const [boltKey, setBoltKey] = useState(0);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!motion.matches);
    sync();
    motion.addEventListener("change", sync);
    return () => motion.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    let strikeTimer: number;
    let holdTimer: number;
    let fadeTimer: number;
    let cycleTimer: number;

    const runStrike = () => {
      setBoltKey((k) => k + 1);
      setPhase("strike");

      strikeTimer = window.setTimeout(() => {
        setPhase("hold");
      }, 90);

      holdTimer = window.setTimeout(() => {
        setPhase("fade");
      }, 420);

      fadeTimer = window.setTimeout(() => {
        setPhase("idle");
      }, 900);
    };

    const startDelay = window.setTimeout(() => {
      runStrike();
      cycleTimer = window.setInterval(runStrike, 9000);
    }, 3200);

    return () => {
      window.clearTimeout(startDelay);
      window.clearTimeout(strikeTimer);
      window.clearTimeout(holdTimer);
      window.clearTimeout(fadeTimer);
      window.clearInterval(cycleTimer);
    };
  }, [enabled]);

  if (!enabled) return null;

  const lightningOn = phase !== "idle";

  return (
    <div className="lightning-portrait pointer-events-none fixed inset-0 z-[1]" aria-hidden="true">
      {/* Ambient 3D lightning stays in ThreeBackground — this is the big strike only */}
      <div className={`lightning-portrait__flash lightning-portrait__flash--${phase}`} />

      {lightningOn ? (
        <>
          <svg
            key={boltKey}
            className={`lightning-portrait__bolt lightning-portrait__bolt--${phase}`}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <path
              className="lightning-portrait__bolt-glow"
              d="M48 0 L42 22 L55 24 L38 52 L58 48 L32 100 L46 58 L28 56 L48 28 L36 26 Z"
            />
            <path
              className="lightning-portrait__bolt-core"
              d="M50 0 L45 20 L56 22 L40 50 L57 47 L35 100 L48 56 L32 54 L50 26 L40 24 Z"
            />
          </svg>

          {/* Image only while lightning is showing */}
          <div className={`lightning-portrait__figure lightning-portrait__figure--${phase}`}>
            <Image
              src="/backgrounds/hoodie-flash.png"
              alt=""
              fill
              sizes="(max-width: 768px) 85vw, 50vw"
              className="lightning-portrait__image"
              quality={75}
              priority={false}
            />
          </div>
        </>
      ) : null}
    </div>
  );
}
