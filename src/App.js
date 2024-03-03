import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Book from "./components/Book/Book";
import AddBooks from "./components/AddBooks/AddBook";
import DeleteBooks from "./components/DeleteBooks/DeleteBooks";
import Registration from "./components/Registration/Registration";
import Browse from "./components/Browse/Browse";
import Checkout from "./components/Checkout/Checkout";
import { FirestoreCacheProvider } from "./provider/ContextProvider.js";
import Navigation from "./components/Navigation/Navigation.js";
import LogonForm from "./components/LogonForm/LogonForm.js";
import Cart from "./components/Cart/Cart.js";
import Footer from "./components/Footer/Footer.js";
import TimeClock from "./components/TimeClock/TimeClock.js";
import Accounting from "./components/Accounting/Accounting.js";
import Inventory from "./components/Inventory/Inventory.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import Verification from "./components/Verification/Verification.js";
import ContactMain from "./components/Contact/ContactMain/ContactMain.js";
import ContactEmailForm from "./components/Contact/ContactEmailForm/ContactEmailForm.js";
import PrivacyPolicy from "./components/Contact/PrivacyPolicy/PrivacyPolicy.js";

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
  const [redirect, setRedirect] = useState();
  const [purchasedItems, setPurchasedItems] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  const [totalCost, setTotalCost] = useState(0);
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [updatedInfo, setUpdatedInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
  });

  return (
    <FirestoreCacheProvider>
      <div className="page">
        <BrowserRouter>
          <Navigation
            verified={verified}
            setVerified={setVerified}
            signOn={signOn}
            setSignOn={setSignOn}
            employee={employee}
            setEmployee={setEmployee}
            displayCart={displayCart}
            setDisplayCart={setDisplayCart}
            setUsers={setUsers}
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
            bookCategory={bookCategory}
            setBookCategory={setBookCategory}
            cartItems={cartItems}
            redirect={redirect}
            setRedirect={setRedirect}
          />
          <LogonForm
            signOn={signOn}
            setSignOn={setSignOn}
            setVerified={setVerified}
            setEmployee={setEmployee}
            users={users}
            setUsers={setUsers}
            setRedirect={setRedirect}
            setUserProfile={setUserProfile}
            setUpdatedInfo={setUpdatedInfo}
          />
          <Cart
            cart={displayCart}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setDisplayCart={setDisplayCart}
            setRedirect={setRedirect}
            totalCost={totalCost}
            setTotalCost={setTotalCost}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  employee={employee}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setRedirect={setRedirect}
                />
              }
            />

            <Route
              path="/book/:bookId"
              element={
                <Book
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  setRedirect={setRedirect}
                />
              }
            />
            <Route
              path="/user"
              element={
                <UserProfile
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  updatedInfo={updatedInfo}
                  setUpdatedInfo={setUpdatedInfo}
                />
              }
            />
            <Route
              path="/signup"
              element={<Registration employee={employee} />}
            />

            <Route
              path="/order"
              element={
                <AddBooks
                  search={search}
                  setSearch={setSearch}
                  books={books}
                  setBooks={setBooks}
                />
              }
            />
            <Route path="/deletebooks" element={<DeleteBooks />} />
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
                  setRedirect={setRedirect}
                />
              }
            />
            <Route path="/clock" element={<TimeClock />} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route
              path="/checkout"
              element={
                <Checkout
                  verified={verified}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  paymentInfo={paymentInfo}
                  setPaymentInfo={setPaymentInfo}
                  setPurchasedItems={setPurchasedItems}
                  userProfile={userProfile}
                  setUserProfile={setUserProfile}
                  totalCost={totalCost}
                />
              }
            />
            <Route
              path="/verification"
              element={
                <Verification
                  purchasedItems={purchasedItems}
                  paymentInfo={paymentInfo}
                  userProfile={userProfile}
                  totalCost={totalCost}
                />
              }
            />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/contact/privacy" element={<PrivacyPolicy />} />
            <Route path="/contact/email-form" element={<ContactEmailForm />} />
            <Route
              path="/contact/email-form/privacy"
              element={<PrivacyPolicy />}
            />
          </Routes>
          <Footer setRedirect={setRedirect} />
        </BrowserRouter>
      </div>
    </FirestoreCacheProvider>
  );
}

export default App;
