import { Button, Chip, Grid, Typography } from '@mui/material';
import React from 'react';

interface ChangeListProps {
  change: number[];
  handleDoneChange: () => void;
}

export const ChangeList = (props: ChangeListProps) => {
  const { change, handleDoneChange } = props;
  return (
    <>
      <Typography gutterBottom variant="subtitle2" component="div">
        Take your charge:
        <Grid>
          {change.map((item, index) => (
            <Chip label={item} key={`${item}-${index}`} />
          ))}
        </Grid>
        <Grid mt={3}>
          <Button variant={'contained'} onClick={handleDoneChange}>
            Done
          </Button>
        </Grid>
      </Typography>
    </>
  );
};
