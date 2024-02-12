import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./components/HomePage/HomePage";
import Dashboard from "./components/AdminDashboard/Dashboard";

import Registration from "./components/Registration/Registration";

function App() {
  const [name, setName] = useState("Guest");
  const [verified, setVerified] = useState(false);
  const [displayCart, setDisplayCart] = useState(false);
  const [signOn, setSignOn] = useState(false);
  const [employee, setEmployee] = useState(false);
  const [bookCategory, setBookCategory] = useState("");
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
                bookCategory={bookCategory} 
                setBookCategory={setBookCategory} 
              />
            }
          />

          <Route
            path="/dashboard"
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
                bookCategory={bookCategory}
                setBookCategory={setBookCategory} 
              />
            }
          />
          {/* <Route path="/checkout" element={<Checkout name={name} verified={verified}
                setVerified={setVerified} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
