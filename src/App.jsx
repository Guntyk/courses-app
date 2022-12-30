import CreateCourse from './components/Main/CreateCourse/CreateCourse';
import Registration from './components/Auth/Registration/Registration';
import CourseInfo from './components/Main/CourseInfo/CourseInfo';
import { Switch, Route, Redirect } from 'react-router-dom';
import Courses from './components/Main/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Auth/Login/Login';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/courses">
            <Courses />
          </Route>
          <Route exact path="/courses/add">
            <CreateCourse />
          </Route>
          <Route exact path="/courses/:courseId">
            <CourseInfo />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
