import AdminDashboard from "../AdminDashboard/Dashboard";
import Carousel from "../Carousel/Carousel";
import Rows from "../CategoryRows/Rows";
import React, { useState } from "react";

const HomePage = (props) => {
  const {
    employee,
    users,
    search,
    setSearch,
    books,
    setBooks,
    bookCategory,
    cartItems,
    setCartItems,
  } = props;



  return (
    <div className="HomePage">
      {employee === true ? (
        <AdminDashboard users={users} books={books} setBooks={setBooks} />
      ) : (
        <div className="carousel-container">
          <Carousel
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}
      <div className="body-content">
        <div className="row-container">
          <Rows
            bookCategory={bookCategory}
            books={books}
            setBooks={setBooks}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
