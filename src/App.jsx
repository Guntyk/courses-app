import CreateCourse from "./components/Main/CreateCourse/CreateCourse";
import Registration from "./components/Auth/Registration/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import Courses from "./components/Main/Courses/Courses";
import NotFound from "./components/NotFound/NotFound";
import { useCoursesContext } from "./context/Courses";
import Login from "./components/Auth/Login/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Route exact path="/registration">
        <Registration />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <RequireAuthRoute>
        <Switch>
          <Route exact path="/">
            <Redirect to="/courses" />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/courses/add">
            <CreateCourse />
          </Route>
          <Route>
            <NotFound />
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
