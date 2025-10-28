import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const CepFormatCustom = forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        getInputRef={ref}
        format="##.###-###"
        mask={['_']}
      />
    );
  }
);

export const CepFormat = () => {
  return (
    <TextField
      label="CEP"
      name='zipCode'
      variant="outlined"
      InputProps={{
        inputComponent: CepFormatCustom as any,
      }}
    />
  );
};