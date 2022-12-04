import CreateCourse from "./components/CreateCourse/CreateCourse";
import Registration from "./components/Registration/Registration";
import { Switch, Route, Redirect } from "react-router-dom";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import { useAuth } from "./helpers/auth";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="container">
      <Header />
      <Switch>
        <RequireAuthRoute exact path="/">
          <Courses />
        </RequireAuthRoute>
        <Route path="/registration">
          <Registration setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
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
  const auth = useAuth();

  if (!auth.user) {
    // return <Redirect to="/registration" />;
    // alert("Not allowed!");
    console.log("Not allowed!")
  }

  return children;
}
