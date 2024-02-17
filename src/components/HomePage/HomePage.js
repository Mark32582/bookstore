import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Cart from "../Cart/Cart";
import Carousel from "../Carousel/Carousel";
import Rows from "../CategoryRows/Rows";

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
        <div className="search-results" id="searchResults">
          <Rows bookCategory={bookCategory} books={books} setBooks={setBooks} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
