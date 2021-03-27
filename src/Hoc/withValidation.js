import React, { useState } from 'react';
import Joi from 'joi'

const withValidation = (WrappedComponent) => {

    const WithValidation = (props) => {
        let { data, setData, validation } = props;
        let [error, setError] = useState('')

        let validateInput = (value) => {
            let schema = Joi.object({ data: validation });
            let { error } = schema.validate({ data: value });
            if (error) return error.details[0].message
            return ''
        };

        let handleChange = ({ target: input }) => {
            let error = validateInput(input.value);
            setError(error);
            setData(input.value);
        };

        return (
            <WrappedComponent
                handleChange={handleChange}
                error={error}
                data={data}
                {...props}
            />
        );
    }

    return WithValidation
}

export default withValidation;