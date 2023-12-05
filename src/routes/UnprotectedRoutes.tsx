import { LoginScreen } from '../screens/users/Login';
import { RegisterScreen } from '../screens/users/Register';

export const authRoutes = [
  {
    path: '/',
    ele: <LoginScreen></LoginScreen>,
  },
  {
    path: '/login',
    ele: <LoginScreen></LoginScreen>,
  },
  {
    path: '/register',
    ele: <RegisterScreen></RegisterScreen>,
  },
];
