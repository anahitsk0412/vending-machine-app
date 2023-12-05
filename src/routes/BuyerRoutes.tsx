import { UserRole } from '../models/UserRoles';
import { DepositScreen } from '../screens/deposit/Deposit';
import { OrderProductScreen } from '../screens/deposit/Order';
import { SelectedProductScreen } from '../screens/products/SelectedProduct';

export const buyerRoutes = [
  {
    path: '/selected-product',
    ele: <SelectedProductScreen />,
    availability: [UserRole.BUYER],
  },
  {
    path: '/deposit',
    ele: <DepositScreen />,
    availability: [UserRole.BUYER],
  },
  {
    path: '/order',
    ele: <OrderProductScreen />,
    availability: [UserRole.BUYER],
  },
];
