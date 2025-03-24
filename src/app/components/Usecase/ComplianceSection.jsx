import { FaCheckCircle } from "react-icons/fa";

const complianceItems = [
  "ISO 27001 - Implement industry best practices for information security management.",
  "GDPR & Data Privacy Laws - Ensure secure data handling, storage, and user consent compliance.",
  "SOC 2 - Meet strict security, availability, and confidentiality standards for SaaS providers.",
  "PCI-DSS - Secure payment transactions and protect customer financial data.",
  "HIPAA - Safeguard sensitive healthcare information and ensure patient data security.",
  "NIST & CIS Benchmarks - Align with cybersecurity frameworks that reduce risks and strengthen defenses.",
  "Cyber Essentials & Cyber Trust Mark - Certify your business against essential security threats.",
];

export default function ComplianceSection() {
  return (
    <section className="md:container bg-white py-12 ">
      <div className=" p-6 md:p-12 md:w-2/3 ">
        <h2 className="text-3xl md:text-6xl font-bold text-[#0A272E]  mb-4 text-justify hyphens-auto">
          Complete Compliance
        </h2>
        <p className="text-gray-600 mb-6 font-medium text-justify hyphens-auto font-hubot">
          We simplify the complex process of meeting regulatory standards by
          providing automated security controls, real-time monitoring, and
          audit-ready reporting. Whether you're a startup or an enterprise, we
          ensure your business stays fully compliant with the latest security
          and data protection laws.
        </p>
        <ul className="space-y-3">
          {complianceItems.map((item, index) => (
            <li key={index} className="flex space-x-3 text-gray-800">
              <FaCheckCircle className="text-green-500 w-6 h-6 flex-shrink-0" />
              <span className="text-justify hyphens-auto font-hubot">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
