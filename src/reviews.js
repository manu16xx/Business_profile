// rco dis pl mi

let plus=document.getElementsByClassName("plus")[0];
let minus=document.getElementsByClassName("minus")[0];

let dis=document.getElementsByClassName("dis")[0];

let val=dis.innerText;
val=parseInt(val);

plus.addEventListener("click",function(){
    val+=1;
    dis.innerText=val;
})
minus.addEventListener("click",function(){
    val-=1;
    dis.innerHTML=val;
})