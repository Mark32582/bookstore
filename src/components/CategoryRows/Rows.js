import { useState, useEffect, useCallback } from "react";
import BookTile from "../BookTile/BookTile";
import db from "../../provider/Dexie";
import { useLiveQuery } from "dexie-react-hooks";

const Rows = (props) => {
  const { cartItems, setCartItems, setRedirect } = props;
  const [pageData, setPageData] = useState();
  const [showMore, setShowMore] = useState(false); // Add showMore state
  const [showMore1, setShowMore1] = useState(false);
  const [showMore2, setShowMore2] = useState(false);
  const newBooks = useLiveQuery(() => db.newReleases?.toArray());
  const bestBooks = useLiveQuery(() => db.bestSeller?.toArray());
  const employee = useLiveQuery(() => db.employeeRecommendations?.toArray());

  const fetchBooks = useCallback(() => {
    setPageData({ newBooks, bestBooks, employee });
  }, [bestBooks, employee, newBooks]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  const handleShowMore1 = () => {
    setShowMore1(!showMore1);
  };
  const handleShowMore2 = () => {
    setShowMore2(!showMore2);
  };

  return (
    <>
      {pageData?.newBooks?.length >= 1 && (
        <>
          <div className="row--category" id="newRelease">
            <h2>New Releases</h2>{" "}
            <button onClick={handleShowMore}>
              {showMore ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="static-books">
            {pageData?.newBooks
              ?.slice(0, showMore ? undefined : 3)
              .map((book) => {
                return (
                  <BookTile
                    books={book}
                    key={`newReleases-${book?.id}`}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setRedirect={setRedirect}
                  />
                );
              })}
          </div>
        </>
      )}
      {pageData?.bestBooks?.length >= 1 && (
        <>
          <div className="row--category" id="bestSeller">
            <h2>Best Sellers</h2>{" "}
            <button onClick={handleShowMore1}>
              {showMore1 ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="static-books">
            {pageData?.bestBooks
              ?.slice(0, showMore1 ? undefined : 3)
              .map((book, i) => {
                return (
                  <BookTile
                    books={book}
                    key={i + "bestSellers"}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setRedirect={setRedirect}
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
            <button onClick={handleShowMore2}>
              {showMore2 ? "Show Less" : "Show More"}
            </button>
          </div>
          <div className="static-books">
            {pageData?.employee
              ?.slice(0, showMore2 ? undefined : 3)
              .map((book, i) => {
                return (
                  <BookTile
                    books={book}
                    key={i + "employee"}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                    setRedirect={setRedirect}
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
