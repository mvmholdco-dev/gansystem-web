type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <article className="rounded-[12px] border border-[#1F2937] bg-[#12171A] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.01)]">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#16D66B]/30 bg-[#16D66B]/10 text-lg text-[#16D66B]">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-[#F5F5F5]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-[#9CA3AF]">{description}</p>
    </article>
  );
}
