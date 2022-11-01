import React from 'react';
import {Col,Row,Container,Nav,Card} from 'react-bootstrap';
import ProfileNav from '../../components/card/ProfileNav';
import Sidebar from '../Sidebar/Sidebar';
import  "../../components/card/Card.css";
import { Link } from "react-router-dom";
import './shares.css'
function Shares() {
return   (
  <div className='d-flex'>
  
            <Sidebar/>
          
          
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
                                    <tr>
                                      <th scope="row"> 
                                        <input type="checkbox" name="input"/> </th>
                                      <td>kazi Coffee</td>
                                      <td>Agriculture</td>
                                      <td>10,000</td>
                                      <td>100</td>
                                      <td>60M</td>
                                      <td><Link to={"/ViewMoreShares"} >View Shares</Link></td>
                                      
          
                                    </tr>
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