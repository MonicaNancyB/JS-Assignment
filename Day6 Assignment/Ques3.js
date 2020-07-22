const title = document.getElementById('title');
const name = prompt("Enter your name","User");
title.innerText += `Welcome To Our Website ${name}`;
const currenttime = document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    currenttime.innerText = time;
}
setInterval(clock,1000);
function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
