import Dexie from 'dexie';

const db = new Dexie('WhateverIwant');

db.version(1).stores({
    newReleases: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    employeeRecommendations: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    carousel: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    bestSellers: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title'
})

db.open().catch((error) => {
    console.error('Could not open the database:', error);
});

const checkCache = async (collectionName) => {
  const data = await db[collectionName].toArray();
  console.log(`Data for ${collectionName}:`, data);
};

// Call this function after you cache the data
checkCache('newReleases');
checkCache('employeeRecommendations');
checkCache('carousel');
checkCache('bestSellers');

export default db;