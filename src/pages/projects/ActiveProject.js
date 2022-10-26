import React,{useState,useEffect} from 'react';
import Axios from "axios";

import {Col,Row,Container,Nav,Card} from 'react-bootstrap';
import Cardi from '../../components/card/cardActiveProject'
import ProfileNav from '../../components/card/ProfileNav'
import Sidebar from '../../components/sidebar/Sidebar';
import  "../../components/card/Card.css";
import './project.css'


function ActiveProject() {
  const [ActiveProject,SetActiveProject]=useState("")

  const getActiveProjects=async()=>{
    try{
  const response=Axios.get("http://127.0.0.1:8000//ActiveProjectController")
  console.log("data",response)
    }
    
    catch (error){
      console.log("error",error)
    }
  }
  useEffect(()=>{
    getActiveProjects();
},[])
  return <div>
  
<Sidebar/>
<div className=''></div>
    <Container>
    <div className="p-1">
    <ProfileNav title="Jim" />
    </div>
  <Nav className= "mt-3 pt-3 pb-2"
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link href="/home" id="actives">Active Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/newProject" id="other">New Projects</Nav.Link>
        </Nav.Item>
  </Nav>
  <Card>
    <Card.Body>
    <Row>
        <Col md= {8} sm= {4} xs= {12} >
        <input type="text" placeholder="Search"/>
        </Col>
        <Col md= {2} sm= {3} xs= {4}><button  className="btn btn-outline-dark">Filter</button></Col>
        <Col md= {2} sm= {1} xs= {2}><button className="btn btn-outline-dark">Export</button></Col>
        </Row>
        </Card.Body>
        </Card>
    
        <table className="table table-striped" style={{fontSize: "small"}}>
            <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col">Company Name</th>
                <th scope="col">Sector</th>
                <th scope="col">Goal amount</th>
                <th scope="col">My Investment</th>
                <th scope="col">Stake</th>
                <th scope="col">Completion</th>
                <th scope="col">Closing date</th>
                <th scope="col">Deal Type</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row"> <input type="checkbox" name="input"/> </th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>  </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td><a href="viewmoreproject" className=""style={{fontSize: "small"}}>View more</a></td>
              </tr>
            </tbody>
        
          </table>
      
          <h2 className='text-center'>Current photos for active projects</h2>

          <Container>
            <Row>
              <Col md= {6} lg= {4} sm= {12} >
                <Cardi image="/images/estate1.jpg" title="Title" />
              </Col>
              <Col md= {6} lg= {4} sm= {12} >
                <Cardi image="/images/Farm.png" title="Title" content ="content" />
              </Col>
              <Col md= {6} lg= {4} sm= {12} >
                <Cardi image="/images/real1.jpg" title="Title" content ="content" />
              </Col>
            </Row>
          </Container>
</Container>
 </div>
}
export default ActiveProject;
