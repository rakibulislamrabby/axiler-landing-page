import React from 'react'
import PricingBanner from '../components/Pricing/PricingBanner';
import WafPackage from '../components/Pricing/WafPackage';
import Hero from '../components/Homepage/Hero';
import Contact from "../components/Contact/Contact";
import Partners from '../components/Homepage/Partners';
import WebsiteProtection from '../components/Pricing/WebsiteProtection';
import WafPlan from '../components/Pricing/WafPlan';


export default function Pricing() {
  return <div>
    <PricingBanner/>
    <Partners/>
    <WebsiteProtection/>
    <WafPlan/>
    {/* <WafPackage/> */}
    <Contact/>
  </div>;
}
