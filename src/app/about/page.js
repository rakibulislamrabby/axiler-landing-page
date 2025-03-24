import React from "react";
import { FaBullseye } from "react-icons/fa";
import { FiEye, FiTarget } from "react-icons/fi";
import ContactForm from "../components/Contact/Contact";

export default function About() {
  return (
    <div>
      {/* <!-- Hero --> */}
      <section className="py-14 relative">
        <div className="max-w-3xl mx-auto px-6 relative">
          <h1 className="text-3xl lg:text-5xl font-semibold text-black text-center mb-8">
            About AXILER
          </h1>
          <p className=" text-black leading-relaxed font-hubot mb-5 text-justify hyphens-auto">
            Axiler is a provider of cyber security and cloud security solutions.
            We help organizations of all sizes protect their sensitive data and
            meet industry standards and regulations. Our team is composed of
            experts in the field, who are dedicated to providing our clients
            with the best possible service and support.
          </p>
          <p className=" text-black font-hubot text-justify mb-5">
            We understand the importance of security and compliance in today’s
            digital landscape. That’s why we offer comprehensive solutions
            designed to meet our client’s unique needs.
          </p>
          <p className=" text-black font-hubot text-justify mb-5">
            At Axiler, we are dedicated to helping our clients achieve their
            goals, whether that means protecting their sensitive data, complying
            with industry standards, or reducing costs. Our team is always
            available to provide guidance and support, and we work closely with
            our clients to ensure that their needs are met.
          </p>
          <p className=" text-black font-hubot text-justify mb-5">
            We pride ourselves on our commitment to excellence and strive to
            deliver the best possible service to our clients. Whether you are a
            small business or a large enterprise, we have the expertise and
            resources to help you succeed. With Axiler, you can rest assured
            that your cyberspace is secured and compliant, allowing you to focus
            on your core business operations.
          </p>
        </div>
      </section>

      {/* mission vission  */}
      <section className="py-12 max-w-6xl mx-auto mt-12 lg:mt-20 px-5 sm:px-10">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <FiEye className="h-9 w-9 text-primary mb-5" /> {/* Vision Icon */}
            <h3 className="text-black text-2xl mb-6 font-semibold">
              Our <span className="text-primary">Vision</span>
            </h3>
            <p className="text-black  text-justify hyphens-auto">
              To be the most trusted cybersecurity company in the world. With
              trust as the foundation, we are committed to providing you with
              the most secure cyberspace possible.
            </p>
          </div>
          <div>
            <FiTarget className="h-9 w-9 text-primary mb-5" />{" "}
            {/* Mission Icon */}
            <h3 className="text-black text-2xl mb-6 font-semibold">
              Our <span className="text-primary">Mission</span>
            </h3>
            <p className="text-black  text-justify hyphens-auto">
              To make cybersecurity products & services affordable. We
              understand that cybersecurity is vital for ensuring your safety
              and security in the cyber realm. That’s why we deliver effective
              and affordable solutions that fit your goals and challenges.
            </p>
          </div>
          <div>
            <FaBullseye className="h-9 w-9 text-primary mb-5" />{" "}
            {/* Goal Icon */}
            <h3 className="text-black text-2xl mb-6 font-semibold">
              Our <span className="text-primary ">Goal</span>
            </h3>
            <p className="text-black  text-justify hyphens-auto">
              To protect sensitive data of companies from breaches. We
              acknowledge that sensitive data is the key to any company’s
              success and growth. That’s why we deliver advanced and efficient
              cybersecurity solutions that avoid and counter breaches, and
              reduce their harm.
            </p>
          </div>
        </div>
      </section>

      <ContactForm/>
    </div>
  );
}
