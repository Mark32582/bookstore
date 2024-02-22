import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const Inventory = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const selectedCollections = [
    "bestSeller",
    "newReleases",
    "carousel",
    "employeeRecommendations",
  ];

  const fetchBooks = async () => {
    if (selectedCategory === "") {
      setSearchResults([]);
      return;
    }

    const collectionRef = collection(db, selectedCategory);
    const querySnapshot = await getDocs(collectionRef);
    const results = querySnapshot.docs?.map((doc) => ({
      collection: selectedCategory,
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      description: doc.data().description,
      thumbnail: doc.data().thumbnail,
      inventoryCount: doc.data().inventoryCount,
    }));
    setSearchResults(results);
  };

  useEffect(() => {
    fetchBooks();
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Store Inventory</h1>

      <div className="collection-buttons">
        {selectedCollections?.map((collectionName) => (
          <button
            key={collectionName}
            onClick={() => handleCategorySelect(collectionName)}
            className={selectedCategory === collectionName ? "active" : ""}
          >
            {collectionName}
          </button>
        ))}
      </div>

      <div className="inventory-list">
        {searchResults?.map((result) => (
          <div key={result.id} className="inventory-item">
            <img src={result.thumbnail} alt={result.title} />
            <div className="item-details">
              <h2>{result.title}</h2>
              <p>Author: {result.author}</p>
              <p>Description: {result.description}</p>
              <p>ID: {result.id}</p>
              <p
                style={{
                  color: result.inventoryCount <= 2 ? "red" : "inherit",
                }}
              >
                Inventory Count: {result.inventoryCount}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
};

export default Inventory;