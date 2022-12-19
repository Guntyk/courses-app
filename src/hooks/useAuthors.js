import { createAuthorFetch, getAuthorsFetch } from "../api/requests";
import { useState, useEffect } from "react";

export function useAuthors() {
  const [authors, setAuthors] = useState([]);


  return authors, setAuthors;
}
