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

  console.log(setUsers);
  return (
    <div>
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
