## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```



const fs = require('fs');
let newSentence = "";
function reading(){
  return new Promise((resolve)=>{
    fs.readFile("a.txt","utf-8",(err,data)=>{
      console.log(data);
      newSentence = data.replace(/\s+/g, " ");
      resolve();
    })
  })
}

function writing(){
  return new Promise((resolve)=>{
    fs.writeFile("a.txt",newSentence,"utf-8",(err)=>{
      console.log("Successful write");
      resolve();
    })
  })
}

async function process(){
  await reading();
  await writing();
  await reading();
}

process();
