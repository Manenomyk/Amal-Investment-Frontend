import React, {useState, useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from 'react-router-dom';
import * as adminnew from 'react-bootstrap';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';

function Projects() {
    const [isOpen ,setIsOpen] = useState(false);
    
  const [details, getDetails] = useState([]);
  const getData = async () => {
      try {
          const data = await axios.get("http://fixapi.chengegikonyo.com/api/admin/Super-Admin/technicians");
          console.log(data.data.data);
          getDetails(data.data.data);
  
      } catch (e) {
          console.log("no execution");
         
      }
  };
  
  useEffect(()=>{
      getData();
  }, []);
  
  console.log('deta',details);

  


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


              <adminnew.Container>
                
              <adminnew.Card>
               <adminnew.Card.Body>
               <adminnew.Row>
                   <adminnew.Col md= {8} sm= {4} xs= {12} >
                   <input type="text" placeholder="Search"/>
                   </adminnew.Col>
                   {/* <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">ADD</button></adminnew.Col> */}
                   <adminnew.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminnew.Col>
                   <adminnew.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminnew.Col>
                   </adminnew.Row>
                   </adminnew.Card.Body>
             </adminnew.Card>


             
             <table className="table table-striped" style={{fontSize: "small"}}>
                                     <thead>
                                       <tr>
                                          
                                           <th scope="col">Project Name</th>
                                           <th scope="col">Sector</th>
                                           <th scope="col">Goal amount </th>
                                           <th scope="col">Max investment</th>
                                           <th scope="col">% Stake</th>
                                           <th scope="col">Opening date</th>
                                           <th scope="col">Closing date</th>
                                           <th scope="col">Deal type</th>
                                           <th scope="col">Action</th>
                                         </tr>
                                     </thead>

                                 <tbody>
                                   {details.map((item,index)=>(
           
                                      console.log('i',item),
                                
                                <tr  key={index} > 
                                     
                                     <td>kazi Coffee</td>
                                     <td>Agriculture</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td><Link to={"/invest"} >Invest</Link></td>
                                     
         
                                   </tr>
                               ) )}

                               
                                 </tbody>

                                 <tbody>
                                   <tr>
                                     
                                     <td>Good House</td>
                                     <td>Real Estate</td>
                                     <td>20,000</td>
                                     <td>100</td>
                                     <td>20M</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td><Link to={"/invest"} >Invest</Link></td>
                                   </tr>
                                 </tbody>

                                 <tbody>
                                   <tr>
                                     
                                     <td>Cut Bank</td>
                                     <td>Finance</td>
                                     <td>50,000</td>
                                     <td>100</td>
                                     <td>5M</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td><Link to={"/invest"} >Invest</Link></td>
                                   </tr>
                                 </tbody>

                                 <tbody>
                                   <tr>
                                    
                                     <td>Net Tech</td>
                                     <td>Technology</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>4M</td>
                                     <td>10,000</td>
                                     <td>100</td>
                                     <td>60M</td>
                                     <td><Link to={"/invest"} >Invest</Link></td>
                                   </tr>
                                 </tbody>

                       
                         </table> 

            </adminnew.Container> 
    </div>
  )
}

export default Projects