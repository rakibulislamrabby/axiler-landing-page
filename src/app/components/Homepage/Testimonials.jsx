"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "Great communication, the team is very flexible to accommodate our specific conditions and requirements. The team also really cares about the customer and took time to walk us through the report and even help us brainstorm.",
    name: "Natasha Syed",
    position: "Founder & CEO",
    company: "SkilledIn Green",
  },
  {
    text: "I wanted to express my heartfelt appreciation for the outstanding cyber security service your team provided. Your expertise and dedication in safeguarding our organization’s digital assets have been invaluable.",
    name: "A M Ishtiaque Sarwar",
    position: "Managing Director",
    company: "aamarPay",
  },
  {
    text: "Great communication, the team is very flexible to accommodate our specific conditions and requirements. The team also really cares about the customer and took time to walk us through the report and even help us brainstorm.",
    name: "Natasha Syed",
    position: "Founder & CEO",
    company: "SkilledIn Green",
  },
  {
    text: "I wanted to express my heartfelt appreciation for the outstanding cyber security service your team provided. Your expertise and dedication in safeguarding our organization’s digital assets have been invaluable.",
    name: "A M Ishtiaque Sarwar",
    position: "Managing Director",
    company: "aamarPay",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="relative   py-10 bg-black">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={2.7}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: "#next", prevEl: "#prev" }}
      >
        {testimonials.concat(testimonials).map((t, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center py-[84px]"
          >
            {/* Speech Bubble */}
            <div
              className={`relative max-w-lg p-6 rounded-2xl shadow-xl ${
                index % 2 === 1
                  ? "bg-white text-gray-900 border border-black"
                  : "bg-black text-white opacity-75 border border-white"
              }`}
            >
              {/* Speech Bubble Tail */}
              <div
                className={`absolute bottom-[-10px] left-12 w-6 h-6 rotate-45 ${
                  index % 2 === 1 ? "bg-white" : "bg-black"
                }`}
              ></div>

              <p className="italic mb-4">"{t.text}"</p>
            </div>

            {/* Name & Position Outside Bubble */}
            <div className="mt-4 pl-16 pt-2">
              <h4 className="text-white font-semibold">{t.name}</h4>
              <div className="flex items-center space-x-1">
                <p className="text-blue-300 text-sm">{t.position}</p>
                <p className="text-blue-300 text-semibold"> at {t.company}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination + Arrows */}
      <div className="flex items-center justify-center mt-4 space-x-24">
        {/* Left Arrow */}
        <button className="p-3 transition" id="prev">
          <FaArrowLeft className="text-white text-lg" />
        </button>

        {/* Pagination Dots */}
        <div className="flex space-x-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 bg-white rounded-full opacity-75"
            ></div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="p-3 transition" id="next">
          <FaArrowRight className="text-white text-lg" />
        </button>
      </div>
    </div>
  );
}
