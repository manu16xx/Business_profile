
import React from "react"
import './index.css'
function useStatee(){
    const [iv,cv]=React.useState("hello");
function functionhandler(){
const arr=["manu","shubham","people","this","myinteger"];
let no=Math.floor(Math.random()*5);
cv(arr[no])
}

function webp(){
    window.location.href='http://127.0.0.1:5500/my-app/src/reviews.html'
}


return (

<div className="statecon">
    {iv}
    <div className="elm">
    <button onClick={functionhandler}  className="xx">Change State</button>
    <button onClick={webp} className="reviews xx">Your Reviews</button>
    </div>
   
</div> 
    );

}


export default useStatee;