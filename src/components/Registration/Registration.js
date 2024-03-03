import RegisterForm from "../RegisterForm/RegisterForm";

const Registration = (props) => {
  const { employee } = props;

  return <RegisterForm employee={employee} />;
};
export default Registration;
