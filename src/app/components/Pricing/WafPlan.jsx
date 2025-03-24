import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // For CheckCircle icon
import { FaArrowRight } from "react-icons/fa"; // For ArrowRight icon

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$39",
      period: "/month",
      description:
        "All the basics for businesses that are just getting started.",
      features: [
        "Single Website Security",
        "OWASP Top 10 Attack Protection",
        "IP, Path & Geo Blocking",
      ],
      buttonText: "Get Started",
      recommended: false,
    },
    {
      name: "Standard",
      price: "$99",
      period: "/month",
      description: "Better for growing businesses that want more security.",
      features: [
        "All in Basic Package",
        "3 Subdomains",
        "Bot Protection & DDOS Protection",
        "AI Driven Threat Prevention",
      ],
      buttonText: "Get Started",
      recommended: true,
    },
    {
      name: "Premium",
      price: "Custom",
      period: "",
      description: "Advanced features for pros who need more customization.",
      features: [
        "All in Standard Package",
        "Customised Report",
        "Customised Features",
        "Dedicated Agent",
      ],
      buttonText: "Contact Us",
      recommended: false,
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <div className=" mx-auto lg:pb-[72px] px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 ">
          Our Pricing
        </h2>
        <p className="mt-3 text-gray-600 py-4">
          We give you the option to decide how much you need to use.
        </p>
      </div>

      <div className="md:container mt-12 mx-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3  lg:mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-xl shadow-lg p-8 border ${
              plan.recommended ? "border-gray-900" : "border-gray-200"
            } flex flex-col justify-between h-full`}
          >
            {plan.recommended && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-sm px-8 py-2 rounded-lg">
                RECOMMENDED
              </div>
            )}

            <h3 className="text-2xl font-semibold text-gray-900">
              {plan.name}
            </h3>
            <p className="mt-2 text-gray-500">{plan.description}</p>

            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                {plan.price}
              </span>
              <span className="text-gray-500">{plan.period}</span>
            </div>

            <ul className="mt-6 space-y-3 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <FaCheckCircle className="w-5 h-5 text-green-300 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full py-3 rounded-lg font-semibold transition ${
                plan.recommended
                  ? "bg-gray-900 text-white hover:bg-gray-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200"
              } flex items-center justify-center`}
            >
              {plan.buttonText} <FaArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
