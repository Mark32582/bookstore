import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { cart, cartItems, setCartItems } = props;
  const navigate = useNavigate();
  const deliveryFee = 4.99;

  const [totalCost, setTotalCost] = useState();
  const [subTotalCost, setSubTotalCost] = useState();
  const [taxes, setTaxes] = useState();

  useEffect(() => {
    let subTotal = 0;

    cartItems?.price?.map((item) => {
      subTotal = subTotal + Number(item);
      console.log(item);
      return subTotal;
    });
    // console.log(subTotalCost);
    // setTimeout(() => {
    //   setTaxes(subTotalCost * 0.06);
    // }, 200);
    // setTimeout(() => {
    //   setTotalCost(4.99 + taxes + subTotalCost);
    // }, 400);
  }, [cartItems, subTotalCost, taxes]);

  const handleCheckout = () => {
    navigate("/checkout");
  };

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
            {cartItems?.length > 0 &&
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
        <div>
          <button onClick={handleCheckout}>Complete Checkout</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
