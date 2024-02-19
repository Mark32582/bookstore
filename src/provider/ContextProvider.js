import React, { createContext, useContext } from 'react';
import { useFirestore } from 'react-redux-firebase';
import useCacheCollections from './firebase.js';

const FirestoreCacheContext = createContext();

export const useFirestoreCache = () => useContext(FirestoreCacheContext);

export const FirestoreCacheProvider = ({ children }) => {
  const firestore = useFirestore(); // This should return your Firestore instance
  useCacheCollections(firestore);

  return (
    <FirestoreCacheContext.Provider value={{}}>
      {children}
    </FirestoreCacheContext.Provider>
  );
};
