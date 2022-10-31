import React from 'react';
import './Register.css';
import * as reg from 'react-bootstrap';
import {Formi} from './Formi';
import { GrFacebookOption } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { BsLinkedin } from "react-icons/bs";
import { IoIosArrowDropright } from "react-icons/io";
import logo from '../../images/logo 1.png';
import invest from '../../images/Assets/homepage carousel/invest.jpeg';

function Register() {
  return (
    <div className='regpage'>
        


        <reg.Container className='mt-5'>
          <reg.Row>
            <reg.Col id='col' lg={5} className='mx-auto'>
              <div className='text-center mt-3'>
                <h2><b><i>SIGN UP</i></b></h2>
                <h4><b><i>Create an account</i></b></h4>
                <p>Sign up using social media</p>
              </div>
              <div id='regsocial' className='d-flex justify-content-center'>
                <div id='fb'>
                  <GrFacebookOption id='fbicon' />
                  Facebook
                </div>
                <div id='google'>
                  <FcGoogle id='googleicon' />
                  Google
                </div>
                <div id='linkedin'>
                  <BsLinkedin id='linkedicon' />
                  Linkedin
                </div>
              </div>

              <hr />

              <reg.Container>
                <div className='d-flex justify-content-center'>
                  <Formi />
                  
                </div>
                <p id='already' className='mb-4'><i>Already have an account? <IoIosArrowDropright id='arrow' /></i></p>
              </reg.Container>

            </reg.Col>

            <reg.Col lg={6} className='mt-5'>
              <reg.Container className='mt-5 mb-5'>
                  <reg.Image
                    className="d-block  w-100"
                    src={logo}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
              </reg.Container>
              <reg.Container>
                  <reg.Image
                    className="d-block  w-100"
                    src={invest}
                    // style={{height:"70vh"}}
                    alt="Second slide"
                    fluid
                    />
              </reg.Container>
            </reg.Col>
          </reg.Row>
        </reg.Container> 
    </div>
  )
}

export default Register