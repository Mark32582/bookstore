import classNames from "classnames";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const LogonForm = (props) => {
  const { signOn, setSignOn, setVerified, employee, setEmployee} = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setVerified(true);
        // if (employee === users?.employee) {
        //   setEmployee(true);
        // }
        setTimeout(() => {
          navigate("/");
        }, 1000);
        setSignOn(!signOn);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const fetchPost = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data()
        
        // id: doc.id,
      }));
      setUsers(newData[0]);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className={classNames({ "hide-logon": !signOn })}>
      <div className="form-container-sign-on">
        <form className="logon-form">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            name="email"
            required
            autoComplete="on"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            id="password"
            type="password"
            placeholder="Password"
            name="password"
            required
            autoComplete="on"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={onLogin} className="signup-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
export default LogonForm;
