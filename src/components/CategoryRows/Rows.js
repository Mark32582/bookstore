import axios from "axios";
import { googleBooks } from "../../config/googlebooks";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import BookTile from "../BookTile/BookTile";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const Rows = (props) => {
  const { books, setBooks } = props;
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
              return <BookTile books={book} key={i} />;
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
              return <BookTile books={book} key={i} />;
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
              return <BookTile books={book} key={i} />;
            })}
          </div>
        </>
      )}
      {books &&
        books.map((book, i) => {
        const bookId = book?.id;
          return (
            <div className="row" id="search" key={i}>
              <div className="row--image">
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  height="120px"
                  alt=""
                />
              </div>
              <div className="row--text">
                <span>
                  <b>{book?.volumeInfo?.title}</b>
                </span>
                <span>
                  <i>{book?.volumeInfo?.authors}</i>
                </span>
                <div className="row--text__description">
                  <p>{book?.volumeInfo?.description}</p>
                </div>
                <div className="row--text__actions">
                  <NavLink to={`/book/${bookId}`}>
                    <span className="row--text__info">More Info</span>
                  </NavLink>
                  {book?.saleInfo?.listPrice?.amount ? (
                    <>
                      <span className="row--text__info">
                        ${book?.saleInfo?.listPrice?.amount}
                      </span>{" "}
                      <button>Add to Cart</button>
                    </>
                  ) : (
                    <span>Currently Unavailable</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default Rows;
