import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = (props) => {
  const { cart, cartItems, setCartItems } = props;
  const navigate = useNavigate();
  const deliveryFee = 4.99;

  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState();
  const [subTotalCost, setSubTotalCost] = useState();
  const [taxes, setTaxes] = useState();
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox checked status

  useEffect(() => {
    let subTotal = 0;

    cartItems?.price?.map((item) => {
      subTotal = subTotal + Number(item);
      console.log(item);
      return subTotal;
    });

    // Calculate taxes and total cost
    const calculateCost = () => {
      setTaxes(subTotalCost * 0.06);
      setTotalCost(4.99 + taxes + subTotalCost);
    };

    calculateCost();
  }, [cartItems, subTotalCost, taxes]);

  const handleDeleteSelected = () => {
    const updatedCartItems = cartItems.filter(
      (_, index) => !selectedItems.includes(index)
    );
    setCartItems(updatedCartItems);
    setSelectedItems([]);
    setIsChecked(false); // Reset checkbox status
  };

  const handleCheckboxChange = (index) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((item) => item !== index));
    } else {
      setSelectedItems([...selectedItems, index]);
    }
    setIsChecked(!isChecked); // Update checkbox status
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div
      className={classNames({ "hide-cart": !cart }, { "cart-container": cart })}
    >
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
                      <input
                        type="checkbox"
                        checked={selectedItems.includes(i)}
                        onChange={() => handleCheckboxChange(i)}
                      />
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
          {selectedItems.length > 0 && ( // Render the button only if checkboxes are checked
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