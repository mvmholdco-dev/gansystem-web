import Image from "next/image";

type FounderCardProps = {
  name: string;
  role: string;
  bio: string;
  link: string;
  image: string;
};

export function FounderCard({ name, role, bio, link, image }: FounderCardProps) {
  return (
    <article className="rounded-[12px] border border-[#1F2937] bg-[#12171A] p-6">
      <div className="relative mb-4 h-14 w-14 overflow-hidden rounded-full border border-[#16D66B]/40 bg-[#0F1A15]">
        <Image src={image} alt={`${name} portrait`} fill className="object-cover" sizes="56px" />
      </div>
      <h3 className="text-lg font-semibold text-[#F5F5F5]">{name}</h3>
      <p className="mt-1 text-sm font-medium text-[#16D66B]">{role}</p>
      <p className="mt-3 text-sm leading-7 text-[#9CA3AF]">{bio}</p>
      <a href={link} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-medium text-[#22D3EE]">
        LinkedIn ↗
      </a>
    </article>
  );
}
