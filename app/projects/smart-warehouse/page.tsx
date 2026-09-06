import Link from "next/link";
import { CodesysGallery, GodotGallery } from "./WarehouseGallery";

function SectionTitle({
  number,
  title,
  eyebrow,
}: {
  number: string;
  title: string;
  eyebrow?: string;
}) {
  return (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-end gap-3">
        <span className="text-5xl sm:text-6xl font-black leading-none text-[#EAEAE2] select-none">
          {number}
        </span>
        <h2 className="pb-1 text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h2>
      </div>

      {eyebrow ? (
        <p className="mt-3 flex items-center text-[10px] sm:text-xs uppercase tracking-[3px] text-gray-400">
          {eyebrow}
        </p>
      ) : null}
    </div>
  );
}

const processSteps = [
  "Product generation",
  "Barcode detection",
  "Product classification",
  "Box tracking",
  "Encoder position",
  "Routing decision",
  "Diverter actuation",
  "Destination bin",
];

const coreBlocks = [
  {
    title: "Product Identification",
    text: (
      <>
        Barcode detection is converted into product and destination
        information by the CODESYS{" "}
        <span className="font-medium text-[#F4B400]">Product Manager</span>.
      </>
    ),
  },
  {
    title: "Position-Based Tracking",
    text: (
      <>
        Active boxes are tracked using{" "}
        <span className="font-medium text-[#F4B400]">encoder-based</span>{" "}
        position data rather than depending only on fixed timing.
      </>
    ),
  },
  {
    title: "Automated Routing",
    text:
      "Destination and position determine when the appropriate diverter and spur conveyor should handle the product.",
  },
];

const engineeringHighlights = [
  {
    title: "PLC Control",
    text:
      "Industrial automation logic implemented in CODESYS using Ladder Logic and Structured Text.",
  },
  {
    title: "Product Classification",
    text:
      "Barcode detection is mapped to product and destination information inside the PLC.",
  },
  {
    title: "Box Tracking",
    text:
      "Active products are tracked using encoder-based position information.",
  },
  {
    title: "Automated Sorting",
    text:
      "Destination-aware diverter logic routes products to the correct spur conveyor.",
  },
  {
    title: "Digital Twin",
    text:
      "A 3D simulation environment visualizes the physical behaviour of the warehouse system.",
  },
  {
    title: "OPC UA",
    text:
      "Communication connects PLC variables with the simulated warehouse environment.",
  },
];

export default function SmartWarehouseProject() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#111]">
      {/* Back */}
      <div className="mx-auto max-w-5xl px-5 pt-7 sm:px-6 sm:pt-9">
        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-black"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
        <div className="grid items-center gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <div>
            <p className="flex items-center text-[11px] uppercase tracking-[3px] text-gray-400 sm:text-xs">
              <span className="mr-2 inline-block h-[2px] w-5 bg-[#F4B400]" />PLC Automation &amp; Digital Twin
            </p>

            <h1 className="mt-4 text-4xl font-black leading-[1.02] tracking-tight sm:text-5xl md:text-[56px]">
              PLC-Based Smart
              <br />
              Warehouse Automation
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              A PLC-based warehouse automation and sorting system developed
              using CODESYS, OPC UA and a 3D simulation environment.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "CODESYS",
                "Ladder Logic",
                "Structured Text",
                "OPC UA",
                "Godot / OIP",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E5E5E0] bg-white px-3 py-1.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:pl-4">
            <div className="overflow-hidden rounded-[28px] border border-[#E5E5E0] bg-white">
              <div className="aspect-[16/10] bg-[#F1F1EC]">
                <img
                  src="/images/warehouse-hero.jpg"
                  alt="PLC-Based Smart Warehouse Automation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 Overview */}
      <section className="border-y border-[#EAEAE5] bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="01"
            title="Project Overview"
            eyebrow="System concept"
          />

          <div className="grid items-start gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
            <div>
              <p className="max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                This project explores PLC-based warehouse automation through
                a simulated conveyor sorting environment. CODESYS forms the
                control layer, while the 3D simulation represents the physical
                process.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Products are introduced into the simulation, identified at the
                scanning station, tracked through the conveyor using encoder
                data and routed toward their assigned destination.
              </p>

              <div className="mt-7 flex items-center gap-2 text-[10px] uppercase tracking-[2.4px] text-gray-400">
                Identify · Track · Route
              </div>
            </div>

            {/* Compact process palette */}
            <div className="rounded-[26px] border border-[#E5E5E0] bg-[#F8F8F5] p-5 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center">
                  <p className="text-[10px] font-medium uppercase tracking-[3px] text-gray-500">
                    Process Flow
                  </p>
                </div>

              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-3.5">
                {processSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid min-w-0 grid-cols-[24px_1fr] items-start"
                  >
                    <span className="pt-[2px] text-[10px] tabular-nums text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] font-medium leading-5 sm:text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Core engineering */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-6 sm:py-16">
          <div className="grid gap-4 md:grid-cols-3">
            {coreBlocks.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-[#E5E5E0] bg-white p-6"
              >
                <span className="absolute right-5 top-5 text-[10px] tabular-nums text-gray-300">
                  0{index + 1}
                </span>

                <h3 className="pr-8 text-lg font-bold sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 02 CODESYS */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="02"
            title="CODESYS Control"
            eyebrow="PLC logic & engineering"
          />

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            The control system is implemented in CODESYS using both Ladder
            Logic and Structured Text. Ladder Logic handles machine control
            and sequencing, while Structured Text handles product
            management, position tracking and routing calculations.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            {[
              ["Logic", "Ladder + Structured Text"],
              ["Motion", "Encoder-Based Position"],
              ["Routing", "Destination-Aware Diverters"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="relative rounded-2xl border border-[#E5E5E0] bg-[#F8F8F5] p-5"
              >
                <p className="text-[10px] uppercase tracking-[2px] text-gray-400">
                  {label}
                </p>
                <p className="mt-2 font-medium">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <CodesysGallery />
          </div>
        </div>
      </section>

      {/* 03 Box Tracking */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="03"
            title="Box Tracking"
            eyebrow="State & position"
          />

          <div className="grid items-start gap-10 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                Box tracking is one of the central parts of the control
                strategy. Each active product has a structured state, while
                its current conveyor position is calculated from the universal
                encoder and scan position.
              </p>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                This information allows the routing logic to act on position
                rather than relying only on a fixed-delay sequence.
              </p>

              <div className="mt-7 grid max-w-sm grid-cols-3 gap-2">
                {["ID", "POSITION", "DESTINATION"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E5E5E0] bg-white px-3 py-3"
                  >
                    <span className="block text-[9px] uppercase tracking-[1.6px] text-gray-300">
                      0{index + 1}
                    </span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[1px] text-gray-500">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5E5E0] bg-white p-3 sm:p-4">
              <img
                src="/images/warehouse-box-structure.jpg"
                alt="CODESYS DUT box tracking data structure"
                className="w-full rounded-2xl bg-[#F2F2ED] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 04 Digital Twin */}
      <section className="border-y border-[#EAEAE5] bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="04"
            title="3D Digital Twin"
            eyebrow="Godot / OIP simulation"
          />

          <p className="max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            The Godot/OIP environment provides the visual simulation layer
            for the warehouse. It represents product movement, scanning,
            diverter actuation, spur conveyors and destination bins.
          </p>

          <div className="mt-10">
            <GodotGallery />
          </div>
        </div>
      </section>

      {/* 05 OPC UA */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="05"
            title="OPC UA Integration"
            eyebrow="PLC ↔ simulation"
          />

          <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-base leading-8 text-gray-600 sm:text-lg">
                OPC UA forms the communication layer between the CODESYS
                control system and the 3D simulation. Exposed variables carry
                the states and commands required for the simulated process to
                respond to the PLC.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-[2.5px] text-gray-400">
                  Control ↔ Simulation
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-[#E5E5E0] bg-white p-3 sm:p-4">
              <img
                src="/images/warehouse-opcua.jpg"
                alt="OPC UA variable browser"
                className="w-full rounded-2xl bg-[#F2F2ED] object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 06 Operator Control */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="06"
            title="Operator Control"
            eyebrow="Current implementation"
          />

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                label: "Simulation Interface",
                title: "Operator Inputs",
                text:
                  "The current 3D environment provides basic operator inputs for starting, stopping and testing conveyor behaviour.",
              },
              {
                label: "Current Brain",
                title: "CODESYS PLC",
                text:
                  "Product management, tracking, sequencing and routing are handled by the PLC control logic.",
              },
              {
                label: "Future Layer",
                title: "Ignition HMI / SCADA",
                text:
                  "Planned as a future supervisory and visualization layer for operator-facing control and system monitoring.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-[#E5E5E0] bg-[#F8F8F5] p-6"
              >
                <p className="pr-4 text-[10px] uppercase tracking-[2px] text-gray-400">
                  {item.label}
                </p>

                <h3 className="mt-3 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 Engineering Highlights */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <SectionTitle
            number="07"
            title="Engineering Highlights"
            eyebrow="What the project demonstrates"
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {engineeringHighlights.map((item, index) => (
              <div
                key={item.title}
                className="relative rounded-3xl border border-[#E5E5E0] bg-white p-6"
              >
                <span className="absolute right-6 top-6 text-[10px] tabular-nums text-gray-300">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="pr-8 text-xl font-bold">{item.title}</h3>

                <p className="mt-3 text-sm leading-7 text-gray-500 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:px-6 sm:py-20">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[28px] border border-[#E5E5E0] bg-[#F8F8F5] px-6 py-7 sm:flex-row sm:items-center sm:px-8 sm:py-8">
            <div>
              <p className="flex items-center text-[10px] uppercase tracking-[3px] text-gray-400">
                <span className="mr-2 inline-block h-[2px] w-5 bg-[#F4B400]" />Source &amp; Documentation
              </p>

              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Project repository
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
                The repository can contain the CODESYS logic, simulation
                files and supporting project documentation.
              </p>
            </div>

            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex whitespace-nowrap rounded-full bg-[#111] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2A2A2A]"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-5 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col justify-between gap-5 sm:flex-row">
          <p className="text-sm text-gray-400">© 2026 Minhal Rahman</p>

          <div className="flex flex-wrap gap-6">
            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-black"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/minhal-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition hover:text-black"
            >
              LinkedIn
            </a>

            <a
              href="mailto:minhalrahman21@gmail.com"
              className="text-sm text-gray-400 transition hover:text-black"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
