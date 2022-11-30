import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./raise.css";
import * as raise from 'react-bootstrap';
import {RaiseFormi} from './RaiseFormi';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import tooltip from '../../images/Assets/icons/tooltip.png';

function Raise() {
    const [isOpen ,setIsOpen] = useState(false);
    
  return (
      <div className='d-flex'>

            <div>
                    {!isOpen ?
                  (
                    <div style={{marginTop:"1rem",fontSize:'25px', cursor:"pointer",marginLeft:"1rem"}}>
                      <FaBars onClick={() => setIsOpen(!isOpen)} />
                      </div>
                  ):
                  (
                    
                  <div>
                  <IoIosArrowDropleft onClick={() => setIsOpen(!isOpen)} style={{fontSize:"2rem", color:"#007CBA",position:"fixed", top:"2%", marginLeft:"187px", cursor:"pointer" }} /> 
                  <Sidebar/>

                  </div>

                  )  
                  }
              </div>


          <raise.Container >
            <raise.Row className='mt-4'>
                <raise.Col id='raisecont' lg={9} className=" mx-auto mt-4 pt-4">

                <div>
                  <p><b><u>Personal details</u></b></p>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      First name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Middle name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Last name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Id number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Phone number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Email
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                  </div>
                  </div>
                    


                       
                <div className='mt-4 mb-4'>
                  <p><b><u>Entity details</u></b></p>
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Entity name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Director's name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Last name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                  </div>

                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Id number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Phone number
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                    <div>
                      Email
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput1'
                      />
                    </div>
                  </div>
                  </div>

                  <p><b>Enter amount you want to raise</b></p>
                  
                  <div style={{gap:"2rem"}} className='d-flex justify-content-center'>
                  <input id='regInput1' className='form-control shadow-none' placeholder='AMOUNT' type="text" />
                        <select id='raiseoption' className='form-control shadow-none'>
                            <option >Euros</option>
                            <option>$USD</option>
                            <option>GBP</option>
                            <option>KSH</option>
                            </select>
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
                  
                    {/* <RaiseFormi /> */}
                </raise.Col>
            </raise.Row>
          </raise.Container>
      </div>
);
}

export default Raise;