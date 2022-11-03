import React from 'react';
import { Formik, Form } from 'formik';
import{RaiseTextfield} from './RaiseTextfield';
import { Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { IoIosArrowDropright } from "react-icons/io";
import * as raise from 'react-bootstrap';
import tooltip from '../../images/Assets/icons/tooltip.png';

export const RaiseFormi = () => {
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
                    <div className='mt-3'>
                    <p><b><u>Personal details</u></b></p>
                            <div  id='deta' className='d-flex justify-content-center'>
                                <RaiseTextfield placeholder='Mike' label="First name" name="fname" type="text" />
                                <RaiseTextfield placeholder='Bahati' label="Second name" name="lname" type="text" />
                                <RaiseTextfield placeholder='Mike' label="" name="fname" type="text" />
                            </div>
                            
                            <div id='deta' className='d-flex justify-content-center'>
                                <RaiseTextfield placeholder='Mike' label="Id number" name="fname" type="text" />
                                <RaiseTextfield placeholder='Bahati' label="Phone number" name="lname" type="text" />
                                <RaiseTextfield placeholder='Mike' label="Email" name="fname" type="text" />
                            </div>
                            <div className='raisefiles'>
                            <RaiseTextfield  placeholder='0112345655' label="" name="phone" type="file" />
                            </div>
                                
                                
                    </div>
                  

                    <div className='mt-2'>
                         <p><b><u>Entity details</u></b></p>
                            <div id='deta' className='d-flex justify-content-center'>
                                <RaiseTextfield placeholder='Mike' label="Entity name" name="fname" type="text" />
                                <RaiseTextfield placeholder='Bahati' label="Directors name" name="lname" type="text" />
                                <RaiseTextfield placeholder='Mike' label="" name="fname" type="text" />
                            </div>
                            
                            <div id='deta' className='d-flex justify-content-center'>
                                <RaiseTextfield placeholder='Mike' label="Id number" name="fname" type="text" />
                                <RaiseTextfield placeholder='Bahati' label="Phone number" name="lname" type="text" />
                                <RaiseTextfield placeholder='Mike' label="Email" name="fname" type="text" />
                            </div>
                                <div className='raisefiles'>
                                <RaiseTextfield placeholder='0112345655' label="" name="phone" type="file" />
                                <RaiseTextfield placeholder='mike@gmail.com' label="" name="email" type="file" />
                                </div>
                    </div>
                     
                    <div className='mt-3'>
                        <p><b>Enter amount you want to raise</b></p>

                        <div className='d-flex' id='raisefiles'>
                            <input id='regInput1' className='form-control shadow-none' placeholder='AMOUNT' type="text" />
                        <select id='raiseoption' className='form-control shadow-none'>
                            <option >Euros</option>
                            <option>$USD</option>
                            <option>GBP</option>
                            <option>KSH</option>
                            </select>
                        </div>

                    </div>
                    
                    <div id='deta' className='d-flex justify-content-center mt-3'>
                       <div>
                            <raise.Image
                            className="d-block mx-auto"
                            src={tooltip}
                            style={{fontSize:"15px", cursor:"pointer"}}
                            alt="First slide"
                            fluid
                            />
                        </div>
                        <button className='probtn' type='submit'><i>Raise capital</i></button>
                    </div>
                    
                </Form>
            </div> 
            )
            }
        </Formik>
    </div>
  )
}
