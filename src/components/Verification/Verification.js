import React, {useState} from "react";

const Verification = ({ purchasedItems, paymentInfo, userProfile }) => {
  const [isUserSignedIn, setIsUserSignedIn] = useState(!!userProfile);



  const handleConfirmOrder = () => {
    const orderDetails = {
      cartItems: purchasedItems.map((item) => item.title),
      totalCost: calculateTotalCost(purchasedItems),
      paymentInfo: paymentInfo || {},
      shippingInfo: isUserSignedIn ? userProfile : null,
    };
  };

  console.log(purchasedItems);
  console.log(userProfile)


  const calculateTotalCost = (cartItems) => {
    let subtotal = 0;
  
    cartItems.forEach((item) => {
      subtotal += item.price;
    });
  
    const taxPercent = 0.06;
    const taxAmount = subtotal * taxPercent;
    const deliveryFee = 4.99;
  
    const total = subtotal + taxAmount + deliveryFee;
    return total.toFixed(2);
  };

  return (
    <div className="verification">
      <h1>Order Confirmation</h1>
      <h2>Items Purchased:</h2>
      {purchasedItems?.length > 0 ? (
        <ul>
          {purchasedItems.map((item, index) => (
            <li key={`${index}--verificationItem`}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h2>Payment Information:</h2>
      {paymentInfo && paymentInfo.cardNumber ? (
        <>
          <p>Order Number: BST-{Math.floor(Math.random() * 10 * 10000)}</p>
          <p>Total cost of: {calculateTotalCost(purchasedItems)} </p>
          <p>
            Card Number: **** **** **** ****{" "}
            {paymentInfo.cardNumber.slice(0, -12)}
          </p>
        </>
      ) : (
        <p>
          {paymentInfo
            ? "No payment information available."
            : "Loading payment information..."}
        </p>
      )}

      <h2>Shipping Information:</h2>
      {isUserSignedIn && userProfile && userProfile.name ? (
        <>
          <p>Name: {userProfile.name}</p>
          <p>Shipping Address: {userProfile.address}</p>
        </>
      ) : (
        <p>
        {isUserSignedIn
          ? "No user information available."
          : "Loading user information..."}
      </p>
      )}
            <div><span>Thank you for shopping with us!</span></div>
      <button onClick={handleConfirmOrder}>Continue Shopping</button>
    </div>
  );
};

export default Verification;
