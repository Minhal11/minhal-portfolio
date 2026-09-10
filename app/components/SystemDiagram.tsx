"use client";

import { useEffect, useRef } from "react";

const DOTS: [number, number][] = [];
for (let y = 1; y <= 440; y += 24) {
  for (let x = 1; x <= 560; x += 24) {
    DOTS.push([x, y]);
  }
}

export default function SystemDiagram() {
  const rootRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const dotsRef = useRef<SVGGElement>(null);
  const ringsRef = useRef<SVGGElement>(null);
  const flowRef = useRef<SVGGElement>(null);
  const rearRef = useRef<SVGGElement>(null);
  const aiRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const svg = svgRef.current;
    if (!root || !svg) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reduceMotion.matches) return;

    const pointer = { x: 280, y: 220, inside: false };
    const smoothed = { x: 280, y: 220, inf: 0 };
    const dotOff = DOTS.map(() => ({ x: 0, y: 0 }));
    let frame = 0;
    let running = true;

    const toSvg = (clientX: number, clientY: number) => {
      const ctm = svg.getScreenCTM();
      if (!ctm) return;
      const point = new DOMPoint(clientX, clientY).matrixTransform(
        ctm.inverse(),
      );
      pointer.x = point.x;
      pointer.y = point.y;
    };

    const onMove = (event: PointerEvent) => {
      pointer.inside = true;
      toSvg(event.clientX, event.clientY);
    };
    const onLeave = () => {
      pointer.inside = false;
    };

    root.addEventListener("pointermove", onMove);
    root.addEventListener("pointerenter", onMove);
    root.addEventListener("pointerleave", onLeave);

    const rings = ringsRef.current;
    const flow = flowRef.current;
    const rear = rearRef.current;
    const ai = aiRef.current;
    const dots = dotsRef.current?.children;

    const tick = () => {
      if (!running) return;

      const targetInf = pointer.inside ? 1 : 0;
      const targetX = pointer.inside ? pointer.x : 280;
      const targetY = pointer.inside ? pointer.y : 220;
      smoothed.x += (targetX - smoothed.x) * 0.1;
      smoothed.y += (targetY - smoothed.y) * 0.1;
      smoothed.inf += (targetInf - smoothed.inf) * 0.1;

      const inf = smoothed.inf;
      const nx = (smoothed.x - 280) / 280;
      const ny = (smoothed.y - 220) / 220;
      const proximity =
        Math.max(0, 1 - Math.hypot(smoothed.x - 280, smoothed.y - 220) / 210) *
        inf;
      const scale = 1 + proximity * 0.036;

      rings?.setAttribute(
        "transform",
        `translate(280 220) scale(${scale}) translate(-280 -220)`,
      );
      flow?.setAttribute(
        "transform",
        `translate(${(nx * 4.2 * inf).toFixed(3)} ${(ny * 3.2 * inf).toFixed(3)})`,
      );
      rear?.setAttribute(
        "transform",
        `translate(${(nx * 6.5 * inf).toFixed(3)} ${(ny * 5.2 * inf).toFixed(3)})`,
      );
      ai?.setAttribute(
        "transform",
        `translate(${(nx * 4.8 * inf).toFixed(3)} ${(ny * 3.8 * inf).toFixed(3)})`,
      );

      if (dots) {
        for (let i = 0; i < DOTS.length; i++) {
          const [restX, restY] = DOTS[i];
          const dx = restX - smoothed.x;
          const dy = restY - smoothed.y;
          const dist = Math.hypot(dx, dy);
          const radius = 56;
          let ox = 0;
          let oy = 0;
          if (inf > 0.01 && dist < radius && dist > 0.25) {
            const falloff = 1 - dist / radius;
            const mag = falloff * falloff * 9.5 * inf;
            ox = (dx / dist) * mag;
            oy = (dy / dist) * mag;
          }
          const current = dotOff[i];
          current.x += (ox - current.x) * 0.16;
          current.y += (oy - current.y) * 0.16;
          if (ox === 0 && oy === 0 && Math.abs(current.x) < 0.03) {
            current.x = 0;
            current.y = 0;
          }
          (dots[i] as SVGElement).setAttribute(
            "transform",
            `translate(${current.x.toFixed(2)} ${current.y.toFixed(2)})`,
          );
        }
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);

    return () => {
      running = false;
      window.cancelAnimationFrame(frame);
      root.removeEventListener("pointermove", onMove);
      root.removeEventListener("pointerenter", onMove);
      root.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="system-diagram"
      role="img"
      aria-label="Illustrated control system: sensor input passes through PLC logic to an actuator with a feedback loop, augmented by an intelligence module."
    >
      <div className="diagram-top">
        <span>
          <i /> CONTROL SYSTEM
        </span>
        <span>FIG. 01 / CLOSED LOOP</span>
      </div>
      <svg ref={svgRef} viewBox="0 0 560 440" fill="none" aria-hidden="true">
        <defs>
          <linearGradient
            id="unit"
            x1="210"
            y1="120"
            x2="350"
            y2="290"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#383e3b" />
            <stop offset="1" stopColor="#171e1b" />
          </linearGradient>
        </defs>
        <rect width="560" height="440" fill="#eeeee5" />
        <g ref={dotsRef}>
          {DOTS.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="#c8c7bf" />
          ))}
        </g>
        <g ref={ringsRef}>
          <circle
            cx="280"
            cy="220"
            r="161"
            stroke="#d6d6cc"
            strokeDasharray="3 6"
          />
          <circle cx="280" cy="220" r="124" stroke="#ddddd5" />
        </g>
        <g ref={flowRef}>
          <path
            d="M89 220H203M357 220H476M476 244V347H89V244"
            stroke="#92988e"
            strokeWidth="1.5"
          />
          <path
            className="signal-line"
            d="M89 220H203M357 220H476M476 244V347H89V244"
            stroke="#F4B400"
            strokeWidth="2"
            strokeDasharray="7 160"
          />
          <path
            d="m191 215 8 5-8 5m271-10 8 5-8 5m-186 122-8 5 8 5"
            stroke="#F4B400"
            strokeWidth="2"
          />
        </g>
        <rect
          x="55"
          y="188"
          width="67"
          height="64"
          rx="9"
          fill="#f8f7f1"
          stroke="#aeb2a7"
        />
        <circle cx="89" cy="220" r="17" stroke="#465349" />
        <path
          d="M67 220h9l6-10 9 21 7-11h13"
          stroke="#465349"
          strokeWidth="1.5"
        />
        <rect
          x="443"
          y="188"
          width="67"
          height="64"
          rx="9"
          fill="#f8f7f1"
          stroke="#aeb2a7"
        />
        <circle cx="476" cy="220" r="17" stroke="#465349" />
        <path
          d="M467 228v-16l9 10 9-10v16"
          stroke="#465349"
          strokeWidth="1.5"
        />
        <g ref={rearRef}>
          <rect
            x="215"
            y="132"
            width="144"
            height="164"
            rx="13"
            fill="#c9c9bf"
          />
        </g>
        <rect
          x="202"
          y="119"
          width="144"
          height="164"
          rx="13"
          fill="url(#unit)"
          stroke="#49534b"
        />
        <path d="M216 149h116M216 254h116" stroke="#546056" />
        {[222, 237, 252, 267, 282, 297, 312, 327].map((x) => (
          <g key={x}>
            <rect x={x} y="128" width="7" height="12" rx="1" fill="#81887b" />
            <rect x={x} y="262" width="7" height="12" rx="1" fill="#81887b" />
          </g>
        ))}
        <rect
          x="219"
          y="164"
          width="110"
          height="69"
          rx="4"
          fill="#2e3930"
          stroke="#64705c"
        />
        <text
          x="231"
          y="185"
          fill="#a8b6a0"
          fontSize="8"
          fontFamily="monospace"
        >
          PROGRAM / RUN
        </text>
        <text
          x="230"
          y="214"
          fill="#e3edcc"
          fontSize="24"
          fontFamily="monospace"
        >
          PLC_01
        </text>
        <circle className="run-light" cx="320" cy="244" r="3" fill="#c9e7a8" />
        <g ref={aiRef}>
          <path d="M280 90V119" stroke="#92988e" strokeWidth="1.25" />
          <path d="m276 111 4 8 4-8" stroke="#92988e" strokeWidth="1.25" />
          <rect
            x="241"
            y="42"
            width="78"
            height="48"
            rx="8"
            fill="#f8f7f1"
            stroke="#aeb2a7"
          />
          <rect x="241" y="42" width="3" height="48" rx="1.5" fill="#F4B400" />
          <text
            x="256"
            y="62"
            fill="#465349"
            fontSize="11"
            fontFamily="monospace"
          >
            AI_01
          </text>
          <text
            x="254"
            y="76"
            fill="#657064"
            fontSize="6.5"
            fontFamily="monospace"
            letterSpacing="0.8"
          >
            INTELLIGENCE
          </text>
        </g>
        <text x="55" y="276" fill="#657064" fontSize="9" fontFamily="monospace">
          01 / SENSE
        </text>
        <text
          x="443"
          y="276"
          fill="#657064"
          fontSize="9"
          fontFamily="monospace"
        >
          03 / ACT
        </text>
        <text
          x="238"
          y="315"
          fill="#657064"
          fontSize="9"
          fontFamily="monospace"
        >
          02 / CONTROL
        </text>
        <rect
          x="216"
          y="334"
          width="130"
          height="26"
          rx="13"
          fill="#e9ebe0"
          stroke="#ced2c4"
        />
        <text
          x="235"
          y="350"
          fill="#657064"
          fontSize="9"
          fontFamily="monospace"
        >
          FEEDBACK LOOP
        </text>
        <path
          d="M29 35v-9h9M530 35v-9h-9M29 402v9h9M530 402v9h-9"
          stroke="#949c8e"
        />
      </svg>
      <div className="diagram-bottom">
        <span>INPUT → LOGIC → ACTION</span>
        <span className="diagram-note">Engineering, connected.</span>
      </div>
    </div>
  );
}
