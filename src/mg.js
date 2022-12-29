
import React from 'react'

function mg(){

const [memestate,changestate]=React.useState();
    function req(){

        const url=" https://api.imgflip.com/get_memes"

        const param={
           
            method:"GET"
        }
        let con=document.getElementsByClassName("cnt")[0]
        fetch(url,param).then((res)=>{return res.json()
        }).then((m)=>{
            let randomno=Math.floor(Math.random()*100);
            console.log(randomno)
            changestate(m.data.memes[randomno].url)
            console.log(memestate)
            con.innerHTML=`<img src=${memestate} width="400px" height="400px"></img>`
            // console.log(m)
        })

    }

return (


<div class="boredcon">
        <div class="btnb">
            <button onClick={req} class="gmemes">Generate Memes</button>
        </div>

        <div class="cnt">
        </div>
    </div>    
 

);

}

export default mg;