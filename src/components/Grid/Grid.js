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

  const handleDeleteClick = () => {
    navigate("/deletebooks");
  };

  return (
    <div className="grid-container">
      <div className="grid-tiles">
        <div className="tile">
          <span>people icon and below that text about registering new employees or customers</span>
        </div>
        <button onClick={handleRegisterClick}>Register Users</button>
      </div>
      <div className="grid-tiles">
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
        <button onClick={handleDeleteClick}>Remove Books</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/remove-book.png"}
          alt=""
          height="120px"
        />
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