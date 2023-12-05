import { UserRole } from '../models/UserRoles';
// @ts-ignore
import { DashboardScreen } from '../screens/dashboard/Dashboard';

export const commonRoutes = [
  {
    path: '/dashboard',
    ele: <DashboardScreen />,
    availability: [UserRole.SELLER, UserRole.BUYER],
  },
];
