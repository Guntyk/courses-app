import { logoutUser } from "../../api/requests";
import Button from "../../common/Button/Button";
import { useHistory } from "react-router-dom";
import { useCoursesContext } from "../../context/Courses";
import Logo from "./components/Logo/Logo";
import "./Header.css";

export default function Header() {
  const auth = useCoursesContext();
  const history = useHistory();

  function handleLogout() {
    logoutUser();
    auth.logOut();
    history.replace("/");
  }

  return (
    <header className="header">
      <Logo />
      {auth.user && (
        <div className="user-info">
          <span className="user-name">{auth.user.name}</span>
          <Button buttonText="Logout" onClick={handleLogout} />
        </div>
      )}
    </header>
  );
}
