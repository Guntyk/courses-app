import { userSelector } from "../../redux/userData/selectors";
import { getUser, logout } from "../../redux/userData/thunk";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../common/Button/Button";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import Logo from "./Logo/Logo";
import "./Header.css";

export default function Header() {
  const token = window.localStorage.getItem("userToken");
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (token) dispatch(getUser());
  }, []);

  return (
    <header className="header">
      <div className="wrapper">
        <Logo />
        {token && (
          <div className="user-info">
            <span className="user-name">
              {user.name || JSON.parse(window.localStorage.getItem("username"))}
            </span>
            <Button
              className="btn-secondary logout-btn"
              buttonText="Logout"
              onClick={() => {
                dispatch(logout(token, history));
              }}
            />
          </div>
        )}
      </div>
    </header>
  );
}
