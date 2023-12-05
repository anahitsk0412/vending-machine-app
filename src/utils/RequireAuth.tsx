import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import useAuth from './useAuth';
// @ts-ignore
const RequireAuth = ({ children, userRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();
  // @ts-ignore
  const { auth } = useAuth();

  useEffect(() => {
    let currentUser;
    if (auth) {
      currentUser = auth || {};
    }

    if (currentUser) {
      if (currentUser.role) {
        if (userRoles.includes(currentUser.role)) {
          navigate(location.pathname);
        } else {
          navigate('/dashboard');
        }
      } else {
        return children;
      }
    } else {
      location.pathname = '/login';
      return navigate('/login');
    }
  }, [children, location.pathname, navigate, userRoles]);
  return children;
};
export default RequireAuth;
