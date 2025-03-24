import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="md:container px-4 lg:h-screen min-h-screen relative flex flex-col md:flex-row items-center pt-9 md:pt-0 z-10">
      {/* Left Content */}
      <div className="md:w-1/2 text-center md:text-left z-20 px-2 lg:px-0">
        <h1 className="text-5xl lg:text-6xl xl:text-7xl text-[#1D1E25] font-hubot leading-tight">
          Cybersecurity, at the speed of simplicity
        </h1>
        <p className="mt-4 text-gray-600 text-base sm:text-lg lg:text-xl font-hubot">
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

      {/* Right Side - Background Gradient + Foreground Image */}
      <div className="relative md:w-1/2 mt-10 md:mt-0 w-full flex justify-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute w-[250px] h-[400px] sm:w-[350px] sm:h-[500px] md:w-[700px] md:h-[700px] rounded-full bg-gradient-to-r from-primary via-indigo-300 to-primary opacity-50 blur-[80px] sm:blur-[100px]"></div>
        </div>

        {/* Foreground Image */}
        <div className="relative z-10">
          <Image
            src="/assets/images/air-banner.png"
            alt="Cyber Security Dashboard"
            width={800}
            height={450}
            className="relative z-10 scale-100 sm:scale-110 md:scale-125 lg:scale-[1.3] overflow-visible"
          />
        </div>
      </div>
    </section>
  );
}
