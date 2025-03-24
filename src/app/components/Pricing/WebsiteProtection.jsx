import React from "react";

const WebsiteProtection = () => {
  return (
    <section className="bg-white  py-[66px] px-6 md:px-12 lg:px-20 ">
      <div className="md:container">
        <div className="w-5/6">
          <h2 className="text-3xl md:text-6xl font-bold text-[#0A272E] ">
            Complete Website Protection
          </h2>
          <p className="mt-4 text-xl font-hubot text-[#667085]">
            Protect your website with an all-in-one security solution that
            safeguards against hacking attempts, data breaches, and cyber
            threats in real-time. Our advanced defenses provide 24/7 protection,
            ensuring your business stays secure while maintaining peak
            performance.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {/* Adaptive Defence */}
          <div className="w-3/6">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#7B7B7B]">
              Adaptive Defence
            </h3>
            <p className="mt-4 text-lg text-[#667085] font-hubot">
              Unlike traditional WAFs, Axiler’s AI continuously learns from
              emerging threats, dynamically adjusting rules to block new attack
              vectors.
            </p>
          </div>

          {/* Real Time Monitoring */}
          <div className="w-3/6">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#7B7B7B]">
              Real Time Monitoring
            </h3>
            <p className="mt-4 text-lg text-[#667085] font-hubot">
              Gain full visibility into your web traffic with intuitive
              dashboards, instant alerts, and automated threat intelligence
              updates.
            </p>
          </div>

          {/* AI-Driven Threat Detection */}
          <div className="w-3/6">
            <h3 className="text-2xl md:text-4xl font-semibold text-[#7B7B7B]">
              AI-Driven Threat Detection
            </h3>
            <p className="mt-4 text-lg text-[#667085] font-hubot">
              Axiler’s AI-Powered WAF offers intelligent, real-time protection
              against sophisticated web-based attacks, ensuring that your
              business stays secure without compromising performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteProtection;
