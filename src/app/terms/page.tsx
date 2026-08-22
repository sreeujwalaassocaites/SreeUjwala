import LegalPage from "@/components/legal/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      summary="Important conditions for using the EAZYKREDIT website and inquiry service."
      sections={[
        {
          title: "Nature of the service",
          paragraphs: [
            "EAZYKREDIT provides loan facilitation and advisory support. Unless expressly stated otherwise in a written agreement, EAZYKREDIT is not the lender and does not make the final credit decision.",
          ],
        },
        {
          title: "No guarantee of approval or pricing",
          paragraphs: [
            "Submitting an inquiry does not create a loan agreement and does not guarantee approval, eligibility, disbursement, interest rate, tenure or processing time. Final terms depend on the policies, verification and approval of the relevant bank or NBFC.",
          ],
        },
        {
          title: "User responsibilities",
          bullets: [
            "Provide accurate and current information.",
            "Do not impersonate another person or submit false documents.",
            "Do not submit OTPs, PINs, passwords, card details or unnecessary identity documents through public forms.",
            "Review lender documents, charges and repayment obligations before accepting an offer.",
          ],
        },
        {
          title: "Rates and third-party information",
          paragraphs: [
            "Illustrative rates, calculators, lender names and product descriptions may change and should not be treated as a binding offer. Bank and NBFC names and logos belong to their respective owners. Any claimed partnership or empanelment should be verified before publication.",
          ],
        },
        {
          title: "Website availability",
          paragraphs: [
            "We may update, suspend or withdraw portions of the website. We are not responsible for interruptions caused by internet providers, third-party platforms, home-lab testing infrastructure or events outside reasonable control.",
          ],
        },
      ]}
    />
  );
}
