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
    users,
    setUsers,
  } = props;

  console.log(setUsers);
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
        setEmployee={setEmployee}
        users={users}
        setUsers={setUsers}
      />

      <LogonForm
        signOn={signOn}
        setName={setName}
        setVerified={setVerified}
        users={users}
        setUsers={setUsers}
        setEmployee={setEmployee}
      />
      <RegisterForm
        verified={verified}
        setVerified={setVerified}
        setName={setName}
        employee={employee}
        setEmployee={setEmployee}
        users={users}
        setUsers={setUsers}
      />
    </div>
  );
};
export default Registration;
