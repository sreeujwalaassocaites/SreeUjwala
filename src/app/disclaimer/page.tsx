import LegalPage from "@/components/legal/LegalPage";

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Loan & Security Disclaimer"
      summary="Use the website safely and understand the limits of the information provided."
      sections={[
        {
          title: "Loan facilitation only",
          paragraphs: [
            "EAZYKREDIT assists customers in exploring financing options. Credit decisions, KYC, verification, pricing and disbursement are controlled by the relevant regulated lender.",
          ],
        },
        {
          title: "Protect yourself from fraud",
          bullets: [
            "Never share an OTP, UPI PIN, ATM PIN, CVV, password or full card details.",
            "Do not transfer money to an unknown personal account based only on a call or message.",
            "Verify the identity of the representative and the lender before sharing documents or paying charges.",
            "Use only confirmed EAZYKREDIT phone numbers, email addresses and website domains.",
          ],
        },
        {
          title: "Financial information",
          paragraphs: [
            "Calculators and examples are educational estimates and may not include every fee, tax, insurance charge or lender condition. Obtain and review the lender's official key facts statement, sanction terms and repayment schedule before proceeding.",
          ],
        },
        {
          title: "Production readiness",
          paragraphs: [
            "The test deployment at eazykredit.franky.co.in is for demonstration and acceptance testing. It should not be used as the final production domain until security, data protection, lender disclosures, grievance details and notification credentials have been reviewed and approved by the business owner.",
          ],
        },
      ]}
    />
  );
}
