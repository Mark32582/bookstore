import { NavLink } from "react-router-dom";
import axios from 'axios';
import classNames from "classnames";

// Define the Google API module
const googleAPI = {
  retrieveBooks: (category) => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${category}`;

    return axios.get(url)
      .then((response) => {
        // Process the response data as needed
        return response.data.items; // Assuming the response contains an array of books
      })
      .catch((error) => {
        throw new Error(`Error retrieving books: ${error.message}`);
      });
  },
};

const Navigation = (props) => {
  const {
    verified,
    setVerified,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    displayCart,
    setDisplayCart,
    bookCategory,
    setBookCategory,
  } = props;

  const signOff = () => {
    setVerified(!verified);
  };

  const handleNavigation = (category) => {
    // Perform Google API action based on the selected category
    // Example: Making an API call to retrieve books of the selected category
    googleAPI.retrieveBooks(category)
      .then((books) => {
        console.log(`Retrieved books of category ${category}:`, books);
        // Do something with the retrieved books
      })
      .catch((error) => {
        console.error(`Error retrieving books of category ${category}:`, error);
        // Handle the error accordingly
      });
  };

  return (
    <div>
      <div className="navigation">
        <span className="navigation--title">The Bookstore</span>

        <span
          className={classNames(
            { "display-register": !verified },
            { "hide-register": verified }
          )}
        >
          Register <NavLink to="/signUp"> here!</NavLink>
        </span>
        <span></span>

        <div className="navigation--buttons">
          {!verified ? (
            <button className="sign-on" onClick={() => setSignOn(!signOn)}>
              Sign On
            </button>
          ) : (
            <button className="sign-on" onClick={() => signOff()}>
              Sign Off
            </button>
          )}
        </div>
      </div>
      <div className="navigation--secondary-nav">
        <div>
        <button value="non-fiction" onClick={() => handleNavigation("non-fiction")}>Non-Fiction</button> 
        <button value="fiction" onClick={() => handleNavigation("fiction")}>Fiction</button> 
        <button value="Suspense" onClick={() => handleNavigation("Suspense")}>Suspense</button> 
        <button value="science fiction" onClick={() => handleNavigation("science fiction")}>Science Fiction</button> 
        <button value="romance" onClick={() => handleNavigation("romance")}>Romance</button> 
        <button value="Poetry" onClick={() => handleNavigation("non-Poetry")}>Poetry</button> 
        <button value="young adult" onClick={() => handleNavigation("young adult")}>Young Adult</button> 
        <button value="childrens" onClick={() => handleNavigation("childrens")}>Childrens</button> 
        </div>
        <div className="navigation--right">
          <label htmlFor="email-address">
            <form className="navigation--search">
              <input
                type="text"
                name="search"
                placeholder="search for books or authors"
              />
              <button type="submit">Search</button>{" "}
            </form>
          </label>
          <NavLink>
            <img
              className="cart-icon"
              src={process.env.PUBLIC_URL + "empty-cart.png"}
              alt="cart"
              onClick={() => setDisplayCart(!displayCart)}
              width="24px"
              height="24px"
            />
          </NavLink>
        </div>
      </div>
      {employee ? (
        <div className="navigation--employee-nav">
          Employee Nav goes here when not hidden
        </div>
      ) : null}
    </div>
  );
};
export default Navigation;