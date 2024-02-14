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
        <div className="tile">
          <span>people icon and below that text about registering new employees or customers</span>
        </div>
        <button onClick={handleRegisterClick}>Register Users</button>
      </div>
      <div className="grid-tiles">
        <button onClick={handleAddBooksClick}>Order Books</button>
      </div>
      <div className="grid-tiles">stuff goes in all these tiles</div>
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