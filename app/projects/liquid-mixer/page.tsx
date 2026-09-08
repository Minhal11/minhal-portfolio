import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "Smart Industrial Liquid Mixer" };
import LabviewGallery from "./LabviewGallery";

import {
  ProjectHero,
  SectionTitle,
  ProjectEnd,
} from "../../components/ProjectLayout";

const processSteps = [
  "System initialization",
  "Recipe configuration",
  "Digital tare calibration",
  "Primary liquid dispensing",
  "Adaptive flow regulation",
  "Secondary liquid dispensing",
  "Agitation & mixing",
  "Process completion",
];

const architectureBlocks: [string, string][] = [
  ["Input Interface", "Load cell + HX711 ADC, plus the web dashboard"],
  ["Control Unit", "ESP32 dosing state machine & web server"],
  ["Actuator Drivers", "L298N drives both pumps; relay drives the mixer"],
  ["Power Supply", "12V input stepped down to 5V via buck converter"],
];

const pwmStats: [string, string][] = [
  ["ON/OFF control", "~13 g avg. error"],
  ["Two-stage PWM", "~4 g avg. error"],
  ["Improvement", "~65\u201370%"],
];

const dashboardFeatures: [string, string][] = [
  [
    "Recipe-Based Operation",
    "Predefined liquid quantities selected and run automatically",
  ],
  ["Live Telemetry", "Continuous weight, pump and mixer status over Wi-Fi"],
  ["Manual & Auto Modes", "Direct control alongside the recipe-driven flow"],
  ["Start / Stop / Tare", "Full process control plus an emergency stop"],
];

export default function LiquidMixerProject() {
  return (
    <main
      id="main-content"
      className="case-study min-h-screen bg-[#F8F8F6] text-[#111]"
    >
      <ProjectHero
        number="02"
        title="Smart Industrial Liquid Mixer"
        category="EMBEDDED SYSTEMS · PROCESS CONTROL"
        description="A gravimetric liquid dosing and mixing system, validated in LabVIEW and built as an ESP32 hardware prototype with a live web dashboard."
        image="/images/liquid-mixer-prototype.jpg"
        status="Hardware prototype"
        tags={["LabVIEW", "ESP32", "Load Cell", "PWM Control", "Web Dashboard"]}
      />

      {/* 01 Overview */}
      <section className="case-section case-section-sage" id="overview">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="01"
            title="Project Overview"
            eyebrow="Why this project exists"
          />

          <div className="grid items-start gap-7 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
            <div>
              <p className="max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                Industrial liquid mixing is usually handled either by manual
                operation — inconsistent and error-prone — or by conventional
                PLC/SCADA automation, which is reliable but often rigid, costly
                and short on native IoT connectivity. This project explores a
                middle path: validating the control logic in LabVIEW first, then
                implementing it on a low-cost ESP32-based hardware prototype
                with a live web dashboard.
              </p>

              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
                The system doses two liquids according to a selected recipe,
                using a load cell to weigh what&apos;s actually been dispensed
                rather than trusting a timer, then runs a mixing stage once both
                target weights are reached. The sections below walk through how
                each stage was designed and implemented.
              </p>

              <div className="mt-6 flex items-center gap-2 text-[11px] sm:mt-7 sm:text-[10px] uppercase tracking-[2.4px] text-gray-400">
                Dose · Regulate · Mix · Monitor
              </div>
            </div>

            {/* Canonical process flow — the one place the full pipeline is listed */}
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

      {/* 02 System Architecture — the one place the full architecture is explained */}
      <section className="case-section case-section-light" id="engineering">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="02"
            title="System Architecture"
            eyebrow="The ESP32 is the single control hub"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The ESP32 reads the load cell, drives both pumps and the mixer, and
            hosts the web dashboard — all from one board. Sensing feeds into the
            control unit&apos;s state machine, which decides what the actuators
            do next, while a separate regulated power stage keeps the
            electronics isolated from the higher-current pump and relay
            circuits.
          </p>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:mt-9 sm:gap-4">
            {architectureBlocks.map(([label, value]) => (
              <div
                key={label}
                className="relative rounded-xl border border-[#E5E5E0] bg-[#F8F8F5] p-2.5 sm:rounded-2xl sm:p-5"
              >
                <p className="text-[11px] uppercase tracking-[1px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                  {label}
                </p>
                <p className="mt-1.5 text-[11px] font-medium leading-[1.35] sm:mt-2 sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 Core Focus — the standout, data-backed engineering result */}
      <section className="case-section case-section-paper">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="03"
            title="Two-Stage PWM Dosing Control"
            eyebrow="Core focus"
          />

          <div className="relative grid gap-4 rounded-2xl border border-[#d9dece] bg-white p-3.5 sm:rounded-3xl sm:p-8 md:grid-cols-[1.3fr_1fr] md:gap-8">
            <div className="absolute left-0 top-5 h-8 w-[3px] rounded-r-full bg-[#c94a23] sm:top-8 sm:h-10" />

            <div>
              <span className="inline-flex rounded-full border border-[#c94a23]/50 bg-[#e9ecdf] px-2 py-0.5 text-[11px] font-medium uppercase tracking-[1px] text-[#526046] sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[2px]">
                Core Focus
              </span>

              <h3 className="mt-2 text-[18px] font-medium leading-tight sm:mt-3 sm:text-2xl">
                Solving the Overshoot Problem
              </h3>

              <p className="mt-2 text-[11px] leading-[1.55] text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
                Early testing used simple ON/OFF pump control — full speed until
                the target weight was reached. Fluid inertia and sensor response
                delay meant the pump kept dispensing after the stop command,
                causing consistent overshoot. Switching to a two-stage strategy
                — full-speed filling, then PWM-throttled deceleration as the
                reading approaches the target — let the system slow down before
                the setpoint instead of stopping abruptly at it.
              </p>
            </div>

            <div className="rounded-xl border border-[#E5E5E0] bg-[#F8F8F5] p-3 sm:rounded-2xl sm:p-4">
              <p className="text-[11px] uppercase tracking-[1.5px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                Measured results
              </p>
              <div className="mt-2.5 space-y-1.5 sm:mt-3 sm:space-y-2">
                {pwmStats.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-2 rounded-md border border-[#E5E5E0] bg-white px-1.5 py-1 sm:px-2.5 sm:py-1.5"
                  >
                    <span className="text-[11px] text-gray-500 sm:text-[11px]">
                      {label}
                    </span>
                    <span className="font-mono text-[11px] font-medium text-[#111] sm:text-[11px]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 max-w-3xl text-[15px] leading-7 text-gray-600 sm:mt-9 sm:text-lg sm:leading-8">
            That feedback comes from a load cell and HX711 amplifier rather than
            a fixed timer or volumetric estimate — so accuracy holds regardless
            of pump wear, liquid viscosity or small voltage fluctuations that
            would throw off a time-based approach.
          </p>

          <div className="mt-6 grid max-w-sm grid-cols-3 gap-2 sm:mt-7">
            {["TARGET", "LIVE WEIGHT", "PWM DUTY"].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-[#E5E5E0] bg-white px-2.5 py-2.5 sm:px-3 sm:py-3"
              >
                <span className="block text-[11px] uppercase tracking-[1.6px] text-gray-300">
                  0{index + 1}
                </span>
                <span className="mt-1 block text-[11px] uppercase tracking-[1px] text-gray-500 sm:text-[10px]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 LabVIEW Digital Twin */}
      <section className="case-section case-section-sage">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="04"
            title="LabVIEW Digital Twin"
            eyebrow="Simulated before it was built"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Before any hardware was assembled, the control logic was modeled and
            tested in LabVIEW — the state machine, dosing sequence and
            level/temperature behaviour were all validated in simulation first,
            so the hardware build started from a proven design rather than trial
            and error on physical pumps.
          </p>

          <div className="mt-6 rounded-2xl border border-[#c94a23]/30 bg-[#e9ecdf] px-4 py-4 sm:mt-7 sm:rounded-3xl sm:px-6 sm:py-5">
            <p className="text-[11px] font-semibold uppercase tracking-[1.5px] text-[#526046] sm:text-[11px] sm:tracking-wide">
              Note
            </p>
            <p className="mt-2 text-[11px] leading-[1.6] text-gray-700 sm:text-base sm:leading-7">
              Temperature control was validated in simulation only — the
              physical prototype focuses on automated dosing and mixing.
            </p>
          </div>
        </div>
      </section>

      {/* 05 Web Dashboard */}
      <section className="case-section case-section-paper">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="05"
            title="Web Dashboard"
            eyebrow="Browser-based monitoring & control"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The ESP32 hosts a lightweight web server directly, so the dashboard
            needs no external app or gateway — just a browser on the same
            network.
          </p>

          <div className="mt-6 rounded-2xl border border-[#E5E5E0] bg-white p-3 sm:mt-9 sm:rounded-3xl sm:p-4">
            <Image
              width={1400}
              height={900}
              src="/images/dashboard.jpg"
              alt="Web Dashboard Interface"
              className="w-full rounded-xl bg-[#F2F2ED] object-contain sm:rounded-2xl"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:mt-9 sm:gap-4">
            {dashboardFeatures.map(([label, value]) => (
              <div
                key={label}
                className="relative rounded-xl border border-[#E5E5E0] bg-white p-2.5 sm:rounded-2xl sm:p-5"
              >
                <p className="text-[11px] uppercase tracking-[1px] text-gray-400 sm:text-[10px] sm:tracking-[2px]">
                  {label}
                </p>
                <p className="mt-1.5 text-[11px] font-medium leading-[1.35] sm:mt-2 sm:text-base">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06 Hardware Prototype */}
      <section className="case-section case-section-light">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="06"
            title="Hardware Prototype"
            eyebrow="From simulation to a physical build"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The physical prototype integrates the ESP32, a load cell with HX711
            amplifier, an L298N driver for the two dosing pumps, and a
            relay-switched mixer motor — all powered through a 12V supply
            stepped down to a regulated 5V rail for the control electronics.
          </p>

          <p className="mt-5 max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            It&apos;s a lab-scale build, not an industrial one — small 5V
            submersible pumps, no industrial safety interlocks, and no precision
            valves. That scope is intentional: it&apos;s enough to prove the
            control strategy works, which is what the roadmap below builds on.
          </p>
        </div>
      </section>

      {/* 07 Conclusion — narrative close, since this is a finished project, not an ongoing one */}
      <section className="case-section case-section-paper">
        <div className="wrap case-section-inner">
          <span className="mx-auto mb-5 block h-[3px] w-11 rounded-full bg-[#c94a23] sm:mb-7 sm:w-12" />

          <p className="mx-auto max-w-2xl text-center text-[15px] leading-7 text-gray-600 sm:text-xl sm:leading-9">
            The project set out to answer a simple question — could a
            fixed-cost, ESP32-based prototype hold its own against the rigid,
            expensive automation usually reserved for industrial-scale mixing?
            The LabVIEW model proved the control logic was sound before a single
            wire was soldered, and the two-stage PWM strategy carried that
            accuracy straight through to the physical build. What started as a
            simulation ended as a fully working, web-monitored dosing system —
            proof that precision automation doesn&apos;t have to come with an
            industrial price tag.
          </p>
        </div>
      </section>

      {/* 08 Project Gallery — the single browsable set of every visual on the project */}
      <section className="case-section case-section-light" id="gallery">
        <div className="wrap case-section-inner">
          <SectionTitle
            number="07"
            title="Project Gallery"
            eyebrow="Simulation to hardware, in order"
          />

          <p className="max-w-3xl text-[15px] leading-7 text-gray-600 sm:text-lg sm:leading-8">
            The full visual progression — LabVIEW front panel and control logic,
            system architecture, the dashboard, and the finished prototype with
            its circuit design.
          </p>

          <div className="mt-7 sm:mt-10">
            <LabviewGallery />
          </div>
        </div>
      </section>

      {/* Project report download */}
      <section className="case-section case-section-paper" id="resources">
        <div className="wrap case-section-inner">
          <div className="grid grid-cols-1 gap-3 sm:gap-6">
            <div className="flex flex-col justify-between rounded-2xl border border-[#E5E5E0] bg-white p-3 sm:rounded-3xl sm:p-6">
              <div>
                <p className="flex items-center text-[11px] uppercase tracking-[1px] text-gray-400 sm:text-[10px] sm:tracking-[2.5px]">
                  <span className="mr-1.5 inline-block h-[2px] w-3 bg-[#c94a23] sm:mr-2 sm:w-5" />
                  Full Documentation
                </p>
                <h2 className="mt-1.5 text-[11px] font-bold sm:mt-3 sm:text-2xl">
                  Project Report
                </h2>
                <p className="mt-1.5 text-[11px] leading-[1.5] text-gray-500 sm:mt-3 sm:text-base sm:leading-7">
                  The complete B.Tech report — literature survey, system design,
                  experimental results and conclusions.
                </p>
              </div>

              <a
                href="/documents/Smart-Industrial-Liquid-Mixer-Report.pdf"
                download
                className="mt-3 inline-flex w-fit shrink-0 whitespace-nowrap rounded-full bg-[#111] px-3 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-[#2A2A2A] sm:mt-6 sm:px-6 sm:py-3 sm:text-sm"
              >
                Download PDF
              </a>
            </div>


          </div>
        </div>
      </section>

      <ProjectEnd
        href="/projects/smart-warehouse"
        title="Smart Warehouse Automation"
        number="01"
      />
    </main>
  );
}
