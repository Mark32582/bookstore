import RegisterForm from "../RegisterForm/RegisterForm";
import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";

const Registration = (props) => {
  const {
    name,
    verified,
    setVerified,
    displayCart,
    setDisplayCart,
    signOn,
    setSignOn,
    setName,
    employee,
    setEmployee,
    bookCategory,
    setBookCategory,
  } = props;
  return (
    <div>
      <Navigation
        name={name}
        verified={verified}
        setVerified={setVerified}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        signOn={signOn}
        setSignOn={setSignOn}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
      />

      <LogonForm signOn={signOn} setName={setName} setVerified={setVerified} />
      <RegisterForm
        verified={verified}
        setVerified={setVerified}
        setName={setName}
        employee={employee}
        setEmployee={setEmployee}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
      />
    </div>
  );
};
export default Registration;
