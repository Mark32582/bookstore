import React, { useState } from "react";

const Checkout = ({ cartItems, setCartItems }) => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };
  const handleCheckout = () => {
    if (
      cartItems.length > 0 &&
      paymentInfo.cardNumber &&
      paymentInfo.expiryDate &&
      paymentInfo.cvv
    ) {
      console.log("Payment Information:", paymentInfo);
      setCartItems();
    } else {
      console.log(
        "Invalid checkout request. Please Check your cart and payment information."
      );
    }
  };
  return (
    <div className="checkout">
      <div className="checkout-container">
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
      <div className="payment-section">
        <label>Card Number:</label>
        <input
          type="text"
          name="cardNumber"
          value={paymentInfo.cardNumber}
          onChange={handlePaymentInfoChange}
        />
        <label>Expiry Date:</label>
        <input
          type="text"
          name="expiryDate"
          value={paymentInfo.expiryDate}
          onChange={handlePaymentInfoChange}
        />
        <label>CVV:</label>
        <input
          type="text"
          name="cvv"
          value={paymentInfo.cvv}
          onChange={handlePaymentInfoChange}
        />
      <div className="proceed-to-checkout" >
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>     
      </div>
        </div>
    </div>
  );
};
export default Checkout;
