import React from "react";
import Image from "next/image";

export default function StatsSection() {
  return (
    <div className="lg:container px-4 pb-16 border-b border-gray-300">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {/* 1 Million Users Secured */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <Image
              src="/assets/images/rating-circle.png"
              alt="Star Icon"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-xl font-bold">1 Million Users Secured</h3>
          <p className="text-gray-600 mt-2 font-hubot">
            Trusted by businesses across industries, from e-commerce and fintech
            to various agencies and SaaS platforms.
          </p>
        </div>

        {/* ISO 27001 Certified */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <Image
              src="/assets/images/rating-circle.png"
              alt="Star Icon"
              width={100}
              height={100}
            />
          </div>
          <h2 className="text-xl font-bold">ISO 27001 Certified</h2>
          <p className="text-gray-600 mt-2 font-hubot">
            Axiler’s commitment to excellence in cybersecurity has earned us
            recognition from industry leaders and organizations.
          </p>
        </div>

        {/* Prevented Over $2M Loss */}
        <div className="flex flex-col items-center">
          <div className="mb-3">
            <Image
              src="/assets/images/rating-circle.png"
              alt="Star Icon"
              width={100}
              height={100}
            />
          </div>
          <h3 className="text-xl font-bold">Prevented Over $2 Million Loss</h3>
          <p className="text-gray-600 mt-2 font-hubot">
            By blocking cybercriminals and stopping account takeovers, we've
            helped businesses save millions in potential damages.
          </p>
        </div>
      </div>
    </div>
  );
}
