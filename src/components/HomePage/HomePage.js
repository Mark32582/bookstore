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
  } = props;

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
      />
      <LogonForm
        signOn={signOn}
        setSignOn={setSignOn}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
      />
      <Cart cart={displayCart} />
      {employee === true ? (
        <AdminDashboard />
      ) : (
        <div className="carousel">
          {" "}
          a scrolling new release carousel can go here (when employee is logged
          on hero disappears and a grid appears with options for the employee)
        </div>
      )}
      <div className="body-content">List of best sellers goes here</div>
    </div>
  );
};
export default HomePage;
