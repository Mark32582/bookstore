import db from "../../provider/Dexie";
import { useLiveQuery } from "dexie-react-hooks";
import { useCallback, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Slider } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

const Carousel = ({ cartItems, setCartItems }) => {
  const [carouselBooks, setCarouselBooks] = useState();
  const newBooks = useLiveQuery(() => db.carousel?.toArray());
  const FetchBooks = useCallback(() => {
    setCarouselBooks(newBooks);
  }, [newBooks]);

  useEffect(() => {
    FetchBooks();
  }, [FetchBooks]);

  const onAddToCart = (title, price) => {
    let count = 0;
    count = count++;
    setCartItems([...cartItems, { title: title, price: price, count: count }]);
  };

  return (
    <Slider autoPlay infiniteLoop interval="10000" showThumbs={false}>
      {carouselBooks &&
        carouselBooks.map((book, i) => {
          return (
            <div className="carousel" key={`${i}-carousel`}>
              <div className="carousel--image" key={i}>
                <img
                  src={book?.thumbnail}
                  height="350px"
                  width="200px"
                  alt=""
                />
              </div>
              <div key={i} className="carousel--text">
                <span>
                  <h1>{book?.title}</h1>
                </span>
                <span>
                  <em>{book?.author}</em>
                </span>
                <div className="carousel--text__description">
                  <p>{book?.description}</p>
                </div>
                <div className="carousel--actions">
                  <div>
                    <button
                      onClick={() =>
                        onAddToCart(book?.title, book?.retailPrice)
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                  <div>${book?.retailPrice}</div>
                  <div>{book?.category}</div>
                  <div>Published: {book?.publisherDate}</div>
                  <div>
                    <NavLink to={`/book/${book?.googleId}`}>More Info</NavLink>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </Slider>
  );
};

export default Carousel;
