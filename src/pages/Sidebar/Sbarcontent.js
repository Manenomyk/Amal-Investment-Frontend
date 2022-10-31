import React from 'react';
import Loaning from '../../images/Assets/icons/Loaning.png';
import inv from '../../images/Assets/icons/inv.png';
import cont from '../../images/Assets/icons/cont.png';
import hom from '../../images/Assets/icons/hom.png';
import * as sbar from 'react-bootstrap';


export const Sbarcontent = [
    {
        icon:
        <sbar.Image
        className="d-block mx-auto mt-2"
        src={hom}
        style={{fontSize:"25px"}}
        alt="First slide"
        fluid
        />,
        title: "Home",
        link: "./Dashboard",
        
    },
    {
        icon:
        <sbar.Image
        className="d-block mx-auto mt-2"
        src={cont}
        style={{fontSize:"25px"}}
        alt="First slide"
        fluid
        />,
        title: "Profile",
        link: "./Profile"
    },
    {
        icon:
        <sbar.Image
        className="d-block mx-auto mt-2"
        src={Loaning}
        style={{fontSize:"25px"}}
        alt="First slide"
        fluid
        />,
        title: "Investment",
        link: "./Shares"
    },
    {
        icon:
        <sbar.Image
        className="d-block mx-auto mt-2"
        src={inv}
        style={{fontSize:"25px"}}
        alt="First slide"
        fluid
        />,
        title: "Shares",
        link: "./Loans"
    },
    
    
] ;
