import { CardMedia, Card, CardActions } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledCardMedia = styled(CardMedia)(({ theme }) => {
  return {
    maxHeight: '150px',
    backgroundColor: theme.palette.nude.main,
    height: '100%',
    width: 'auto',
    margin: '0 auto',
  };
});

export const StyledCard = styled(Card)(({ theme }) => {
  return {
    maxWidth: '200px',
    minWidth: '180px',
    borderRadius: theme.spacing(1.5),
    border: `1px solid ${theme.palette.primary.dark}`,
    boxShadow: `${theme.spacing(0, 1, 4, 0)} rgba(72, 115, 175, 0.16)`,
  };
});

export const StyledCardContent = styled(Card)(({ theme }) => {
  return {
    padding: theme.spacing(2),
    '& svg': {
      fontSize: '20px',
      marginRight: theme.spacing(1),
    },
  };
});

export const StyledCardActions = styled(CardActions)(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
  };
});
