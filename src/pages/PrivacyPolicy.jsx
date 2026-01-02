import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingButtons from '../components/FloatingButtons';

const PrivacyPolicy = () => {
  return (
    <div className="scroll-smooth bg-white">
      <Header />

      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold text-text-heading mb-4 text-center">
            Privacy <span className="text-teal">Policy</span>
          </h1>
          <p className="text-center text-text-muted mb-12">Last Updated: January 1, 2026</p>

          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">1. Introduction</h2>
              <p className="text-text-primary leading-relaxed">
                Orvea Estates ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website orveaestates.com and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">2. Information We Collect</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Property preferences and requirements</li>
                <li>Financial information for loan assistance</li>
                <li>Communication preferences</li>
                <li>Feedback and survey responses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">3. How We Use Your Information</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Provide and maintain our real estate services</li>
                <li>Process your property inquiries and transactions</li>
                <li>Send you property listings, updates, and marketing communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Provide customer support and respond to your inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">4. Information Sharing</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Property developers and builders for your inquiries</li>
                <li>Financial institutions for home loan assistance</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>
              <p className="text-text-primary leading-relaxed mt-4">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">5. Data Security</h2>
              <p className="text-text-primary leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">6. Your Rights</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-text-primary space-y-2 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">7. Cookies and Tracking</h2>
              <p className="text-text-primary leading-relaxed">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">8. Third-Party Links</h2>
              <p className="text-text-primary leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">9. Children's Privacy</h2>
              <p className="text-text-primary leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">10. Changes to This Policy</h2>
              <p className="text-text-primary leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-text-heading mb-4">11. Contact Us</h2>
              <p className="text-text-primary leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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
          </div>
        </div>
      </section>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PrivacyPolicy;
