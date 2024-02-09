import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/fireBaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
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
  const [employee, setEmployee] = useState(false);
  const { verified, setVerified } = props;

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

  const addUser = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "users"), {
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
        employee: false,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  useEffect(() => {
    if (verified) {
      navigate("/");
    }
  }, [verified, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        const docRef = addDoc(collection(db, "users"), {
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
          employee: employee,
        });

        setVerified(true);
        docRef();
        setTimeout(() => {
          setEmployee(employee);
        }, 500);
        setTimeout(() => {
          navigate("/");
        }, 1000);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return (
    <div>
      <main>
        <section>
          <div className="sign-up">
            <div className="form-container">
              <h1 className="title">Register today, Read Tomorrow!</h1>
              <p className="signupMsg">Please sign up</p>
              <form className="register-form">
                {" "}
                <div>
                  <label className="inputs">
                    First Name:{" "}
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
                    Last Name:{" "}
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
                    Street Number:{" "}
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
                    Address:{" "}
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
                    City:{" "}
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
                    State:{" "}
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
                    Zip:{" "}
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
                    Phone:{" "}
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
                    Email address
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
                    Password
                    <input
                      type="password"
                      label="Create password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={onSubmit}
                  className="signup-button "
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default RegisterForm;
