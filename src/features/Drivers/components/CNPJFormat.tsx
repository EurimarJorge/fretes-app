import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const CNPJFormatCustom = forwardRef<HTMLInputElement, any>(
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

export const CNPJFormat = () => {
  return (
    <TextField
      label="CNPJ"
      name='cnpj'
      variant="outlined"
      InputProps={{
        inputComponent: CNPJFormatCustom as any,
      }}
    />
  );
};