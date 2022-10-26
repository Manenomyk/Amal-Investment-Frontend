import React from 'react'
import { ErrorMessage, useField } from 'formik'

export const Formi =({label, ...props}) =>{
    const [field, meta] = useField(props);
    return(
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input type="text" 
            className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props }
            />
            <ErrorMessage  component="div" name={field.name}  className="error"  />
        </div>
    )
}