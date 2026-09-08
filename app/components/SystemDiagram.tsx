export default function SystemDiagram() {
  return (
    <div
      className="system-diagram"
      role="img"
      aria-label="Illustrated control system: sensor input passes through PLC logic to an actuator with a feedback loop."
    >
      <div className="diagram-top">
        <span>
          <i /> CONTROL SYSTEM
        </span>
        <span>FIG. 01 / CLOSED LOOP</span>
      </div>
      <svg viewBox="0 0 560 440" fill="none" aria-hidden="true">
        <defs>
          <pattern
            id="grid"
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.8" fill="#c8c7bf" />
          </pattern>
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
        <rect width="560" height="440" fill="url(#grid)" />
        <circle
          cx="280"
          cy="220"
          r="161"
          stroke="#d6d6cc"
          strokeDasharray="3 6"
        />
        <circle cx="280" cy="220" r="124" stroke="#ddddd5" />
        <path
          d="M89 220H203M357 220H476M476 244V347H89V244"
          stroke="#92988e"
          strokeWidth="1.5"
        />
        <path
          className="signal-line"
          d="M89 220H203M357 220H476M476 244V347H89V244"
          stroke="#e6693c"
          strokeWidth="2"
          strokeDasharray="7 160"
        />
        <path
          d="m191 215 8 5-8 5m271-10 8 5-8 5m-186 122-8 5 8 5"
          stroke="#e6693c"
          strokeWidth="2"
        />
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
        <rect x="215" y="132" width="144" height="164" rx="13" fill="#c9c9bf" />
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
