import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import BookTile from "../BookTile/BookTile";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const Rows = (props) => {
  const { books, setBooks } = props;
  const [pageData, setPageData] = useState();
  const [showMore, setShowMore] = useState(false); // Add showMore state
  const [showMore1, setShowMore1] = useState(false); 
  const [showMore2, setShowMore2] = useState(false); 

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
      {pageData?.releases?.length >= 1 && (
        <>
          <div className="row--category" id="newRelease">
            <h2>New Releases</h2>   
          </div>
          <div className="static-books">
            {pageData?.releases?.slice(0, showMore ? undefined : 2).map((book, i) => {
              return <BookTile books={book} key={i} />;
            })}
          </div>
          <button onClick={handleShowMore}>
            {showMore ? "Show Less" : "Show More"}
          </button>
        </>
      )}
      {pageData?.best?.length >= 1 && (
        <>
          <div className="row--category" id="bestSeller">
            <h2>Best Sellers</h2> 
          </div>
          <div className="static-books">
          {pageData?.best?.slice(0, showMore1 ? undefined : 2).map((book, i) => {
              return <BookTile books={book} key={i} />;
            })}
          </div>
          <button onClick={handleShowMore1}>
            {showMore1 ? "Show Less" : "Show More"}
          </button>
        </>
      )}
      {pageData?.employee?.length >= 1 && (
        <>
          <div className="row--category" id="employee">
            <h2>Employee Recommendations</h2>
          </div>
          <div className="static-books">
          {pageData?.employee?.slice(0, showMore2 ? undefined : 2).map((book, i) => {
              return <BookTile books={book} key={i} />;
            })}
          </div>    
        </>
      )}
      <button onClick={handleShowMore2}>
            {showMore2 ? "Show Less" : "Show More"}
          </button>
    </>
  );
};
export default Rows;

