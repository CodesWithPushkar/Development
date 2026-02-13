## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second

let currentTime = 0;
let startTime = 0;

function startCounter(){
  startTime = Date.now();
  setInterval(()=>{
    currentTime =  Date.now()-startTime;
    currentTime = Math.floor(currentTime/1000);
    console.log(currentTime);
  },1000);
}

startCounter();