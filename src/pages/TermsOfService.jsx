import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const TermsOfService = () => {
  return (
    <div className="scroll-smooth bg-white">
      <Header />

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-text-heading mb-4 text-center">
            Terms of <span className="text-teal">Service</span>
          </h1>
          <p className="text-center text-text-muted mb-12">Last Updated: January 1, 2026</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">1. Acceptance of Terms</h2>
              <p className="text-text-primary leading-relaxed">
                By accessing and using the Orvea Estates website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">2. Services Provided</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                Orvea Estates provides real estate services including:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Property buying and selling assistance</li>
                <li>Property listings and information</li>
                <li>Home loan facilitation</li>
                <li>Property refurbishment services</li>
                <li>Property quality inspections (50-point check)</li>
                <li>ML-powered property pricing recommendations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">3. User Responsibilities</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Use our services in compliance with all applicable laws</li>
                <li>Not engage in fraudulent or deceptive practices</li>
                <li>Not interfere with the proper functioning of our website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">4. Property Listings</h2>
              <p className="text-text-primary leading-relaxed">
                All property listings on our website are provided for informational purposes. While we strive for accuracy, we cannot guarantee that all information is current, complete, or error-free. Property availability, pricing, and specifications are subject to change without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">5. Pricing and Payments</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                Our services operate on a zero-brokerage model for property buyers. However:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Additional services may incur charges (refurbishment, inspections, etc.)</li>
                <li>All prices are subject to change without prior notice</li>
                <li>Payment terms will be clearly communicated before service provision</li>
                <li>Property developers may have their own payment structures</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">6. ML Pricing Algorithm</h2>
              <p className="text-text-primary leading-relaxed">
                Our machine learning-based pricing recommendations are provided as guidance only. These are estimates based on market data and algorithms. Actual property values may vary. Users should conduct their own due diligence before making purchasing decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">7. 50-Point Quality Check</h2>
              <p className="text-text-primary leading-relaxed">
                Our property quality inspection service provides a comprehensive assessment based on 50 quality parameters. While we strive for thoroughness, this inspection does not replace professional structural surveys or legal due diligence.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">8. Intellectual Property</h2>
              <p className="text-text-primary leading-relaxed">
                All content on the Orvea Estates website, including text, graphics, logos, images, and software, is the property of Orvea Estates or its content suppliers and is protected by intellectual property laws. Unauthorized use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">9. Limitation of Liability</h2>
              <p className="text-text-primary leading-relaxed">
                Orvea Estates shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">10. Third-Party Services</h2>
              <p className="text-text-primary leading-relaxed">
                We may facilitate connections with third-party service providers (banks, developers, contractors, etc.). We are not responsible for the actions, services, or products of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">11. Dispute Resolution</h2>
              <p className="text-text-primary leading-relaxed">
                Any disputes arising from the use of our services shall be resolved through good-faith negotiation. If negotiation fails, disputes will be subject to the exclusive jurisdiction of courts in New Delhi, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">12. Termination</h2>
              <p className="text-text-primary leading-relaxed">
                We reserve the right to terminate or suspend access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms of Service or is harmful to other users or our business.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">13. Changes to Terms</h2>
              <p className="text-text-primary leading-relaxed">
                We may modify these Terms of Service at any time. Continued use of our services after changes constitutes acceptance of the modified terms. We recommend reviewing these terms periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">14. Governing Law</h2>
              <p className="text-text-primary leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">15. Contact Information</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-stone-50 p-6 rounded-xl">
                <p className="text-text-primary mb-2">
                  <strong>Email:</strong> <a href="mailto:info@orveaestates.com" className="text-teal hover:underline">info@orveaestates.com</a>
                </p>
                <p className="text-text-primary mb-2">
                  <strong>Phone:</strong> <a href="tel:+919911114978" className="text-teal hover:underline">+91 99111 14978</a>
                </p>
                <p className="text-text-primary">
                  <strong>Address:</strong> New Delhi, India
                </p>
              </div>
            </section>

            <section className="bg-teal/10 p-6 rounded-xl">
              <p className="text-text-primary leading-relaxed">
                <strong>Acknowledgment:</strong> By using Orvea Estates services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default TermsOfService;
