import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Dashboard() {

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
     <div>
     <Navbar />
      qwertyui
     </div>
    </div>
  )
}

export default Dashboard