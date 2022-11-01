import React from 'react';
import "./shares.css";
import Sidebar from '../Sidebar/Sidebar';
import * as buy from 'react-bootstrap'; 
import tooltip from '../../images/Assets/icons/tooltip.png'

function BuyShares() {
  return (
    <div className='d-flex'>
      <Sidebar />
        <buy.Container>
          <buy.Row>
            <buy.Col lg={8} className="mx-auto mt-3">
              <buy.Card>
                <buy.Card.Title>
                  <h4 className='buytext'><u><i>Thanks for choosing to invest in uwezo estate</i></u></h4>
                </buy.Card.Title>
                <buy.Card.Body className='d-flex ' id='buydet'>
                  <p id="card-text">Share Price:$300M</p>
                  <p id="card-text">Min shares to buy:50M</p>
                  <p id="card-text">Max shares to buy:100</p>
                </buy.Card.Body>
              </buy.Card>
            </buy.Col>
          </buy.Row>

          <buy.Row className='mt-4'>
            <buy.Col lg={12}>
              <div id='buyamount' className='d-flex justify-content-center'>
                <p>How many shares would you like to buy? </p>
                <input placeholder='12' className='form-control shadow-none' id='buyinp' type="text" />
                <p>Total amount of shares </p>
                <input placeholder='$24 500' className='form-control shadow-none' id='buyinp1' type="text" />
              </div>
            </buy.Col>
          </buy.Row>

          <buy.Row>
            <buy.Col lg={8}>
                <div id='buyentin' className='d-flex justify-content-center mb-4'>
                  <p><b>I want to invest as:</b></p>
                  <div>
                    <div className="radio-items">
                      <input className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        onclick="closeLegal()"
                        id="flexRadioDefault1" />
                      <label className="form-check-label" for="flexRadioDefault1">
                        person
                      </label>
                    </div>
                    <div className="radio-items" >
                      <input className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onclick="openLegal() " />
                      <label className="form-check-label" for="flexRadioDefault1">
                        Entity
                      </label>
                    </div>
                    <div id="legal-entity" >


                <select className='form-control shadow-none'>
                  <option >Legal entity</option>
                  <option>jamal enterprise</option>
                  <option>Lacharme collection</option>
                  <option>elfantasia group</option>
                </select>
              </div>
                  </div>
                  
                </div>
                <div className='buycheck'>
                <input className="form-check-input"
                        type="checkbox"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        onclick="openLegal() " />
                      <label className="form-check-label" for="flexRadioDefault1">
                        I agree
                      </label>
                </div>
            </buy.Col>
          </buy.Row>
          <buy.Row>
            <buy.Col lg={12} id="buybtn" className=" d-flex justify-content-center">
              <div>
              <buy.Image
                className="d-block mx-auto"
                src={tooltip}
                style={{fontSize:"15px", cursor:"pointer"}}
                alt="First slide"
                fluid
                />
              </div>
              <div>
                <button className='buybtn'>BUY</button>
              </div>
            </buy.Col>
          </buy.Row>
        </buy.Container>

         
    </div>
  );



}

export default BuyShares;
