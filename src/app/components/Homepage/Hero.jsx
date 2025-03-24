import Image from 'next/image';
import React from 'react'

export default function Hero() {
  return (
    <div className="flex flex-col container mx-auto mt-20 lg:mt-20">
      <img className="" src="/assets/vector/hero-with-text.png" alt="" />
      <img className="" src="/assets/vector/hero-bg-bottom.png" alt="" />

     
      <div className="lg:my-20 flex justify-around space-x-[95px] mx-auto px-8">
        {/* <img
          className="grayscale"
          src="/assets/company-name/company logo (1).png"
          alt=""
        />
        <img
          className="grayscale"
          src="/assets/company-name/company logo (2).png"
          alt=""
        />
        <img
          className="grayscale"
          src="/assets/company-name/company logo (3).png"
          alt=""
        />
        <img
          className="grayscale"
          src="/assets/company-name/company logo (4).png"
          alt=""
        />
        <img
          className="grayscale"
          src="/assets/company-name/company logo (5).png"
          alt=""
        />
        <img
          className="grayscale"
          src="/assets/company-name/company logo (6).png"
          alt=""
        /> */}
      </div>
    </div>
  );
}
