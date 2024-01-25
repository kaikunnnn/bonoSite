import React, { useState } from "react";
// component
import { PlanExplain } from "@/components/common/ui/plan";
import Header from "@/components/common/layout/Navigation/Header";

const Plan = () => {

  return (
    <>
    <Header/>
    
    <section className="Containers py-20 px-4 md:px-6">
      <h1 className="text-2xl font-bold ">UIデザインプラン</h1>
      <PlanExplain/>
    </section>
    
    </>
  );
};

export default Plan;
