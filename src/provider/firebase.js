import { useEffect, useCallback } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from './Dexie.js';
import { db as fireStoreDb } from '../config/fireBaseConfig.js';

const useCacheCollections = () => {
  const cacheCollection = useCallback(async (fs, collectionName) => {
    const querySnapshot = await getDocs(collection(fs, collectionName));
    const docs = querySnapshot?.docs?.map((doc) => ({ id: doc.id, ...doc.data() }));
    await db[collectionName]?.bulkPut(docs);
  }, []);

  useEffect(() => {
    // Cache each collection you need
    cacheCollection(fireStoreDb,'newReleases');
    cacheCollection(fireStoreDb,'employeeRecommendations');
    cacheCollection(fireStoreDb,'carousel');
    cacheCollection(fireStoreDb,'bestSeller');
    // Repeat for as many collections as you have
  }, [cacheCollection]);
};

export default useCacheCollections;