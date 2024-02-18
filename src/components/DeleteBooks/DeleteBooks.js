import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";
import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";

const DeleteBooks = (props) => {
  const {
    name,
    setName,
    verified,
    setVerified,
    displayCart,
    setDisplayCart,
    signOn,
    setSignOn,
    employee,
    setEmployee,
    users,
    setUsers,
    search,
    setSearch,
    books,
    setBooks,
    bookCategory,
    setBookCategory,
  } = props;

  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [checked, setChecked] = useState([]);
  const selectedCollections = ["bestSeller", "newReleases", "carousel", "employeeRecommendations"];

  const fetchBooks = async () => {
    const results = [];

    for (const collectionName of selectedCollections) {
      const collectionRef = collection(db, collectionName);

      const queryTitle = query(collectionRef, where("title", "==", searchQuery));
      const queryAuthor = query(collectionRef, where("author", "==", searchQuery));
      const queryId = query(collectionRef, where("id", "==", searchQuery));

      const [snapshotTitle, snapshotAuthor, snapshotId] = await Promise.all([
        getDocs(queryTitle),
        getDocs(queryAuthor),
        getDocs(queryId)
      ]);

      const resultsTitle = snapshotTitle.docs.map((doc) => ({
        collection: collectionName,
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
        description: doc.data().description,
        thumbnail: doc.data().thumbnail,
      }));

      const resultsAuthor = snapshotAuthor.docs.map((doc) => ({
        collection: collectionName,
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
        description: doc.data().description,
        thumbnail: doc.data().thumbnail,
      }));

      const resultsId = snapshotId.docs.map((doc) => ({
        collection: collectionName,
        id: doc.id,
        title: doc.data().title,
        author: doc.data().author,
        description: doc.data().description,
        thumbnail: doc.data().thumbnail,
      }));

      results.push(...resultsTitle, ...resultsAuthor, ...resultsId);
    }

    setSearchResults(results);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery, selectedCollections]);

  const deleteBook = async (bookId) => {
    for (const collectionName of selectedCollections) {
      await deleteDoc(doc(db, collectionName, bookId));
    }
    fetchBooks();
  };

  const handleSearch = () => {
    fetchBooks();
  };

  const handleCheck = (event, bookId) => {
    if (event.target.checked) {
      setChecked((prevChecked) => [...prevChecked, bookId]);
    } else {
      setChecked((prevChecked) => prevChecked.filter((id) => id !== bookId));
    }
  };

  const handleDelete = async () => {
    for (const collectionName of selectedCollections) {
      const checkedBooks = searchResults.filter((result) =>
        checked.includes(result.id) && result.collection === collectionName
      );

      for (const book of checkedBooks) {
        await deleteDoc(doc(db, collectionName, book.id));
      }
    }

    setChecked([]);
    fetchBooks();
  };

  return (
    <div>
      <Navigation
        name={name}
        setName={setName}
        verified={verified}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
        signOn={signOn}
        setSignOn={setSignOn}
        displayCart={displayCart}
        setDisplayCart={setDisplayCart}
        users={users}
        setUsers={setUsers}
        search={search}
        setSearch={setSearch}
        books={books}
        setBooks={setBooks}
        bookCategory={bookCategory}
        setBookCategory={setBookCategory}
      />
      <LogonForm
        signOn={signOn}
        setSignOn={setSignOn}
        setVerified={setVerified}
        employee={employee}
        setEmployee={setEmployee}
        users={users}
        setUsers={setUsers}
      />
      <h1>Delete Books</h1>

      <ul>
        {selectedCollections.map((collectionName) => (
          <li key={collectionName}>
            <button onClick={() => fetchBooks(collectionName)}>
              {collectionName}
            </button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((book) => (
          <li key={book.id}>
            <input
              type="checkbox"
              checked={checked.includes(book.id)}
              onChange={(e) => handleCheck(e, book.id)}
            />
            <span>{book.title}</span>
            <span>{book.author}</span>
            <span>{book.description}</span>
            <img src={book.thumbnail} alt={book.title} /> 
          </li>
        ))}
      </ul>

      <button onClick={handleDelete}>Delete Selected</button>
    </div>
  );
};

export default DeleteBooks;