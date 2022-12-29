import React from 'react'
import ReactDOM from 'react-dom/clients'
import './index.css'
import Mgen from './megnstyle';
import reportWebVitals from './reportWebVitals';

let mcon=document.getElementsByClassName("mgencontainer")[0];
const root=ReactDOM.createroot(mcon)
root.render(
    <React.StrictMode>
        {console.log("ha bhai aya na")}
    <Mgen />
  </React.StrictMode>
)
reportWebVitals();
let btn=document.getElementsByClassName("gmemes")[0];
btn.addEventListener("click",function (){

    const url=" https://api.imgflip.com/get_memes"

    const param={
       
        method:"GET"
    }
    let con=document.getElementsByClassName("cnt")[0]
    fetch(url,param).then((res)=>{return res.json()
    }).then((m)=>{
        let randomno=Math.floor(Math.random()*100);
        console.log(randomno)
        con.innerHTML=`<img src=${m.data.memes[randomno].url} width="400px" height="400px"></img>`
        // console.log(m)
    })

    
})