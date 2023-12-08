import { Button, Grid, Paper, styled, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ManageBalance } from '../../components/manageBalance/ManageBalance';
import { ProductDetails } from '../../components/productDetails/ProductDetails';
import { Product, productSelector } from '../../features/productSlice';
import { userSelector, addUserDeposit } from '../../features/userSlice';
import { useAppDispatch, useAppSelector } from '../../utils/Reduxhooks';

export const SelectedProductScreen = () => {
  const productData = useAppSelector(productSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [total, setTotal] = useState<number>(1);
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    const product = productData.products.filter((item) => item.id === parseInt(id!));
    if (product.length) {
      setSelectedProduct(product[0]);
    }
  }, []);
  const handleQuantityChange = (e: EventTarget, val: number | undefined) => {
    const totalCost = val! * (selectedProduct?.cost || 0);
    setTotal(totalCost);
  };

  const handleOrder = () => navigate('/order');
  const addDeposit = (deposit: number) => {
    console.log(deposit);
    dispatch(addUserDeposit(deposit));
    // if (total > user?.deposit!) {
    //   navigate('/deposit');
    // }
  };

  const handleWithdraw = () => {};

  // @ts-ignore
  return (
    <Grid container spacing={2} mt={4} justifyContent={'space-between'}>
      <Grid item xs={12} md={7}>
        <Item>
          {selectedProduct && (
            <ProductDetails
              product={selectedProduct}
              handleQuantityChange={handleQuantityChange}
              total={total}
            />
          )}
        </Item>
      </Grid>
      <Grid item xs={12} md={4}>
        <Item>
          <ManageBalance
            deposit={user?.deposit ?? 0}
            addDeposit={addDeposit}
            withdrawDeposit={handleWithdraw}
          />
        </Item>
      </Grid>
      <Grid container justifyContent={'center'} mt={5}>
        <Button variant="contained" onClick={handleOrder} disabled={(user?.deposit ?? 0) < total}>
          Order
        </Button>
      </Grid>
    </Grid>
  );
};

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
