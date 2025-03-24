import Contact from "./components/Contact/Contact";
import Banner from "./components/Homepage/Banner";
import Blogs from "./components/Homepage/Blogs";
import BlogSection from "./components/Homepage/BlogSection";
import CockpitSection from "./components/Homepage/CockpitSection";
import Defending from "./components/Homepage/Defending";
import Hero from "./components/Homepage/Hero";
import Partners from "./components/Homepage/Partners";
import SecurityOverview from "./components/Homepage/SecurityOverview";
import SecuritySection from "./components/Homepage/SecuritySection";
import Services from "./components/Homepage/Services";
import Team from "./components/Homepage/Team";
import Testimonial from "./components/Homepage/Testimonial";
import Testimonials from "./components/Homepage/Testimonials";


export default function Home() {
  return (
    <div>
      <Banner />
      <Partners />
      <Defending />
      <Services />
      <div className="hidden lg:block">
        <CockpitSection />
      </div>
      {/* <SecuritySection /> */}
      <div className="hidden lg:block">
        <SecurityOverview />
      </div>
      <Testimonial />
      {/* <Blogs /> */}
      <Team />
      {/* <Testimonials /> */}
      <BlogSection />
      <Contact />
    </div>
  );
}
