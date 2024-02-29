import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const HandleCheckout = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    // Your cart items
  ]);

  const [userInfo, setUserInfo] = useState({
    // Your user information
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handlePaymentInfoChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo((prevPaymentInfo) => ({
      ...prevPaymentInfo,
      [name]: value,
    }));
  };

  const handleCheckout = () => {
    if (cartItems.length > 0 && paymentInfo.cardNumber && paymentInfo.expiryDate && paymentInfo.cvv) {
      console.log('Payment Information:', paymentInfo);
      // Perform any necessary payment processing or order placement here
      navigate('/verification', { state: { cartItems, userInfo, paymentInfo } }); // Navigate to success page after successful checkout
    } else {
      console.log('Invalid checkout request. Please check your cart and payment information.');
    }
  };

  return (
    <div>
      <h1>Handle Checkout</h1>
      <Checkout
        cartItems={cartItems}
        userInfo={userInfo}
        paymentInfo={paymentInfo}
        handlePaymentInfoChange={handlePaymentInfoChange}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

const Checkout = ({ cartItems, userInfo, paymentInfo, handlePaymentInfoChange, handleCheckout }) => {
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
        <Link
          to={{
            pathname: '/verification',
            state: { cartItems, userInfo, paymentInfo },
          }}
        >
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default HandleCheckout;