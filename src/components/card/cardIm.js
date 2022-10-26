import React from 'react';
import  Card from 'react-bootstrap/Card'

 function CardImg(props) {
  return (
    <Card >
    <Card.Img variant="top" src= {props.image}/>
   
  </Card>);
}

export default CardImg;