"use client";
import React from "react";
import Image from "next/image";

const attackPoints = [
  { top: "10%", left: "30%", color: "blue", size: "18px" },
  // { top: "40%", left: "40%", color: "red", size: "12px" },
  { top: "25%", left: "25%", color: "blue", size: "18px" },
  { top: "28%", left: "15%", color: "blue", size: "18px" },
  { top: "13%", left: "10%", color: "red", size: "12px" },
  { top: "60%", left: "28%", color: "red", size: "12px" },
  { top: "70%", left: "28%", color: "red", size: "12px" },
  { top: "70%", left: "33%", color: "red", size: "12px" },
  { top: "66%", right: "45%", color: "blue", size: "18px" },
  { top: "50%", right: "45%", color: "red", size: "12px" },
  { top: "50%", right: "53%", color: "red", size: "12px" },
  { bottom: "20%", right: "15%", color: "red", size: "12px" },
  { bottom: "80%", right: "15%", color: "red", size: "12px" },
  { bottom: "80%", right: "35%", color: "red", size: "12px" },
  { bottom: "78%", right: "33%", color: "red", size: "12px" },
  { bottom: "69%", right: "40%", color: "red", size: "12px" },
  { bottom: "69%", right: "23%", color: "blue", size: "18px" },
  { bottom: "60%", right: "33%", color: "red", size: "12px" },
  { bottom: "55%", right: "25%", color: "red", size: "12px" },
];


const AttackMapSection = () => {
  return (
    <section className="lg:container flex flex-col items-center text-center pt-6 lg:pt-1 pb-16 bg-white">
      <h2 className="text-3xl md:text-4xl text-[#0F0F0F] font-hubot">
        DEFENDING AGAINST THE{" "}
        <span className="text-transparent bg-clip-text bg-primary font-semibold">
          UNSEEN
        </span>
      </h2>
      <p className="mt-4 px-3 lg:px-0 text-gray-600 max-w-2xl font-hubot">
        Watch as attacks unfold in <span className="font-bold">real-time</span>,
        increasing visibility
        <br className="hidden lg:block" />
        beyond business silos and tracking threats across domains.
      </p>

      <div className="relative mt-10 w-full max-w-4xl">
        <div className="relative mt-4 w-full max-w-4xl">
          <Image
            src="/assets/world-map.png"
            alt="World Map"
            width={800}
            height={500}
            className="w-full relative opacity-90"
          />
          <div className="absolute inset-0 flex">
            <div className="w-1/2 h-full">
              <Image
                src="/assets/gradient/map-gradient-blue.png"
                alt="Blue Gradient"
                width={800}
                height={600}
                className="w-full h-full opacity-70 object-cover z-[-1]"
              />
            </div>
            <div className="w-1/2 h-full">
              <Image
                src="/assets/gradient/map-gradient-red.png"
                alt="Red Gradient"
                width={800}
                height={600}
                className="w-full h-full opacity-70 object-cover z-[-1]"
              />
            </div>
          </div>

          {/* Attack Points */}
          {attackPoints.map((point, index) => (
            <div
              key={index}
              className="absolute flex justify-center items-center"
              style={{
                top: point.top,
                left: point.left,
                right: point.right,
                bottom: point.bottom,
                width: `calc(${point.size} * 2)`,
                height: `calc(${point.size} * 2)`,
              }}
            >
              {/* Outer White Background with Border */}
              <div
                className="relative flex justify-center items-center w-full h-full rounded-full bg-white shadow-md"
                style={{
                  border: `2px solid ${
                    point.color === "blue" ? "#5055FB" : "#FF0000"
                  }`,
                }}
              >
                {/* Ping Animation inside White Background */}
                <div
                  className="absolute rounded-full animate-ping-custom duration-200"
                  style={{
                    width: `calc(${point.size} * 1.2)`,
                    height: `calc(${point.size} * 1.2)`,
                    borderColor: point.color === "blue" ? "#5055FB" : "#FF0000",
                    borderWidth: "2px",
                  }}
                ></div>

                {/* Inner Dot */}
                <div
                  className="absolute rounded-full opacity-90"
                  style={{
                    backgroundColor:
                      point.color === "blue" ? "#5055FB" : "#FF0000",
                    width: point.size,
                    height: point.size,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttackMapSection;
