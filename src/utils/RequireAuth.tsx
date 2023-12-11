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
    const currentUser = JSON.parse(localStorage.getItem('vendymaUser') || '{}');

    if (currentUser?.username) {
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
      return navigate('/login');
    }
  }, [children, location.pathname, navigate, userRoles]);
  return children;
};
export default RequireAuth;
