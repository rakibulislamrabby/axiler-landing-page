"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const testimonials = [
    {
      image: "/assets/images/person-two.jpeg",
      quote:
        "Great communication, the team is very flexible to accommodate our specific conditions and requirements. The team also really care about the customer and took time to walk us through the report and even help us brainstorm.",
      name: "Natasha Syed",
      position: "Founder & CEO",
      company: "SkilledIn Green",
    },
    {
      image: "/assets/images/person.jpeg",
      quote:
        "I wanted to express my heartfelt appreciation for the outstanding cyber security service your team provided. Your expertise and dedication in safeguarding our organization’s digital assets have been invaluable.",
      name: "A M Ishtiaque Sarwar",
      position: "Managing Director",
      company: "aamarPay",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, [activeIndex, isHovered]);

  return (
    <div className="lg:container ">
      <section className="py-8 px-5 mx-auto relative mt-20">
        <h2 className="text-2xl pb-[60px] lg:text-3xl font-hubot font-medium text-gray-900">
          See How Businesses Across Industries Have Strengthened <br />
          Their Cyber Defenses with Axiler’s Cutting-Edge Security
        </h2>
        <div className="absolute inset-x-0 bottom-0"></div>
        <div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden sm:h-[1100px] md:h-[950px] lg:h-[420px] bg-white border border-gray-300 shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute"
                }`}
              >
                <div className="md:flex items-center">
                  <div className="w-full md:w-72 rounded-2xl overflow-hidden h-96">
                    <div className="flex items-center justify-center h-full lg:ml-[30px]">
                      <Image
                        src={testimonial.image}
                        width={500}
                        height={600}
                        className="w-full h-[300px] object-cover rounded-xl"
                        alt={`${testimonial.name} Picture`}
                      />
                    </div>
                  </div>
                  <div className="md:ml-8 lg:ml-16 flex-1 flex items-start mt-[34px] md:mt-0 pb-20 md:pb-0">
                    <div className="mr-5 flex-shrink-0 pt-[50px]">
                      <Image
                        src="/assets/images/quote-white.png"
                        width={64}
                        height={64}
                        className="w-14 object-contain"
                        alt="Quote"
                      />
                    </div>
                    <div className="pt-[50px]">
                      <p className="text-gray-900 text-xl lg:text-2xl font-normal text-justify hyphens-auto pr-6">
                        {testimonial.quote}
                      </p>
                      <div className="w-1/2 h-[1px] bg-gray-500 relative my-10">
                        <div className="absolute z-10 bg-white h-full left-1/2 w-7"></div>
                      </div>
                      <h3 className="font-bold text-gray-900 text-3xl mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-700 text-2xl font-normal">
                        {testimonial.position}
                      </p>
                      <p className="text-sm font-bold text-primary pb-[50px]">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-7 right-1/2 translate-x-1/2 md:translate-x-0 md:right-2 flex items-center space-x-4 pt-10 lg:pr-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 flex items-center justify-center text-gray-500 rounded-2xl border border-gray-400 bg-white shadow-sm hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-2xl shadow-md hover:opacity-80 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
