import React from 'react';
import { Formik, Form } from 'formik';
import{RegTextfield} from './RegTextfield';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';

export const Formi = () => {
    const validate = Yup.object({
        name: Yup.string()
        .required('Name is required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        phone: Yup.string()
        .max(10, 'Must not exceed 10 characters')
        .required('Phone number is required'),
        password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('password is required'),
        conpass: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Field is required'),
    })
  return (
    <div>
        <Formik
            initialValues ={{
                name:'',
                email:'',
                phone:'',
                password:'',
                conpass:''
            }}
            validationSchema={validate}
        >

            {formik =>
            
            ( 
            <div>
               
                {console.log(formik.values)}
                <Form>
                    <RegTextfield placeholder='Username' label="" name="name" type="text" />
                    <RegTextfield placeholder='Email Address' label="" name="email" type="email" />
                    <RegTextfield placeholder='Phone number' label="" name="phone" type="text" />
                    <RegTextfield placeholder='Password' label="" name="password" type="password" />
                    <RegTextfield placeholder='Confirm password' label="" name="conpass" type="password" />
                    <Button id='regbtn' className="text-center" type='submit'>Sign up</Button>
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
