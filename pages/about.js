import React from "react";

// Component
import Hero from "@/components/About/layout/Hero";
import Story from "@/components/About/layout/Story";
import Stance from "@/components/About/layout/Stance";
import Header from "@/components/common/layout/Navigation/Header";
import { getContents } from "@/libs/newt"; // getContents関数をインポート

export async function getStaticProps() {
  const contents = await getContents();
  return {
    props: {
      aboutContents: contents,
    },
  };
}


function About({aboutContents}) {
  
  return (
    <>
    <main className="max-h-full  text-slate-900">
      <Header />
      <div className="w-full">
        <Hero></Hero>
        <Story></Story>
        <div id="stance">
          <Stance aboutContents={aboutContents}></Stance>
        </div>
      </div>
    </main>
    
    </>
  );
};

export default About;
