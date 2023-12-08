import { UserRole } from '../models/UserRoles';
import { OrderProductScreen } from '../screens/order/Order';
import { SelectedProductScreen } from '../screens/products/SelectedProduct';

export const buyerRoutes = [
  {
    path: '/selected-product/:id',
    ele: <SelectedProductScreen />,
    availability: [UserRole.BUYER],
  },
  {
    path: '/order',
    ele: <OrderProductScreen />,
    availability: [UserRole.BUYER],
  },
];
