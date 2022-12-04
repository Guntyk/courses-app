import CreateCourse from "./components/CreateCourse/CreateCourse";
import Registration from "./components/Registration/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import { useCoursesContext } from "./context/Courses";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="container">
      <Header />
      <Switch>
        <RequireAuthRoute exact path="/">
          <Courses />
        </RequireAuthRoute>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/create-course">
          <CreateCourse />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function RequireAuthRoute({ children }) {
  const { user } = useCoursesContext()
  console.log(user)
  if (!user) {
    return <Redirect to="/login" />;
  }

  return children;
}
