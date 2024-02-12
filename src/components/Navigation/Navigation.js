import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { googleBooks } from "../../config/googlebooks";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
    bookCategory,
    setBookCategory,
  } = props;

  const api = googleBooks?.key;
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
      .then((res) => {
        console.log(res);
        setBooks(res?.data?.items);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (bookCategory) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${bookCategory}&maxResults=20&key=${api}`
        )
        .then((res) => {
          console.log(res);
          setBooks(res?.data?.items);
        })
        .catch((err) => console.log(err));
    }
  }, [api, bookCategory, setBooks]);
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
            <NavLink to="/">
              <img
                style={{ marginRight: "8px" }}
                src={process.env.PUBLIC_URL + "home.png"}
                alt="home button"
              />
            </NavLink>
            <button id="fiction" onClick={() => setBookCategory("fiction")}>
              Fiction
            </button>
            <button>Non-Fiction</button>
            <button>Mystery</button>
            <button>Romance</button>
            <button>Poetry</button>
            <button>Horror</button>
            <button>Suspense</button>
            <button>Science-Fiction</button>
            <button>Young Adult</button>
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
