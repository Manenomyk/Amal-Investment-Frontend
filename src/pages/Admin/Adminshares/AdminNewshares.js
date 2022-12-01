import React, {useState} from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import * as adminshares from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const user = JSON.parse(localStorage.getItem('auth_name'));

function AdminNewshares() {

    const [isOpen ,setIsOpen] = useState(false);


     
  const navigate = useNavigate();
  const [serverError, setServerError] = useState("")
  const [loading, setLoading] = useState(false);
  const [successResponse,setSuccessResponse]=useState("");
  // const [errors, seterrors] = useState({});
  const [isSub, setsub] = useState(false);
  const [reg, setregInput] = useState({
    company_name:'',
    sector:'',
    total_shares:'',
    share_prices:'',
    share_on_offer:'',
    max_shares_to_buy:'',
    min_shares_to_buy:'',
      
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
      company_name: reg.company_name,
      sector: reg.sector,
      total_shares: reg.total_shares,
      share_prices: reg.share_prices,
      share_on_offer: reg.share_on_offer,
      max_shares_to_buy: reg.max_shares_to_buy,
      min_shares_to_buy: reg.min_shares_to_buy,
  }
  
  setLoading(true);
  try {
      axios.post(`/api/admin/shares/add/${user.user.id}`, details ).then(res =>{
         console.log(res)

        setLoading(false);
          if(res.status === 200) {

            setSuccessResponse(" Profile updated successfully.");
            setTimeout(() => {
              setSuccessResponse("")
            }, 2000);
    
              alert("Shares created successfully")
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
                  <AdminSidebar/>

                  </div>

                  )  
                  }
              </div>

              <adminshares.Container>
                 <adminshares.Nav className= "mt-2 pt-3 pb-2"
                   activeKey="/home"
                   onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                 >
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/adminshares" id="other">Existing shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
                   <adminshares.Nav.Item>
                     <adminshares.Nav.Link href="/AdminNewshares" id="actives">New shares</adminshares.Nav.Link>
                   </adminshares.Nav.Item>
             </adminshares.Nav>

             <adminshares.Card>
               <adminshares.Card.Body>
               <adminshares.Row>
                   <adminshares.Col md= {8} sm= {4} xs= {12} >
                   <input type="text" placeholder="Search"/>
                   </adminshares.Col>
                   <adminshares.Col md= {2} sm= {3} xs= {4}><button  id='entibtn' className="btn btn-outline-dark">Filter</button></adminshares.Col>
                   <adminshares.Col md= {2} sm= {1} xs= {2}><button id='entibtn' className="btn btn-outline-dark">Export</button></adminshares.Col>
                   </adminshares.Row>
                   </adminshares.Card.Body>
             </adminshares.Card>


             <adminshares.Row className='mt-2'>
                <adminshares.Col id='raisecont' lg={9} className=" mx-auto mt-2 pt-4">

                <div>
                 
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Company name
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="company_name"
                      onChange={handleIput} value={reg.company_name}
                      />
                    </div>
                    <div>
                      Sector
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="sector"
                      onChange={handleIput} value={reg.sector}
                      />
                    </div>
                   
                  </div>
             </div>
                    


                       
                <div className='mt-4 mb-4'>
                  
                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Total shares
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="total_shares"
                      onChange={handleIput} value={reg.total_shares}
                      />
                    </div>
                    <div>
                      Share prices
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="share_prices"
                      onChange={handleIput} value={reg.share_prices}
                      />
                    </div>
                    
                  </div>

                  <div  id='deta' className='d-flex justify-content-center mt-4 mb-4'>
                    <div>
                      Shares on offer
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="share_on_offer"
                      onChange={handleIput} value={reg.share_on_offer}
                      />
                    </div>
                    <div>
                      Max shares to buy
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="max_shares_to_buy"
                      onChange={handleIput} value={reg.max_shares_to_buy}
                      />
                    </div>

                  </div>


                  <div  id='deta' className='d-flex justify-content-center'>
                    <div>
                      Min shares to buy
                      <input 
                      className={`form-control shadow-none '}`}
                      id='regInput'
                      name="min_shares_to_buy"
                      onChange={handleIput} value={reg.min_shares_to_buy}
                      />
                    </div>

                  </div>


                  </div>
                  
                  
                  <div id='deta' className='d-flex justify-content-center mt-3'>
                       
                        <button onClick={regSubmit} className='probtn' type='submit'><i>Create Shares</i></button>
                    </div>
                  
                    {/* <RaiseFormi /> */}
                </adminshares.Col>
            </adminshares.Row>
        </adminshares.Container>
    </div>
  )
}

export default AdminNewshares