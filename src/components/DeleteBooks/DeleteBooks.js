import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";

const DeleteBooks = () => {
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);
  const [checked, setChecked] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const selectedCollections = [
    "bestSeller",
    "newReleases",
    "carousel",
    "employeeRecommendations",
  ];

  const fetchCollection = async (collectionName, setSearchResults) => {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const results = querySnapshot.docs.map((doc) => ({
      collection: collectionName,
      id: doc.id,
      title: doc.data().title,
      author: doc.data().author,
      description: doc.data().description,
      thumbnail: doc.data().thumbnail,
    }));
    setSearchResults(results);
  };

  const handleCheck = (event, bookId) => {
    console.log(bookId);
    setChecked(bookId);
  };

  const handleDelete = async () => {
    try {
      // for (const collectionName of selectedCollections) {
      //   const checkedBooks = searchResults.filter(
      //     (result) =>
      //       checked.includes(result.id) && result.collection === collectionName
      //   );

      //   for (const book of checkedBooks) {
      //     await deleteDoc(doc(db, collectionName, book.id));
      //   }
      // }
      setSuccess("Books successfully removed from inventory!");
      setChecked();
      setSearchResults();
    } catch {
      setError("There was an error, please try again.");
    }
  };
  console.log(checked);
  return (
    <div>
      <div className="delete-books">
        <div className="delete-container">
          <h1>Remove Books from Inventory</h1>
          <p>Search a collection:</p>

          <ul>
            {selectedCollections &&
              selectedCollections?.map((collectionName) => (
                <li key={collectionName} className="list">
                  <input
                    type="radio"
                    name={collectionName}
                    value={collectionName}
                    onChange={() =>
                      fetchCollection(collectionName, setSearchResults)
                    }
                  />
                  {collectionName}
                </li>
              ))}
          </ul>
          {success && (
            <h3
              style={{
                color: "green",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {success}{" "}
            </h3>
          )}
          {error && (
            <h3
              style={{
                color: "red",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {error}
            </h3>
          )}
          {checked?.length > 0 && (
            <button onClick={handleDelete}>Remove Selected Book</button>
          )}
          <ul>
            {searchResults &&
              searchResults?.map((result) => (
                <li key={result?.id} className="list">
                  <input
                    type="checkbox"
                    onClick={(e) => handleCheck(e, result?.id)}
                  />
                  <div>
                    <h2>{result?.title}</h2>
                    <p>Author: {result?.author}</p>
                    <p>Description: {result?.description}</p>
                    <p>ID: {result?.id}</p>
                  </div>
                </li>
              ))}
          </ul>
          <button onClick={() => navigate("/")}>Go back</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBooks;
