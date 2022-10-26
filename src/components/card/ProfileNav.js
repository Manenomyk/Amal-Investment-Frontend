import React from 'react';
import {Card,Col,Row,Dropdown,Container} from 'react-bootstrap'; 
import {Link} from 'react-router-dom'
import '../card/Card.css'


 function ProfileNav(props) {
  return (
      <Container>
    <Card className="">
    <Card.Body>
    <Row>
        <Col md= {2} lg={1} sm= {4} xs= {5} >
            <Card.Title> Investor {props.title} </Card.Title>
        </Col>
        <Col md= {5} lg={6} sm= {5} xs= {3}>  </Col>
        <Col md= {2} lg={1} sm= {1} xs= {2}>
        <Dropdown >
              <Dropdown.Toggle variant='outline-light'  id="dropdown-basic">
              <a href="/#"><img src="/images/icons/notification.png" width={30} height={30} className="small" alt=""/></a>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/">Notification </Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
        
        </Col>
        <Col md= {2} lg={1} sm= {1} xs= {2}>
        
          <Dropdown>
              <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
              <img src="/images/icons/172626_user_male_icon.png" className="small" width={30} height={30} alt="" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/home">Logout</Dropdown.Item>
              </Dropdown.Menu>
          </Dropdown>
          

        </Col>
    </Row>
    
    </Card.Body>
  </Card>;
      </Container>
  )
}

export default ProfileNav;