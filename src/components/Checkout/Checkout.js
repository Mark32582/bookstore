import { useNavigate } from "react-router-dom";
import React, {useState} from "react";

const Checkout = ({
  cartItems,
  setCartItems,
  paymentInfo,
  setPaymentInfo,
  verified,
  setPurchasedItems,
  setUserProfile,
  userProfile
}) => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const handleCheckout = () => {
    if (
      cartItems.length > 0 &&
      paymentInfo.cardNumber &&
      paymentInfo.expiryDate &&
      paymentInfo.cvv &&
      userProfile.fName &&
      userProfile.lName &&
      userProfile.address
    ) {
      console.log("Payment Information:", paymentInfo);
      console.log("Shipping Information:", userProfile)
      setPurchasedItems(cartItems);
      setUserProfile(userProfile);
      setTimeout(() => {
        setCartItems([]);
      }, 200);
      navigate("/verification");
    } else {
      console.log(
        "Invalid checkout request. Please Check your cart, payment information, and user profile."
      );
    }
  };

  const handleGuestCheckout = () => {
    setShowForm(true);
    
  };

  return (
    <div className="checkout">
      <div className="checkout-container">
      <h1>Checkout</h1>
      {userProfile?.fName && <h3>Welcome {userProfile?.fName}</h3>}
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
             {!showForm ? (
              <button onClick={handleGuestCheckout}>Check Out as Guest</button>
            ) : (
              <div className="guest-form">
              <form>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={userProfile?.name || ""}
                onChange={(e) =>
                  setUserProfile({ ...userProfile, name: e.target.value })
                }
                required
              />
                <label>Shipping Address:</label>
                <input
                  type="text"
                  name="shipping address"
                  value={userProfile?.address || ""}
                  onChange={(e) =>
                    setUserProfile({ ...userProfile, address: e.target.value })
                  }
                  required
                />
                
              </form>
            </div>
            )}
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
      <div className="proceed-to-checkout" >
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      </div>     
      </div>
        </div>
    </div>
  );
};

export default Checkout;