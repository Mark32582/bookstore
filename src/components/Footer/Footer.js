import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const contactOnClick = () => {
    navigate("/contact");
  };

  const openingHours = {
    monday: "9:00 AM - 6:00 PM",
    tuesday: "9:00 AM - 6:00 PM",
    wednesday: "9:00 AM - 6:00 PM",
    thursday: "9:00 AM - 6:00 PM",
    friday: "9:00 AM - 6:00 PM",
    saturday: "10:00 AM - 4:00 PM",
    sunday: "Closed",
  };
  return (
    <div className="about-container">
      <div className="about">
        <h2>About Our Bookstore</h2>
        <p>
          We offer a diverse collection of books, catering to various genres
          including fiction, kids, horror, and more. Whether you prefer e-books,
          hard copies, or download, we've got you covered.
        </p>
        <p>
          Our bookstore is located in the heart of Texas, and we take pride in
          providing a wide range of reading options for our community.
        </p>
        <div className="help-section">
          <h2>Need help?</h2>
          <button className="contact-btn" onClick={() => contactOnClick()}>
            Contact us
          </button>
        </div>
      </div>
      <div className="hours">
        <h2>Opening Hours</h2>
        <ul>
          {Object.entries(openingHours).map(([day, hours]) => (
            <li key={`${day}-hours`}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {hours}
            </li>
          ))}
        </ul>
        <div className="social-media">
          <h2>Follow Us</h2>
          <div className="icons">
            <a
              href="https://www.facebook.com/profile.php?id=61556703307041"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/facebook.png"} alt="FB"/>
            </a>
            <a
              href="https://twitter.com/group3bookstore"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/twitter.png"} alt="TW"/>
            </a>
            <a
              href="https://www.linkedin.com/company/group3bookstore/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={process.env.PUBLIC_URL + "/linkedin.png"} alt="IN"/>
            </a>
            {/* Add more social media links as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
