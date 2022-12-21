import { useDispatch } from "react-redux";
import { fetchAuthors } from "../redux/authors/thunk";

// const dispatch = useDispatch();

export function useAuthors() {
  // function updateAuthors(setAuthorsList) {
  //   console.log("Update");
  //   dispatch(fetchAuthors());
  //   console.log(authors);
  //   setAuthorsList([].concat(authors));
  //   // setTimeout(() => {
  //   //   console.log(authors)
  //   // }, 1000);
  //   // clearTimeout()
  // }

  // return updateAuthors;
}
