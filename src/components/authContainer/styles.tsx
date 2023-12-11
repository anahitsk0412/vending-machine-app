import { Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledContainer = styled(Container)(() => {
  return {
    display: 'flex',
    height: '80vh',
    alignItems: 'center',
  };
});

export const StyledBox = styled(Box)(() => {
  return {
    '& .MuiTextField-root': {
      margin: '10px',
      width: '300px',
      flexDirection: 'column',
    },
    '& form': {
      display: 'flex',
      flexDirection: 'column',
    },
  };
});
