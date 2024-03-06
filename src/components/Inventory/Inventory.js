import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import db from "../../provider/Dexie";

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

    const results = await db[selectedCategory]?.toArray();
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
      <div className="inventory">
        <div className="inventory-container">
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
              <div key={result?.id} className="inventory-item">
                {result?.thumbnail ? (
                  <img
                    src={result?.thumbnail}
                    alt={result?.title}
                    height="200px"
                  />
                ) : (
                  <div className="no-image">{result?.title}</div>
                )}
                <div className="item-details">
                  <h2>{result?.title}</h2>
                  <p
                    style={{
                      color: result?.inventoryCount <= 2 ? "red" : "inherit",
                    }}
                  >
                    Inventory Count: {result?.inventoryCount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => navigate("/")}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
