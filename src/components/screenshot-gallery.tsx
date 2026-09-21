import Image from "next/image";

const screenshots = [
  { title: "Dashboard", src: "/screenshots/dashboard.png" },
  { title: "Telemetry", src: "/screenshots/telemetry.png" },
  { title: "Controllers", src: "/screenshots/controllers.png" },
  { title: "System Architecture", src: "/screenshots/system-architecture.png" },
];

export function ScreenshotGallery() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {screenshots.map((item) => (
        <div key={item.title} className="rounded-[12px] border border-[#1F2937] bg-[#12171A] p-4">
          <div className="relative h-40 overflow-hidden rounded-[10px] border border-[#16D66B]/30 bg-[#0F1A15]">
            <Image src={item.src} alt={`${item.title} GanSystems screenshot`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <p className="mt-3 text-sm font-semibold text-[#F5F5F5]">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
