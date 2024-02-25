import { Link } from "react-router-dom";

const BookTile = (props) => {
  const { books, cartItems, setCartItems, setRedirect } = props;
  const bookId = books?.googleId || books?.id;
  const url = books?.thumbnail || books?.volumeInfo?.imageLinks?.thumbnail;
  const title = books?.title || books?.volumeInfo?.title;
  const author = books?.author || books?.volumeInfo?.authors;
  const price = books?.retailPrice || books?.saleInfo?.retailPrice?.amount;

  const onAddToCart = () => {
    let count = 0;
    count = count++;
    setCartItems([...cartItems, { title: title, price: price, count: count }]);
  };

  const handleMoreButton = () => {
    setRedirect(false);
  };
  return (
    <div className="tile">
      <div className="tile--image">
        <img src={url} height="120px" alt="" />
      </div>
      <div className="tile--text">
        <span>
          <h3>{title}</h3>
        </span>
        <span>
          <i>{author}</i>
        </span>

        <Link to={`/book/${bookId}`}>
          <span onClick={handleMoreButton} className="row--text__info">
            More Info
          </span>
        </Link>

        <div className="row--text__actions">
          {books?.retailPrice ? (
            <>
              <span className="row--text__info">${price}</span>{" "}
              <button onClick={() => onAddToCart()}>Add to Cart</button>
            </>
          ) : (
            <span>Unavailable</span>
          )}
        </div>
      </div>
    </div>
  );
};
export default BookTile;
