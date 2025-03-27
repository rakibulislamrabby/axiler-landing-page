import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
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
];

export default function Team() {
  return (
    <section className="lg:container px-4 py-16 ">
      {/* Section Title */}
      <h2 className="text-xl lg:text-start sm:text-2xl md:text-3xl pb-8 sm:pb-12 md:pb-[60px] text-center font-medium font-hubot text-gray-900">
        Meet the skilled and experienced team <br />
        behind innovative products
      </h2>

      {/* Team Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-xl p-6 border  border-b-4 border-black hover:shadow-lg transition-shadow duration-300"
          >
            {/* LinkedIn Icon */}
            <a
              href={member.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-gray-800 hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>

            {/* Member Info */}
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <hr className="my-4 border-gray-300" />
            <p className="text-sm text-gray-700 leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <Link href="/team">
          <button className="px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition">
            See all team
          </button>
        </Link>
      </div>
    </section>
  );
}
