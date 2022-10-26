import React from 'react';
import { useState } from "react";
import {Link} from "react-router-dom";
import { IoCameraSharp } from "react-icons/io5";
import {FaUpload } from "react-icons/fa";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Sidebar from '../../components/sidebar/Sidebar'
import axios from 'react'

import "./profile.css"

const user = JSON.parse(localStorage.getItem('auth_userName'));

function Profile() {


  const [popup, setPopup]=useState(false);

  const togglePopup = () => {
      setPopup(!popup)
  };

  if(popup){
    document.body.classList.add('active')
  }
  else{
    document.body.classList.remove('active')
  }
  


  const [popup1, setPopup1]=useState(false);
      
  const togglePopup1 = () => {
      setPopup1(!popup1)
  };

  if(popup1){
    document.body.classList.add('active')
  }else{
      document.body.classList.remove('active') 
  }
 

  const [ takeInput,  entityInput]= useState({
        firstName: '',
        lastName: '',
        phone_number: '',
        email: '',
        citizenship: '',
        kraPin:'',
        copyOfID:'',
        

  });

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName ] = useState("")
  const [phone_number, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [citizenship, setCitizenship] = useState("")
  const [copyOfID, setIdCopy] = useState({})
  const [kraPin, setKra] = useState({})




const pageSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData();
  if(e.target.files && e.target.files[0]){
    formData.append('kraPin', e.target.files[0]);
  }
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('phone_number', phone_number);
    formData.append('email', email);
    formData.append('citizenship', citizenship);
    formData.append('copyOfID', copyOfID)
    formData.append('kraPin', kraPin)


  // const data = {
  //   firstName: takeInput.firstName,
  //   lastName: takeInput.lastName,
  //   phone: takeInput.phone,
  //   email: takeInput.email,
  //   citizenship: takeInput.citizenship,
  //   kra: takeInput.kra,
  //   idCopy: takeInput.idCopy,

  // }
axios.post(`/api/user/update-profile/${user.id}`, formData).then (res =>{
  console.log(res);
if(res.data.status === 200){

  localStorage.setItem('auth_token', res.data.token);
  localStorage.setItem('auth_name', res.data.firstName);

}else
{

  

}

});


}




  return (

    <div >


<Sidebar/>
{/* <Container>
  <Profile/>
</Container> */}

<div className='prof1'>
<div className='prof'>
<div className="whole-form">
    
    <h1 style={{marginLeft:"70%", marginTop:"10%"}}><i> <u>Edit Profile</u></i></h1>
    

        <div className="top">

          <Link to={"/Profile"} style={{fontSize:"24px"}} id="btn4" > <i>Personal</i> </Link>
  
  <Link to={"/Entity"} id="btn5"  style={{fontSize:"24px"}}> <i >Entity</i> </Link>
         
         </div>


         

     <div className="frame">
        <div className="wrapper">
              <input type="file" class="input" accept="image"/>
              <IoCameraSharp style={{width:"25px",borderRadius:"5px", marginTop:"55px",marginLeft:"30px", background:"white"}}/>
          </div>


              <div className="form" style={{fontSize:"18px"}}>
                  First name <br/>
                  <input type="text " placeholder="" style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}} /> <br/>
                Last name <br/>
                  <input type="text " placeholder="" style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}}/><br/>
                Phone number <br/>
                  <input type="text " placeholder="" style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}}/><br/>
                Email address
                  <input type="text " placeholder="" style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}}/><br/>

                  <input  name='phone_number' value={phone_number} style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}} onChange = {(e) => setPhone(e.target.value)} type="text " placeholder=""/><br/>
                  
                 Email address <br />

                  <input  name='email' value={email} style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px", width:"400px", borderRadius:"5px"}} onChange = {(e) => setEmail(e.target.value)} type="text " placeholder=""/><br/>
                  

               <div className='select'>
               <select  name='citizenship' value={citizenship} style={{fontSize:"16px",paddingTop:"10px",paddingBottom:"5px",borderRadius:"5px", width:"400px", marginBottom: "20px", boxShadow: "0px 3px 5px rgba(139, 137, 137, 0.5)" }} onChange = {(e) => setCitizenship(e.target.value)} id=" " >
                    <option value="selected">Citizenship</option>
                    <option value="">Kenya</option>
                    <option value="">Tanzania</option>
                    <option value="">Uganda</option>
                    <option value="">Rwanda</option>
                    <option value="">Etiopia</option>
                    <option value="">Somalia</option>
                    <option value="">Burundi</option>
                    </select> <br/>
               
               </div>



                  <div className="file" >
                   
                   
                   {/* new changes */}
                    <input name='copyOfID' onChange = {(e) => setIdCopy(e.target.files[0])} type="file" id='fil1' accept='image/*'/>
                    
                  <label id='lab' htmlFor="fil1" style={{fontSize:"15px"
                  , borderRadius:"5px",backgroundColor:"white",marginRight:"40px", paddingBottom:"10px", paddingTop:"10px"}} >Upload copy of ID<FaUpload style={{width:"15px", marginLeft:"28px"}}/></label>
                  
                  
                  <input name='kraPin' onChange = {(e) => setKra(e.target.files[0])} type="file" id='fil' accept='image/*'/>
                    {/* <input name='kra' onChange={(e) => setKra(e.target.files[0])} type="file" id='kra' accept='image/*'/> */}
                    
                    <label id='lab' htmlFor="fil" style={{fontSize:"15px"
                  , borderRadius:"5px",backgroundColor:"white", paddingBottom:"10px", paddingTop:"10px"}}>Upload KRA pin<FaUpload style={{width:"15px",marginLeft:"27px"}}/></label>
                   
                  
                    
                    
                      <h4 onClick={togglePopup1} style={{marginTop:"30px"}}><i>change password</i><IoArrowForwardCircleOutline style={{marginLeft:"10px", maaarginTop:"20px"}}/><ion-icon name="chevron-forward-circle-outline" id="aro"></ion-icon>
                      </h4>

 
                              {popup1 && (

                              <div className="modal" id="modal" style={{width:"220px", background: "#EFFAFF", opacity:"0.92", border:"1px solid gray", boxShadow:"0px 3px 5px rgba(139, 137, 137, 0.5)" }}>
                                  
                              <p className="sms">
                                  <div className='popform'  >
                                      <form action="" style={{opacity:"1"}}>
                                      <button onClick={togglePopup1} style={{marginLeft:"190PX",background:"black",color:"white",
                                      borderRadius:"50%",border:"1PX Ssolid black", width:"15px",height:"15px",fontSize:"11px"}}>
                                        x
                                      </button>
                                      
                                      <div className='det' style={{marginLeft:"30PX", fontSize: "10px" }}>
                                          <p id=' email' style={{ }}>Old password</p>
                                          <input type="password" id='res' style={{borderRadius: '4px', marginBottom:"10px", width:"150px"}} />
                                          <p id=' email'>New password</p>
                                          <input type="password" id='res' style={{borderRadius: '4px', marginBottom:"10px", width:"150px"}} />
                                          <p id=' email'>Confirm new password</p>
                                          <input type="password" id='res' style={{borderRadius: '4px', width:"150px", marginBottom:"10px"}}/>
                                          <div  className="input2">
                                                  
                                                  

                                                  <button         onClick={togglePopup1}
                                                      className="btnpop" id="btn3" style={{marginLeft:'50px', fontSize:"12px"}}>
                                                  <i>Update</i></button>



                                              </div>
                                      </div>    


                                      
                                      </form>
                                </div>
                             </p>
                          </div>
                        )}


                        
      
<button         onClick={togglePopup}
                  className="btnpop" id="btn3" style={{fontSize:"24px", paddingBottom:"30px",marginTop:"30px", marginRight:"30%"}}><i>Update</i></button>

          {popup && (

          <div className="modal" id="modal">
          <p className="sms">
              You have successfully updated your profile
              <button className="close-button"  id='shut' onClick={togglePopup}>
          x
          </button>
          </p>

          </div>

          )}


                              



{/* new changes */}
                      <button    style={{fontSize:"24px", paddingBottom:"7px",marginTop:"30px", marginRight:"30%"}}  
                      onClick ={pageSubmit}
        className="btnpop" id="btn3"><i>Update</i></button>

{popup && (

<div className="modal" id="modal">
<p className="sms">
    You have successfully updated your profile
    <button className="close-button"  id='shut' onClick={togglePopup}>
x
</button>
</p>

</div>

)}


                      

                  
                 
              
 
           </div>        

        </div>

      </div>
   </div>
</div>
</div>
</div>

  )
}

export default Profile;
