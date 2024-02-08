import classNames from "classnames";

const Cart = (props) => {
  const { cart, cost, totalCost, deliveryFee, items } = props;
  return (
    <div
      className={classNames({ "hide-cart": !cart }, { "cart-container": cart })}
    >
      {/* <div className={classNames({ "hide-logon": !signOn })}></div> */}
      <div className={classNames({ "hide-cart": !cart }, { "cart": cart })}>
        <div className="cart-headline">
          <h1>Shopping Cart</h1>
        </div>
        <div className="cart-contents">
          <span>items in the cart{items}</span>
          <span>cost {cost}</span>
          <span>input here</span>
          <span>Delivery Fee{deliveryFee}</span>
          <span>if applicable</span>
          <h2>Total{totalCost}</h2>
          <span>
            <h2>total cost here</h2>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Cart;
