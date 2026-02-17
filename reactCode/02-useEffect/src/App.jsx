import { useState, useEffect } from "react"

function App() {  
  const[run, setRun] = useState(true);
  
  useEffect(()=>{
    setInterval(()=>{
      setRun(run => !run)
    },5000)
  },[]);

  return (
      <div>
        <p>Hello I am Counter</p>
        {run && <Counter />}
      </div>
  )

  
  
  function Counter(){
    const [count, setCount] = useState(1);
    useEffect(()=>{
      const id = setInterval(function increaseCount(){
        console.log("mount");
        setCount(count => count+1);
      },1000);

      return () => {
        clearInterval(id)
        console.log("unmount");
      };

    },[])
    
    return(
      <div>
        <h1>{count}</h1>
      </div>
    )
  }

  

    
  }




export default App
