import { createAuthorFetch, getAuthorsFetch } from "../../api/requests";
import { getAuthorsAction, createAuthorAction } from "./actionCreators";

export function fetchAuthors() {
  return (dispatch) => {
    getAuthorsFetch().then(([authorsErr, authors]) => {
      if (authors) {
        dispatch(getAuthorsAction(authors.result));
      } else {
        console.log(authorsErr);
        alert("Getting authors error");
      }
    });
  };
}

export function createAuthor(authorObj, token) {
  return (dispatch) => {
    createAuthorFetch(authorObj, token).then(([createAuthorError, createdAuthor]) => {
      if (createdAuthor) {
        dispatch(createAuthorAction(createdAuthor.result));
      } else {
        console.log(createAuthorError);
        alert("Creating author error");
      }
    });
  };
}
