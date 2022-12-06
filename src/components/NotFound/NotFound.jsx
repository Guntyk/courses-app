import { Link } from "react-router-dom";
import './NotFound.css'

export default function NotFound() {
  return (
    <>
      <h1>This page does not exist :(</h1>
      <Link to="/courses" className="home-link">Go to main page</Link>
    </>
  );
}
