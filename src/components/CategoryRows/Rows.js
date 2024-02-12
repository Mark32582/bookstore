import axios from "axios";
import { googleBooks } from "../../config/googlebooks";
import { NavLink } from "react-router-dom";

const Rows = (props) => {
  const { books, setBooks } = props;

  return (
    <div>
      {books &&
        books.map((book, i) => {
          console.log(book);
          return (
            <div className="row">
              <div className="row--image">
                <img
                  src={book?.volumeInfo?.imageLinks?.thumbnail}
                  height="120px"
                  alt=""
                />
              </div>
              <div key={i} className="row--text">
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
                  <NavLink to={`/book/${book?.accessInfo?.id}`}>
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
    </div>
  );
};
export default Rows;
