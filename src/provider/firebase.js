import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './Dexie.js';

const useCacheCollections = (firestore) => {
  useEffect(() => {
    const cacheCollection = async (collectionName) => {
      const querySnapshot = await getDocs(collection(firestore, collectionName));
      const docs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      await db[collectionName].bulkPut(docs);
    };

    // Cache each collection you need
    cacheCollection('newReleases');
    cacheCollection('employeeRecommendations');
    cacheCollection('carousel');
    cacheCollection('bestSellers');
    // Repeat for as many collections as you have

  }, [firestore]);
};

export default useCacheCollections;