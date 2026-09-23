import Image from "next/image";
import Link from "next/link";
 
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/"
      className="group inline-flex items-center"
      aria-label="Gansystems Limited — home"
    >
      <Image
        src="/screenshots/gan_sys_logo-removebg-preview.png"
        alt="GanSystems Limited"
        width={compact ? 56 : 72}
        height={compact ? 56 : 72}
        className="object-contain"
        priority
      />
    </Link>
  );
}