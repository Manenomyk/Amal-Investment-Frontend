import React from 'react';
import { Formik, Form } from 'formik';
import{ProTextfield} from './ProTextfield';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { IoIosArrowDropright } from "react-icons/io";

export const ProFormi = () => {
    const validate = Yup.object({
        fname: Yup.string()
        .required('First name is required'),
        lname: Yup.string()
        .required('Last name is required'),
        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        phone: Yup.string()
        .max(10, 'Must not exceed 10 characters')
        .required('Phone number is required'),
        citizenship: Yup.string()
        .required('Citizenship is required'),
        conpass: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password must match')
        .required('Field is required'),
    })
  return (
    <div>
        <Formik
            initialValues ={{
                fname:'',
                lname:'',
                email:'',
                phone:'',
                citizenship:'',
            }}
            validationSchema={validate}
        >

            {formik =>
            
            ( 
            <div>
               
                {console.log(formik.values)}
                <Form>
                    <ProTextfield placeholder='Mike' label="First name" name="fname" type="text" />
                    <ProTextfield placeholder='Bahati' label="Last name" name="lname" type="text" />
                    <ProTextfield placeholder='0112345655' label="Phone number" name="phone" type="text" />
                    <ProTextfield placeholder='mike@gmail.com' label="Email address" name="email" type="email" />
                    <select name='citizenship' id='citizen' className='form-control shadow-none'>
                    <option>Citizenship</option>
                    <option>Kenya</option>
                    <option>Uganda</option>
                    <option>Tanzania</option>
                    <option>Rwanda</option>
                    </select>
                    <p className='forgotpass'><b><i>Forgot password? <IoIosArrowDropright id='arrow' /></i></b></p>
                    <div className='d-flex justify-content-center'>
                    <button className='probtn' type='submit'><i>Update</i></button>
                    </div>
                    
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
