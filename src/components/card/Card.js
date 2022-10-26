import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card'
import {Col,Row,Container,Nav} from 'react-bootstrap';
import Button from 'react-bootstrap/Button'; 
 function Cards(props) {
  return (
    <Card >
    <Card.Img variant="top" src= {props.image}/>
    <Card.Body>
      <Card.Title>Card Title {props.title} </Card.Title>
      <Card.Text> 
      <Row>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}}> Sector</p>
      
      </Col>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}} className="text-end">{props.sector}</p>
      </Col>
      </Row>
      <Row>
        <Col md={6} lg= {6} sm= {6} x= {6}>
      <p style={{fontSize:"small"}}>Goal amount</p>
      </Col>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}} className="text-end">{props.goalAmount}</p>   
      </Col>
      </Row>
      <Row>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}}>
        Min investment
        </p>
      </Col>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}} className="text-end">
        {props.minInvestment}
        </p>
      </Col>
      </Row>
      <Row>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}}>
        Max Investment
        </p>
      </Col>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}} className="text-end">
        {props.maxInvestment}
        </p>
      
      </Col>
      </Row>
      <Row>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}}>
        Deal Type
        </p>
      </Col>
      <Col md={6} lg= {6} sm= {6} x= {6}>
        <p style={{fontSize:"small"}} className="text-end">
        {props.dealType}
        </p>
      </Col>
      </Row>
      </Card.Text>
      

      <Row>
        <Col md={3}></Col>
        <Col md={8}>
      <Button variant="light" className='light'>Invest</Button>

        </Col>
        
      </Row>
    </Card.Body>
  </Card>);
}

export default Cards;