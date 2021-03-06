import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
Inputfield.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function Inputfield(props) {
  const { form, name, label, disabled } = props;
  const { errors, formState } = form;
  const hasErrors = formState.touched[name] && errors[name];
  console.log(!!hasErrors);
  return (
    <Controller
      name={name}
      control={form.control}
      as={TextField}
      fullWidth
      label={label}
      disabled={disabled}
      error={!!hasErrors}
      helperText={errors[name]?.message}
    />
  );
}

export default Inputfield;
