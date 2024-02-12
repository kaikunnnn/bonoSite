import React from "react";

// Component
import Hero from "@/components/About/layout/Hero";
import Story from "@/components/About/layout/Story";
import Stance from "@/components/About/layout/Stance";
import Header from "@/components/common/layout/Navigation/Header";



function About() {

  return (
    <>
    <main className="max-h-full  text-slate-900">
      <Header />
      <div className="w-full">
        <Hero></Hero>
        <Story></Story>
        <Stance></Stance>
      </div>
    </main>
    
    </>
  );
};

export default About;
