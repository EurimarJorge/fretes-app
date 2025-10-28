import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const FoneFormatCustom = forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        getInputRef={ref}
        format="(##)#####-####"
        mask={['_']}
      />
    );
  }
);

export const FoneFormat = () => {
  return (
    <TextField
      label="Fone"
      name='phone'
      variant="outlined"
      InputProps={{
        inputComponent: FoneFormatCustom as any,
      }}
    />
  );
};