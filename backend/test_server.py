import os
import unittest

os.environ.setdefault("STORE_LEADS", "false")

import server  # noqa: E402


class ValidationTests(unittest.TestCase):
    def base(self):
        return {
            "source": "full-application",
            "fullName": "Test Applicant",
            "mobileNumber": "9876543210",
            "email": "test@example.com",
            "city": "Hyderabad",
            "employmentType": "Salaried",
            "loanType": "Home Loan",
            "monthlyIncome": 50000,
            "loanAmount": 2500000,
            "message": "Please call after 5 PM.",
            "consent": True,
            "turnstileToken": "",
            "website": "",
        }

    def test_valid_full_application(self):
        data = server.validate_payload(self.base())
        self.assertEqual(data["mobileNumber"], "9876543210")
        self.assertEqual(data["loanAmount"], 2500000)

    def test_plus_91_mobile_is_normalised(self):
        payload = self.base()
        payload["mobileNumber"] = "+91 98765 43210"
        data = server.validate_payload(payload)
        self.assertEqual(data["mobileNumber"], "9876543210")

    def test_unicode_and_punctuation_in_name_are_supported(self):
        payload = self.base()
        payload["fullName"] = "Sree-Ujwala D’Souza"
        data = server.validate_payload(payload)
        self.assertEqual(data["fullName"], "Sree-Ujwala D’Souza")

    def test_consent_is_required(self):
        payload = self.base()
        payload["consent"] = False
        with self.assertRaises(ValueError):
            server.validate_payload(payload)

    def test_invalid_email_is_rejected(self):
        payload = self.base()
        payload["email"] = "invalid"
        with self.assertRaises(ValueError):
            server.validate_payload(payload)

    def test_contact_allows_missing_city_and_amounts(self):
        payload = self.base()
        payload.update({"source": "contact", "city": "", "monthlyIncome": None, "loanAmount": None})
        data = server.validate_payload(payload)
        self.assertIsNone(data["monthlyIncome"])

    def test_public_whatsapp_url_encodes_reference_message(self):
        url = server.public_whatsapp_url("Reference: EK TEST")
        self.assertIn("wa.me/", url)
        self.assertIn("Reference%3A+EK+TEST", url)


if __name__ == "__main__":
    unittest.main()
