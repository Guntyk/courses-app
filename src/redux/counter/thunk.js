import { incrementCounter } from "./actionCreators"


export function sdjkfThunk() {
    return async (dispatch) => {
        createAuthor(authorObj).then(([createAuthorError, createdAuthor]) => {
            if (createdAuthor) {
                dispatch(addAuthor(createdAuthor))
            } else {
              console.log(createAuthorError);
              alert("Creating author error");
            }
          });
        
    }
}