import { useState } from "react";


const App = () => {
  const[state, setState] = useState([false, false, false]);

 function overallLogic(){
    const overallState = [...state];
    const res = overallState.every((ele) => {
      return ele === true;
    })
    return res;
  }

  function Alogic(){
    const newState = [...state];
    newState[0] = !newState[0];
    setState(newState);
  }

  function Blogic(){
    const newState = [...state];
    newState[1] = !newState[1];
    setState(newState);
  }

  function Clogic(){
    const newState = [...state];
    newState[2] = !newState[2];
    setState(newState);
  }

  return <>
    <button onClick={Alogic} style={{
      border: 'none',
      backgroundColor: !state[0] ? 'red' : 'green'
    }}>A</button>
    <button onClick={Blogic} style={{
      border: 'none',
      backgroundColor: !state[1]? 'red' : 'green'
    }}>B</button>
    <button onClick={Clogic} style={{
      border: 'none',
      backgroundColor: !state[2]? 'red' : 'green'
    }}>B</button>
    <div>Output: {overallLogic()? '1' : '0'}</div>
  </>
}

export default App;