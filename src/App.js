import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Book from "./components/Book/Book";
import AddBooks from "./components/AddBooks/AddBook";
import DeleteBooks from "./components/DeleteBooks/DeleteBooks";
import Registration from "./components/Registration/Registration";
import Dashboard from "./components/AdminDashboard/Dashboard";
import Browse from "./components/Browse/Browse";
import Checkout from "./components/Checkout/Checkout";
import { FirestoreCacheProvider } from './provider/ContextProvider.js';

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
  const [cartItems, setCartItems] = useState([]);
  return (
    <FirestoreCacheProvider>
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
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />

          <Route
            path="/book/:bookId"
            element={
              <Dashboard
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
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          {/* <Route 
            path="/user" 
            element={
              <Profile 
                name={name} 
                verified={verified}
                setVerified={setVerified} 
              />
            } 
          /> */}
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
                cartItems={cartItems}
                setCartItems={setCartItems}
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
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/deletebooks"
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
            element={
              <Browse
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
            path="/checkout"
            element={
              <Checkout
                name={name}
                verified={verified}
                setVerified={setVerified}
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
    </FirestoreCacheProvider>
  );
}

export default App;
