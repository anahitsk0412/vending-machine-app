import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// @ts-ignore
const RequireAuth = ({ children, userRoles }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let currentUser;
    if (localStorage.getItem('vendymaUser')) {
      currentUser = JSON.parse(localStorage.getItem('vendymaUser') || '{}');
    }

    console.log('asdkasndlasndlnas', currentUser);

    if (currentUser) {
      if (currentUser.role) {
        if (userRoles.includes(currentUser.role)) {
          navigate(location.pathname);
        } else {
          navigate('/dashboard');
          // return <Navigate to="/dashboard" />;
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
