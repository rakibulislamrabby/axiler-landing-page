"use client";

import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="md:container relative mt-[140px] overflow-hidden">
      <div className="relative z-10 container mx-auto flex flex-col lg:flex-row items-center px-6">
        {/* Left Side Text */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-4xl lg:text-6xl">
            Website Security
          </h1>
          <p className="mt-4 text-lg text-gray-600 font-hubot max-w-md">
            Leverage cutting-edge machine learning models to analyze traffic
            patterns, detect anomalies, and prevent zero-day attacks before they
            happen.
          </p>
        </div>

        {/* Right Side with Gradient Background */}
        <div className="lg:w-1/2 relative flex justify-center mt-16 lg:mt-0">
          <div className="absolute inset-0 w-full h-full -z-10 lg:pt-10">
            {" "}
            {/* Increased padding for gradient */}
            <div className="absolute ">
              <Image
                src="/assets/gradient/big-gradient-red.png"
                alt="Cyber Security Background"
                // layout="intrinsic"
                width={600}
                height={600}
                // className="lg:-mt-20"
              />
            </div>
          </div>
          {/* Main Image */}
          <Image
            src="/assets/images/pricing-women.png"
            alt="Website Security"
            width={500}
            height={500}
            className="relative z-10 bottom-0 lg:pt-16"
          />
          {/* Floating Vectors */}
          <Image
            src="/assets/vector/attacks-blocked.png"
            alt="Attacks Blocked"
            width={259}
            height={206}
            className="absolute top-[80px] left-8"
          />
          <Image
            src="/assets/vector/malicious-bot.png"
            alt="Malicious Bot Blocked"
            width={210}
            height={80}
            className="absolute top-5 left-[70]"
          />
          <Image
            src="/assets/vector/advanced-payload.png"
            alt="Advanced Payloads Blocked"
            width={238}
            height={60}
            className="absolute top-0 right-0"
          />
          <Image
            src="/assets/vector/website-security.png"
            alt="Advanced Payloads Blocked"
            width={238}
            height={60}
            className="absolute top-20 right-0"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
