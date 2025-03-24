import ComplianceBanner from "../../components/Usecase/ComplianceBanner";
import Partners from "../../components/Homepage/Partners";
import ComplianceSection from "../../components/Usecase/ComplianceSection";
import ContactForm from "../../components/Contact/Contact";

export default function page() {
  return (
    <div>
      <ComplianceBanner />
      <Partners />
      <ComplianceSection />
      <ContactForm />
    </div>
  );
}
