import Image from "next/image";
import { GoShieldCheck } from "react-icons/go";

export default function CockpitSection() {
  return (
    <section className="relative z-10 lg:py-20">
      {/* Gradient Background for Cockpit Image */}
      <div className="relative flex justify-center -p-10">
        <Image
          src="/assets/images/secure-cockpit.png"
          alt="Cybersecurity Cockpit"
          width={1600}
          height={800}
          layout="responsive"
          className="relative z-20"
        />
        {/* Apply gradient to top part */}
        <div className="absolute lg:-top-72 left-0 w-full z-10">
          <Image
            src="/assets/gradient/green-gradient.png"
            alt="Gradient Overlay"
            width={700}
            height={400}
            layout="intrinsic"
            className="w-full"
          />
        </div>
      </div>

      {/* Floating Security Issue Labels */}
      {[
        { text: "Compliance Issue", top: "17%", left: "5%" },
        { text: "Outdated Software", top: "15%", left: "18%" },
        { text: "Regulatory Issue", top: "7%", left: "25%" },
        { text: "Runtime Issue", top: "25%", left: "14%" },
        { text: "Vulnerability", top: "35%", left: "9%" },

        { text: "Breach Detected", top: "7%", right: "25%" },
        { text: "Insider Risk", top: "10%", right: "15%" },
        { text: "Leaked Credentials", top: "17%", right: "20%" },
        { text: "Anomaly Detected", top: "26%", right: "8%" },
        { text: "Misconfiguration Detected", top: "35%", right: "11%" },
      ].map((issue, index) => (
        <div
          key={index}
          className="absolute bg-white text-red-600 border border-red-600 px-4 py-2 rounded-md font-medium text-xs shadow-lg flex items-center gap-2 lg:mx-10"
          style={{ top: issue.top, left: issue.left, right: issue.right }}
        >
          {issue.text}
        </div>
      ))}

      {/* Center Secured Indicator with Image Behind */}
      <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black bg-white px-6 py-3 rounded-md flex items-center gap-2 shadow-xl z-30">
        <GoShieldCheck className="w-5 h-5 z-10 text-green-700 font-bold" />
        <span className="text-lg text-green-900 font-semibold z-10">
          Secured
        </span>
      </div>

      {/* Horizontal and Vertical Lines */}
      <div className="absolute top-[42%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] flex justify-center items-center">
        {/* Vertical Line */}
        <div className="absolute h-1/2 w-[3px] bg-gray-500"></div>
        {/* Horizontal Line */}
        <div className="absolute w-1/2 h-[3px] bg-gray-500"></div>
      </div>

      {/* Section Heading */}
      <div className="bg-blue-600 absolute z-10 w-full text-white text-center text-3xl lg:text-5xl font-semibold py-6">
        ALL IN ONE COCKPIT
      </div>
    </section>
  );
}
