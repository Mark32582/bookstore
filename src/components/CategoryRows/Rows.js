import axios from "axios";
import { googleBooks } from "../../config/googlebooks";

const Rows = (props)=>{
    
    return(
        <div>
    {books &&
        books.map((book, i) => {
              return (
                <>
                  <div className="carousel--image">
                    <img
                      src={book?.volumeInfo?.imageLinks?.thumbnail}
                      width="200px"
                      alt=""
                    />
                  </div>
                  <div key={i} className="carousel--text">
                    <span><b>{book?.volumeInfo?.title}</b></span>         
                    <span><i>{book?.volumeInfo?.authors}</i></span>                
                    <div className="carousel--text__description"><p >{book?.volumeInfo?.description}</p></div>
                  </div>
                </>
              );
         
          }
    }
    </div>
    )}
export default Rows;