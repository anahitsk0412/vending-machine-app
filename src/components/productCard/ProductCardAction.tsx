import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { User } from '../../models/User';
import { UserRole } from '../../models/UserRoles';

interface ProductCardActionProps {
  productId: number;
  sellerId: number;
  user: User;
  handleDelete: (id: number) => void;
}
export const ProductCardAction = ({
  productId,
  user,
  handleDelete,
  sellerId,
}: ProductCardActionProps) => {
  const navigate = useNavigate();

  if (user.role === UserRole.BUYER) {
    return (
      <Button
        variant="contained"
        onClick={() => {
          navigate(`/selected-product/${productId}`);
        }}
      >
        Buy
      </Button>
    );
  }

  if (user.role === UserRole.SELLER && user.id === sellerId) {
    return (
      <>
        <Button
          variant="contained"
          onClick={() => {
            navigate(`/update-product/${productId}`);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleDelete(productId);
          }}
        >
          Delete
        </Button>
      </>
    );
  }
  return null;
};
