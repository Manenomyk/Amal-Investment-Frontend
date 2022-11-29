import React, {useState} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./raise.css";
import * as raise from 'react-bootstrap';
import {RaiseFormi} from './RaiseFormi';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

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


          <raise.Container>
            <raise.Row>
                <raise.Col id='raisecont' lg={9} className=" mx-auto mt-2">
                    <RaiseFormi />
                </raise.Col>
            </raise.Row>
          </raise.Container>
      </div>
);
}

export default Raise;