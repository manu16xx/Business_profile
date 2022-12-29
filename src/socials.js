
import { FaLinkedin } from "react-icons/fa";
import {FaTwitter} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"

import './index.css'
function socials(){



return (

<div className="socials">
    <a href="https://github.com/manushresthyadav"><FaGithub size={42} /></a>
<a href="https://www.instagram.com/manuydv_16xx/"><FaInstagram size={42}/></a>
<a href="https://www.linkedin.com/in/manu-yadav-b44889208/"><FaLinkedin size={42}/></a>
<a href="https://twitter.com/ManushresthY"><FaTwitter size={42}/></a>



</div>

);


}

export default socials;