import { useLocation, useNavigate } from 'react-router-dom';

import { productSelector } from '../../features/productSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';

export const SelectedProductScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  {
    console.log(productData);
    JSON.stringify(productData);
  }
  return (
    <div>
      <p>src/screens/SelectedProductScreen.tsx</p>
      <p>{JSON.stringify(productData.selectedProduct)}</p>
    </div>
  );
};
