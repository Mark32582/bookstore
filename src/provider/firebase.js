import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./Dexie.js";
import { db as fireStoreDb } from "../config/fireBaseConfig.js";

const cacheCollection = async (fs, collectionName) => {
  const dateStamp = localStorage.getItem(`${collectionName}_date`);
  if (!dateStamp || Date.now() - JSON.parse(dateStamp) > 86400000) {
    const querySnapshot = await getDocs(collection(fs, collectionName));
    const docs = querySnapshot?.docs?.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    await db[collectionName]?.bulkPut(docs);
    localStorage.setItem(`${collectionName}_date`, JSON.stringify(Date.now()));
  }
};

const useCacheCollections = () => {
  useEffect(() => {
    // Cache each collection you need
    cacheCollection(fireStoreDb, "newReleases");
    cacheCollection(fireStoreDb, "employeeRecommendations");
    cacheCollection(fireStoreDb, "carousel");
    cacheCollection(fireStoreDb, "bestSeller");
    // Repeat for as many collections as you have
  }, []);
};

export default useCacheCollections;
