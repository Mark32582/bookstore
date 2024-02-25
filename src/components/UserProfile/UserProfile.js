import React, { useState, useEffect } from 'react';
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";
import { auth } from '../../config/fireBaseConfig'; // Make sure to import auth if not already imported
import './styles/userprofile.scss';


const UserProfile = () => {
  const [userProfile, setUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedInfo, setUpdatedInfo] = useState({ name: '', email: '', address: '' });

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
      <h2>User Profile</h2>
      {!isEditing ? (
        <>
          <p><strong>User ID:</strong> {auth.currentUser.uid}</p>
          <p><strong>Name:</strong> {userProfile.name}</p>
          <p><strong>Email:</strong> {userProfile.email}</p>
          <p><strong>Address:</strong> {userProfile.address}</p>
          <button onClick={() => setIsEditing(true)}>Update Information</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" name="name" value={updatedInfo.name || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={updatedInfo.email || ''} onChange={handleInputChange} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" name="address" value={updatedInfo.address || ''} onChange={handleInputChange} />
          </div>
          <button type="submit">Save Changes</button>
          <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
        </form>
      )}
    </div>
  );
};

export default UserProfile;
