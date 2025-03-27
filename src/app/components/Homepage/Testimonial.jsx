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
    <div className="lg:container">
      <section className="py-8 px-5 lg:px-0 mx-auto relative mt-20">
        <h2 className="text-xl lg:text-start sm:text-2xl md:text-3xl pb-8 sm:pb-12 md:pb-[60px] text-center font-medium font-hubot text-gray-900">
          See How Businesses Across Industries Have Strengthened <br className="hidden md:block"/>
          Their Cyber Defenses with Axiler’s Cutting-Edge Security
        </h2>

        <div
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden bg-white border border-gray-300 shadow-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ease-in-out ${
                  index === activeIndex
                    ? "opacity-100 relative"
                    : "opacity-0 absolute"
                }`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start p-6 sm:p-8 lg:p-12 gap-8">
                  {/* Image Section */}
                  <div className="w-full md:w-72 rounded-2xl overflow-hidden aspect-[3/4] max-h-[350px] flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      width={500}
                      height={600}
                      className="w-full h-full object-cover rounded-xl"
                      alt={`${testimonial.name} Picture`}
                    />
                  </div>

                  {/* Text Section */}
                  <div className="flex-1 flex flex-col justify-start">
                    <div className="flex items-start mb-4">
                      <div className="mr-4 flex-shrink-0">
                        <Image
                          src="/assets/images/quote-white.png"
                          width={64}
                          height={64}
                          className="w-8 sm:w-10 md:w-12 object-contain"
                          alt="Quote"
                        />
                      </div>
                      <p className="text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl font-normal text-justify hyphens-auto">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="w-1/2 h-px bg-gray-500 relative my-6 sm:my-10">
                      <div className="absolute z-10 bg-white h-full left-1/2 w-7"></div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-lg sm:text-xl md:text-2xl mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-700 text-base sm:text-lg font-normal">
                      {testimonial.position}
                    </p>
                    <p className="text-sm font-bold text-primary mt-2 mb-6">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons (Bottom Right) */}
            <div className="absolute bottom-6 right-6 flex items-center space-x-4 z-10">
              <button
                onClick={handlePrev}
                className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-gray-500 rounded-xl border border-gray-400 bg-white shadow-sm hover:bg-gray-100 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
                className="bg-black text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl shadow-md hover:opacity-80 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 sm:w-6 sm:h-6"
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
