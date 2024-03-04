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
  const handleClockClick = () => {
    navigate("/clock");
  };
  const handleInventoryClick = () => {
    navigate("/inventory");
  };
  const handleAccountingClick = () => {
    navigate("/accounting");
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
          <h2>Manage Customers/Employees</h2>
        </span>

        <button onClick={handleRegisterClick}>Manage Users</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/add-book.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Order Books</h2>
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
        <button onClick={handleDeleteClick}>Remove Books</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/bookinventory.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Store Inventory</h2>
        </span>
        <button onClick={handleInventoryClick}>Check Inventory</button>
      </div>
      <div className="grid-tiles">
        <img
          src={process.env.PUBLIC_URL + "/accounting.png"}
          alt=""
          height="120px"
        />
        <span>
          <h2>Records of Payment</h2>
        </span>
        <button onClick={handleAccountingClick}>Accounting</button>
      </div>
      <div className="grid-tiles">
      <img
        src={process.env.PUBLIC_URL + "/timeclock.png"}
        alt="" height="120px" />
        <span>
          <h2>Time Clock</h2>
        </span>
        <button onClick={handleClockClick}>Clock In/Out</button>
      </div>
    </div>
  );
};

export default Grid;
