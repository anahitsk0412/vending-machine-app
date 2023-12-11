import { UserRole } from '../models/UserRoles';
import { CreateUpdateProductScreen } from '../screens/products/CreateUpdateProduct';

export const sellerRoutes = [
  {
    path: '/create-product',
    ele: <CreateUpdateProductScreen />,
    availability: [UserRole.SELLER],
  },
  {
    path: '/update-product/:id',
    ele: <CreateUpdateProductScreen />,
    availability: [UserRole.SELLER],
  },
];
