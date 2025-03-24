import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const highlights = [
  {
    text: "By uncovering and mitigating high-risk vulnerabilities, Axiler strengthened the cybersecurity framework of a fintech company, reducing exposure by 65%.",
    link: "#",
  },
  {
    text: "By identifying key security weaknesses, Axiler helped an agriculture technology company reduce attack risks by 70%, protecting vital supply chain data.",
    link: "#",
  },
  {
    text: "Axiler helped a leading garments manufacturer secure its supply chain data, reducing cyber risks by 69% and preventing unauthorized access to critical trade secrets.",
    link: "#",
  },
];

export default function Blogs() {
  return (
    <section className="md:container px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl pb-[60px] lg:text-3xl font-hubot font-medium text-gray-900">
        See How Businesses Across Industries Have Strengthened <br />
        Their Cyber Defenses with Axiler’s Cutting-Edge Security
      </h2>

      {/* Card Section */}
      <div className=" flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Card Container */}
        <div className="bg-primary text-white lg:p-6  rounded-xl flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-gray-400 w-full">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex-1 px-8 py-7 flex flex-col justify-between"
            >
              <p className="text-sm lg:text-base flex-grow text-justify hyphens-auto ">
                {item.text}
              </p>
              <Link
                href={item.link}
                className="mt-4 flex items-center gap-1 text-sm font-semibold hover:underline"
              >
                Learn more <GoArrowUpRight className="text-base" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
