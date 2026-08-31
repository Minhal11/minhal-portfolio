"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  category: "Control Panel" | "Block Diagram";
  title: string;
  description: string;
  src: string;
};

const slides: Slide[] = [
  {
    category: "Control Panel",
    title: "Idle State",
    description:
      "System powered down — tank empty, temperature at 0, every setpoint waiting to be entered.",
    src: "/labview/panel-idle.jpg",
  },
  {
    category: "Control Panel",
    title: "Running State",
    description:
      "Live simulation mid-cycle — tank filling toward 330L, temperature ramped to 74, charts plotting in real time.",
    src: "/labview/panel-running.jpg",
  },
  {
    category: "Block Diagram",
    title: "Wait for Start",
    description:
      "The main state machine shell. The system idles in this default case until the operator presses ON.",
    src: "/labview/bd-wait-for-start.jpg",
  },
  {
    category: "Block Diagram",
    title: "Level Select",
    description:
      "Captures the LEVEL 1 and LEVEL 2 setpoints from the operator before filling begins.",
    src: "/labview/bd-level-select.jpg",
  },
  {
    category: "Block Diagram",
    title: "Temp Select",
    description: "Captures the target TEMP setpoint for the batch.",
    src: "/labview/bd-temp-select.jpg",
  },
  {
    category: "Block Diagram",
    title: "Filling Logic - Liquid 1",
    description:
      "Compares the current tank level against LEVEL 1 and increments it, status reads FILLING L1.",
    src: "/labview/bd-filling-l1.jpg",
  },
  {
    category: "Block Diagram",
    title: "Filling Logic - Liquid 2",
    description: "Continues filling toward LEVEL 2, status reads FILLING L2.",
    src: "/labview/bd-filling-l2.jpg",
  },
  {
    category: "Block Diagram",
    title: "Temp Logic",
    description: "Heats the batch toward the TEMP setpoint, status reads Heating.",
    src: "/labview/bd-temp-logic.jpg",
  },
  {
    category: "Block Diagram",
    title: "Dispose",
    description: "Dispenses the finished batch according to the DISPOSE quantity.",
    src: "/labview/bd-dispose.jpg",
  },
  {
    category: "Block Diagram",
    title: "Dispose Logic - Complete",
    description:
      "Final case confirms the cycle has finished, status reads COMPLETE.",
    src: "/labview/bd-dispose-complete.jpg",
  },
];

const variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 24 : -24,
  }),
  center: {
    opacity: 1,
    x: 0,
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -24 : 24,
  }),
};

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function LabviewGallery() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const go = (dir: number) => {
    setIndex(([prev]) => {
      const next = (prev + dir + slides.length) % slides.length;
      return [next, dir];
    });
  };

  const slide = slides[index];
  const progress = ((index + 1) / slides.length) * 100;

  return (
    <div className="rounded-3xl border border-[#E0E0DA] bg-white p-4 shadow-sm">

      {/* Image */}
      <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden bg-[#FAFAF8]">
        <AnimatePresence custom={direction} mode="wait" initial={false}>
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.title}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0 w-full h-full object-contain"
          />
        </AnimatePresence>
      </div>

      {/* Caption */}
      <div className="mt-5 px-1">
        <div className="flex items-center gap-3">
          <span
            className={`text-[11px] font-medium tracking-[0.15em] uppercase px-2.5 py-0.5 rounded-full border ${
              slide.category === "Control Panel"
                ? "text-[#555] border-[#E0E0DA]"
                : "text-[#8a6a00] border-[#F4B400]/40 bg-[#FBF3DC]"
            }`}
          >
            {slide.category}
          </span>
          <span className="text-[12px] tracking-wide text-gray-400">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <h3 className="mt-3 text-xl font-bold text-[#111]">{slide.title}</h3>
            <p className="mt-1.5 text-[15px] text-gray-600 leading-6">
              {slide.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-6 px-1 flex items-center gap-4">
        <button
          onClick={() => go(-1)}
          aria-label="Previous image"
          className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-[#DDD] text-[#555] hover:border-[#111] hover:text-[#111] transition duration-200"
        >
          <ChevronLeft />
        </button>

        <div className="flex-1 h-[3px] rounded-full bg-[#EFEFEA] overflow-hidden">
          <motion.div
            className="h-full bg-[#F4B400] rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </div>

        <button
          onClick={() => go(1)}
          aria-label="Next image"
          className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full border border-[#DDD] text-[#555] hover:border-[#111] hover:text-[#111] transition duration-200"
        >
          <ChevronRight />
        </button>
      </div>

    </div>
  );
}