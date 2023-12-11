import { UserRole } from '../models/UserRoles';
import { CreateProductScreen } from '../screens/products/CreateUpdateProduct';
import { EditProductScreen } from '../screens/products/EditProduct';

export const sellerRoutes = [
  {
    path: '/create-product',
    ele: <CreateProductScreen />,
    availability: [UserRole.SELLER],
  },
  {
    path: '/update-product/:id',
    ele: <CreateProductScreen />,
    availability: [UserRole.SELLER],
  },
];
