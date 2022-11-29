import React, {useState, useEffect} from 'react';
import {Col,Row,Container,Nav,Card} from 'react-bootstrap';
import ProfileNav from '../../components/card/ProfileNav';
import Sidebar from '../Sidebar/Sidebar';
import  "../../components/card/Card.css";
import { Link } from "react-router-dom";
import './shares.css'
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Shares() {


const [isOpen ,setIsOpen] = useState(false);

  const [details, getDetails] = useState([]);
  const getData = async () => {
      try {
          const data = await axios.get("/user/show-my-share/{id}");
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


return   (
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
          
          
            <Container >
             
              <Nav className= "mt-2 pt-3 pb-2"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  >
                    <Nav.Item>
                      <Nav.Link href="/home" id="actives">My Shares</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Newshares" id="other">New shares</Nav.Link>
                    </Nav.Item>
              </Nav>
              <Card>
                <Card.Body>
                <Row>
                    <Col md= {8} sm= {4} xs= {12} >
                    <input type="text" placeholder="Search"/>
                    </Col>
                    <Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></Col>
                    <Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></Col>
                    </Row>
                    </Card.Body>
              </Card>
                  
                
                    <table className="table table-striped" style={{fontSize: "small"}}>
                                      <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Sector</th>
                                            <th scope="col">Total shares </th>
                                            <th scope="col">Share prices</th>
                                            <th scope="col">Shares Value</th>
                                            <th scope="col">Action</th>
                                          </tr>
                                      </thead>

                                  <tbody>
                                    {details.map((item,index)=>(
           
                                        console.log('i',item),

                                    <tr key={index}>
                                      <th scope="row"> 
                                        <input type="checkbox" name="input"/> </th>
                                      <td>kazi Coffee</td>
                                      <td>Agriculture</td>
                                      <td>10,000</td>
                                      <td>100</td>
                                      <td>60M</td>
                                      <td><Link to={"/ViewMoreShares"} >View Shares</Link></td>
                                      
          
                                    </tr>

                                    ) )}
                                  </tbody>

                                  <tbody>
                                    <tr>
                                      <th scope="row"> 
                                        <input type="checkbox" name="input"/> </th>
                                      <td>Good House</td>
                                      <td>Real Estate</td>
                                      <td>20,000</td>
                                      <td>100</td>
                                      <td>20M</td>
                                      <td><Link to={"/ViewMoreShares"} >View Shares</Link></td>
                                    </tr>
                                  </tbody>

                                  <tbody>
                                    <tr>
                                      <th scope="row"> 
                                        <input type="checkbox" name="input"/> </th>
                                      <td>Cut Bank</td>
                                      <td>Finance</td>
                                      <td>50,000</td>
                                      <td>100</td>
                                      <td>5M</td>
                                      <td><Link to={"/ViewMoreShares"} >View Shares</Link></td>
                                    </tr>
                                  </tbody>

                                  <tbody>
                                    <tr>
                                      <th scope="row"> 
                                        <input type="checkbox" name="input"/> </th>
                                      <td>Net Tech</td>
                                      <td>Technology</td>
                                      <td>10,000</td>
                                      <td>100</td>
                                      <td>4M</td>
                                      <td><Link to={"/ViewMoreShares"} >View Shares</Link></td>
                                    </tr>
                                  </tbody>
 
                        
                          </table> 

                          </Container>
                         
          
  
                 </div>
              )
            }
        
      export default Shares;