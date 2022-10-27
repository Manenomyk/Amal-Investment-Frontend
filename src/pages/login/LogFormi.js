import React from 'react';
import { Formik, Form } from 'formik';
import{LogTextfield} from './LogTextfield';
import { Button } from 'react-bootstrap';
import { IoIosArrowDropright } from "react-icons/io";
import * as Yup from 'yup';

export const LogFormi = () => {
    const validate = Yup.object({

        email: Yup.string()
        .email('Invalid email')
        .required('Email is required'),
        
        password: Yup.string()
        .min(6, 'Must be atleast 6 characters')
        .required('password is required'),
        
    })
  return (
    <div>
        <Formik
            initialValues ={{
               
                email:'',
                password:'',
            }}
            validationSchema={validate}
        >

            {formik =>
            
            ( 
            <div>
               
                {console.log(formik.values)}
                <Form>
                    
                    <LogTextfield placeholder='Email Address' label="" name="email" type="email" />
                    <LogTextfield placeholder='Password' label="" name="password" type="password" />
                    <p className='forgotpass'><b><i>Forgot password? <IoIosArrowDropright id='arrow' /></i></b></p>
                    <Button id='regbtn' className="text-center" type='submit'>Log in</Button>
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
