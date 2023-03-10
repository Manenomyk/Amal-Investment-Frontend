import React, {useState, useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./invest.css";
import * as invest from 'react-bootstrap';
import tooltip from '../../images/Assets/icons/tooltip.png'
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const user = JSON.parse(localStorage.getItem('auth_name'));
function Invest() {

    const [isOpen ,setIsOpen] = useState(false);
    

    
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  // const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    amount:'',
    agree:'',
    
      
  }); 
  
  const handleIput = (e) => {
      e.persist();
      setregInput({...reg, [e.target.name]: e.target.value})
  }
  
  const regSubmit = (e) => {
  e.preventDefault();
  
  // seterrors(validate(reg));
  setsub(true);
  
  const details = {
      amount: reg.amount,
      agree: reg.agree,
  }
  
  setLoading(true);
  try {
      axios.post(`/api/user/invest/${user.user.id}`, details ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 200) {

            setSuccessResponse(" Profile updated successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              // alert("registered successfully")
              // navigate('/clerklogin');
  
          } else {
  
          }
  
      }) .catch(res =>{
       
        
      setLoading(false);
      setServerError("Invalid credentials plz check them out")
      setTimeout(()=>{
        setServerError("")
      },2000)
      
      });
      


  } catch (error) {
      
      // alert("oops, invalid credentials")

      setLoading(false);
      setServerError("Invalid credentials.")
      setTimeout(()=>{
        setServerError("")
      },2000)
    
      // navigate('/clerkregister');
  }
      
  
      }


  return (
    <div className='d-flex'>
            <div>
                    {!isOpen ?
                  (
                    <div style={{marginTop:"1rem",fontSize:'25px', cursor:"pointer",marginLeft:"1rem"}}>
                      <FaBars onClick={() => setIsOpen(!isOpen)} />
                      </div>
                  ):
                  (
                    
                  <div>
                  <IoIosArrowDropleft onClick={() => setIsOpen(!isOpen)} style={{fontSize:"2rem", color:"#007CBA",position:"fixed", top:"2%", marginLeft:"187px", cursor:"pointer" }} /> 
                  <Sidebar/>

                  </div>

                  )  
                  }
              </div>


    <invest.Container>
        <invest.Row>
            <invest.Col lg={8} className="mx-auto mt-3">
                <invest.Card >
                    <invest.Card.Title className='text-center'>
                        <h3><i><u>Thanks for choosing to invest in uwezo estate</u></i></h3>
                    </invest.Card.Title>

                    <invest.Card.Body className='mx-auto'>
                    <div  id='investdeta' className="d-flex ">
                        <p id="card-text">Goal Amount:$300M</p>
                        <p id="card-text">Goal Amount:$300M</p>
                        <p id="card-text">Goal Amount:$300M</p>
                    </div> 
                    <div id='investdeta' className="d-flex ">
                    <p id="card-text">Due Date:9/04/2022</p>
                    <p id="card-text">Type:Equity | Debt |revenue share</p> 
                    </div>
                    </invest.Card.Body>
                </invest.Card>
            </invest.Col>
        </invest.Row>

        <invest.Row className='mt-2 mb-2'>
            <invest.Col lg={8} className="mx-auto">
                <p className=''>How much would you like to invest?</p>
                <div className='d-flex'>
                <input id='inveoption'
                    name="amount"
                      onChange={handleIput} value={reg.amount}
                      placeholder='AMOUNT'
                       className='form-control shadow-none' type="text"
                       
                       />
                <select id='inveoption1' className='form-control shadow-none'>
                        <option >Euros</option>
                        <option>$USD</option>
                        <option>GBP</option>
                        <option>KSH</option>
                    </select>
                </div>
            </invest.Col>
        </invest.Row>

        <invest.Row>
            <invest.Col lg={8} className="mx-auto">
            <p>Deal Type?</p>

            <div id='investtype' className='d-flex mb-1'>
                <div className='d-flex'>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                        Equity:
                    </label>
                    </div>
                    <input id='inveinputs1' className="form-control shadow-none" type="text" placeholder="Amount"/>
                </div>

                <div id='investtype' className='d-flex mb-1'>
                   <div className='d-flex'>
                   <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label 
                    name="agree"
                    onChange={handleIput} value={reg.agree}
                    className="form-check-label" 
                    htmlFor="defaultCheck1">
                    I agree
                    </label>
                   </div>
                    <input id='inveinputs2' className="form-control shadow-none" type="text" placeholder="Amount"/>
                </div>

                <div id='investtype' className='d-flex mb-1'>
                <div className='d-flex'>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    revenue share : 
                    </label>
                </div>
                    
                    <input id='inveinputs' className="form-control shadow-none" type="text" placeholder="Amount"/>
                    
                    
                </div>

            </invest.Col>
        </invest.Row>


        <invest.Row className='mt-2'>
            <invest.Col lg={8} className="mx-auto">
            

             <div id='investoptions' className='d-flex'>
             <p className="radio-items">I want to invest as :</p>
               <div className="">
                    <input className="form-check-input"
                     type="radio" 
                     name="flexRadioDefault" 
                    
                     id="flexRadioDefault1"/>
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        person
                    </label>
                </div>
                <div className="radio-items" >
                    <input className="form-check-input" 
                    type="radio"
                    name="flexRadioDefault" 
                    id="flexRadioDefault1"
                 
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
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
            </invest.Col>
        </invest.Row>
           
        <invest.Row>
            <invest.Col lg={8} className='mx-auto'>
            <div className=''>
                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                    <label className="form-check-label" htmlFor="defaultCheck1">
                    Debt:
                    </label>
            </div>
            </invest.Col>
        </invest.Row>

        <invest.Row>
            <invest.Col lg={12} id="buybtn" className=" d-flex justify-content-center mt-4">
            
              <div>
                <button onClick={regSubmit}  className='buybtn'>BUY</button>
              </div>
            </invest.Col>
        </invest.Row>
    </invest.Container>

    
    </div>
  );
}

export default Invest;
