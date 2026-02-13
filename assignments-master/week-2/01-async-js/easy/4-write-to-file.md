## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.


const fs = require('fs');

fs.readFile("a.txt","utf-8",(err,data)=>{
  console.log("reading");
  console.log(data);
})

console.log("Hey how are you");

fs.writeFile("a.txt","You're definitely on the right track! Basically, you’ve got it: both reading and writing are asynchronous, and whichever one finishes first depends on factors like the file sizes or how quickly the system handles each task.So in your case, if you're seeing that writing seems to complete before reading even though you started the reading first, it's just the nature of how these asynchronous operations line up. It doesn't necessarily mean writing is always faster than reading; it just means that in this particular run, the write operation completed its callback first.In short, you're not wrong at all. It's just how asynchronous code works: the order you start them doesn't always guarantee the order they finish. If you ever need them strictly in sequence, you'd just nest them or use something like Promises or async/await. But that's the main idea!","utf-8",(err)=>{
  setTimeout(()=>{
    console.log("Written successfully")
  },1000)
  
})

console.log("Hello i am down");