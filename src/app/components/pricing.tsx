"use client";

import React, { useState } from "react";

// Define the types for the pricing plans and options
interface PricingOption {
  type: string;
  price: string;
  description: string;
  note?: string;
  features: string[];
}

interface PricingPlans {
  thirtyMinute: PricingOption;
  sixtyMinute: PricingOption;
  group: PricingOption;
}

const pricingOptions: Record<string, PricingPlans> = {
  kthrough8: {
    thirtyMinute: {
      type: "30 min",
      price: "$24.99",
      description: "Free",
      note:"flexible scheduling",
      features: [
  
      ]
    },
    sixtyMinute: {
      type: "60 min",
      price: "$44.99",
      description: "/ month",
      note:"flexible scheduling",
      features: [
      ]
    },
    group: {
      type: "Group",
      price: "$29.99",
      description: "up to 3 t",
      note: "1 hour, up to 3 students",
      features: [
      ]
    }
  },
  highschool: {
    thirtyMinute: {
        type: "30 min",
        price: "$29.99",
        description: "Free",
        note:"flexible scheduling",
        features: [
    
        ]
      },
      sixtyMinute: {
        type: "60 min",
        price: "$54.99",
        description: "/ month",
        note:"flexible scheduling",

        features: [
        ]
      },
      group: {
        type: "Group",
        price: "$39.99",
        description: "per team editor / month",
        note: "1 hour, up to 3 students",
        features: [
        ]
      }
  },
  // testPrep: {  // This can be the same as Yearly or a copy depending on need
  //   thirtyMinute: {
  //       type: "30 min",
  //       price: "$34.99",
  //       description: "Free",
  //       note: "In depth SAT/ACT test preparation",
  //       features: [
    
  //       ]
  //     },
  //     sixtyMinute: {
  //       type: "60 min",
  //       price: "$65.99",
  //       description: "/ month",
  //       note: "In depth SAT/ACT test preparation",
  //       features: [
  //       ]
  //     },
  //     group: {
  //       type: "Group",
  //       price: "$39.99",
  //       description: "per team editor / month",
  //       note: "Billed annually",
  //       features: [
  //       ]
  //     }
  // }
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof pricingOptions>("kthrough8");

  const renderPricingOption = (option: PricingOption) => (
    <>

    <div className="bg-white rounded-lg shadow-lg sm:min-w-[300px]">
    <div className="flex justify-center py-2 text-[#30231B]">
        <h2 className="text-2xl font-bold text-[#30231B]">{option.type}</h2>
    </div>
    <div className="w-full bg-black h-0.5"></div>
    <div className="p-6">
      <h2 className="text-3xl font-bold text-[#30231B]">{option.price}<span className="text-gray-500 text-sm font-normal">/session</span></h2>
      {option.note && <p className="text-sm text-gray-500 mt-2">{option.note}</p>}
      <ul className="mt-4 text-gray-300 space-y-2">
        {option.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="mt-6 bg-[#FF893F] duration-300 hover:bg-orange-300 text-white font-bold py-2 px-4 rounded">
        {option.price === "$0" ? "Start for Free" : "Book a Session"}
      </button>
      </div>
    </div>
    </>
  );

  return (
    <div className="flex flex-col items-center p-16">
      <h1 className="text-5xl font-bold text-[#30231B] mb-6">Pricing</h1>
      <p className="text-[#62564F] mb-6">
        All sessions take place via Zoom. If you have any additional questions regarding pricing, please feel free to <a href="mailto:lukegriggs100@gmail.com" className="font-semibold underline">contact me </a> 
      </p>
      <div className="flex mb-8 border-[#30231B] border-2 rounded-lg">
        {Object.keys(pricingOptions).map(tab => (
          <button
            key={tab}
            className={`py-2 px-4 ${activeTab === tab ? "bg-[#30231B] text-white" : "text-[#30231B]"}`}
            onClick={() => setActiveTab(tab as keyof typeof pricingOptions)}
          >
            <div className={`${tab === "kthrough8" ? "mx-6" : ""}`}>
            {tab === "kthrough8" ? "K-8" : tab === "highschool" ? "High School" : tab === "testPrep" ? "Test Prep" : ""}
            </div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {Object.values(pricingOptions[activeTab]).map((plan, index) => (
          <React.Fragment key={index}>
            
            {renderPricingOption(plan)}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Pricing;