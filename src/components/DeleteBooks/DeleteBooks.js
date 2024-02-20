import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config/fireBaseConfig";
import Navigation from "../Navigation/Navigation";
import LogonForm from "../LogonForm/LogonForm";
import HomePage from "../HomePage/HomePage";
import AdminDashboard from "../AdminDashboard/Dashboard";
import Cart from "../Cart/Cart";
import Carousel from "../Carousel/Carousel";


const fetchCollection = async (collectionName, setSearchResults) => {
  // const collectionRef = collection(db, collectionName);
  // const querySnapshot = await getDocs(collectionRef);
  // const results = querySnapshot.docs.map((doc) => ({
  //   collection: collectionName,
  //   id: doc.id,
  //   title: doc.data().title,
  //   author: doc.data().author,
  //   description: doc.data().description,
  //   thumbnail: doc.data().thumbnail,
  // }));
  // setSearchResults(results);
};

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
      // const collectionRef = collection(db, collectionName);

      // const queryTitle = query(collectionRef, where("title", "==", searchQuery));
      // const queryAuthor = query(collectionRef, where("author", "==", searchQuery));
      // const queryId = query(collectionRef, where("id", "==", searchQuery));

      // const [snapshotTitle, snapshotAuthor, snapshotId] = await Promise.all([
      //   getDocs(queryTitle),
      //   getDocs(queryAuthor),
      //   getDocs(queryId)
      // ]);

      // const resultsTitle = snapshotTitle.docs.map((doc) => ({
      //   collection: collectionName,
      //   id: doc.id,
      //   title: doc.data().title,
      //   author: doc.data().author,
      //   description: doc.data().description,
      //   thumbnail: doc.data().thumbnail,
      // }));

      // const resultsAuthor = snapshotAuthor.docs.map((doc) => ({
      //   collection: collectionName,
      //   id: doc.id,
      //   title: doc.data().title,
      //   author: doc.data().author,
      //   description: doc.data().description,
      //   thumbnail: doc.data().thumbnail,
      // }));

      // const resultsId = snapshotId.docs.map((doc) => ({
      //   collection: collectionName,
      //   id: doc.id,
      //   title: doc.data().title,
      //   author: doc.data().author,
      //   description: doc.data().description,
      //   thumbnail: doc.data().thumbnail,
      // }));

      // results.push(...resultsTitle, ...resultsAuthor, ...resultsId);
    }

    setSearchResults(results);
  };

  useEffect(() => {
    fetchBooks();
  }, [searchQuery, selectedCollections]);

  const deleteBook = async (bookId) => {
    for (const collectionName of selectedCollections) {
      // await deleteDoc(doc(db, collectionName, bookId));
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
        // await deleteDoc(doc(db, collectionName, book.id));
      }
    }


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
      <Cart cart={displayCart} books={books} setBooks={setBooks} />
      {employee === true ? (
        <AdminDashboard users={users} books={books} setBooks={setBooks} />
      ) : (
        <div className="carousel-container">
          <Carousel
            search={search}
            setSearch={setSearch}
            books={books}
            setBooks={setBooks}
          />
        </div>
      )}
          
      <h1>Delete Books</h1>

      <ul>
        {selectedCollections.map((collectionName) => (
          <li key={collectionName}>
          <label>
            <input
              type="radio"
              name="collection"
              value={collectionName}
              onChange={() => fetchBooks(collectionName)}
            />
            {collectionName}
          </label>
        </li>
        ))}
      </ul>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title, author, or ID"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults?.map((book) => (
          <li key={book.id}>
        {searchResults?.map((result) => (
          <li key={result.id}>
            <input
              type="checkbox"
              onChange={(e) => handleCheck(e, result.id)}
              checked={checked.includes(result.id)}
            />
            <img src={book.thumbnail} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.description}</p>
          </li>
        ))}

          </li>
      ))}
      </ul>
      {checked.length > 0 && (
        <button onClick={handleDelete}>Delete Selected Books</button>
      )}
      <button onClick={() => navigate("/")}>Go back</button>
   </div>
  );
}};

export default DeleteBooks;