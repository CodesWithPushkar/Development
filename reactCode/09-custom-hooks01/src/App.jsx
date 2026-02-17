import { useState } from "react";

// custom hook for counter
function useCounter(){
  const [count, setCount] = useState(0)

  function IncrementCount(){
    setCount(count => count+1);
  }
  
  return {
    count,
    IncrementCount
  }
}

function App() {

  return <div>
    <Counter />
    <Counter />
    <Counter />
  </div>
  
}

function Counter(){
  const {count, IncrementCount} = useCounter();

  return <div>
    <div>
      {count}
    </div>
    <button onClick={IncrementCount}>Increase</button>
  </div>
}



export default App
