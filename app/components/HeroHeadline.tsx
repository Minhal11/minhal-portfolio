"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const WORDS = ["CURIOSITY", "LEARNING", "DISCOVERY", "POSSIBILITY"] as const;

export default function HeroHeadline() {
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(
      () => setIndex((current) => (current + 1) % WORDS.length),
      3200,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const word = WORDS[index];

  return (
    <h1>
      Driven by
      <br />
      <span className="hero-rotate" aria-live="polite" aria-atomic="true">
        <span className="hero-rotate-sizer" aria-hidden="true">
          POSSIBILITY.
        </span>
        {reduceMotion ? (
          <span className="hero-rotate-word">
            <span className="orange">CURIOSITY</span>.
          </span>
        ) : (
          <AnimatePresence initial={false}>
            <motion.span
              key={word}
              className="hero-rotate-word"
              initial={{ opacity: 0, y: "70%" }}
              animate={{ opacity: 1, y: "0%" }}
              exit={{ opacity: 0, y: "-70%" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="orange">{word}</span>.
            </motion.span>
          </AnimatePresence>
        )}
      </span>
    </h1>
  );
}
