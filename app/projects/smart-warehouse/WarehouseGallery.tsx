"use client";

import { useState } from "react";

type GalleryItem = {
  category: string;
  title: string;
  description: string;
  image: string;
};

const codesysItems: GalleryItem[] = [
  {
    category: "CODESYS · PRODUCT MANAGEMENT",
    title: "Barcode-Based Product Classification",
    description:
      "Structured Text captures the barcode detection event and maps the detected product to its product number, barcode value and destination.",
    image: "/images/warehouse-product-manager.jpg",
  },
  {
    category: "CODESYS · BOX TRACKING",
    title: "Encoder-Based Box Tracking",
    description:
      "Each active box is tracked using its scan position and the universal encoder, allowing the PLC to determine the product position along the conveyor.",
    image: "/images/warehouse-box-tracking.jpg",
  },
  {
    category: "CODESYS · DATA STRUCTURE",
    title: "Tracked Box Data Model",
    description:
      "The DUT structure stores the state of each tracked product, including its ID, barcode, product type, destination, scan encoder and current position.",
    image: "/images/warehouse-box-structure.jpg",
  },
  {
    category: "CODESYS · ROUTING",
    title: "Position-Based Diverter Logic",
    description:
      "The PLC evaluates product destination together with encoder position to determine when the corresponding diverter should activate.",
    image: "/images/warehouse-diverter-logic.jpg",
  },
  {
    category: "CODESYS · MAIN CONVEYOR",
    title: "Main Conveyor Control",
    description:
      "The main conveyor is controlled through system-run, alarm interlock, automatic/manual mode and conveyor-speed logic.",
    image: "/images/warehouse-main-conveyor.jpg",
  },
  {
    category: "CODESYS · SPUR CONVEYOR",
    title: "Spur Conveyor Sequencing",
    description:
      "Dedicated spur-conveyor logic manages destination-side sequence using diverter conditions, hold-down logic and timed shut-off behaviour.",
    image: "/images/warehouse-spur-conveyor.jpg",
  },
  {
    category: "CODESYS · ENCODER",
    title: "Universal Encoder",
    description:
      "Structured Text updates the universal encoder according to conveyor movement, providing the positional reference used by the tracking system.",
    image: "/images/warehouse-encoder.jpg",
  },
  {
    category: "CODESYS · WAREHOUSE STATE",
    title: "Bin Capacity Monitoring",
    description:
      "Destination counters monitor products stored in each bin and generate full-state conditions as capacity is reached.",
    image: "/images/warehouse-bin-counter.jpg",
  },
  {
    category: "CODESYS · GLOBAL VARIABLES",
    title: "PLC Variable Architecture",
    description:
      "Global variables coordinate start/stop control, automatic/manual operation, barcode detection, conveyor states, diverters and sensor signals.",
    image: "/images/warehouse-gvl-io.jpg",
  },
];

const godotItems: GalleryItem[] = [
  {
    category: "GODOT / OIP · DIGITAL TWIN",
    title: "Complete Warehouse Simulation",
    description:
      "The 3D environment represents the main conveyor, spur conveyors, diverters and destination bins used to visualize the automated sorting system.",
    image: "/images/warehouse-simulation.jpg",
  },
  {
    category: "GODOT / OIP · IDENTIFICATION",
    title: "Scanning Station",
    description:
      "A simulated sensing station detects products as they pass through the scanning area and provides the identification event used by the PLC logic.",
    image: "/images/warehouse-scanner.jpg",
  },
  {
    category: "GODOT / OIP · ACTUATION",
    title: "Diverter Operation",
    description:
      "The digital twin visualizes the PLC routing decision by actuating the selected diverter and redirecting the product toward its assigned spur conveyor.",
    image: "/images/warehouse-diverter.jpg",
  },
  {
    category: "OPC UA · INTEGRATION",
    title: "PLC to Digital Twin Communication",
    description:
      "OPC UA exposes the control and sensor variables needed for communication between the CODESYS control layer and the 3D simulation.",
    image: "/images/warehouse-opcua.jpg",
  },
];

function Gallery({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  const previous = () => {
    setIndex((value) => (value === 0 ? items.length - 1 : value - 1));
  };

  const next = () => {
    setIndex((value) => (value === items.length - 1 ? 0 : value + 1));
  };

  const progress = ((index + 1) / items.length) * 100;

  return (
    <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-[22px] border border-[#E5E5E0] bg-white shadow-[0_10px_40px_rgba(17,17,17,0.035)] sm:rounded-[28px]">
      <div className="bg-[#F8F8F5] px-2 pt-2 sm:px-4 sm:pt-4">
        <div className="flex h-[210px] items-center justify-center overflow-hidden rounded-2xl bg-[#F2F2ED] sm:h-[300px] md:h-[360px]">
          <img
            src={current.image}
            alt={current.title}
            className="h-auto max-h-full w-auto max-w-full object-contain"
          />
        </div>
      </div>

      <div className="px-3 py-3 sm:px-7 sm:py-7 md:px-8">
        <div className="flex items-start justify-between gap-3">
          <span className="text-[8px] uppercase tracking-[1.4px] text-gray-400 sm:text-[11px] sm:tracking-[2.2px]">
            {current.category}
          </span>

          <span className="shrink-0 text-[9px] tabular-nums text-gray-400 sm:text-xs">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(items.length).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-2 text-[15px] font-bold tracking-tight sm:mt-3 sm:text-[28px]">
          {current.title}
        </h3>

        <p className="mt-2.5 max-w-3xl text-[9px] leading-[1.45] text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
          {current.description}
        </p>

        <div className="mt-4 flex items-center gap-2 sm:mt-6 sm:gap-3">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous image"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] text-[10px] transition-colors hover:border-[#111] sm:h-10 sm:w-10 sm:text-base"
          >
            ←
          </button>

          <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-[#EAEAE5]">
            <div
              className="h-full bg-[#F4B400] transition-[width] duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E5E0] text-sm transition-colors hover:border-[#111] sm:h-10 sm:w-10 sm:text-base"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}

export function CodesysGallery() {
  return <Gallery items={codesysItems} />;
}

export function GodotGallery() {
  return <Gallery items={godotItems} />;
}
