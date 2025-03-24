import CloudSecurityBanner from "../../components/Cloudsecurity/CloudSecurityBanner";
import Partners from "../../components/Homepage/Partners";
import CloudSecuritySection from "../../components/Cloudsecurity/CloudSecuritySection";
import ContactForm from "../../components/Contact/Contact";

export default function page() {
  return (
    <div>
      <CloudSecurityBanner />
      <Partners />
      <CloudSecuritySection />
      <ContactForm />
    </div>
  );
}
