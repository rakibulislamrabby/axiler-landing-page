import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import LifeAtAxiler from "./LifeAtAxiler";

// Original sections
const teamSections = {
  core: [
    {
      name: "Jubaer Alnazi",
      role: "The Magician",
      description:
        "8+ years of experience in cybersecurity. Hacked Apple, Google, Facebook, Grab, and many other top tech giants.",
      linkedIn: "https://www.linkedin.com/in/alnazi-h33t/",
    },
    {
      name: "Prottoy",
      role: "Co-Founder",
      description:
        "Half a decade of leadership in venture capital and business management, driving growth and innovation across multiple industries.",
      linkedIn: "#",
    },
    {
      name: "Rifat Hassan",
      role: "Co-Founder",
      description:
        "The Co-Founder for over three years encapsulates leadership with a strong foundation in business administration.",
      linkedIn: "https://www.linkedin.com/in/rifat-hassan-2b0625168/",
    },
  ],
  axiler: [
    // Tech Team
    {
      name: "Faisal Al Mamun",
      role: "Tech Lead - AI/ML Engineer - Tech",
      description: "Expert in AI, specializing in computer vision and NLP.",
      linkedIn: "https://www.linkedin.com/in/faisal-al-mamun-0097961a7/",
    },
    {
      name: "Md Shohedul Islam",
      role: "Senior Software Engineer - Tech",
      description: "Optimizing APIs and databases with Node.js mastery.",
      linkedIn: "https://www.linkedin.com/in/shohedul350/",
    },
    {
      name: "Md. Ashanaur Rahman",
      role: "Full Stack Developer - Tech",
      description:
        "Building seamless web experiences from frontend to backend.",
      linkedIn: "https://www.linkedin.com/in/md-ashanaur-rahman-117bba21a/",
    },
    {
      name: "Md Rakibul Islam",
      role: "Front End Developer - Tech",
      description:
        "Specializing in building scalable and user-friendly interfaces with modern web technologies.",
      linkedIn: "https://www.linkedin.com/in/rakibulislam2/",
    },
    {
      name: "Rabeya Boshri",
      role: "Software Quality Assurance - Tech",
      description: "Ensuring software quality with rigorous testing processes.",
      linkedIn: "https://www.linkedin.com/in/rabeya-boshri-mou/",
    },
    {
      name: "Abraham Kaikobad",
      role: "AI/ML Research Intern - Tech",
      description: "Exploring AI innovations in computer vision and NLP.",
      linkedIn: "https://www.linkedin.com/in/abraham-kaikobad-23542517b/",
    },
    // Security Team
    {
      name: "Md. Minhazul Islam",
      role: "Senior Engineer, Product Security - Tech",
      description:
        "Specialized in vulnerability assessment and secure systems.",
      linkedIn: "https://www.linkedin.com/in/minhaz88/",
    },
    {
      name: "Abdullah Al Maruf",
      role: "Senior Engineer, Offensive Security - Tech",
      description:
        "Ensuring robust security through ethical hacking expertise.",
      linkedIn: "https://www.linkedin.com/in/a-almaruf/",
    },
    {
      name: "Minhajul Islam (Mredol)",
      role: "Junior Security Engineer - Tech",
      description: "Dedicated to strengthening digital defenses.",
      linkedIn: "https://www.linkedin.com/in/minhajul-islam-here/",
    },
    // Business Team
    {
      name: "Mehmudul Haque",
      role: "CBO - Business",
      description: "Driving business growth through data-driven strategies.",
      linkedIn: "https://www.linkedin.com/in/mehmudul-haque-mehmud-b0717429/",
    },
    {
      name: "Abdullah Al Mahir",
      role: "Senior Business Associate - Business",
      description: "Bridging strategy with execution for business success.",
      linkedIn: "https://www.linkedin.com/in/abdullah-al-mahir-407a48249/",
    },
    {
      name: "Sabbir Hossain",
      role: "Marketing Associate - Business",
      description: "Crafting impactful marketing strategies for growth.",
      linkedIn: "https://www.linkedin.com/in/sabbir-hossain-8b71b71a4/",
    },
  ],
};

export default function AllTeam() {
  return (
    <div className="px-4 py-16">
      <section className="lg:container px-4 py-16">
        {/* Main Title */}
        <h2 className="text-2xl pb-8 lg:text-3xl text-center font-medium font-hubot text-gray-900">
          Meet the skilled and experienced team <br />
          behind innovative products
        </h2>

        {/* Core Team */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Core Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamSections.core.map((member, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-xl p-6 border border-b-4 border-black hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 font-hubot">
                  {member.role}
                </p>
                <hr className="my-4 border-gray-300" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Axiler Team */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Axiler Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamSections.axiler.map((member, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded-xl p-6 border border-b-4 border-black hover:shadow-lg transition-shadow duration-300"
              >
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600 font-hubot">
                  {member.role}
                </p>
                <hr className="my-4 border-gray-300" />
                <p className="text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LifeAtAxiler />
    </div>
  );
}
