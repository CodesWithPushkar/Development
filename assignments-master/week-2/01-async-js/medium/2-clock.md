Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)



setInterval(()=>{
  const t = new Date();
  let hours = t.getHours();
  let status = hours>=12 ? "PM": "AM";
  hours = hours % 12 || 12; 
  const currentTime = `${pad(hours)}:${pad(t.getMinutes())}:${pad(t.getSeconds())} ${status}`;
  console.log(currentTime);
},1000)

function pad(unit){
  return (unit.toString().length > 1 ? unit : "0"+unit);
}
