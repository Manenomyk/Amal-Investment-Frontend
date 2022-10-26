import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Cards from '../../components/card/Card';
// import Axios from "axios";
import {Col,Row,Container,Carousel,Nav} from 'react-bootstrap';
import  "../../components/card/Card.css";
import "./project.css";
function Newproject() {
  return (<div>
  <Sidebar/>
  <div>
<Container >
  <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <Nav.Link  className= "mt-5 pt-5" href="/activeProjects" id="other">Active Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className= "mt-5 pt-5" href="/newProject" id="actives">New Projects</Nav.Link>
        </Nav.Item>
  </Nav>
  <Carousel variant="dark" className="pt-5">
  <Carousel.Item>
  <Row>
        <Col  lg={2}></Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/estate1.jpg" title="Title"  sector ="Uwezo estate" goalAmount="5M" minInvestment="4M" maxInvestment="40M" dealType="Equity" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/Farm.png" title="Title" content ="content" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/real1.jpg" title="Title" content ="content" />
          </Col>
          <Col  lg={1}></Col>
        </Row>
      <br/>
      <br/>
      <br/>
      <br/>
  </Carousel.Item>
  <Carousel.Item> 
  <Row>
        <Col  lg={2}></Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/estate1.jpg" title="Title" content ="content" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/Farm.png" title="Title" content ="content" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/real1.jpg" title="Title" content ="content" />
          </Col>
          <Col  lg={1}></Col>
        </Row>
        <br/>
      <br/>
      <br/>
      <br/>
  </Carousel.Item>
  <Carousel.Item>
  
        <Row>
        <Col  lg={2}></Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/estate1.jpg" title="Title" content ="content" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/Farm.png" title="Title" content ="content" />
          </Col>
          <Col md= {6} lg= {3} sm= {12} >
            <Cards image="/images/real1.jpg" title="Title" content ="content" />
          </Col>
          <Col  lg={1}></Col>
        </Row>
        <br/>
      <br/>
      <br/>
      <br/>
  </Carousel.Item>
</Carousel>
  </Container>
  </div>
</div>
)
}
export default Newproject;
