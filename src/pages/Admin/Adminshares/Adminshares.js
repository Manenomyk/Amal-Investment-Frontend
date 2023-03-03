import React, {useState, useEffect} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminshares from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';

function Adminshares() {
  const [isOpen ,setIsOpen] = useState(false);

const [details, getDetails] = useState([]);
const getData = async () => {
    try {
        const data = await axios.get("/api/admin/shares/get");
        console.log(data);
        getDetails(data.data.share);

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
                  <AdminSidebar/>

                  </div>

                  )  
                  }
              </div>

      <adminshares.Container >
             
             <adminshares.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/adminshares" id="actives">Existing shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/AdminNewshares" id="other">New shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
             </adminshares.Nav>
             
             <adminshares.Card>
               <adminshares.Card.Body>
               <adminshares.Row>
                   <adminshares.Col md= {8} sm= {4} xs= {12} >
                   <input type="text" placeholder="Search"/>
                   </adminshares.Col>
                   <adminshares.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminshares.Col>
                   <adminshares.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminshares.Col>
                   </adminshares.Row>
                   </adminshares.Card.Body>
             </adminshares.Card>
                 
               
                   <table className="table table-striped" style={{fontSize: "small"}}>
                                     <thead>
                                       <tr>
                                          
                                           <th scope="col">Company Name</th>
                                           <th scope="col">Sector</th>
                                           <th scope="col">Total shares </th>
                                           <th scope="col">Share prices</th>
                                           <th scope="col">Share value</th>
                                           <th scope="col">Action</th>
                                         </tr>
                                     </thead>

                                 <tbody>
                                   {details.map((item,index)=>(
           
                                        console.log('i',item),

                                    <tr key={index}>
                                     
                                     <td>{item.company_name}</td>
                                     <td>{item.sector}</td>
                                     <td>{item.total_shares}</td>
                                     <td>{item.share_prices}</td>
                                     <td>{item.share_on_offer}</td>
                                     <td><Link to={"/MoreShares"} >View more</Link></td>
                                     
         
                                   </tr>

                              ))}

                                 </tbody>
                         </table> 

                         </adminshares.Container>
    </div>
  )
}

export default Adminshares