import { Button, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
interface ManageBalanceProps {
  deposit: number;
  addDeposit: (deposit: number) => void;
  withdrawDeposit: () => void;
}

const possiblePaymentOptions = [5, 10, 20, 50, 100];

export const ManageBalance = (props: ManageBalanceProps) => {
  const [showWithdraw, setShowWithdraw] = useState<boolean>(false);
  const { deposit, addDeposit, withdrawDeposit } = props;

  const handleAddDeposit = (deposit: number) => {
    addDeposit(deposit);
  };

  const handleWithdrawDeposit = () => {
    setShowWithdraw(true);
  };

  return (
    <Grid justifyContent={'space-between'}>
      <Typography gutterBottom variant="h5" component="div">
        Current deposit: {deposit}
      </Typography>
      {!showWithdraw && (
        <>
          <Button variant="contained" onClick={handleWithdrawDeposit}>
            Withdraw
          </Button>
        </>
      )}
      <>
        <hr />
        <Typography gutterBottom variant="subtitle2" component="div">
          Payment oprions:
        </Typography>
        <Grid>
          {possiblePaymentOptions.map((item) => (
            <Button key={item} onClick={() => handleAddDeposit(item)}>
              {item}
            </Button>
          ))}
        </Grid>
      </>
    </Grid>
  );
};
