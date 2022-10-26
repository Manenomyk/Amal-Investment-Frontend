import React from 'react';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';
import  Card from 'react-bootstrap/Card'
 
 function Cardi(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {props.image}/>
    <Card.Body>
      <Card.Title>Card Title {props.title} </Card.Title>
      <Card.Text> {props.content}
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
      
    </Card.Body>
  </Card>);
}

export default Cardi;