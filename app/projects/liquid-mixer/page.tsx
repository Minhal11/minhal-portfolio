import Link from "next/link";
import LabviewGallery from "./LabviewGallery";
function SectionTitle({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-end gap-4 mb-10">
      <span className="text-7xl font-black text-[#EAEAE2] leading-none select-none">
        {number}
      </span>

      <h2 className="text-4xl font-bold mb-2">
        {title}
      </h2>
    </div>
  );
}

export default function LiquidMixerProject() {
  return (
    <main className="min-h-screen bg-[#F8F8F6] text-[#111]">

      {/* Back Button */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">

          <div>
            <p className="uppercase tracking-[3px] text-sm text-gray-500">
              Final Year B.Tech Project
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl font-black leading-[1.05]">
              Smart Industrial
              <br />
              Liquid Mixer
            </h1>

            <span className="block mt-3 w-12 h-[3px] bg-[#F4B400] rounded-full" />

            <p className="mt-6 text-lg text-gray-600 leading-8">
              A recipe-based liquid dosing and mixing system developed using
              LabVIEW, ESP32 and a web dashboard for industrial automation
              applications.
            </p>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-44 h-44 bg-[#F4B400]/20 rounded-full blur-3xl" />

            <div className="relative rounded-3xl overflow-hidden border border-[#E5E5E0]">
              <img
                src="/images/liquid-mixer-prototype.jpg"
                alt="Smart Liquid Mixer Prototype"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 01 Overview */}
      <section className="bg-white mt-20">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="01"
            title="Project Overview"
          />

          <p className="text-lg text-gray-600 leading-8 max-w-3xl">
            The Smart Industrial Liquid Mixer is a B.Tech final year project
            focused on recipe-based liquid mixing automation.
          </p>

          <p className="mt-5 text-lg text-gray-600 leading-8 max-w-3xl">
            The project combines a LabVIEW digital twin, ESP32 hardware
            implementation and a browser-based dashboard to automate dosing,
            mixing and process monitoring.
          </p>

        </div>
      </section>

      {/* 02 Objectives */}
      <section className="bg-[#F8F8F6]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="02"
            title="Objectives"
          />

          <ul className="grid md:grid-cols-2 gap-4 text-lg text-gray-600">
            <li>• Develop an automated liquid dosing system</li>
            <li>• Implement recipe-based process control</li>
            <li>• Create a LabVIEW digital twin</li>
            <li>• Build an ESP32-based prototype</li>
            <li>• Develop a web dashboard</li>
            <li>• Validate process control logic</li>
          </ul>

        </div>
      </section>

      {/* 03 System Architecture */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="03"
            title="System Architecture"
          />

          <div className="rounded-3xl overflow-hidden border border-[#E5E5E0]">
            <img
              src="/images/block-diagram.jpg"
              alt="System Architecture"
              className="w-full"
            />
          </div>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-3xl">
            The system uses ESP32 as the central controller. Load-cell
            feedback provides dosing accuracy while pumps and motors are
            controlled through driver modules.
          </p>

        </div>
      </section>

      {/* 04 LabVIEW Digital Twin */}
      {/* 04 LabVIEW Digital Twin */}
<section className="bg-[#F8F8F6]">
  <div className="max-w-6xl mx-auto px-6 py-24">

    <SectionTitle
      number="04"
      title="LabVIEW Digital Twin"
    />

    <p className="text-lg text-gray-600 leading-8 max-w-3xl mb-10">
      The LabVIEW Digital Twin was developed to validate the process sequence,
      dosing logic, temperature simulation and system behavior before hardware
      implementation. The gallery below illustrates the front panel and the
      step-by-step state machine used throughout the automation workflow.
    </p>

    <LabviewGallery />

  </div>
</section>

      {/* 05 Web Dashboard */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="05"
            title="Web Dashboard"
          />

          <div className="rounded-3xl overflow-hidden border border-[#E5E5E0]">
            <img
              src="/images/dashboard.jpg"
              alt="Web Dashboard"
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* 06 Hardware Implementation */}
      <section className="bg-[#F8F8F6]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="06"
            title="Hardware Implementation"
          />

          <div className="rounded-3xl overflow-hidden border border-[#E5E5E0]">
            <img
              src="/images/circuit-diagram.jpg"
              alt="Circuit Diagram"
              className="w-full"
            />
          </div>

        </div>
      </section>

      {/* 07 Working Prototype */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <SectionTitle
            number="07"
            title="Working Prototype"
          />

          <div className="rounded-3xl overflow-hidden">
            <img
              src="/images/liquid-mixer-prototype.jpg"
              alt="Prototype"
              className="w-full"
            />
          </div>

        </div>
      </section>

    </main>
  );
}

