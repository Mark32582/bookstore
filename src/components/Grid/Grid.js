import React from "react";
import { useNavigate } from "react-router-dom";

const Grid = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/signup");
  };

  const handleAddBooksClick = () => {
    navigate("/order");
  };

  return (
    <div className="grid-container">
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/add-person.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Add Customer/Employee</h2>
        </span>

        <button onClick={handleRegisterClick}>Register Users</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/add-book.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Order New Books</h2>
        </span>
        <button onClick={handleAddBooksClick}>Order Books</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/remove-book.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Remove Books</h2>
        </span>
        <button>Remove Books</button>
      </div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
    </div>
  );
};

export default Grid;
