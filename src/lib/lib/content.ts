export const company = {
  legalName: "GanSystems Limited",
  productName: "GanSystems",
  email: "mvmholdco@gmail.com",
  prototypeUrl: "https://gansystem.vercel.app",
  tagline: "Building practical smart-aquaculture technology for Nigeria and beyond.",
  description:
    "GanSystems Limited builds GanSystems, an IoT aquaculture platform for water-quality monitoring, live telemetry, and automated water control.",
};
 
export const navLinks = [
  { label: "Solutions", href: "/what-we-do" },
  { label: "How It Works", href: "/technology" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];
 
export const recognition = {
  programme: "Nigerian Engineering Olympiad 2026",
  placement: "Top 5 in North Central",
  pool: "Selected from 400+ applicants",
  founderCount: "3 co-founders",
  description: "Recognized by the NEO Innovation Challenge 2026",
};
 
export type Award = {
  placement: string;
  programme: string;
  note?: string;
};
 
export const awards: Award[] = [
  {
    placement: "Winners",
    programme: "Africa Innovation Challenge 2023",
  },
  {
    placement: recognition.placement,
    programme: recognition.programme,
    note: recognition.pool,
  },
];
 
/** Platform facts taken from the system-architecture diagram in the prototype. */
export const platformSpecs = [
  {
    label: "Field hardware",
    value: "ESP32 controllers, sensors, actuators",
  },
  {
    label: "Transport",
    value: "MQTT broker to the cloud platform",
  },
  {
    label: "Real time",
    value: "WebSocket streaming to the dashboard",
  },
  {
    label: "Automation",
    value: "Drain and refill on defined conditions",
  },
];
 
export type TeamMember = {
  name: string;
  role: string;
  shortRole: string;
  responsibility: string;
  /** Empty when no portrait is available yet. */
  photo: string;
  linkedin?: string;
  coFounder: boolean;
};
 
export const team: TeamMember[] = [
  {
    name: "Onah Chiedozie Maxwell",
    role: "Co-Founder & Chief Executive Officer",
    shortRole: "CEO",
    responsibility:
      "Business leadership, strategy, partnerships, and overall company direction.",
    photo: "/screenshots/maxwell.png",
    linkedin: "https://www.linkedin.com/in/maxwell-onah-327335290",
    coFounder: true,
  },
  {
    name: "Okonkwo John Valentine",
    role: "Co-Founder & Chief Technology Officer",
    shortRole: "CTO",
    responsibility:
      "Hardware, engineering, IoT infrastructure, system architecture, and technical development.",
    photo: "/screenshots/valentine.png",
    linkedin: "https://www.linkedin.com/in/jvcbyte",
    coFounder: true,
  },
  {
    name: "Amaddin Iyobosa Majid",
    role: "Co-Founder & Chief Operating Officer",
    shortRole: "COO",
    responsibility:
      "Software systems, product development, automation, operations, and business execution.",
    photo: "/screenshots/iyobosa.png",
    linkedin: "https://www.linkedin.com/in/codeandbe",
    coFounder: true,
  },
  {
    name: "Nyam Simi Victoria",
    role: "Chief Marketing Officer",
    shortRole: "CMO",
    responsibility: "Marketing, brand, and communications.",
    photo: "",
    coFounder: false,
  },
];
 
export const founders = team.filter((member) => member.coFounder);
 
export type Solution = {
  id: string;
  title: string;
  summary: string;
  benefit: string;
  detail: string;
};
 
export const solutions: Solution[] = [
  {
    id: "water-quality-monitoring",
    title: "Water-Quality Monitoring",
    summary:
      "Track critical aquaculture conditions, device health, and pond activity from a single live view.",
    benefit: "One place to see how every pond is doing right now.",
    detail:
      "Connected sensors report water conditions continuously, so operators stay informed without constant manual reporting or spot checks.",
  },
  {
    id: "automated-water-control",
    title: "Automated Water Control",
    summary:
      "Support draining and refilling actions when predefined water conditions require intervention.",
    benefit: "Corrective action does not have to wait for someone on site.",
    detail:
      "ESP32-based field controllers can act on predefined conditions, so routine water changes happen when the data says they should.",
  },
  {
    id: "intelligent-analysis",
    title: "Intelligent Analysis",
    summary:
      "Turn telemetry into clearer signals that help farmers respond before conditions become critical.",
    benefit: "Fewer raw numbers, clearer decisions.",
    detail:
      "Readings are processed into trends and states that a farm team can act on, instead of a stream of values to interpret by hand.",
  },
  {
    id: "live-telemetry",
    title: "Live Telemetry",
    summary:
      "Collect sensor updates in real time and turn them into useful operational insight.",
    benefit: "Field conditions reach the dashboard as they change.",
    detail:
      "Devices publish telemetry to the cloud platform, which streams updates to the dashboard for monitoring, review, and reporting.",
  },
];
 
export type Screenshot = {
  id: string;
  label: string;
  kicker: string;
  title: string;
  caption: string;
  /** Only describes elements that are visible in the screenshot itself. */
  highlights: string[];
  src: string;
  width: number;
  height: number;
};
 
export const productShots: Screenshot[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    kicker: "Control Hub",
    title: "Farm overview in one screen",
    caption:
      "Controller status, alerts, and water indicators grouped so an operator can read the farm at a glance.",
    highlights: [
      "Overview, Controllers, and Settings navigation, with the active farm and location in the sidebar",
      "Summary tiles for controllers, alerts, tank average, and soil average",
      "ESP32 fleet and open-alerts panels, shown here in a demo account with nothing registered yet",
    ],
    src: "/screenshots/dashboard.png",
    width: 1865,
    height: 962,
  },
  {
    id: "telemetry",
    label: "Telemetry",
    kicker: "What GanSystems monitors",
    title: "Six subsystems, one dashboard",
    caption:
      "Subsystems reporting into one dashboard, from water supply and irrigation to aquaculture monitoring.",
    highlights: [
      "Smart water supply, precision irrigation, and aquaculture monitoring",
      "Weed detection, pest control, and solar-powered operation",
      "Each subsystem described by the sensors and actuators it uses",
    ],
    src: "/screenshots/telemetry.png",
    width: 1865,
    height: 962,
  },
  {
    id: "controllers",
    label: "Controllers",
    kicker: "Controller directory",
    title: "Field devices under one directory",
    caption:
      "ESP32 field controllers registered, monitored, and operated from the same interface.",
    highlights: [
      "A directory of every controller connected to the dashboard",
      "Each controller opens into a device detail view",
      "Controllers are registered from Settings; the demo account shows the empty state",
    ],
    src: "/screenshots/controllers.png",
    width: 1865,
    height: 962,
  },
  {
    id: "system-architecture",
    label: "System Architecture",
    kicker: "Platform architecture",
    title: "Field layer to application layer",
    caption:
      "How devices, the cloud platform, and the dashboard connect through MQTT and WebSockets.",
    highlights: [
      "Field layer: ESP32 controllers, sensors, and actuators",
      "Cloud platform: MQTT broker, API server, real-time WebSocket server, and database",
      "Application layer: web dashboard, user management, and automation engine",
    ],
    src: "/screenshots/system-architecture.png",
    width: 1536,
    height: 1024,
  },
];
 
export const problems = [
  {
    title: "Delayed water-quality visibility",
    body: "Water conditions can change quickly, but a farm often only learns about it after the fact.",
  },
  {
    title: "Manual monitoring",
    body: "Checks depend on someone being present, with readings recorded by hand and easily missed.",
  },
  {
    title: "Slow corrective action",
    body: "Draining, refilling, and other responses wait on human availability rather than conditions.",
  },
  {
    title: "Operational inefficiency",
    body: "Time goes into routine supervision instead of the decisions that actually improve the farm.",
  },
];
 
export const pipeline = [
  {
    step: "Sensors",
    body: "Water-quality and level sensors sit in the pond and read conditions continuously.",
  },
  {
    step: "Connectivity",
    body: "ESP32 field controllers publish readings to the cloud platform over MQTT.",
  },
  {
    step: "Real-time telemetry",
    body: "The platform streams updates so the dashboard reflects current field conditions.",
  },
  {
    step: "Intelligence",
    body: "Telemetry is processed into trends and signals that indicate when something needs attention.",
  },
  {
    step: "Automated control",
    body: "Predefined conditions can trigger actions such as draining and refilling water.",
  },
];
 
export type WorkStage = {
  id: string;
  title: string;
  body: string;
  /** Where the stage happens, shown as a small label on the timeline. */
  layer: string;
};
 
export const howItWorks: WorkStage[] = [
  {
    id: "sense",
    title: "Sense",
    body: "Sensors collect important pond and water-condition data.",
    layer: "In the pond",
  },
  {
    id: "connect",
    title: "Connect",
    body: "Devices transmit telemetry to the GanSystems platform.",
    layer: "ESP32 controllers",
  },
  {
    id: "monitor",
    title: "Monitor",
    body: "Operators see current conditions and device information through the dashboard.",
    layer: "Dashboard",
  },
  {
    id: "analyze",
    title: "Analyze",
    body: "GanSystems turns raw telemetry into clearer operational signals.",
    layer: "Platform",
  },
  {
    id: "act",
    title: "Act",
    body: "Farmers or connected controllers can respond to changing conditions, including supported drain and refill automation.",
    layer: "Back at the pond",
  },
];
 
export type EcosystemLayer = {
  id: string;
  label: string;
  /** Plain-language summary of what the layer does. */
  summary: string;
  nodes: { name: string; note: string }[];
};
 
export const ecosystemLayers: EcosystemLayer[] = [
  {
    id: "physical-farm",
    label: "Physical farm",
    summary: "The pond and the equipment around it.",
    nodes: [
      { name: "Pond / tank", note: "Where the fish are" },
      { name: "Pumps", note: "Move water in and out" },
      { name: "Sensors", note: "Read water conditions" },
      { name: "Controllers", note: "ESP32 units in the field" },
    ],
  },
  {
    id: "data",
    label: "Data",
    summary: "What the farm sends back, continuously.",
    nodes: [
      { name: "Water readings", note: "Conditions in the pond" },
      { name: "Device status", note: "Whether equipment is reporting" },
      { name: "Telemetry", note: "Readings streamed off the farm" },
    ],
  },
  {
    id: "platform",
    label: "Platform",
    summary: "Where the farm becomes something you can read.",
    nodes: [
      { name: "Dashboard", note: "One view of every pond" },
      { name: "Monitoring", note: "Current conditions and devices" },
      { name: "Analytics", note: "Readings turned into signals" },
    ],
  },
  {
    id: "action",
    label: "Action",
    summary: "What the farm does about it.",
    nodes: [
      { name: "Alerts", note: "Attention where it is needed" },
      { name: "Operational decisions", note: "People act on what they see" },
      {
        name: "Supported automated controls",
        note: "Drain and refill on defined conditions",
      },
    ],
  },
];
 
export type Principle = {
  id: string;
  title: string;
  body: string;
};
 
export const principles: Principle[] = [
  {
    id: "practical-technology",
    title: "Practical Technology",
    body: "Technology designed around real farm operations.",
  },
  {
    id: "real-time-visibility",
    title: "Real-Time Visibility",
    body: "Know what is happening in connected farm environments.",
  },
  {
    id: "connected-infrastructure",
    title: "Connected Infrastructure",
    body: "Link physical equipment, sensors, telemetry and software.",
  },
  {
    id: "actionable-data",
    title: "Actionable Data",
    body: "Turn measurements into operational information.",
  },
  {
    id: "built-for-local-conditions",
    title: "Built for Local Conditions",
    body: "Focus on practical deployment and scalable aquaculture technology for Nigeria and beyond.",
  },
];
 
export const technologyLayers = [
  {
    index: "01",
    title: "IoT Device Layer",
    body: "ESP32-based field controllers gather water-quality data and manage local actions such as draining and refilling water when conditions require intervention.",
  },
  {
    index: "02",
    title: "Cloud Platform Layer",
    body: "Data is synced and processed through a cloud platform that handles connectivity, real-time telemetry, intelligent analysis, and automation logic.",
  },
  {
    index: "03",
    title: "Dashboard Layer",
    body: "The dashboard turns this data into useful views for monitoring, remote control, and reporting without adding unnecessary complexity.",
  },
];