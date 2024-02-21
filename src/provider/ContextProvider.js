import React, { createContext, useContext } from 'react';
import { useFirestore } from 'react-redux-firebase';
import useCacheCollections from './firebase.js';
import db from './Dexie.js';
import { getDocs, collection } from 'firebase/firestore';

const FirestoreCacheContext = createContext();

export const useFirestoreCache = () => useContext(FirestoreCacheContext);

export const FirestoreCacheProvider = ({ children }) => {
  const firestore = useFirestore(); // This should return your Firestore instance
  useCacheCollections(firestore);

  const getCachedCollection = async (collectionName) => {
    let data = await db[collectionName].toArray();

    if (data.length === 0) {
      // Cache is empty, fall back to Firestore
      const querySnapshot = await getDocs(collection(firestore, collectionName));
      data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

      // Cache the data for future use
      await db[collectionName].bulkPut(data);
    }

    return data;
  };

  return (
    <FirestoreCacheContext.Provider value={{ getCachedCollection }}>
      {children}
    </FirestoreCacheContext.Provider>
  );
};