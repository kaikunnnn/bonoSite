import Image from "next/image";

export default function TitleSection() {
  return (
    <div className="CopyArea w-full flex-col justify-start items-center inline-flex relative ">
      <div
        className="flex-col w-full justify-center items-center gap-6 flex relative"
        aria-hidden="true"
      >
        <div></div>
        <div className="w-full inline-flex justify-between h-full absolute top-1/2 -translate-y-1/2 left-0 -z-10">
          <div className="w-[8px] mt-auto my-auto mx-2 text-green-950 text-[8px] font-semibold leading-[12.80px] tracking-[7px]">
            #誰だってものづくりを始めたい
          </div>
          <div className="w-[8px] mt-auto my-auto mx-2 text-green-950 text-[8px] font-semibold leading-[12.80px] tracking-[7px]">
            #創造性の夜明けや
          </div>
        </div>

        {/* CAREER */}
        <div className="text-center text-orange-500">
          <Image
            src="/career/beginner/type/career.svg"
            alt="CAREER"
            className="h-[40px] md:h-[100px] w-auto"
            width={110}
            height={40}
          />
        </div>
        <div className="text-center text-orange-500 text-base md:text-lg font-bold font-noto-sans leading-snug tracking-[4px]">
          未経験からの
        </div>

        {/* UI/UX */}
        <div className="text-center text-orange-500">
          <Image
            src="/career/beginner/type/uiux.svg"
            alt="UI/UX"
            className="h-[56px] md:h-[120px] w-auto"
            width={110}
            height={40}
          />
        </div>
        <div className="text-center text-orange-500 text-base md:text-lg font-bold font-noto-sans leading-snug tracking-[4px]">
          UI/UXデザイナー
        </div>

        {/* GUIDE */}
        <div className="text-center text-orange-500">
          <Image
            src="/career/beginner/type/guide.svg"
            alt="GUIDE"
            className="h-[40px] md:h-[100px] w-auto"
            width={110}
            height={40}
          />
        </div>
        <div className="text-center text-orange-500 ttext-base md:text-lg font-bold font-noto-sans leading-snug tracking-[4px]">
          転職ガイド
        </div>
      </div>
    </div>
  );
}
