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
        <span className="text-4xl sm:text-6xl font-black leading-none text-[#EAEAE2] select-none">
          {number}
        </span>
        <h2 className="pb-1 text-2xl sm:text-4xl font-bold tracking-tight">
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

const dutFields = [
  "Active",
  "BoxID",
  "Barcode",
  "ProductType",
  "Destination",
  "ScanEncoder",
  "CurrentPosition",
  "Sorted",
];

const completedItems = [
  "Barcode-based product identification & destination assignment",
  "Encoder-based position tracking for every active product",
  "Automatic A/B/C diverter routing to the correct spur conveyor",
  "Bin capacity monitoring & warehouse-full interlocks",
  "Independent operator retrieval & recovery logic",
  "CODESYS \u2194 3D digital twin communication over OPC UA",
];

const plannedItems = [
  "Ignition Perspective HMI/SCADA operator interface",
  "Dedicated manual / maintenance control screen",
  "Alarms & events monitoring view",
];

export default function SmartWarehouseProject() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#111]">
      {/* Back */}
      <div className="mx-auto max-w-5xl px-5 pt-5 sm:px-6 sm:pt-9">
        <Link
          href="/"
          className="text-sm text-gray-500 transition-colors hover:text-black"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pb-12 pt-8 sm:px-6 sm:pb-20 sm:pt-14">
        <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <div>
            <p className="flex items-center text-[10px] uppercase tracking-[2.4px] text-gray-400 sm:text-xs sm:tracking-[3px]">
              <span className="mr-2 inline-block h-[2px] w-5 bg-[#F4B400]" />
              PLC Automation &amp; Digital Twin
            </p>

            <h1 className="mt-4 text-[34px] font-black leading-[1.02] tracking-tight sm:text-5xl md:text-[56px]">
              PLC-Based Smart
              <br />
              Warehouse Automation
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              A simulated conveyor-sorting system built to apply core PLC and
              automation concepts — product identification, position
              tracking and automatic routing — using CODESYS, OPC UA and a
              3D digital twin.
            </p>

            <div className="mt-5 flex flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
              {[
                "CODESYS",
                "Ladder Logic",
                "Structured Text",
                "OPC UA",
                "Godot / OIP",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#E5E5E0] bg-white px-2.5 py-1 text-[10px] sm:px-3 sm:py-1.5 sm:text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="md:pl-4">
            <div className="overflow-hidden rounded-[22px] border border-[#E5E5E0] bg-white sm:rounded-[28px]">
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
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="01"
            title="Project Overview"
            eyebrow="Why this project exists"
          />

          <div className="grid items-start gap-7 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
            <div>
              <p className="max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                This project wasn&apos;t built to solve an existing
                industrial problem — it was built to apply core PLC and
                automation concepts I was learning inside a realistic,
                simulated warehouse. CODESYS acts as the control brain,
                deciding what should happen; the 3D simulation represents the
                physical conveyor line responding to those decisions.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                A product enters the line, gets identified at the scanning
                station, and is tracked as it travels — until it reaches the
                diverter for its assigned bin. The sections below walk
                through how each of those steps is actually implemented.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[9px] sm:mt-7 sm:text-[10px] uppercase tracking-[2.4px] text-gray-400">
                Identify · Track · Route
              </div>
            </div>

            {/* Compact process palette — the one canonical place the full pipeline is listed */}
            <div className="rounded-[22px] border border-[#E5E5E0] bg-[#F8F8F5] p-4 sm:rounded-[26px] sm:p-6">
              <p className="text-[10px] font-medium uppercase tracking-[3px] text-gray-500">
                Process Flow
              </p>

              <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:mt-5 sm:gap-x-5 sm:gap-y-3.5">
                {processSteps.map((step, index) => (
                  <div
                    key={step}
                    className="grid min-w-0 grid-cols-[24px_1fr] items-start"
                  >
                    <span className="pt-[2px] text-[10px] tabular-nums text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[11px] font-medium leading-5 sm:text-sm">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02 CODESYS Control — the one place the 3-layer architecture is explained */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="02"
            title="CODESYS Control"
            eyebrow="The brain of the system"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            CODESYS is the single source of control logic for the entire
            system, written in both Ladder Logic and Structured Text. It
            never shares that decision-making with the simulation — instead
            it communicates over OPC UA, so CODESYS decides what should
            happen and the 3D environment represents it happening.
          </p>

          <div className="mt-7 grid grid-cols-3 gap-2 sm:mt-9 sm:gap-4">
            {[
              ["Ladder Logic", "Machine sequencing"],
              ["Structured Text", "Product & routing logic"],
              ["OPC UA", "PLC \u2194 simulation link"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="relative rounded-xl border border-[#E5E5E0] bg-[#F8F8F5] p-2.5 sm:rounded-2xl sm:p-5"
              >
                <p className="text-[7.5px] uppercase tracking-[1px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                  {label}
                </p>
                <p className="mt-1.5 text-[8.5px] font-medium leading-[1.35] sm:mt-2 sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 sm:mt-10">
            <CodesysGallery />
          </div>
        </div>
      </section>

      {/* 03 Box Tracking — the technical centerpiece */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="03"
            title="Box Tracking"
            eyebrow="State & position — the core focus"
          />

          {/* Core Focus callout, now balanced with the DUT fields instead of empty space */}
          <div className="relative mb-7 grid gap-4 rounded-2xl border border-[#E5D9A8] bg-white p-3.5 sm:mb-10 sm:rounded-3xl sm:p-8 md:grid-cols-[1.3fr_1fr] md:gap-8">
            <div className="absolute left-0 top-5 h-8 w-[3px] rounded-r-full bg-[#F4B400] sm:top-8 sm:h-10" />

            <div>
              <span className="inline-flex rounded-full border border-[#F4B400]/50 bg-[#FFF8E3] px-2 py-0.5 text-[7px] font-medium uppercase tracking-[1px] text-[#8a6d00] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[2px]">
                Core Focus
              </span>

              <h3 className="mt-2 text-[12px] font-bold leading-tight sm:mt-3 sm:text-2xl">
                The Product Manager DUT
              </h3>

              <p className="mt-2 text-[8.5px] leading-[1.55] text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
                Each active product is tracked using a custom CODESYS data
                structure (DUT) that acts as a Product Manager for the line —
                holding everything the PLC needs to know about that item
                until it reaches its bin. Getting this state model right was
                where most of the actual engineering work on this project
                happened.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E5E0] bg-[#F8F8F5] p-3 sm:rounded-2xl sm:p-4">
              <p className="text-[7px] uppercase tracking-[1.5px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                DUT_Box fields
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
                {dutFields.map((field) => (
                  <span
                    key={field}
                    className="rounded-md border border-[#E5E5E0] bg-white px-1.5 py-1 font-mono text-[7px] text-gray-600 sm:px-2 sm:py-1.5 sm:text-[11px]"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid items-start gap-7 md:grid-cols-[1fr_0.9fr] md:gap-10">
            <div>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Position is calculated relative to the barcode scanner: the
                moment a product is scanned, its encoder reading is stored as
                a reference point. As the conveyor moves, subtracting that
                reference from the live encoder value gives the product&apos;s
                exact travel distance.
              </p>

              <p className="mt-5 text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                That&apos;s what lets the PLC trigger the correct diverter
                based on real movement, instead of a fixed delay that breaks
                the moment conveyor speed changes.
              </p>

              <div className="mt-6 grid max-w-sm grid-cols-3 gap-2 sm:mt-7">
                {["ID", "POSITION", "DESTINATION"].map((item, index) => (
                  <div
                    key={item}
                    className="rounded-xl border border-[#E5E5E0] bg-white px-2.5 py-2.5 sm:px-3 sm:py-3"
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
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="04"
            title="3D Digital Twin"
            eyebrow="Godot / OIP simulation"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The 3D environment is a digital twin, not an animation — it
            doesn&apos;t move products on its own. It reflects the state
            CODESYS commands over OPC UA: when a diverter activates in the
            PLC, the simulated diverter responds; when a product reaches a
            sensor, that state flows back to the PLC. The video below shows
            a complete cycle.
          </p>

          <div className="mt-7 sm:mt-10">
            <div className="overflow-hidden rounded-[22px] border border-[#E5E5E0] bg-white sm:rounded-[28px]">
              <div className="aspect-video bg-[#F1F1EC]">
                <video
                  className="h-full w-full object-cover"
                  src="/videos/warehouse-demo.mp4"
                  poster="/images/warehouse-demo-poster.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  Your browser does not support embedded video.
                </video>
              </div>
            </div>
            <p className="mt-3 text-[11px] leading-5 text-gray-400 sm:text-sm sm:leading-6">
              A full sorting cycle, start to finish — driven entirely by the
              CODESYS logic, not scripted in the simulation.
            </p>
          </div>

          <div className="mt-7 sm:mt-10">
            <GodotGallery />
          </div>
        </div>
      </section>

      {/* 05 OPC UA — brief, since the architecture is already explained in 02 */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="05"
            title="OPC UA Integration"
            eyebrow="PLC ↔ simulation"
          />

          <div className="grid items-center gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
            <div>
              <p className="text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                OPC UA exposes the PLC variables — diverter states, sensor
                signals, conveyor status — that the simulation needs to stay
                in sync with the control logic in real time.
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

      {/* 06 Status & What's Next — honest, no overclaiming */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <SectionTitle
            number="06"
            title="Status & What's Next"
            eyebrow="Where the project stands"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The core automation is complete and validated in simulation.
            Operator controls currently live directly in the 3D environment
            for testing — a dedicated HMI is the planned next step.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-2 sm:mt-9 sm:gap-6">
            <div className="rounded-xl border border-[#E5E5E0] bg-white p-2.5 sm:rounded-2xl sm:p-6">
              <p className="text-[7.5px] font-medium uppercase tracking-[1.5px] text-[#8a6d00] sm:text-[10px] sm:tracking-[2.5px]">
                Completed
              </p>
              <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                {completedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-[7.5px] leading-[1.4] text-gray-600 sm:gap-2 sm:text-sm sm:leading-6"
                  >
                    <span className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#F4B400] sm:mt-[7px] sm:h-[6px] sm:w-[6px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-[#E5E5E0] bg-[#F8F8F5] p-2.5 sm:rounded-2xl sm:p-6">
              <p className="text-[7.5px] font-medium uppercase tracking-[1.5px] text-gray-400 sm:text-[10px] sm:tracking-[2.5px]">
                Planned Next
              </p>
              <ul className="mt-2.5 space-y-1.5 sm:mt-4 sm:space-y-2.5">
                {plannedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-1.5 text-[7.5px] leading-[1.4] text-gray-500 sm:gap-2 sm:text-sm sm:leading-6"
                  >
                    <span className="mt-[3px] h-[5px] w-[5px] shrink-0 rounded-full border border-gray-300 sm:mt-[7px] sm:h-[6px] sm:w-[6px]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub */}
      <section className="bg-[#F8F8F6]">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-6 sm:py-20">
          <div className="flex flex-row items-center justify-between gap-3 rounded-[22px] border border-[#E5E5E0] bg-white px-4 py-4 sm:gap-4 sm:rounded-[28px] sm:px-8 sm:py-8">
            <div className="min-w-0">
              <p className="flex items-center text-[8px] uppercase tracking-[1.5px] text-gray-400 sm:text-[10px] sm:tracking-[3px]">
                <span className="mr-1.5 inline-block h-[2px] w-3.5 bg-[#F4B400] sm:mr-2 sm:w-5" />
                Source &amp; Documentation
              </p>

              <h2 className="mt-2 text-base font-bold sm:mt-3 sm:text-3xl">
                Project repository
              </h2>

              <p className="mt-2 max-w-2xl text-[9px] leading-[1.5] text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
                The repository can contain the CODESYS logic, simulation
                files and supporting project documentation.
              </p>
            </div>

            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 whitespace-nowrap rounded-full bg-[#111] px-3.5 py-2 text-[10px] font-medium text-white transition-colors hover:bg-[#2A2A2A] sm:px-6 sm:py-3 sm:text-sm"
            >
              GitHub →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-12">
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-5">
          <p className="text-[11px] text-gray-400 sm:text-sm">© 2026 Minhal Rahman</p>

          <div className="flex flex-wrap justify-end gap-3.5 sm:gap-6">
            <a
              href="https://github.com/Minhal11"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-gray-400 transition hover:text-black sm:text-sm"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/minhal-rahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-gray-400 transition hover:text-black sm:text-sm"
            >
              LinkedIn
            </a>

            <a
              href="mailto:minhalrahman21@gmail.com"
              className="text-[11px] text-gray-400 transition hover:text-black sm:text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
