import { NavLink } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { googleBooks } from "../../config/googlebooks";

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
    setUsers,
    search,
    setSearch,
    books,
    setBooks,
  } = props;

  const api = googleBooks?.key;
  console.log(api);
  const signOff = () => {
    setVerified(!verified);
    setTimeout(() => {
      setEmployee(false);
    }, 250);
    setTimeout(() => {
      setUsers(undefined);
    }, 500);
  };

  const handleSearch = () => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${api}`)
      .then((res) => setBooks(res?.data?.items))
      .catch((err) => console.log(err));
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
          <div className="navigation--buttons">
            <button>Fiction</button>
            <button>Science-Fiction</button>
            <button>Non-Fiction</button>
            <button>Mystery</button>
            <button>Romance</button>
            <button>Poetry</button>
            <button>Horror</button>
            <button>Thriller</button>
            <button>Children's Literature</button>
          </div>
        </div>
        <div className="navigation--right">
          <input
            type="text"
            name="search"
            placeholder="search for books or authors"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>{" "}
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
