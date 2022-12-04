import { useCoursesContext } from "../../context/Courses";
import { Link, useHistory } from "react-router-dom";
import { registerUser } from "../../api/requests";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Registration.css";

export default function Registration({ setUser }) {
  const history = useHistory();
  const auth = useCoursesContext();
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim()
    };
    registerUser(user)
    setUser(user);
    auth.logIn(user);
    e.target.name.value = "";
    history.replace("/");
  }

  if (auth.user) {
    history.goBack();
  }

  return (
    <div className="column">
      <form className="registration" onSubmit={handleSubmit}>
        <h1 className="title">Registration</h1>
        <Input
          labelText="Name"
          placeholderText="Enter name"
          name="name"
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
          required
        />
        <Button
          className="registration-btn"
          buttonText="Registration"
          type="submit"
          required
        />
      </form>
      <span className="login-link">
        If you have an account you can <Link to="/login">Login</Link>
      </span>
    </div>
  );
}
