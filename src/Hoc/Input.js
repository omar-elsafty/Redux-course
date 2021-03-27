import React from 'react';
import { TextField } from '@material-ui/core';
import withValidation from './withValidation';

const Input = ({ label, data, error, handleChange, variant = "outlined", type = 'text' }) => {
    return (
        <TextField
            error={error}
            label={label}
            helperText={error}
            value={data}
            fullWidth
            size="small"
            margin="normal"
            variant={variant}
            type={type}
            onChange={handleChange}
        />
    )
}

export default withValidation(Input);