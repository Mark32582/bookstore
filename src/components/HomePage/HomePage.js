import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Cart from "../Cart/Cart";

const HomePage = (props) => {
  const {
    verified,
    setVerified,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    displayCart,
    setDisplayCart,
    bookCategory,
    setBookCategory,
  } = props;

  const handleSignOn = () => {
    setSignOn(true);
  };

  const handleEmployeeLogin = () => {
    setSignOn(!signOn);
  };

  return (
    <div className="HomePage">
      <Navigation
        verified={verified}
        setVerified={setVerified}
        signOn={signOn}
        setSignOn={setSignOn}
        employee={employee}
        setEmployee={setEmployee}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory} 
      />
      {employee === true ? (
        <div>
          <div className="carousel">
            {/* Scrolling new release carousel can go here */}
          </div>
          <div className="body-content">List of best sellers goes here</div>
          <div className="employee-login-container">
            <div className="employee-login">
              <button className="employee-login-button" onClick={handleEmployeeLogin}>
                Employee Login
              </button>
            </div>
          </div>
          <AdminDashboard />
        </div>
      ) : (
        <div>
         
          <div className="carousel">
            {/* Scrolling new release carousel can go here */}
          </div>
          <div className="body-content">List of best sellers goes here</div>
          {signOn && (
            <div className="login-form-container">
              <LogonForm
                signOn={signOn}
                setSignOn={setSignOn}
                setVerified={setVerified}
                employee={employee}
                setEmployee={setEmployee}
                bookCategory={bookCategory}
                setBookCategory={setBookCategory}
              />
            </div>
          )}
          <div className="employee-login-container">
            <div className="employee-login">
              <button className="employee-login-button" onClick={handleEmployeeLogin}>
                Employee Login
              </button>
            </div>
          </div>
        </div>
      )}
      <Cart cart={displayCart} />
    </div>
  );
};

export default HomePage; 
