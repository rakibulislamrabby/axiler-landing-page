import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="lg:container px-4 md:h-screen relative flex flex-col lg:flex-row items-center pt-16 md:pt-0 z-10">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left z-20 px-2 lg:px-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#1D1E25] font-hubot leading-tight">
          Cybersecurity, at the speed of simplicity
        </h1>
        <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl font-hubot">
          Easily protect your organization from cyberattacks{" "}
          <br className="hidden md:block" />
          with just one simple click, ensuring enhanced{" "}
          <br className="hidden md:block" />
          security and peace of mind.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 lg:mt-[50px]">
          <Link href="/trial">
            <button className="bg-black text-white px-6 sm:px-8 py-3 rounded-lg font-medium hover:opacity-85 transition">
              Get Trial
            </button>
          </Link>
          <button className="flex items-center gap-2 border border-gray-300 px-5 py-3 rounded-lg font-medium text-gray-900 hover:bg-gray-100 transition">
            <img
              src="/assets/icons/play-icon.png"
              alt="Play Icon"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
            <span className="text-sm sm:text-base">Watch A Demo</span>
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 w-full flex justify-center items-center overflow-visible">
        {/* Background Gradient */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[250px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[600px] md:h-[700px] lg:w-[800px] lg:h-[800px] rounded-full bg-gradient-to-r from-primary via-indigo-300 to-primary opacity-50 blur-[80px] sm:blur-[100px]"></div>
        </div>

        {/* Foreground Image */}
        <div className="relative z-10 w-full lg:w-[120%] xl:w-[140%]">
          <Image
            src="/assets/images/air-banner.png"
            alt="Cyber Security Dashboard"
            width={1200}
            height={700}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}