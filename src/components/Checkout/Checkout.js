import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Checkout = ({
  cartItems,
  setCartItems,
  paymentInfo,
  setPaymentInfo,
  useProfile,
  setUserProfile,
  verified,
  setPurchasedItems,
}) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (
      cartItems.length > 0 &&
      paymentInfo.cardNumber &&
      paymentInfo.expiryDate &&
      paymentInfo.cvv
    ) {
      console.log("Payment Information:", paymentInfo);
      setPurchasedItems(cartItems);
      setTimeout(() => {
        setCartItems([]);
      }, 200);
      navigate("/verification");
    } else {
      console.log(
        "Invalid checkout request. Please Check your cart and payment information."
      );
    }
  };
  return (
    <div className="checkout">
      <h1>Checkout</h1>
      {cartItems?.length > 0 ? (
        <div>
          {cartItems?.map((item, index) => (
            <div key={`${index}--cartItem`}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>Price: ${item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
      <div>
        <h2>Checkout as Guest or Sign in!</h2>
        {verified ? (
          <div></div>
        ) : (
          <div>
            <form></form>
          </div>
        )}
      </div>
      <div className="payment-section">
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })
          }
          required
        />
        <label>Expiry Date:</label>
        <input
          type="date"
          name="expiryDate"
          value={paymentInfo.expiryDate}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, expiryDate: e.target.value })
          }
          required
        />
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={(e) =>
            setPaymentInfo({ ...paymentInfo, cvv: e.target.value })
          }
          required
        />
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Checkout;
