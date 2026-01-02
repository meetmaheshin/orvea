const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Orvea Estates website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Services Provided</h2>
            <p className="mb-4">
              Orvea Estates provides:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Real estate listing and search services</li>
              <li>Property buying and selling assistance</li>
              <li>Property quality verification (50-point check)</li>
              <li>ML-powered property pricing analysis</li>
              <li>Legal documentation support</li>
              <li>Property insurance services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Responsibilities</h2>
            <p className="mb-4">
              As a user of our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the confidentiality of your account</li>
              <li>Not misuse or abuse our platform</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Not engage in fraudulent activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Property Listings</h2>
            <p>
              All property listings are subject to availability. Orvea Estates acts as a facilitator between buyers and sellers. We make every effort to ensure accuracy of listings, but cannot guarantee the availability or accuracy of all information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Pricing and Payments</h2>
            <p className="mb-4">
              Our pricing and payment terms include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Service fees are transparently communicated before any transaction</li>
              <li>Fees vary based on property value and services required</li>
              <li>ML-powered pricing is provided as guidance only</li>
              <li>Final property prices are subject to negotiation between parties</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Quality Check & Insurance</h2>
            <p>
              Our 50-point quality check is performed by certified professionals. Property insurance coverage terms are provided separately for each property. Coverage details and limitations will be clearly communicated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Limitation of Liability</h2>
            <p>
              Orvea Estates shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services. We are not responsible for disputes between buyers and sellers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Intellectual Property</h2>
            <p>
              All content on the Orvea Estates website, including text, graphics, logos, and images, is the property of Orvea Estates and protected by copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend access to our services immediately, without prior notice, for conduct that we believe violates these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Changes to Terms</h2>
            <p>
              Orvea Estates reserves the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in New Delhi, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">12. Contact Information</h2>
            <p className="mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Email:</strong> info@orveaestates.com</p>
              <p><strong>Phone:</strong> +91 99111 14978</p>
              <p><strong>Address:</strong> New Delhi, India</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
