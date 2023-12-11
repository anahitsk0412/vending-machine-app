import { Button, Grid } from '@mui/material';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ProductCard } from '../../components/productCard/ProductCard';
import { ProductCardAction } from '../../components/productCard/ProductCardAction';
import { deleteProduct, getProductList, productSelector } from '../../features/productSlice';
import { UserRole } from '../../models/UserRoles';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';
import useAuth from '../../utils/useAuth';
export const DashboardScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // @ts-ignore
  const { auth } = useAuth();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const handleBuy = (productId: number) => {
    navigate(`/selected-product/${productId}`);
  };

  const handleDelete = (productId: number) => {
    dispatch(deleteProduct(productId));
  };

  const handleAddProduct = () => navigate(`/create-product`);

  return (
    <Grid container justifyContent="center">
      <Grid sx={{ mt: 2, mb: 2 }} container spacing={3}>
        <Grid container justifyContent="flex-end">
          {auth.role === UserRole.SELLER && (
            <Button variant="contained" onClick={handleAddProduct}>
              Add Product
            </Button>
          )}
        </Grid>
        {productData?.products.map((product) => {
          return (
            <Grid item md={3} key={product.id} sx={{ minWidth: '200px' }}>
              <ProductCard
                //TODO: Should be fixed with real images when image uploader is integrated
                image={`${product.name.replace(' ', '-')}.png`}
                content={product}
                actionBar={
                  <ProductCardAction
                    productId={product.id}
                    user={auth}
                    handleDelete={handleDelete}
                    sellerId={product.sellerId}
                  />
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
