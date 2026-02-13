## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let startTime = Date.now();
let currentTime = 0;

function Takebreak(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve();
    },1000)
  })
}

async function startTimer(){
  while(1){
    currentTime = Date.now() - startTime;
    await Takebreak();
    console.log(Math.floor(currentTime/1000));
  }
}

startTimer();






































































(Hint: setTimeout)