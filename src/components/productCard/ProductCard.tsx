import { Grid, Typography, Skeleton } from '@mui/material';

import { ReactNode } from 'react';

import { StyledCardMedia, StyledCard, StyledCardContent, StyledCardActions } from './styles';
import { Product } from '../../models/Product';

interface IPersonaCardProps {
  image: string;
  content: Product;
  actionBar?: ReactNode;
}

export const ProductCard = (props: IPersonaCardProps) => {
  const { image, content, actionBar } = props;
  return (
    <StyledCard>
      {image ? (
        <StyledCardMedia
          // @ts-ignore
          component="img"
          src={image}
          title={`product ${content.id}`}
        />
      ) : (
        <Skeleton variant="rectangular" height={118} />
      )}
      <StyledCardContent>
        <Typography gutterBottom variant="subtitle3" component="div">
          {content.name}
        </Typography>
        <Typography gutterBottom variant="label3" component="div">
          Price: {content.cost}
        </Typography>
        <Grid mt={2} container>
          <Typography variant="body2">Availability: {content.amountAvailable}</Typography>
        </Grid>
      </StyledCardContent>
      {actionBar && <StyledCardActions>{actionBar}</StyledCardActions>}
    </StyledCard>
  );
};
