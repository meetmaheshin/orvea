const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-600 mb-8">Last updated: January 1, 2026</p>

        <div className="space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              At Orvea Estates, we collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name, email address, and phone number</li>
              <li>Property preferences and search criteria</li>
              <li>Communication preferences</li>
              <li>Feedback and correspondence</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Send you property listings that match your preferences</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, marketing communications, and promotional offers</li>
              <li>Analyze usage patterns and improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Property developers and sellers when you express interest in a property</li>
              <li>Service providers who assist us in operating our platform</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights</h2>
            <p className="mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Cookies</h2>
            <p>
              We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy;
