import ContactNavigation from "../ContactNavigation/ContactNavigation";

const PrivacyPolicy = () => {
  return (
    <div className="contact-container">
      <ContactNavigation/>
      <h1>Privacy Policy</h1>
      <span className="bold">! THIS IS AN EXAMPLE PRIVACY POLICY FOR DEMONSTRATION PURPOSES ONLY !</span>
      <p>Last Updated: 3/06/2024</p>
      <h2>1. Introduction:</h2>
      <p>Welcome to The Bookstore. We are committed to protecting your privacy. This Privacy Policy applies to the contact form on our website and 
        governs our data collection, processing, and usage practices. By using the contact form, you consent to the data practices described in this 
        policy.</p>
      <h2>2. Information We Collect:</h2>
      <ul className="privacy-list">
        <li>
          <p><span className="bold"> Personal Information: </span>We collect information about you in various ways when you use our website, 
          mobile applications, and during the purchase process. This includes information you provide directly, information collected automatically,
           and information we obtain from third parties.</p>
        </li>
        <li>
          <p><span className="bold"> Information You Provide to Us May Include: </span>When using our services, you may provide us with the following 
          information:

              Your name, email address, postal address, phone number, and other contact details.
              Payment information, such as credit card numbers and billing address. Please note that this information is processed by our PCI 
              -compliant payment processing partners.
              Any additional information you choose to provide, such as reviews, preferences, or feedback.</p>
        </li>
      </ul>
      <h2>3. Use of Information:</h2>
      <ul className="privacy-list">
        The information we collect is used for the following purposes:
        <li>
          <p> Process and fulfill your orders, including sending you emails to confirm your order status and shipment.
              Communicate with you about products, services, offers, promotions, and events.
              Provide customer support and respond to your requests, comments, and inquiries.
              Enhance and improve our services, including troubleshooting, data analysis, testing, research, and service improvement.
              Comply with legal obligations, including PCI DSS, GLBA, and FTC regulations.
         </p>
        </li>
      </ul>
      <h2>4. Sharing of Information:</h2>
      <p>We do not sell or rent your personal information to third parties. We may share your information as follows:

           With third-party service providers who perform services on our behalf, such as payment processing, order fulfillment, and data analysis. 
          These service providers are bound by contractual obligations to keep personal information confidential and use it only for the purposes for 
          which we disclose it to them.
           To comply with legal obligations, including responding to a subpoena or court order, or in connection with a legal investigation.
           With your consent or at your direction.
      </p>
      <h2> 5. Children's Privacy:</h2>
      <p>Our services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children 
        under 13.</p>
      <h2>5. Data Security:</h2>
      <p>We take reasonable measures, including administrative, technical, and physical safeguards, designed to protect personal information from loss, 
        , misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
      <h2>6. Changes to this Privacy Policy:</h2>
      <p>We may update this Privacy Notice from time to time. The effective date at the top of this Privacy Notice indicates when it was last revised.
        We will notify you of any changes by posting the new Privacy Notice on our website and updating the effective date.</p>
      <h2>7. Contact Us:</h2>
      <p>If you have any questions about this Privacy Notice or our privacy practices, please contact us at employee.bookstore@gmail.com or by using the Contact Us form located at the bottom of the page.</p>
    </div>
  );
}

export default PrivacyPolicy;