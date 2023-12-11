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
    if (auth?.username) {
      if (auth.role) {
        if (userRoles.includes(auth.role)) {
          navigate(location.pathname);
        } else {
          navigate('/dashboard');
        }
      } else {
        return children;
      }
    } else {
      return navigate('/login');
    }
  }, [children, location.pathname, navigate, userRoles]);
  return children;
};
export default RequireAuth;
