import { useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './Dexie.js';

const useCacheCollections = (firestore) => {
  const cacheCollection = useCallback(async (collectionName) => {
    const querySnapshot = await getDocs(collection(firestore, collectionName));
    const docs = querySnapshot?.docs?.map((doc) => ({ id: doc.id, ...doc.data() }));
    await db[collectionName].bulkPut(docs);
  }, [firestore]);

  useEffect(() => {
    // Cache each collection you need
    cacheCollection('newReleases');
    cacheCollection('employeeRecommendations');
    cacheCollection('carousel');
    cacheCollection('bestSellers');
    // Repeat for as many collections as you have
  }, [cacheCollection]);
};

export default useCacheCollections;