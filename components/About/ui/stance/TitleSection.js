import React from 'react';

function StanceSectionTitle(props) {
  const textStrokeStyle = {
    WebkitTextStroke: "2px black", // 枠線の太さと色
    fontFamily:"Hind",
    color: "white", // 文字の中身を透明
  };
  return (
    <div className="flex flex-col gap-8 font-bold text-neutral-900">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/78d70b3e4da921f86a671a4b6cef26bdcadd316d86e07f498e9a85d076723d7c?apiKey=571efe123eaa45f0948e57ed8fcfad3f&"
        className="self-center max-w-full aspect-[0.98] lg:w-[162px] w-[112px] -mt-16 lg:mt-[11rem] absolute lg:right-40 right right-0 "
      />
      <div className="mt-8 text-center flex flex-col gap-8 lg:gap-6 ">
        <p className='text-sm leading-6 '>BONOがサービスをつづける</p>
        <h2 className="H2 text-center text-white text-8xl lg:text-[128px] leading-tight lg:leading-snug font-bold tracking-wide" style={textStrokeStyle}>スタンス</h2>
      </div>
      <div className="self-center text-base leading-8 max-w-[248px] lg:max-w-[320px] -mt-4">
        誰が、何を考えて、作っているの？
        <br />
        BONOは単純なスクール業のように就職できたらOKとは考えていません。
        <br />
        デザインを手段と、考え方と捉え、世の中をポジティブにする人を
        <br />
        増やしたいと思っています。
      </div>
    </div>
  );
}

export default StanceSectionTitle;