import {
  Unstable_NumberInput as BaseNumberInput,
  NumberInputProps,
} from '@mui/base/Unstable_NumberInput';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { styled } from '@mui/system';
import * as React from 'react';

interface QuantityInputProps {
  max: number;
  onChange: (e: EventTarget, val: number | undefined) => void;
}

const NumberInput = React.forwardRef(function CustomNumberInput(
  props: NumberInputProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
      onChange={props.onChange}
      min={1}
      max={props.max}
    />
  );
});

export const QuantityInput = (props: QuantityInputProps) => {
  // @ts-ignore
  return <NumberInput aria-label="Quantity Input" min={1} {...props} defaultValue={1} />;
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-weight: 400;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: grey;
  border: 1px solid grey;
  box-shadow: gba(0,0,0, 0.05);
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;
`
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    border-color: blue;
    color: grey;
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`
);
