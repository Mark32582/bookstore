import React from 'react';

const Verification = ({ userInfo, cartItems, paymentInfo }) => {
  const handleConfirmOrder = () => {
    const orderDetails = {
      cartItems: cartItems.map((item) => item.title),
      totalCost: calculateTotalCost(cartItems),
      paymentInfo: paymentInfo || {},
      shippingInfo: {
        name: userInfo?.name || '',
        address: userInfo?.address || '',
      },
    };

    console.log('Order Details:', orderDetails);
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
      <h1>Order Verification</h1>
      <h2>Items in Cart:</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={`${index}--verificationItem`}>{item.title}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}

      <h4>Payment Information:</h4>
      {paymentInfo && paymentInfo.cardNumber ? (
        <>
          <p>Card Number: {paymentInfo.cardNumber}</p>
          <p>Expiry Date: {paymentInfo.expiryDate}</p>
          <p>CVV: {paymentInfo.cvv}</p>
        </>
      ) : (
        <p>{paymentInfo ? 'No payment information available.' : 'Loading payment information...'}</p>
      )}

      <h4>User Information:</h4>
      {userInfo && userInfo.name ? (
        <>
          <p>Name: {userInfo.name}</p>
          <p>Email: {userInfo.email}</p>
          <p>Shipping Address: {userInfo.address}</p>
        </>
      ) : (
        <p>{userInfo ? 'No user information available.' : 'Loading user information...'}</p>
      )}

      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default Verification;