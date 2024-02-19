import classNames from "classnames";
import { useEffect, useState } from "react";

const Cart = (props) => {
  const { cart, cartItems, setCartItems } = props;
  const deliveryFee = 4.99;

  const [totalCost, setTotalCost] = useState();
  const [subTotalCost, setSubTotalCost] = useState();
  const [taxes, setTaxes] = useState();

  useEffect(() => {
    setSubTotalCost(deliveryFee + Number(cartItems?.[0]?.price));
    setTaxes(subTotalCost * 0.06);
    setTotalCost(taxes + subTotalCost);
  }, [cartItems]);

  return (
    <div
      className={classNames({ "hide-cart": !cart }, { "cart-container": cart })}
    >
      {/* <div className={classNames({ "hide-logon": !signOn })}></div> */}
      <div className={classNames({ "hide-cart": !cart }, { cart: cart })}>
        <div className="cart-headline">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-contents">
          <div className="cart-mapped">
            {cartItems &&
              cartItems?.map((item, i) => {
                return (
                  <div key={i + "cartItem"} className="cart-items">
                    <div>
                      <b>Title:</b> {item?.title}
                    </div>
                    <div>
                      <b>Price:</b> {item?.price}
                    </div>
                    <div>
                      <b>Count:</b> 1
                    </div>
                  </div>
                );
              })}
          </div>

          <span>
            <em>Delivery Fee:</em> ${deliveryFee}
          </span>
          <span>(if applicable)</span>
          <h2>SubTotal: ${subTotalCost}</h2>
          <span>Taxes: ${taxes}</span>
          <span>
            <h2>Total Cost: ${totalCost}</h2>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
