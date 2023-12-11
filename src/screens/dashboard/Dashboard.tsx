import { Button, Grid } from '@mui/material';

import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { ProductCard } from '../../components/productCard/ProductCard';
import { getProductList, productSelector } from '../../features/productSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';
export const DashboardScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProductList());
  }, []);

  const handleBuy = (productId: number) => {
    navigate(`/selected-product/${productId}`);
  };

  const handleAddProduct = () => navigate(`/add-product`);

  return (
    <Grid container justifyContent="center">
      <Grid sx={{ mt: 2, mb: 2 }} container spacing={3}>
        <Grid container justifyContent="flex-end">
          <Button variant="contained" onClick={handleAddProduct}>
            Add Product
          </Button>
        </Grid>
        {productData?.products.map((product) => {
          return (
            <Grid item md={3} key={product.id} sx={{ minWidth: '200px' }}>
              <ProductCard
                //TODO: Should be fixed with real images when image uploader is integrated
                image={`${product.name.replace(' ', '-')}.png`}
                content={product}
                actionBar={
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleBuy(product.id);
                    }}
                  >
                    Buy
                  </Button>
                }
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
