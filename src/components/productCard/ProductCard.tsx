import { Button, Grid, CardActions, Typography, CardActionArea, Skeleton } from '@mui/material';

import { ReactNode } from 'react';

import { StyledCardMedia, StyledCard, StyledCardContent, StyledCardActions } from './styles';
import { Product } from '../../features/productSlice';

interface IPersonaCardProps {
  image: string;
  content: Product;
  actionBar?: ReactNode;
  selected?: boolean;
}

export const ProductCard = (props: IPersonaCardProps) => {
  const { image, content, actionBar, selected } = props;
  return (
    <StyledCard className={selected ? 'MuiCard-selected' : ''}>
      <CardActionArea sx={{ position: 'relative' }}>
        {image ? (
          <StyledCardMedia
            // @ts-ignore
            component="img"
            src={image}
            title={`persona ${content.id}`}
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
      </CardActionArea>
    </StyledCard>
  );
};
