import Image from "next/image";
import Link from "next/link";

export default function SecuritySection() {
  const features = [
    {
      number: "01",
      title: "Complete Website Protection",
      description:
        "Experience complete website protection, with robust defenses that cover everything from DDoS attacks to SQL injections, keeping your site safe 24/7.",
    },
    {
      number: "02",
      title: "Complete Compliance",
      description:
        "Continuously monitor your cloud environment, automatically identify misconfigurations, and ensure compliance with CIS, HIPAA, PCI DSS, and more.",
    },
    {
      number: "03",
      title: "Complete Cloud Security",
      description:
        "Stay ahead of potential threats and vulnerabilities with our CNAPP solution, offering deep visibility and automated protection for your cloud applications, containers, and microservices throughout their lifecycle.",
    },
  ];

  return (
    <div className="container">
      <div className=" py-20 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between lg:justify-center items-center lg:items-start">
          {/* Left portion */}
          <div className="w-full lg:w-1/3 mb-10 lg:mb-0 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl text-gray-900 mb-6">
              ALL YOUR <br /> SECURITY NEEDS <br /> IN ONE{" "}
              <span className="text-primary">PLATFORM</span>
            </h1>
          </div>

          {/* Middle portion (previous design restored) */}
          <div className="relative w-full lg:w-1/3 mb-10 lg:mb-0">
            {/* axiwaf  */}
            <Link href="pricing">
              <div className="group">
                <h1 className="relative z-10 text-white text-xl font-semibold top-[18px] left-[16px]">
                  aXIWAF
                </h1>
                <img
                  className=" circle-frame absolute top-[21px] right-[5px] "
                  src="/assets/vector/circle-frame-black.png"
                  alt="AXIWAF"
                />
                <img
                  className="absolute top-0 left-0 w-full"
                  src="/assets/vector/axiwaf-vector.png"
                  alt="AXIWAF"
                />
              </div>
            </Link>

            {/* cspm  */}
            <Link href="/pricing">
              <div className="group">
                <h1 className="relative z-10 text-white text-xl font-semibold top-[120px] left-[16px]">
                  CSPM
                </h1>
                <img
                  className="circle-frame absolute top-[150px] right-[10px] "
                  src="/assets/vector/circle-frame-white.png"
                  alt="AXIWAF"
                />
                <img
                  className="absolute top-[130px] left-0 w-full"
                  src="/assets/vector/cspm-vector.png"
                  alt="CSPM"
                />
              </div>
            </Link>

            <Link href="/pricing">
              <div className="group">
                <h1 className="relative z-10 text-xl font-bold top-[240px] left-[16px]">
                  CNAPP
                </h1>
                <img
                  className="circle-frame absolute top-[290px] right-[10px] "
                  src="/assets/vector/circle-frame-white.png"
                  alt="AXIWAF"
                />
                <img
                  className="absolute top-[280px] w-full"
                  src="/assets/vector/cnapp-vector.png"
                  alt="CNAPP"
                />
              </div>
            </Link>
          </div>

          {/* Right portion */}
          <section className="w-full lg:w-1/3 lg:pl-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative flex flex-col sm:flex-row items-start mb-6"
              >
                {/* Background Number */}
                <span className="absolute text-gray-200 text-4xl sm:text-5xl font-bold -z-10 top-0 left-0">
                  {feature.number}
                </span>

                {/* Left Content */}
                <div className="relative z-10 w-full sm:pl-12">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 mt-2 text-sm sm:text-base text-justify hyphens-auto">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
