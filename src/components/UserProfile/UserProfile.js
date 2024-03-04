import React, { useState, useEffect } from 'react';
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";
import { auth } from '../../config/fireBaseConfig'; // Make sure to import auth if not already imported
import './styles/userprofile.scss';


const UserProfile = ({userProfile, setUserProfile, updatedInfo, setUpdatedInfo}) => {

  const [isEditing, setIsEditing] = useState(false);
 

  useEffect(() => {
    const fetchUserProfile = async () => {
      const user = auth.currentUser;
      if (user) {
        const userProfileRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userProfileRef);
        if (docSnap.exists()) {
          setUserProfile(docSnap.data());
          setUpdatedInfo(docSnap.data()); // Initialize form with current data
        } else {
          console.log("No such document!");
        }
      }
    };

    fetchUserProfile();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedInfo(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
      const userProfileRef = doc(db, 'users', user.uid);
      await updateDoc(userProfileRef, updatedInfo);
      setUserProfile(updatedInfo);
      setIsEditing(false); // Hide the form after updating
    }
  };

  if (!userProfile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="user-profile">
    <div className="user-profile-container">
      <h2>User Profile</h2>
      {!isEditing ? (
        <>
        <div className="user-info"> 
          <p><strong>Name:</strong> {userProfile.fName}{" "}{userProfile.lName}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Address:</strong> {userProfile.address}</p>
        </div>
          <div className="update-button">
          <button onClick={() => setIsEditing(true)}>Update Information</button>
       </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="user-changes">
          <div>
            
            <label>First Name:</label>
            <input type="text" name="fName" value={updatedInfo.fName || ''} onChange={handleInputChange} />
          </div>
          <div>
            
            <label>Last Name:</label>
            <input type="text" name="lName" value={updatedInfo.lName || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={updatedInfo.email || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" value={updatedInfo.address || ''} onChange={handleInputChange} />
          </div>
          <div className="save-cancel-changes">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
          </div>
        </form>
      )}
    </div>
    </div>
  );
};

export default UserProfile;
