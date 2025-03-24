import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div className="bg-primary py-6 md-px-28 mb-[64px]">
      <div className="container mx-auto flex items-end flex-wrap gap-7 justify-around">
        <Image
          src="/assets/company-name/aamarpay_logo.png"
          className="h-10 object-contain invert brightness-0"
          alt="Aamarpay Logo"
          width={236}
          height={60}
        />
        <Image
          src="/assets/company-name/ifarmer.png"
          className="h-10 object-contain invert brightness-0"
          alt="iFarmer Logo"
          width={236}
          height={60}
        />
        <Image
          src="/assets/company-name/skilledin.png"
          className="h-10 object-contain invert brightness-0"
          alt="Skilledin Logo"
          width={236}
          height={60}
        />
      </div>
    </div>
  );
}
