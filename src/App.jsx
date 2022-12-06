import CreateCourse from "./components/Main/CreateCourse/CreateCourse";
import Registration from "./components/Auth/Registration/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import { useCoursesContext } from "./context/Courses";
import Courses from "./components/Main/Courses/Courses";
import Header from "./components/Header/Header";
import Login from "./components/Auth/Login/Login";

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
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route path="/courses/add">
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
  if (!token) return <Redirect to="/login" />;
  return children;
}
