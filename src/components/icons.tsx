import type { SVGProps } from "react";
 
type IconProps = SVGProps<SVGSVGElement>;
 
function Base({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}
 
export function SensorIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3v9" />
      <circle cx="12" cy="14.5" r="2.5" />
      <path d="M7.4 5.6a6.5 6.5 0 0 0 0 9.2M16.6 5.6a6.5 6.5 0 0 1 0 9.2" />
      <path d="M4.6 3a10.5 10.5 0 0 0 0 14.8M19.4 3a10.5 10.5 0 0 1 0 14.8" />
    </Base>
  );
}
 
export function PondIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M3 8.5c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2" />
      <path d="M3 13c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2" />
      <path d="M3 17.5c2.2 0 2.2-2 4.5-2s2.3 2 4.5 2 2.2-2 4.5-2 2.3 2 4.5 2" />
    </Base>
  );
}
 
export function TelemetryIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 19v-6" />
      <circle cx="12" cy="20.5" r="1.2" />
      <path d="M8.8 10.2a4.5 4.5 0 0 1 6.4 0" />
      <path d="M6.2 7.3a8.2 8.2 0 0 1 11.6 0" />
      <path d="M3.6 4.5a12 12 0 0 1 16.8 0" />
    </Base>
  );
}
 
export function DashboardIcon(props: IconProps) {
  return (
    <Base {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 21h8M12 18v3" />
      <path d="M7 14l3-3.5 2.4 2.2L17 8" />
    </Base>
  );
}
 
export function AutomationIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 12h5" />
      <path d="M15 12h5" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v3M12 17v3" />
      <path d="M6.5 6.5 8.6 8.6M15.4 15.4l2.1 2.1" />
    </Base>
  );
}
 
export function AnalysisIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 19h16" />
      <path d="M7 19v-6M12 19V6M17 19v-9" />
      <circle cx="12" cy="4" r="1.2" />
    </Base>
  );
}
 
export function DropIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M12 3.5c3 2.4 5 5.1 5 7.8a5 5 0 1 1-10 0c0-2.7 2-5.4 5-7.8Z" />
      <path d="M9.6 13.4a2.6 2.6 0 0 0 2.6 2.4" />
    </Base>
  );
}
 
export function ClockIcon(props: IconProps) {
  return (
    <Base {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 1.8" />
    </Base>
  );
}
 
export function HandIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M9 11V5.6a1.6 1.6 0 1 1 3.2 0V11" />
      <path d="M12.2 10.4V7.4a1.6 1.6 0 1 1 3.2 0V12" />
      <path d="M15.4 10.9a1.6 1.6 0 1 1 3.2 0v3.4a6.2 6.2 0 0 1-6.2 6.2h-1a5 5 0 0 1-4.2-2.3L5 14.6a1.6 1.6 0 0 1 2.5-2L9 14.4" />
    </Base>
  );
}
 
export function GaugeIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M4 17a8 8 0 1 1 16 0" />
      <path d="m12 17 4-5" />
      <circle cx="12" cy="17" r="1.1" />
    </Base>
  );
}
 
export function ArrowIcon(props: IconProps) {
  return (
    <Base {...props}>
      <path d="M5 12h13" />
      <path d="m13 7 5 5-5 5" />
    </Base>
  );
}
 
export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.94 5.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 20.5h3.4V8.9H3.3v11.6Zm6.1-11.6h3.26v1.59h.05c.45-.82 1.56-1.7 3.22-1.7 3.44 0 4.07 2.15 4.07 4.94v6.77h-3.4v-6c0-1.43-.03-3.28-2.05-3.28-2.05 0-2.36 1.56-2.36 3.18v6.1H9.4V8.9Z" />
    </svg>
  );
}