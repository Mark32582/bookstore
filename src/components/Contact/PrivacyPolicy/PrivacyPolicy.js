import ContactNavigation from "../ContactNavigation/ContactNavigation";

const PrivacyPolicy = () => {
  return (
    <div className="contact-container">
      <ContactNavigation />
      <h1>Privacy Policy</h1>
      <p>Last Updated: 3/06/2024</p>
      <h2>1. Introduction:</h2>
      <p>
        Welcome to The Bookstore. The Bookstore is committed to protecting the
        privacy and security of your personal information. This Privacy Notice
        explains how we collect, use, share, and protect information about our
        customers and users. It also describes your choices regarding use,
        access, and correction of your personal information. By using the
        contact form, you consent to the data practices described in this
        policy.
      </p>
      <h2>2. Information We Collect:</h2>
      <p>
        We collect information about you in various ways when you use our
        website, mobile applications, and during the purchase process. This
        includes information you provide directly, information collected
        automatically, and information we obtain from third parties.
      </p>
      <ul className="privacy-list">
        <li>
          <p>
            <span className="bold">
              {" "}
              Information You Provide to Us May Include:{" "}
            </span>
            <br></br>• Your name, email address, postal address, phone number,
            and other contact information.
            <br></br>• Payment information, such as your credit card numbers and
            billing address, which is processed by our PCI DSS-compliant payment
            processing partners.
            <br></br>• Any other information you choose to provide, such as
            reviews, preferences, or feedback.
          </p>
        </li>
        <li>
          <p>
            <span className="bold">
              {" "}
              Information Collected Automatically May Include:{" "}
            </span>
            <br></br>• Your browser type, operating system, IP address, and
            device information.
            <br></br>• Information collected through cookies and similar
            technologies to remember your preferences and facilitate effective
            site administration.
          </p>
        </li>
      </ul>
      <h2>3. Use of Information:</h2>
      <ul className="privacy-list">
        <li>
          <p>
            <span className="bold">
              We may use the information we collect to:
            </span>
            <br></br>• Process and fulfill your orders, including sending you
            emails to confirm your order status and shipment.
            <br></br>• Communicate with you about products, services, offers,
            promotions, and events.
            <br></br>• Provide customer support and respond to your requests,
            comments, and inquiries.
            <br></br>• Enhance and improve our services, including
            troubleshooting, data analysis, testing, research, and service
            improvement.
            <br></br>• Comply with legal obligations, including PCI DSS, GLBA,
            and FTC regulations.
          </p>
        </li>
      </ul>
      <h2>4. Sharing of Information:</h2>
      <p>We do not sell or rent your personal information to third parties.</p>
      <ul className="privacy-list">
        <li>
          <p>
            <span className="bold">
              {" "}
              We may share your information as follows:{" "}
            </span>
            <br></br>• With third-party service providers who perform services
            on our behalf, such as payment processing, order fulfillment, and
            data analysis. These service providers are bound by contractual
            obligations to keep personal information confidential and use it
            only for the purposes for which we disclose it to them.
            <br></br>• To comply with legal obligations, including responding to
            a subpoena or court order, or in connection with a legal
            investigation.
            <br></br>• With your consent or at your direction.
          </p>
        </li>
      </ul>
      <h2>5. Your Choices and Rights:</h2>
      <ul className="privacy-list">
        <li>
          <p>
            <span className="bold"> You have rights to: </span>
            <br></br>• Opt-out of receiving marketing communications from us by
            following the unsubscribe link or instructions provided in any email
            we send.
            <br></br>• Access, correct, update, or request deletion of your
            personal information.
            <br></br>• Object to the processing of your personal information,
            ask us to restrict processing of your personal information, or
            request portability of your personal information.
          </p>
        </li>
      </ul>
      <h2>6. Data Security:</h2>
      <p>
        We take reasonable measures, including administrative, technical, and
        physical safeguards, designed to protect personal information from loss,
        theft, misuse, and unauthorized access, disclosure, alteration, and
        destruction.
      </p>
      <h2> 7. Children's Privacy:</h2>
      <p>
        Our services are not directed to individuals under the age of 13, and we
        do not knowingly collect personal information from children under 13.
      </p>
      <h2>8. Changes to this Privacy Policy:</h2>
      <p>
        We may update this Privacy Notice from time to time. The effective date
        at the top of this Privacy Notice indicates when it was last revised. We
        will notify you of any changes by posting the new Privacy Notice on our
        website and updating the effective date.
      </p>
      <h2>9. Contact Us:</h2>
      <p>
        If you have any questions about this Privacy Notice or our privacy
        practices, please contact us at{" "}
        <a href="mailto:employee.bookstore@gmail.com">
          employee.bookstore@gmail.com
        </a>{" "}
        or by using the Contact Us form located at the bottom of the page.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
