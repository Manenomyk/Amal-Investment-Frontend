import React, {useState} from 'react';
import Navbar from './Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import * as dash from 'react-bootstrap';
// import { Doughnut } from 'react-chartjs-2';


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
     <dash.Container>
    
          <dash.Row className='mt-4'>
            <dash.Col className='mx-auto' lg={2}>
                <dash.Card style={{boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
                  <div className='text-center mt-2'>
                      <p><i>Number of projects</i></p>
                    </div>


                  
                
                <div className='mt-3 mb-3 mx-auto'>
                
                </div>

                <div className='mt-3 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Completed projects:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                <div className=' mb-2 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Monthly target:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                </dash.Card>
            </dash.Col>

            <dash.Col className='mx-auto' lg={2}>
                <dash.Card style={{boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
                  <div className='mx-auto'>
                  <select style={{width:"5rem", border:"transparent"}} className='form-control shadow-none'>
                        <option >2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                  </div>
                
                <div className='mt-3 mb-3 mx-auto'>

                </div>

                <div className='mt-3 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Completed projects:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                <div className=' mb-2 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Monthly target:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                </dash.Card>
            </dash.Col>

            <dash.Col className='mx-auto' lg={2}>
                <dash.Card style={{boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
                <div className='mx-auto'>
                  <select style={{width:"5rem", border:"transparent"}} className='form-control shadow-none'>
                        <option >2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                  </div>
                
                <div className='mt-3 mb-3 mx-auto'>

                </div>

                <div className='mt-3 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Completed projects:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                <div className=' mb-2 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Monthly target:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                </dash.Card>
            </dash.Col>

            <dash.Col className='mx-auto' lg={2}>
                <dash.Card style={{boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
                  <div className='d-flex mx-auto'>
                    <div>
                      Shares
                    </div>

                <div className=''>
                  <select style={{width:"5rem", border:"transparent"}} className='form-control shadow-none'>
                        <option >2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                  </div>
                  </div>
                
                <div className='mt-3 mb-3 mx-auto'>

                </div>

                <div className='mt-3 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Completed projects:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                <div className=' mb-2 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Monthly target:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                </dash.Card>
            </dash.Col>

            <dash.Col className='mx-auto' lg={2}>
                <dash.Card style={{boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.5)"}}>
                <div className='d-flex mx-auto'>
                    <div>
                      Shares increase
                    </div>

                <div className=''>
                  <select style={{width:"5rem", border:"transparent"}} className='form-control shadow-none'>
                        <option >2022</option>
                        <option>2021</option>
                        <option>2020</option>
                        <option>2019</option>
                    </select>
                  </div>
                  </div>
                
                <div className='mt-3 mb-3 mx-auto'>

                </div>

                <div className='mt-3 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Completed projects:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                <div className=' mb-2 d-flex'>
                  <p style={{fontSize:"12px", marginLeft:'4px'}}>Monthly target:</p>
                  <input style={{width:"3rem", fontSize:"12px",borderTop:"none", borderLeft:"none",borderRight:"none"}} placeholder="54" type="text" className='form-control shadow-none' />
                </div>
                </dash.Card>
            </dash.Col>
          </dash.Row>
     </dash.Container>
    </div>
  )
}

export default Dashboard