import { createAuthor, getAuthors } from "../api/requests";
import { useState, useEffect } from "react";

export function useAuthors() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then(([authorsErr, authors]) => {
      if (authors) {
        setAuthors(authors.result);
      } else {
        console.log(authorsErr);
        alert("Getting authors error");
      }
    });
  }, []);

  const addAuthor = (authorObj) => {
    createAuthor(authorObj).then(([createAuthorError, createdAuthor]) => {
      if (createdAuthor) {
        setAuthors((prevAuthors) => [...prevAuthors, authorObj]);
      } else {
        console.log(createAuthorError);
        alert("Creating author error");
      }
    });
  };

  return authors, addAuthor, setAuthors;
}
