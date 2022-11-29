import React, {useState, useEffect} from 'react';
import "./shares.css";
import Sidebar from '../Sidebar/Sidebar';
import Tooltip from '../../components/tooltip/Tooltip';
import { Link } from 'react-router-dom';
import {Col,Row,Container,Carousel,Nav, Card} from 'react-bootstrap';
import axios from 'axios';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";

function Newshares() {

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


  return(
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
    <div className="pt-1 mt-1 container">

    <Nav className= "pt-3 pb-2"
                    activeKey="/home"
                    onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                  >
                    <Nav.Item>
                      <Nav.Link href="/shares"  id="other" >My Shares</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link href="/Newshares" id="actives">New shares</Nav.Link>
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
                                <th scope="col">Shares on offer</th>
                                <th scope="col">max shares to buy</th>
                                <th scope="col">min shares to buy</th>
                                <th scope="col">Action</th>
                              </tr>
                          </thead>

                      <tbody>
                        {details.map((item,index)=>(
           
                                    console.log('i',item),

                                    <tr key={index}>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                           ) )}
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>
            
              </table> 

              <div><Tooltip/></div>

              
              </div>
              
   
    </div>

    



   
    )
  }
            
export default Newshares;