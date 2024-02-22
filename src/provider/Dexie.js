import Dexie from 'dexie';

const db = new Dexie('WhateverIwant');

db.version(2).stores({
    newReleases: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    employeeRecommendations: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    carousel: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    bestSeller: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title'
})

db.open().catch((error) => {
    console.error('Could not open the database:', error);
});

const checkCache = async (collectionName) => {
  const data = await db[collectionName]?.toArray();
  console.log(`Data for ${collectionName}:`, data);
};

// Call this function after you cache the data
checkCache('newReleases');
checkCache('employeeRecommendations');
checkCache('carousel');
checkCache('bestSeller');

export default db;