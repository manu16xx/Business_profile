import {React,useState,useEffect} from "react"
import "./Gk.css"
export default function useGjoke(){
const [ImgUrl,changeUrl]=useState([]);
console.log(ImgUrl)


// useEffect(()=>{
    
// },Click)
    
function doit(){
    const url=" https://api.imgflip.com/get_memes"

    const param={
       
        method:"GET"
    }
    fetch(url,param).then((res)=>{return res.json()
    }).then((m)=>{
        console.log(m)
        let randomno=Math.floor(Math.random()*100);
        console.log(randomno);
        
        const tt={url:m.data.memes[randomno].url,
    name:m.data.memes[randomno].name
    }
    changeUrl(tt);
    })
}

return (
    
<div className="gk">
    <div className="boredbtn">
        <button onClick={doit}>Bored?</button>
    </div>

    <h1>{ImgUrl.name}</h1>
<img src={ImgUrl.url}></img>
</div>

);

}