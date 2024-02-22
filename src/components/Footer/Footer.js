const Footer = () => {
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
      </div>
      <div className="hours">
        <h2>Opening Hours</h2>
        <ul>
          {Object.entries(openingHours).map(([day, hours]) => (
            <li key={day}>
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {hours}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Footer;
