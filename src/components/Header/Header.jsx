import { useCoursesContext } from "../../context/Courses";
import Button from "../../common/Button/Button";
import Logo from "./components/Logo/Logo";
import "./Header.css";

export default function Header() {
  const { user, logout, token } = useCoursesContext();

  return (
    <header className="header">
      <Logo />
      {token && (
        <div className="user-info">
          <span className="user-name">{user.name}</span>
          <Button buttonText="Logout" onClick={logout} />
        </div>
      )}
    </header>
  );
}
