import RegisterForm from "../RegisterForm/RegisterForm";

const Registration = (props) => {
  const {
    verified,
    setVerified,
    setName,
    employee,
    setEmployee,
    users,
    setUsers,
  } = props;

  return (
    <RegisterForm
      verified={verified}
      setVerified={setVerified}
      setName={setName}
      employee={employee}
      setEmployee={setEmployee}
      users={users}
      setUsers={setUsers}
    />
  );
};
export default Registration;
