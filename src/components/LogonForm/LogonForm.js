import classNames from "classnames";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const LogonForm = (props) => {
  const {
    signOn,
    setSignOn,
    setVerified,
    setEmployee,
    users: globalUsers,
    setUsers: setGlobalUsers,
  } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [userId, setUserId] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        setUserId(userCredential.user.uid);
        setVerified(true);
        setTimeout(() => {
          setError(undefined);
        }, 500);
        setTimeout(() => {
          setSignOn(!signOn);
        }, 750);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Invalid Username or Password");
      });
  };

  const fetchPost = async () => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    const newData = docSnap.data();
    setGlobalUsers(newData);
  };

  useEffect(() => {
    if (globalUsers?.type === "employee") {
      setEmployee(true);
    }
  }, [globalUsers?.type, setEmployee]);

  useEffect(() => {
    if (userId !== undefined) {
      fetchPost();
    }
  }, [userId]);
  return (
    <div className={classNames({ "hide-logon": !signOn })}>
      <div className="form-container-sign-on">
        <form className="logon-form">
          {error ? <div className="error"> {error} </div> : null}
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
