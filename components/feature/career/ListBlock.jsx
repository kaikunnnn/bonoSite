import Link from "next/link";

export default function ListBlock({
  title = "サービスについて知る",
  description = "BONOでUIUXデザインを学んで創造して楽しむ旅をスタートしよう",
  buttonText = "はじめる",
  href = "/service",
}) {
  return (
    <Link href={href} className="block">
      <div className="px-6 py-5 w-full rounded-[30px] border border-white flex-col justify-center items-start gap-0 inline-flex hover:bg-white/10 transition-colors">
        <div className="self-stretch h-[61px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-justify text-white text-base font-bold font-['Noto Sans JP'] leading-[21.12px]">
            {title}
          </div>
          <div className="self-stretch text-justify text-white/60 text-xs font-medium font-['Noto Sans JP'] leading-none">
            {description}
          </div>
        </div>
        <div className="px-4 py-2.5 rounded-full border border-white justify-center items-center gap-2.5 inline-flex overflow-hidden">
          <div className="text-justify text-white text-[13px] font-bold font-['Inter'] leading-[17.16px]">
            {buttonText}
          </div>
        </div>
      </div>
    </Link>
  );
}
