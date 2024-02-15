import { NavLink } from "react-router-dom";

const BookTile = (props) => {
  const { books } = props;
  const bookId = books?.googleId;
  return (
    <>
      <div className="tile">
        <div className="tile--image">
          <img src={books?.thumbnail} height="120px" alt="" />
        </div>
        <div className="tile--text">
          <span>
            <h3>{books?.title}</h3>
          </span>
          <span>
            <i>{books?.author}</i>
          </span>
          <NavLink to={`/book/${bookId}`}>
            <span className="row--text__info">More Info</span>
          </NavLink>
          <div className="row--text__actions">
            {books?.retailPrice ? (
              <>
                <span className="row--text__info">${books?.retailPrice}</span>{" "}
                <button>Add to Cart</button>
              </>
            ) : (
              <span>Unavailable</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BookTile;
