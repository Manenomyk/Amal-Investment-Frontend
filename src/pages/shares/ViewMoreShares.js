import React from 'react';
import "./shares.css";
import * as view from 'react-bootstrap';
import Sidebar from '../Sidebar/Sidebar';

function ViewMoreShares() {
  return (
    <div className='d-flex'>
       <Sidebar/> 

        <view.Container>
            <view.Row className='mt-3 mb-4'>
                <view.Col id='viewmore' lg={7} className='mx-auto'>
                    <h4 className='text-center'><i><u>Kazi coffee</u></i></h4>
                    <div id='viewdetails' className='d-flex justify-content-center'>
                      <div>
                        <p>Share purchase price: $100</p>
                      </div>
                      <div>
                        <p>Share selling price:  $300</p>
                      </div>
                    </div>

                    <div id='viewdetails' className='d-flex justify-content-center '>
                      <div>
                        <p>Total vaalue of shares: 1M</p>
                      </div>
                      <div>
                        <p>Number of shares: 10,000</p>
                      </div>
                    </div>

                    <div id='viewdetails' className='d-flex justify-content-center '>
                      <div>
                        <p>Totaal value of shares now: 3M</p>
                      </div>
                      <div>
                        <p>Date of purchase: 20/04/2020</p>
                      </div>
                    </div>

                    <div className='text-center'>
                      <p><b>Bought under Jenga builders</b></p>
                    </div>
                </view.Col>
            </view.Row>


            <view.Row>
              <view.Col id='viewmore' lg={9} className="mx-auto">

              </view.Col>
            </view.Row>

            <view.Row>
              <view.Col lg={9} className="mx-auto mt-5 d-flex justify-content-center">
                <button id='viewbtn'>SELL</button>
              </view.Col>
            </view.Row>
        </view.Container>

    </div>
          
  );
}

export default ViewMoreShares;