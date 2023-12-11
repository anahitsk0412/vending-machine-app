import { Box } from '@mui/material';
import React, { ReactNode } from 'react';

import { StyledBox, StyledContainer } from './styles';

interface AuthContainerProps {
  children: ReactNode;
}

export const AuthContainer = ({ children }: AuthContainerProps) => {
  return (
    <StyledContainer maxWidth="xs">
      <StyledBox component="div">
        <Box display={'flex'} justifyContent={'center'}>
          <img src={'vendyma-logo.png'} width={'75px'} height={'75px'} alt={'vendyma logo'} />
        </Box>
        {children}
      </StyledBox>
    </StyledContainer>
  );
};
