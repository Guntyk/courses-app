import { useCoursesContext } from "../../context/Courses";
import { Link, useHistory } from "react-router-dom";
import Button from "../../common/Button/Button";
import Input from "../../common/Input/Input";
import "./Registration.css";

export default function Registration() {
  const history = useHistory();
  const { user, register, setUser } = useCoursesContext();
  function handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: e.target.name.value.trim(),
      email: e.target.email.value.trim(),
      password: e.target.password.value.trim(),
    };
    register(user);
    console.log(register(user));
    setUser(user);
    e.target.name.value = "";
    // history.replace("/");
  }

  // if (user) {
  //   history.goBack();
  // }

  return (
    <div className="column">
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
