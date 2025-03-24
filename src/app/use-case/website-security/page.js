import React from 'react'
import Pricingbanner from "../../components/Pricing/PricingBanner"
import Partners from "../../components/Homepage/Partners";
import WebsiteProtection from "../../components/Pricing/WebsiteProtection";
import WafPlan from "../../components/Pricing/WafPlan";
import Contact from "../../components/Contact/Contact";


export default function page() {
  return (
    <div>
      <Pricingbanner/>
      <Partners />
      <WebsiteProtection />
      <WafPlan />
      {/* <WafPackage/> */}
      <Contact />
    </div>
  );
}
