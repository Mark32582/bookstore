import React from "react";

const Verification = ({ purchasedItems, paymentInfo, userProfile }) => {
  console.log(purchasedItems);
  const handleConfirmOrder = () => {
    const orderDetails = {
      cartItems: purchasedItems.map((item) => item.title),
      totalCost: calculateTotalCost(purchasedItems),
      paymentInfo: paymentInfo || {},
      shippingInfo: {
        fname: userProfile?.fname || "",
        lname: userProfile?.lname || "",
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
          <p>Total cost of: </p>
          <p>
            Card Number: **** **** **** ****{" "}
            {paymentInfo.cardNumber.slice(0, -3)}
          </p>
        </>
      ) : (
        <p>
          {paymentInfo
            ? "No payment information available."
            : "Loading payment information..."}
        </p>
      )}

      <h4>Shipping Information:</h4>
      {userProfile && userProfile.name ? (
        <>
          <p>First Name: {userProfile.fname}</p>
          <p>Last Name: {userProfile.lname}</p>
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
            <div><span>Thank you for shopping with us!</span></div>
      <button onClick={handleConfirmOrder}>Continue Shopping</button>
    </div>
  );
};

export default Verification;
