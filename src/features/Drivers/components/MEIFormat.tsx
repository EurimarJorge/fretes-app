import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const MEIFormatCustom = forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        getInputRef={ref}
        format="##.###.###/####-##"
        mask={['_']}
      />
    );
  }
);

export const MEIFormat = () => {
  return (
    <TextField
      label="MEI"
      name='mei'
      variant="outlined"
      InputProps={{
        inputComponent: MEIFormatCustom as any,
      }}
    />
  );
};