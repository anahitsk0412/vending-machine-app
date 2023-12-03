import { PrivateLayout } from 'components/layouts/private';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RedirectFunction,
  Routes,
} from 'react-router-dom';

import { DashboardScreen } from './screens/dashboard';
import { LoginScreen } from 'screens/login';
import { OrdersScreen } from 'screens/orders';
import { RegisterScreen } from 'screens/register';

import { AuthRequired } from './AuthRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { path: '/', element: <DashboardScreen />, index: true },
      { path: '/dashboard', element: <DashboardScreen /> },
      { path: '/orders', element: <OrdersScreen /> },
      { path: '/orders/:id', element: <OrdersScreen /> },
    ],
  },
  { path: '/login', element: <LoginScreen /> },
  { path: '/register', element: <RegisterScreen /> },
]);
