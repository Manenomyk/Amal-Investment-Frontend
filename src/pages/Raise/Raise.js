import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./raise.css";
import * as raise from 'react-bootstrap';
import {RaiseFormi} from './RaiseFormi';
function Raise() {
  return (
      <div className='d-flex'>

          <Sidebar/>


          <raise.Container>
            <raise.Row>
                <raise.Col id='raisecont' lg={9} className=" mx-auto mt-2">
                    <RaiseFormi />
                </raise.Col>
            </raise.Row>
          </raise.Container>
      </div>
);
}

export default Raise;