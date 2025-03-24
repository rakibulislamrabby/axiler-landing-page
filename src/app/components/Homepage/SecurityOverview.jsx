"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function SecurityOverview() {
  const [scrollY, setScrollY] = useState(0);
  const [smoothScroll, setSmoothScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth transition effect (smaller movement factor)
  useEffect(() => {
    const smooth = setInterval(() => {
      setSmoothScroll((prev) => prev + (scrollY - prev) * 0.05); // Reduce factor for stability
    }, 16);

    return () => clearInterval(smooth);
  }, [scrollY]);

  return (
    <div className="md:container mx-auto relative flex flex-col items-center justify-center mt-[260px] md:mt-20 px-4 overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/assets/gradient/big-gradient-red.png')",
          backgroundSize: "cover",
          backgroundPosition: "top",
          opacity: 0.6,
        }}
      ></div>

      {/* Floating Content Image */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 top-5 lg:left-[200px] lg:translate-x-0 -z-5 w-full max-w-[393px]"
        style={{ transform: `translateY(${smoothScroll * 0.03}px)` }} // Reduced movement
      >
        <Image
          src="/assets/images/content.png"
          alt="Background Content"
          width={393}
          height={288}
          className="w-full h-auto"
        />
      </div>

      {/* Floating Alert Image */}
      <div
        className="absolute left-[40%] lg:left-[705px] transform -translate-x-1/2 top-6 -z-5 w-full max-w-[327px]"
        style={{
          transform: ` translateX(${
            smoothScroll * 0.03
          }px)`, // Smaller movement
        }}
      >
        <Image
          src="/assets/images/alert.png"
          alt="Alert"
          width={327}
          height={110}
          className="w-full h-auto"
        />
      </div>

      {/* Floating Label 2 */}
      <div
        className="absolute right-5 md:right-[150px] lg:right-[200px] top-[50px] -z-5 w-[120px] md:w-[180px] lg:w-[235px]"
        style={{ transform: `translateY(${smoothScroll * 0.025}px)` }} // Minimized movement
      >
        <Image
          src="/assets/images/Label2.png"
          alt="Label 2"
          width={235}
          height={198}
          className="w-full h-auto"
        />
      </div>

      {/* Floating Label 4 */}
      <div
        className="absolute right-5 md:right-[150px] lg:right-[200px] top-[150px] md:top-[300px] -z-5 w-[130px] md:w-[190px] lg:w-[243px]"
        style={{
          transform: `translateY(${smoothScroll * 0.02}px) translateX(-${
            smoothScroll * 0.015
          }px)`, // Subtle movement
        }}
      >
        <Image
          src="/assets/images/Label4.png"
          alt="Label 4"
          width={243}
          height={236}
          className="w-full h-auto"
        />
      </div>

      {/* Thinking Person Image */}
      <div>
        {" "}
        {/* Smallest movement for stability */}
        <Image
          src="/assets/vector/thinking-person.png"
          alt="Person"
          width={900}
          height={900}
          className="grayscale drop-shadow-lg relative z-10 w-full max-w-[500px] md:max-w-[700px] lg:max-w-[900px] h-auto"
        />
      </div>
    </div>
  );
}
