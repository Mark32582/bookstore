import Dexie from './Dexie';

const db = new Dexie('WhateverIwant');

db.version(1).stores({
    newReleases: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    employeeRecommendations: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    carousel: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title',
    bestSellers: '++id, author, category, cost, description, googleId, id, inventoryCount, pageCount, publisher, publisherDate, retailPrice, thumbnail, title'
})

db.open().catch((error) => {
    console.error('Could not open the database:', error);
});

export default db;