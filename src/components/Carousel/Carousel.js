/* eslint-disable no-lone-blocks */
import { db } from "../../config/fireBaseConfig";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as Slider } from "react-responsive-carousel";

const Carousel = () => {
  const [carouselBooks, setCarouselBooks] = useState();

  const fetchBooks = async () => {
    await getDocs(collection(db, "carousel")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setCarouselBooks(newData);
    });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Slider autoPlay infiniteLoop interval="10000">
      {carouselBooks &&
        carouselBooks.map((book, i) => {
          return (
            <div className="carousel">
              <div className="carousel--image" key={i}>
                <img src={book?.thumbnail} height="350px" width="200px" alt="" />
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
              </div>
            </div>
          );
        })}
    </Slider>
  );
};

export default Carousel;
