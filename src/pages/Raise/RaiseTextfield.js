import React from 'react';
import { ErrorMessage  ,useField } from 'formik';

export const RaiseTextfield = ({label, ...props}) => {
  const [field, meta] = useField(props);
  console.log(field, meta);
  return (
    <div>
      <label htmlFor={field.name}>{label}</label>
        <input 
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete='off'
        id='regInput1'
        />
        <ErrorMessage component='div' name={field.name}  className='error'/>
    </div>
  )
}
