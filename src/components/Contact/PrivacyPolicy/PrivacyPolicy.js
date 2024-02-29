import ContactNavigation from "../ContactNavigation/ContactNavigation";

const PrivacyPolicy = () => {
  return (
    <div className="contact-container">
      <ContactNavigation/>
      <h1>Privacy Policy</h1>
      <span className="bold">! THIS IS AN EXAMPLE PRIVACY POLICY FOR DEMONSTRATION PURPOSES ONLY !</span>
      <p>Last Updated: 2/26/2024</p>
      <h2>1. Introduction:</h2>
      <p>Welcome to The Bookstore. We are committed to protecting your privacy. This Privacy Policy applies to the contact form on our website and governs our data collection, processing, and usage practices. By using the contact form, you consent to the data practices described in this policy.</p>
      <h2>2. Information We Collect:</h2>
      <ul className="privacy-list">
        <li>
          <p><span className="bold">- Personal Information: </span>When you fill out the contact form, we may ask you to provide personal information such as your name and email address</p>
        </li>
        <li>
          <p><span className="bold">- Automatically Collected Information: </span>We may also collect information about your device and how you interact with our website, including IP addresses, browser types, and referring URLs.</p>
        </li>
      </ul>
      <h2>3. Use of Information:</h2>
      <ul className="privacy-list">
        The information we collect is used for the following purposes:
        <li>
          <p>- To respond to your inquiries and fulfill your requests.</p>
        </li>
        <li>
          <p>- To send you important information regarding our website, changes to our terms, conditions, and policies, or other administrative information.</p>
        </li>
        <li>
          <p>- For our business purposes, such as data analysis, audits, fraud monitoring and prevention, enhancing, improving or modifying our website, identifying usage trends, and determining the effectiveness of our promotional campaigns.</p>
        </li>
      </ul>
      <h2>4. Sharing of Information:</h2>
      <p>We do not sell, rent, or lease your personal information to third parties. Your information may be shared with service providers who perform services for us, but they are not authorized to use or disclose the information except as necessary to perform services on our behalf or to comply with legal requirements.</p>
      <h2>5. Data Security:</h2>
      <p>We use reasonable physical, electronic, and administrative measures to protect your information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.</p>
      <h2>6. Changes to this Privacy Policy:</h2>
      <p>We may update this Privacy Policy from time to time. We encourage you to periodically review this page for the latest information on our privacy practices.</p>
      <h2>7. Contact Us:</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at 1-800-NOT-REAL (1-800-000-0000).</p>
    </div>
  );
}

export default PrivacyPolicy;