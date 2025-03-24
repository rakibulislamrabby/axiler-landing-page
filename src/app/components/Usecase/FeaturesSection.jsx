import { HiArrowUpRight } from "react-icons/hi2";

export default function FeaturesSection() {
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
    <section className="max-w-6xl mx-auto py-16 px-6 grid gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="relative flex items-center justify-between p-6 flex-col lg:flex-row"
        >
          {/* Background Number */}
          <span className="absolute text-gray-100 text-7xl font-bold -z-10 top-1 left-0">
            {feature.number}
          </span>

          {/* Left Content */}
          <div className="relative z-10 w-full lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-3xl font-bold text-gray-900">
              {feature.title}
            </h2>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>

          {/* Right Button */}
          <button className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary transition">
            <span>Explore</span>
            <HiArrowUpRight size={18} />
          </button>
        </div>
      ))}
    </section>
  );
}
