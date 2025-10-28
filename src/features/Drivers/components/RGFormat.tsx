import { TextField } from '@mui/material';
import { PatternFormat } from 'react-number-format';
import { forwardRef } from 'react';

const RGFormatCustom = forwardRef<HTMLInputElement, any>(
  (props, ref) => {
    return (
      <PatternFormat
        {...props}
        getInputRef={ref}
        format="# ###.###"
        mask={['_']}
      />
    );
  }
);

export const RGFormat = () => {
  return (
    <TextField
      label="RG"
      name='rg'
      variant="outlined"
      InputProps={{
        inputComponent: RGFormatCustom as any,
      }}
    />
  );
};