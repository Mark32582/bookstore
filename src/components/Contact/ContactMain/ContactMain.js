import { useNavigate } from "react-router-dom";
import ContactNavigation from "../ContactNavigation/ContactNavigation";

const ContactMain = () => {
  const navigate = useNavigate();

  const emailOnClick = () => {
    navigate('/contact/email-form');
  }

  return (
    <div className="contact-container">
      <ContactNavigation/>
      <h1>Contact Us</h1>
      <h2>We&apos;re here to help!</h2>
      <p>For assistance with placing an order, updating payment, or if you need your Membership Number, please call us at 1-800-NOT-REAL (1-800-000-0000).</p>
      <p>For all other inquiries, please use any of the following channels of communication:</p>
      <ul>
        <li>Phone: available every day from 9AM-9PM Eastern Time at 1-800-NOT-REAL (1-800-000-0000).</li>
        <li>Email: Email us and we'll get back to you soon</li>
      </ul>
      <p>By using phone or email, you agree to the terms of our <a target="_self" href="/contact/privacy">Privacy Policy</a>.</p>
      <button className="contact-btn" onClick={() => emailOnClick()}>Send an Email</button>
    </div>
  );
}

export default ContactMain;