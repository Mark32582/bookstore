import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/AdminDashboard/Dashboard";
import Book from "./components/Book/Book";
import AddBooks from "./components/AddBooks/AddBook";
import DeleteBooks from "./components/DeleteBooks/DeleteBooks";
import Registration from "./components/Registration/Registration";
<<<<<<< Updated upstream
=======
import Browse from "./components/Browse/Browse";
import DeleteBooks from "./components/DeleteBooks/DeleteBooks";
>>>>>>> Stashed changes

function App() {
  const [name, setName] = useState("Guest");
  const [verified, setVerified] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [signOn, setSignOn] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [users, setUsers] = useState();
  const [search, setSearch] = useState();
  const [books, setBooks] = useState();
  const [bookCategory, setBookCategory] = useState();

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                employee={employee}
                setEmployee={setEmployee}
                signOn={signOn}
                setSignOn={setSignOn}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
              />
            }
          />


          <Route
            path="/book/:bookId"
            element={
              <Book
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                employee={employee}
                setEmployee={setEmployee}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                signOn={signOn}
                setSignOn={setSignOn}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
              />
            }
          />
          {/* <Route path="/user" element={<Profile name={name} verified={verified}
                setVerified={setVerified} />} /> */}
          <Route
            path="/signup"
            element={
              <Registration
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                signOn={signOn}
                setSignOn={setSignOn}
                employee={employee}
                setEmployee={setEmployee}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
              />
            }
          />

          <Route
            path="/order"
            element={
              <AddBooks
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                signOn={signOn}
                setSignOn={setSignOn}
                employee={employee}
                setEmployee={setEmployee}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
              />
            }
          />
          <Route
            path="/deletebooks"
<<<<<<< Updated upstream
=======
            element={
              <DeleteBooks
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                signOn={signOn}
                setSignOn={setSignOn}
                employee={employee}
                setEmployee={setEmployee}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/browse"
>>>>>>> Stashed changes
            element={
              <DeleteBooks
                name={name}
                setName={setName}
                verified={verified}
                setVerified={setVerified}
                displayCart={displayCart}
                setDisplayCart={setDisplayCart}
                signOn={signOn}
                setSignOn={setSignOn}
                employee={employee}
                setEmployee={setEmployee}
                users={users}
                setUsers={setUsers}
                search={search}
                setSearch={setSearch}
                books={books}
                setBooks={setBooks}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory} /* Pass your props here */ />}
              />
{/* <Route path="/checkout" element={<Checkout name={name} verified={verified}
                setVerified={setVerified} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;