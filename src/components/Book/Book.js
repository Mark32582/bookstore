import { useParams } from "react-router-dom";
import { googleBooks } from "../../config/googlebooks";
import axios from "axios";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

const Book = (props) => {
  const { bookId } = useParams();
  const api = googleBooks?.key;
  const [currentBook, setCurrentBook] = useState();
  const {} = props;

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=id:${bookId}&key=${api}`
      )
      .then((res) => setCurrentBook(res?.data?.items))
      .catch((err) => console.log(err));
  }, [api, bookId]);

  console.log(currentBook);
  return <Navigation />;
};
export default Book;
