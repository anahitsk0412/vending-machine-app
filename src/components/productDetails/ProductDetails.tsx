import { Stack, Typography } from '@mui/material';

import { QuantityInput } from './IncrementDecrement';
import { Product } from '../../features/productSlice';

interface ProductDetailsProps {
  handleQuantityChange: (e: EventTarget, val: number | undefined) => void;
  product: Product;
  total: number;
}

export const ProductDetails = (props: ProductDetailsProps) => {
  const { product, handleQuantityChange, total } = props;
  return (
    <Stack>
      <Typography gutterBottom variant="h5" component="div">
        {product.name}
      </Typography>
      <Typography gutterBottom variant="subtitle3" component="div">
        Price: {product.cost}
      </Typography>
      <Typography gutterBottom variant="body1" component="div">
        In Stock: {product.amountAvailable}
      </Typography>
      <QuantityInput max={product.amountAvailable} onChange={handleQuantityChange} />
      <hr />
      <Typography gutterBottom variant="subtitle2" component="div">
        Total Cost: {total}
      </Typography>
    </Stack>
  );
};
