import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const RegisterForm = (props) => {
  const navigate = useNavigate();

  // update this to one state object
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [streetNum, setStreetNum] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [phone, setPhone] = useState("");
  const [rewardNum, setRewardNum] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState();
  const [type, setType] = useState("customer");
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const {
    employee,
    verified,
    setVerified,
  } = props;
  console.log(employee);
  const fetchPost = async () => {
    await getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(newData);
      setRewardNum(users?.length + 1);
    });
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (checked) {
      setType("employee");
    }
    if (!checked) {
      setType("customer");
    }
  }, [checked]);

  useEffect(() => {
    if (!employee) {
      if (verified) {
        navigate("/");
      }
    }
  }, [verified, navigate, employee]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const docRef = setDoc(doc(db, "users", userCredential.user.uid), {
          fName: fName,
          lName: lName,
          streetNumber: streetNum,
          address: address,
          city: city,
          state: state,
          zip: zip,
          phone: phone,
          email: email,
          rewardNumber: rewardNum,
          rewards: 0,
          type: type,
        });
        if (employee) {
          setSuccess("Registration Successful!");
          docRef();
        }
        setVerified(true);
        docRef();
        setTimeout(() => {
          navigate("/");
        }, 1000);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        if (errorMessage !== "docRef is not a function") {
          setError(
            "Email has already been used. Please login or use another email."
          );
        }
        // ..
      });
  };

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <main>
        <section>
          <div className="sign-up">
            <div className="form-container">
              {employee ? (
                <h1 className="title">Register User or Employee</h1>
              ) : (
                <h1 className="title">Register today, Read Tomorrow!</h1>
              )}
              {employee ? (
                <p className="signupMsg">Please sign up new User</p>
              ) : (
                <p className="signupMsg">Please sign up</p>
              )}
              {error && <div className="error">{error}</div>}
              {success && <div className="success">{success}</div>}
              <form className="register-form">
                <div>
                  <label className="inputs">
                    First Name:
                    <input
                      type="text"
                      label="fName"
                      value={fName}
                      onChange={(e) => setfName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    Last Name:
                    <input
                      type="text"
                      label="fName"
                      value={lName}
                      onChange={(e) => setlName(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    Street Number:
                    <input
                      type="number"
                      label="streetNum"
                      value={streetNum}
                      onChange={(e) => setStreetNum(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    Address:
                    <input
                      type="text"
                      label="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    City:
                    <input
                      type="text"
                      label="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    State:
                    <input
                      type="text"
                      label="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    Zip:
                    <input
                      type="number"
                      label="zip"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label className="inputs">
                    Phone:
                    <input
                      type="text"
                      label="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="email-address" className="inputs">
                    Email address:
                    <input
                      type="email"
                      label="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="password" className="inputs">
                    Password:
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                {employee && (
                  <div>
                    <label htmlFor="type" className="switch">
                      Employee:
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={handleChange}
                        label="isEmployee"
                      />
                    </label>
                  </div>
                )}
                {!employee ? (
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="signup-button "
                  >
                    Sign up
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={onSubmit}
                    className="signup-button "
                  >
                    Register Customer/Employee
                  </button>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterForm;
