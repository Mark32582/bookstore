import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import classNames from "classnames";
import { googleBooks } from "../../config/googlebooks";
import { useEffect, useState, useRef } from "react";

const Navigation = (props) => {
  const {
    verified,
    setVerified,
    signOn,
    setSignOn,
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
    cartItems,
    redirect,
    setRedirect,
    employee,
  } = props;

  const navRef = useRef(null);
  const [navState, setNavState] = useState("default");
  useEffect(() => {
    const updateNavState = () => {
      const width = navRef.current.clientWidth;
      if (width < 768) {
        setNavState("mobile");
      } else {
        setNavState("default");
      }
    };

    window.addEventListener("resize", updateNavState);
    // Set the initial state
    updateNavState();

    return () => window.removeEventListener("resize", updateNavState);
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const api = googleBooks?.key;
  const navigate = useNavigate();
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
        setBooks(res?.data?.items);
        setBookCategory(undefined);
        setRedirect(true);
      })
      .catch((err) => console.log(err));
  };

  const handleCategory = (category) => {
    setBookCategory(category);
    setTimeout(() => setRedirect(true), 200);
  };

  useEffect(() => {
    if (bookCategory) {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=subject:${bookCategory}&maxResults=20&key=${api}`
        )
        .then((res) => {
          setBooks(res?.data?.items);
        })
        .catch((err) => console.log(err));
    }
  }, [api, bookCategory, setBooks]);

  useEffect(() => {
    if (redirect) {
      navigate("/browse");
    }
  }, [redirect, books, bookCategory, navigate]);

  const handleMoreButton = () => {
    setRedirect(false);
  };

  return (
    <div ref={navRef}>
      <div>
        <>
          <span className="navigation--hamburger">The Bookstore</span>
          <div className="mobile-navigation-top">
            <div className="navigation--hamburger" onClick={toggleMenu}>
              &#9776;
            </div>
            <NavLink>
              {cartItems?.length > 0 ? (
                <img
                  className="cart-icon"
                  src={process.env.PUBLIC_URL + "/full-cart.png"}
                  alt="cart"
                  onClick={() => setDisplayCart(!displayCart)}
                  width="24px"
                  height="24px"
                />
              ) : (
                <img
                  className="cart-icon"
                  src={process.env.PUBLIC_URL + "/empty-cart.png"}
                  alt="cart"
                  onClick={() => setDisplayCart(!displayCart)}
                  width="50px"
                  height="50px"
                />
              )}
            </NavLink>
          </div>
          <div className="mobile-search">
          <input
            type="text"
            placeholder="Search title/author"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <button type="submit" onClick={handleSearch}>
            Search
          </button>
          </div>
          {navState === "mobile" ? (
            <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
              <NavLink to="/">
                <button onClick={() => setRedirect(false)}>Home</button>
              </NavLink>
              <NavLink to="/signUp">
                <button onClick={() => setRedirect(false)}>Register</button>
              </NavLink>
              {!verified ? (
                <button onClick={() => setSignOn(!signOn)}>Sign On</button>
              ) : (
                <button onClick={signOff}>Sign Off</button>
              )}
              <button onClick={() => handleCategory("Fiction")}>Fiction</button>
              <button onClick={() => handleCategory("nonFiction")}>
                Non-Fiction
              </button>
              <button onClick={() => handleCategory("Mystery")}>Mystery</button>
              <button onClick={() => handleCategory("Romance")}>Romance</button>
              <button onClick={() => handleCategory("Poetry")}>Poetry</button>
              <button onClick={() => handleCategory("Horror")}>Horror</button>
              <button onClick={() => handleCategory("Suspense")}>
                Suspense
              </button>
              <button onClick={() => handleCategory("sciFi")}>
                Science-Fiction
              </button>
              <button onClick={() => handleCategory("Youth")}>
                Young Adult
              </button>
              <button onClick={() => handleCategory("juvenile fiction")}>
                Children's
              </button>
              <button onClick={toggleMenu}>Close Menu</button>
            </div>
          ) : (
            <>
              <div className="navigation">
                <span className="navigation--title">The Bookstore</span>
                <span
                  className={classNames(
                    { "display-register": !verified },
                    { "hide-register": verified }
                  )}
                >
                  Register{" "}
                  <NavLink to="/signUp">
                    <span onClick={handleMoreButton}>here!</span>{" "}
                  </NavLink>
                </span>
                <span></span>
                <div className="navigation--buttons">
                  {!verified ? (
                    <button
                      className="sign-on"
                      onClick={() => setSignOn(!signOn)}
                    >
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
                        src={process.env.PUBLIC_URL + "/home.png"}
                        alt="home button"
                        onClick={() => setRedirect(false)}
                      />
                    </NavLink>

                    <button
                      id="fiction"
                      onClick={() => handleCategory("Fiction")}
                    >
                      Fiction
                    </button>
                    <button
                      id="nonFiction"
                      onClick={() => handleCategory("nonFiction")}
                    >
                      Non-Fiction
                    </button>
                    <button
                      id="mystery"
                      onClick={() => handleCategory("Mystery")}
                    >
                      Mystery
                    </button>
                    <button
                      id="romance"
                      onClick={() => handleCategory("Romance")}
                    >
                      Romance
                    </button>
                    <button
                      id="poetry"
                      onClick={() => handleCategory("Poetry")}
                    >
                      Poetry
                    </button>
                    <button
                      id="horror"
                      onClick={() => handleCategory("Horror")}
                    >
                      Horror
                    </button>
                    <button
                      id="suspense"
                      onClick={() => handleCategory("Suspense")}
                    >
                      Suspense
                    </button>
                    <button
                      id="scienceFiction"
                      onClick={() => handleCategory("sciFi")}
                    >
                      Science-Fiction
                    </button>
                    <button
                      id="youngAdult"
                      onClick={() => handleCategory("Youth")}
                    >
                      Young Adult
                    </button>
                    <button
                      id="childrens"
                      onClick={() => handleCategory("juvenile fiction")}
                    >
                      Children's
                    </button>
                  </div>
                </div>
                <div className="navigation--right">
                  <input
                    id="search"
                    type="text"
                    name="search"
                    placeholder="search for books or authors"
                    onChange={(e) => setSearch(e.target.value)}
                    autoComplete="off"
                  />
                  <button type="submit" onClick={handleSearch}>
                    Search
                  </button>
                  <NavLink>
                    {cartItems?.length > 0 ? (
                      <img
                        className="cart-icon"
                        src={process.env.PUBLIC_URL + "/full-cart.png"}
                        alt="cart"
                        onClick={() => setDisplayCart(!displayCart)}
                        width="24px"
                        height="24px"
                      />
                    ) : (
                      <img
                        className="cart-icon"
                        src={process.env.PUBLIC_URL + "/empty-cart.png"}
                        alt="cart"
                        onClick={() => setDisplayCart(!displayCart)}
                        width="24px"
                        height="24px"
                      />
                    )}
                  </NavLink>
                  <NavLink to="/user">
                    {verified && !employee ? (
                      <img
                        className="cart-icon"
                        src={process.env.PUBLIC_URL + "/user.png"}
                        alt="cart"
                        width="24px"
                        height="24px"
                      />
                    ) : null}
                  </NavLink>
                </div>
              </div>
            </>
          )}
        </>
      </div>
    </div>
  );
};

export default Navigation;
