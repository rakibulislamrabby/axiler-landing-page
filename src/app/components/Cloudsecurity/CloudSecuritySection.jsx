import { GiRocket } from "react-icons/gi";

const securityFeatures = [
  "Real-Time Threat Detection & Incident Response",
  "Automated Security Patching (OCPP First In The Industry)",
  "Compliance & Risk Mitigation",
  "Seamless Multi-Cloud Security",
  "Enhanced Performance & Business Continuity",
];

export default function CloudSecuritySection() {
  return (
    <section className="md:container bg-white py-8">
      <div className="p-6 md:p-12 md:w-3/4">
        <h2 className="text-3xl md:text-6xl font-bold text-[#0A272E] mb-4  hyphens-auto">
          Complete Cloud Security
        </h2>
        <p className="text-gray-500 text-lg mb-6 font-medium text-justify hyphens-auto font-hubot">
          Cloud security is a multi-layered defense strategy designed to protect
          cloud environments from unauthorized access, data breaches, and cyber
          threats. It involves securing cloud infrastructure, workloads,
          applications, and user access using advanced technologies like AI,
          machine learning, and automation.
        </p>
        <p className="text-gray-600 text-lg mb-6 font-medium text-justify hyphens-auto font-hubot">
          Axiler's Complete Cloud Security solution ensures seamless security
          integration at every layer, protecting both cloud-based and on-premise
          environments.
        </p>
        <ul className="space-y-3">
          {securityFeatures.map((feature, index) => (
            <li key={index} className="flex space-x-3 text-gray-600">
              <GiRocket className="text-primary w-6 h-6 flex-shrink-0" />
              <span className="text-justify hyphens-auto font-hubot text-lg">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
