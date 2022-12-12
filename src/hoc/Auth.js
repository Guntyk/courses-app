import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const unauthPaths = ['/login', '/registration'];

export function Auth({ children }) {
  const token = window.localStorage.getItem('userToken');
  const { pathname } = useLocation();
  const { replace } = useHistory();
  useEffect(() => {
    if (!token && !unauthPaths.includes(pathname)) {
        replace('/login')
        return
    }
    if (token && unauthPaths.includes(pathname)) {
        replace('/courses')
        return
    }
  }, []);

  return <>{children}</>;
}
