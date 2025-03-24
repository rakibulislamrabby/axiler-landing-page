import Image from 'next/image';
import React from 'react'

export default function LifeAtAxiler() {
  return (
    <div>
      <section className=" relative mt-12 max-w-6xl mx-auto px-5 sm:px-10">
        <h2 className=" text-2xl pb-8 lg:text-3xl font-bold text-center mt-10 font-hubot">
          Life at Axiler
        </h2>
        <p className=" text-center mb-10 font-hubot">
          We believe that our customers should be able to trust us to protect
          their data and businesses.
        </p>

        <div className="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
          <div className="w-full lg:w-1/2 flex flex-col">
            <div className="w-full flex-1">
              {/* Set height explicitly for mobile screens */}
              <div className="relative w-full h-64 lg:h-full">
                <Image
                  src="/assets/team/team-2.png"
                  className="rounded-xl object-cover object-center"
                  alt="Office 2"
                  layout="fill"
                />
              </div>
            </div>
            <div className="w-full mt-6 flex-1">
              {/* Set height explicitly for mobile screens */}
              <div className="relative w-full h-64 lg:h-full">
                <Image
                  src="/assets/team/activity-2.jpg"
                  className="rounded-xl object-cover object-center"
                  alt="Office 1"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col space-y-6">
            <div className="flex-1">
              <Image
                src="/assets/team/activity-1.jpg"
                className="rounded-xl"
                alt="Office 3"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/assets/team/activity-3.jpg"
                className="rounded-xl"
                alt="Team 2"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
            <div className="flex-1">
              <Image
                src="/assets/team/activity-4.jpg"
                className="rounded-xl"
                alt="Office 4"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
