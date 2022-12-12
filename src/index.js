import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { CoursesProvider } from './context/Courses';
import App from './App';
import './index.css';
import { Auth } from './hoc/Auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CoursesProvider>
        <Auth>
          <App />
        </Auth>
      </CoursesProvider>
    </BrowserRouter>
  </Provider>
);
