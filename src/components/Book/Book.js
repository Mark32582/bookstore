import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";
import Author from "../Author/Author";
import db from "../../provider/Dexie";
import { useLiveQuery } from "dexie-react-hooks";

const Book = (props) => {
  const { cartItems, setCartItems, setRedirect } = props;
  const { bookId } = useParams();
  const [currentBook, setCurrentBook] = useState();
  const [pageData, setPageData] = useState();
  const [price, setPrice] = useState();
  const carousel = useLiveQuery(() => db.carousel?.toArray());
  const newBooks = useLiveQuery(() => db.newReleases?.toArray());
  const bestBooks = useLiveQuery(() => db.bestSeller?.toArray());
  const employee = useLiveQuery(() => db.employeeRecommendations?.toArray());

  const fetchBooks = useCallback(() => {
    setPageData({ carousel, newBooks, bestBooks, employee });
  }, [bestBooks, employee, newBooks, carousel]);

  //     return obj.contains(currentBook?.volumeInfo?.title);
  //   });
  //   console.log(firebaseItem)
  //   const priceCheck = () => {
  //     console.log(pageData?.carousel?.title, currentBook?.volumeInfo?.title);
  //     if (pageData?.carousel?.title === currentBook?.volumeInfo?.title) {
  //       setPrice(pageData?.carousel?.title);
  //     } else if (currentBook?.volumeInfo?.title === pageData?.newBooks?.title) {
  //       setPrice(pageData?.carousel?.title);
  //     } else if (currentBook?.volumeInfo?.title === pageData?.bestBooks?.title) {
  //       setPrice(pageData?.carousel?.title);
  //     } else if (currentBook?.volumeInfo?.title === pageData?.employee?.title) {
  //       setPrice(pageData?.carousel?.title);
  //     } else {
  //       setPrice(currentBook?.saleInfo?.price);
  //     }
  //   };

  //   useEffect(() => {
  //     priceCheck();
  //   }, [fetchBooks]);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  useEffect(() => {
    currentBook?.id &&
      pageData?.carousel?.map((obj) => {
        if (obj?.googleId === currentBook?.id) {
          setPrice(obj?.retailPrice);
          return true;
        }
        return null;
      });

    pageData?.bestBooks?.map((obj) => {
      
      if (obj?.googleId === currentBook?.id) {
        setPrice(obj?.retailPrice);
        return true;
      }
      return null;
    });

    pageData?.newBooks?.map((obj) => {
      if (obj?.googleId === currentBook?.id) {
        setPrice(obj?.retailPrice);
        return true;
      }
      return null;
    });

    pageData?.employee?.map((obj) => {
      if (obj?.googleId === currentBook?.id) {
        setPrice(obj?.retailPrice);
        return true;
      }
      return null;
    });
  }, [currentBook?.id, pageData]);

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${bookId}`)
      .then((res) => {
        setCurrentBook(res?.data);
      })
      .catch((err) => console.log(err));
  }, [bookId]);

  const removeScript = (description) => {
    if (description === null || description === "") {
      return "test";
    } else {
      return description?.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
    }
  };

  const onAddToCart = (title, price) => {
    let count = 0;
    count = count++;
    setCartItems([...cartItems, { title: title, price: price, count: count }]);
  };

  return (
    <>
      <div className="book-background">
        <div className="book-container">
          <div className="book--image">
            <img
              src={currentBook?.volumeInfo?.imageLinks?.thumbnail}
              width="200px"
              alt=""
            />
          </div>
          <div className="book--text">
            <span>
              <h1>{currentBook?.volumeInfo?.title}</h1>
            </span>
            <span>
              <i>{currentBook?.volumeInfo?.authors}</i>
            </span>
            <div className="book--text__description">
              <p>{removeScript(currentBook?.volumeInfo?.description)}</p>
            </div>
            <div className="carousel--actions">
              {price && (
                <>
                  <div>
                    <button
                      onClick={() =>
                        onAddToCart(currentBook?.volumeInfo?.title, price)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div>${price}</div>
                </>
              )}
              <div>{currentBook?.volumeInfo?.categories?.[0]}</div>
              <div>Published: {currentBook?.volumeInfo?.publishedDate}</div>
            </div>
          </div>
        </div>
        <Author
          author={currentBook?.volumeInfo?.authors}
          setRedirect={setRedirect}
          price={price}
        />
      </div>
    </>
  );
};
export default Book;
