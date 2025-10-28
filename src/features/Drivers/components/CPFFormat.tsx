import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const CPFFormatCustom = forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        getInputRef={ref}
        format="###.###.###-##"
        mask={['_']}
      />
    );
  }
);

export const CPFFormat = () => {
  return (
    <TextField
      label="CPF"
      name='cpf'
      variant="outlined"
      InputProps={{
        inputComponent: CPFFormatCustom as any,
      }}
    />
  );
};