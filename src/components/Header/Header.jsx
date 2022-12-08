import { useCoursesContext } from "../../context/Courses";
import Button from "../../common/Button/Button";
import Logo from "./Logo/Logo";
import "./Header.css";

export default function Header() {
  const { user, logout, token } = useCoursesContext();

  return (
    <header className="header">
      <div className="wrapper">
        <Logo />
        {token && (
          <div className="user-info">
            <span className="user-name">{user.name}</span>
            <Button className="btn-secondary logout-btn" buttonText="Logout" onClick={logout} />
          </div>
        )}
      </div>
    </header>
  );
}
