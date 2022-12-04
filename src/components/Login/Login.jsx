import { Link } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Login.css";

export default function Login() {
  return (
    <div className="column">
      <form className="login">
        <h1 className="title">Login</h1>
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
          required
        />
        <Button className="login-btn" type="submit" buttonText="Login" />
      </form>
      <span className="registration-link">
        If you not have an account you can{" "}
        <Link to="/registration">Registration</Link>
      </span>
    </div>
  );
}
