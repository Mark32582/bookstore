import React from "react";

const Verification = ({ purchasedItems, paymentInfo, userProfile }) => {
  console.log(purchasedItems);
  const handleConfirmOrder = () => {
    const orderDetails = {
      cartItems: purchasedItems.map((item) => item.title),
      totalCost: calculateTotalCost(purchasedItems),
      paymentInfo: paymentInfo || {},
      shippingInfo: {
        name: userProfile?.name || "",
        address: userProfile?.address || "",
      },
    };
  };

  const calculateTotalCost = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price;
    });
    return total;
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

      <h4>Payment Information:</h4>
      {paymentInfo && paymentInfo.cardNumber ? (
        <>
          <p>Order Number: BST-{Math.random() * 10 * 10000}</p>
          <p>
            Card Number: **** **** **** ****{" "}
            {paymentInfo.cardNumber.slice(0, -4)}
          </p>
        </>
      ) : (
        <p>
          {paymentInfo
            ? "No payment information available."
            : "Loading payment information..."}
        </p>
      )}

      <h4>User Information:</h4>
      {userProfile && userProfile.name ? (
        <>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Shipping Address: {userProfile.address}</p>
        </>
      ) : (
        <p>
          {userProfile
            ? "No user information available."
            : "Loading user information..."}
        </p>
      )}

      <button onClick={handleConfirmOrder}>Continue Shopping</button>
    </div>
  );
};

export default Verification;
