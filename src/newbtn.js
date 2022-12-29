
import React from 'react'
import './index.css'
import { FaLinkedin } from "react-icons/fa";
function btn(){
    return (
<div className="cn">
    <button className='mybtn cl'>
        <FaLinkedin/>
        <a className='clbtn' href='https://www.linkedin.com/in/manu-yadav-b44889208/'>
        <h3>LinkedIn</h3>
        </a>
       
    </button>
</div> 
    );
}

export default btn;