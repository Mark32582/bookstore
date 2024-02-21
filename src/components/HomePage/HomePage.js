import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Cart from "../Cart/Cart";
import Carousel from "../Carousel/Carousel";
import Rows from "../CategoryRows/Rows";
import React, {useState} from 'react';

const HomePage = (props) => {
  const {
    verified,
    setVerified,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    displayCart,
    setDisplayCart,
    users,
    setUsers,
    search,
    setSearch,
    books,
    setBooks,
    bookCategory,
    setBookCategory,
  } = props;

const [showAbout] = useState(true);

const openingHours = {
  monday: '9:00 AM - 6:00 PM',
  tuesday: '9:00 AM - 6:00 PM',
  wednesday: '9:00 AM - 6:00 PM',
  thursday: '9:00 AM - 6:00 PM',
  friday: '9:00 AM - 6:00 PM',
  saturday: '10:00 AM - 4:00 PM',
  sunday: 'Closed',
};

  return (
    <div className="HomePage">
      <Navigation
        verified={verified}
        setVerified={setVerified}
        signOn={signOn}
        setSignOn={setSignOn}
        employee={employee}
        setEmployee={setEmployee}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        setUsers={setUsers}
        search={search}
        setSearch={setSearch}
        books={books}
        setBooks={setBooks}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
      />
      <LogonForm
        signOn={signOn}
        setSignOn={setSignOn}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
        users={users}
        setUsers={setUsers}
      />
      <Cart cart={displayCart} books={books} setBooks={setBooks} />
      {employee === true ? (
        <AdminDashboard users={users} books={books} setBooks={setBooks} />
      ) : (
        <div className="carousel-container">
          <Carousel
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
          />
        </div>
      )}
      <div className="body-content">
        <div></div>

        <div className="search-results" id="searchResults">
          <Rows bookCategory={bookCategory} books={books} setBooks={setBooks} />
        </div>
        {/* Display About section if showAbout is true */}
        {showAbout && (
          <div className="about">
          <h2>About Our Bookstore</h2>
          <p>
            We offer a diverse collection of books, catering to various genres including fiction, kids, horror, and more. Whether you prefer e-books, hard copies, or download, we've got you covered.
          </p>
          <p>
            Our bookstore is located in the heart of Texas, and we take pride in providing a wide range of reading options for our community.
          </p>
          <div className="hours">
          <h2>Opening Hours</h2>
          <ul>
            {Object.entries(openingHours).map(([day, hours]) => (
              <li key={day}>
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {hours}
              </li>
            ))}
          </ul>
        </div>
      </div>
      )}
    </div>
  </div>
  );
};
export default HomePage;
