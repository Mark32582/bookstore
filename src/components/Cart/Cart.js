import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const {
    cart,
    cartItems,
    setCartItems,
    setDisplayCart,
    setRedirect,
    totalCost,
    setTotalCost,
  } = props;
  const navigate = useNavigate();
  const deliveryFee = 4.99;

  const [selectedItems, setSelectedItems] = useState([]);

  const [subTotalCost, setSubTotalCost] = useState(0);
  const [taxes, setTaxes] = useState(0);

  useEffect(() => {
    let subTotal = 0;

    cartItems?.forEach((item) => {
      subTotal += Number(item.price);
    });

    setSubTotalCost(subTotal);
    setTaxes(subTotal * 0.06);
    setTotalCost(deliveryFee + subTotal + subTotal * 0.06);
  }, [cartItems]);

  const handleDeleteSelected = () => {
    const updatedCartItems = cartItems.filter(
      (_, index) => !selectedItems.includes(index)
    );
    setCartItems(updatedCartItems);
    setSelectedItems([]);
  };

  const handleCheckboxChange = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
  };

  const handleCheckout = () => {
    setRedirect(false);
    setDisplayCart(false);
    navigate("/checkout");
  };

  return (
    <div className={`cart-container ${cart ? "" : "hide-cart"}`}>
      <div className={`cart ${cart ? "" : "hide-cart"}`}>
        <div className="cart-headline">
          <h1>Shopping Cart</h1><img
                  className="cart-icon"
                  src={process.env.PUBLIC_URL + "/x-icon.png"}
                  alt="cart"
                  onClick={() => setDisplayCart(!cart)}
                  width="35px"
                  height="35px"
                />
        </div>
        <div className="cart-contents">
          <div className="cart-mapped">
            {cartItems?.length > 0 &&
              cartItems?.map((item, i) => {
                return (
                  <div key={`${i}-cartItem`} className="cart-items">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(i)}
                      onChange={() => handleCheckboxChange(i)}
                    />
                    <div>
                      <b>Title:</b> <br />
                      {item?.title}
                    </div>
                    <div>
                      <b>Price:</b> <br />
                      {item?.price}
                    </div>
                    <div>
                      <b>Quantity:</b> <br />1
                    </div>
                  </div>
                );
              })}
          </div>

          <span>
            <em>Delivery Fee:</em> ${deliveryFee}
          </span>
          <span>(if applicable)</span>
          <h2>SubTotal: ${subTotalCost?.toFixed(2)}</h2>
          <span>Taxes: ${taxes.toFixed(2)}</span>
          <span>
            <h2>Total Cost: ${totalCost?.toFixed(2)}</h2>
          </span>
        </div>
        <div>
          {selectedItems?.length > 0 && (
            <button onClick={handleDeleteSelected}>Delete Selected</button>
          )}
        </div>
        <div>
          <button onClick={handleCheckout}>Complete Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
