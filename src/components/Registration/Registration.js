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
  } = props;
  return (
    <div>
      <Navigation
        name={name}
        verified={verified}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        signOn={signOn}
        setSignOn={setSignOn}
      />

      <LogonForm signOn={signOn} setName={setName} setVerified={setVerified} />
      <RegisterForm setVerified={setVerified} setName={setName} />
    </div>
  );
};
export default Registration;
