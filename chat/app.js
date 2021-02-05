
var messages = document.getElementById('messages');
var btn = document.getElementById('btn');
var input = document.getElementById('input');
var div=document.getElementById("main");


 let name;
do{
    name=prompt("Enter ur name");
}while(!name)

document.querySelector("h2").textContent= name
input.focus()

var socket = io();
btn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(input.value===''){
        alert("enter any message")
    }else{
    sendmsg(input.value)
    input.value='';
    input.focus();
    div.scrollTop = div.scrollHeight;
    }
    
})

const sendmsg=(message)=>{
    let msg={
        user:name,
        message:message.trim()
    }
    display(msg,'msg-ours')
    socket.emit('sendmsg', msg);
}

socket.on("sendtoall",(msg)=>{
    display(msg, "msg-others")
})

 const display=(msg,type)=>{
     var msgdiv=document.createElement("div")
     let classname=type
     msgdiv.classList.add(classname,"messages")
     var time=new Date().toLocaleTimeString();
     let html=`<div id="messages">
     <div class="name">${msg.user}</div>
     <div class="msg">${msg.message}</div>
     <div class="time">${time}</div>
   </div>`
   msgdiv.innerHTML=html;
   div.appendChild(msgdiv)
   div.scrollTop = div.scrollHeight;
 }
   
    

