import CreateCourse from "./components/CreateCourse/CreateCourse";
import Registration from "./components/Registration/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { useCoursesContext } from "./context/Courses";

function App() {
  return (
    <div className="container">
      <Header />
      <Route path="/registration">
        <Registration />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <RequireAuthRoute>
        <Switch>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/create-course">
            <CreateCourse />
          </Route>
        </Switch>
      </RequireAuthRoute>
    </div>
  );
}

export default App;

function RequireAuthRoute({ children }) {
  const { token } = useCoursesContext();
  if (!token) {
    return <Redirect to="/login" />;
  }
  return children;
}
