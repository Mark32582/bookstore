import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BookTile from "../BookTile/BookTile";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const Rows = (props) => {
  const { books, setBooks, cartItems, setCartItems } = props;
  const [pageData, setPageData] = useState();

  const fetchBooks = async () => {
    let releases;
    let best;
    let employee;
    await getDocs(collection(db, "newReleases")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      releases = newData;
    });
    await getDocs(collection(db, "bestSeller")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      best = newData;
    });
    await getDocs(collection(db, "employeeRecommendations")).then(
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        employee = newData;
      }
    );
    setPageData({ releases, best, employee });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      {pageData?.releases?.length >= 1 && (
        <>
          <div className="row--category" id="newRelease">
            <h2>New Releases</h2>
          </div>
          <div className="static-books">
            {pageData?.releases?.map((book, i) => {
              return (
                <BookTile
                  books={book}
                  key={i + "newRelease"}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })}
          </div>
        </>
      )}
      {pageData?.best?.length >= 1 && (
        <>
          <div className="row--category" id="bestSeller">
            <h2>Best Sellers</h2>
          </div>
          <div className="static-books">
            {pageData?.best?.map((book, i) => {
              return (
                <BookTile
                  books={book}
                  key={i + "bestSellers"}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })}
          </div>
        </>
      )}
      {pageData?.employee?.length >= 1 && (
        <>
          <div className="row--category" id="employee">
            <h2>Employee Recommendations</h2>
          </div>
          <div className="static-books">
            {pageData?.employee?.map((book, i) => {
              return (
                <BookTile
                  books={book}
                  key={i + "employee"}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Rows;
