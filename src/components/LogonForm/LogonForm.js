import classNames from "classnames";
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { useNavigate } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

const LogonForm = (props) => {
  const {
    signOn,
    setSignOn,
    setVerified,
    setEmployee,
    users: globalUsers,
    setUsers: setGlobalUsers,
    setRedirect,
  } = props;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetPasswordSent, setResetPasswordSent] = useState(false);
  const [resetPasswordError, setResetPasswordError] = useState(null);
  const [resetPasswordMessage, setResetPasswordMessage] = useState(null);
  const [error, setError] = useState();
  const [userId, setUserId] = useState();

  const onLogin = (e) => {
    e.preventDefault();
    if (auth.currentUser && !auth.currentUser.emailVerified) {
      setError("Email not verified. Please verify your email to sign in.");
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserId(userCredential.user.uid);
        setVerified(true);
        setRedirect(false);
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

  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setResetPasswordSent(true);
        setResetPasswordError(null);
        setResetPasswordMessage(
          "A link to reset your password has been emailed to the provided email address."
        );

        setTimeout(() => {
          setResetPasswordMessage(null);
        }, 5000);
      })
      .catch((error) => {
        setResetPasswordSent(false);
        setResetPasswordError(error.message);
        setResetPasswordMessage(null);
      });
  };

  return (
    <div className={classNames({ "hide-logon": !signOn })}>
      <div className="form-container-sign-on">
        <form className="logon-form">
          {error ? <div className="error"> {error} </div> : null}
          {resetPasswordMessage && (
            <div className="reset-password-message">
              {resetPasswordMessage}
            </div>
          )}
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
          <button onClick={resetPassword} className="reset-password-button">
            Reset Password
          </button>
          {resetPasswordError && (
            <div className="error">{resetPasswordError}</div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LogonForm;