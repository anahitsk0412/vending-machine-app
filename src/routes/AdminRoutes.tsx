import { UserRole } from '../models/UserRoles';
import { UpdateUserScreen } from '../screens/users/UpdateUser';
import { UserListScreen } from '../screens/users/UserList';

export const adminRoutes = [
  {
    path: '/users',
    ele: <UserListScreen />,
    availability: [UserRole.ADMIN],
  },
  {
    path: '/update-user',
    ele: <UpdateUserScreen />,
    availability: [UserRole.ADMIN],
  },
];
