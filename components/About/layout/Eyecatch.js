import React from 'react';

const Eyecatch = () => {
    return (
        <div className="justify-center items-center self-stretch flex flex-col pt-12">
      <header className="items-center self-stretch flex w-full flex-col justify-center mt-24 px-16 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-[824px] max-w-full flex-col items-stretch">
          <div className="text-neutral-900 text-base leading-7 tracking-wider self-center whitespace-nowrap">
            ABOUT
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3d4895040319db3991df1b07afbb1b1f4628d1f7f414d65054e82e37669e9a07?apiKey=b12705417f4d4020a65ffba5caf7e892&"
            className="aspect-[2.63] object-contain object-center w-full justify-center items-center overflow-hidden mt-1 max-md:max-w-full"
            alt="about"
          />
          <div className="text-neutral-900 text-2xl font-bold leading-10 tracking-wider self-center whitespace-nowrap mt-1">
            クリエイションの夜明け
          </div>
        </div>
      </header>
      <form className="justify-center items-stretch border bg-zinc-900 flex gap-1 mt-2.5 px-3 py-2.5 rounded-xl border-solid border-white border-opacity-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/56b1049394a5bf4dc0b4082f07a84dc08560260d54472880e61176935582114e?apiKey=b12705417f4d4020a65ffba5caf7e892&"
          className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
          alt="image"
        />
        <a
          href="#"
          aria-label="はじめから読む"
          role="button"
          className="text-white text-center text-sm font-bold leading-4 self-center grow whitespace-nowrap my-auto"
        >
          はじめから読む
        </a>
      </form>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/08180a7255eb867e9fb5016853b5046fb24830c57aaefde084bd0723ad476e75?apiKey=b12705417f4d4020a65ffba5caf7e892&"
        className="aspect-[15.12] object-contain object-center w-full justify-center items-center overflow-hidden self-stretch mt-12 max-md:max-w-full max-md:mt-10"
        alt="image"
      />
    </div>
    );
}

export default Eyecatch;