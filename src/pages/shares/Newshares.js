import React from 'react';
import "./shares.css";
import Sidebar from '../../components/sidebar/Sidebar';
import Tooltip from '../../components/tooltip/Tooltip';
import {Col,Row,Container,Carousel,Nav} from 'react-bootstrap';
function Newshares() {
  return(
    <div>
   <Sidebar/>
    <div className="pt-5 mt-5 container">


      <table className="table table-striped" style={{fontSize: "small"}}>
                          <thead>
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Company Name</th>
                                <th scope="col">Sector</th>
                                <th scope="col">Total shares </th>
                                <th scope="col">Share prices</th>
                                <th scope="col">Shares on offer</th>
                                <th scope="col">max shares to buy</th>
                                <th scope="col">min shares to buy</th>
                                <th scope="col">Action</th>
                              </tr>
                          </thead>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>

                      <tbody>
                        <tr>
                          <th scope="row"> 
                            <input type="checkbox" name="input"/> </th>
                          <td>Bora Estate</td>
                          <td>Construction </td>
                          <td>10,000</td>
                          <td>100</td>
                          <td>1000</td>
                          <td>600</td>
                          <td>100</td>
                          <td><a href="/BuyShares">Buy Shares</a></td>
                        </tr>
                      </tbody>
            
              </table> 

              <div><Tooltip/></div>

              
              </div>
              
   
    </div>

    



   
    )
  }
            
export default Newshares;