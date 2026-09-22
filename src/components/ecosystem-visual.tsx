export function EcosystemVisual() {
  return (
    <figure className="relative overflow-hidden border border-line bg-gradient-to-b from-white/[0.05] to-transparent p-4 sm:p-6">
      <svg
        viewBox="0 0 720 470"
        className="h-auto w-full"
        role="img"
        aria-label="Diagram of the GanSystems ecosystem: pond sensors send readings to an ESP32 controller, which publishes telemetry to the cloud, which updates the dashboard, which triggers automated drain and refill control back at the pond."
      >
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#16a9b8" stopOpacity="0.38" />
            <stop offset="100%" stopColor="#0b3b3f" stopOpacity="0.12" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#16d66b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3ecfd6" stopOpacity="0.9" />
          </linearGradient>
        </defs>
 
        {/* Pond */}
        <g>
          <rect
            x="30"
            y="330"
            width="660"
            height="118"
            rx="16"
            fill="url(#water)"
            stroke="rgba(62,207,214,0.35)"
          />
          <path
            d="M50 362c30 0 30-12 60-12s30 12 60 12 30-12 60-12 30 12 60 12 30-12 60-12 30 12 60 12 30-12 60-12 30 12 60 12"
            fill="none"
            stroke="rgba(62,207,214,0.5)"
            strokeWidth="1.5"
          />
          <path
            d="M50 396c30 0 30-12 60-12s30 12 60 12 30-12 60-12 30 12 60 12 30-12 60-12 30 12 60 12 30-12 60-12 30 12 60 12"
            fill="none"
            stroke="rgba(62,207,214,0.28)"
            strokeWidth="1.5"
          />
          <text x="46" y="434" className="fill-[#9fb3aa]" fontSize="13">
            Fish pond
          </text>
        </g>
 
        {/* Sensor */}
        <g>
          <rect
            x="60"
            y="214"
            width="150"
            height="58"
            rx="10"
            fill="rgba(4,16,11,0.85)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text x="80" y="240" className="fill-[#f1f6f3]" fontSize="14">
            Sensors
          </text>
          <text x="80" y="259" className="fill-[#9fb3aa]" fontSize="11.5">
            Water quality &amp; level
          </text>
          <line
            x1="135"
            y1="272"
            x2="135"
            y2="392"
            stroke="rgba(62,207,214,0.7)"
            strokeWidth="2"
          />
          <circle cx="135" cy="392" r="6" fill="#3ecfd6" />
          <circle cx="135" cy="392" r="16" className="pulse-node" fill="#3ecfd6" />
        </g>
 
        {/* Controller */}
        <g>
          <rect
            x="248"
            y="214"
            width="160"
            height="58"
            rx="10"
            fill="rgba(4,16,11,0.85)"
            stroke="rgba(255,255,255,0.14)"
          />
          <text x="268" y="240" className="fill-[#f1f6f3]" fontSize="14">
            ESP32 controller
          </text>
          <text x="268" y="259" className="fill-[#9fb3aa]" fontSize="11.5">
            Reads &amp; acts in field
          </text>
        </g>
 
        {/* Telemetry / cloud */}
        <g>
          <rect
            x="248"
            y="92"
            width="160"
            height="58"
            rx="10"
            fill="rgba(4,16,11,0.85)"
            stroke="rgba(22,214,107,0.32)"
          />
          <text x="268" y="118" className="fill-[#f1f6f3]" fontSize="14">
            Live telemetry
          </text>
          <text x="268" y="137" className="fill-[#9fb3aa]" fontSize="11.5">
            Cloud platform
          </text>
        </g>
 
        {/* Dashboard */}
        <g>
          <rect
            x="470"
            y="62"
            width="220"
            height="138"
            rx="12"
            fill="rgba(4,16,11,0.9)"
            stroke="rgba(255,255,255,0.16)"
          />
          <rect
            x="470"
            y="62"
            width="220"
            height="26"
            rx="12"
            fill="rgba(255,255,255,0.05)"
          />
          <circle cx="488" cy="75" r="3.5" fill="rgba(255,255,255,0.28)" />
          <circle cx="500" cy="75" r="3.5" fill="rgba(255,255,255,0.18)" />
          <circle cx="512" cy="75" r="3.5" fill="rgba(255,255,255,0.12)" />
          <rect x="488" y="102" width="82" height="34" rx="6" fill="rgba(22,214,107,0.12)" />
          <rect x="580" y="102" width="92" height="34" rx="6" fill="rgba(62,207,214,0.12)" />
          <path
            d="M490 178c18 0 24-22 42-22s26 14 44 14 26-24 44-24 24 10 52 10"
            fill="none"
            stroke="url(#edge)"
            strokeWidth="2"
          />
          <text x="488" y="160" className="fill-[#9fb3aa]" fontSize="11.5">
            Dashboard monitoring
          </text>
        </g>
 
        {/* Automated control */}
        <g>
          <rect
            x="470"
            y="240"
            width="220"
            height="58"
            rx="10"
            fill="rgba(4,16,11,0.85)"
            stroke="rgba(22,214,107,0.32)"
          />
          <text x="490" y="266" className="fill-[#f1f6f3]" fontSize="14">
            Automated control
          </text>
          <text x="490" y="285" className="fill-[#9fb3aa]" fontSize="11.5">
            Drain &amp; refill on defined conditions
          </text>
          <line
            x1="580"
            y1="298"
            x2="580"
            y2="330"
            stroke="rgba(22,214,107,0.6)"
            strokeWidth="2"
            className="flow-dash"
          />
        </g>
 
        {/* Flows */}
        <g
          fill="none"
          stroke="rgba(22,214,107,0.65)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M210 243h38" className="flow-dash" />
          <path d="M328 214v-64" className="flow-dash" />
          <path d="M408 121h62" className="flow-dash" />
          <path d="M580 200v40" className="flow-dash" />
        </g>
      </svg>
    </figure>
  );
}