"use client";

import Image from "next/image";

const PrivacyPolicy = () => {
  return (
    <main className="relative py-20 bg-white text-gray-900">
      {/* Header Gradient */}
      <div className="absolute left-0 -top-28 w-full h-[900px]">
        <Image
          src="/assets/gradients/gradient-1-light.png"
          layout="fill"
          objectFit="cover"
          alt="gradient"
          priority
        />
      </div>

      {/* Content */}
      <section className="container relative pt-20 pb-20">
        <div className="max-w-6xl px-5 sm:px-10 lg:w-2/3 lg:pl-16">
          <div className="mt-10">
            <h1 className="text-4xl font-bold">Axiler Privacy Policy</h1>
            <p className="text-justify mt-4 text-gray-700 pt-5">
              At Axiler, we are committed to protecting the privacy of our
              customers and users. This Privacy Policy explains how we collect,
              use, and protect the information we receive from you.
            </p>

            <h2 className="text-2xl font-semibold mt-10">
              Collection of Information
            </h2>
            <p className="text-justify mt-4 text-gray-700 pt-5">
              We collect information from you when you register on our website,
              place an order, subscribe to our newsletter, respond to a survey,
              fill out a form, or use certain other services on our website. The
              information we collect may include your name, email address, phone
              number, and other contact information.
            </p>

            <h2 className="text-3xl font-semibold mt-10">Use of Information</h2>
            <p className="text-justify mt-4 text-gray-700 pt-5">
              The information we collect from you may be used in the following
              ways:
            </p>
            <ul className="list-disc ml-5 text-gray-700 pt-5">
              <li>To personalize your experience</li>
              <li>To improve our website</li>
              <li>To improve customer service</li>
              <li>To process transactions</li>
              <li>To send periodic emails</li>
            </ul>

            <h2 className="text-3xl font-semibold mt-10">
              Protection of Information
            </h2>
            <p className="text-justify mt-4 text-gray-700 pt-6">
              We take appropriate security measures to protect against
              unauthorized access to or unauthorized alteration, disclosure, or
              destruction of data. We use encryption technology when collecting
              or transferring sensitive data such as credit card information.
            </p>

            <h2 className="text-3xl font-semibold mt-10">
              Changes to Privacy Policy
            </h2>
            <p className="text-justify mt-4 text-gray-700 pt-6">
              We reserve the right to modify this Privacy Policy at any time.
              Any changes to this Privacy Policy will be posted on this page.
            </p>

            <h2 className="text-3xl font-semibold mt-10">Contact Us</h2>
            <p className="text-justify mt-4 text-gray-700 pt-6">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <a
                href="mailto:reachus@axiler.com"
                className="text-primary2 hover:underline"
              >
                reachus@axiler.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
