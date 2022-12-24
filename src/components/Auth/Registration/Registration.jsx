import { register } from "../../../redux/userData/thunk";
import Button from "../../../common/Button/Button";
import { Link, Redirect, useHistory } from "react-router-dom";
import Input from "../../../common/Input/Input";
import { useDispatch } from "react-redux";
import "./Registration.css";

export default function Registration() {
  const token = window.localStorage.getItem("userToken");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
    };
    dispatch(register(user, history));
    e.target.name.value = "";
    e.target.email.value = "";
    e.target.password.value = "";
  }

  return (
    <>
      {token ? (
        <Redirect to="/courses" />
      ) : (
        <div className="auth-column">
          <form className="registration" onSubmit={handleSubmit}>
            <h1 className="title">Registration</h1>
            <Input
              labelText="Name"
              placeholderText="Enter name"
              name="name"
              minLength="2"
              required
            />
            <Input
              placeholderText="Enter email"
              labelText="Email"
              name="email"
              type="email"
              required
            />
            <Input
              placeholderText="Enter password"
              labelText="Password"
              name="password"
              type="password"
              minLength="6"
              required
            />
            <Button
              className="btn-primary registration-btn"
              buttonText="Registration"
              type="submit"
              required
            />
          </form>
          <span className="login-link">
            If you have an account you can <Link to="/login">Login</Link>
          </span>
        </div>
      )}
    </>
  );
}
