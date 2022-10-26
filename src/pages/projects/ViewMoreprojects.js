import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileNav from '../../components/card/ProfileNav';
import {Col, Container,Row} from 'react-bootstrap';
import CardImg from '../../components/card/cardIm';
function ViewMoreprojects() {
  return <div className='' >
  <Sidebar/>
  <Container>
    <ProfileNav title="Jim" />
      <div className="card mt-5 mb-5">
        <div className="card-body">
          <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 text-center">My Investment:</div>
                <div className="col-md-6 col-sm-6 col-4"> Stake:</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 text-center">Goal amount:</div>
                <div className="col-md-6 col-sm-6 col-12 ">% completion</div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-6 col-6 text-center">Deal type:</div>
                <div className="col-md-6 col-sm-6 col-6">Closing date:</div>
            </div>
            <div className="text-center pt-3 "> <strong> Brought together by jenga builders</strong></div>
        </div>
        </div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <div className="progress ">
              <div className="progress-bar " role="progressbar" aria-valuenow="70"
              aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                <span className="sr-only">70% Complete</span>
              </div>
              
          </div>
          <div className=""> <strong> Progress of Sawa estate project</strong> </div>
        </div>
        <div className="col-md-1">
          <div className="d-inline">60%</div>
        </div>
          <div className="col-md-6 text-center">Add Extra Funds:</div>
        </div>
        
          <h2 className="text-center">Current photos for active projects</h2>
          <Container>
            <Row>
              <Col md= {6} lg= {4} sm= {12} >
                <CardImg image="/images/estate1.jpg"  />
              </Col>
              <Col md= {6} lg= {4} sm= {12} >
                <CardImg image="/images/Farm.png"  />
              </Col>
              <Col md= {6} lg= {4} sm= {12} >
                <CardImg image="/images/real1.jpg"  />
              </Col>
            </Row>
          </Container>
  </Container>
  </div>

}

export default ViewMoreprojects;
