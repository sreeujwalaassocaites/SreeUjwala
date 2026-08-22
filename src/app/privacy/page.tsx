import LegalPage from "@/components/legal/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      summary="How EAZYKREDIT handles information submitted through this website."
      sections={[
        {
          title: "Information we collect",
          paragraphs: [
            "When you submit an inquiry, we may collect your name, mobile number, email address, city, employment category, requested loan type, approximate income, requested amount, message and your consent record.",
            "The public inquiry form does not request Aadhaar, PAN, bank statements, OTPs, PINs, passwords or card details. Please do not submit those items through this website, email or chat.",
          ],
        },
        {
          title: "Why we use the information",
          bullets: [
            "To acknowledge and respond to your inquiry.",
            "To contact you by phone, WhatsApp or email when you have consented.",
            "To understand the type of financing support you are requesting.",
            "To protect the form from spam, abuse and security threats.",
            "To comply with applicable legal and record-keeping obligations.",
          ],
        },
        {
          title: "Sharing and lender referrals",
          paragraphs: [
            "Your information should be shared with a bank, NBFC or service provider only when necessary for the service you requested and after appropriate disclosure or consent. EAZYKREDIT does not sell inquiry data for unrelated advertising.",
          ],
        },
        {
          title: "Retention and security",
          paragraphs: [
            "We retain inquiry information only for as long as reasonably required for follow-up, legitimate business records and legal obligations. Access should be limited to authorized personnel, and credentials must not be stored in public source code.",
            "No internet transmission or storage system can be guaranteed to be completely secure. Contact us promptly if you believe information was submitted in error or a security issue has occurred.",
          ],
        },
        {
          title: "Your choices",
          paragraphs: [
            "You may ask us to correct your contact details, stop promotional follow-up, or review a deletion request subject to applicable record-keeping requirements. You may also withdraw consent for future contact.",
          ],
        },
      ]}
    />
  );
}
